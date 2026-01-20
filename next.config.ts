import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // This line is CRITICAL for GitHub Pages
  images: {
    unoptimized: true,   // Required for static hosting
  },
};

export default nextConfig;
