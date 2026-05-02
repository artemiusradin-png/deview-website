"use client";

import React from "react";
import { SITE_BOOKING_URL } from "@/lib/site-contact";

const DAY_NAMES = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export function InquiryCalendar() {
  const today = new Date();
  const todayDate = today.getDate();
  const currentMonth = today.toLocaleString("default", { month: "long" });
  const currentYear = today.getFullYear();
  const firstDayOfWeek = new Date(currentYear, today.getMonth(), 1).getDay();
  const daysInMonth = new Date(currentYear, today.getMonth() + 1, 0).getDate();

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
                return (
                  <div
                    key={day}
                    className={`flex h-7 w-full items-center justify-center rounded-lg text-xs font-medium ${
                      day === todayDate
                        ? "bg-indigo-500 text-white"
                        : "text-[var(--white-60)]"
                    }`}
                  >
                    {day}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {SITE_BOOKING_URL && (
        <a
          href={SITE_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)] underline underline-offset-4 transition-colors hover:text-[var(--white-90)]"
        >
          Book a 30-min call
        </a>
      )}
    </div>
  );
}
