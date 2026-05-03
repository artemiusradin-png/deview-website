"use client";

import { InlineWidget } from "react-calendly";
import { SITE_BOOKING_URL } from "@/lib/site-contact";

export function InquiryCalendar() {
  if (!SITE_BOOKING_URL) return null;

  return (
    <div className="mt-6">
      <p className="mb-3 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
        Book a call
      </p>
      <div className="overflow-hidden rounded-2xl border border-[var(--white-20)]">
        <InlineWidget
          url={SITE_BOOKING_URL}
          styles={{ height: "700px", minWidth: "100%", overflow: "hidden" }}
          pageSettings={{
            backgroundColor: "0a0a0a",
            hideEventTypeDetails: false,
            hideLandingPageDetails: true,
            primaryColor: "6366f1",
            textColor: "ffffff",
            hideGdprBanner: true,
          }}
        />
      </div>
    </div>
  );
}
