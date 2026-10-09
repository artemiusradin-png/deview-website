"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { LocaleLink } from "@/components/LocaleLink";
import { PageIntro } from "@/components/PageIntro";
import { SubpageNav } from "@/components/SubpageNav";
import { SiteFooter } from "@/components/SiteFooter";
import { OilGasCaseCards } from "@/components/OilGasCaseCards";
import {
  OIL_GAS_CASES_NEWEST_FIRST,
  OIL_GAS_HUB_PATH,
} from "@/lib/oil-gas-cases";

/** Licence credits for the logos shown on the oil & gas cards (one per distinct file). */
const oilGasLogoCredits = [
  ...new Map(
    OIL_GAS_CASES_NEWEST_FIRST.flatMap((c) =>
      c.logo?.credit ? [[c.logo.src, c.logo.credit] as const] : [],
    ),
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

/** Industry groups for the production case studies, keyed by case number. */
const productionGroups = [
  {
    id: "agriculture",
    title: "Agriculture",
    teaser: "AI field diagnostics and quoting for a national agronomy network.",
    numbers: ["01"],
  },
  {
    id: "finance",
    title: "Finance",
    teaser: "A unified lending platform from enquiry intake to final repayment.",
    numbers: ["02"],
  },
  {
    id: "senior-care",
    title: "Senior care",
    teaser: "Bilingual care documentation and compliance reporting.",
    numbers: ["03"],
  },
];

/** One industry as a collapsible block: the summary row opens and closes the projects. */
function CaseGroup({
  id,
  index,
  title,
  teaser,
  count,
  children,
}: {
  id: string;
  index: number;
  title: string;
  teaser: ReactNode;
  count: number;
  children: ReactNode;
}) {
  return (
    <details id={id} className="case-group">
      <summary>
        <span className="case-group-index">
          {String(index).padStart(2, "0")}
        </span>
        <span className="case-group-heading">
          <h2>{title}</h2>
          <span className="case-group-teaser">{teaser}</span>
        </span>
        <span className="case-group-count">
          {count} {count === 1 ? "project" : "projects"}
        </span>
        <span className="case-group-toggle" aria-hidden="true" />
      </summary>
      <div className="case-group-body">{children}</div>
    </details>
  );
}

export function CaseStudiesContent() {
  const { dict } = useLocaleContext();
  const d = dict.caseStudiesPage;
  const cases = d.cases;

  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/" />

          <PageIntro
            label={d.sectionLabel}
            title={
              <>
                Good work.
                <br />
                Real impact.
              </>
            }
          >
            <p>{d.subtitle}</p>
          </PageIntro>

          {/* Experience by industry: each block opens and closes on its summary row */}
          <div className="case-groups">
            <CaseGroup
              id="oil-and-gas"
              index={1}
              title="Oil & gas"
              teaser={
                <>
                  Planning, control and reporting systems, 2010–2020, most
                  recent first.
                </>
              }
              count={OIL_GAS_CASES_NEWEST_FIRST.length}
            >
              <p className="case-group-intro">
                Each project has its own page. For the overview, see the{" "}
                <Link href={OIL_GAS_HUB_PATH}>oil &amp; gas page</Link>.
              </p>
              <OilGasCaseCards cases={OIL_GAS_CASES_NEWEST_FIRST} />
              {oilGasLogoCredits.length > 0 ? (
                <p className="mt-4 text-[0.6rem] leading-relaxed text-[var(--white-40)]">
                  {oilGasLogoCredits.map((credit, i) => (
                    <span key={credit.href}>
                      {i > 0 ? " · " : null}
                      <a
                        href={credit.href}
                        className="underline underline-offset-2 hover:text-[var(--white-60)]"
                      >
                        {credit.text}
                      </a>
                    </span>
                  ))}
                </p>
              ) : null}
            </CaseGroup>

            {productionGroups.map((group, groupIndex) => {
              const groupCases = cases.filter((c) =>
                group.numbers.includes(c.number),
              );
              if (groupCases.length === 0) return null;
              return (
                <CaseGroup
                  key={group.id}
                  id={group.id}
                  index={groupIndex + 2}
                  title={group.title}
                  teaser={group.teaser}
                  count={groupCases.length}
                >
                  {groupCases.map((c, i) => {
                    const media = caseMedia[c.number];
                    return (
                      <article
                        key={c.number}
                        className={`border-t border-[var(--white-20)] py-12 sm:py-16 ${i === groupCases.length - 1 ? "border-b" : ""}`}
                      >
                        {/* Meta row */}
                        <div className="mb-8 flex flex-wrap items-start gap-3">
                          <div className="flex flex-col gap-1">
                            <span className="text-[0.6rem] uppercase tracking-[0.22em] text-[var(--white-40)]">
                              {c.sector}
                            </span>
                            <span className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--white-60)]">
                              {c.service}
                            </span>
                          </div>
                        </div>

                        {/* Headline */}
                        <h3 className="mb-8 text-[clamp(1.1rem,3.5vw,1.5rem)] leading-snug text-[var(--white-100)] md:max-w-3xl">
                          {c.headline}
                        </h3>

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
                </CaseGroup>
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
            <LocaleLink href="/contact" className="btn-outline inline-block">
              {d.ctaButton}
            </LocaleLink>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
