import { SOLUTION_ASSETS } from "./assets";
import { BANKING_PAGES } from "./banking";
import { BANKING_LENDING_PAGES } from "./banking-lending";
import { BANKING_PAYMENTS_PAGES } from "./banking-payments";
import { BANKING_DIGITAL_PAGES } from "./banking-digital";
import { BANKING_CONTROLLING_PAGES } from "./banking-controlling";
import { MANUFACTURING_PAGES } from "./manufacturing";
import { OIL_GAS_PAGES } from "./oil-gas";
import { OIL_GAS_OPS_PAGES } from "./oil-gas-ops";
import { OIL_GAS_PROJECTS_PAGES } from "./oil-gas-projects";
import { SOLUTION_HUBS } from "./hubs";
import { solutionPath, type SolutionHub, type SolutionPage, type SolutionVertical } from "./types";

export { SOLUTION_ASSETS, assetById } from "./assets";
export { SOLUTION_HUBS, publishedHubs } from "./hubs";
export * from "./types";

/** Every solution page, in the order the library lists them. */
export const SOLUTION_PAGES: SolutionPage[] = [
  ...BANKING_PAGES,
  ...BANKING_LENDING_PAGES,
  ...BANKING_PAYMENTS_PAGES,
  ...BANKING_DIGITAL_PAGES,
  ...BANKING_CONTROLLING_PAGES,
  ...OIL_GAS_PAGES,
  ...OIL_GAS_OPS_PAGES,
  ...OIL_GAS_PROJECTS_PAGES,
  ...MANUFACTURING_PAGES,
];

export const pageBySlug = (slug: string) => SOLUTION_PAGES.find((p) => p.slug === slug);
export const hubBySlug = (slug: string) => SOLUTION_HUBS.find((h) => h.slug === slug && h.published);
export const hubFor = (vertical: SolutionVertical): SolutionHub | undefined =>
  SOLUTION_HUBS.find((h) => h.vertical === vertical);
export const pagesIn = (vertical: SolutionVertical) =>
  SOLUTION_PAGES.filter((p) => p.vertical === vertical);

/** Words in the text values of an object (keys are not counted). */
function words(value: unknown): number {
  if (typeof value === "string") return value.split(/\s+/).filter(Boolean).length;
  if (Array.isArray(value)) return value.reduce((n, v) => n + words(v), 0);
  if (value && typeof value === "object") {
    return Object.values(value).reduce<number>((n, v) => n + words(v), 0);
  }
  return 0;
}

/**
 * Build-time checks, run when this module loads: the build fails on a duplicate slug, title,
 * description or H1, a missing asset, a hub that is published without pages (or the reverse),
 * a thin page, or a number or word that the content rules forbid.
 */
function validate() {
  const errors: string[] = [];
  const seen = (label: string, values: string[]) => {
    const dup = values.filter((v, i) => values.indexOf(v) !== i);
    for (const d of new Set(dup)) errors.push(`duplicate ${label}: ${d}`);
  };
  seen("slug", [...SOLUTION_PAGES.map((p) => p.slug), ...SOLUTION_HUBS.map((h) => h.slug), "assets"]);
  seen("seoTitle", [...SOLUTION_PAGES.map((p) => p.seoTitle), ...SOLUTION_HUBS.map((h) => h.seoTitle)]);
  seen("seoDescription", [...SOLUTION_PAGES.map((p) => p.seoDescription), ...SOLUTION_HUBS.map((h) => h.seoDescription)]);
  seen("h1", [...SOLUTION_PAGES.map((p) => p.h1), ...SOLUTION_HUBS.map((h) => h.h1)]);
  for (const hub of SOLUTION_HUBS) {
    const count = pagesIn(hub.vertical).length;
    if (hub.published && count === 0) errors.push(`hub ${hub.slug} is published but has no pages`);
    if (!hub.published && count > 0) errors.push(`hub ${hub.slug} has pages but is not published`);
  }
  for (const page of SOLUTION_PAGES) {
    const tag = `page ${page.slug}`;
    if (!SOLUTION_ASSETS.some((a) => a.id === page.assetId)) errors.push(`${tag}: unknown asset ${page.assetId}`);
    if (page.seoTitle.length > 70) errors.push(`${tag}: title is ${page.seoTitle.length} characters`);
    if (page.seoDescription.length < 110 || page.seoDescription.length > 165)
      errors.push(`${tag}: description is ${page.seoDescription.length} characters`);
    if (page.modules.length < 6) errors.push(`${tag}: fewer than 6 modules`);
    if (page.faqs.length < 4) errors.push(`${tag}: fewer than 4 FAQs`);
    const norm = (t: string) => t.toLowerCase().replace(/s\b/g, "");
    if (!norm(page.intro).includes(norm(page.h1.split(" (")[0].replace(/ development$/i, ""))))
      errors.push(`${tag}: intro does not contain the H1 keyword`);
    const n = words(page);
    if (n < 1000) errors.push(`${tag}: only ${n} words`);
    const text = JSON.stringify(page);
    if (/\$\s?\d|USD|HK\$|\b(weeks?|months?)\b/i.test(text.replace(/month-end|per month|a month/gi, "")))
      errors.push(`${tag}: mentions a price or a duration`);
    if (/gazprom|lukoil|tomskneft|fubon|fudon/i.test(text)) errors.push(`${tag}: names a company that must not be named`);
  }
  const known = new Set([
    ...SOLUTION_PAGES.map((p) => solutionPath(p.slug)),
    ...SOLUTION_HUBS.filter((h) => h.published).map((h) => solutionPath(h.slug)),
    "/solutions",
  ]);
  for (const page of SOLUTION_PAGES) {
    for (const link of [...page.proof, ...page.related]) {
      if (link.href.startsWith("/solutions") && !known.has(link.href))
        errors.push(`page ${page.slug}: link ${link.href} does not exist`);
    }
  }
  for (const asset of SOLUTION_ASSETS) {
    if (!pageBySlug(asset.primaryPage)) errors.push(`asset ${asset.id}: primary page ${asset.primaryPage} does not exist`);
  }
  seen("asset source", SOLUTION_ASSETS.map((a) => a.source));
  if (errors.length) throw new Error(`Solutions content check failed:\n- ${errors.join("\n- ")}`);
}
validate();
