import { InsightStructuredData } from "@/components/InsightStructuredData";
import { getInsightArticle } from "@/lib/insights";
import { withSocialMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { DocAutomationContent } from "./doc-automation-content";

export const metadata: Metadata = withSocialMetadata({
  title: "Document automation: where to start | Deview Insights",
  description:
    "Four questions that determine whether a document automation project will succeed: before a single line of code is written.",
  authors: [{ name: "Deview", url: "https://deviewai.com/en/about" }],
  openGraph: {
    type: "article",
    publishedTime: getInsightArticle("document-automation-where-to-start")?.date,
    authors: ["https://deviewai.com/en/about"],
    images: [{ url: "/images/insights/document-automation-where-to-start-1200.webp", width: 1200, height: 675 }],
  },
  alternates: { canonical: "/en/insights/document-automation-where-to-start" },
});

export default function ArticlePage() {
  return <>
    <InsightStructuredData slug="document-automation-where-to-start" />
    <DocAutomationContent />
  </>;
}
