"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { homeSectionReveal, homeSectionCardMotion } from "@/lib/home-section-motion";

const articles = [
  {
    slug: "why-most-ai-pilots-fail",
    date: "2025-04-14",
    label: "AI IMPLEMENTATION",
    title: "Why most AI pilots fail — and what the ones that work have in common",
    readTime: "6 min read",
  },
  {
    slug: "document-automation-where-to-start",
    date: "2025-03-28",
    label: "DOCUMENT AUTOMATION",
    title: "Document automation: the four questions to answer before you build anything",
    readTime: "5 min read",
  },
  {
    slug: "four-ai-projects-worth-doing",
    date: "2025-03-10",
    label: "AI STRATEGY",
    title: "The four AI projects that pay for themselves fastest in operations teams",
    readTime: "7 min read",
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export function HomeInsightsPreview() {
  const { dict } = useLocaleContext();
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

        <div className="grid gap-px overflow-hidden rounded-lg border border-[var(--white-10)] bg-[var(--white-10)]">
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              {...homeSectionCardMotion}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                href={`/insights/${article.slug}`}
                className="group flex flex-col gap-2 bg-[var(--background)] p-5 transition-colors hover:bg-[var(--surface)] sm:flex-row sm:items-baseline sm:gap-6 sm:p-6"
              >
                <div className="flex flex-shrink-0 items-center gap-3 text-[0.6rem] uppercase tracking-[0.16em] text-[var(--white-40)]">
                  <span>{formatDate(article.date)}</span>
                  <span className="text-[var(--white-20)]">·</span>
                  <span>{article.readTime}</span>
                </div>
                <div className="flex-1">
                  <p className="mb-1 text-[0.58rem] font-medium uppercase tracking-[0.2em] text-[var(--white-40)]">
                    {article.label}
                  </p>
                  <p className="text-[0.95rem] leading-snug text-[var(--white-85)] transition-colors group-hover:text-[var(--white-100)]">
                    {article.title}
                  </p>
                </div>
                <span className="hidden flex-shrink-0 text-[0.7rem] text-[var(--white-20)] transition-colors group-hover:text-[var(--white-60)] sm:inline">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex">
          <Link
            href="/insights"
            className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--white-60)] transition-colors hover:text-[var(--white-100)]"
          >
            {s.viewAll}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
