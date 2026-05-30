"use client";

import { useLocaleContext } from "@/lib/i18n/locale-context";
import { LocaleLink } from "@/components/LocaleLink";
import { SubpageNav } from "@/components/SubpageNav";
import { SiteFooter } from "@/components/SiteFooter";

export function FourProjectsContent() {
  const { dict } = useLocaleContext();
  const d = dict.articleFourProjects;

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

      <div className="rule mb-10" />

      <div className="space-y-4 text-sm leading-relaxed text-[var(--text-muted)]">
        <p>{d.intro1}</p>
        <p>{d.intro2}</p>
      </div>

      <div className="mt-10 space-y-0">
        {d.projects.map((p, i) => (
          <div
            key={p.rank}
            className={`border-t border-[var(--white-20)] py-10 ${i === d.projects.length - 1 ? "border-b" : ""}`}
          >
            <div className="mb-6 flex items-start gap-5">
              <span className="text-[2rem] leading-none tracking-[-0.04em] text-[var(--white-10)]">
                {p.rank}
              </span>
              <h2 className="text-[clamp(1rem,3vw,1.2rem)] text-[var(--white-100)]">{p.title}</h2>
            </div>

            <div className="mb-5 border-l-2 border-[var(--white-20)] pl-5">
              <p className="text-[0.72rem] italic text-[var(--white-60)]">{p.why}</p>
            </div>

            <div className="mb-6 space-y-3 text-sm leading-relaxed text-[var(--text-muted)]">
              {p.body.split("\n\n").map((para, pi) => (
                <p key={pi}>{para}</p>
              ))}
            </div>

            <div className="grid gap-px border border-[var(--white-20)] bg-[var(--white-20)] sm:grid-cols-2">
              <div className="bg-[var(--background)] px-4 py-3">
                <p className="text-[0.55rem] uppercase tracking-[0.2em] text-[var(--white-40)]">{d.typicalResultLabel}</p>
                <p className="mt-1 text-[0.78rem] text-[var(--white-80)]">{p.typical}</p>
              </div>
              <div className="bg-[var(--background)] px-4 py-3">
                <p className="text-[0.55rem] uppercase tracking-[0.2em] text-[var(--white-40)]">{d.deploymentTimelineLabel}</p>
                <p className="mt-1 text-[0.78rem] text-[var(--white-80)]">{p.timeline}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 space-y-4 text-sm leading-relaxed text-[var(--text-muted)]">
        <h2 className="text-base uppercase tracking-[0.15em] text-[var(--white-80)]">
          {d.selectionHeading}
        </h2>
        <p>{d.selectionP1}</p>
        <p>{d.selectionP2}</p>
        <p>{d.selectionP3}</p>
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
            <LocaleLink href="/insights/document-automation-where-to-start" className="block py-2 text-sm text-[var(--white-80)] hover:text-[var(--white-100)]">
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
