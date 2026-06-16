import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hunting Dog Care Tips: Peak Condition Year-Round | Outlaw Feed",
  description:
    "From pre-season conditioning to off-season maintenance, learn how experienced hunters keep their dogs performing at the highest level. Nutrition, fitness, and recovery tips.",
  alternates: { canonical: "/blog/hunting-dog-care-tips" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": "/blog/hunting-dog-care-tips#article",
  headline: "Hunting Dog Care Tips: Keeping Your Field Dog in Peak Condition Year-Round",
  datePublished: "2025-01-30",
  dateModified: "2025-01-30",
  author: { "@type": "Organization", name: "Outlaw Feed", url: "" },
  publisher: { "@type": "Organization", name: "Outlaw Feed", url: "" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "/blog/hunting-dog-care-tips" },
  url: "/blog/hunting-dog-care-tips",
  image: "https://images.unsplash.com/photo-1601758174493-45d0a4d3e407?auto=format&fit=crop&w=1200&q=80",
  description: "Year-round hunting dog care: pre-season conditioning, in-season nutrition, and off-season recovery.",
};

const seasons = [
  {
    label: "Pre-Season (8–12 Weeks Out)",
    color: "#e8a44a",
    tips: [
      "Begin gradual conditioning runs — start at 20 minutes and build to 60+ minutes over 6 weeks",
      "Switch to performance formula (Gold or Blue) if not already feeding it",
      "Schedule vet check: heartworm test, vaccinations, joint assessment for older dogs",
      "Check and treat for ticks, fleas, and external parasites before season starts",
      "Begin paw conditioning — gradually expose pads to rough terrain to build callus",
    ],
  },
  {
    label: "In-Season",
    color: "#c85a00",
    tips: [
      "Increase daily food intake 25–50% on heavy hunt days",
      "Feed 2–3 hours before hunting to prevent bloat and optimize digestion",
      "Provide a recovery meal within 60–90 minutes of returning from the field",
      "Inspect paws daily for cuts, thorns, and torn pads after each outing",
      "Monitor body condition weekly — adjust feeding up or down based on rib feel",
      "Ensure water is available in the field, not just at the kennel",
    ],
  },
  {
    label: "Post-Season / Off-Season",
    color: "#9a8870",
    tips: [
      "Gradually reduce food intake over 2–3 weeks as activity level drops",
      "Schedule a post-season vet check — address any accumulated minor injuries",
      "Maintain light fitness activity (20–30 min walks) to prevent full deconditioning",
      "Transition back to maintenance feeding levels — over-feeding an inactive dog builds fat, not muscle",
      "Use the off-season for training reinforcement and socialization",
    ],
  },
];

export default function HuntingDogCareTipsPost() {
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
              src="https://images.unsplash.com/photo-1601758174493-45d0a4d3e407?auto=format&fit=crop&w=1400&q=80"
              alt="Hunting dog in field — hunting dog care tips and year-round conditioning"
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
              <li className="text-[#f5f0e8]">Hunting Dog Care</li>
            </ol>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c85a00]">Hunting Dogs</span>
            <span className="text-[#9a8870] text-xs">January 30, 2025</span>
            <span className="text-[#9a8870] text-xs">· 8 min read</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#f5f0e8] mb-6 text-balance leading-tight">
            Hunting Dog Care Tips: Keeping Your Field Dog in Peak Condition Year-Round
          </h1>

          <p className="text-[#f5f0e8]/70 text-lg leading-relaxed mb-10 border-l-2 border-[#c85a00] pl-5">
            A hunting dog that only gets serious attention during season is always playing catch-up. Peak performance in the field is built in the months before opening day — and maintained the months after.
          </p>

          <div className="space-y-6 text-[#f5f0e8]/70 text-base leading-relaxed">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mt-4 mb-3">
              The Year-Round Approach
            </h2>
            <p>
              The best field dogs are not created by 12 weeks of pre-season training. They are the product of consistent year-round conditioning — physical fitness, nutritional support, and mental engagement across all twelve months.
            </p>
            <p>
              What you do in January determines what your dog can do in October. That is the simple reality most hunters learn the hard way after their first season with a dog that is not quite right.
            </p>

            {seasons.map((s) => (
              <div key={s.label} className="mt-8">
                <h2
                  className="font-serif text-2xl font-bold mb-5"
                  style={{ color: s.color }}
                >
                  {s.label}
                </h2>
                <ul className="space-y-3">
                  {s.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-3 text-sm">
                      <svg className="shrink-0 mt-0.5" style={{ color: s.color }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mt-10 mb-3">
              Nutrition Is the Foundation
            </h2>
            <p>
              Every tip above is less effective if the nutritional foundation is wrong. A dog running on a corn-heavy, low-quality formula is not going to have the coat condition, recovery speed, or sustained energy of a dog eating a real-meat, high-protein formula.
            </p>
            <p>
              The investment in quality food pays dividends every single day — in coat quality, in energy levels, in muscle maintenance, and in longevity. Dogs that eat well look better, perform better, and recover faster. That is not marketing. That is basic physiology.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mt-10 mb-3">
              Joint Health: The Quiet Issue in Older Hunting Dogs
            </h2>
            <p>
              Hard-working hunting dogs put significant stress on joints over the course of a career. Omega-3 fatty acids play a meaningful role in reducing inflammation and supporting joint tissue. The Blue Formula includes flax meal which provides omega fatty acids for healthy skin, coat, and joint support in adult dogs.
            </p>
            <p>
              For working dogs over age 6, consider a veterinary joint supplement alongside their baseline diet. Catching joint issues early extends a hunting dog&apos;s useful career by years.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mt-10 mb-3">
              The Simple Standard
            </h2>
            <p>
              Year-round care. Consistent nutrition. Gradual conditioning. Weekly body condition checks. That is not a complicated program — it is a consistent one. The dogs that go into season ready are the dogs that never really came out of it.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-[#2e2820]">
            <h2 className="font-serif text-xl font-bold text-[#f5f0e8] mb-5">Related Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/blog/best-dog-food-hunting-dogs" className="p-5 bg-[#1a1712] border border-[#2e2820] rounded-lg hover:border-[#c85a00]/50 transition-colors group">
                <p className="text-xs uppercase tracking-wider text-[#c85a00] mb-1">Article</p>
                <p className="font-serif font-bold text-[#f5f0e8] group-hover:text-[#e8a44a] transition-colors">Best Dog Food for Hunting Dogs</p>
                <p className="text-[#9a8870] text-xs mt-1">What to look for in a field formula</p>
              </Link>
              <Link href="/products/blue-formula" className="p-5 bg-[#1a1712] border border-[#2e2820] rounded-lg hover:border-[#c85a00]/50 transition-colors group">
                <p className="text-xs uppercase tracking-wider text-[#c85a00] mb-1">Product</p>
                <p className="font-serif font-bold text-[#f5f0e8] group-hover:text-[#e8a44a] transition-colors">Blue Formula — 21% Protein</p>
                <p className="text-[#9a8870] text-xs mt-1">For adult maintenance and everyday nutrition</p>
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
