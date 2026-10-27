import { InsightStructuredData } from "@/components/InsightStructuredData";
import { getInsightArticle } from "@/lib/insights";
import { withSocialMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { LmsCostContent } from "./lms-cost-content";

export const metadata: Metadata = withSocialMetadata({
  title: "How much does a custom loan management system cost? | Deview Insights",
  description:
    "A candid breakdown of building versus buying loan management software for commercial lenders and debt funds: modular cost blocks, architecture, and realistic delivery horizons.",
  authors: [{ name: "Deview", url: "https://deviewai.com/en/about" }],
  openGraph: {
    type: "article",
    publishedTime: getInsightArticle("loan-management-system-cost")?.date,
    authors: ["https://deviewai.com/en/about"],
    images: [{ url: "/images/insights/loan-management-system-cost-1200.webp", width: 1200, height: 675 }],
  },
  alternates: { canonical: "/en/insights/loan-management-system-cost" },
});

export default function ArticlePage() {
  return (
    <>
      <InsightStructuredData slug="loan-management-system-cost" />
      <LmsCostContent />
    </>
  );
}

