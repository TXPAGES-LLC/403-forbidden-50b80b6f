import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Texas-Made Dog Food for Working & Hunting Dogs | Outlaw Feed",
  description:
    "Outlaw Feed: Texas-made, AAFCO-certified dog food with no corn, wheat, or soy. Real meat first ingredient for hunting dogs, ranch dogs, and working dogs in Bell County, TX.",
  alternates: { canonical: "" },
};

const proofItems = [
  { stat: "No Corn", sub: "No Wheat. No Soy." },
  { stat: "Made in Texas", sub: "Bell County, TX" },
  { stat: "AAFCO Certified", sub: "All Life Stages" },
  { stat: "Real Meat", sub: "First Ingredient — Always" },
  { stat: "26% / 21% Protein", sub: "Gold & Blue Formulas" },
];

const products = [
  {
    name: "Gold Formula",
    tagline: "High-Performance Adult Formula",
    protein: "26%",
    fat: "18%",
    source: "Chicken Rice & Brown Rice",
    ideal: "Working, hunting & active dogs",
    href: "/products/gold-formula",
    img: "/Gold-Package-Dog-Food-Dog-Food-Pet-Food.png",
    imgAlt: "Outlaw Feed Gold Formula bag — 26% protein 18% fat, Texas-made dog food, no corn wheat or soy",
    badge: "",
  },
  {
    name: "Blue Formula",
    tagline: "Adult Maintenance Formula",
    protein: "21%",
    fat: "15%",
    source: "Chicken Meal & Grain Sorghum",
    ideal: "Adult dogs & everyday nutrition",
    href: "/products/blue-formula",
    img: "/Blue-Package-Dog-Food-Dog-Food-Pet-Food.png",
    imgAlt: "Outlaw Feed Blue Formula bag — 21% protein 15% fat, Texas-made dog food, no corn wheat or soy",
    badge: "",
  },
];

const whyPoints = [
  {
    heading: "Real Ingredients",
    body: "Every bag starts with real, named meat — never by-products or mystery meal. You can read every ingredient on the label.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/><path d="m9 12 2 2 4-4"/></svg>
    ),
    href: "/why-outlaw/ingredients",
  },
  {
    heading: "Life Stage Formulas",
    body: "From puppies burning their first trails to seasoned ranch dogs, we have a formula tuned to every life stage and activity level.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
    href: "/products/gold-formula",
  },
  {
    heading: "Texas Made",
    body: "Manufactured right here in Bell County, Texas. Every batch is produced with local oversight and shipped fresh to retailers across the state.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    ),
    href: "/why-outlaw/our-story",
  },
];

const testimonials = [
  {
    quote: "My bird dogs have never looked or performed better. Coat is slick, energy is through the roof, and they hold weight during season. Switched to Outlaw two years ago and will never go back.",
    author: "Jake M.",
    role: "Quail Hunter, Lampasas TX",
  },
  {
    quote: "Finally a food where I can actually read the ingredient list without a chemistry degree. My working ranch dogs eat Gold Formula and I've seen a real difference in their stamina.",
    author: "Carla D.",
    role: "Cattle Ranch, Bell County TX",
  },
  {
    quote: "Outlaw Blue kept my GSP pup's joints healthy and coat perfect through his whole first year. Now he's on Gold and wins every hunt test I put him in.",
    author: "Travis R.",
    role: "Hunt Test Competitor, Waco TX",
  },
];

