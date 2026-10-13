import type { Metadata } from "next";
import type { ReactNode } from "react";

/** The guide sits behind the sign-up form, so it is kept out of search results. */
export const metadata: Metadata = {
  title: "The Automation Playbook | DeView",
  description:
    "Where automation pays off first in lending, ventilation, agriculture, construction and oil and gas.",
  robots: { index: false, follow: true },
};

export default function PlaybookGuideLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
