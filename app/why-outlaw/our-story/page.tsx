import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story — Travis Farr's Outlaw Feed Co. | Bell County, Texas",
  description:
    "Travis Farr created Outlaw Feed for the hunting and working dogs he loved — a no-filler, high-protein Texas-made dog food built for every stage of a dog's life. Read the story behind Outlaw Feed Co.",
  alternates: { canonical: "/why-outlaw/our-story" },
  openGraph: {
    type: "website",
    title: "Our Story — Travis Farr's Outlaw Feed Co.",
    description:
      "Travis Farr built Outlaw Feed for the hunting and working dogs he loved. Made in Bell County, Texas. No fillers, no compromise.",
    url: "/why-outlaw/our-story",
    siteName: "Outlaw Feed",
    images: [
      {
        url: "https://outlawfeed.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Outlaw Feed — founded by Travis Farr in Bell County, Texas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story — Travis Farr's Outlaw Feed Co.",
    description: "Built in Bell County, TX for hunting and working dogs. The story behind Outlaw Feed.",
    images: ["https://outlawfeed.com/opengraph-image.png"],
  },
};

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-0 md:pt-24 lg:pt-28 overflow-hidden bg-[#0f0e0c]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 pb-20 md:pb-28">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-[#9a8870]">
              <li><Link href="/" className="hover:text-[#e8a44a] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/why-outlaw" className="hover:text-[#e8a44a] transition-colors">Why Outlaw</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#f5f0e8]">Our Story</li>
            </ol>
          </nav>
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#c85a00] font-semibold mb-4">
            Bell County, Texas
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-[#f5f0e8] mb-8 text-balance">
            Born in the Field. Built for the Dog.
          </h1>
        </div>
        <div className="w-full">
          <img
            src="/working-dog-nutrition.png"
            alt="Golden retriever working dog running across a rural field at sunset — Outlaw Feed, made in Texas for dogs that work"
            className="w-full h-72 md:h-96 object-cover"
            fetchPriority="high"
            decoding="async"
            width={1400}
            height={384}
          />
        </div>
      </section>

      {/* Story body */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-[#0f0e0c]" aria-labelledby="story-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="story-heading" className="font-serif text-3xl md:text-4xl font-bold text-[#f5f0e8] mb-8">
            The Story Behind Outlaw Feed
          </h2>
          <div className="flex flex-col gap-6">
            <p className="text-[#f5f0e8]/75 text-base md:text-lg leading-relaxed">
              Outlaw Feed was created out of necessity. Travis Farr spent many of his younger years in the field alongside his hunting dogs — and that time forged a deep passion for giving those dogs the nutrition they truly deserved. With a growing kennel and an uncompromising standard for his animals&apos; health, Travis began researching the most beneficial ingredients available for canines.
            </p>
            <p className="text-[#f5f0e8]/75 text-base md:text-lg leading-relaxed">
              What he found on store shelves fell short. Bags full of corn, wheat, and soy. Vague labels hiding low-quality by-products. Feeds priced like a premium but formulated like a budget. Travis knew there was a better way — so he built it himself, right here in Bell County, Texas.
            </p>

            <h3 className="font-serif text-2xl font-bold text-[#f5f0e8] mt-4">
              Real Ingredients for Every Stage of Life
            </h3>
            <p className="text-[#f5f0e8]/75 text-base md:text-lg leading-relaxed">
              Today, Outlaw Feed takes great pride in delivering a genuinely healthy choice dog food — one built on energy-producing ingredients that let your dog eat a balanced diet with fewer fillers and more of what actually matters. Our product line is formulated to support all stages of a dog&apos;s life cycle, from the high-protein demands of active working dogs and hunting dogs to the sustained maintenance needs of healthy adults.
            </p>
            <p className="text-[#f5f0e8]/75 text-base md:text-lg leading-relaxed">
              No corn. No wheat. No soy. Every ingredient earns its place in the bag, and every bag is made in Texas.
            </p>

            <h3 className="font-serif text-2xl font-bold text-[#f5f0e8] mt-4">
              For Dogs That Work — and Dogs That Love
            </h3>
            <p className="text-[#f5f0e8]/75 text-base md:text-lg leading-relaxed">
              Whether your dog is running birds in the field at dawn, working cattle on a Central Texas ranch, or simply providing loyalty and companionship to your family — your dog deserves the best. Travis Farr and his family hope you and your best friend will enjoy the benefits of Outlaw Feed for many years to come, as the primary source of healthy, honest nutrition for your dog.
            </p>

            {/* Signature block */}
            <div className="mt-6 pt-6 border-t border-[#2e2820]">
              <p className="text-[#f5f0e8]/75 text-base italic mb-4">Sincerely,</p>
              <p className="font-serif text-xl font-bold text-[#e8a44a]">Travis Farr</p>
              <p className="text-[#9a8870] text-sm">Founder, Outlaw Feed Co. &mdash; Bell County, Texas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-[#1a1712] border-y border-[#2e2820]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#f5f0e8] mb-10 text-center">
            Why Texas Dog Owners Choose Outlaw Feed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "No Fillers, Ever", desc: "No corn, wheat, or soy — in any formula, in any bag. What you see on the label is what your dog eats, and nothing else." },
              { label: "Made in Texas", desc: "Manufactured in Bell County, TX. We know exactly who makes our food, how it is made, and what goes in every batch." },
              { label: "All Life Stages", desc: "From high-protein formulas for hard-working hunting dogs to adult maintenance — Outlaw Feed is built to support your dog at every age." },
            ].map((v) => (
              <div key={v.label} className="p-8 bg-[#0f0e0c] border border-[#2e2820] rounded-lg text-center">
                <h3 className="font-serif text-xl font-bold text-[#e8a44a] mb-3">{v.label}</h3>
                <p className="text-[#9a8870] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-[#0f0e0c]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-[#f5f0e8] mb-4">
            Ready to Try Outlaw Feed?
          </h2>
          <p className="text-[#9a8870] mb-8">Find a retailer near you or contact us directly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/where-to-buy" className="px-8 py-4 bg-[#c85a00] text-white text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#a84800] transition-colors">
              Find a Store
            </Link>
            <Link href="/why-outlaw/ingredients" className="px-8 py-4 border border-[#2e2820] text-[#f5f0e8]/70 text-sm font-semibold uppercase tracking-wider rounded hover:border-[#c85a00] hover:text-[#c85a00] transition-colors">
              See the Ingredients
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
