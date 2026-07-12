/**
 * Single source of truth for insights article metadata (slugs, dates, covers).
 * Article copy lives in the dictionaries under `insightsPage.articles` /
 * `insights.articles` — kept in the same order as this list.
 */
export type InsightArticle = {
  slug: string;
  date: string; // ISO
  cover: string; // 1200×675 hero / og image
  coverSmall: string; // 600×338 card image
};

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    slug: "why-most-ai-pilots-fail",
    date: "2025-04-14",
    cover: "/images/insights/why-most-ai-pilots-fail-1200.webp",
    coverSmall: "/images/insights/why-most-ai-pilots-fail-600.webp",
  },
  {
    slug: "document-automation-where-to-start",
    date: "2025-03-28",
    cover: "/images/insights/document-automation-where-to-start-1200.webp",
    coverSmall: "/images/insights/document-automation-where-to-start-600.webp",
  },
  {
    slug: "four-ai-projects-worth-doing",
    date: "2025-03-10",
    cover: "/images/insights/four-ai-projects-worth-doing-1200.webp",
    coverSmall: "/images/insights/four-ai-projects-worth-doing-600.webp",
  },
];

export function getInsightArticle(slug: string): InsightArticle | undefined {
  return INSIGHT_ARTICLES.find((a) => a.slug === slug);
}
