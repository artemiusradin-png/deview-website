"use client";

import { RETRO_FEATURE_CARDS_ID } from "./RetroFeatureCards";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { LocaleLink } from "./LocaleLink";

type SubpageNavProps = {
  /** Default: home with hash to retro cards grid. */
  backHref?: string;
};

export function SubpageNav({ backHref = `/#${RETRO_FEATURE_CARDS_ID}` }: SubpageNavProps) {
  const { dict } = useLocaleContext();
  return (
    <div className="mb-8 flex flex-col gap-4 pb-5 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
      <LocaleLink
        href="/"
        className="inline-flex min-h-11 items-center text-xs uppercase tracking-[0.24em] text-[var(--white-80)] sm:min-h-0"
      >
        {dict.whatMakesEnterprise.backBrand}
      </LocaleLink>
      <LocaleLink
        href={backHref}
        className="inline-flex min-h-11 shrink-0 items-center text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)] sm:min-h-0"
      >
        {dict.whatMakesEnterprise.backHome}
      </LocaleLink>
    </div>
  );
}
