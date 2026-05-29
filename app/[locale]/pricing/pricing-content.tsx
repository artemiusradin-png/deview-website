"use client";

import { useLocaleContext } from "@/lib/i18n/locale-context";
import { LocaleLink } from "@/components/LocaleLink";

export function PricingContent() {
  const { dict } = useLocaleContext();
  const p = dict.pricingPage;

  return (
    <>
      {/* Header */}
      <div className="mb-12 sm:mb-16">
        <p className="section-label mb-3">{p.sectionLabel}</p>
        <div className="rule mb-6" />
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
          <h1 className="text-[clamp(1.5rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
            {p.h1L1}
            <br />
            {p.h1L2}
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
            {p.subtitle}
          </p>
        </div>
      </div>

      {/* Tiers */}
      <div className="mb-20 grid gap-4 md:grid-cols-3">
        {p.tiers.map((tier) => (
          <div
            key={tier.label}
            className={`flex flex-col rounded-lg border p-6 md:p-8 ${
              tier.featured
                ? "border-[var(--white-30)] bg-[var(--surface-elevated)]"
                : "border-[var(--white-10)] bg-[var(--surface)]"
            }`}
          >
            <p className="mb-4 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-[var(--white-40)]">
              {tier.label}
            </p>
            <p className="mb-1 text-[clamp(1.6rem,4vw,2.2rem)] font-bold leading-tight text-[var(--white-100)]">
              {tier.price}
            </p>
            <p className="mb-5 text-[0.7rem] uppercase tracking-[0.14em] text-[var(--white-40)]">
              {tier.timeline}
            </p>
            <p className="mb-6 text-[0.88rem] leading-relaxed text-[var(--text-muted)]">
              {tier.description}
            </p>

            <div className="mb-6 flex-1">
              <p className="mb-3 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-[var(--white-40)]">
                {p.includesLabel}
              </p>
              <ul className="space-y-2">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[0.82rem] leading-snug text-[var(--white-70)]">
                    <span className="mt-1 block h-1 w-1 flex-shrink-0 rounded-full bg-[var(--white-40)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mb-6 text-[0.75rem] leading-snug text-[var(--text-muted)]">
              <span className="font-medium text-[var(--white-60)]">{p.bestForLabel}</span>
              {tier.best}
            </p>

            <LocaleLink
              href="/contact"
              className={`block w-full rounded-md py-3 text-center text-[0.7rem] font-medium uppercase tracking-[0.16em] transition-all ${
                tier.featured
                  ? "bg-[var(--white-100)] text-[var(--background)] hover:bg-[var(--white-90)]"
                  : "border border-[var(--white-20)] text-[var(--white-70)] hover:border-[var(--white-40)] hover:text-[var(--white-100)]"
              }`}
            >
              {tier.cta}
            </LocaleLink>
          </div>
        ))}
      </div>

      {/* FAQs */}
      <div className="mb-16">
        <p className="section-label mb-3">{p.faqLabel}</p>
        <div className="rule mb-8" />
        <div className="space-y-0 divide-y divide-[var(--white-10)]">
          {p.faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-[0.92rem] font-medium leading-snug text-[var(--white-85)] marker:content-none [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span className="flex-shrink-0 text-[0.7rem] text-[var(--white-30)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-[0.85rem] leading-relaxed text-[var(--text-muted)]">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mb-16 rounded-lg border border-[var(--white-10)] bg-[var(--surface)] p-8 text-center md:p-12">
        <h2 className="mb-3 text-[clamp(1.2rem,3vw,1.6rem)] text-[var(--white-100)]">
          {p.ctaTitle}
        </h2>
        <p className="mx-auto mb-6 max-w-lg text-[0.88rem] leading-relaxed text-[var(--text-muted)]">
          {p.ctaBody}
        </p>
        <LocaleLink
          href="/contact"
          className="inline-block rounded-md bg-[var(--white-100)] px-8 py-3 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-[var(--background)] transition-colors hover:bg-[var(--white-90)]"
        >
          {p.ctaButton}
        </LocaleLink>
      </div>
    </>
  );
}
