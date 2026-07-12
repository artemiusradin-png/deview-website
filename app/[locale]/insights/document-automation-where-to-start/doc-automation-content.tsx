"use client";

import { useLocaleContext } from "@/lib/i18n/locale-context";
import { LocaleLink } from "@/components/LocaleLink";
import { SubpageNav } from "@/components/SubpageNav";
import { SiteFooter } from "@/components/SiteFooter";

export function DocAutomationContent() {
  const { dict } = useLocaleContext();
  const d = dict.articleDocAutomation;

  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-3xl">
          <SubpageNav backHref="/insights" />

      <div className="mb-10">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="text-[0.55rem] uppercase tracking-[0.22em] text-[var(--white-40)]">
            {d.label}
          </span>
          <span className="text-[0.55rem] text-[var(--white-30)]">&middot;</span>
          <span className="text-[0.55rem] uppercase tracking-[0.18em] text-[var(--white-30)]">
            {d.date}
          </span>
          <span className="text-[0.55rem] text-[var(--white-30)]">&middot;</span>
          <span className="text-[0.55rem] uppercase tracking-[0.18em] text-[var(--white-30)]">{d.readTime}</span>
        </div>
        <h1 className="mb-5 text-[clamp(1.4rem,4vw,2rem)] leading-snug text-[var(--white-100)]">
          {d.title}
        </h1>
        <p className="text-base leading-relaxed text-[var(--text-muted)]">
          {d.lead}
        </p>
      </div>

      {/* Cover */}
      <div className="mb-10 overflow-hidden rounded-lg border border-[var(--white-10)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/insights/document-automation-where-to-start-1200.webp" alt="" className="aspect-video w-full object-cover" />
      </div>

      <div className="rule mb-10" />

      <div className="space-y-6 text-sm leading-relaxed text-[var(--text-muted)]">
        <p>{d.intro1}</p>
        <p>{d.intro2}</p>

        <h2 className="text-base uppercase tracking-[0.15em] text-[var(--white-80)]">
          {d.q1Heading}
        </h2>
        <p>{d.q1p1}</p>
        <p>{d.q1p2}</p>
        <p>{d.q1p3}</p>
        <p>{d.q1p4}</p>

        <h2 className="text-base uppercase tracking-[0.15em] text-[var(--white-80)]">
          {d.q2Heading}
        </h2>
        <p>{d.q2p1}</p>
        <p>{d.q2p2}</p>
        <p>{d.q2p3}</p>

        <h2 className="text-base uppercase tracking-[0.15em] text-[var(--white-80)]">
          {d.q3Heading}
        </h2>
        <p>{d.q3p1}</p>
        <p>{d.q3p2}</p>
        <p>{d.q3p3}</p>
        <p>{d.q3p4}</p>

        <h2 className="text-base uppercase tracking-[0.15em] text-[var(--white-80)]">
          {d.q4Heading}
        </h2>
        <p>{d.q4p1}</p>
        <p>{d.q4p2}</p>
        <p>{d.q4p3}</p>

        <h2 className="text-base uppercase tracking-[0.15em] text-[var(--white-80)]">
          {d.startHeading}
        </h2>
        <p>{d.startP1}</p>
        <p>{d.startP2}</p>
      </div>

      <div className="mt-12 border-t border-[var(--white-20)] pt-10">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
              {d.ctaLabel}
            </p>
            <p className="mb-4 text-sm leading-relaxed text-[var(--text-muted)]">
              {d.ctaBody}
            </p>
            <LocaleLink href="/contact" className="btn-outline inline-block text-sm">
              {d.ctaLink}
            </LocaleLink>
          </div>
          <div>
            <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
              {d.moreLabel}
            </p>
            <LocaleLink href="/insights/why-most-ai-pilots-fail" className="block py-2 text-sm text-[var(--white-80)] hover:text-[var(--white-100)]">
              {d.moreLink1}
            </LocaleLink>
            <LocaleLink href="/insights/four-ai-projects-worth-doing" className="block py-2 text-sm text-[var(--white-80)] hover:text-[var(--white-100)]">
              {d.moreLink2}
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
