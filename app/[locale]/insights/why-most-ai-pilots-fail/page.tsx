import type { Metadata } from "next";
import { PilotsFailContent } from "./pilots-fail-content";

export const metadata: Metadata = {
  title: "Why most AI pilots fail | DeView Insights",
  description:
    "Three-quarters of enterprise AI pilots never make it to production. The cause is almost never the technology — here's what actually goes wrong.",
};

export default function ArticlePage() {
  return <PilotsFailContent />;
}
