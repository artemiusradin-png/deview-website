"use client";

import { RETRO_FEATURE_CARDS_ID } from "./RetroFeatureCards";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { LocaleLink } from "./LocaleLink";
import { LanguageSwitcher } from "./LanguageSwitcher";

type SubpageNavProps = {
  /** Default: home with hash to retro cards grid. */
  backHref?: string;
};

export function SubpageNav({ backHref = `/#${RETRO_FEATURE_CARDS_ID}` }: SubpageNavProps) {
  const { dict } = useLocaleContext();
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-gradient-to-b from-[var(--black-80)] to-transparent pt-[env(safe-area-inset-top)]">
      <nav className="section-gutter mx-auto flex h-16 max-w-6xl items-center justify-between">
        {/* Brand */}
        <LocaleLink
          href="/"
          className="inline-flex items-center text-xs uppercase tracking-[0.24em] text-[var(--white-80)] hover:text-[var(--white-100)]"
        >
          {dict.whatMakesEnterprise.backBrand}
        </LocaleLink>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-4 md:flex lg:gap-6">
          <LocaleLink href="/services" className="nav-item">
            {dict.nav.services}
          </LocaleLink>
          <LocaleLink href="/pricing" className="nav-item">
            {dict.nav.pricing}
          </LocaleLink>
          <LocaleLink href="/case-studies" className="nav-item">
            {dict.nav.caseStudies}
          </LocaleLink>
          <LocaleLink href="/how-we-work" className="nav-item">
            {dict.nav.howWeWork}
          </LocaleLink>
          <LocaleLink href="/insights" className="nav-item">
            {dict.nav.insights}
          </LocaleLink>
          <LocaleLink href="/about" className="nav-item">
            {dict.nav.about}
          </LocaleLink>
          <LocaleLink href="/contact" className="nav-item">
            {dict.nav.inquire}
          </LocaleLink>
          <LanguageSwitcher />
        </div>

        {/* Mobile: back link + language switcher */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <LocaleLink
            href={backHref}
            className="inline-flex min-h-11 shrink-0 items-center text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)] sm:min-h-0"
          >
            {dict.whatMakesEnterprise.backHome}
          </LocaleLink>
        </div>
      </nav>
    </header>
  );
}
