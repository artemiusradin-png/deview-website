import type { Locale } from "./types";
import { en, type Dictionary } from "./dict-en";
import { zhHK } from "./dict-zh-hk";

export const dictionaries = {
  en,
  "zh-HK": zhHK,
} as const satisfies Record<Locale, Dictionary>;

export type { Dictionary };

export function getDictionary(locale: Locale): Dictionary {
  return locale === "zh-HK" ? zhHK : en;
}
