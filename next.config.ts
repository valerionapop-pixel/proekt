import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 86_400,
    remotePatterns: [
      { protocol: "https", hostname: "placedog.net" },
      { protocol: "https", hostname: "cataas.com" },
      { protocol: "https", hostname: "images.unsplash.com" }
    ]
  }
};

export default nextConfig;
