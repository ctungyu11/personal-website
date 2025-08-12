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
  // Plausible first‑party proxy (add vercel.json rewrites later if needed)
  rewrites: async () => {
    return [{ source: "/stats/:path*", destination: "https://plausible.io/:path*" }];
  },
};

export default nextConfig;
