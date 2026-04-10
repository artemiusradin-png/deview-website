"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLocaleContext } from "./locale-context";
import type { Dictionary } from "./dict-en";

function metaForPath(pathname: string, d: Dictionary): { title: string; description: string } | null {
  if (pathname === "/") {
    return { title: d.site.title, description: d.site.description };
  }
  const sp = d.subpages;
  const arch = d.architecturePage;
  switch (pathname) {
    case "/services":
      return { title: sp.servicesTitle, description: sp.servicesDesc };
    case "/use-cases":
      return { title: sp.useCasesTitle, description: sp.useCasesDesc };
    case "/outcomes":
      return { title: sp.outcomesTitle, description: sp.outcomesDesc };
    case "/what-makes-it-enterprise":
      return { title: sp.whatMakesTitle, description: sp.whatMakesDesc };
    case "/architecture-reality-check":
      return { title: arch.title, description: arch.description };
    case "/contact":
      return { title: sp.contactDocumentTitle, description: sp.contactDocumentDesc };
    default:
      return null;
  }
}

/** Syncs `document.title` and meta description from the active locale (client-side). */
export function TranslatedDocumentMeta() {
  const pathname = usePathname();
  const { dict, locale } = useLocaleContext();

  useEffect(() => {
    const pair = metaForPath(pathname, dict);
    if (!pair) {
      return;
    }
    document.title = pair.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", pair.description);
    }
  }, [pathname, dict, locale]);

  return null;
}
