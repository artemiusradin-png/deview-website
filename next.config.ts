import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Web3Forms works from the browser on the free tier; server-side needs paid + IP allowlist.
   * Mirror the server env name so existing deployments keep working after this change. */
  env: {
    NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY: process.env.WEB3FORMS_ACCESS_KEY ?? "",
  },
};

export default nextConfig;