const blogPreviews = [
  {
    title: "Best Dog Food for Hunting Dogs: What to Look For in a Field Formula",
    excerpt: "Not all high-protein dog foods are created equal. Learn what separates a true hunting dog formula from a marketing label.",
    href: "/blog/best-dog-food-hunting-dogs",
    img: "https://images.unsplash.com/photo-1601758174493-45d0a4d3e407?auto=format&fit=crop&w=600&q=75",
    imgAlt: "Hunting dog in Texas field — choosing the best dog food for hunting dogs",
    date: "April 2025",
    category: "Nutrition",
  },
  {
    title: "No Corn, Wheat, or Soy: Why It Matters for Your Dog",
    excerpt: "Corn, wheat, and soy are cheap fillers that compromise digestion, coat quality, and long-term health. Here is exactly why Outlaw cuts them out.",
    href: "/blog/no-corn-wheat-soy-dog-food",
    img: "https://images.unsplash.com/photo-1597843786411-a7fa8ad44a95?auto=format&fit=crop&w=600&q=75",
    imgAlt: "Real meat ingredients for dog food — no corn wheat or soy",
    date: "March 2025",
    category: "Ingredients",
  },
  {
    title: "Working Dog Nutrition: Fueling a Ranch Dog Through Demand Season",
    excerpt: "During peak work seasons, your ranch dog needs more than maintenance calories. We break down protein, fat, and feeding timing for hardworking dogs.",
    href: "/blog/working-dog-nutrition",
    img: "/working-dog-nutrition.png",
    imgAlt: "Golden retriever working dog running across a rural field at sunset — working dog nutrition guide by Outlaw Feed",
    date: "February 2025",
    category: "Working Dogs",
  },
];

