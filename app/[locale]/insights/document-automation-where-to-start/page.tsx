import type { Metadata } from "next";
import { DocAutomationContent } from "./doc-automation-content";

export const metadata: Metadata = {
  title: "Document automation: where to start | DeView Insights",
  description:
    "Four questions that determine whether a document automation project will succeed — before a single line of code is written.",
  openGraph: {
    images: [{ url: "/images/insights/document-automation-where-to-start-1200.webp", width: 1200, height: 675 }],
  },
};

export default function ArticlePage() {
  return <DocAutomationContent />;
}
