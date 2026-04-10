import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "uwrov.org" },
      { protocol: "https", hostname: "uwrovorg.wordpress.com" },
    ],
  },
};

export default nextConfig;
