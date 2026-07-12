"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { LocaleLink } from "@/components/LocaleLink";
import { homeSectionReveal } from "@/lib/home-section-motion";

// Industry → cover image. Monochrome-friendly architectural/professional shots.
const INDUSTRY_IMAGES: Record<string, string> = {
  lending:
    "/images/stock/finance-calculator-1200.webp",
  insurance:
    "/images/stock/document-pen-900.webp",
  legal:
    "/images/stock/justice-scales-900.webp",
  professional:
    "/images/stock/modern-office-900.webp",
};

const FALLBACK_IMAGE =
  "https://placehold.co/400x450/14161c/8a8f99?text=DeView";

type AccordionPanelProps = {
  label: string;
  href: string;
  imageUrl: string;
  isActive: boolean;
  onActivate: () => void;
};

function AccordionPanel({ label, href, imageUrl, isActive, onActivate }: AccordionPanelProps) {
  return (
    <LocaleLink
      href={href}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      aria-label={label}
      className={`relative h-[340px] flex-shrink-0 overflow-hidden rounded-lg border border-[var(--white-10)] transition-all duration-700 ease-in-out focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--white-40)] md:h-[440px] ${
        isActive ? "w-[260px] md:w-[400px]" : "w-[56px] md:w-[64px]"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt={label}
        className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-700 ease-in-out"
        style={{ transform: isActive ? "scale(1.04)" : "scale(1.12)" }}
        onError={(e) => {
          const t = e.currentTarget;
          t.onerror = null;
          t.src = FALLBACK_IMAGE;
        }}
      />
      {/* Tint — deeper when collapsed, lighter when active */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background:
            "linear-gradient(to top, rgba(5,6,10,0.92) 0%, rgba(5,6,10,0.45) 45%, rgba(5,6,10,0.2) 100%)",
          opacity: isActive ? 0.85 : 1,
        }}
      />

      <span
        className={`absolute whitespace-nowrap text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.55)] transition-all duration-300 ease-in-out ${
          isActive
            ? "bottom-5 left-1/2 -translate-x-1/2 rotate-0"
            : "bottom-16 left-1/2 -translate-x-1/2 rotate-90"
        }`}
      >
        {label}
      </span>
    </LocaleLink>
  );
}

export function LandingAccordionItem() {
  const { dict } = useLocaleContext();
  const s = dict.industries;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[var(--background)] section-gutter py-10 md:py-14">
      <motion.div
        {...homeSectionReveal}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl"
      >
        <p className="section-label mb-3">{s.sectionLabel}</p>
        <div className="rule mb-6" />

        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
          {/* Left: heading + CTA */}
          <div className="w-full md:w-[42%]">
            <h2 className="text-[clamp(1.5rem,5vw,2.6rem)] leading-[1.08] text-[var(--white-100)]">
              {s.titleL1}
              <br />
              {s.titleL2}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
              {s.description}
            </p>
            <div className="mt-7">
              <LocaleLink
                href="/case-studies"
                className="inline-block rounded-md border border-[var(--white-20)] px-7 py-3 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-[var(--white-70)] transition-colors hover:border-[var(--white-40)] hover:text-[var(--white-100)]"
              >
                {s.cta}
              </LocaleLink>
            </div>
          </div>

          {/* Right: image accordion */}
          <div className="w-full md:w-[58%]">
            <div className="flex flex-row items-center justify-center gap-2.5 overflow-x-auto pb-2 md:gap-3">
              {s.tiles.map((tile, index) => (
                <AccordionPanel
                  key={tile.id}
                  label={tile.label}
                  href={tile.href}
                  imageUrl={INDUSTRY_IMAGES[tile.id] ?? FALLBACK_IMAGE}
                  isActive={index === activeIndex}
                  onActivate={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
