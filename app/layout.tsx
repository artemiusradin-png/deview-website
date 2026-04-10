import type { Metadata, Viewport } from "next";
import { Red_Rose } from "next/font/google";
import "./globals.css";
import { AppProviders } from "./providers";
import { ThemeSync } from "./theme-sync";

const redRose = Red_Rose({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-red-rose",
  display: "swap",
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${redRose.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=archivo@300,400,500&f[]=clash-display@600,700&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--text)]">
        <AppProviders>
          <ThemeSync />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
