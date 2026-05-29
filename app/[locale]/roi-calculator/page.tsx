"use client";

import { useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";
import { useLocaleContext } from "@/lib/i18n/locale-context";

function Slider({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-[0.7rem] uppercase tracking-[0.18em] text-[var(--white-60)]">{label}</label>
        <span className="text-sm text-[var(--white-100)]">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full cursor-pointer accent-[var(--white-80)]"
        style={{ height: "2px" }}
      />
      <div className="flex justify-between text-[0.6rem] text-[var(--white-30)]">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

const HOURLY_RATE = 35;

export default function RoiCalculatorPage() {
  const { dict } = useLocaleContext();

  // Document processing
  const [docsPerWeek, setDocsPerWeek] = useState(100);
  const [minsPerDoc, setMinsPerDoc] = useState(12);

  // Support tickets
  const [ticketsPerDay, setTicketsPerDay] = useState(80);
  const [minsPerTicket, setMinsPerTicket] = useState(10);

  // Reporting
  const [reportsPerMonth, setReportsPerMonth] = useState(4);
  const [hoursPerReport, setHoursPerReport] = useState(5);

  // Automation rates (what % AI handles)
  const DOC_AUTOMATION = 0.75;
  const SUPPORT_AUTOMATION = 0.40;
  const REPORT_AUTOMATION = 0.85;

  // Monthly calculations
  const docHoursSaved = (docsPerWeek * 4 * minsPerDoc * DOC_AUTOMATION) / 60;
  const supportHoursSaved = (ticketsPerDay * 22 * minsPerTicket * SUPPORT_AUTOMATION) / 60;
  const reportHoursSaved = reportsPerMonth * hoursPerReport * REPORT_AUTOMATION;

  const totalHoursSaved = docHoursSaved + supportHoursSaved + reportHoursSaved;
  const monthlySavings = totalHoursSaved * HOURLY_RATE;
  const annualSavings = monthlySavings * 12;

  const formatHours = (h: number) => `${Math.round(h)} ${dict.roiCalculatorPage.units.hrs}`;
  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  const sections = [
    {
      label: dict.roiCalculatorPage.sections[0].label,
      description: dict.roiCalculatorPage.sections[0].description,
      rate: `${Math.round(DOC_AUTOMATION * 100)}% ${dict.roiCalculatorPage.automatedBy}`,
      hoursSaved: docHoursSaved,
      sliders: (
        <div className="space-y-6">
          <Slider
            label={dict.roiCalculatorPage.sliders.docsPerWeek}
            value={docsPerWeek}
            min={10}
            max={1000}
            step={10}
            format={(v) => `${v}`}
            onChange={setDocsPerWeek}
          />
          <Slider
            label={dict.roiCalculatorPage.sliders.minsPerDoc}
            value={minsPerDoc}
            min={2}
            max={30}
            step={1}
            format={(v) => `${v} ${dict.roiCalculatorPage.units.min}`}
            onChange={setMinsPerDoc}
          />
        </div>
      ),
    },
    {
      label: dict.roiCalculatorPage.sections[1].label,
      description: dict.roiCalculatorPage.sections[1].description,
      rate: `${Math.round(SUPPORT_AUTOMATION * 100)}% ${dict.roiCalculatorPage.handleTimeReduction}`,
      hoursSaved: supportHoursSaved,
      sliders: (
        <div className="space-y-6">
          <Slider
            label={dict.roiCalculatorPage.sliders.ticketsPerDay}
            value={ticketsPerDay}
            min={10}
            max={500}
            step={5}
            format={(v) => `${v}`}
            onChange={setTicketsPerDay}
          />
          <Slider
            label={dict.roiCalculatorPage.sliders.minsPerTicket}
            value={minsPerTicket}
            min={3}
            max={30}
            step={1}
            format={(v) => `${v} ${dict.roiCalculatorPage.units.min}`}
            onChange={setMinsPerTicket}
          />
        </div>
      ),
    },
    {
      label: dict.roiCalculatorPage.sections[2].label,
      description: dict.roiCalculatorPage.sections[2].description,
      rate: `${Math.round(REPORT_AUTOMATION * 100)}% ${dict.roiCalculatorPage.draftingAutomated}`,
      hoursSaved: reportHoursSaved,
      sliders: (
        <div className="space-y-6">
          <Slider
            label={dict.roiCalculatorPage.sliders.reportsPerMonth}
            value={reportsPerMonth}
            min={1}
            max={20}
            step={1}
            format={(v) => `${v}`}
            onChange={setReportsPerMonth}
          />
          <Slider
            label={dict.roiCalculatorPage.sliders.hoursPerReport}
            value={hoursPerReport}
            min={1}
            max={20}
            step={0.5}
            format={(v) => `${v} ${dict.roiCalculatorPage.units.hrs}`}
            onChange={setHoursPerReport}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/" />

          {/* Header */}
          <div className="mb-12">
            <p className="section-label mb-3">{dict.roiCalculatorPage.sectionLabel}</p>
            <div className="rule mb-6" />
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
              <h1 className="text-[clamp(1.5rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
                {dict.roiCalculatorPage.h1}
              </h1>
              <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
                {dict.roiCalculatorPage.subtitle}
              </p>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
            {/* Inputs */}
            <div className="space-y-8">
              {sections.map((s) => (
                <div key={s.label} className="border border-[var(--white-20)] bg-[var(--surface)] p-6 sm:p-8">
                  <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-sm uppercase tracking-[0.15em] text-[var(--white-80)]">{s.label}</p>
                      <p className="mt-0.5 text-[0.72rem] text-[var(--text-muted)]">{s.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[0.6rem] uppercase tracking-[0.18em] text-[var(--white-40)]">{dict.roiCalculatorPage.aiSaves}</p>
                      <p className="text-base text-[var(--white-100)]">{formatHours(s.hoursSaved)}{dict.roiCalculatorPage.perMonth}</p>
                    </div>
                  </div>
                  {s.sliders}
                  <p className="mt-4 text-[0.6rem] uppercase tracking-[0.18em] text-[var(--white-30)]">
                    {dict.roiCalculatorPage.assumption}: {s.rate}
                  </p>
                </div>
              ))}

              <p className="text-[0.7rem] leading-relaxed text-[var(--text-muted)]">
                {dict.roiCalculatorPage.disclaimer.replace("$RATE", String(HOURLY_RATE))}
              </p>
            </div>

            {/* Results panel — sticky on desktop */}
            <div className="lg:sticky lg:top-24">
              <div className="border border-[var(--white-20)] bg-[var(--surface)] p-6">
                <p className="mb-4 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                  {dict.roiCalculatorPage.estimatedSavings}
                </p>

                <div className="mb-6 space-y-4">
                  {sections.map((s) => (
                    <div key={s.label} className="flex items-center justify-between gap-4">
                      <p className="text-[0.72rem] text-[var(--text-muted)]">{s.label}</p>
                      <p className="shrink-0 text-sm text-[var(--white-80)]">
                        {formatHours(s.hoursSaved)}{dict.roiCalculatorPage.perMonth}
                      </p>
                    </div>
                  ))}
                  <div className="rule" />
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[0.72rem] uppercase tracking-[0.15em] text-[var(--white-60)]">
                      {dict.roiCalculatorPage.totalHoursMonth}
                    </p>
                    <p className="shrink-0 text-base text-[var(--white-100)]">
                      {formatHours(totalHoursSaved)}
                    </p>
                  </div>
                </div>

                <div className="mb-6 border border-[var(--white-20)] bg-[var(--background)] p-4">
                  <p className="mb-1 text-[0.55rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                    {dict.roiCalculatorPage.monthlySavingsEstimate}
                  </p>
                  <p className="text-[2rem] leading-none text-[var(--white-100)]">
                    {formatCurrency(monthlySavings)}
                  </p>
                  <p className="mt-1 text-[0.65rem] text-[var(--text-muted)]">
                    {formatCurrency(annualSavings)} {dict.roiCalculatorPage.annualised}
                  </p>
                </div>

                <a
                  href={`/contact?note=${encodeURIComponent(`Estimated ${formatHours(totalHoursSaved)}/mo saved across document processing, support, and reporting. Annual estimate: ${formatCurrency(annualSavings)}.`)}`}
                  className="btn-outline block text-center"
                >
                  {dict.roiCalculatorPage.validateCta}
                </a>
                <p className="mt-3 text-center text-[0.6rem] text-[var(--white-30)]">
                  {dict.roiCalculatorPage.validateNote}
                </p>
              </div>

              {/* Benchmark */}
              <div className="mt-4 border border-[var(--white-20)] bg-[var(--surface)] p-5">
                <p className="mb-3 text-[0.55rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                  {dict.roiCalculatorPage.fromLiveDeployments}
                </p>
                <div className="space-y-2 text-[0.72rem] text-[var(--text-muted)]">
                  {dict.roiCalculatorPage.benchmarks.map((b, i) => (
                    <p key={i}>— {b}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
