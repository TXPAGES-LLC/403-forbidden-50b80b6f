import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Working Dog Nutrition: Fueling Ranch Dogs in Demand Season",
  description:
    "During peak work seasons, ranch dogs need more than maintenance calories. Protein, fat ratios, and feeding timing for hardworking Texas ranch and cattle dogs.",
  alternates: { canonical: "/blog/working-dog-nutrition" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": "/blog/working-dog-nutrition#article",
  headline: "Working Dog Nutrition: Fueling a Ranch Dog Through Demand Season",
  datePublished: "2025-02-22",
  dateModified: "2025-02-22",
  author: { "@type": "Organization", name: "Outlaw Feed", url: "" },
  publisher: { "@type": "Organization", name: "Outlaw Feed", url: "" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "/blog/working-dog-nutrition" },
  url: "/blog/working-dog-nutrition",
  image: "https://outlawfeed.com/working-dog-nutrition.png",
  description: "Protein, fat ratios, and feeding timing for ranch dogs during demand season.",
};

export default function WorkingDogNutritionPost() {
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
              src="/working-dog-nutrition.png"
              alt="Golden retriever working dog running across a rural field at sunset — working dog nutrition guide by Outlaw Feed"
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
              <li className="text-[#f5f0e8]">Working Dog Nutrition</li>
            </ol>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c85a00]">Working Dogs</span>
            <span className="text-[#9a8870] text-xs">February 22, 2025</span>
            <span className="text-[#9a8870] text-xs">· 7 min read</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#f5f0e8] mb-6 text-balance leading-tight">
            Working Dog Nutrition: Fueling a Ranch Dog Through Demand Season
          </h1>

          <p className="text-[#f5f0e8]/70 text-lg leading-relaxed mb-10 border-l-2 border-[#c85a00] pl-5">
            A ranch dog&apos;s workload is not constant. Calving season, cattle drives, fence work — the physical demand swings dramatically. Their nutrition needs to swing with it.
          </p>

          <div className="space-y-6 text-[#f5f0e8]/70 text-base leading-relaxed">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mt-4 mb-3">
              Maintenance vs. Working Caloric Needs
            </h2>
            <p>
              Most dog food feeding guides are written for sedentary or lightly active pets. A ranch dog working cattle for 6–8 hours per day is not in that category. The caloric difference between a couch dog and a full-day working ranch dog can be 50–100% more daily intake.
            </p>
            <p>
              The mistake most ranch owners make is feeding a working dog the same amount year-round. During low-demand months, that makes sense. During peak season — calving, roundup, breeding — the dog&apos;s energy expenditure is dramatically higher, and body condition will decline if intake does not match demand.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mt-10 mb-3">
              The Role of Protein in Working Dogs
            </h2>
            <p>
              Protein is the building block for muscle repair and recovery. A ranch dog putting in long days needs adequate protein to maintain muscle mass and recover overnight. At minimum, a working dog formula should hit 26% crude protein from a named animal source — Gold Formula delivers exactly that.
            </p>
            <p>
              The key word is recovery. If your dog is not getting enough protein, you will see muscle condition fade over the course of a long season — even if they appear to be eating enough volume. Crude protein percentage and protein quality together determine whether the dog is actually building and maintaining muscle.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mt-10 mb-3">
              Fat: Sustained Energy Over Long Days
            </h2>
            <p>
              Fat metabolism is slower and more sustained than carbohydrate metabolism. For a dog working 6–8 hours through a Texas pasture in summer heat, fat-based energy is what keeps them going past the first hour. A quality working dog formula needs 15–18% crude fat from named sources — Gold Formula provides 18%.
            </p>
            <p>
              During extreme heat — a Texas August during cattle work — fat digestion produces metabolic heat as a byproduct. In those conditions, some experienced ranchers slightly reduce fat intake and increase caloric density through higher protein. Watch your dog&apos;s hydration and body condition as the primary guide.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mt-10 mb-3">
              Seasonal Feeding Adjustments
            </h2>
            <div className="overflow-hidden border border-[#2e2820] rounded-lg mt-4 mb-6">
              <table className="w-full text-sm" aria-label="Seasonal feeding adjustments for working ranch dogs">
                <thead>
                  <tr className="bg-[#1a1712] border-b border-[#2e2820]">
                    <th className="px-5 py-3 text-left text-[#9a8870] text-xs uppercase tracking-wider">Season / Demand</th>
                    <th className="px-5 py-3 text-left text-[#9a8870] text-xs uppercase tracking-wider">Adjustment</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Off-season / Low demand", "Feed per standard label guidelines"],
                    ["Moderate work (4–6 hrs/day)", "+20–30% above maintenance"],
                    ["Heavy work (6–8 hrs/day)", "+40–60% above maintenance"],
                    ["Extreme demand / calving", "+50–75% above maintenance"],
                    ["Post-season recovery", "Gradual step-down over 2–3 weeks"],
                  ].map(([season, adj], i) => (
                    <tr key={season} className={`border-b border-[#2e2820] last:border-0 ${i % 2 === 0 ? "bg-[#0f0e0c]" : "bg-[#1a1712]"}`}>
                      <td className="px-5 py-3 text-[#f5f0e8]/80">{season}</td>
                      <td className="px-5 py-3 text-[#e8a44a] font-semibold">{adj}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mt-10 mb-3">
              Body Condition Scoring: The Real Guide
            </h2>
            <p>
              Feeding charts are starting points. The real measure of whether you are feeding correctly is body condition. You want to be able to easily feel your dog&apos;s ribs with light pressure — but not see them from a distance. Visible ribs mean underfeeding. You should feel a slight waist tuck when viewed from above.
            </p>
            <p>
              Check body condition weekly during high-demand season. It is far easier to adjust feeding before a dog loses significant condition than to recover lost muscle mass mid-season.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mt-10 mb-3">
              Hydration: Often Ignored, Always Critical
            </h2>
            <p>
              A working dog in Texas summer heat can lose significant water volume through panting and exertion. Ensure fresh, clean water is always accessible in the field, not just at the kennel. Dogs working in extreme heat may need electrolyte supplementation during multi-hour sessions.
            </p>
            <p>
              A simple field test: pinch the skin on the back of the neck. In a well-hydrated dog it snaps back immediately. Slow return indicates dehydration — pull the dog from work and provide water immediately.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-[#2e2820]">
            <h2 className="font-serif text-xl font-bold text-[#f5f0e8] mb-5">Related Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/feeding-guide" className="p-5 bg-[#1a1712] border border-[#2e2820] rounded-lg hover:border-[#c85a00]/50 transition-colors group">
                <p className="text-xs uppercase tracking-wider text-[#c85a00] mb-1">Guide</p>
                <p className="font-serif font-bold text-[#f5f0e8] group-hover:text-[#e8a44a] transition-colors">Feeding Guide & Daily Amounts</p>
                <p className="text-[#9a8870] text-xs mt-1">Feeding charts by weight and activity level</p>
              </Link>
              <Link href="/products/gold-formula" className="p-5 bg-[#1a1712] border border-[#2e2820] rounded-lg hover:border-[#c85a00]/50 transition-colors group">
                <p className="text-xs uppercase tracking-wider text-[#c85a00] mb-1">Product</p>
                <p className="font-serif font-bold text-[#f5f0e8] group-hover:text-[#e8a44a] transition-colors">Gold Formula — Built for Working Dogs</p>
                <p className="text-[#9a8870] text-xs mt-1">26% protein, 18% fat, no fillers</p>
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-between items-start">
            <Link href="/blog" className="text-sm text-[#9a8870] hover:text-[#e8a44a] transition-colors inline-flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to Blog
            </Link>
            <Link href="/where-to-buy" className="px-6 py-3 bg-[#c85a00] text-white text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#a84800] transition-colors">
              Find a Retailer Near You
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
