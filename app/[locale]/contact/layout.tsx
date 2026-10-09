import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Start a Project | Deview",
  description:
    "Describe the workflow you want to automate or the cost you want to reduce: we reply with a specific, scoped recommendation.",
  alternates: { canonical: "/en/contact" },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
