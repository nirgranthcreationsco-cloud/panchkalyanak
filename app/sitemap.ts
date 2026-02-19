// app/sitemap.ts
// Next.js 14+ App Router – auto generates /sitemap.xml

import { MetadataRoute } from "next";

const BASE_URL = "https://panchkalyanak.com";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: BASE_URL,
            lastModified: new Date("2026-02-19"),
            changeFrequency: "daily",
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/moreyojnas`,
            lastModified: new Date("2026-02-19"),
            changeFrequency: "weekly",
            priority: 0.9,
        },
    ];
}
