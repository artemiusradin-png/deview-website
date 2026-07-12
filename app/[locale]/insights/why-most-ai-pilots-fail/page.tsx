import type { Metadata } from "next";
import { PilotsFailContent } from "./pilots-fail-content";

export const metadata: Metadata = {
  title: "Why most AI pilots fail | DeView Insights",
  description:
    "Three-quarters of enterprise AI pilots never make it to production. The cause is almost never the technology — here's what actually goes wrong.",
  openGraph: {
    images: [{ url: "/images/insights/why-most-ai-pilots-fail-1200.webp", width: 1200, height: 675 }],
  },
};

export default function ArticlePage() {
  return <PilotsFailContent />;
}
