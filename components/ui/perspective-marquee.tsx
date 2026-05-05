"use client";

import { useEffect, useRef } from "react";

export interface LogoItem {
  name: string;
  src: string;
  width: number;
  height: number;
}

export interface PerspectiveMarqueeProps {
  logos: LogoItem[];
  isDark?: boolean;
  pixelsPerFrame?: number;
  rotateY?: number;
  rotateX?: number;
  perspective?: number;
  itemWidth?: number;
  logoHeight?: number;
}

export function PerspectiveMarquee({
  logos,
  isDark = true,
  pixelsPerFrame = 1.8,
  rotateY = -28,
  rotateX = 8,
  perspective = 1200,
  itemWidth = 500,
  logoHeight = 100,
}: PerspectiveMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rendered = [...logos, ...logos, ...logos, ...logos, ...logos];

  useEffect(() => {
    let offset = 0;
    let raf: number;
    const totalWidth = logos.length * itemWidth;

    const animate = () => {
      offset += pixelsPerFrame;
      if (offset >= totalWidth) offset -= totalWidth;

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${-offset}px)`;
      }

      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const center = trackRef.current?.parentElement?.offsetWidth ?? 1280;
        const itemCenter = i * itemWidth + itemWidth / 2 - offset;
        const norm = (itemCenter - center / 2) / (center / 2);
        const dist = Math.min(1, Math.abs(norm));
        el.style.filter = `blur(${dist * 5}px)`;
        el.style.opacity = String(1 - dist * 0.4);
      });

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [logos, itemWidth, pixelsPerFrame]);

  const imgFilter = (name: string) => {
    if (name === "Lending Platform") return isDark ? "none" : "invert(1)";
    return isDark
      ? "grayscale(1) brightness(0) invert(1)"
      : "grayscale(1) brightness(0)";
  };

  const wordmarkColor = isDark
    ? "rgba(240,240,250,0.94)"
    : "rgba(19,31,47,0.94)";

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "var(--background)",
        overflow: "hidden",
        perspective: `${perspective}px`,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          ref={trackRef}
          style={{ display: "flex", flexWrap: "nowrap", alignItems: "center" }}
        >
          {rendered.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              ref={(el) => { itemRefs.current[i] = el; }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: itemWidth,
                height: logoHeight + 48,
                flexShrink: 0,
              }}
            >
              {logo.name === "Nextair" ? (
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt=""
                    style={{
                      height: logoHeight * 1.25,
                      width: "auto",
                      filter: imgFilter(logo.name),
                      objectFit: "contain",
                    }}
                  />
                  <span
                    style={{
                      color: wordmarkColor,
                      fontSize: logoHeight * 0.6,
                      fontStyle: "italic",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      lineHeight: 1,
                    }}
                  >
                    NEXTAIR
                  </span>
                </div>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={logo.src}
                  alt=""
                  style={{
                    height: logoHeight,
                    maxWidth: itemWidth - 40,
                    width: "auto",
                    filter: imgFilter(logo.name),
                    objectFit: "contain",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Edge fades */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(90deg, var(--background) 0%, transparent 15%, transparent 85%, var(--background) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(180deg, var(--background) 0%, transparent 25%, transparent 75%, var(--background) 100%)",
        }}
      />
    </div>
  );
}
