"use client";

import { useLocaleContext } from "@/lib/i18n/locale-context";
import { LocaleLink } from "@/components/LocaleLink";
import { SubpageNav } from "@/components/SubpageNav";
import { getInsightArticle } from "@/lib/insights";

function formatDate(iso: string, locale: string) {
  const dtLocale = locale === "de" ? "de-DE" : locale === "zh-HK" ? "zh-HK" : "en-GB";
  return new Date(iso).toLocaleDateString(dtLocale, { day: "numeric", month: "long", year: "numeric" });
}

export function InsightsContent() {
  const { locale, dict } = useLocaleContext();
  const d = dict.insightsPage;

  return (
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

      {/* Article list */}
      <div className="space-y-0">
        {d.articles.map((a, i) => {
          const meta = getInsightArticle(a.slug);
          return (
            <LocaleLink
              key={a.slug}
              href={`/insights/${a.slug}`}
              className={`group block border-t border-[var(--white-20)] py-10 transition-colors hover:bg-[var(--surface)] sm:py-12 ${i === d.articles.length - 1 ? "border-b" : ""}`}
            >
              <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-start">
                {meta ? (
                  <div className="overflow-hidden rounded-lg border border-[var(--white-10)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={meta.coverSmall}
                      alt=""
                      loading="lazy"
                      className="aspect-video w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                    />
                  </div>
                ) : null}
                <div>
                  <div className="flex flex-wrap items-start gap-3 mb-4">
                    <span className="text-[0.55rem] uppercase tracking-[0.22em] text-[var(--white-40)]">
                      {a.label}
                    </span>
                    <span className="text-[0.55rem] text-[var(--white-30)]">&middot;</span>
                    <span className="text-[0.55rem] uppercase tracking-[0.18em] text-[var(--white-30)]">
                      {formatDate(a.date, locale)}
                    </span>
                    <span className="text-[0.55rem] text-[var(--white-30)]">&middot;</span>
                    <span className="text-[0.55rem] uppercase tracking-[0.18em] text-[var(--white-30)]">
                      {a.readTime}
                    </span>
                  </div>
                  <h2 className="mb-3 text-[clamp(1rem,3vw,1.35rem)] leading-snug text-[var(--white-100)] transition-colors group-hover:text-[var(--white-80)] md:max-w-3xl">
                    {a.title}
                  </h2>
                  <p className="max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">{a.lead}</p>
                  <p className="mt-4 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--white-40)] transition-colors group-hover:text-[var(--white-60)]">
                    {d.readArticle}
                  </p>
                </div>
              </div>
            </LocaleLink>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-16 border border-[var(--white-20)] bg-[var(--surface)] p-8 sm:p-10">
        <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
          {d.ctaLabel}
        </p>
        <h3 className="mb-3 text-[clamp(1rem,3vw,1.3rem)] text-[var(--white-100)]">
          {d.ctaTitle}
        </h3>
        <p className="mb-6 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
          {d.ctaBody}
        </p>
        <LocaleLink href="/contact" className="btn-outline inline-block">
          {d.ctaLink}
        </LocaleLink>
      </div>
    </div>
  );
}
