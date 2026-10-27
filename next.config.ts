import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  env: {
    NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY: process.env.WEB3FORMS_ACCESS_KEY ?? "",
  },
  async redirects() {
    return [
      // The pricing page was removed; old links and search results go to the project inquiry page.
      { source: "/pricing", destination: "/en/contact", permanent: true },
      { source: "/en/pricing", destination: "/en/contact", permanent: true },
      // ROI calculator removed; old links and search results redirect to contact.
      { source: "/roi-calculator", destination: "/en/contact", permanent: true },
      { source: "/en/roi-calculator", destination: "/en/contact", permanent: true },
    ];
  },
};

export default nextConfig;
