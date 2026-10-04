"use client";

import Link from "next/link";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { LocaleLink } from "@/components/LocaleLink";
import { SubpageNav } from "@/components/SubpageNav";
import { SiteFooter } from "@/components/SiteFooter";
import { OilGasCaseCards } from "@/components/OilGasCaseCards";
import { OIL_GAS_CASES_NEWEST_FIRST, OIL_GAS_HUB_PATH } from "@/lib/oil-gas-cases";

/** Licence credits for the logos shown on the oil & gas cards (one per distinct file). */
const oilGasLogoCredits = [
  ...new Map(
    OIL_GAS_CASES_NEWEST_FIRST.flatMap((c) => (c.logo?.credit ? [[c.logo.src, c.logo.credit] as const] : [])),
  ).values(),
];

/** Static video/poster assets keyed by case number (not translatable). */
const caseMedia: Record<string, { video: string; poster?: string }> = {
  "01": {
    video: "/deview-agroplatforma-demo.mp4",
    poster: "/deview-agroplatforma-poster.svg",
  },
  "02": {
    video: "/deview-unified-portal-demo.mp4",
    poster: "/deview-unified-portal-poster.svg",
  },
};

export function CaseStudiesContent() {
  const { dict } = useLocaleContext();
  const d = dict.caseStudiesPage;
  const cases = d.cases;

  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/" />

          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <p className="section-label mb-3">{d.sectionLabel}</p>
            <div className="rule mb-6" />
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
              <h1 className="text-[clamp(1.5rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
                {d.h1}
              </h1>
              <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
                {d.subtitle}
              </p>
            </div>
          </div>

          {/* Oil & gas portfolio, newest first (each project has its own page) */}
          <section className="mb-16 sm:mb-20" aria-labelledby="oil-gas-cases-heading">
            <p className="section-label mb-3">Oil &amp; gas</p>
            <div className="rule mb-6" />
            <div className="mb-4 grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
              <h2
                id="oil-gas-cases-heading"
                className="text-[clamp(1.25rem,4vw,1.85rem)] leading-snug text-[var(--white-100)]"
              >
                Oil &amp; gas project experience.
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
                Six planning, control and reporting systems developed for oil &amp; gas companies between 2010 and
                2020, most recent first.{" "}
                <Link
                  href={OIL_GAS_HUB_PATH}
                  className="text-[var(--white-80)] underline decoration-[var(--white-30)] underline-offset-4 hover:text-[var(--white-100)]"
                >
                  See the oil &amp; gas page
                </Link>
                .
              </p>
            </div>
            <OilGasCaseCards cases={OIL_GAS_CASES_NEWEST_FIRST} />
            {oilGasLogoCredits.length > 0 ? (
              <p className="mt-4 text-[0.6rem] leading-relaxed text-[var(--white-40)]">
                {oilGasLogoCredits.map((credit, i) => (
                  <span key={credit.href}>
                    {i > 0 ? " · " : null}
                    <a href={credit.href} className="underline underline-offset-2 hover:text-[var(--white-60)]">
                      {credit.text}
                    </a>
                  </span>
                ))}
              </p>
            ) : null}
          </section>

          {/* Production systems */}
          <p className="section-label mb-3">Production systems</p>
          {/* Case study cards */}
          <div className="space-y-0">
            {cases.map((c, i) => {
              const media = caseMedia[c.number];
              return (
                <article
                  key={c.number}
                  className={`border-t border-[var(--white-20)] py-12 sm:py-16 ${i === cases.length - 1 ? "border-b" : ""}`}
                >
                  {/* Meta row */}
                  <div className="mb-8 flex flex-wrap items-start gap-3">
                    <span className="text-[2.5rem] leading-none tracking-[-0.04em] text-[var(--white-10)] sm:text-[3rem]">
                      {c.number}
                    </span>
                    <div className="flex flex-col gap-1 pt-1">
                      <span className="text-[0.6rem] uppercase tracking-[0.22em] text-[var(--white-40)]">
                        {c.sector}
                      </span>
                      <span className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--white-60)]">
                        {c.service}
                      </span>
                    </div>
                  </div>

                  {/* Headline */}
                  <h2 className="mb-8 text-[clamp(1.1rem,3.5vw,1.5rem)] leading-snug text-[var(--white-100)] md:max-w-3xl">
                    {c.headline}
                  </h2>

                  {/* Video (featured cases only) */}
                  {media?.video ? (
                    <div className="mb-10 overflow-hidden border border-[var(--white-20)] bg-black">
                      <video
                        className="block h-auto w-full"
                        controls
                        autoPlay
                        preload="metadata"
                        playsInline
                        muted
                        loop
                        poster={media.poster}
                      >
                        <source src={media.video} type="video/mp4" />
                        Your browser does not support embedded video.
                      </video>
                    </div>
                  ) : null}

                  {/* Challenge / Solution */}
                  <div className="mb-10 grid gap-8 md:grid-cols-2">
                    <div>
                      <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                        {d.challengeLabel}
                      </p>
                      <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                        {c.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                        {d.solutionLabel}
                      </p>
                      <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                        {c.solution}
                      </p>
                    </div>
                  </div>

                  {/* AI Capabilities (featured cases only) */}
                  {c.capabilities ? (
                    <div className="mb-10">
                      <p className="mb-4 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                        {d.capabilitiesLabel}
                      </p>
                      <ol className="space-y-4">
                        {c.capabilities.map((cap, capIdx) => (
                          <li
                            key={cap.name}
                            className="flex items-start gap-3 border-l-2 border-[var(--white-10)] pl-4"
                          >
                            <span className="mt-0.5 inline-flex h-6 min-w-[1.75rem] shrink-0 items-center justify-center rounded border border-[var(--white-20)] px-1 text-[0.6rem] tabular-nums uppercase tracking-[0.18em] text-[var(--white-60)]">
                              {String(capIdx + 1).padStart(2, "0")}
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium leading-snug text-[var(--white-100)]">
                                {cap.name}
                              </p>
                              <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">
                                {cap.body}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ) : null}

                  {/* Metrics */}
                  {c.outcomes ? (
                    <div className="mb-10 grid grid-cols-2 gap-px border border-[var(--white-20)] bg-[var(--white-20)] sm:grid-cols-4">
                      {c.outcomes.map((o) => (
                        <div
                          key={o.label}
                          className="flex flex-col gap-1 bg-[var(--background)] px-4 py-5 sm:px-6"
                        >
                          <span className="text-[clamp(1.4rem,4vw,2rem)] font-medium leading-none text-[var(--white-100)]">
                            {o.metric}
                          </span>
                          <span className="text-[0.65rem] leading-snug text-[var(--text-muted)]">
                            {o.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {/* Quote */}
                  {c.quote ? (
                    <blockquote className="border-l-2 border-[var(--white-20)] pl-5">
                      <p className="mb-2 text-sm italic leading-relaxed text-[var(--white-80)]">
                        &ldquo;{c.quote}&rdquo;
                      </p>
                      {c.quoteRole ? (
                        <cite className="text-[0.6rem] not-italic uppercase tracking-[0.2em] text-[var(--white-40)]">
                          {c.quoteRole}
                        </cite>
                      ) : null}
                    </blockquote>
                  ) : null}
                </article>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 border border-[var(--white-20)] bg-[var(--surface)] p-8 sm:p-12">
            <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
              {d.ctaLabel}
            </p>
            <h3 className="mb-4 text-[clamp(1.1rem,3vw,1.4rem)] text-[var(--white-100)]">
              {d.ctaTitle}
            </h3>
            <p className="mb-6 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
              {d.ctaBody}
            </p>
            <LocaleLink
              href="/contact"
              className="btn-outline inline-block"
            >
              {d.ctaButton}
            </LocaleLink>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
