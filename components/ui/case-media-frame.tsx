"use client";

import type { ReactNode } from "react";

/**
 * Neon-style decorative frame for case-study demo media: a soft gradient glow
 * behind, a halftone-dot border, and a browser-window chrome bar above the
 * media. Purely presentational — pass the <video> (or image) as children.
 */
export function CaseMediaFrame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="relative">
      {/* Soft gradient glow bleeding out from behind the frame. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[1.6rem] opacity-70 blur-2xl"
        style={{
          background:
            "radial-gradient(55% 55% at 22% 12%, rgba(255,201,51,0.22), transparent 70%), radial-gradient(55% 55% at 88% 96%, rgba(72,187,150,0.16), transparent 70%)",
        }}
      />

      {/* Halftone-dot frame around the window. */}
      <div className="relative rounded-xl border border-[var(--white-10)] bg-[var(--surface)] p-2.5 sm:p-3.5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-xl"
          style={{
            backgroundImage: "radial-gradient(var(--white-20) 1px, transparent 1.5px)",
            backgroundSize: "7px 7px",
            maskImage: "radial-gradient(130% 130% at 50% 50%, #000 48%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(130% 130% at 50% 50%, #000 48%, transparent 100%)",
          }}
        />

        {/* Inner window: chrome bar + the media. */}
        <div className="relative overflow-hidden rounded-lg border border-[var(--white-20)] bg-black">
          <div className="flex items-center gap-3 border-b border-[var(--white-10)] bg-[var(--surface)] px-3.5 py-2.5">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--white-20)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--white-20)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--white-20)]" />
            </span>
            <span className="truncate text-[0.7rem] tracking-wide text-[var(--white-60)]">{label}</span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
