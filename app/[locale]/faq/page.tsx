"use client";

import { useState } from "react";
import { LocaleLink } from "@/components/LocaleLink";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";
import { ChevronDown } from "lucide-react";
import { useLocaleContext } from "@/lib/i18n/locale-context";

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`border-b border-[var(--white-20)] ${isOpen ? "bg-[var(--surface)]" : ""}`}>
      <button
        type="button"
        className="flex w-full items-start justify-between gap-6 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-sm text-[var(--white-80)]">{q}</span>
        <ChevronDown
          className={`mt-0.5 h-4 w-4 shrink-0 text-[var(--white-40)] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <div className="pb-5 pr-10">
          <p className="text-sm leading-relaxed text-[var(--text-muted)]">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  const [openKey, setOpenKey] = useState<string | null>("0-0");
  const { dict } = useLocaleContext();

  const toggle = (key: string) => setOpenKey((prev) => (prev === key ? null : key));

  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/" />

          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <p className="section-label mb-3">{dict.faqPage.sectionLabel}</p>
            <div className="rule mb-6" />
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
              <h1 className="text-[clamp(1.5rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
                {dict.faqPage.h1}
              </h1>
              <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
                {dict.faqPage.subtitle}
              </p>
            </div>
          </div>

          {/* FAQ categories */}
          <div className="space-y-14">
            {dict.faqPage.categories.map((cat, ci) => (
              <div key={cat.category}>
                <p className="mb-4 text-[0.6rem] uppercase tracking-[0.22em] text-[var(--white-40)]">
                  {cat.category}
                </p>
                <div className="border-t border-[var(--white-20)]">
                  {cat.items.map((item, ii) => {
                    const key = `${ci}-${ii}`;
                    return (
                      <FaqItem
                        key={key}
                        q={item.q}
                        a={item.a}
                        isOpen={openKey === key}
                        onToggle={() => toggle(key)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 border-t border-[var(--white-20)] pt-12">
            <div className="grid gap-6 md:grid-cols-2 md:items-end">
              <div>
                <h3 className="mb-3 text-[clamp(1.1rem,3vw,1.4rem)] text-[var(--white-100)]">
                  {dict.faqPage.cta.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  {dict.faqPage.cta.body}
                </p>
              </div>
              <div className="flex gap-4 md:justify-end">
                <LocaleLink href="/contact" className="btn-outline">
                  {dict.faqPage.cta.button}
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
