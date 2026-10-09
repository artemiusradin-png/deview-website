"use client";

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
  const primary = primaryHref.startsWith("#")
    ? `${rootPrefix}${primaryHref}`
    : primaryHref;

  return (
    <div className="editorial-cta">
      <p className="page-kicker">{label}</p>
      <Link
        href={primary}
        className="editorial-cta-title"
        aria-label={primaryText}
      >
        <span>Your next move.</span>
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path
            d="M7 25 25 7M7 7h18v18"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </Link>
      <div className="editorial-cta-bottom">
        <p>{copy}</p>
        <a href={secondaryHref}>{secondaryText} ↗</a>
      </div>
    </div>
  );
}
