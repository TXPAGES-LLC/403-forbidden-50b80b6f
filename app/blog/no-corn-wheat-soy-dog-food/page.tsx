import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "No Corn, Wheat, or Soy Dog Food: Why It Matters for Your Dog",
  description:
    "Corn, wheat, and soy are cheap fillers that compromise digestion, coat quality, and long-term health. Here is exactly why Outlaw Feed cuts them out of every formula.",
  alternates: { canonical: "/blog/no-corn-wheat-soy-dog-food" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "No Corn, Wheat, or Soy: Why It Matters for Your Dog",
  datePublished: "2025-03-18",
  author: { "@type": "Organization", name: "Outlaw Feed" },
  publisher: { "@type": "Organization", name: "Outlaw Feed", url: "" },
  url: "/blog/no-corn-wheat-soy-dog-food",
  image: "https://images.unsplash.com/photo-1597843786411-a7fa8ad44a95?auto=format&fit=crop&w=1200&q=80",
  description: "Why corn, wheat, and soy are problematic for dogs and what Outlaw Feed uses instead.",
};

const fillers = [
  {
    name: "Corn",
    problem: "High glycemic index spikes blood sugar and crashes energy quickly — the opposite of what a working dog needs for sustained output. Also a common allergen that causes skin irritation, hot spots, and digestive upset in sensitive dogs.",
    whatWeUse: "Brown Rice & Oatmeal — slower-digesting complex carbohydrates that provide steady energy without the crash.",
  },
  {
    name: "Wheat",
    problem: "Wheat gluten is frequently used to boost crude protein percentages on the guaranteed analysis without adding true animal protein. It is not bioavailable at the same level as animal-sourced amino acids. Wheat is also among the top allergens in dogs.",
    whatWeUse: "Chicken Meal — concentrated real protein with a complete amino acid profile for muscle maintenance and repair.",
  },
  {
    name: "Soy",
    problem: "Soy is a protein extender that inflates the protein percentage number cheaply. It also contains phytoestrogens that may interfere with hormone balance in some dogs with long-term consumption. Digestibility is substantially lower than animal protein.",
    whatWeUse: "Real chicken as the first ingredient — whole protein from a named, single-source animal.",
  },
];

