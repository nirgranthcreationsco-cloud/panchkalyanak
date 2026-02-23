// app/robots.ts
// Next.js 14+ App Router – auto-generates /robots.txt

import { MetadataRoute } from "next";

const BASE_URL = "https://hrimkartirth.com";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                // Allow all well-behaved bots
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/api/",          // internal API routes
                    "/_next/",        // Next.js internals
                    "/admin",
                    "/secret",
                ],
            },
            {
                // Explicitly welcome Googlebot image crawler
                userAgent: "Googlebot-Image",
                allow: "/",
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}
