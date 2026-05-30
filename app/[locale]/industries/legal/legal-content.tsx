"use client";

import { useLocaleContext } from "@/lib/i18n/locale-context";
import { LocaleLink } from "@/components/LocaleLink";
import { SubpageNav } from "@/components/SubpageNav";
import { SiteFooter } from "@/components/SiteFooter";

export function LegalContent() {
  const { dict } = useLocaleContext();
  const t = dict.legalPage;

  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/" />

      {/* Header */}
      <div className="mb-12 sm:mb-16">
        <p className="section-label mb-3">{t.sectionLabel}</p>
        <div className="rule mb-6" />
        <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-end">
          <h1 className="text-[clamp(1.5rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
            {t.h1}
          </h1>
          <div className="space-y-3 text-sm leading-relaxed text-[var(--text-muted)]">
            <p>{t.introP1}</p>
            <p>{t.introP2}</p>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="mb-16 grid grid-cols-3 gap-px border border-[var(--white-20)] bg-[var(--white-20)]">
        {t.stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-1 bg-[var(--background)] px-5 py-6">
            <span className="text-[clamp(1.3rem,4vw,1.8rem)] leading-none text-[var(--white-100)]">{s.metric}</span>
            <span className="text-[0.65rem] leading-snug text-[var(--text-muted)]">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Use cases */}
      <div className="mb-16">
        <p className="mb-3 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">{t.useCasesSectionLabel}</p>
        <div className="rule mb-8" />
        <div className="space-y-0">
          {t.useCases.map((uc, i) => (
            <div
              key={uc.label}
              className={`border-t border-[var(--white-20)] py-10 ${i === t.useCases.length - 1 ? "border-b" : ""}`}
            >
              <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
                <div>
                  <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                    {uc.label}
                  </p>
                  <h2 className="mb-4 text-[clamp(1rem,3vw,1.2rem)] leading-snug text-[var(--white-100)]">
                    {uc.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">{uc.body}</p>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="mb-3 text-[0.55rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                    {t.whatChangesLabel}
                  </p>
                  <ul className="space-y-2">
                    {uc.metrics.map((m) => (
                      <li key={m} className="flex gap-3 text-[0.78rem] text-[var(--white-80)]">
                        <span className="shrink-0 text-[0.6rem] text-[var(--white-60)]">+</span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Objections */}
      <div className="mb-16">
        <p className="mb-3 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
          {t.objectionsSectionLabel}
        </p>
        <div className="rule mb-8" />
        <div className="space-y-0">
          {t.objections.map((o, i) => (
            <div
              key={o.q}
              className={`grid gap-4 py-6 md:grid-cols-[1fr_1.4fr] md:gap-8 ${i !== t.objections.length - 1 ? "border-b border-[var(--white-20)]" : ""}`}
            >
              <p className="text-sm text-[var(--white-80)]">{o.q}</p>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{o.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border border-[var(--white-20)] bg-[var(--surface)] p-8 sm:p-12">
        <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
          {t.ctaLabel}
        </p>
        <h3 className="mb-4 text-[clamp(1.1rem,3vw,1.4rem)] text-[var(--white-100)]">
          {t.ctaTitle}
        </h3>
        <p className="mb-6 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
          {t.ctaBody}
        </p>
        <div className="flex flex-wrap gap-4">
          <LocaleLink href="/contact" className="btn-outline">
            {t.ctaProject}
          </LocaleLink>
          <LocaleLink href="/case-studies" className="btn-outline">
            {t.ctaCaseStudies}
          </LocaleLink>
        </div>
      </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
