import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Outlaw Feed",
  description:
    "Contact Outlaw Feed by phone. Available Monday through Friday, 8am to 3pm. Call (254) 939-3957 for product questions, Bell County delivery, or retailer inquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 lg:pt-40 lg:pb-20 px-4 md:px-6 bg-[#0f0e0c]">
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
            <a
              href="tel:+12549393957"
              className="font-serif text-4xl md:text-5xl font-bold text-[#c85a00] hover:text-[#e8a44a] transition-colors block my-6"
            >
              (254) 939-3957
            </a>
            <a
              href="tel:+12549393957"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#c85a00] text-white font-semibold text-sm uppercase tracking-widest rounded hover:bg-[#a84800] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 5.45 5.45l1.79-1.78a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z"/></svg>
              Tap to Call
            </a>
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
                  href: "http://www.yellowpages.com/temple-tx/mip/outlaw-feed-496387658",
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
