// app/robots.ts
// Next.js 14+ App Router – auto-generates /robots.txt

import { MetadataRoute } from "next";

const BASE_URL = "https://hrimkartirth.com";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: ["/$"], // Only allow the exact homepage URL
                disallow: ["/"], // Disallow everything else
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}
