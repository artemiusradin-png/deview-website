"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { getDictionary } from "./dictionaries";
import { getStringAtPath } from "./translate";
import type { Locale } from "./types";

const STORAGE_KEY = "deview-locale";
const GEO_LOCALE_COOKIE = "deview-geo-locale";

function readGeoLocaleCookie(): Locale | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(^|;\\s*)${GEO_LOCALE_COOKIE}=([^;]+)`));
  if (!match) return null;
  const v = decodeURIComponent(match[2]);
  return v === "zh-HK" || v === "en" ? v : null;
}

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dict: ReturnType<typeof getDictionary>;
  t: (path: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children, initialLocale }: { children: ReactNode; initialLocale?: Locale }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return initialLocale ?? "en";
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "zh-HK" || stored === "en") {
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

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "zh-HK" ? "zh-Hant-HK" : "en";
  }, [locale]);

  const dict = useMemo(() => getDictionary(locale), [locale]);

  const t = useCallback(
    (path: string) => {
      const v = getStringAtPath(dict, path);
      return v ?? path;
    },
    [dict],
  );

  const value = useMemo(() => ({ locale, setLocale, dict, t }), [locale, setLocale, dict, t]);

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
