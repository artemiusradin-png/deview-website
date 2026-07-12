/**
 * Structural metadata for the three practice areas.
 * All display strings live in the dictionaries under `dict.practices.items`
 * (same order as PRACTICE_IDS) — this file holds only non-translatable data.
 */
export const PRACTICE_IDS = ["ai-solutions", "software-engineering", "data-science"] as const;

export type PracticeId = (typeof PRACTICE_IDS)[number];

export const practiceMeta: Record<PracticeId, { image: string; accent: string }> = {
  "ai-solutions": {
    image: "/images/stock/circuit-board-1200.webp",
    accent: "rgba(141, 231, 189, 0.35)",
  },
  "software-engineering": {
    image: "/images/stock/code-review-800.webp",
    accent: "rgba(141, 189, 231, 0.35)",
  },
  "data-science": {
    image: "/images/stock/laptop-analytics-1200.webp",
    accent: "rgba(231, 189, 141, 0.35)",
  },
};
