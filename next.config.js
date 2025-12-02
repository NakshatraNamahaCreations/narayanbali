/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,    // REQUIRED for Apache static hosting
  images: {
    unoptimized: true,    // because Next.js image optimizer does not run in static export
  },
};

module.exports = nextConfig;
