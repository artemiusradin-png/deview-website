"use client";

import { LocaleLink } from "@/components/LocaleLink";
import { useLocaleContext } from "@/lib/i18n/locale-context";

export function LendingContent() {
  const { dict } = useLocaleContext();
  const lp = dict.lendingPage;

  return (
    <div className="section-gutter mx-auto max-w-6xl">
      {/* Header */}
      <div className="mb-12 sm:mb-16">
        <p className="section-label mb-3">{lp.sectionLabel}</p>
        <div className="rule mb-6" />
        <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-end">
          <h1 className="text-[clamp(1.5rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
            {lp.h1}
          </h1>
          <div className="space-y-3 text-sm leading-relaxed text-[var(--text-muted)]">
            <p>{lp.subtitleP1}</p>
            <p>{lp.subtitleP2}</p>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="mb-16 grid grid-cols-3 gap-px border border-[var(--white-20)] bg-[var(--white-20)]">
        {lp.stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-1 bg-[var(--background)] px-5 py-6">
            <span className="text-[clamp(1.3rem,4vw,1.8rem)] leading-none text-[var(--white-100)]">{s.metric}</span>
            <span className="text-[0.65rem] leading-snug text-[var(--text-muted)]">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Featured deployment pointer */}
      <div className="mb-16 border border-[var(--white-20)] bg-[var(--surface)] p-6 sm:p-8">
        <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
          {lp.featuredLabel}
        </p>
        <h3 className="mb-3 text-[clamp(1.05rem,3vw,1.35rem)] leading-snug text-[var(--white-100)]">
          {lp.featuredTitle}
        </h3>
        <p className="mb-5 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
          {lp.featuredBody}
        </p>
        <a
          href="/#featured-deployment-finance"
          className="inline-flex items-center gap-2 border-b border-[var(--white-30)] pb-1 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--white-80)] transition-colors hover:text-[var(--white-100)]"
        >
          {lp.featuredLink}
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      {/* Use cases */}
      <div className="mb-16">
        <p className="mb-3 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">{lp.useCasesLabel}</p>
        <div className="rule mb-8" />
        <div className="space-y-0">
          {lp.useCases.map((uc, i) => (
            <div
              key={uc.label}
              className={`border-t border-[var(--white-20)] py-10 ${i === lp.useCases.length - 1 ? "border-b" : ""}`}
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
                    {lp.whatChangesLabel}
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
          {lp.objectionsLabel}
        </p>
        <div className="rule mb-8" />
        <div className="space-y-0">
          {lp.objections.map((o, i) => (
            <div
              key={o.q}
              className={`grid gap-4 py-6 md:grid-cols-[1fr_1.4fr] md:gap-8 ${i !== lp.objections.length - 1 ? "border-b border-[var(--white-20)]" : ""}`}
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
          {lp.ctaLabel}
        </p>
        <h3 className="mb-4 text-[clamp(1.1rem,3vw,1.4rem)] text-[var(--white-100)]">
          {lp.ctaTitle}
        </h3>
        <p className="mb-6 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
          {lp.ctaBody}
        </p>
        <div className="flex flex-wrap gap-4">
          <LocaleLink href="/contact" className="btn-outline">
            {lp.ctaProject}
          </LocaleLink>
          <LocaleLink href="/case-studies" className="btn-outline">
            {lp.ctaCaseStudies}
          </LocaleLink>
        </div>
      </div>
    </div>
  );
}
