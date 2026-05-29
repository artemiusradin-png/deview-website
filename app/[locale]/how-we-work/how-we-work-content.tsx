"use client";

import { LocaleLink } from "@/components/LocaleLink";
import { useLocaleContext } from "@/lib/i18n/locale-context";

export function HowWeWorkContent() {
  const { dict } = useLocaleContext();
  const h = dict.howWeWorkPage;

  return (
    <>
      {/* Header */}
      <div className="mb-12 sm:mb-16">
        <p className="section-label mb-3">{h.sectionLabel}</p>
        <div className="rule mb-6" />
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
          <h1 className="text-[clamp(1.5rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
            {h.h1}
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
            {h.subtitle}
          </p>
        </div>
      </div>

      {/* Phase timeline overview */}
      <div className="mb-16 grid grid-cols-4 gap-px border border-[var(--white-20)] bg-[var(--white-20)]">
        {h.phases.map((p) => (
          <div key={p.number} className="flex flex-col gap-2 bg-[var(--background)] px-4 py-5">
            <span className="text-[0.55rem] uppercase tracking-[0.2em] text-[var(--white-40)]">{p.label}</span>
            <span className="text-sm text-[var(--white-80)]">{p.duration}</span>
          </div>
        ))}
      </div>

      {/* Detailed phases */}
      <div className="space-y-0">
        {h.phases.map((p, i) => (
          <div
            key={p.number}
            className={`border-t border-[var(--white-20)] py-12 sm:py-14 ${i === h.phases.length - 1 ? "border-b" : ""}`}
          >
            {/* Phase header */}
            <div className="mb-8 flex items-start gap-6">
              <span className="text-[2.5rem] leading-none tracking-[-0.04em] text-[var(--white-10)] sm:text-[3rem]">
                {p.number}
              </span>
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.22em] text-[var(--white-40)]">
                  {p.label} · {p.duration}
                </p>
                <h2 className="mt-1 text-[clamp(1rem,3vw,1.3rem)] text-[var(--white-100)]">{p.title}</h2>
              </div>
            </div>

            {/* Body + details grid */}
            <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
              <div>
                <p className="mb-6 text-sm leading-relaxed text-[var(--text-muted)]">{p.body}</p>
                <div className="border border-[var(--white-20)] bg-[var(--surface)] p-4">
                  <p className="mb-1 text-[0.55rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                    {h.columnLabels.deliverable}
                  </p>
                  <p className="text-[0.78rem] text-[var(--white-80)]">{p.deliverable}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="mb-2 text-[0.55rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                    {h.columnLabels.whoJoins}
                  </p>
                  <p className="text-[0.78rem] leading-snug text-[var(--text-muted)]">{p.whoJoins}</p>
                </div>
                <div>
                  <p className="mb-2 text-[0.55rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                    {h.columnLabels.inputs}
                  </p>
                  <ul className="space-y-1">
                    {p.inputs.map((item) => (
                      <li key={item} className="flex gap-2 text-[0.75rem] text-[var(--text-muted)]">
                        <span className="text-[0.6rem] text-[var(--white-30)]">&mdash;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-[0.55rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                    {h.columnLabels.outputs}
                  </p>
                  <ul className="space-y-1">
                    {p.outputs.map((item) => (
                      <li key={item} className="flex gap-2 text-[0.75rem] text-[var(--white-80)]">
                        <span className="text-[0.6rem] text-[var(--white-60)]">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="mt-16 mb-16">
        <p className="mb-3 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
          {h.faqLabel}
        </p>
        <div className="rule mb-8" />
        <div className="space-y-0">
          {h.faqs.map((f, i) => (
            <div
              key={f.q}
              className={`grid gap-4 py-5 md:grid-cols-[1fr_1.4fr] md:gap-8 ${i !== h.faqs.length - 1 ? "border-b border-[var(--white-20)]" : ""}`}
            >
              <p className="text-sm text-[var(--white-80)]">{f.q}</p>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-[var(--white-20)] pt-12">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <h3 className="mb-3 text-[clamp(1.1rem,3vw,1.4rem)] text-[var(--white-100)]">
              {h.ctaTitle}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              {h.ctaBody}
            </p>
          </div>
          <div className="flex gap-4 md:justify-end">
            <LocaleLink href="/contact" className="btn-outline">
              {h.ctaButton}
            </LocaleLink>
          </div>
        </div>
      </div>
    </>
  );
}
