import type { Metadata, Viewport } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { ThemeSync } from "./theme-sync";

const footerMulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-footer-mulish",
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
    <html lang="en" className={`h-full antialiased ${footerMulish.variable}`}>
      <body className={`min-h-full flex flex-col bg-[var(--background)] text-[var(--text)] ${footerMulish.variable}`}>
        <ThemeSync />
        {children}
      </body>
    </html>
  );
}
