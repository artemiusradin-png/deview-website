import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "10 Practical AI Use Cases for Lending Companies | DeView",
  description:
    "How AI can help small and mid-sized lending firms reduce manual work, speed up document processing, and improve customer communication — without putting confidential data at risk.",
};

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
