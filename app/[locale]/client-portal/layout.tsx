import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Client Portal | DeView",
  description: "Private project portal for DeView clients.",
  robots: { index: false, follow: false },
};

export default function ClientPortalLayout({ children }: { children: ReactNode }) {
  return children;
}
