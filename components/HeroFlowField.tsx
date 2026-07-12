"use client";

import { useEffect, useRef } from "react";

/**
 * Hero background animation — glowing "data stream" lines flowing across the
 * viewport (original work, visually inspired by neon-style glow aesthetics).
 *
 * Dark theme: white luminous streams on black. Light theme: dark ink streams
 * on the cream background. Reads `document.documentElement.dataset.theme` and
 * reacts to theme toggles. Respects prefers-reduced-motion (renders a single
 * static frame) and pauses when off-screen or the tab is hidden.
 */

type Stream = {
  /** vertical anchor as a fraction of height */
  base: number;
  /** wave components: amplitude (fraction of height), frequency, phase, speed */
  waves: Array<{ amp: number; freq: number; phase: number; speed: number }>;
  width: number;
  alpha: number;
  /** traveling highlight pulses along the line */
  pulses: Array<{ pos: number; speed: number; size: number }>;
};

// Deterministic pseudo-random so the field looks identical on every visit.
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

function buildStreams(count: number): Stream[] {
  const rnd = mulberry32(20260712);
  const streams: Stream[] = [];
  for (let i = 0; i < count; i++) {
    const base = 0.18 + (0.68 * (i + rnd() * 0.8)) / count;
    streams.push({
      base,
      waves: [
        { amp: 0.02 + rnd() * 0.045, freq: 1.1 + rnd() * 1.4, phase: rnd() * Math.PI * 2, speed: 0.12 + rnd() * 0.2 },
        { amp: 0.008 + rnd() * 0.02, freq: 2.6 + rnd() * 2.2, phase: rnd() * Math.PI * 2, speed: -(0.18 + rnd() * 0.3) },
      ],
      width: 0.7 + rnd() * 1.1,
      alpha: 0.22 + rnd() * 0.5,
      pulses: Array.from({ length: 1 + Math.floor(rnd() * 2) }, () => ({
        pos: rnd(),
        speed: 0.045 + rnd() * 0.075,
        size: 46 + rnd() * 110,
      })),
    });
  }
  return streams;
}

function streamY(s: Stream, xNorm: number, t: number, h: number) {
  // Streams bow toward a loose focal band right of centre, echoing a
  // "branching into one flow" feel without literal branching.
  const focus = Math.sin(Math.PI * xNorm);
  let y = s.base * h + (0.5 - s.base) * h * 0.22 * focus;
  for (const w of s.waves) {
    y += Math.sin(xNorm * Math.PI * 2 * w.freq + w.phase + t * w.speed * Math.PI * 2) * w.amp * h * (0.35 + 0.65 * focus);
  }
  return y;
}

export function HeroFlowField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const streams = buildStreams(9);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let running = false;
    let inView = true;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let dark = document.documentElement.dataset.theme !== "light";

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (now: number) => {
      const t = now / 1000;
      ctx.clearRect(0, 0, width, height);

      const ink = dark ? "255, 255, 255" : "12, 12, 12";
      // Additive blending makes crossings bloom on dark; normal ink on light.
      ctx.globalCompositeOperation = dark ? "lighter" : "source-over";

      const step = Math.max(10, Math.round(width / 110));

      for (const s of streams) {
        // Three passes per stream: halo, body, bright core.
        const passes: Array<[number, number]> = dark
          ? [
              [s.width * 6, s.alpha * 0.05],
              [s.width * 2.2, s.alpha * 0.16],
              [s.width, s.alpha * 0.6],
            ]
          : [
              [s.width * 2.2, s.alpha * 0.1],
              [s.width, s.alpha * 0.42],
            ];

        for (const [lw, alpha] of passes) {
          ctx.beginPath();
          for (let x = -step; x <= width + step; x += step) {
            const y = streamY(s, x / width, t, height);
            if (x === -step) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.lineWidth = lw;
          ctx.strokeStyle = `rgba(${ink}, ${alpha})`;
          ctx.stroke();
        }

        // Traveling pulses — short luminous streaks gliding along the stream.
        for (const p of s.pulses) {
          const head = (p.pos + t * p.speed) % 1.15;
          const grad = ctx.createLinearGradient(
            (head - p.size / width) * width,
            0,
            head * width,
            0,
          );
          grad.addColorStop(0, `rgba(${ink}, 0)`);
          grad.addColorStop(1, `rgba(${ink}, ${Math.min(0.9, s.alpha + 0.35)})`);
          ctx.beginPath();
          const from = Math.max(-step, (head - p.size / width) * width);
          const to = Math.min(width + step, head * width);
          if (to > from) {
            for (let x = from; x <= to; x += step / 2) {
              const y = streamY(s, x / width, t, height);
              if (x === from) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.lineWidth = s.width * (dark ? 2.4 : 1.6);
            ctx.strokeStyle = grad;
            ctx.stroke();
          }
        }
      }
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
      draw(4000); // single static frame
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
