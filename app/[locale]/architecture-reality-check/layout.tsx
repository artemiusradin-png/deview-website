import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Architecture reality check | Deview",
  description:
    "How infrastructure determines whether an AI system belongs in an enterprise: public vs enterprise deployment.",
  alternates: { canonical: "/en/architecture-reality-check" },
};

export default function ArchitectureRealityCheckLayout({ children }: { children: ReactNode }) {
  return children;
}
