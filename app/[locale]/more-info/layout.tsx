import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Enterprise AI Architecture | DeView",
  description:
    "What DeView builds, how our architecture is structured, and why production-grade AI is different from a demo.",
  alternates: { canonical: "/en/more-info" },
  robots: { index: false, follow: true },
};

export default function MoreInfoLayout({ children }: { children: ReactNode }) {
  return children;
}
