import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "10 Practical AI Use Cases for Lending Companies | Deview",
  description:
    "How AI can help small and mid-sized lending firms reduce manual work, speed up document processing, and improve customer communication: without putting confidential data at risk.",
  alternates: { canonical: "/en/resources/ai-guide-lending/guide" },
};

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
