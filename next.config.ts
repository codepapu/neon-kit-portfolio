import type { NextConfig } from "next";

/** GitHub Pages project sites: set NEXT_BASE_PATH=/repo-name (workflow sets this). User site: leave empty. */
const basePath = (process.env.NEXT_BASE_PATH || process.env.NEXT_PUBLIC_BASE_PATH || "")
  .replace(/^\/+|\/+$/g, "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  basePath: basePath ? `/${basePath}` : undefined,
  assetPrefix: basePath ? `/${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
