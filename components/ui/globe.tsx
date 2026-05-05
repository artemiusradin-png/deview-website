"use client";

import createGlobe, { COBEOptions } from "cobe";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// ── Office data ──────────────────────────────────────────────────────────────
interface OfficeMarker {
  id: string;
  location: [number, number]; // [lat, lng]
  city: string;
  region: string;
  role: string;
  representative: string;
  email: string;
}

export const OFFICES: OfficeMarker[] = [
  {
    id: "hong-kong",
    location: [22.3193, 114.1694],
    city: "Hong Kong",
    region: "Asia-Pacific",
    role: "Headquarters",
    representative: "DeView Core Team",
    email: "hello@deview.ai",
  },
  {
    id: "stuttgart",
    location: [48.7758, 9.1829],
    city: "Stuttgart",
    region: "DACH Region",
    role: "Regional Representative",
    representative: "DACH Partner",
    email: "dach@deview.ai",
  },
  {
    id: "vancouver",
    location: [49.2827, -123.1207],
    city: "Vancouver",
    region: "North America",
    role: "Regional Representative",
    representative: "North America Partner",
    email: "northamerica@deview.ai",
  },
  {
    id: "edinburgh",
    location: [55.9533, -3.1883],
    city: "Edinburgh",
    region: "United Kingdom",
    role: "Regional Representative",
    representative: "UK Partner",
    email: "uk@deview.ai",
  },
];

// ── Globe WebGL config ───────────────────────────────────────────────────────
const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0.55,
  theta: 0.22,
  dark: 1,
  diffuse: 0.45,
  mapSamples: 20000,
  mapBrightness: 5.5,
  mapBaseBrightness: 0.08,
  baseColor: [0.05, 0.06, 0.11],
  markerColor: [0.5, 0.72, 1],
  glowColor: [0.1, 0.2, 0.5],
  markerElevation: 0,
  markers: OFFICES.map((office) => ({
    id: office.id,
    location: office.location,
    size: 0.018,
  })),
};

// Overrides applied in light theme — greyscale planet
const GLOBE_LIGHT_OVERRIDES: Partial<COBEOptions> = {
  dark: 0,
  diffuse: 1.6,
  mapBrightness: 3.8,
  mapBaseBrightness: 0.22,
  baseColor: [0.54, 0.55, 0.57],
  markerColor: [0.1, 0.1, 0.12],
  glowColor: [0.72, 0.72, 0.74],
};

const ROTATION_SPEED = 0.006;               // radians per frame (~2× faster)

type MarkerLabelStyle = CSSProperties & {
  "--marker-x": string;
  "--marker-y": string;
  "--marker-visible": number;
};

const LABEL_OFFSETS: Record<string, string> = {
  "hong-kong": "translate(var(--globe-label-offset, 4rem), -50%)",
  stuttgart: "translate(var(--globe-label-offset, 4rem), -50%)",
  vancouver: "translate(var(--globe-label-offset, 4rem), -50%)",
  edinburgh: "translate(var(--globe-label-offset, 4rem), -50%)",
};

function projectOfficeMarker(
  [lat, lng]: [number, number],
  phi: number,
  theta: number,
  size: number,
  config: COBEOptions,
) {
  const latRad = (lat * Math.PI) / 180;
  const lngRad = (lng * Math.PI) / 180 - Math.PI;
  const cosLat = Math.cos(latRad);
  const point: [number, number, number] = [
    -cosLat * Math.cos(lngRad),
    Math.sin(latRad),
    cosLat * Math.sin(lngRad),
  ];
  const markerRadius = 0.8 + (config.markerElevation ?? GLOBE_CONFIG.markerElevation ?? 0);
  const scaledPoint: [number, number, number] = [
    point[0] * markerRadius,
    point[1] * markerRadius,
    point[2] * markerRadius,
  ];
  const cosTheta = Math.cos(theta);
  const sinTheta = Math.sin(theta);
  const cosPhi = Math.cos(phi);
  const sinPhi = Math.sin(phi);
  const rotatedX = cosPhi * scaledPoint[0] + sinPhi * scaledPoint[2];
  const rotatedY = sinPhi * sinTheta * scaledPoint[0]
    + cosTheta * scaledPoint[1]
    - cosPhi * sinTheta * scaledPoint[2];
  const depth = -sinPhi * cosTheta * scaledPoint[0]
    + sinTheta * scaledPoint[1]
    + cosPhi * cosTheta * scaledPoint[2];
  const scale = config.scale ?? GLOBE_CONFIG.scale ?? 1;
  const offset = config.offset ?? GLOBE_CONFIG.offset ?? [0, 0];
  const x = ((rotatedX * scale + offset[0] * scale + 1) / 2) * size;
  const y = ((-rotatedY * scale + offset[1] * scale + 1) / 2) * size;
  const onFront = depth >= 0 || rotatedX * rotatedX + rotatedY * rotatedY >= 0.64;

  return {
    x,
    y,
    visible: onFront ? 1 : 0,
  };
}

