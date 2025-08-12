import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  redirects: async () => {
    return [
      { source: "/favicon.ico", destination: "/favicon/favicon.ico", permanent: true },
      { source: "/robots.txt", destination: "/robots", permanent: true },
    ];
  },
};

export default nextConfig;
