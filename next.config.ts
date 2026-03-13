import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev-image-s.russoft-it.ru",
      },
    ],
  },
};

export default nextConfig;
