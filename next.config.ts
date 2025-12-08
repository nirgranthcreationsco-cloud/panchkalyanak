import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 7,
    dangerouslyAllowSVG: true,
  },

  async headers() {
    return [
      {
        source: "/:all*(webm|mp4|png|jpg|jpeg|gif|ico|svg|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  poweredByHeader: false,
  productionBrowserSourceMaps: false,

  compress: true,

  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/404",
        permanent: false,
      },
      {
        source: "/secret",
        destination: "/404",
        permanent: false,
      },
    ];
  },

  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-icons",
    ],
  },
};

export default nextConfig;
