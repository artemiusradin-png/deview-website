"use client";

import { useEffect, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Shape = "circle" | "square" | "hexagon";

export interface ParticleConfig {
  jumpToRandomPosition?: boolean;
  growAndShrink?: boolean;
  fill?: boolean;
  bounceFromEdges?: boolean;
  shape?: Shape;
  radius?: number;
  randomRadius?: boolean;
  maxRadius?: number;
  minRadius?: number;
  maxVelocity?: number;
}

export interface LogoParticleCanvasProps {
  imageUrl: string;
  hoveredImageUrl?: string;
  totalParticles?: number;
  particlesConfig?: ParticleConfig;
  mouseRange?: number;
}

// ─── Utilities ────────────────────────────────────────────────────────────────

function rnd(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function pdist(a: { x: number; y: number }, b: { x: number; y: number }) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

function getPixelColor(
  data: ImageData,
  w: number,
  h: number,
  pos: { x: number; y: number }
): string {
  const x = Math.max(0, Math.min(w - 1, Math.floor(pos.x)));
  const y = Math.max(0, Math.min(h - 1, Math.floor(pos.y)));
  const i = (x + y * w) * 4;
  const a = data.data[i + 3] ?? 0;
  if (a < 15) return "rgba(0,0,0,0)";
  return `rgba(${data.data[i]},${data.data[i + 1]},${data.data[i + 2]},${(a / 255).toFixed(2)})`;
}

function getImageData(img: HTMLImageElement, w: number, h: number): ImageData {
  const c = document.createElement("canvas");
  const ctx = c.getContext("2d")!;
  c.width = w;
  c.height = h;
  const pad = 36;
  const maxW = w - pad * 2;
  const maxH = h - pad * 2;
  const nw = img.naturalWidth || w;
  const nh = img.naturalHeight || h;
  const scale = Math.min(maxW / nw, maxH / nh);
  const dw = nw * scale;
  const dh = nh * scale;
  ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
  return ctx.getImageData(0, 0, w, h);
}

function loadImg(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// ─── Particle ─────────────────────────────────────────────────────────────────

class Particle {
  ctx: CanvasRenderingContext2D;
  pos: { x: number; y: number };
  vel: { x: number; y: number };
  radius: number;
  minRadius: number;
  color = "rgba(0,0,0,0)";
  shape: Shape;
  edges: { width: number; height: number };
  bounceFromEdges: boolean;
  rotation: number;
  rotInc: number;
  tick: number;
  tickInc: number;

  constructor(opts: {
    ctx: CanvasRenderingContext2D;
    pos: { x: number; y: number };
    radius: number;
    shape: Shape;
    edges: { width: number; height: number };
    bounceFromEdges: boolean;
    maxVelocity: number;
  }) {
    this.ctx = opts.ctx;
    this.pos = { ...opts.pos };
    this.radius = opts.radius;
    this.minRadius = opts.radius;
    this.shape = opts.shape;
    this.edges = opts.edges;
    this.bounceFromEdges = opts.bounceFromEdges;
    const mv = opts.maxVelocity;
    this.vel = {
      x: (Math.random() - 0.5) * mv,
      y: (Math.random() - 0.5) * mv,
    };
    this.rotation = Math.random() * 360;
    this.rotInc = rnd(2, 5);
    this.tick = Math.random() * Math.PI * 2;
    this.tickInc = 0.02 + Math.random() * 0.03;
  }

  draw() {
    const { ctx, pos, radius, rotation, shape } = this;
    ctx.beginPath();
    ctx.save();
    ctx.translate(pos.x, pos.y);
    ctx.rotate((Math.PI / 180) * rotation);
    if (shape === "square") {
      ctx.rect(-radius / 2, -radius / 2, radius, radius);
    } else if (shape === "circle") {
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
    } else {
      // hexagon
      ctx.moveTo(radius, 0);
      for (let s = 0; s < 7; s++) {
        ctx.lineTo(
          radius * Math.cos((s * 2 * Math.PI) / 6),
          radius * Math.sin((s * 2 * Math.PI) / 6)
        );
      }
    }
    ctx.restore();
    ctx.closePath();
  }

  update(cfg: {
    fill: boolean;
    growAndShrink: boolean;
    jumpToRandomPosition: boolean;
    boundsW: number;
    boundsH: number;
  }) {
    if (this.bounceFromEdges) {
      if (
        this.pos.x + this.radius > this.edges.width ||
        this.pos.x - this.radius < 0
      )
        this.vel.x *= -1;
      if (
        this.pos.y + this.radius > this.edges.height ||
        this.pos.y - this.radius < 0
      )
        this.vel.y *= -1;
    } else {
      if (this.pos.x > this.edges.width) this.pos.x = 0;
      else if (this.pos.x < 0) this.pos.x = this.edges.width;
      if (this.pos.y > this.edges.height) this.pos.y = 0;
      else if (this.pos.y < 0) this.pos.y = this.edges.height;
    }

    this.draw();
    if (cfg.fill) {
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
    } else {
      this.ctx.strokeStyle = this.color;
      this.ctx.stroke();
    }

    if (cfg.growAndShrink) {
      this.radius =
        this.minRadius + Math.abs(Math.sin(this.tick)) * (this.minRadius * 0.65);
    }

    if (!cfg.jumpToRandomPosition) {
      this.pos.x += this.vel.x;
      this.pos.y += this.vel.y;
    } else {
      this.pos.x = Math.random() * cfg.boundsW;
      this.pos.y = Math.random() * cfg.boundsH;
    }

    this.rotation += this.rotInc;
    this.tick += this.tickInc;
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export function LogoParticleCanvas({
  imageUrl,
  hoveredImageUrl,
  totalParticles = 1200,
  particlesConfig = {},
  mouseRange = 60,
}: LogoParticleCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = container.offsetWidth;
    const h = container.offsetHeight;
    if (w === 0 || h === 0) return;

    const cfg = {
      jumpToRandomPosition: particlesConfig.jumpToRandomPosition ?? false,
      growAndShrink: particlesConfig.growAndShrink ?? false,
      fill: particlesConfig.fill ?? true,
      bounceFromEdges: particlesConfig.bounceFromEdges ?? true,
      shape: (particlesConfig.shape ?? "circle") as Shape,
      radius: particlesConfig.radius ?? 2,
      randomRadius: particlesConfig.randomRadius ?? false,
      maxRadius: particlesConfig.maxRadius ?? 3,
      minRadius: particlesConfig.minRadius ?? 1,
      maxVelocity: particlesConfig.maxVelocity ?? 6,
    };

    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    canvas.style.cssText =
      "position:absolute;top:0;left:0;width:100%;height:100%;transform:scale(1.02);";
    container.appendChild(canvas);
    const ctx = canvas.getContext("2d")!;

    const particles: Particle[] = [];
    for (let i = 0; i < totalParticles; i++) {
      const r = cfg.randomRadius
        ? rnd(cfg.minRadius, cfg.maxRadius)
        : cfg.radius;
      particles.push(
        new Particle({
          ctx,
          pos: { x: rnd(r, w - r), y: rnd(r, h - r) },
          radius: r,
          shape: cfg.shape,
          edges: { width: w, height: h },
          bounceFromEdges: cfg.bounceFromEdges,
          maxVelocity: cfg.maxVelocity,
        })
      );
    }

    let defaultData: ImageData | null = null;
    let hoveredData: ImageData | null = null;
    let hovered = false;
    let animId = 0;
    const mouse = { x: 0, y: 0 };

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      const current = hovered ? hoveredData : defaultData;
      if (!current) {
        animId = requestAnimationFrame(render);
        return;
      }

      for (const p of particles) {
        if (mouseRange > 0 && hovered && hoveredData && defaultData) {
          p.color =
            pdist(mouse, p.pos) < mouseRange + p.radius
              ? getPixelColor(hoveredData, w, h, p.pos)
              : getPixelColor(defaultData, w, h, p.pos);
        } else {
          p.color = getPixelColor(current, w, h, p.pos);
        }
        p.update({
          fill: cfg.fill,
          growAndShrink: cfg.growAndShrink,
          jumpToRandomPosition: cfg.jumpToRandomPosition,
          boundsW: w,
          boundsH: h,
        });
      }

      animId = requestAnimationFrame(render);
    };

    const onEnter = () => { hovered = true; };
    const onLeave = () => { hovered = false; };
    const onMove = (e: MouseEvent) => {
      mouse.x = e.offsetX;
      mouse.y = e.offsetY;
    };

    canvas.addEventListener("mouseenter", onEnter);
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("mousemove", onMove);

    const effectiveHovered = hoveredImageUrl ?? imageUrl;
    Promise.all([loadImg(imageUrl), loadImg(effectiveHovered)])
      .then(([img1, img2]) => {
        defaultData = getImageData(img1, w, h);
        hoveredData = getImageData(img2, w, h);
        animId = requestAnimationFrame(render);
      })
      .catch(() => {
        animId = requestAnimationFrame(render);
      });

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("mouseenter", onEnter);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("mousemove", onMove);
      if (container.contains(canvas)) container.removeChild(canvas);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUrl, hoveredImageUrl, totalParticles, mouseRange]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
    />
  );
}
