"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LocaleLink } from "@/components/LocaleLink";
import { motion } from "framer-motion";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";
import { FeatureSpotlight } from "@/components/ui/feature-spotlight";
import { useLocaleContext } from "@/lib/i18n/locale-context";

const USE_CASE_IMAGES = [
  "/images/stock/tax-documents-800.webp",
  "/images/stock/desk-phone-800.webp",
  "/images/stock/signature-doc-800.webp",
  "/images/stock/code-review-800.webp",
  "/images/stock/whiteboard-plan-800.webp",
  "/images/stock/laptop-analytics-1200.webp",
  "/images/stock/dashboard-laptop-900.webp",
  "/images/stock/document-pen-900.webp",
  "/images/stock/strategy-docs-800.webp",
  "/images/stock/charts-print-800.webp",
];

export default function AiGuideLendingPage() {
  const router = useRouter();
  const { dict } = useLocaleContext();
  const t = dict.aiGuideFullPage;
  const [ready] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return sessionStorage.getItem("deview-guide-lending") === "1";
  });

  useEffect(() => {
    if (!ready) {
      router.replace("/resources/ai-guide-lending");
    }
  }, [ready, router]);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--background)]">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--white-20)] border-t-[var(--white-80)]" />
      </div>
    );
  }

  /* Build use-case data from dict (the EN dict stores all 10 use cases) */
  const useCases = "useCases" in t
    ? (t as any).useCases as Array<{ number: string; title: string; problem: string; useCase: string; value: string[]; note: string | null; impact: string; complexity: string; risk: string }>
    : [];

  /* Build scoring rows from dict if present, else fall back to EN shape */
  const scoringRows = "scoringRows" in t
    ? (t as any).scoringRows as Array<{ useCase: string; impact: string; complexity: string; risk: string; recommended: boolean }>
    : [];

  return (
    <>
      <main className="section-gutter min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-10 sm:pt-24">
        <div className="mx-auto max-w-4xl">

          <SubpageNav backHref="/resources/ai-guide-lending" />

          {/* Cover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 border border-[var(--white-20)] bg-[var(--surface)] p-6 md:p-10"
          >
            <p className="mb-4 text-[0.6rem] uppercase tracking-[0.24em] text-[var(--white-60)]">
              {t.preparedBy}
            </p>
            <div className="rule mb-6 max-w-[6rem]" />
            <h1 className="hero-heading mb-4 text-[clamp(1.5rem,5vw,2.4rem)] leading-[1.15] text-[var(--white-100)]">
              {t.coverTitle}
            </h1>
            <p className="mb-6 max-w-2xl text-base leading-relaxed text-[var(--text-muted)]">
              {t.coverDescription}
            </p>
            <div className="flex flex-wrap gap-4 text-[0.6rem] uppercase tracking-[0.18em] text-[var(--white-40)]">
              {t.coverMeta.map((m, i) => (
                <span key={i}>
                  {i > 0 && <span className="mr-4">·</span>}
                  {m}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Introduction */}
          <section className="mb-16">
            <p className="section-label mb-4">{t.introLabel}</p>
            <div className="rule mb-6 max-w-[5rem]" />
            <div className="space-y-4 text-sm leading-relaxed text-[var(--text-muted)]">
              <p>{t.introP1}</p>
              <p>{t.introP2}</p>
              <p>{t.introP3}</p>
            </div>
          </section>

          {/* Framework */}
          <section className="mb-16">
            <p className="section-label mb-4">{t.frameworkLabel}</p>
            <div className="rule mb-6 max-w-[5rem]" />
            <p className="mb-6 text-sm leading-relaxed text-[var(--text-muted)]">
              {t.frameworkIntro}
            </p>
            <div className="grid gap-px border border-[var(--white-20)] bg-[var(--white-20)] sm:grid-cols-3">
              {t.frameworkQuestions.map((item) => (
                <div key={item.q} className="flex flex-col gap-3 bg-[var(--surface)] p-5">
                  <p className="label-xs text-[var(--white-40)]">{t.frameworkSignal}</p>
                  <p className="text-sm font-medium text-[var(--white-90)]">{item.q}</p>
                  <p className="text-xs leading-relaxed text-[var(--text-muted)]">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[0.72rem] leading-relaxed text-[var(--white-40)]">
              {t.frameworkFootnote}
            </p>
          </section>

          {/* Use cases */}
          <section className="mb-16">
            <p className="section-label mb-4">{t.useCasesLabel}</p>
            <div className="rule mb-6 max-w-[5rem]" />
            <div>
              {useCases.map((uc, i) => (
                <FeatureSpotlight
                  key={uc.number}
                  number={uc.number}
                  impact={uc.impact}
                  title={uc.title}
                  description={`${uc.problem} ${uc.useCase}`}
                  bullets={uc.value}
                  note={uc.note}
                  imageUrl={USE_CASE_IMAGES[i]}
                  imageAlt={uc.title}
                  reverse={i % 2 !== 0}
                  recommended={["01", "02", "03", "04"].includes(uc.number)}
                  className={i === useCases.length - 1 ? "border-b-0" : ""}
                />
              ))}
            </div>
          </section>

          {/* Scoring matrix */}
          <section className="mb-16">
            <p className="section-label mb-4">{t.scoringLabel}</p>
            <div className="rule mb-6 max-w-[5rem]" />
            <p className="mb-6 text-sm leading-relaxed text-[var(--text-muted)]">
              {t.scoringIntro}
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-[0.7rem]">
                <thead>
                  <tr className="border-b border-[var(--white-20)]">
                    <th className="py-3 pr-4 text-left text-[0.58rem] uppercase tracking-[0.2em] text-[var(--white-40)]">{t.scoringColumns.useCase}</th>
                    <th className="px-3 py-3 text-center text-[0.58rem] uppercase tracking-[0.2em] text-[var(--white-40)]">{t.scoringColumns.impact}</th>
                    <th className="px-3 py-3 text-center text-[0.58rem] uppercase tracking-[0.2em] text-[var(--white-40)]">{t.scoringColumns.complexity}</th>
                    <th className="px-3 py-3 text-center text-[0.58rem] uppercase tracking-[0.2em] text-[var(--white-40)]">{t.scoringColumns.risk}</th>
                    <th className="py-3 pl-3 text-center text-[0.58rem] uppercase tracking-[0.2em] text-[var(--white-40)]">{t.scoringColumns.startHere}</th>
                  </tr>
                </thead>
                <tbody>
                  {scoringRows.map((row) => (
                    <tr
                      key={row.useCase}
                      className={`border-b border-[var(--white-10)] ${row.recommended ? "bg-[var(--surface)]" : ""}`}
                    >
                      <td className={`py-3 pr-4 text-left leading-snug ${row.recommended ? "text-[var(--white-90)]" : "text-[var(--white-60)]"}`}>
                        {row.useCase}
                        {row.recommended ? <span className="ml-2 text-[0.5rem] uppercase tracking-[0.14em] text-[var(--white-40)]">★ {t.recommended}</span> : null}
                      </td>
                      <td className={`px-3 py-3 text-center ${row.impact === "High" ? "text-[var(--white-80)]" : "text-[var(--white-40)]"}`}>{row.impact}</td>
                      <td className={`px-3 py-3 text-center ${row.complexity === "Low" ? "text-[var(--white-80)]" : row.complexity === "High" ? "text-[var(--white-30)]" : "text-[var(--white-50)]"}`}>{row.complexity}</td>
                      <td className={`px-3 py-3 text-center ${row.risk === "Low" ? "text-[var(--white-80)]" : row.risk === "Higher" ? "text-[var(--white-30)]" : "text-[var(--white-50)]"}`}>{row.risk}</td>
                      <td className="py-3 pl-3 text-center">
                        {row.recommended
                          ? <span className="text-[0.6rem] uppercase tracking-[0.14em] text-[var(--white-80)]">✓</span>
                          : <span className="text-[0.6rem] text-[var(--white-20)]">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 border border-[var(--white-20)] bg-[var(--surface)] p-5">
              <p className="mb-3 label-xs text-[var(--white-60)]">{t.recommendedLabel}</p>
              <div className="space-y-2">
                {t.recommendedItems.map((item, i) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-[0.15rem] shrink-0 text-[0.6rem] text-[var(--white-40)]">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-sm leading-snug text-[var(--white-80)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Free AI Operations Audit CTA */}
          <section className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="border border-[var(--white-20)] bg-[var(--surface)] p-6 md:p-10"
            >
              <p className="section-label mb-4">{t.ctaLabel}</p>
              <div className="rule mb-6 max-w-[5rem]" />

              <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
                <div>
                  <h2 className="hero-heading mb-4 text-[clamp(1.2rem,4vw,1.8rem)] leading-[1.2] text-[var(--white-100)]">
                    {t.ctaHeading}
                  </h2>
                  <p className="mb-5 text-sm leading-relaxed text-[var(--text-muted)]">
                    {t.ctaDescription}
                  </p>
                  <div className="space-y-2">
                    {t.ctaItems.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-[0.18rem] shrink-0 text-[0.6rem] text-[var(--white-40)]">→</span>
                        <span className="text-sm leading-snug text-[var(--white-80)]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <div className="border border-[var(--white-20)] bg-[var(--surface-elevated)] p-4">
                      <p className="mb-1 text-[0.58rem] uppercase tracking-[0.2em] text-[var(--white-40)]">{t.ctaFormat}</p>
                      <p className="text-sm text-[var(--white-90)]">{t.ctaFormatValue}</p>
                    </div>
                    <div className="border border-[var(--white-20)] bg-[var(--surface-elevated)] p-4">
                      <p className="mb-1 text-[0.58rem] uppercase tracking-[0.2em] text-[var(--white-40)]">{t.ctaCost}</p>
                      <p className="text-sm text-[var(--white-90)]">{t.ctaCostValue}</p>
                    </div>
                    <div className="border border-[var(--white-20)] bg-[var(--surface-elevated)] p-4">
                      <p className="mb-1 text-[0.58rem] uppercase tracking-[0.2em] text-[var(--white-40)]">{t.ctaOutput}</p>
                      <p className="text-sm text-[var(--white-90)]">{t.ctaOutputValue}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <LocaleLink
                      href="/contact"
                      className="btn-outline w-full text-center"
                    >
                      {t.ctaButton}
                    </LocaleLink>
                    <p className="text-center text-[0.6rem] uppercase tracking-[0.14em] text-[var(--white-40)]">
                      {t.ctaResponse}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5">
                <p className="text-[0.6rem] leading-relaxed text-[var(--white-30)]">
                  {t.ctaDisclaimer}
                </p>
              </div>
            </motion.div>
          </section>

        </div>
      </main>
      <SiteFooter rootPrefix="/" />
    </>
  );
}
