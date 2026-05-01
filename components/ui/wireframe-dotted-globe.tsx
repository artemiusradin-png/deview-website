"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import type { Feature, FeatureCollection, MultiPolygon, Polygon, Position } from "geojson";
import { cn } from "@/lib/utils";

type LandFeature = Feature<Polygon | MultiPolygon>;
type LandCollection = FeatureCollection<Polygon | MultiPolygon>;

interface RotatingEarthProps {
  width?: number;
  height?: number;
  className?: string;
  framed?: boolean;
  interactive?: boolean;
  showControls?: boolean;
}

interface DotData {
  lng: number;
  lat: number;
}

function pointInPolygon(point: [number, number], polygon: Position[]): boolean {
  const [x, y] = point;
  let inside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];

    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }

  return inside;
}

function pointInFeature(point: [number, number], feature: LandFeature): boolean {
  const geometry = feature.geometry;

  if (geometry.type === "Polygon") {
    const [outerRing, ...holes] = geometry.coordinates;
    if (!pointInPolygon(point, outerRing)) return false;
    return !holes.some((hole) => pointInPolygon(point, hole));
  }

  return geometry.coordinates.some(([outerRing, ...holes]) => {
    if (!pointInPolygon(point, outerRing)) return false;
    return !holes.some((hole) => pointInPolygon(point, hole));
  });
}

function generateDotsInPolygon(feature: LandFeature, dotSpacing = 16) {
  const dots: [number, number][] = [];
  const [[minLng, minLat], [maxLng, maxLat]] = d3.geoBounds(feature);
  const stepSize = dotSpacing * 0.08;

  for (let lng = minLng; lng <= maxLng; lng += stepSize) {
    for (let lat = minLat; lat <= maxLat; lat += stepSize) {
      const point: [number, number] = [lng, lat];
      if (pointInFeature(point, feature)) {
        dots.push(point);
      }
    }
  }

  return dots;
}

export default function RotatingEarth({
  width = 720,
  height = 420,
  className = "",
  framed = true,
  interactive = true,
  showControls = true,
}: RotatingEarthProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    let cancelled = false;
    const controller = new AbortController();
    const containerWidth = Math.min(width, window.innerWidth - 40);
    const containerHeight = Math.min(height, window.innerHeight - 120);
    const radius = Math.min(containerWidth, containerHeight) / 2.45;
    const dpr = window.devicePixelRatio || 1;
    const allDots: DotData[] = [];
    let landFeatures: LandCollection | null = null;
    const rotation: [number, number] = [0, 0];
    let autoRotate = true;

    canvas.width = containerWidth * dpr;
    canvas.height = containerHeight * dpr;
    canvas.style.width = `${containerWidth}px`;
    canvas.style.height = `${containerHeight}px`;
    context.scale(dpr, dpr);

    const projection = d3
      .geoOrthographic()
      .scale(radius)
      .translate([containerWidth / 2, containerHeight / 2])
      .clipAngle(90);

    const path = d3.geoPath().projection(projection).context(context);

    const render = () => {
      context.clearRect(0, 0, containerWidth, containerHeight);

      const currentScale = projection.scale();
      const scaleFactor = currentScale / radius;

      context.beginPath();
      context.arc(containerWidth / 2, containerHeight / 2, currentScale, 0, 2 * Math.PI);
      context.fillStyle = "#020203";
      context.fill();
      context.strokeStyle = "rgba(240,240,250,0.85)";
      context.lineWidth = 1.2 * scaleFactor;
      context.stroke();

      if (!landFeatures) return;

      const graticule = d3.geoGraticule();
      context.beginPath();
      path(graticule());
      context.strokeStyle = "rgba(240,240,250,0.22)";
      context.lineWidth = 0.8 * scaleFactor;
      context.stroke();

      context.beginPath();
      landFeatures.features.forEach((feature) => {
        path(feature);
      });
      context.strokeStyle = "rgba(240,240,250,0.72)";
      context.lineWidth = 0.7 * scaleFactor;
      context.stroke();

      allDots.forEach((dot) => {
        const projected = projection([dot.lng, dot.lat]);
        if (!projected) return;
        if (projected[0] < 0 || projected[0] > containerWidth || projected[1] < 0 || projected[1] > containerHeight) {
          return;
        }

        context.beginPath();
        context.arc(projected[0], projected[1], 1.05 * scaleFactor, 0, 2 * Math.PI);
        context.fillStyle = "rgba(240,240,250,0.6)";
        context.fill();
      });
    };

    const loadWorldData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(
          "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json",
          { signal: controller.signal },
        );
        if (!response.ok) throw new Error("Failed to load land data");

        landFeatures = (await response.json()) as LandCollection;
        landFeatures.features.forEach((feature) => {
          generateDotsInPolygon(feature, 16).forEach(([lng, lat]) => {
            allDots.push({ lng, lat });
          });
        });

        if (!cancelled) {
          render();
          setIsLoading(false);
        }
      } catch (err) {
        if (cancelled || (err instanceof DOMException && err.name === "AbortError")) return;
        setError("Failed to load land map data");
        setIsLoading(false);
      }
    };

    const rotationTimer = d3.timer(() => {
      if (!autoRotate) return;
      rotation[0] += 0.5;
      projection.rotate(rotation);
      render();
    });

    const handleMouseDown = (event: MouseEvent) => {
      autoRotate = false;
      const startX = event.clientX;
      const startY = event.clientY;
      const startRotation: [number, number] = [...rotation];

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const dx = moveEvent.clientX - startX;
        const dy = moveEvent.clientY - startY;

        rotation[0] = startRotation[0] + dx * 0.5;
        rotation[1] = Math.max(-90, Math.min(90, startRotation[1] - dy * 0.5));
        projection.rotate(rotation);
        render();
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        window.setTimeout(() => {
          autoRotate = true;
        }, 10);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const scaleFactor = event.deltaY > 0 ? 0.9 : 1.1;
      projection.scale(Math.max(radius * 0.55, Math.min(radius * 2.3, projection.scale() * scaleFactor)));
      render();
    };

    if (interactive) {
      canvas.addEventListener("mousedown", handleMouseDown);
      canvas.addEventListener("wheel", handleWheel, { passive: false });
    }
    void loadWorldData();

    return () => {
      cancelled = true;
      controller.abort();
      rotationTimer.stop();
      if (interactive) {
        canvas.removeEventListener("mousedown", handleMouseDown);
        canvas.removeEventListener("wheel", handleWheel);
      }
    };
  }, [width, height, interactive]);

  if (error) {
    return (
      <div className={cn("flex min-h-[16rem] items-center justify-center border border-[var(--white-20)] bg-[var(--surface)] p-8", className)}>
        <div className="text-center">
          <p className="mb-2 text-sm font-semibold text-red-400">Error loading Earth visualization</p>
          <p className="text-xs text-[var(--text-muted)]">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        framed ? "border border-[var(--white-20)] bg-[var(--background)]" : "pointer-events-none",
        className,
      )}
    >
      <canvas
        ref={canvasRef}
        className="h-auto w-full bg-[var(--background)]"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      {isLoading && framed ? (
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--background)]/70 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
          Loading map
        </div>
      ) : null}
      {showControls ? (
        <div className="absolute bottom-3 left-3 border border-[var(--white-20)] bg-[var(--black-80)] px-2 py-1 text-[0.58rem] uppercase tracking-[0.14em] text-[var(--text-muted)]">
          Drag to rotate / scroll to zoom
        </div>
      ) : null}
    </div>
  );
}
