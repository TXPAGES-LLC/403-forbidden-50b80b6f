import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Outlaw — Real Ingredients, Texas-Made Working Dog Food",
  description:
    "Learn why Outlaw Feed is different. No corn, wheat, or soy. Real meat first ingredient. AAFCO certified. Made in Bell County, Texas for hunting dogs, ranch dogs, and working dogs.",
  alternates: { canonical: "/why-outlaw" },
  openGraph: {
    type: "website",
    title: "Why Outlaw Feed — No Fillers, Real Meat, Made in Texas",
    description:
      "No corn, wheat, or soy — ever. Real named meats. Manufactured in Bell County, TX. See the difference you can read on the bag.",
    url: "/why-outlaw",
    siteName: "Outlaw Feed",
    images: [
      {
        url: "https://outlawfeed.com/Why-Outlaw-Feed-Dog-Food-Product.png",
        width: 800,
        height: 600,
        alt: "Outlaw Feed dog food — why Outlaw Feed, no fillers, real ingredients, made in Texas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Outlaw Feed — No Fillers, Real Meat, Made in Texas",
    description: "No corn, wheat, or soy. Real meat first. Made in Bell County, TX.",
    images: ["https://outlawfeed.com/Why-Outlaw-Feed-Dog-Food-Product.png"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "/why-outlaw#webpage",
  name: "Why Outlaw Feed — Real Ingredients, Texas-Made Working Dog Food",
  url: "/why-outlaw",
  description:
    "No corn, wheat, or soy. Real meat first ingredient. AAFCO certified. Made in Bell County, Texas for hunting dogs, ranch dogs, and working dogs.",
  isPartOf: { "@id": "/#website" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",        item: "" },
    { "@type": "ListItem", position: 2, name: "Why Outlaw" },
  ],
};

const pillars = [
  {
    heading: "Real Ingredients, Plainly Listed",
    body: "Open any bag of Outlaw Feed and you can read every ingredient without a chemistry degree. Real chicken, real chicken meal, real whole grains — no mystery by-products, no undisclosed blends, no \"natural flavors\" hiding junk.",
    href: "/why-outlaw/ingredients",
    cta: "See the Ingredient Lists",
  },
  {
    heading: "No Corn. No Wheat. No Soy. Non-Negotiable.",
    body: "Corn, wheat, and soy are the three most over-used fillers in commercial dog food. They are cheap. They are not nutrition. Outlaw Feed was built around a single rule: if it has no business being in dog food, it is not in ours.",
    href: "/why-outlaw/ingredients",
    cta: "Why We Remove Fillers",
  },
  {
    heading: "Made Right Here in Texas",
    body: "Our food is manufactured in Bell County, Texas. Not in a co-packer facility across the country. Not overseas. Every batch starts and ends under Texas oversight, and we know exactly what goes into every bag.",
    href: "/why-outlaw/our-story",
    cta: "Our Story",
  },
];

export default function WhyOutlawPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-20 lg:pt-28 lg:pb-28 px-4 md:px-6 bg-[#0f0e0c]" aria-label="Why Outlaw hero">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-[#9a8870]">
              <li><Link href="/" className="hover:text-[#e8a44a] transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-[#2e2820]">/</li>
              <li className="text-[#f5f0e8]">Why Outlaw</li>
            </ol>
          </nav>
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#c85a00] font-semibold mb-4">
            The Outlaw Difference
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-[#f5f0e8] mb-6 text-balance">
            Why Outlaw Feed
          </h1>
          <p className="text-[#f5f0e8]/70 text-lg leading-relaxed max-w-2xl">
            The dog food industry is full of pretty bags and vague promises. Outlaw Feed was built on a different premise: if you cannot explain what is in your product in plain English, you should not be selling it to working dog owners.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-[#0f0e0c]" aria-labelledby="pillars-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="pillars-heading" className="sr-only">Our core commitments</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text stack — left */}
            <div className="flex flex-col gap-12">
              {pillars.map((p) => (
                <div key={p.heading}>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#f5f0e8] mb-4 text-balance">
                    {p.heading}
                  </h2>
                  <p className="text-[#f5f0e8]/70 leading-relaxed mb-6">{p.body}</p>
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#c85a00] text-white text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#a84800] transition-colors"
                  >
                    {p.cta}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              ))}
            </div>
            {/* Image — right */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/Why-Outlaw-Feed-Dog-Food-Product.png"
                alt="Outlaw Feed Co. — so good it oughta be against the law. Texas-made dog food with hunting dog scene."
                className="w-full max-w-md rounded-lg object-contain"
                loading="lazy"
                decoding="async"
                width={453}
                height={566}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sub-pages nav */}
      <section className="py-16 px-4 md:px-6 bg-[#1a1712] border-y border-[#2e2820]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-[#f5f0e8] mb-4">Dig Deeper</h2>
          <p className="text-[#9a8870] mb-8">Everything about what goes into Outlaw Feed and why we exist.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/why-outlaw/ingredients"
              className="p-6 bg-[#0f0e0c] border border-[#2e2820] rounded-lg hover:border-[#c85a00]/50 transition-colors text-left group"
            >
              <h3 className="font-serif text-xl font-bold text-[#f5f0e8] group-hover:text-[#e8a44a] transition-colors mb-2">
                Ingredients
              </h3>
              <p className="text-[#9a8870] text-sm">
                Full breakdown of what we use and why every ingredient earns its place.
              </p>
            </Link>
            <Link
              href="/why-outlaw/our-story"
              className="p-6 bg-[#0f0e0c] border border-[#2e2820] rounded-lg hover:border-[#c85a00]/50 transition-colors text-left group"
            >
              <h3 className="font-serif text-xl font-bold text-[#f5f0e8] group-hover:text-[#e8a44a] transition-colors mb-2">
                Our Story
              </h3>
              <p className="text-[#9a8870] text-sm">
                How a working dog problem in Bell County became a Texas-made solution.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
