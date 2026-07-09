import Link from "next/link";
import type { Metadata } from "next";
import GtmCallLink from "@/components/gtm-call-link";

export const metadata: Metadata = {
  title: "Contact Outlaw Feed — (254) 939-3957",
  description:
    "Contact Outlaw Feed by phone: (254) 939-3957. Available Monday–Friday, 8am–3pm. Product questions, Bell County delivery, and Texas retailer inquiries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    title: "Contact Outlaw Feed — (254) 939-3957 | Outlaw Feed",
    description:
      "Call (254) 939-3957 for product questions, Bell County delivery, or retailer inquiries. Mon–Fri, 8am–3pm.",
    url: "/contact",
    siteName: "Outlaw Feed",
    images: [
      {
        url: "https://outlawfeed.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Outlaw Feed — Bell County, Texas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Outlaw Feed — (254) 939-3957 | Outlaw Feed",
    description: "Call for product questions, Bell County delivery, or retailer info. Mon–Fri 8am–3pm.",
    images: ["https://outlawfeed.com/opengraph-image.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20 px-4 md:px-6 bg-[#0f0e0c]">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-[#9a8870]">
              <li><Link href="/" className="hover:text-[#e8a44a] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#f5f0e8]">Contact</li>
            </ol>
          </nav>
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#c85a00] font-semibold mb-4">
            Get in Touch
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-[#f5f0e8] mb-6 text-balance">
            Contact Outlaw Feed
          </h1>
          <p className="text-[#f5f0e8]/70 text-lg leading-relaxed max-w-2xl">
            Questions about our formulas, looking to carry Outlaw Feed at your store, or want to set up Bell County delivery? Give us a call — we are real people and we pick up the phone.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-[#0f0e0c]">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">

          {/* Main call CTA */}
          <div className="p-8 md:p-10 bg-[#1a1712] border border-[#c85a00]/40 rounded-lg text-center">
            <div className="flex justify-center mb-5 text-[#c85a00]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 5.45 5.45l1.79-1.78a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z"/></svg>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#f5f0e8] mb-3">
              Call Us
            </h2>
            <p className="text-[#9a8870] text-sm mb-2">
              Monday &ndash; Friday &nbsp;&bull;&nbsp; 8:00 AM &ndash; 3:00 PM
            </p>
            <GtmCallLink
              location="contact_hero_number"
              className="font-serif text-4xl md:text-5xl font-bold text-[#c85a00] hover:text-[#e8a44a] transition-colors block my-6"
            >
              (254) 939-3957
            </GtmCallLink>
            <GtmCallLink
              location="contact_hero_button"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#c85a00] text-white font-semibold text-sm uppercase tracking-widest rounded hover:bg-[#a84800] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 5.45 5.45l1.79-1.78a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z"/></svg>
              Tap to Call
            </GtmCallLink>
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-[#1a1712] border border-[#2e2820] rounded-lg">
              <h3 className="font-serif text-lg font-bold text-[#f5f0e8] mb-2">Bell County Delivery</h3>
              <p className="text-[#9a8870] text-sm leading-relaxed">
                We offer direct delivery to Bell County addresses. Call during business hours to set up a schedule and never run out of feed.
              </p>
            </div>
            <div className="p-6 bg-[#1a1712] border border-[#2e2820] rounded-lg">
              <h3 className="font-serif text-lg font-bold text-[#f5f0e8] mb-2">Become a Retailer</h3>
              <p className="text-[#9a8870] text-sm leading-relaxed">
                Interested in carrying Outlaw Feed at your farm supply or feed store? Give us a call and we will talk wholesale.
              </p>
            </div>
            <div className="p-6 bg-[#1a1712] border border-[#2e2820] rounded-lg">
              <h3 className="font-serif text-lg font-bold text-[#f5f0e8] mb-2">Product Questions</h3>
              <p className="text-[#9a8870] text-sm leading-relaxed">
                Not sure which formula is right for your dog? We can walk you through it. Call during business hours — Monday through Friday, 8am to 3pm.
              </p>
            </div>
            <div className="p-6 bg-[#1a1712] border border-[#2e2820] rounded-lg">
              <h3 className="font-serif text-lg font-bold text-[#f5f0e8] mb-2">Where to Buy</h3>
              <p className="text-[#9a8870] text-sm leading-relaxed">
                Looking for a retailer near you? Check our{" "}
                <Link href="/where-to-buy" className="text-[#c85a00] hover:text-[#e8a44a] transition-colors">
                  store locator page
                </Link>{" "}
                or call to find the closest location.
              </p>
            </div>
          </div>

          {/* Service area + reasons to call prose */}
          <div className="p-8 md:p-10 bg-[#1a1712] border border-[#2e2820] rounded-lg flex flex-col gap-6">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#c85a00] font-semibold mb-3">
                Who We Serve
              </p>
              <h2 className="font-serif text-2xl font-bold text-[#f5f0e8] mb-4 text-balance">
                Central Texas Working Dog Country
              </h2>
              <p className="text-[#9a8870] text-sm leading-relaxed mb-3">
                Outlaw Feed is made in Bell County, Texas and sold direct and through local retailers across Central Texas. Our primary service area covers Bell, McLennan, Coryell, Lampasas, Hill, and Hamilton counties — the heart of working ranch and hunting dog territory in the state.
              </p>
              <p className="text-[#9a8870] text-sm leading-relaxed mb-3">
                If you are in Belton, Temple, Killeen, Copperas Cove, Harker Heights, Waco, Gatesville, Hillsboro, Lampasas, or Hamilton, there is a good chance a retailer near you already carries Outlaw Feed. Call us and we will point you to the closest location or discuss direct delivery options if you are in Bell County.
              </p>
              <p className="text-[#9a8870] text-sm leading-relaxed">
                Outside that area? We still want to hear from you. If you are a feed store, farm supply, or co-op looking to carry a locally made, high-protein Texas dog food, that conversation starts with a phone call. We handle wholesale accounts directly — no distributor middleman.
              </p>
            </div>

            <div className="border-t border-[#2e2820] pt-6">
              <h3 className="font-serif text-xl font-bold text-[#f5f0e8] mb-4">
                Good Reasons to Call Us
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {[
                  { heading: "You are switching formulas",       body: "Not sure whether Gold (26% protein, 18% fat) or Blue (21% protein, 15% fat) is right for your dog's workload? We can walk you through it based on breed, age, and how hard the dog is working." },
                  { heading: "You need Bell County delivery",    body: "We offer direct delivery to Bell County addresses. Call to set up a recurring schedule so you never run out mid-season." },
                  { heading: "Pre-season feeding adjustments",   body: "Heading into dove, deer, or quail season and want to adjust your dog's caloric intake before opening day? We can give you a protocol over the phone." },
                  { heading: "You want to carry Outlaw Feed",    body: "Farm supply stores, feed co-ops, and ranch supply stores — call to ask about wholesale pricing and minimum order quantities." },
                  { heading: "You have a dog with sensitivities", body: "Our formulas contain no corn, wheat, or soy. If your dog has shown symptoms of food intolerance on other brands, we can explain what we use instead and why it makes a difference." },
                ].map((item) => (
                  <li key={item.heading} className="flex items-start gap-3">
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#c85a00]" aria-hidden="true" />
                    <span className="text-sm text-[#9a8870] leading-relaxed">
                      <strong className="text-[#f5f0e8] font-semibold">{item.heading}.</strong>{" "}{item.body}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Where to buy locally */}
          <div className="p-8 md:p-10 bg-[#1a1712] border border-[#2e2820] rounded-lg">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#c85a00] font-semibold mb-3">
              Find It Locally
            </p>
            <h2 className="font-serif text-2xl font-bold text-[#f5f0e8] mb-4 text-balance">
              Where to Buy Outlaw Feed Near You
            </h2>
            <p className="text-[#9a8870] text-sm leading-relaxed mb-4">
              Outlaw Feed is stocked at select farm supply and feed stores across the six-county Central Texas area. Use the store locator below to find the nearest retail location, or call us at <GtmCallLink location="contact_inline" className="text-[#c85a00] hover:text-[#e8a44a] transition-colors font-semibold">(254) 939-3957</GtmCallLink> and we will confirm current stock at the location closest to you.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {[
                { city: "Belton",         county: "Bell County",      href: "/where-to-buy/belton" },
                { city: "Waco",           county: "McLennan County",   href: "/where-to-buy/waco" },
                { city: "Copperas Cove",  county: "Coryell County",    href: "/where-to-buy/copperas-cove" },
                { city: "Lampasas",       county: "Lampasas County",   href: "/where-to-buy/lampasas" },
                { city: "Hillsboro",      county: "Hill County",       href: "/where-to-buy/hillsboro" },
                { city: "Hamilton",       county: "Hamilton County",   href: "/where-to-buy/hamilton" },
                { city: "Harker Heights", county: "Bell County",       href: "/where-to-buy/harker-heights" },
                { city: "Gatesville",     county: "Coryell County",    href: "/where-to-buy/gatesville" },
              ].map((loc) => (
                <Link
                  key={loc.href}
                  href={loc.href}
                  className="group flex flex-col gap-0.5 p-3 bg-[#0f0e0c] border border-[#2e2820] rounded hover:border-[#c85a00]/50 transition-colors"
                >
                  <span className="text-sm font-semibold text-[#f5f0e8] group-hover:text-[#e8a44a] transition-colors leading-tight">
                    {loc.city}
                  </span>
                  <span className="text-xs text-[#9a8870] leading-tight">{loc.county}</span>
                </Link>
              ))}
            </div>
            <Link
              href="/where-to-buy"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#c85a00] hover:text-[#e8a44a] transition-colors"
            >
              View full store locator
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Verified Business Profiles */}
          <div className="pt-4">
            <div className="text-center mb-6">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#c85a00] font-semibold mb-2">
                Verified Business Profiles
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8]">
                Find Us Online
              </h2>
              <p className="text-[#9a8870] text-sm mt-2 max-w-md mx-auto">
                Outlaw Feed is a verified, registered Texas business. Find our official profiles on trusted directories below.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                {
                  label: "Google Business",
                  description: "Reviews & directions",
                  href: "https://maps.google.com/?cid=5693377320952782312",
                  icon: (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                    </svg>
                  ),
                },
                {
                  label: "Yelp",
                  description: "Ratings & reviews",
                  href: "https://www.yelp.com/biz/outlaw-feed-temple-2",
                  icon: (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                      <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm.75 15.5h-1.5v-1.5h1.5v1.5zm0-3h-1.5V6.5h1.5V14.5z"/>
                    </svg>
                  ),
                },
                {
                  label: "MapQuest",
                  description: "Maps & directions",
                  href: "https://www.mapquest.com/us/texas/outlaw-feed-353191947",
                  icon: (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                    </svg>
                  ),
                },
                {
                  label: "Yellow Pages",
                  description: "Local business listing",
                  href: "https://www.yellowpages.com/temple-tx/mip/outlaw-feed-496387658",
                  icon: (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h10v2H4z"/>
                    </svg>
                  ),
                },
                {
                  label: "Chamber of Commerce",
                  description: "Certified member listing",
                  href: "https://www.chamberofcommerce.com/business-directory/texas/temple/livestock-breeder/9271144-outlaw-feed",
                  icon: (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                      <path d="M12 3L2 9v1h2v8H2v2h20v-2h-2v-8h2V9L12 3zm0 2.236L19.528 10H4.472L12 5.236zM8 11h2v6H8v-6zm3 0h2v6h-2v-6zm3 0h2v6h-2v-6z"/>
                    </svg>
                  ),
                },
              ].map((profile) => (
                <a
                  key={profile.label}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#1a1712] border border-[#2e2820] rounded-lg hover:border-[#c85a00]/50 hover:bg-[#1f1c15] transition-all group"
                  aria-label={`View Outlaw Feed on ${profile.label}`}
                >
                  <span className="shrink-0 w-10 h-10 rounded-full bg-[#0f0e0c] border border-[#2e2820] flex items-center justify-center text-[#c85a00] group-hover:border-[#c85a00]/40 transition-colors">
                    {profile.icon}
                  </span>
                  <span className="flex flex-col min-w-0">
                    <span className="font-semibold text-sm text-[#f5f0e8] group-hover:text-[#e8a44a] transition-colors leading-tight">
                      {profile.label}
                    </span>
                    <span className="text-xs text-[#9a8870] leading-tight mt-0.5">
                      {profile.description}
                    </span>
                  </span>
                  <svg
                    className="ml-auto shrink-0 text-[#2e2820] group-hover:text-[#c85a00] transition-colors"
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
