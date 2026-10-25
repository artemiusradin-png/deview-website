import { withSocialMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = withSocialMetadata({
  title: "Free Playbook: Where Automation Pays Off First | Deview",
  description:
    "The workflows worth automating first in lending, ventilation, agriculture, construction and oil and gas, with step-by-step examples and what stays with your people.",
  alternates: { canonical: "/en/resources/automation-playbook" },
});

export default function AutomationPlaybookLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
