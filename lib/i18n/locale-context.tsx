"use client";

import { createContext, useContext, type ReactNode } from "react";
import { en, type Dictionary } from "./dict-en";
import { getStringAtPath } from "./translate";
import type { Locale } from "./types";

type LocaleContextValue = {
  locale: Locale;
  dict: Dictionary;
  t: (path: string) => string;
  localePath: (path: string) => string;
};

/** The site is English-only; the context keeps one shape for every component that reads copy or builds links. */
const value: LocaleContextValue = {
  locale: "en",
  dict: en,
  t: (path) => getStringAtPath(en, path) ?? path,
  localePath: (path) => `/en${path.startsWith("/") ? path : `/${path}`}`,
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
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
