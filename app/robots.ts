// app/robots.ts
// Next.js 14+ App Router – auto-generates /robots.txt

import { MetadataRoute } from "next";

const BASE_URL = "https://www.hrimkartirth.com";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/", // Allow everything on the primary domain
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}
