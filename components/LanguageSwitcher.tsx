"use client";

import { useEffect, useState } from "react";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import type { Locale } from "@/lib/i18n/types";

type SwitcherOption = { locale: Locale; label: string; ariaLabel: string };

const DACH_COUNTRIES = new Set(["DE", "AT", "CH"]);
const HK_COUNTRIES = new Set(["HK"]);

function readCountryCookie(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(^|;\s*)deview-country=([^;]+)/);
  return match ? decodeURIComponent(match[2]) : null;
}

function getOptions(
  locale: Locale,
  dict: ReturnType<typeof useLocaleContext>["dict"],
  country: string | null,
): SwitcherOption[] {
  const all: SwitcherOption[] = [
    { locale: "en", label: dict.lang.shortEn, ariaLabel: dict.a11y.langToEn },
    { locale: "zh-HK", label: dict.lang.shortZh, ariaLabel: dict.a11y.langToZh },
    { locale: "de", label: dict.lang.shortDe, ariaLabel: dict.a11y.langToDe },
  ];

  return all.filter((o) => {
    if (o.locale === locale) return false;
    if (country && DACH_COUNTRIES.has(country) && o.locale === "zh-HK") return false;
    if (country && HK_COUNTRIES.has(country) && o.locale === "de") return false;
    return true;
  });
}

export function LanguageSwitcher() {
  const { locale, setLocale, dict } = useLocaleContext();
  const [country, setCountry] = useState<string | null>(null);

  useEffect(() => {
    setCountry(readCountryCookie());
  }, []);

  const options = getOptions(locale, dict, country);
  const currentLabel =
    locale === "zh-HK" ? dict.lang.shortZh : locale === "de" ? dict.lang.shortDe : dict.lang.shortEn;

  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <span className="lang-toggle__opt is-active" aria-current="true">
        {currentLabel}
      </span>
      {options.map((opt) => (
        <button
          key={opt.locale}
          type="button"
          className="lang-toggle__opt"
          onClick={() => setLocale(opt.locale)}
          aria-label={opt.ariaLabel}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
