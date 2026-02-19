// app/sitemap.ts
import { MetadataRoute } from "next";

const BASE_URL = "https://www.hrimkartirth.com";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${BASE_URL}`,
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
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date("2026-02-19"),
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${BASE_URL}/location`,
            lastModified: new Date("2026-02-19"),
            changeFrequency: "monthly",
            priority: 0.80,
        },
        {
            url: `${BASE_URL}/history`,
            lastModified: new Date("2026-02-19"),
            changeFrequency: "monthly",
            priority: 0.75,
        },
    ];
}