export default function NoCornWheatSoyPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="bg-[#0f0e0c]">
        <header className="relative pt-16 md:pt-20 overflow-hidden">
          <div className="relative h-72 md:h-96 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1597843786411-a7fa8ad44a95?auto=format&fit=crop&w=1400&q=80"
              alt="Real meat dog food ingredients — no corn wheat or soy explanation"
              className="w-full h-full object-cover object-center"
              fetchPriority="high"
              decoding="async"
              width={1400}
              height={384}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-[#0f0e0c]/40 to-transparent" />
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-[#9a8870]">
              <li><Link href="/" className="hover:text-[#e8a44a] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-[#e8a44a] transition-colors">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#f5f0e8]">No Corn Wheat Soy</li>
            </ol>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c85a00]">Ingredients</span>
            <span className="text-[#9a8870] text-xs">March 18, 2025</span>
            <span className="text-[#9a8870] text-xs">· 5 min read</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#f5f0e8] mb-6 text-balance leading-tight">
            No Corn, Wheat, or Soy: Why It Matters for Your Dog
          </h1>

          <p className="text-[#f5f0e8]/70 text-lg leading-relaxed mb-10 border-l-2 border-[#c85a00] pl-5">
            &ldquo;No corn, wheat, or soy&rdquo; is printed on the front of every Outlaw Feed bag. It is not a marketing claim. It is a formulation rule that has been in place since day one — and here is the reasoning behind it.
          </p>

          <div className="space-y-6 text-[#f5f0e8]/70 text-base leading-relaxed">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mt-4 mb-3">
              Why These Three Ingredients Dominate Cheap Dog Food
            </h2>
            <p>
              Corn, wheat, and soy are among the cheapest agricultural commodities in the United States. They are calorie-dense, shelf-stable, and easy to process into kibble. For a pet food manufacturer focused on margin, they are ideal inputs.
            </p>
            <p>
              For a dog that works hard, runs far, or simply deserves better — they are the wrong ingredients. Here is why each one is a problem on its own, and what we use instead.
            </p>

            <div className="space-y-6 mt-8">
              {fillers.map((f) => (
                <div key={f.name} className="p-6 bg-[#1a1712] border border-[#2e2820] rounded-lg">
                  <h3 className="font-serif text-xl font-bold text-[#e8a44a] mb-3">{f.name}</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    <span className="font-semibold text-[#f5f0e8]">The problem: </span>
                    {f.problem}
                  </p>
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold text-[#c85a00]">What Outlaw uses instead: </span>
                    {f.whatWeUse}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mt-10 mb-3">
              Reading the Ingredient Label: What to Look For
            </h2>
            <p>
              Ingredients are listed in descending order by weight before processing. The first three to five ingredients make up the bulk of the formula. If you see corn, wheat, corn gluten meal, soybean meal, or wheat middlings in the top five — that formula is built on fillers.
            </p>
            <p>
              A quality formula leads with a named meat protein, follows with a named meal (concentrated protein), and uses whole grains like brown rice or oatmeal for carbohydrates — not corn or wheat fractions.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mt-10 mb-3">
              Signs Your Dog May Be Reacting to Fillers
            </h2>
            <ul className="space-y-3 pl-5 list-disc marker:text-[#c85a00]">
              {[
                "Loose stool or inconsistent digestion",
                "Itchy skin, hot spots, or excessive paw licking",
                "Dull coat or excessive shedding",
                "Low energy or inconsistent performance in working dogs",
                "Frequent ear infections (often linked to dietary allergens)",
              ].map((sign) => (
                <li key={sign}>{sign}</li>
              ))}
            </ul>
            <p>
              None of these symptoms guarantee a corn, wheat, or soy allergy — but they are common presenting signs. A transition to a filler-free formula is a logical first step before pursuing more complex diagnostics.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mt-10 mb-3">
              The Outlaw Commitment
            </h2>
            <p>
              Every Outlaw Feed formula — Gold and Blue — is formulated without corn, wheat, or soy. Not as a special &ldquo;limited ingredient&rdquo; line. Not as an upcharge. As a standard. Because we think it should be the standard.
            </p>
            <p>
              Read the full ingredient list for each formula on the product pages — every ingredient, spelled out, no paraphrasing.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-[#2e2820]">
            <h2 className="font-serif text-xl font-bold text-[#f5f0e8] mb-5">Related Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/why-outlaw/ingredients" className="p-5 bg-[#1a1712] border border-[#2e2820] rounded-lg hover:border-[#c85a00]/50 transition-colors group">
                <p className="text-xs uppercase tracking-wider text-[#c85a00] mb-1">Ingredients</p>
                <p className="font-serif font-bold text-[#f5f0e8] group-hover:text-[#e8a44a] transition-colors">What Goes Into Every Bag</p>
                <p className="text-[#9a8870] text-xs mt-1">Full ingredient philosophy and sourcing</p>
              </Link>
              <Link href="/products/gold-formula" className="p-5 bg-[#1a1712] border border-[#2e2820] rounded-lg hover:border-[#c85a00]/50 transition-colors group">
                <p className="text-xs uppercase tracking-wider text-[#c85a00] mb-1">Product</p>
                <p className="font-serif font-bold text-[#f5f0e8] group-hover:text-[#e8a44a] transition-colors">Gold Formula — Full Ingredients List</p>
                <p className="text-[#9a8870] text-xs mt-1">Every ingredient, no paraphrasing</p>
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-between items-start">
            <Link href="/blog" className="text-sm text-[#9a8870] hover:text-[#e8a44a] transition-colors inline-flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to Blog
            </Link>
            <Link href="/where-to-buy" className="px-6 py-3 bg-[#c85a00] text-white text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#a84800] transition-colors">
              Find a Retailer
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
