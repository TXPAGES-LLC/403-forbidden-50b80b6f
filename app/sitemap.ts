import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: "", lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: "/products/gold-formula", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: "/products/blue-formula", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: "/why-outlaw", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "/why-outlaw/ingredients", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "/why-outlaw/our-story", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "/where-to-buy", lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: "/where-to-buy/belton", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "/where-to-buy/harker-heights", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "/where-to-buy/gatesville", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "/where-to-buy/copperas-cove", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "/where-to-buy/hillsboro", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "/where-to-buy/hamilton", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "/where-to-buy/lampasas", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "/where-to-buy/waco", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "/feeding-guide", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "/blog", lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: "/blog/best-dog-food-hunting-dogs", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: "/blog/no-corn-wheat-soy-dog-food", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: "/blog/working-dog-nutrition", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: "/blog/hunting-dog-care-tips", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: "/contact", lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];
}
