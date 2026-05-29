import type { Locale } from "./types";
import { en, type Dictionary } from "./dict-en";
import { zhHK } from "./dict-zh-hk";
import { de } from "./dict-de";

export const dictionaries = {
  en,
  "zh-HK": zhHK,
  de,
} as const satisfies Record<Locale, Dictionary>;

export type { Dictionary };

export function getDictionary(locale: Locale): Dictionary {
  switch (locale) {
    case "zh-HK":
      return zhHK;
    case "de":
      return de;
    default:
      return en;
  }
}
