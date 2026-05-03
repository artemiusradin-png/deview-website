"use client";

import { useCurrentFrame } from "remotion";

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
  background?: string;
  fadeColor?: string;
  speed?: number;
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
  background = "#050505",
  fadeColor = "#050505",
  speed = 1,
  itemWidth = 320,
  logoHeight = 90,
}: PerspectiveMarqueeProps) {
  const frame = useCurrentFrame() * speed;
  const totalWidth = logos.length * itemWidth;
  const offset = -((frame * pixelsPerFrame) % totalWidth);
  const rendered = [...logos, ...logos, ...logos];

  const getFilter = (name: string) => {
    if (name === "Grand Finance Group") {
      return isDark ? "none" : "invert(1)";
    }
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
        position: "absolute",
        inset: 0,
        background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        perspective: `${perspective}px`,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            transform: `translateX(${offset}px)`,
          }}
        >
          {rendered.map((logo, i) => {
            const itemCenter = i * itemWidth + itemWidth / 2 + offset;
            const norm = (itemCenter - 640) / 640;
            const distance = Math.min(1, Math.abs(norm));
            const blurPx = distance * 4;
            const opacity = 1 - distance * 0.35;

            return (
              <div
                key={`${logo.name}-${i}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: itemWidth,
                  height: logoHeight + 48,
                  filter: `blur(${blurPx}px)`,
                  opacity,
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
                        filter: getFilter(logo.name),
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
                      filter: getFilter(logo.name),
                      objectFit: "contain",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Left/right fade */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `linear-gradient(90deg, ${fadeColor} 0%, transparent 15%, transparent 85%, ${fadeColor} 100%)`,
        }}
      />
      {/* Top/bottom fade */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `linear-gradient(180deg, ${fadeColor} 0%, transparent 22%, transparent 78%, ${fadeColor} 100%)`,
        }}
      />
    </div>
  );
}
