import type { Metadata } from "next";
import { FourProjectsContent } from "./four-projects-content";

export const metadata: Metadata = {
  title: "The four AI projects that pay for themselves fastest | DeView Insights",
  description:
    "Not all AI use cases are created equal. Four specific projects that consistently deliver measurable ROI within the first 90 days in operations teams.",
  openGraph: {
    images: [{ url: "/images/insights/four-ai-projects-worth-doing-1200.webp", width: 1200, height: 675 }],
  },
};

export default function ArticlePage() {
  return <FourProjectsContent />;
}
