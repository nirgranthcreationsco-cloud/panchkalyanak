import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  /* ── Image Optimization ── */
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,   // 30 days
    dangerouslyAllowSVG: true,
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  /* ── HTTP Headers (Security + Performance + SEO) ── */
  async headers() {
    return [
      /* Static assets – long cache */
      {
        source: "/:all*(webm|mp4|png|jpg|jpeg|gif|ico|svg|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      /* Global security headers */
      {
        source: "/(.*)",
        headers: [
          // Prevent clickjacking
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Prevent MIME sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // XSS protection
          { key: "X-XSS-Protection", value: "1; mode=block" },
          // Referrer for analytics
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Permissions policy
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
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
