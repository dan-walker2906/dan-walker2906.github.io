/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // Required for GitHub Pages
  images: {
    unoptimized: true,   // Required for static hosting
  },
};

module.exports = nextConfig;
