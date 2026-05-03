"use client";

import { useEffect, useRef } from "react";
import { InlineWidget } from "react-calendly";
import { SITE_BOOKING_URL } from "@/lib/site-contact";

export function InquiryCalendar() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new MutationObserver(() => {
      const iframe = containerRef.current?.querySelector("iframe");
      if (iframe) {
        iframe.setAttribute("scrolling", "no");
        observer.disconnect();
      }
    });
    observer.observe(containerRef.current, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  if (!SITE_BOOKING_URL) return null;

  const url = new URL(SITE_BOOKING_URL);
  url.searchParams.set("hide_gdpr_banner", "1");
  url.searchParams.set("hide_landing_page_details", "1");
  url.searchParams.set("background_color", "0a0a0a");
  url.searchParams.set("text_color", "ffffff");
  url.searchParams.set("primary_color", "6366f1");

  return (
    <div className="mt-6">
      <p className="mb-3 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
        Book a call
      </p>
      <div ref={containerRef} className="relative overflow-hidden rounded-2xl border border-[var(--white-20)]">
        <InlineWidget
          url={url.toString()}
          styles={{ height: "800px", minWidth: "100%" }}
        />
        {/* covers the "Powered by Calendly" bar inside the cross-origin iframe */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-[#0a0a0a]" />
      </div>
    </div>
  );
}
