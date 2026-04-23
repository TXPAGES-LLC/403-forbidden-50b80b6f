import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blue Formula — Puppy & Active Lifestyle Dog Food | Texas-Made",
  description:
    "Outlaw Feed Blue Formula: 30% protein, 20% fat, real chicken first ingredient. No corn, wheat, or soy. AAFCO certified for all life stages including puppies. Texas-made dog food for active and growing dogs.",
  alternates: { canonical: "/products/blue-formula" },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Outlaw Feed Blue Formula",
  brand: { "@type": "Brand", name: "Outlaw Feed" },
  description:
    "Puppy and active lifestyle dog food with 30% crude protein and 20% crude fat. AAFCO certified for all life stages. No corn, wheat, or soy. Made in Bell County, Texas.",
  image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
  url: "/products/blue-formula",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStoreOnly",
    seller: { "@type": "Organization", name: "Outlaw Feed" },
  },
};

const analysis = [
  { label: "Crude Protein", value: "30%", note: "min" },
  { label: "Crude Fat", value: "20%", note: "min" },
  { label: "Crude Fiber", value: "3.5%", note: "max" },
  { label: "Moisture", value: "10%", note: "max" },
  { label: "Calcium", value: "1.4%", note: "min" },
  { label: "Phosphorus", value: "1.1%", note: "min" },
];

const ingredients =
  "Chicken, Chicken Meal, Oatmeal, Brown Rice, Chicken Fat (preserved with mixed tocopherols), Dried Egg Product, Natural Flavor, Dried Beet Pulp, Flaxseed, Salmon Oil, Potassium Chloride, Salt, Choline Chloride, Zinc Proteinate, Iron Proteinate, Vitamin E Supplement, Copper Proteinate, Manganese Proteinate, Niacin Supplement, Thiamine Mononitrate, Calcium Pantothenate, Riboflavin Supplement, Vitamin A Supplement, Biotin, Pyridoxine Hydrochloride, Vitamin B12 Supplement, Folic Acid, Vitamin D3 Supplement.";

const benefits = [
  "Formulated for all life stages — AAFCO certified for puppies through adult maintenance",
  "20% fat supports calorie-dense growth and peak athletic performance",
  "Added salmon oil delivers DHA for brain and eye development in puppies",
  "Dried egg product adds bioavailable protein for lean growth",
  "No corn, wheat, or soy reduces common allergen exposure from day one",
  "Higher calcium and phosphorus ratios support healthy bone development in puppies",
  "Oatmeal base supports sensitive digestive systems without compromising nutrition",
  "Made in Bell County, Texas — fresh and never imported",
];

const idealFor = [
  { label: "Puppies (All Breeds)", desc: "From weaning through 12 months — high fat supports healthy growth" },
  { label: "Pregnant & Nursing Dogs", desc: "Elevated protein and DHA support mom and developing puppies" },
  { label: "Highly Active Adults", desc: "Dogs burning high calories through intense daily exercise or sport" },
  { label: "Dogs Recovering from Work", desc: "Post-season or post-injury support for rebuilding condition" },
];

const feedingGuide = [
  { weight: "Up to 10 lbs (puppy)", amount: "½ – 1 cup/day" },
  { weight: "10–25 lbs (puppy)", amount: "1 – 2 cups/day" },
  { weight: "25–50 lbs (puppy)", amount: "2 – 3 cups/day" },
  { weight: "50–75 lbs (active adult)", amount: "3 – 4 cups/day" },
  { weight: "75–100 lbs (active adult)", amount: "4 – 5½ cups/day" },
  { weight: "100+ lbs (active adult)", amount: "5½ cups + ¼ cup per 10 lbs" },
];

const reviews = [
  {
    author: "Travis R.",
    role: "Hunt Test Competitor, Waco TX",
    rating: 5,
    text: "Outlaw Blue kept my GSP pup's joints healthy and coat perfect through his whole first year. He grew into a powerful hunting dog without the growth issues I've seen on other puppy foods.",
  },
  {
    author: "Maria G.",
    role: "Labrador Breeder, Killeen TX",
    rating: 5,
    text: "I raise large-breed Labradors and this is the cleanest puppy food I've found. No junk fillers, the DHA is excellent for brain development, and every litter has thrived on it.",
  },
  {
    author: "Robert T.",
    role: "Agility Trainer, Waco TX",
    rating: 5,
    text: "My border collies train hard six days a week. Blue Formula keeps their weight up, their coats shining, and their energy where it needs to be. Nothing else comes close.",
  },
];

