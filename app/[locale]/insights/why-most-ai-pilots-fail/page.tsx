import { InsightStructuredData } from "@/components/InsightStructuredData";
import { getInsightArticle } from "@/lib/insights";
import { withSocialMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { PilotsFailContent } from "./pilots-fail-content";

export const metadata: Metadata = withSocialMetadata({
  title: "Why most AI pilots fail | Deview Insights",
  description:
    "Three-quarters of enterprise AI pilots never make it to production. The cause is almost never the technology: here's what actually goes wrong.",
  authors: [{ name: "Deview", url: "https://deviewai.com/en/about" }],
  openGraph: {
    type: "article",
    publishedTime: getInsightArticle("why-most-ai-pilots-fail")?.date,
    authors: ["https://deviewai.com/en/about"],
    images: [{ url: "/images/insights/why-most-ai-pilots-fail-1200.webp", width: 1200, height: 675 }],
  },
  alternates: { canonical: "/en/insights/why-most-ai-pilots-fail" },
});

export default function ArticlePage() {
  return <>
    <InsightStructuredData slug="why-most-ai-pilots-fail" />
    <PilotsFailContent />
  </>;
}
