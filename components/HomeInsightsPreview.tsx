"use client";

import { motion } from "framer-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { LocaleLink } from "./LocaleLink";
import { homeSectionReveal, homeSectionCardMotion } from "@/lib/home-section-motion";
import { INSIGHT_ARTICLES } from "@/lib/insights";

function formatDate(iso: string, locale: string) {
  const dtLocale = locale === "de" ? "de-DE" : locale === "zh-HK" ? "zh-HK" : "en-GB";
  return new Date(iso).toLocaleDateString(dtLocale, { day: "numeric", month: "long", year: "numeric" });
}

export function HomeInsightsPreview() {
  const { dict, locale } = useLocaleContext();
  const s = dict.insights;

  return (
    <section className="relative overflow-hidden bg-[var(--background)] section-gutter py-10 md:py-14">
      <motion.div {...homeSectionReveal} transition={{ duration: 0.5 }} className="mx-auto max-w-6xl">
        <p className="section-label mb-3">{s.sectionLabel}</p>
        <div className="rule mb-6" />
        <h2 className="mb-10 max-w-3xl text-[clamp(1.5rem,5vw,2.6rem)] leading-[1.08] text-[var(--white-100)]">
          {s.titleL1}
          <br />
          {s.titleL2}
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {s.articles.map((article, i) => {
            const meta = INSIGHT_ARTICLES[i];
            return (
              <motion.div
                key={meta.slug}
                {...homeSectionCardMotion}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <LocaleLink
                  href={`/insights/${meta.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--white-20)] bg-[var(--surface)] transition-colors hover:border-[var(--white-40)]"
                >
                  <div className="relative aspect-video overflow-hidden border-b border-[var(--white-10)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={meta.coverSmall}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.16em] text-[var(--white-40)]">
                      <span>{formatDate(meta.date, locale)}</span>
                      <span className="text-[var(--white-20)]">·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <p className="mb-1 text-[0.58rem] font-medium uppercase tracking-[0.2em] text-[var(--white-40)]">
                      {article.label}
                    </p>
                    <p className="text-[0.95rem] leading-snug text-[var(--white-85)] transition-colors group-hover:text-[var(--white-100)]">
                      {article.title}
                    </p>
                    <span className="mt-auto pt-4 text-[0.7rem] text-[var(--white-20)] transition-colors group-hover:text-[var(--white-60)]" aria-hidden="true">
                      →
                    </span>
                  </div>
                </LocaleLink>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 flex">
          <LocaleLink
            href="/insights"
            className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--white-60)] transition-colors hover:text-[var(--white-100)]"
          >
            {s.viewAll}
          </LocaleLink>
        </div>
      </motion.div>
    </section>
  );
}
