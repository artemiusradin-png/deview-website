"use client";

import Link from "next/link";
import { RETRO_FEATURE_CARDS_ID } from "./RetroFeatureCards";
import { useLocaleContext } from "@/lib/i18n/locale-context";

type SubpageNavProps = {
  /** Default: home with hash to retro cards grid. */
  backHref?: string;
};

export function SubpageNav({ backHref = `/#${RETRO_FEATURE_CARDS_ID}` }: SubpageNavProps) {
  const { dict } = useLocaleContext();
  return (
    <div className="mb-8 flex flex-col gap-4 border-b border-[var(--white-20)] pb-5 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
      <Link href="/" className="text-xs uppercase tracking-[0.24em] text-[var(--white-80)]">
        {dict.whatMakesEnterprise.backBrand}
      </Link>
      <Link href={backHref} className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
        {dict.whatMakesEnterprise.backHome}
      </Link>
    </div>
  );
}