function CityInfoBox({
  office,
  labelRef,
}: {
  office: OfficeMarker;
  labelRef: (node: HTMLDivElement | null) => void;
}) {
  return (
    <div
      ref={labelRef}
      className="globe-city-box pointer-events-none absolute z-[80] w-36 border border-[var(--white-20)] bg-[color-mix(in_srgb,var(--background)_86%,transparent)] px-2.5 py-2 text-left shadow-xl backdrop-blur-md transition-[opacity,filter,transform] duration-150"
      style={{
        "--marker-x": "0px",
        "--marker-y": "0px",
        "--marker-visible": 0,
        transform: LABEL_OFFSETS[office.id],
      } as MarkerLabelStyle}
    >
      <p className="mb-1 text-[0.52rem] uppercase tracking-[0.14em] text-[var(--text-muted)]">
        {office.region}
      </p>
      <p className="text-[0.72rem] font-semibold leading-tight text-[var(--white-100)]">
        {office.city}
      </p>
      <p className="mt-1 text-[0.58rem] uppercase tracking-[0.1em] text-[var(--white-60)]">
        {office.role}
      </p>
    </div>
  );
}

// ── Main Globe component ─────────────────────────────────────────────────────
export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const phi = useRef(0.55);
  const width = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const pointerRotation = useRef(0);
  const themeRef = useRef<"dark" | "light">("dark");
  const labelRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      pointerRotation.current = delta / 200;
    }
  };

  const onResize = useCallback(() => {
    if (canvasRef.current) width.current = canvasRef.current.offsetWidth;
  }, []);

  useEffect(() => {
    themeRef.current = (document.documentElement.dataset.theme as "dark" | "light") || "dark";
    const obs = new MutationObserver(() => {
      themeRef.current = (document.documentElement.dataset.theme as "dark" | "light") || "dark";
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width.current * 2,
      height: width.current * 2,
    });

    let frame = 0;
    const animate = () => {
      if (pointerInteracting.current === null) phi.current += ROTATION_SPEED;
      const currentPhi = phi.current + pointerRotation.current;
      const size = width.current;

      const themeColors = themeRef.current === "light"
        ? GLOBE_LIGHT_OVERRIDES
        : {
            dark: config.dark ?? 1,
            diffuse: config.diffuse ?? 0.45,
            mapBrightness: config.mapBrightness ?? 5.5,
            mapBaseBrightness: config.mapBaseBrightness ?? 0.08,
            baseColor: config.baseColor,
            markerColor: config.markerColor,
            glowColor: config.glowColor,
          };
      globe.update({
        phi: currentPhi,
        width: size * 2,
        height: size * 2,
        ...themeColors,
      });

      if (size > 0) {
        for (const office of OFFICES) {
          const label = labelRefs.current[office.id];
          if (!label) continue;

          const projected = projectOfficeMarker(
            office.location,
            currentPhi,
            config.theta ?? GLOBE_CONFIG.theta ?? 0,
            size,
            config,
          );
          label.style.setProperty("--marker-x", `${projected.x}px`);
          label.style.setProperty("--marker-y", `${projected.y}px`);
          label.style.setProperty("--marker-visible", String(projected.visible));
        }
      }

      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    setTimeout(() => { if (canvasRef.current) canvasRef.current.style.opacity = "1"; });

    return () => {
      cancelAnimationFrame(frame);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={cn("absolute inset-0 mx-auto aspect-square w-full max-w-[600px] overflow-visible", className)}
    >
      {/* Globe canvas */}
      <canvas
        className="size-full opacity-0 transition-opacity duration-700 [contain:layout_paint_size]"
        ref={canvasRef}
        onPointerDown={(e) => updatePointerInteraction(e.clientX - pointerInteractionMovement.current)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
      {OFFICES.map((office) => (
        <CityInfoBox
          key={office.id}
          office={office}
          labelRef={(node) => {
            labelRefs.current[office.id] = node;
          }}
        />
      ))}
    </div>
  );
}
