import type { ChecklistArea } from "@/lib/lead-magnet-content";

/**
 * Enterprise solution pages at /solutions/<slug>: each one owns a single search intent
 * (the keyword in the title, description, H1 and first paragraph) and offers one gated asset.
 * Facts only from the site and from public standards: no prices, no durations, no invented
 * clients or metrics. See .claude/seo/enterprise-lead-magnet-plan.md.
 */

export type SolutionVertical =
  | "banking"
  | "oil-gas"
  | "manufacturing"
  | "agriculture"
  | "cross-industry";

/** Architecture drawings in components/solutions/diagrams.tsx. */
export type DiagramId =
  | "sme-lending"
  | "upstream-production"
  | "mes";

export type SolutionPage = {
  slug: string;
  vertical: SolutionVertical;
  /** Matches SERVICE_LINES[].id. */
  serviceId: string;
  seoTitle: string;
  seoDescription: string;
  kicker: string;
  h1: string;
  intro: string;
  /** What the system does: 6-10 modules, one heading and one sentence each. */
  modules: { title: string; body: string }[];
  diagram: DiagramId;
  diagramCaption: string;
  /** Standards and interfaces the system is designed against. */
  standards: { name: string; note: string }[];
  /** The 5-8 main entities of the data model. */
  dataModel: { entity: string; holds: string }[];
  /** Buy, extend or build: when each is the right call. */
  buildOptions: { title: string; body: string }[];
  security: { title: string; body: string }[];
  /** Delivery phases only: no durations, no prices. */
  phases: { title: string; body: string }[];
  /** Existing site pages that show related work, as label and path under /en. */
  proof: { label: string; href: string }[];
  faqs: { q: string; a: string }[];
  /** Id of the gated asset offered on this page (see assets.ts). */
  assetId: string;
  /** Other pages worth a click: existing resources and sibling solutions, path under /en. */
  related: { label: string; href: string }[];
  /** ISO date of the last substantive edit (sitemap lastModified). */
  updated: string;
};

export type SolutionHub = {
  slug: string;
  vertical: SolutionVertical;
  /** Hubs are linked, listed in the sitemap and routable only once they have at least one page. */
  published: boolean;
  navLabel: string;
  seoTitle: string;
  seoDescription: string;
  kicker: string;
  h1: string;
  intro: string;
  /** What enterprises in this sector typically need built. */
  needs: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export type SolutionAsset = {
  id: string;
  /** The `source` the form sends to /api/lead-magnet. */
  source: string;
  accessKey: string;
  title: string;
  /** Hero button text, e.g. "Get the RFP template". */
  buttonLabel: string;
  kicker: string;
  lead: string;
  /** Short list of what is inside, shown beside the form. */
  inside: string[];
  tags: string[];
  /** Slug of the page a visitor without access is sent back to. */
  primaryPage: string;
  areas: ChecklistArea[];
  questionsTitle: string;
  questions: string[];
};

export const solutionPath = (slug: string) => `/solutions/${slug}`;
export const assetGuidePath = (id: string) => `/solutions/assets/${id}/guide`;
