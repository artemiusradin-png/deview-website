import { withSocialMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = withSocialMetadata({
  title: "About Deview: Custom Software Development Team in Hong Kong",
  description:
    "A custom software development company with 15+ years of enterprise delivery: product, AI/ML, data and cloud engineering and enterprise platforms, with teams in Hong Kong, Vancouver, Edinburgh, and Stuttgart.",
  alternates: { canonical: "/en/about" },
});

export default function AboutPage() {
  return <AboutContent />;
}
