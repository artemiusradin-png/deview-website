"use client";

import { useLocaleContext } from "@/lib/i18n/locale-context";

export function LangSwitch() {
  const { dict, locale, setLocale } = useLocaleContext();

  return (
    <div className="lang-switch" role="group" aria-label={dict.a11y.langGroup}>
      <button
        type="button"
        className={`lang-switch__btn${locale === "en" ? " lang-switch__btn--active" : ""}`}
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
      >
        {dict.lang.shortEn}
      </button>
      <button
        type="button"
        className={`lang-switch__btn${locale === "zh-HK" ? " lang-switch__btn--active" : ""}`}
        onClick={() => setLocale("zh-HK")}
        aria-pressed={locale === "zh-HK"}
      >
        {dict.lang.shortZh}
      </button>
    </div>
  );
}
