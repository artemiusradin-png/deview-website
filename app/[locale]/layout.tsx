export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh-HK" }, { locale: "de" }];
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return <>{children}</>;
}
