import type { Metadata } from "next";
import { HowWeWorkContent } from "./how-we-work-content";

export const metadata: Metadata = {
  title: "How We Work | DeView",
  description:
    "Four phases from first conversation to live deployment — how DeView scopes, builds, and hands over AI systems in 1–8 weeks.",
};

export default function HowWeWorkPage() {
  return <HowWeWorkContent />;
}
