import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/",
      destination: "/step-1",
      permanent: false,
    },
  ],
};

export default nextConfig;
