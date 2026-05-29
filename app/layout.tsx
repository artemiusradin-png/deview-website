import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import { AppProviders } from "./providers";
import { ThemeSync } from "./theme-sync";
import { PixelField } from "@/components/PixelField";
import type { Locale } from "@/lib/i18n/types";

export const metadata: Metadata = {
  title: "DeView | AI Consulting & Data Engineering",
  description: "DeView partners with enterprises to design, build, and scale AI systems and data platforms with production-grade reliability.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#f3eee2" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("deview-locale")?.value ?? cookieStore.get("deview-geo-locale")?.value;
  const initialLocale: Locale =
    localeCookie === "zh-HK" || localeCookie === "en" || localeCookie === "de" ? localeCookie : "en";
  const htmlLang = initialLocale === "zh-HK" ? "zh-Hant-HK" : initialLocale === "de" ? "de" : "en";

  return (
    <html lang={htmlLang} data-scroll-behavior="smooth" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=archivo@300,400,500&f[]=clash-display@600,700&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--text)]">
        <AppProviders initialLocale={initialLocale}>
          <ThemeSync />
          {children}
          <PixelField />
        </AppProviders>
      </body>
    </html>
  );
}
