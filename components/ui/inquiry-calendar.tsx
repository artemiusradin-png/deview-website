"use client";

import { useState } from "react";
import { PopupModal } from "react-calendly";
import { SITE_BOOKING_URL } from "@/lib/site-contact";

const DAY_NAMES = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function buildUrl(day: number, month: number, year: number): string {
  const url = new URL(SITE_BOOKING_URL);
  const pad = (n: number) => String(n).padStart(2, "0");
  const dateStr = `${year}-${pad(month + 1)}-${pad(day)}`;
  url.searchParams.set("month", dateStr.slice(0, 7));
  url.searchParams.set("date", dateStr);
  url.searchParams.set("hide_gdpr_banner", "1");
  url.searchParams.set("hide_landing_page_details", "1");
  url.searchParams.set("background_color", "0a0a0a");
  url.searchParams.set("text_color", "ffffff");
  url.searchParams.set("primary_color", "6366f1");
  return url.toString();
}

export function InquiryCalendar() {
  const [popupUrl, setPopupUrl] = useState<string | null>(null);

  const today = new Date();
  const todayDate = today.getDate();
  const currentMonth = today.toLocaleString("default", { month: "long" });
  const currentYear = today.getFullYear();
  const currentMonthIndex = today.getMonth();
  const firstDayOfWeek = new Date(currentYear, currentMonthIndex, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonthIndex + 1, 0).getDate();

  if (!SITE_BOOKING_URL) return null;

  return (
    <div className="mt-6 space-y-3">
      <div className="rounded-2xl border border-[var(--white-20)] p-2">
        <div
          className="rounded-xl border border-[var(--white-10)] p-3"
          style={{ boxShadow: "0px 2px 1.5px 0px rgba(165,174,184,0.12) inset" }}
        >
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-[var(--white-90)]">
              {currentMonth}, {currentYear}
            </p>
            <span className="h-1 w-1 rounded-full bg-[var(--white-40)]" />
            <p className="text-xs text-[var(--white-40)]">30 min call</p>
          </div>
          <div className="mt-3 grid grid-cols-7 gap-1">
            {DAY_NAMES.map((day) => (
              <div key={day} className="flex h-7 w-full items-center justify-center">
                <span className="text-[0.5rem] font-medium text-[var(--white-30)]">{day}</span>
              </div>
            ))}
            {Array(firstDayOfWeek)
              .fill(null)
              .map((_, i) => (
                <div key={`empty-${i}`} className="h-7 w-full" />
              ))}
            {Array(daysInMonth)
              .fill(null)
              .map((_, i) => {
                const day = i + 1;
                const isPast = day < todayDate;
                const isToday = day === todayDate;
                return (
                  <button
                    key={day}
                    type="button"
                    disabled={isPast}
                    onClick={() =>
                      setPopupUrl(buildUrl(day, currentMonthIndex, currentYear))
                    }
                    className={`flex h-7 w-full items-center justify-center rounded-lg text-xs font-medium transition-colors ${
                      isToday
                        ? "bg-indigo-500 text-white hover:bg-indigo-400"
                        : isPast
                        ? "cursor-default text-[var(--white-20)]"
                        : "cursor-pointer text-[var(--white-60)] hover:bg-[var(--white-10)] hover:text-[var(--white-90)]"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
          </div>
        </div>
      </div>

      {popupUrl && (
        <PopupModal
          url={popupUrl}
          open
          onModalClose={() => setPopupUrl(null)}
          rootElement={document.body}
        />
      )}
    </div>
  );
}
