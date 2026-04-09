"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { getDictionary } from "./dictionaries";
import { getStringAtPath } from "./translate";
import type { Locale } from "./types";

const STORAGE_KEY = "deview-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dict: ReturnType<typeof getDictionary>;
  t: (path: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "zh-HK" || stored === "en") {
      setLocaleState(stored);
    }
  }, []);

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
