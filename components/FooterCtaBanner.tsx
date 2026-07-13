"use client";

import { Mail, Send } from "lucide-react";
import Link from "next/link";

type FooterCtaBannerProps = {
  label: string;
  copy: string;
  primaryText: string;
  primaryHref: string;
  secondaryText: string;
  secondaryHref: string;
  rootPrefix?: string;
};

/**
 * The "Tell us what to automate" CTA banner. Extracted from the site footer so
 * it can also be placed standalone (e.g. after the homepage leadership block).
 */
export function FooterCtaBanner({
  label,
  copy,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
  rootPrefix = "",
}: FooterCtaBannerProps) {
  const primary = primaryHref.startsWith("#") ? `${rootPrefix}${primaryHref}` : primaryHref;

  return (
    <div className="border border-[var(--white-20)] p-3 sm:p-4 md:p-5">
      <div className="grid items-stretch gap-4 md:grid-cols-[minmax(13rem,0.45fr)_minmax(0,1fr)]">
        <div className="flex items-center border-b border-[var(--white-10)] pb-4 md:border-b-0 md:border-r md:border-[var(--white-20)] md:pb-0 md:pr-5">
          <p className="text-[0.58rem] uppercase tracking-[0.2em] text-[var(--white-40)]">{label}</p>
        </div>
        <div className="bg-[var(--background)] p-4 md:flex md:items-center md:justify-between md:gap-6">
          <p className="max-w-3xl text-sm font-semibold leading-snug text-[var(--white-90)] md:text-base">
            {copy}
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row md:mt-0 md:shrink-0">
            <Link
              href={primary}
              className="inline-flex min-h-9 items-center justify-center gap-2 border border-[var(--white-90)] bg-[var(--white-90)] px-4 text-[0.63rem] font-semibold uppercase tracking-[0.15em] text-[var(--background)] transition hover:border-[var(--white-70)] hover:bg-[var(--white-70)]"
            >
              {primaryText}
              <Send className="size-3" />
            </Link>
            <a
              href={secondaryHref}
              className="inline-flex min-h-9 items-center justify-center gap-2 border border-[var(--white-20)] px-4 text-[0.63rem] font-semibold uppercase tracking-[0.15em] text-[var(--white-70)] transition hover:border-[var(--white-40)] hover:text-[var(--white-90)]"
            >
              {secondaryText}
              <Mail className="size-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
