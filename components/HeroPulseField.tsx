"use client";

import { useEffect, useRef } from "react";

/**
 * Hero background animation — a defocused field of vertical light bars
 * (original work, inspired by the "blurred data pulse" aesthetic of modern
 * database landing pages): clusters of short glowing dashes aligned to
 * columns, at three depths of blur, slowly shimmering as segments fade in
 * and out and a brightness wave drifts across the field.
 *
 * Dark theme: white light on black. Light theme: dark ink bars on cream.
 * Respects prefers-reduced-motion (static frame), pauses off-screen and on
 * hidden tabs, reacts live to `data-theme` toggles.
 */

type Dash = {
  /** column x as a fraction of width */
  x: number;
  /** dash centre y as a fraction of height */
  y: number;
  /** dash height as a fraction of height */
  h: number;
  /** depth layer: 0 = crisp, 1 = soft, 2 = deep blur */
  depth: 0 | 1 | 2;
  baseAlpha: number;
  flickerPhase: number;
  flickerSpeed: number;
  /** how strongly this dash blinks on/off vs just breathing */
  toggle: number;
};

// Deterministic pseudo-random so the composition is stable across visits.
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const COLUMN_PITCH = 14; // px between column centres inside a cluster

function buildField(): Dash[] {
  const rnd = mulberry32(20260712);
  const dashes: Dash[] = [];

  // Cluster centres spread across the frame, denser toward the edges so the
  // headline area stays quiet.
  const clusters = Array.from({ length: 16 }, () => ({
    cx: rnd(),
    cy: 0.12 + rnd() * 0.76,
    spreadCols: 4 + Math.floor(rnd() * 10),
    spreadY: 0.08 + rnd() * 0.3,
    density: 0.6 + rnd() * 0.6,
    depthBias: rnd(),
  }));

  for (const c of clusters) {
    for (let col = -c.spreadCols; col <= c.spreadCols; col++) {
      // Column position snapped to a pitch grid (fraction resolved at draw
      // time against real width; store pitch offset in px via marker < 0..1).
      const falloff = 1 - Math.abs(col) / (c.spreadCols + 1);
      const segments = Math.round((1 + rnd() * 4) * c.density * falloff);
      for (let s = 0; s < segments; s++) {
        const depthRoll = rnd() * 0.7 + c.depthBias * 0.3;
        const depth = (depthRoll < 0.35 ? 0 : depthRoll < 0.7 ? 1 : 2) as 0 | 1 | 2;
        dashes.push({
          x: c.cx + (col * COLUMN_PITCH) / 1440, // resolved against a 1440 ref width
          y: c.cy + (rnd() - 0.5) * c.spreadY,
          h: 0.015 + rnd() * rnd() * 0.16,
          depth,
          baseAlpha: (0.25 + rnd() * 0.65) * (depth === 2 ? 0.7 : 1),
          flickerPhase: rnd() * Math.PI * 2,
          flickerSpeed: 0.15 + rnd() * 0.55,
          toggle: rnd(),
        });
      }
    }
  }
  return dashes;
}

/** Pre-render one glowing bar sprite per depth layer for cheap stamping. */
function buildSprites(dark: boolean): HTMLCanvasElement[] {
  const blurs = dark ? [0, 3, 9] : [0, 2, 6];
  return blurs.map((blur) => {
    const w = 28;
    const h = 160;
    const sprite = document.createElement("canvas");
    sprite.width = w;
    sprite.height = h;
    const sctx = sprite.getContext("2d")!;
    const pad = 20;
    const grad = sctx.createLinearGradient(0, pad, 0, h - pad);
    const ink = dark ? "255, 255, 255" : "14, 14, 14";
    grad.addColorStop(0, `rgba(${ink}, 0)`);
    grad.addColorStop(0.18, `rgba(${ink}, 0.9)`);
    grad.addColorStop(0.82, `rgba(${ink}, 0.9)`);
    grad.addColorStop(1, `rgba(${ink}, 0)`);
    sctx.filter = blur ? `blur(${blur}px)` : "none";
    sctx.fillStyle = grad;
    const barW = 8 - (blur ? 0 : 2);
    sctx.fillRect((w - barW) / 2, pad, barW, h - pad * 2);
    return sprite;
  });
}

export function HeroPulseField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dashes = buildField();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let running = false;
    let inView = true;
    let width = 0;
    let height = 0;
    let dark = document.documentElement.dataset.theme !== "light";
    let sprites = buildSprites(dark);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (now: number) => {
      const t = now / 1000;
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = dark ? "lighter" : "source-over";

      // Brightness wave sweeping across the field — a visible band of light
      // travelling left→right, so the motion reads even at a glance.
      const wave = (xNorm: number) => 0.55 + 0.45 * Math.sin(xNorm * Math.PI * 2.4 - t * 0.7);

      for (const d of dashes) {
        // Breathing + frequent on/off toggling for the data-shimmer feel.
        const breath = 0.55 + 0.45 * Math.sin(t * d.flickerSpeed * Math.PI * 2 + d.flickerPhase);
        const gate =
          d.toggle > 0.5
            ? Math.sin(t * (0.6 + d.toggle * 1.5) + d.flickerPhase * 3) > -0.25
              ? 1
              : 0.12
            : 1;
        const alpha = d.baseAlpha * breath * gate * wave(d.x) * (dark ? 1.7 : 1);
        if (alpha <= 0.01) continue;

        const sprite = sprites[d.depth];
        const barH = Math.max(8, d.h * height) + (d.depth === 2 ? 26 : d.depth === 1 ? 12 : 0);
        const barW = (d.depth === 2 ? 26 : d.depth === 1 ? 14 : 9) * (barH / 120 + 0.6);
        ctx.globalAlpha = Math.min(1, alpha);
        ctx.drawImage(sprite, d.x * width - barW / 2, d.y * height - barH / 2, barW, barH);
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    };

    const loop = (now: number) => {
      draw(now);
      if (running) raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reducedMotion || !inView || document.hidden) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    if (reducedMotion) {
      draw(4000);
    } else {
      start();
    }

    const ro = new ResizeObserver(() => {
      resize();
      if (!running) draw(performance.now());
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) start();
        else stop();
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    const mo = new MutationObserver(() => {
      dark = document.documentElement.dataset.theme !== "light";
      sprites = buildSprites(dark);
      if (!running) draw(performance.now());
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
