import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co", // তোমার image provider hostname
      },
    ],
  },
};

export default nextConfig;
