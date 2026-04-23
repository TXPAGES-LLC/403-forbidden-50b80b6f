import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Outlaw Feed",
  description:
    "Contact Outlaw Feed by phone. Available Monday through Friday, 8am to 3pm. Call (254) 393-3957 for product questions, Bell County delivery, or retailer inquiries.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-6 bg-[#0f0e0c]">
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
              href="tel:+12543933957"
              className="font-serif text-4xl md:text-5xl font-bold text-[#c85a00] hover:text-[#e8a44a] transition-colors block my-6"
            >
              (254) 393-3957
            </a>
            <a
              href="tel:+12543933957"
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

        </div>
      </section>
    </>
  );
}
