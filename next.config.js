/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  output: "export",
  trailingSlash: true, // REQUIRED for static hosting
  images: {
    unoptimized: true, // static export -> no image optimizer
  },

  // 👇 ADD THIS TO FIX THE WORKSPACE ROOT WARNING
  outputFileTracingRoot: path.join(__dirname),
};

module.exports = nextConfig;
