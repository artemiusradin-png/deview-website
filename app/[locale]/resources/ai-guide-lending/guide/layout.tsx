import type { Metadata } from "next";

/** The guide sits behind the sign-up form, so it is kept out of search results. */
export const metadata: Metadata = {
  title: "10 Practical AI Use Cases for Lending Companies | Deview",
  description:
    "How AI can help small and mid-sized lending firms reduce manual work, speed up document processing, and improve customer communication: without putting confidential data at risk.",
  robots: { index: false, follow: true },
};

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
