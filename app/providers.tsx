"use client";

import type { ReactNode } from "react";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import { TranslatedDocumentMeta } from "@/lib/i18n/translated-document-meta";
import type { Locale } from "@/lib/i18n/types";

export function AppProviders({ children, initialLocale }: { children: ReactNode; initialLocale?: Locale }) {
  return (
    <LocaleProvider initialLocale={initialLocale}>
      <TranslatedDocumentMeta />
      {children}
    </LocaleProvider>
  );
}