const retailers = [
  { name: "Belton Feed and Supply",          city: "Belton, TX",        phone: "(254) 939-3636" },
  { name: "Keith Ace Hardware",              city: "Belton, TX",        phone: "(254) 613-4235" },
  { name: "Central Texas Feed and Supply",   city: "Killeen, TX",       phone: "(254) 628-1002" },
  { name: "D and D Feed Store",              city: "Copperas Cove, TX", phone: "(254) 547-4812" },
  { name: "Niemeier Feed and Grain",         city: "McGregor, TX",      phone: "(254) 840-4106" },
  { name: "Expo Quik Stop",                  city: "Belton, TX",        phone: "(254) 933-3976" },
];

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Outlaw Feed Dog Food Products",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Outlaw Feed Gold Formula",
      url: "/products/gold-formula",
      description: "High-performance adult dog food with 26% protein and 18% fat, no corn wheat or soy, made in Texas.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Outlaw Feed Blue Formula",
      url: "/products/blue-formula",
      description: "Adult maintenance dog food with 21% protein and 15% fat, no corn wheat or soy, made in Texas.",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />

      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex items-end pb-20 md:pb-28 overflow-hidden"
        aria-label="Hero"
      >
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1600&q=80"
          alt="Texas hunting dog in field — Outlaw Feed working dog food made in Texas"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-[#0f0e0c]/60 to-[#0f0e0c]/10" />
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 w-full">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-[#c85a00] font-semibold mb-4">
            Made in Bell County, Texas
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#f5f0e8] mb-6 text-balance max-w-3xl">
            No Fillers.
            <br />
            No Compromise.
            <br />
            <span className="text-[#e8a44a]">No Apologies.</span>
          </h1>
          <p className="text-[#f5f0e8]/80 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            Texas-made dog food built for dogs that work as hard as their owners.
            No corn, wheat, or soy. Real meat — first ingredient, every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/where-to-buy"
              className="inline-flex items-center justify-center px-7 py-4 bg-[#c85a00] text-white font-semibold text-sm uppercase tracking-widest rounded hover:bg-[#a84800] transition-colors"
            >
              Find a Store Near You
            </Link>
            <Link
              href="/products/gold-formula"
              className="inline-flex items-center justify-center px-7 py-4 border border-[#f5f0e8]/40 text-[#f5f0e8] font-semibold text-sm uppercase tracking-widest rounded hover:border-[#e8a44a] hover:text-[#e8a44a] transition-colors"
            >
              See Our Formulas
            </Link>
          </div>
        </div>
      </section>

      {/* ── Proof Strip ── */}
      <section
        className="bg-[#1a1712] border-y border-[#2e2820]"
        aria-label="Key brand proof points"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ul className="flex flex-wrap divide-x divide-[#2e2820]">
            {proofItems.map((item) => (
              <li
                key={item.stat}
                className="flex-1 min-w-[140px] flex flex-col items-center justify-center py-5 px-4 text-center"
              >
                <span className="font-serif text-base md:text-lg font-bold text-[#e8a44a] whitespace-nowrap">
                  {item.stat}
                </span>
                <span className="font-sans text-[11px] uppercase tracking-wider text-[#9a8870] mt-0.5">
                  {item.sub}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Product Showcase ── */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-[#0f0e0c]" aria-labelledby="products-heading">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#c85a00] font-semibold mb-3">
              Our Formulas
            </p>
            <h2
              id="products-heading"
              className="font-serif text-4xl md:text-5xl font-bold text-[#f5f0e8] text-balance"
            >
              Built for Real Dogs.
              <br />
              <span className="text-[#9a8870]">Not a Marketing Budget.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((p) => (
              <article
                key={p.name}
                className="group relative bg-[#1a1712] border border-[#2e2820] rounded-lg overflow-hidden hover:border-[#c85a00]/50 transition-colors"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.imgAlt}
                    className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={256}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1712] to-transparent" />
                  {p.badge && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-[#c85a00] text-white text-xs font-semibold uppercase tracking-wider rounded">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#9a8870] mb-2">
                    {p.tagline}
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-[#f5f0e8] mb-4">
                    {p.name}
                  </h3>
                  <dl className="flex flex-wrap gap-4 mb-4 text-sm">
                    <div>
                      <dt className="text-[#9a8870] text-xs uppercase tracking-wider">Protein</dt>
                      <dd className="font-serif font-bold text-[#e8a44a] text-xl">{p.protein}</dd>
                    </div>
                    <div>
                      <dt className="text-[#9a8870] text-xs uppercase tracking-wider">Fat</dt>
                      <dd className="font-serif font-bold text-[#e8a44a] text-xl">{p.fat}</dd>
                    </div>
                    <div>
                      <dt className="text-[#9a8870] text-xs uppercase tracking-wider">Source</dt>
                      <dd className="text-[#f5f0e8] font-medium text-sm mt-1">{p.source}</dd>
                    </div>
                  </dl>
                  <p className="text-[#9a8870] text-sm mb-6">
                    <span className="text-[#f5f0e8]/70">Ideal for:</span> {p.ideal}
                  </p>
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#c85a00] text-white text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#a84800] transition-colors"
                    aria-label={`Learn more about ${p.name}`}
                  >
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Outlaw ── */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-[#1a1712] border-y border-[#2e2820]" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#c85a00] font-semibold mb-3">
              Why Outlaw
            </p>
            <h2
              id="why-heading"
              className="font-serif text-4xl md:text-5xl font-bold text-[#f5f0e8] text-balance"
            >
              The Difference You Can Read on the Bag
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyPoints.map((pt) => (
              <div
                key={pt.heading}
                className="flex flex-col items-start p-8 bg-[#0f0e0c] border border-[#2e2820] rounded-lg hover:border-[#c85a00]/40 transition-colors"
              >
                <div className="text-[#c85a00] mb-5">{pt.icon}</div>
                <h3 className="font-serif text-xl font-bold text-[#f5f0e8] mb-3">
                  {pt.heading}
                </h3>
                <p className="text-[#9a8870] text-sm leading-relaxed flex-1">{pt.body}</p>
                <Link
                  href={pt.href}
                  className="mt-6 text-xs font-semibold uppercase tracking-wider text-[#c85a00] hover:text-[#e8a44a] transition-colors inline-flex items-center gap-1.5"
                >
                  Learn More
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hero CTA band ── */}
      <section className="relative py-24 md:py-32 px-4 md:px-6 overflow-hidden" aria-label="Brand promise">
        <img
          src="/made-in-texas,-made-to-work.png"
          alt="Ranch dog sitting by a stone fireplace with Texas flag in a rustic ranch house — Outlaw Feed, made in Texas made to work"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[#0f0e0c]/80" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-[#c85a00] font-semibold mb-4">
            Outlaw Feed
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#f5f0e8] mb-6 text-balance">
            Made in Texas.{" "}
            <span className="text-[#e8a44a]">Made to Work.</span>
          </h2>
          <p className="text-[#f5f0e8]/70 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            From bird dogs in the brush to cattle dogs on the caliche — if your dog works for a living, Outlaw Feed is the only food built for their demands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/where-to-buy"
              className="px-8 py-4 bg-[#c85a00] text-white font-semibold text-sm uppercase tracking-widest rounded hover:bg-[#a84800] transition-colors"
            >
              Find a Retailer
            </Link>
            <Link
              href="/why-outlaw"
              className="px-8 py-4 border border-[#e8a44a] text-[#e8a44a] font-semibold text-sm uppercase tracking-widest rounded hover:bg-[#e8a44a]/10 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* ── Retailer Preview ── */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-[#0f0e0c]" aria-labelledby="retailers-heading">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#c85a00] font-semibold mb-3">
                Where to Buy
              </p>
              <h2
                id="retailers-heading"
                className="font-serif text-4xl md:text-5xl font-bold text-[#f5f0e8] text-balance"
              >
                Find Outlaw Near You
              </h2>
            </div>
            <Link
              href="/where-to-buy"
              className="shrink-0 px-6 py-3 border border-[#2e2820] text-[#f5f0e8]/70 text-sm font-semibold uppercase tracking-wider rounded hover:border-[#c85a00] hover:text-[#c85a00] transition-colors"
            >
              View All Retailers
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {retailers.map((r) => (
              <div
                key={r.name}
                className="flex items-start gap-4 p-5 bg-[#1a1712] border border-[#2e2820] rounded-lg hover:border-[#c85a00]/50 transition-colors group"
              >
                <div className="mt-0.5 text-[#c85a00] shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <Link
                    href="/where-to-buy"
                    className="font-semibold text-[#f5f0e8] text-sm group-hover:text-[#e8a44a] transition-colors hover:text-[#e8a44a]"
                    aria-label={`${r.name} in ${r.city} — view on store locator`}
                  >
                    {r.name}
                  </Link>
                  <p className="text-[#9a8870] text-xs mt-0.5">{r.city}</p>
                  <a
                    href={`tel:${r.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-[#9a8870] text-xs hover:text-[#c85a00] transition-colors mt-0.5 block"
                  >
                    {r.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 bg-[#1a1712] border border-[#c85a00]/30 rounded-lg flex flex-col sm:flex-row items-center gap-4">
            <div className="text-[#c85a00]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <p className="text-[#f5f0e8]/80 text-sm flex-1 text-center sm:text-left">
              <strong className="text-[#f5f0e8]">Bell County local?</strong> We offer direct delivery for orders in the county. Call us at{" "}
              <a href="tel:+12549393957" className="text-[#c85a00] hover:text-[#e8a44a] transition-colors">
                (254) 939-3957
              </a>
            </p>
            <Link
              href="/contact"
              className="shrink-0 px-5 py-2.5 bg-[#c85a00] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#a84800] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-[#1a1712] border-y border-[#2e2820]" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#c85a00] font-semibold mb-3">
              The Outlaw Pack
            </p>
            <h2
              id="testimonials-heading"
              className="font-serif text-4xl md:text-5xl font-bold text-[#f5f0e8] text-balance"
            >
              Straight from the Field
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="flex flex-col p-8 bg-[#0f0e0c] border border-[#2e2820] rounded-lg"
              >
                <div className="flex gap-0.5 mb-5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#e8a44a" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <p className="text-[#f5f0e8]/80 text-sm leading-relaxed flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 pt-5 border-t border-[#2e2820]">
                  <p className="font-semibold text-[#f5f0e8] text-sm">{t.author}</p>
                  <p className="text-[#9a8870] text-xs mt-0.5">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Preview ── */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-[#0f0e0c]" aria-labelledby="blog-heading">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#c85a00] font-semibold mb-3">
                Resources
              </p>
              <h2
                id="blog-heading"
                className="font-serif text-4xl md:text-5xl font-bold text-[#f5f0e8] text-balance"
              >
                From the Ranch
              </h2>
            </div>
            <Link
              href="/blog"
              className="shrink-0 px-6 py-3 border border-[#2e2820] text-[#f5f0e8]/70 text-sm font-semibold uppercase tracking-wider rounded hover:border-[#c85a00] hover:text-[#c85a00] transition-colors"
            >
              All Articles
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPreviews.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group bg-[#1a1712] border border-[#2e2820] rounded-lg overflow-hidden hover:border-[#c85a00]/50 transition-colors block"
                aria-label={`Read: ${post.title}`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.imgAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={192}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#c85a00]">
                      {post.category}
                    </span>
                    <span className="text-[#9a8870] text-xs">{post.date}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#f5f0e8] mb-2 group-hover:text-[#e8a44a] transition-colors text-balance leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[#9a8870] text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
