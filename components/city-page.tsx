"use client";

import Link from "next/link";
import GtmCallLink from "@/components/gtm-call-link";
import GtmCtaLink from "@/components/gtm-cta-link";

export interface CityPageProps {
  city: string;
  state: string;
  county: string;
  h1: string;
  h1Sub: string;
  sections: {
    heading: string;
    body: string;
  }[];
  breadcrumb: string;
  schema: object;
}

export default function CityPage({
  city,
  state,
  county,
  h1,
  h1Sub,
  sections,
  breadcrumb,
  schema,
}: CityPageProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20 px-4 md:px-6 bg-[#0f0e0c]">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-[#9a8870]">
              <li>
                <Link href="/" className="hover:text-[#e8a44a] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/where-to-buy" className="hover:text-[#e8a44a] transition-colors">
                  Where to Buy
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#f5f0e8]">{breadcrumb}</li>
            </ol>
          </nav>

          <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#c85a00] font-semibold mb-4">
            {county} &bull; {state}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#f5f0e8] mb-6 text-balance">
            {h1}
          </h1>
          <p className="text-[#f5f0e8]/70 text-lg leading-relaxed max-w-2xl">
            {h1Sub}
          </p>

          {/* Proof strip */}
          <div className="flex flex-wrap gap-4 mt-8">
            {["No Corn", "No Wheat", "No Soy", "Made in Texas", "AAFCO Certified"].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 bg-[#1a1712] border border-[#2e2820] rounded text-xs font-semibold uppercase tracking-wider text-[#e8a44a]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content sections */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Content stack */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {sections.map((s, i) => (
              <div key={i} className="border-l-2 border-[#c85a00] pl-6">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mb-3 text-balance">
                  {s.heading}
                </h2>
                <p className="text-[#f5f0e8]/70 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          {/* Sidebar CTA */}
          <aside className="flex flex-col gap-6">
            <div className="p-6 bg-[#1a1712] border border-[#c85a00]/30 rounded-lg">
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#c85a00] font-semibold mb-3">
                Find It Near {city}
              </p>
              <h3 className="font-serif text-xl font-bold text-[#f5f0e8] mb-3">
                See All Retailers
              </h3>
              <p className="text-[#9a8870] text-sm leading-relaxed mb-5">
                View our full store locator for addresses, hours, and which formula each retailer carries.
              </p>
              <Link
                href="/where-to-buy"
                className="block text-center px-5 py-3 bg-[#c85a00] text-white text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#a84800] transition-colors"
              >
                View Store Locator
              </Link>
            </div>

            <div className="p-6 bg-[#1a1712] border border-[#2e2820] rounded-lg">
              <h3 className="font-serif text-xl font-bold text-[#f5f0e8] mb-3">
                Questions?
              </h3>
              <p className="text-[#9a8870] text-sm leading-relaxed mb-2">
                Monday &ndash; Friday &nbsp;&bull;&nbsp; 8am &ndash; 3pm
              </p>
              <GtmCallLink
                location="city_page"
                className="font-serif text-2xl font-bold text-[#c85a00] hover:text-[#e8a44a] transition-colors block mb-4"
              >
                (254) 939-3957
              </GtmCallLink>
              <Link
                href="/contact"
                className="block text-center px-5 py-3 border border-[#2e2820] text-[#f5f0e8]/70 text-sm font-semibold uppercase tracking-wider rounded hover:border-[#c85a00] hover:text-[#c85a00] transition-colors"
              >
                Contact Us
              </Link>
            </div>

            <div className="p-6 bg-[#1a1712] border border-[#2e2820] rounded-lg">
              <h3 className="font-serif text-lg font-bold text-[#f5f0e8] mb-3">
                Our Formulas
              </h3>
              <div className="flex flex-col gap-3">
                <Link
                  href="/products/gold-formula"
                  className="flex items-center justify-between p-3 bg-[#0f0e0c] border border-[#2e2820] rounded hover:border-[#c85a00]/40 transition-colors group"
                >
                  <div>
                    <p className="text-[#f5f0e8] text-sm font-semibold group-hover:text-[#e8a44a] transition-colors">
                      Gold Formula
                    </p>
                    <p className="text-[#9a8870] text-xs">26% Protein / 18% Fat</p>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#c85a00]" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link
                  href="/products/blue-formula"
                  className="flex items-center justify-between p-3 bg-[#0f0e0c] border border-[#2e2820] rounded hover:border-[#c85a00]/40 transition-colors group"
                >
                  <div>
                    <p className="text-[#f5f0e8] text-sm font-semibold group-hover:text-[#e8a44a] transition-colors">
                      Blue Formula
                    </p>
                    <p className="text-[#9a8870] text-xs">21% Protein / 15% Fat</p>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#c85a00]" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-[#1a1712] border-t border-[#2e2820]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#f5f0e8] mb-4 text-balance">
            Ready to Switch to a Real Dog Food?
          </h2>
          <p className="text-[#f5f0e8]/70 mb-8 max-w-xl mx-auto leading-relaxed">
            Find the nearest retailer carrying Outlaw Feed in {county}, or call us to ask about delivery options and availability near {city}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GtmCtaLink
              href="/where-to-buy"
              location="city_page_bottom"
              className="px-7 py-4 bg-[#c85a00] text-white text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#a84800] transition-colors"
            >
              Find a Store Near You
            </GtmCtaLink>
            <Link
              href="/feeding-guide"
              className="px-7 py-4 border border-[#2e2820] text-[#f5f0e8]/70 text-sm font-semibold uppercase tracking-wider rounded hover:border-[#c85a00] hover:text-[#c85a00] transition-colors"
            >
              Feeding Guide &amp; FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
