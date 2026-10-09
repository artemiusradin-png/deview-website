import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./editorial.css";
import { AppProviders } from "./providers";
import { FaviconTheme } from "./favicon-theme";

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

/** Display face for the landing page's large headlines (Satoshi, ITF Free Font License via Fontshare). */
const satoshi = localFont({
  src: [
    { path: "./fonts/satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/satoshi-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deviewai.com"),
  title: "Deview | AI Solutions, Software Engineering & Data Engineering",
  description:
    "Deview builds AI automation, custom software platforms, and data pipelines that cut costs and remove manual work: deployed into your existing tools, not alongside them.",
  /** Search Console ownership for the https://deviewai.com/ URL-prefix property. Removing it un-verifies the site. */
  verification: { google: "SQp0k0tERoRnCl3ZnDc1Z4ypLXfYr7DIy8SeJe6Kdlk" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f3eee2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-scroll-behavior="smooth"
      className={`h-full antialiased ${archivo.variable} ${clashDisplay.variable} ${satoshi.variable}`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--text)]">
        <FaviconTheme />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
