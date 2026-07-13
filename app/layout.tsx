import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import localFont from "next/font/local";
import "./globals.css";
import { AppProviders } from "./providers";
import { ThemeSync } from "./theme-sync";
import type { Locale } from "@/lib/i18n/types";

const archivo = localFont({
  src: [
    { path: "./fonts/archivo-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/archivo-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-archivo",
  display: "swap",
});

const clashDisplay = localFont({
  src: [
    { path: "./fonts/clash-display-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/clash-display-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deviewai.com"),
  title: "DeView | AI Solutions, Software Engineering & Data Engineering",
  description:
    "DeView builds AI automation, custom software platforms, and data pipelines that cut costs and remove manual work — deployed into your existing tools, not alongside them.",
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
    <html
      lang={htmlLang}
      data-scroll-behavior="smooth"
      className={`h-full antialiased ${archivo.variable} ${clashDisplay.variable}`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--text)]">
        <AppProviders initialLocale={initialLocale}>
          <ThemeSync />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
