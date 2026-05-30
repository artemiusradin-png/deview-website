"use client";

import { useEffect, useState } from "react";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { LocaleLink } from "@/components/LocaleLink";
import { SubpageNav } from "@/components/SubpageNav";
import { SiteFooter } from "@/components/SiteFooter";

function readCountryCookie(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(^|;\s*)deview-country=([^;]+)/);
  return match ? decodeURIComponent(match[2]) : null;
}

export function AboutContent() {
  const { dict } = useLocaleContext();
  const a = dict.aboutPage;

  const [isHongKong, setIsHongKong] = useState(false);

  useEffect(() => {
    setIsHongKong(readCountryCookie() === "HK");
  }, []);

  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/" />

      {/* Header */}
      <div className="mb-16">
        <p className="section-label mb-3">{a.sectionLabel}</p>
        <div className="rule mb-6" />
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-start">
          <h1 className="text-[clamp(1.5rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
            {a.h1}
          </h1>
          <div className="space-y-4 text-sm leading-relaxed text-[var(--text-muted)]">
            <p>{isHongKong ? a.introHK : a.introNonHK}</p>
            <p>{a.introP2}</p>
          </div>
        </div>
      </div>

      {/* What we are not */}
      <div className="mb-16 border border-[var(--white-20)] bg-[var(--surface)] p-8 sm:p-10">
        <p className="mb-4 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
          {a.whatWeAreNotLabel}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {a.whatWeAreNotItems.map((item) => (
            <div key={item} className="flex gap-3">
              <span className="mt-0.5 shrink-0 text-[0.7rem] text-[var(--white-30)]">—</span>
              <p className="text-sm text-[var(--text-muted)]">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <p className="mb-3 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
          {a.valuesLabel}
        </p>
        <div className="rule mb-8" />
        <div className="grid gap-0">
          {a.values.map((v, i) => (
            <div
              key={v.label}
              className={`grid gap-4 py-6 sm:gap-6 md:grid-cols-[220px_1fr] md:items-start ${i !== a.values.length - 1 ? "border-b border-[var(--white-20)]" : ""}`}
            >
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--white-80)]">
                {v.label}
              </p>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{v.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Expertise */}
      <div className="mb-16">
        <p className="mb-3 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
          {a.expertiseLabel}
        </p>
        <div className="rule mb-8" />
        <div className="grid gap-px border border-[var(--white-20)] bg-[var(--white-20)] sm:grid-cols-2">
          {a.expertise.map((e) => (
            <div key={e.area} className="flex flex-col gap-1 bg-[var(--background)] px-5 py-4">
              <p className="text-xs uppercase tracking-[0.15em] text-[var(--white-80)]">{e.area}</p>
              <p className="text-[0.75rem] leading-snug text-[var(--text-muted)]">{e.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Location & context */}
      <div className="mb-16 grid gap-8 md:grid-cols-3">
        <div>
          <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
            {isHongKong ? a.locationLabelHK : a.locationLabelNonHK}
          </p>
          <p className="text-sm text-[var(--white-80)]">
            {isHongKong ? a.locationValueHK : a.locationValueNonHK}
          </p>
          <p className="text-[0.75rem] text-[var(--text-muted)]">
            {isHongKong ? a.locationSubHK : a.locationSubNonHK}
          </p>
        </div>
        <div>
          <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
            {a.clientsLabel}
          </p>
          <p className="text-sm text-[var(--white-80)]">{a.clientsValue}</p>
          <p className="text-[0.75rem] text-[var(--text-muted)]">{a.clientsSub}</p>
        </div>
        <div>
          <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
            {a.industriesLabel}
          </p>
          <p className="text-sm text-[var(--white-80)]">{a.industriesValue}</p>
          <p className="text-[0.75rem] text-[var(--text-muted)]">{a.industriesSub}</p>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-[var(--white-20)] pt-12">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <h3 className="mb-3 text-[clamp(1.1rem,3vw,1.4rem)] text-[var(--white-100)]">
              {a.ctaTitle}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">{a.ctaBody}</p>
          </div>
          <div className="flex gap-4 md:justify-end">
            <LocaleLink href="/contact" className="btn-outline">
              {a.ctaProject}
            </LocaleLink>
            <LocaleLink href="/case-studies" className="btn-outline">
              {a.ctaCaseStudies}
            </LocaleLink>
          </div>
        </div>
      </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
