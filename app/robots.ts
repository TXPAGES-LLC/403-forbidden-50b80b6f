import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          // Internal tooling — never index
          "/api/",
          "/private/",
          "/seo-audit/",
          // Shadow / alias paths — 301 redirects exist; disallow to prevent crawl waste
          "/formulas/",
          "/find-a-store/",
          "/our-story/",
          "/ingredients/",
          "/blog/best-dog-food-for-hunting-dogs/",
        ],
      },
    ],
    sitemap: "/sitemap.xml",
  };
}
