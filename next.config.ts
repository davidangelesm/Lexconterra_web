import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Todas las páginas se prerenderizan; no requieren APIs de caché experimentales.
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
