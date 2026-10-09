import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,

  ...(isGitHubPages && {
    output: "export",
    basePath: "/luxury-hotel-resort",
    assetPrefix: "/luxury-hotel-resort/",
  }),

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
