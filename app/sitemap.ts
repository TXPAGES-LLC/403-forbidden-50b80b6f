import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Core ────────────────────────────────────────────────────────────────
    {
      url: "",
      lastModified: "2025-06-01",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "/products/gold-formula",
      lastModified: "2025-06-01",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "/products/blue-formula",
      lastModified: "2025-06-01",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "/why-outlaw",
      lastModified: "2025-05-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "/why-outlaw/ingredients",
      lastModified: "2025-05-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "/why-outlaw/our-story",
      lastModified: "2025-05-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "/feeding-guide",
      lastModified: "2025-05-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "/where-to-buy",
      lastModified: "2025-06-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "/contact",
      lastModified: "2025-04-01",
      changeFrequency: "yearly",
      priority: 0.6,
    },
    // ── Where-to-buy city pages ──────────────────────────────────────────────
    {
      url: "/where-to-buy/belton",
      lastModified: "2025-05-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "/where-to-buy/waco",
      lastModified: "2025-05-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "/where-to-buy/harker-heights",
      lastModified: "2025-05-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "/where-to-buy/copperas-cove",
      lastModified: "2025-05-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "/where-to-buy/gatesville",
      lastModified: "2025-05-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "/where-to-buy/hamilton",
      lastModified: "2025-05-01",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "/where-to-buy/hillsboro",
      lastModified: "2025-05-01",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "/where-to-buy/lampasas",
      lastModified: "2025-05-01",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // ── Blog ────────────────────────────────────────────────────────────────
    {
      url: "/blog",
      lastModified: "2025-04-14",
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "/blog/best-dog-food-hunting-dogs",
      lastModified: "2025-04-10",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "/blog/no-corn-wheat-soy-dog-food",
      lastModified: "2025-03-18",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "/blog/working-dog-nutrition",
      lastModified: "2025-02-22",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "/blog/hunting-dog-care-tips",
      lastModified: "2025-01-30",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "/blog/no-corn-no-wheat-no-soy-explained",
      lastModified: "2025-03-31",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "/blog/feeding-hunting-dog-during-season",
      lastModified: "2025-04-14",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "/blog/how-much-to-feed-working-ranch-dog",
      lastModified: "2025-04-07",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "/blog/how-to-read-a-dog-food-label",
      lastModified: "2025-03-17",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "/blog/pre-season-conditioning-hunting-dog",
      lastModified: "2025-03-24",
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
