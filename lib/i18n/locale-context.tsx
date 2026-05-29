"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { getDictionary } from "./dictionaries";
import { getStringAtPath } from "./translate";
import type { Locale } from "./types";

const STORAGE_KEY = "deview-locale";
const GEO_LOCALE_COOKIE = "deview-geo-locale";

const VALID_LOCALES: Locale[] = ["en", "zh-HK", "de"];

function isValidLocale(v: string): v is Locale {
  return VALID_LOCALES.includes(v as Locale);
}

function localeFromPath(pathname: string): Locale | null {
  const match = pathname.match(/^\/(en|zh-HK|de)(\/|$)/);
  return match && isValidLocale(match[1]) ? (match[1] as Locale) : null;
}

function readGeoLocaleCookie(): Locale | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(^|;\\s*)${GEO_LOCALE_COOKIE}=([^;]+)`));
  if (!match) return null;
  const v = decodeURIComponent(match[2]);
  return isValidLocale(v) ? v : null;
}

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dict: ReturnType<typeof getDictionary>;
  t: (path: string) => string;
  localePath: (path: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children, initialLocale }: { children: ReactNode; initialLocale?: Locale }) {
  const pathname = usePathname();
  const urlLocale = localeFromPath(pathname);

  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return urlLocale ?? initialLocale ?? "en";
    }

    if (urlLocale) return urlLocale;

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && isValidLocale(stored)) {
      return stored;
    }

    if (initialLocale) {
      return initialLocale;
    }

    const geoLocale = readGeoLocaleCookie();
    if (geoLocale) {
      return geoLocale;
    }

    return "en";
  });

  useEffect(() => {
    if (urlLocale && urlLocale !== locale) {
      setLocaleState(urlLocale);
      try {
        window.localStorage.setItem(STORAGE_KEY, urlLocale);
        document.cookie = `deview-locale=${urlLocale};path=/;max-age=31536000;samesite=lax`;
      } catch { /* ignore */ }
    }
  }, [urlLocale, locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
      document.cookie = `deview-locale=${next};path=/;max-age=31536000;samesite=lax`;
    } catch {
      /* ignore */
    }
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/(en|zh-HK|de)/, "");
    window.location.href = `/${next}${pathWithoutLocale || "/"}`;
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "zh-HK" ? "zh-Hant-HK" : locale === "de" ? "de" : "en";
  }, [locale]);

  const dict = useMemo(() => getDictionary(locale), [locale]);

  const t = useCallback(
    (path: string) => {
      const v = getStringAtPath(dict, path);
      return v ?? path;
    },
    [dict],
  );

  const localePath = useCallback(
    (path: string) => `/${locale}${path.startsWith("/") ? path : `/${path}`}`,
    [locale],
  );

  const value = useMemo(() => ({ locale, setLocale, dict, t, localePath }), [locale, setLocale, dict, t, localePath]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocaleContext() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocaleContext must be used within LocaleProvider");
  }
  return ctx;
}

/** Safe for components that may render outside provider (returns null). */
export function useOptionalLocaleContext() {
  return useContext(LocaleContext);
}
