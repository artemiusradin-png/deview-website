import { InsightStructuredData } from "@/components/InsightStructuredData";
import { getInsightArticle } from "@/lib/insights";
import { withSocialMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { FourProjectsContent } from "./four-projects-content";

export const metadata: Metadata = withSocialMetadata({
  title: "The four AI projects that pay for themselves fastest | Deview Insights",
  description:
    "Not all AI use cases are created equal. Four specific projects that consistently deliver measurable ROI within the first 90 days in operations teams.",
  authors: [{ name: "Deview", url: "https://deviewai.com/en/about" }],
  openGraph: {
    type: "article",
    publishedTime: getInsightArticle("four-ai-projects-worth-doing")?.date,
    authors: ["https://deviewai.com/en/about"],
    images: [{ url: "/images/insights/four-ai-projects-worth-doing-1200.webp", width: 1200, height: 675 }],
  },
  alternates: { canonical: "/en/insights/four-ai-projects-worth-doing" },
});

export default function ArticlePage() {
  return <>
    <InsightStructuredData slug="four-ai-projects-worth-doing" />
    <FourProjectsContent />
  </>;
}
