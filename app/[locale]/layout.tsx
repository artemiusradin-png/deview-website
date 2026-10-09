import { SiteFrame } from "@/components/SiteFrame";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return <SiteFrame>{children}</SiteFrame>;
}
