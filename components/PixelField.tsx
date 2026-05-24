"use client";

import { useEffect, useRef } from "react";

/**
 * Site-wide subtle scroll-reactive pixel field.
 * A sparse grid of small pixels (echoing the hero skyline) that parallaxes
 * with scroll and faintly twinkles. Theme-aware, reduced-motion aware,
 * pointer-events: none, blended softly over content.
 */

const CELL = 58; // grid spacing in CSS px
const PIXEL = 2; // pixel square size in CSS px
const PARALLAX = 0.14; // fraction of scroll the field drifts by

// Deterministic hash → [0,1) so pixel placement is stable & seamless on wrap.
function hash(col: number, row: number): number {
  const n = Math.sin(col * 127.1 + row * 311.7) * 43758.5453;
  return n - Math.floor(n);
}

export function PixelField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let theme: "dark" | "light" =
      (document.documentElement.dataset.theme as "dark" | "light") || "dark";

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const themeObserver = new MutationObserver(() => {
      theme = (document.documentElement.dataset.theme as "dark" | "light") || "dark";
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    let frame = 0;
    let lastDraw = 0;

    const draw = (now: number) => {
      // Throttle to ~24fps — refined, not busy, and easy on the CPU.
      if (now - lastDraw < 42) {
        frame = requestAnimationFrame(draw);
        return;
      }
      lastDraw = now;

      ctx.clearRect(0, 0, width, height);

      const scrollY = window.scrollY || window.pageYOffset || 0;
      const drift = scrollY * PARALLAX;
      const offset = drift % CELL;
      const rowBase = Math.floor(drift / CELL);

      const cols = Math.ceil(width / CELL) + 1;
      const rows = Math.ceil(height / CELL) + 1;

      const baseColor = theme === "light" ? "19, 31, 47" : "186, 206, 240";
      const t = reduceMotion ? 0 : now * 0.0006;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const virtualRow = r + rowBase;
          const h1 = hash(c, virtualRow);
          // Sparse — only ~30% of cells carry a pixel.
          if (h1 > 0.3) continue;

          const h2 = hash(virtualRow, c);
          const phase = h2 * Math.PI * 2;
          // Slow twinkle around a faint base alpha.
          const twinkle = reduceMotion ? 0.5 : 0.5 + 0.5 * Math.sin(t + phase);
          const baseAlpha = theme === "light" ? 0.05 : 0.07;
          const alpha = baseAlpha * (0.45 + 0.55 * twinkle);

          const x = c * CELL + (h2 * 6 - 3);
          const y = r * CELL - offset + (h1 * 6 - 3);
          // Occasional brighter "lit" pixel for skyline character.
          const size = h1 < 0.04 ? PIXEL + 1 : PIXEL;

          ctx.fillStyle = `rgba(${baseColor}, ${alpha.toFixed(3)})`;
          ctx.fillRect(x, y, size, size);
        }
      }

      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);

    let resizeRaf = 0;
    const onResize = () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(resize);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(resizeRaf);
      window.removeEventListener("resize", onResize);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pixel-field pointer-events-none fixed inset-0 z-[1]"
    />
  );
}
