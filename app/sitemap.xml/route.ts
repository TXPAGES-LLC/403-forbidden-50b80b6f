const URLS: { loc: string; lastmod: string; changefreq: string; priority: string }[] = [
  // ── Core ──────────────────────────────────────────────────────────────────
  { loc: "",                                              lastmod: "2025-06-01", changefreq: "weekly",  priority: "1.0" },
  { loc: "/products/gold-formula",                        lastmod: "2025-06-01", changefreq: "monthly", priority: "0.9" },
  { loc: "/products/blue-formula",                        lastmod: "2025-06-01", changefreq: "monthly", priority: "0.9" },
  { loc: "/why-outlaw",                                   lastmod: "2025-05-01", changefreq: "monthly", priority: "0.8" },
  { loc: "/why-outlaw/ingredients",                       lastmod: "2025-05-01", changefreq: "monthly", priority: "0.8" },
  { loc: "/why-outlaw/our-story",                         lastmod: "2025-05-01", changefreq: "monthly", priority: "0.7" },
  { loc: "/feeding-guide",                                lastmod: "2025-05-01", changefreq: "monthly", priority: "0.8" },
  { loc: "/where-to-buy",                                 lastmod: "2025-06-01", changefreq: "monthly", priority: "0.8" },
  { loc: "/contact",                                      lastmod: "2025-04-01", changefreq: "yearly",  priority: "0.6" },
  // ── Where-to-buy city pages ───────────────────────────────────────────────
  { loc: "/where-to-buy/belton",                          lastmod: "2025-05-01", changefreq: "monthly", priority: "0.7" },
  { loc: "/where-to-buy/waco",                            lastmod: "2025-05-01", changefreq: "monthly", priority: "0.7" },
  { loc: "/where-to-buy/harker-heights",                  lastmod: "2025-05-01", changefreq: "monthly", priority: "0.7" },
  { loc: "/where-to-buy/copperas-cove",                   lastmod: "2025-05-01", changefreq: "monthly", priority: "0.7" },
  { loc: "/where-to-buy/gatesville",                      lastmod: "2025-05-01", changefreq: "monthly", priority: "0.7" },
  { loc: "/where-to-buy/hamilton",                        lastmod: "2025-05-01", changefreq: "monthly", priority: "0.6" },
  { loc: "/where-to-buy/hillsboro",                       lastmod: "2025-05-01", changefreq: "monthly", priority: "0.6" },
  { loc: "/where-to-buy/lampasas",                        lastmod: "2025-05-01", changefreq: "monthly", priority: "0.6" },
  // ── Blog ──────────────────────────────────────────────────────────────────
  { loc: "/blog",                                         lastmod: "2025-04-14", changefreq: "weekly",  priority: "0.7" },
  { loc: "/blog/best-dog-food-hunting-dogs",              lastmod: "2025-04-10", changefreq: "monthly", priority: "0.7" },
  { loc: "/blog/no-corn-wheat-soy-dog-food",              lastmod: "2025-03-18", changefreq: "monthly", priority: "0.7" },
  { loc: "/blog/working-dog-nutrition",                   lastmod: "2025-02-22", changefreq: "monthly", priority: "0.7" },
  { loc: "/blog/hunting-dog-care-tips",                   lastmod: "2025-01-30", changefreq: "monthly", priority: "0.7" },
  { loc: "/blog/no-corn-no-wheat-no-soy-explained",       lastmod: "2025-03-31", changefreq: "monthly", priority: "0.6" },
  { loc: "/blog/feeding-hunting-dog-during-season",       lastmod: "2025-04-14", changefreq: "monthly", priority: "0.6" },
  { loc: "/blog/how-much-to-feed-working-ranch-dog",      lastmod: "2025-04-07", changefreq: "monthly", priority: "0.6" },
  { loc: "/blog/how-to-read-a-dog-food-label",            lastmod: "2025-03-17", changefreq: "monthly", priority: "0.6" },
  { loc: "/blog/pre-season-conditioning-hunting-dog",     lastmod: "2025-03-24", changefreq: "monthly", priority: "0.6" },
];

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${URLS.map(
  (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
