import { MetadataRoute } from "next";

/**
 * Canonical sitemap — URLs are hardcoded as absolute paths.
 * Shadow/alias routes (/formulas, /find-a-store, /our-story, /ingredients,
 * /blog/best-dog-food-for-hunting-dogs) are noindexed, disallowed in robots.ts,
 * and 301-redirected — they are intentionally excluded here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Core ────────────────────────────────────────────────────────────────
    {
      url: "",
      lastModified: new Date("2025-06-01"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "/products/gold-formula",
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "/products/blue-formula",
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "/why-outlaw",
      lastModified: new Date("2025-05-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "/why-outlaw/ingredients",
      lastModified: new Date("2025-05-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "/why-outlaw/our-story",
      lastModified: new Date("2025-05-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "/feeding-guide",
      lastModified: new Date("2025-05-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "/where-to-buy",
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "/contact",
      lastModified: new Date("2025-04-01"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    // ── Where-to-buy city pages ──────────────────────────────────────────────
    {
      url: "/where-to-buy/belton",
      lastModified: new Date("2025-05-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "/where-to-buy/waco",
      lastModified: new Date("2025-05-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "/where-to-buy/harker-heights",
      lastModified: new Date("2025-05-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "/where-to-buy/copperas-cove",
      lastModified: new Date("2025-05-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "/where-to-buy/gatesville",
      lastModified: new Date("2025-05-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "/where-to-buy/hamilton",
      lastModified: new Date("2025-05-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "/where-to-buy/hillsboro",
      lastModified: new Date("2025-05-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "/where-to-buy/lampasas",
      lastModified: new Date("2025-05-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // ── Blog ────────────────────────────────────────────────────────────────
    {
      url: "/blog",
      lastModified: new Date("2025-04-14"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "/blog/best-dog-food-hunting-dogs",
      lastModified: new Date("2025-04-10"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "/blog/no-corn-wheat-soy-dog-food",
      lastModified: new Date("2025-03-18"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "/blog/working-dog-nutrition",
      lastModified: new Date("2025-02-22"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "/blog/hunting-dog-care-tips",
      lastModified: new Date("2025-01-30"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "/blog/no-corn-no-wheat-no-soy-explained",
      lastModified: new Date("2025-03-31"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "/blog/feeding-hunting-dog-during-season",
      lastModified: new Date("2025-04-14"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "/blog/how-much-to-feed-working-ranch-dog",
      lastModified: new Date("2025-04-07"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "/blog/how-to-read-a-dog-food-label",
      lastModified: new Date("2025-03-17"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "/blog/pre-season-conditioning-hunting-dog",
      lastModified: new Date("2025-03-24"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
