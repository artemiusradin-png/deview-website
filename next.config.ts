import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  env: {
    NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY: process.env.WEB3FORMS_ACCESS_KEY ?? "",
  },
};

export default nextConfig;
