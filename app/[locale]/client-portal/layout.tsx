import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Client Portal | Deview",
  description: "Private project portal for Deview clients.",
  robots: { index: false, follow: false },
};

export default function ClientPortalLayout({ children }: { children: ReactNode }) {
  return children;
}
