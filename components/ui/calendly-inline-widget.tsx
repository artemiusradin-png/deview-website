"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { SITE_BOOKING_URL } from "@/lib/site-contact";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement; prefill?: object }) => void;
    };
  }
}

function buildUrl(): string {
  const dark = document.documentElement.dataset.theme !== "light";
  const bg = dark ? "0d0f1c" : "f3eee2";
  const text = dark ? "f0f0fa" : "0c0c0c";
  const accent = dark ? "80b8ff" : "1a3380";
  return `${SITE_BOOKING_URL}?background_color=${bg}&text_color=${text}&primary_color=${accent}`;
}

/** Embeds the DeView Calendly booking page (30-min call) inline on the contact page. */
export function CalendlyInlineWidget() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const render = () => {
    const container = containerRef.current;
    if (!container || !window.Calendly) return;
    container.innerHTML = "";
    window.Calendly.initInlineWidget({ url: buildUrl(), parentElement: container });
  };

  // Re-render with matching colors if the visitor toggles theme.
  useEffect(() => {
    const mo = new MutationObserver(render);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => mo.disconnect();
  }, []);

  if (!SITE_BOOKING_URL) return null;

  return (
    <>
      <Script
        id="calendly-widget-script"
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onReady={render}
      />
      <div
        ref={containerRef}
        className="calendly-inline-widget mt-6 min-h-[640px] w-full overflow-hidden rounded-2xl border border-[var(--white-20)]"
      >
        <div className="flex h-[640px] items-center justify-center text-xs uppercase tracking-[0.2em] text-[var(--white-40)]">
          Loading calendar…
        </div>
      </div>
    </>
  );
}