export default function BlueFormulaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-6 bg-[#0f0e0c] overflow-hidden" aria-label="Blue Formula hero">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/Blue-Package-Dog-Food-Dog-Food-Pet-Food.png"
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
              <li><Link href="/products/blue-formula" className="hover:text-[#e8a44a] transition-colors">Products</Link></li>
              <li aria-hidden="true" className="text-[#2e2820]">/</li>
              <li className="text-[#f5f0e8]">Blue Formula</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#c85a00] font-semibold mb-3">
                All Life Stages
              </p>
              <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-[#f5f0e8] mb-4 text-balance">
                Blue Formula
              </h1>
              <p className="text-[#e8a44a] font-serif text-xl font-semibold mb-4">
                Puppy & Active Lifestyle Formula
              </p>
              <p className="text-[#f5f0e8]/70 text-base leading-relaxed mb-8 max-w-xl">
                Texas-made, AAFCO-certified for all life stages — from puppies to high-performance adults. Higher fat for energy-dense nutrition, added DHA for developing minds, and zero corn, wheat, or soy.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["No Corn", "No Wheat", "No Soy", "30% Protein", "All Life Stages", "Made in Texas"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-[#1a1712] border border-[#2e2820] rounded text-xs font-semibold text-[#f5f0e8]/70 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/where-to-buy"
                  className="px-7 py-4 bg-[#c85a00] text-white font-semibold text-sm uppercase tracking-widest rounded hover:bg-[#a84800] transition-colors text-center"
                >
                  Find a Store Near You
                </Link>
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
                src="/Blue-Package-Dog-Food-Dog-Food-Pet-Food.png"
                alt="Outlaw Feed Blue Formula 21/15 bag — puppy and active dog food made in Texas with no corn wheat or soy"
                className="w-full rounded-lg object-contain bg-[#0f0e0c]"
                fetchPriority="high"
                decoding="async"
                width={700}
                height={525}
              />
              <div className="absolute top-4 right-4 bg-[#5c3d22] text-[#f5f0e8] text-xs font-bold uppercase tracking-wider px-3 py-2 rounded">
                For Puppies
              </div>
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
            Every ingredient listed completely. No fillers hidden behind vague terminology.
          </p>
          <div className="p-6 bg-[#1a1712] border border-[#2e2820] rounded-lg">
            <p className="text-[#f5f0e8]/80 text-sm leading-relaxed">{ingredients}</p>
          </div>
          <p className="text-[#9a8870] text-xs mt-4">
            <strong className="text-[#f5f0e8]">AAFCO Statement:</strong> Outlaw Feed Blue Formula is formulated to meet the nutritional levels established by the AAFCO Dog Food Nutrient Profiles for all life stages, including the growth of large-size dogs (70 lb or more as an adult).
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
            Who Blue Formula Is For
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
            Puppies should be fed 3 times daily until 6 months, then twice daily. Active adults may require up to 50% more than shown. Always provide fresh water.
          </p>
          <div className="overflow-hidden border border-[#2e2820] rounded-lg">
            <table className="w-full text-sm" aria-label="Feeding amounts by dog weight and life stage">
              <thead>
                <tr className="bg-[#0f0e0c] border-b border-[#2e2820]">
                  <th className="px-5 py-3 text-left font-semibold text-[#f5f0e8] uppercase tracking-wider text-xs">Weight / Stage</th>
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
            Start Your Dog on Blue Formula
          </h2>
          <p className="text-[#9a8870] mb-8">
            Find a Texas retailer near you or contact us directly for Bell County delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/where-to-buy" className="px-8 py-4 bg-[#c85a00] text-white font-semibold text-sm uppercase tracking-widest rounded hover:bg-[#a84800] transition-colors">
              Find a Store
            </Link>
            <Link href="/products/gold-formula" className="px-8 py-4 border border-[#2e2820] text-[#f5f0e8]/70 font-semibold text-sm uppercase tracking-widest rounded hover:border-[#c85a00] hover:text-[#c85a00] transition-colors">
              Compare Gold Formula
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
