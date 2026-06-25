import type { Metadata } from "next";
import Link from "next/link";
import GtmCtaLink from "@/components/gtm-cta-link";

export const metadata: Metadata = {
  title: "Gold Formula Dog Food — 26% Protein | Outlaw Feed",
  description:
    "Outlaw Feed Gold Formula: 26% protein, 18% fat, zero fillers. Real chicken, brown rice, no corn, wheat, or soy. 3,640 kcal/kg. Texas-made for working and hunting dogs.",
  alternates: { canonical: "/products/gold-formula" },
  openGraph: {
    type: "website",
    title: "Gold Formula — 26% Protein, 18% Fat | Outlaw Feed",
    description:
      "High-performance Texas-made dog food. 26% protein, 18% fat, no corn wheat or soy. Real chicken. 3,640 kcal/kg. Built for hunting, ranch, and working dogs.",
    url: "/products/gold-formula",
    siteName: "Outlaw Feed",
    images: [
      {
        url: "https://outlawfeed.com/Gold-Package-Dog-Food-Dog-Food-Pet-Food.png",
        width: 700,
        height: 525,
        alt: "Outlaw Feed Gold Formula bag — 26% protein 18% fat, Texas-made dog food, no corn wheat or soy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold Formula — 26% Protein | Outlaw Feed",
    description: "High-performance dog food. 26% protein, 18% fat, no fillers. Made in Texas.",
    images: ["https://outlawfeed.com/Gold-Package-Dog-Food-Dog-Food-Pet-Food.png"],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "/products/gold-formula#product",
  name: "Outlaw Feed Gold Formula",
  brand: { "@type": "Brand", name: "Outlaw Feed" },
  description:
    "High-performance dog food with 26% crude protein and 18% crude fat. Zero fillers — no corn, wheat, or soy. Made in Bell County, Texas.",
  image: "https://outlawfeed.com/Gold-Package-Dog-Food-Dog-Food-Pet-Food.png",
  url: "/products/gold-formula",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStoreOnly",
    priceCurrency: "USD",
    seller: { "@type": "Organization", name: "Outlaw Feed", url: "" },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",     item: "" },
    { "@type": "ListItem", position: 2, name: "Products", item: "/products/gold-formula" },
    { "@type": "ListItem", position: 3, name: "Gold Formula" },
  ],
};

const analysis = [
  { label: "Crude Protein", value: "26%", note: "min" },
  { label: "Crude Fat", value: "18%", note: "min" },
  { label: "Crude Fiber", value: "4%", note: "max" },
  { label: "Moisture", value: "12%", note: "max" },
  { label: "Calories", value: "3640", note: "kcal/kg" },
  { label: "Per Cup", value: "441", note: "kcal/cup" },
];

const ingredients =
  "Chicken Rice, Brown Rice, Grain Sorghum, Chicken Fat (Preserved with Mixed Tocopherols), Pork Meal, Whole Barley, White Fish Meal, Dried Beet Pulp, Flax Seed, Natural Flavors, Salt, Potassium Chloride, Calcium Propionate, Beta Hydroxy Acid, Butylated Hydroxytoluene, Sodium Bentonite, Zinc Amino Acid Complex, Iron Amino Acid Complex, Manganese Amino Acid Complex, Vitamin E Supplement, Ferrous Sulfate, D-Calcium Pantothenate, Vitamin A Supplement, Vitamin D3 Supplement, Riboflavin Supplement, Vitamin B12 Supplement, Copper Sulfate, Sodium Selenite, Niacin Supplement, Ethylenediamine Dihydriodide, Pyridoxine Hydrochloride, Thiamine Mononitrate, Biotin, Folic Acid and Cobalt Carbonate.";

const benefits = [
  "Zero fillers — no corn, wheat, or soy in any form",
  "26% crude protein supports lean muscle mass and sustained daily energy",
  "18% crude fat delivers calorie-dense fuel for working and hunting dogs",
  "Brown rice and grain sorghum provide digestible, slow-release carbohydrates",
  "Chicken fat preserved with mixed tocopherols — no artificial preservatives",
  "Flax seed provides omega fatty acids for healthy skin and coat condition",
  "White fish meal adds a complementary protein and amino acid profile",
  "Formulated for all life stages — from puppies to adult maintenance",
  "3640 kcal/kg (441 kcal/cup) — energy-dense nutrition in every bite",
  "Manufactured in Bell County, Texas — never imported",
];

const idealFor = [
  { label: "Adult Working Dogs", desc: "Ranch dogs, cattle dogs, livestock guardian breeds" },
  { label: "Hunting Dogs", desc: "Bird dogs, retrievers, hounds in active seasons" },
  { label: "High-Energy Adults", desc: "Dogs with active daily routines and higher calorie needs" },
  { label: "Performance Dogs", desc: "Competition and sport dogs requiring peak condition" },
];

const feedingGuide = [
  { weight: "10–20 lbs", amount: "¾ – 1½ cups/day" },
  { weight: "20–40 lbs", amount: "1½ – 2½ cups/day" },
  { weight: "40–60 lbs", amount: "2½ – 3½ cups/day" },
  { weight: "60–80 lbs", amount: "3½ – 4½ cups/day" },
  { weight: "80–100 lbs", amount: "4½ – 5½ cups/day" },
  { weight: "100+ lbs", amount: "5½ cups + ¼ cup per 10 lbs" },
];

const reviews = [
  {
    author: "Jake M.",
    role: "Quail Hunter, Lampasas TX",
    rating: 5,
    text: "My bird dogs have never looked or performed better. Coat is slick, energy is through the roof, and they hold weight during season.",
  },
  {
    author: "Carla D.",
    role: "Cattle Rancher, Bell County TX",
    rating: 5,
    text: "I can actually read the ingredient list. My working ranch dogs eat Gold Formula and I've seen a real difference in their stamina.",
  },
  {
    author: "David H.",
    role: "Retriever Owner, Temple TX",
    rating: 5,
    text: "Switched from a national brand 6 months ago. My labs are leaner, more energetic, and their coats are noticeably healthier.",
  },
];

export default function GoldFormulaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-20 pb-12 md:pt-24 md:pb-20 lg:pt-28 lg:pb-28 px-4 md:px-6 bg-[#0f0e0c] overflow-hidden" aria-label="Gold Formula hero">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/Gold-Package-Dog-Food-Dog-Food-Pet-Food.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0e0c]/60 to-[#0f0e0c]" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-[#9a8870]">
              <li><Link href="/" className="hover:text-[#e8a44a] transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-[#2e2820]">/</li>
              <li><Link href="/products/gold-formula" className="hover:text-[#e8a44a] transition-colors">Products</Link></li>
              <li aria-hidden="true" className="text-[#2e2820]">/</li>
              <li className="text-[#f5f0e8]">Gold Formula</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#c85a00] font-semibold mb-3">
                Outlaw Feed
              </p>
              <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-[#f5f0e8] mb-4 text-balance">
                Gold Formula
              </h1>
              <p className="text-[#e8a44a] font-serif text-xl font-semibold mb-4">
                Zero Fillers. High-Quality Ingredients.
              </p>
              <p className="text-[#f5f0e8]/70 text-base leading-relaxed mb-8 max-w-xl">
                Dogs help in so many ways — from serving as service animals to simply enriching our lives as our best friends. Outlaw Feed Gold Dog Food provides the nutrition to help them feel and perform their best, with zero fillers and high-quality ingredients at every stage of life.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["No Corn", "No Wheat", "No Soy", "26% Protein", "18% Fat", "Made in Texas"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-[#1a1712] border border-[#2e2820] rounded text-xs font-semibold text-[#f5f0e8]/70 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <GtmCtaLink
                  href="/where-to-buy"
                  location="product_gold_hero"
                  className="px-7 py-4 bg-[#c85a00] text-white font-semibold text-sm uppercase tracking-widest rounded hover:bg-[#a84800] transition-colors text-center"
                >
                  Find a Store Near You
                </GtmCtaLink>
                <Link
                  href="/contact"
                  className="px-7 py-4 border border-[#2e2820] text-[#f5f0e8]/70 font-semibold text-sm uppercase tracking-widest rounded hover:border-[#c85a00] hover:text-[#c85a00] transition-colors text-center"
                >
                  Order by Phone
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="/Gold-Package-Dog-Food-Dog-Food-Pet-Food.png"
                alt="Outlaw Feed Gold Formula 26/18 bag — high-protein Texas dog food for working and hunting dogs, no corn wheat or soy"
                className="w-full rounded-lg object-contain bg-[#0f0e0c]"
                fetchPriority="high"
                decoding="async"
                width={700}
                height={525}
              />

            </div>
          </div>
        </div>
      </section>

      {/* Guaranteed Analysis */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-[#1a1712] border-y border-[#2e2820]" aria-labelledby="analysis-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="analysis-heading" className="font-serif text-3xl md:text-4xl font-bold text-[#f5f0e8] mb-10">
            Guaranteed Analysis
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {analysis.map((a) => (
              <div key={a.label} className="p-5 bg-[#0f0e0c] border border-[#2e2820] rounded-lg text-center">
                <p className="font-serif text-3xl font-extrabold text-[#e8a44a]">{a.value}</p>
                <p className="text-[#9a8870] text-[10px] uppercase tracking-wider mt-0.5">{a.note}</p>
                <p className="text-[#f5f0e8]/80 text-xs font-medium mt-2 leading-snug">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-[#0f0e0c]" aria-labelledby="ingredients-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="ingredients-heading" className="font-serif text-3xl md:text-4xl font-bold text-[#f5f0e8] mb-4">
            Ingredient List
          </h2>
          <p className="text-[#9a8870] text-sm mb-6">
            No mystery meals. No hidden fillers. Every ingredient is listed completely and in plain language.
          </p>
          <div className="p-6 bg-[#1a1712] border border-[#2e2820] rounded-lg">
            <p className="text-[#f5f0e8]/80 text-sm leading-relaxed">{ingredients}</p>
          </div>
          <p className="text-[#9a8870] text-xs mt-4">
            <strong className="text-[#f5f0e8]">Calorie Content:</strong> 3640 kcal/kg &nbsp;|&nbsp; 441 kcal/cup (calculated)
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-[#1a1712] border-y border-[#2e2820]" aria-labelledby="benefits-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="benefits-heading" className="font-serif text-3xl md:text-4xl font-bold text-[#f5f0e8] mb-8">
            Key Benefits
          </h2>
          <ul className="flex flex-col gap-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-4 p-5 bg-[#0f0e0c] border border-[#2e2820] rounded-lg">
                <span className="text-[#c85a00] mt-0.5 shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                </span>
                <span className="text-[#f5f0e8]/80 text-sm leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-[#0f0e0c]" aria-labelledby="ideal-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="ideal-heading" className="font-serif text-3xl md:text-4xl font-bold text-[#f5f0e8] mb-8">
            Who Gold Formula Is For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {idealFor.map((item) => (
              <div key={item.label} className="p-6 bg-[#1a1712] border border-[#2e2820] rounded-lg">
                <h3 className="font-serif text-lg font-bold text-[#e8a44a] mb-2">{item.label}</h3>
                <p className="text-[#9a8870] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feeding Guide */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-[#1a1712] border-y border-[#2e2820]" aria-labelledby="feeding-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="feeding-heading" className="font-serif text-3xl md:text-4xl font-bold text-[#f5f0e8] mb-4">
            Feeding Guide
          </h2>
          <p className="text-[#9a8870] text-sm mb-8">
            Amounts shown are for adult dogs at maintenance activity. Increase by 25–50% for high-performance working and hunting dogs during demand season.
          </p>
          <div className="overflow-hidden border border-[#2e2820] rounded-lg">
            <table className="w-full text-sm" aria-label="Feeding amounts by dog weight">
              <thead>
                <tr className="bg-[#0f0e0c] border-b border-[#2e2820]">
                  <th className="px-5 py-3 text-left font-semibold text-[#f5f0e8] uppercase tracking-wider text-xs">Dog Weight</th>
                  <th className="px-5 py-3 text-left font-semibold text-[#f5f0e8] uppercase tracking-wider text-xs">Daily Amount</th>
                </tr>
              </thead>
              <tbody>
                {feedingGuide.map((row, i) => (
                  <tr key={row.weight} className={`border-b border-[#2e2820] ${i % 2 === 0 ? "bg-[#1a1712]" : "bg-[#0f0e0c]"}`}>
                    <td className="px-5 py-3 text-[#f5f0e8]/80">{row.weight}</td>
                    <td className="px-5 py-3 text-[#e8a44a] font-semibold">{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[#9a8870] text-xs mt-4">
            Fresh water should be available at all times. Transition to new food over 7 days by gradually increasing Gold Formula while reducing the previous food.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-[#0f0e0c]" aria-labelledby="reviews-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="reviews-heading" className="font-serif text-3xl md:text-4xl font-bold text-[#f5f0e8] mb-8">
            Customer Reviews
          </h2>
          <div className="flex flex-col gap-4">
            {reviews.map((r) => (
              <blockquote key={r.author} className="p-6 bg-[#1a1712] border border-[#2e2820] rounded-lg">
                <div className="flex gap-0.5 mb-4" aria-label={`${r.rating} out of 5 stars`}>
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#e8a44a" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <p className="text-[#f5f0e8]/80 text-sm leading-relaxed italic mb-4">&ldquo;{r.text}&rdquo;</p>
                <footer>
                  <p className="text-[#f5f0e8] text-sm font-semibold">{r.author}</p>
                  <p className="text-[#9a8870] text-xs">{r.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-[#1a1712] border-t border-[#2e2820]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#f5f0e8] mb-4 text-balance">
            Ready to Switch to Outlaw Gold?
          </h2>
          <p className="text-[#9a8870] mb-8">
            Find a retailer near you or contact us directly for Bell County delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GtmCtaLink href="/where-to-buy" location="product_gold_bottom" className="px-8 py-4 bg-[#c85a00] text-white font-semibold text-sm uppercase tracking-widest rounded hover:bg-[#a84800] transition-colors">
              Find a Store
            </GtmCtaLink>
            <Link href="/products/blue-formula" className="px-8 py-4 border border-[#2e2820] text-[#f5f0e8]/70 font-semibold text-sm uppercase tracking-widest rounded hover:border-[#c85a00] hover:text-[#c85a00] transition-colors">
              Compare Blue Formula
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
