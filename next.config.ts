import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true // This is needed when using export
  },
  // keep any other config options you might add later
};

export default nextConfig;