import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Dog Food for Hunting Dogs: What to Look For in a Field Formula",
  description:
    "Not all high-protein dog foods deliver what hunting dogs actually need in the field. Learn the key markers of a true hunting dog formula — protein source, fat ratios, and what to avoid.",
  alternates: { canonical: "/blog/best-dog-food-hunting-dogs" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Best Dog Food for Hunting Dogs: What to Look For in a Field Formula",
  datePublished: "2025-04-10",
  author: { "@type": "Organization", name: "Outlaw Feed" },
  publisher: { "@type": "Organization", name: "Outlaw Feed", url: "" },
  url: "/blog/best-dog-food-hunting-dogs",
  image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80",
  description:
    "What separates a true hunting dog formula from marketing. Protein source quality, fat ratios, and the filler ingredients that compromise field performance.",
};

export default function HuntingDogFoodPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="bg-[#0f0e0c]">
        {/* Hero image */}
        <header className="relative pt-16 md:pt-20 overflow-hidden">
          <div className="relative h-72 md:h-96 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1400&q=80"
              alt="Pointer hunting dog running in Texas field — best dog food for hunting dogs"
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
              <li className="text-[#f5f0e8]">Hunting Dog Food</li>
            </ol>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c85a00]">Nutrition</span>
            <span className="text-[#9a8870] text-xs">April 10, 2025</span>
            <span className="text-[#9a8870] text-xs">· 6 min read</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#f5f0e8] mb-6 text-balance leading-tight">
            Best Dog Food for Hunting Dogs: What to Look For in a Field Formula
          </h1>

          <p className="text-[#f5f0e8]/70 text-lg leading-relaxed mb-10 border-l-2 border-[#c85a00] pl-5">
            A hunting dog in peak season can cover 20 miles a day through rough terrain. What you put in the bowl the night before determines how they perform in the field.
          </p>

          <div className="space-y-6 text-[#f5f0e8]/70 text-base leading-relaxed">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mt-10 mb-3">
              Protein: Named Meat Source First
            </h2>
            <p>
              The first ingredient on any hunting dog formula should be a named meat — chicken, beef, turkey, or fish. Not &ldquo;meat meal,&rdquo; not &ldquo;poultry by-product meal,&rdquo; and certainly not a grain or legume. The protein source quality directly affects muscle repair, recovery speed, and sustained output in the field.
            </p>
            <p>
              A minimum of 26% crude protein is the baseline for a hardworking hunting dog. Dogs running all-day quail or pheasant hunts benefit from formulas in the 26–30% range. Outlaw Gold Formula delivers 26% crude protein with chicken rice as the first ingredient.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mt-10 mb-3">
              Fat: The Primary Energy Fuel for Field Work
            </h2>
            <p>
              Dogs are fat-adapted athletes. Unlike humans who rely heavily on carbohydrates for quick energy, working dogs draw most of their sustained energy from dietary fat. A hunting dog formula needs a minimum of 15–18% crude fat — Gold Formula provides 18% for high-performance dogs.
            </p>
            <p>
              Chicken fat preserved with mixed tocopherols (natural vitamin E) is the ideal fat source — stable, calorie-dense, and palatable. Avoid formulas relying on generic &ldquo;animal fat&rdquo; without a named source.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mt-10 mb-3">
              What to Avoid: The Filler Problem
            </h2>
            <p>
              Corn, wheat, and soy dominate cheap dog food formulas because they are inexpensive sources of calories. The problem: they spike blood sugar quickly, contribute to digestive irritation in many dogs, and provide empty caloric bulk instead of functional nutrition.
            </p>
            <p>
              For a hunting dog already under physical stress, poor digestion and inconsistent energy from filler-heavy food compounds performance loss. Dogs on corn-heavy diets often show it in coat quality and body condition before you ever see it in their fieldwork.
            </p>

            <div className="my-8 p-6 bg-[#1a1712] border border-[#2e2820] rounded-lg">
              <p className="font-serif text-lg font-bold text-[#f5f0e8] mb-4">The Hunting Dog Food Checklist</p>
              <ul className="flex flex-col gap-3">
                {[
                  "Named meat (chicken, beef, turkey) as first ingredient",
                  "26%+ crude protein minimum for working dogs",
                  "18% crude fat for high-performance formulas",
                  "No corn, wheat, or soy",
                  "No unnamed by-product meal",
                  "AAFCO certified for adult maintenance",
                  "Made in USA — ideally state-disclosed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <svg className="text-[#c85a00] mt-0.5 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mt-10 mb-3">
              Feeding Timing Around Hunts
            </h2>
            <p>
              Feed your hunting dog at least 2–3 hours before field work to allow digestion and prevent bloat risk, especially in larger breeds. Post-hunt, a recovery meal within 60–90 minutes aids muscle repair. During multi-day hunts, increase daily intake by 25–50% above maintenance amounts.
            </p>
            <p>
              A 60-lb bird dog running 6+ hours in the field may need 4–5 cups of Gold Formula per day. Monitor body condition weekly during season — you should feel ribs easily without a visible rib outline.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mt-10 mb-3">
              The Bottom Line
            </h2>
            <p>
              A proper hunting dog formula is not a luxury — it is a performance requirement. Real meat first, adequate fat, no fillers. The difference shows in coat condition before season, energy levels during season, and recovery between hunts.
            </p>
          </div>

          {/* Related links */}
          <div className="mt-12 pt-8 border-t border-[#2e2820]">
            <h2 className="font-serif text-xl font-bold text-[#f5f0e8] mb-5">Related Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/products/gold-formula" className="p-5 bg-[#1a1712] border border-[#2e2820] rounded-lg hover:border-[#c85a00]/50 transition-colors group">
                <p className="text-xs uppercase tracking-wider text-[#c85a00] mb-1">Product</p>
                <p className="font-serif font-bold text-[#f5f0e8] group-hover:text-[#e8a44a] transition-colors">Gold Formula — 26% Protein</p>
                <p className="text-[#9a8870] text-xs mt-1">Built for working and hunting dogs</p>
              </Link>
              <Link href="/feeding-guide" className="p-5 bg-[#1a1712] border border-[#2e2820] rounded-lg hover:border-[#c85a00]/50 transition-colors group">
                <p className="text-xs uppercase tracking-wider text-[#c85a00] mb-1">Guide</p>
                <p className="font-serif font-bold text-[#f5f0e8] group-hover:text-[#e8a44a] transition-colors">Feeding Guide & FAQ</p>
                <p className="text-[#9a8870] text-xs mt-1">How much to feed by weight and activity</p>
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-between items-start">
            <Link href="/blog" className="text-sm text-[#9a8870] hover:text-[#e8a44a] transition-colors inline-flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to Blog
            </Link>
            <Link href="/products/gold-formula" className="px-6 py-3 bg-[#c85a00] text-white text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#a84800] transition-colors">
              Shop Gold Formula
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
