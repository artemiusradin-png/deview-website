import { withSocialMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = withSocialMetadata({
  title: "FAQ | Deview",
  description:
    "Questions we answer before every engagement: process, data and security, AI performance and reliability, and what happens after deployment.",
  alternates: { canonical: "/en/faq" },
});

export default function FaqLayout({ children }: { children: ReactNode }) {
  return children;
}
