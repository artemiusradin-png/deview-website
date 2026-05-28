"use client";

import { useState } from "react";

const DAY_NAMES = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

type Slot = { time: string };
type Step = "calendar" | "slots" | "form" | "confirmed";

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function formatDateLabel(iso: string): string {
  return new Date(iso).toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" });
}

export function InquiryCalendar() {
  const today = new Date();
  const todayKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  // Month being viewed (defaults to current). Bounded: cannot navigate past current month.
  const [viewYear, setViewYear] = useState<number>(today.getFullYear());
  const [viewMonthIndex, setViewMonthIndex] = useState<number>(today.getMonth());

  const viewMonthName = new Date(viewYear, viewMonthIndex, 1).toLocaleString("default", { month: "long" });
  const firstDayOfWeek = new Date(viewYear, viewMonthIndex, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonthIndex + 1, 0).getDate();

  const monthsAheadFromCurrent =
    (viewYear - today.getFullYear()) * 12 + (viewMonthIndex - today.getMonth());
  const canGoPrev = monthsAheadFromCurrent > 0;
  const canGoNext = monthsAheadFromCurrent < 11; // cap at 12 months out (Cal.com default)

  const [step, setStep] = useState<Step>("calendar");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [slots, setSlots] = useState<Slot[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<{ start: string; meetingUrl: string } | null>(null);

  async function handleDayClick(day: number) {
    const pad = (n: number) => String(n).padStart(2, "0");
    const date = `${viewYear}-${pad(viewMonthIndex + 1)}-${pad(day)}`;
    setSelectedDate(date);
    setSlots([]);
    setSelectedSlot("");
    setError(null);
    setSlotsLoading(true);
    setStep("slots");

    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const res = await fetch(`/api/cal/slots?date=${date}&timeZone=${encodeURIComponent(tz)}`);
    const data = await res.json() as { slots: Slot[] };
    setSlots(data.slots ?? []);
    setSlotsLoading(false);
  }

  function shiftMonth(delta: number) {
    let m = viewMonthIndex + delta;
    let y = viewYear;
    while (m < 0) { m += 12; y -= 1; }
    while (m > 11) { m -= 12; y += 1; }
    setViewYear(y);
    setViewMonthIndex(m);
    if (step !== "calendar") setStep("calendar");
    setSelectedDate("");
    setSlots([]);
  }

  async function handleBook() {
    if (!name.trim() || !email.trim()) return;
    setSubmitting(true);
    setError(null);

    let data: { uid?: string; start?: string; meetingUrl?: string; error?: string } = {};
    try {
      const res = await fetch("/api/cal/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          start: selectedSlot,
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }),
      });
      data = await res.json();
    } catch {
      setSubmitting(false);
      setError("Something went wrong. Please try again.");
      return;
    }

    setSubmitting(false);

    if (data.error) {
      setError(data.error ?? "Something went wrong. Please try again.");
      return;
    }

    setConfirmation({ start: data.start!, meetingUrl: data.meetingUrl! });
    setStep("confirmed");
  }

  function reset() {
    setStep("calendar");
    setSelectedDate("");
    setSlots([]);
    setSelectedSlot("");
    setName("");
    setEmail("");
    setError(null);
    setConfirmation(null);
  }

  return (
    <div className="mt-6 space-y-3">

      {/* ── Calendar grid ── */}
      <div className="rounded-2xl border border-[var(--white-20)] p-2">
        <div
          className="rounded-xl border border-[var(--white-10)] p-3"
          style={{ boxShadow: "0px 2px 1.5px 0px rgba(165,174,184,0.12) inset" }}
        >
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => shiftMonth(-1)}
              disabled={!canGoPrev}
              aria-label="Previous month"
              className="flex h-6 w-6 items-center justify-center rounded-md text-[var(--white-60)] transition-colors hover:bg-[var(--white-10)] hover:text-[var(--white-90)] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
            >
              ‹
            </button>
            <p className="text-sm font-medium text-[var(--white-90)] min-w-[7.5rem] text-center">
              {viewMonthName}, {viewYear}
            </p>
            <button
              type="button"
              onClick={() => shiftMonth(1)}
              disabled={!canGoNext}
              aria-label="Next month"
              className="flex h-6 w-6 items-center justify-center rounded-md text-[var(--white-60)] transition-colors hover:bg-[var(--white-10)] hover:text-[var(--white-90)] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
            >
              ›
            </button>
            <span className="h-1 w-1 rounded-full bg-[var(--white-40)]" />
            <p className="text-xs text-[var(--white-40)]">30 min call</p>
          </div>
          <div className="mt-3 grid grid-cols-7 gap-1">
            {DAY_NAMES.map((day) => (
              <div key={day} className="flex h-7 w-full items-center justify-center">
                <span className="text-[0.5rem] font-medium text-[var(--white-30)]">{day}</span>
              </div>
            ))}
            {Array(firstDayOfWeek).fill(null).map((_, i) => (
              <div key={`empty-${i}`} className="h-7 w-full" />
            ))}
            {Array(daysInMonth).fill(null).map((_, i) => {
              const day = i + 1;
              const pad = (n: number) => String(n).padStart(2, "0");
              const dateStr = `${viewYear}-${pad(viewMonthIndex + 1)}-${pad(day)}`;
              const isPast = dateStr < todayKey;
              const isSelected = dateStr === selectedDate;
              const isToday = dateStr === todayKey;
              return (
                <button
                  key={day}
                  type="button"
                  disabled={isPast}
                  onClick={() => handleDayClick(day)}
                  className={`flex h-7 w-full items-center justify-center rounded-lg text-xs font-medium transition-colors ${
                    isSelected
                      ? "bg-indigo-500 text-white"
                      : isToday
                      ? "bg-indigo-500/30 text-indigo-300 hover:bg-indigo-500 hover:text-white"
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

      {/* ── Time slots ── */}
      {step === "slots" && (
        <div className="rounded-xl border border-[var(--white-20)] p-3">
          <p className="mb-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
            {formatDateLabel(`${selectedDate}T12:00:00`)}
          </p>
          {slotsLoading ? (
            <p className="text-xs text-[var(--white-40)]">Loading slots…</p>
          ) : slots.length === 0 ? (
            <p className="text-xs text-[var(--white-40)]">No availability on this day.</p>
          ) : (
            <div className="grid grid-cols-3 gap-1.5">
              {slots.map((slot) => (
                <button
                  key={slot.time}
                  type="button"
                  onClick={() => { setSelectedSlot(slot.time); setStep("form"); setError(null); }}
                  className="rounded-lg border border-[var(--white-20)] px-2 py-1.5 text-xs text-[var(--white-70)] transition-colors hover:border-indigo-500 hover:bg-indigo-500/10 hover:text-[var(--white-90)]"
                >
                  {formatTime(slot.time)}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Booking form ── */}
      {step === "form" && (
        <div className="rounded-xl border border-[var(--white-20)] p-3 space-y-3">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
              {formatDateLabel(selectedSlot)} · {formatTime(selectedSlot)}
            </p>
            <button
              type="button"
              onClick={() => setStep("slots")}
              className="mt-0.5 text-[0.65rem] text-[var(--white-40)] underline underline-offset-2 hover:text-[var(--white-70)]"
            >
              Change time
            </button>
          </div>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-[var(--white-20)] bg-[var(--surface-elevated)] px-3 py-2 text-sm text-[var(--white-90)] outline-none placeholder:text-[var(--white-30)] focus:border-[var(--white-60)] rounded-lg"
          />
          <input
            type="email"
            placeholder="Work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-[var(--white-20)] bg-[var(--surface-elevated)] px-3 py-2 text-sm text-[var(--white-90)] outline-none placeholder:text-[var(--white-30)] focus:border-[var(--white-60)] rounded-lg"
          />
          {error && <p className="text-xs text-red-400">{error}</p>}
          <button
            type="button"
            disabled={submitting || !name.trim() || !email.trim()}
            onClick={handleBook}
            className="w-full rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "Booking…" : "Confirm booking"}
          </button>
        </div>
      )}

      {/* ── Confirmation ── */}
      {step === "confirmed" && confirmation && (
        <div className="rounded-xl border border-indigo-500/40 bg-indigo-500/10 p-3 space-y-2">
          <p className="text-sm font-medium text-[var(--white-90)]">You&apos;re booked</p>
          <p className="text-xs text-[var(--white-60)]">{formatDateLabel(confirmation.start)} · {formatTime(confirmation.start)}</p>
          {confirmation.meetingUrl && (
            <a
              href={confirmation.meetingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs text-indigo-400 underline underline-offset-2 hover:text-indigo-300"
            >
              Join meeting link
            </a>
          )}
          <button
            type="button"
            onClick={reset}
            className="block text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-40)] hover:text-[var(--white-70)]"
          >
            Book another
          </button>
        </div>
      )}

    </div>
  );
}
