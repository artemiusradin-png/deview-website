"use client";

import { useRef } from "react";
import Script from "next/script";
import { SITE_BOOKING_URL } from "@/lib/site-contact";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: object;
      }) => void;
    };
  }
}

function buildUrl(): string {
  return `${SITE_BOOKING_URL}?background_color=fffdf7&text_color=171207&primary_color=806000`;
}

/** Embeds the DeView Calendly booking page (30-min call) inline on the contact page. */
export function CalendlyInlineWidget() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const render = () => {
    const container = containerRef.current;
    if (!container || !window.Calendly) return;
    container.innerHTML = "";
    window.Calendly.initInlineWidget({
      url: buildUrl(),
      parentElement: container,
    });
  };

  if (!SITE_BOOKING_URL) return null;

  return (
    <>
      <Script
        id="calendly-widget-script"
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onReady={render}
      />
      {/* Fixed height: Calendly's iframe is height 100%, so a min-height alone collapses it to 150px.
          Not the "calendly-inline-widget" class: Calendly auto-initialises that class from data-url
          and crashes without one, which left the live page stuck on "Loading calendar…". */}
      <div
        ref={containerRef}
        className="booking-calendar mt-6 h-[700px] w-full overflow-hidden rounded-2xl border border-[var(--white-20)]"
      >
        <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.2em] text-[var(--white-40)]">
          Loading calendar…
        </div>
      </div>
    </>
  );
}
