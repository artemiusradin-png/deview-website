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

/**
 * A reference architecture drawn from data: inputs on the left, the platform's own modules in
 * the middle, the systems it feeds on the right. Used by pages without a hand-drawn diagram.
 */
export type FlowDiagram = {
  /** Accessible name and description of the drawing. */
  title: string;
  desc: string;
  leftLabel: string;
  platformLabel: string;
  rightLabel: string;
  platformTitle: string;
  /** 2-4 boxes: first line is the heading, up to three detail lines (about 30 characters each). */
  left: string[][];
  /** 4-8 modules, as heading and one detail line. */
  modules: [string, string][];
  /** One line under the modules: what runs through the whole platform. */
  strip: string;
  right: string[][];
  /** If set, a dashed boundary is drawn between the inputs and the platform with this label. */
  boundary?: string;
};

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
  diagram: DiagramId | FlowDiagram;
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
