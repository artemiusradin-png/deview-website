import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Architecture reality check | DeView",
  description:
    "How infrastructure determines whether an AI system belongs in an enterprise — public vs enterprise deployment.",
};

export default function ArchitectureRealityCheckLayout({ children }: { children: ReactNode }) {
  return children;
}
