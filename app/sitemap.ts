import { MetadataRoute } from "next";

const BASE = "";

type Route = {
  path: string;
  lastModified: string;
  priority: number;
  changefreq: MetadataRoute.Sitemap[number]["changeFrequency"];
};

/**
 * Canonical pages only.
 * Shadow/alias routes (/formulas, /find-a-store, /our-story, /ingredients,
 * /blog/best-dog-food-for-hunting-dogs) are noindexed, disallowed in robots.txt,
 * and 301-redirected — they are intentionally excluded here.
 */
const routes: Route[] = [
  // ── Core ──────────────────────────────────────────────────────────────────
  { path: "",                             lastModified: "2025-06-01", priority: 1.0, changefreq: "weekly"  },
  { path: "/products/gold-formula",       lastModified: "2025-06-01", priority: 0.9, changefreq: "monthly" },
  { path: "/products/blue-formula",       lastModified: "2025-06-01", priority: 0.9, changefreq: "monthly" },
  { path: "/why-outlaw",                  lastModified: "2025-05-01", priority: 0.8, changefreq: "monthly" },
  { path: "/why-outlaw/ingredients",      lastModified: "2025-05-01", priority: 0.8, changefreq: "monthly" },
  { path: "/why-outlaw/our-story",        lastModified: "2025-05-01", priority: 0.7, changefreq: "monthly" },
  { path: "/feeding-guide",               lastModified: "2025-05-01", priority: 0.8, changefreq: "monthly" },
  { path: "/where-to-buy",               lastModified: "2025-06-01", priority: 0.8, changefreq: "monthly" },
  { path: "/contact",                     lastModified: "2025-04-01", priority: 0.6, changefreq: "yearly"  },
  // ── Where-to-buy city pages ───────────────────────────────────────────────
  { path: "/where-to-buy/belton",         lastModified: "2025-05-01", priority: 0.7, changefreq: "monthly" },
  { path: "/where-to-buy/waco",           lastModified: "2025-05-01", priority: 0.7, changefreq: "monthly" },
  { path: "/where-to-buy/harker-heights", lastModified: "2025-05-01", priority: 0.7, changefreq: "monthly" },
  { path: "/where-to-buy/copperas-cove",  lastModified: "2025-05-01", priority: 0.7, changefreq: "monthly" },
  { path: "/where-to-buy/gatesville",     lastModified: "2025-05-01", priority: 0.7, changefreq: "monthly" },
  { path: "/where-to-buy/hamilton",       lastModified: "2025-05-01", priority: 0.6, changefreq: "monthly" },
  { path: "/where-to-buy/hillsboro",      lastModified: "2025-05-01", priority: 0.6, changefreq: "monthly" },
  { path: "/where-to-buy/lampasas",       lastModified: "2025-05-01", priority: 0.6, changefreq: "monthly" },
  // ── Blog ──────────────────────────────────────────────────────────────────
  { path: "/blog",                                           lastModified: "2025-04-14", priority: 0.7, changefreq: "weekly"  },
  { path: "/blog/best-dog-food-hunting-dogs",                lastModified: "2025-04-10", priority: 0.7, changefreq: "monthly" },
  { path: "/blog/no-corn-wheat-soy-dog-food",                lastModified: "2025-03-18", priority: 0.7, changefreq: "monthly" },
  { path: "/blog/working-dog-nutrition",                     lastModified: "2025-02-22", priority: 0.7, changefreq: "monthly" },
  { path: "/blog/hunting-dog-care-tips",                     lastModified: "2025-01-30", priority: 0.7, changefreq: "monthly" },
  { path: "/blog/no-corn-no-wheat-no-soy-explained",         lastModified: "2025-03-31", priority: 0.6, changefreq: "monthly" },
  { path: "/blog/feeding-hunting-dog-during-season",         lastModified: "2025-04-14", priority: 0.6, changefreq: "monthly" },
  { path: "/blog/how-much-to-feed-working-ranch-dog",        lastModified: "2025-04-07", priority: 0.6, changefreq: "monthly" },
  { path: "/blog/how-to-read-a-dog-food-label",              lastModified: "2025-03-17", priority: 0.6, changefreq: "monthly" },
  { path: "/blog/pre-season-conditioning-hunting-dog",       lastModified: "2025-03-24", priority: 0.6, changefreq: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, lastModified, priority, changefreq }) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency: changefreq,
    priority,
  }));
}
