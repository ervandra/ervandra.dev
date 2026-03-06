import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      // Old Pages Router routes
      { source: "/cv", destination: "/about", permanent: true },
      { source: "/thanks", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
