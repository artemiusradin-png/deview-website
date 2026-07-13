"use client";

import type { ReactNode } from "react";
import { CaseMediaFrame } from "@/components/ui/case-media-frame";

/**
 * Featured case study laid out like the Neon reference: a two-tone headline,
 * the demo media in a decorative frame, and a compact CTA card underneath.
 * Deliberately light on copy — the full write-up lives on /case-studies.
 *
 * `title` is split on " — ": the part before stays full-white, the part after
 * drops to muted for the two-tone effect.
 */
export function FeaturedCaseCard({
  id,
  sectionLabel,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  mediaLabel,
  media,
}: {
  id?: string;
  sectionLabel: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  mediaLabel: string;
  media: ReactNode;
}) {
  const [lead, ...rest] = title.split(" — ");
  const tail = rest.join(" — ");

  return (
    <section
      id={id}
      className="scroll-margin-header border-t border-[var(--white-20)] bg-[var(--background)] section-gutter py-14 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <p className="section-label mb-3">{sectionLabel}</p>
        <div className="rule mb-8" />

        <h2 className="max-w-4xl text-[clamp(1.85rem,5.2vw,3rem)] font-medium leading-[1.12] tracking-tight text-[var(--white-100)]">
          {lead}
          {tail ? (
            <span className="text-[var(--white-40)]">{" — "}{tail}</span>
          ) : null}
        </h2>

        <div className="mt-9 md:mt-12">
          <CaseMediaFrame label={mediaLabel}>{media}</CaseMediaFrame>
        </div>

        <div className="mt-8 rounded-xl border border-[var(--white-20)] bg-[var(--surface)] p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-8">
          <p className="max-w-xl text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
            {subtitle}
          </p>
          <a
            href={ctaHref}
            className="mt-5 inline-flex shrink-0 items-center gap-2 rounded-lg border border-[var(--white-20)] bg-[var(--background)] px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--white-100)] transition-colors hover:border-[var(--white-50)] md:mt-0"
          >
            {ctaLabel}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
