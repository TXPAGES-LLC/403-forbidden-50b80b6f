"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

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
            Questions about our formulas, looking to carry Outlaw Feed at your store, or want to set up Bell County delivery? We are a real company with real people — reach out any way that works for you.
          </p>
        </div>
      </section>

      {/* Content grid */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact info */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#f5f0e8] mb-8">
              Contact Information
            </h2>
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 5.45 5.45l1.79-1.78a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z"/></svg>,
                  label: "Phone",
                  value: "(254) 555-0100",
                  href: "tel:+12545550100",
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                  label: "Email",
                  value: "info@outlawfeed.com",
                  href: "mailto:info@outlawfeed.com",
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                  label: "Location",
                  value: "Bell County, Texas",
                  href: "/where-to-buy",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 p-5 bg-[#1a1712] border border-[#2e2820] rounded-lg hover:border-[#c85a00]/50 transition-colors group"
                >
                  <div className="text-[#c85a00] shrink-0">{c.icon}</div>
                  <div>
                    <p className="text-[#9a8870] text-xs uppercase tracking-wider mb-0.5">{c.label}</p>
                    <p className="text-[#f5f0e8] text-sm font-medium group-hover:text-[#e8a44a] transition-colors">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-[#1a1712] border border-[#c85a00]/30 rounded-lg">
              <h3 className="font-serif text-lg font-bold text-[#f5f0e8] mb-3">Bell County Delivery</h3>
              <p className="text-[#9a8870] text-sm leading-relaxed mb-4">
                We offer direct delivery to Bell County addresses. Call us to set up a schedule and never run out of feed.
              </p>
              <a
                href="tel:+12545550100"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#c85a00] text-white text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#a84800] transition-colors"
              >
                Call to Order
              </a>
            </div>

            <div className="mt-6 p-6 bg-[#1a1712] border border-[#2e2820] rounded-lg">
              <h3 className="font-serif text-lg font-bold text-[#f5f0e8] mb-3">Become a Retailer</h3>
              <p className="text-[#9a8870] text-sm leading-relaxed">
                Interested in carrying Outlaw Feed at your farm supply or feed store? We would love to talk. Fill out the form and select &ldquo;Wholesale / Retailer Inquiry&rdquo; from the subject menu.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#f5f0e8] mb-8">
              Send a Message
            </h2>
            {submitted ? (
              <div className="p-8 bg-[#1a1712] border border-[#c85a00]/30 rounded-lg text-center">
                <div className="text-[#c85a00] mb-4 flex justify-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#f5f0e8] mb-2">Message Sent</h3>
                <p className="text-[#9a8870] text-sm">We will get back to you within one business day. For urgent needs, call us at <a href="tel:+12545550100" className="text-[#c85a00]">(254) 555-0100</a>.</p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                aria-label="Contact form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="first-name" className="text-xs font-semibold uppercase tracking-wider text-[#f5f0e8]/70">
                      First Name <span className="text-[#c85a00]">*</span>
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      required
                      className="px-4 py-3 bg-[#1a1712] border border-[#2e2820] rounded text-[#f5f0e8] text-sm placeholder-[#9a8870] focus:outline-none focus:border-[#c85a00] transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="last-name" className="text-xs font-semibold uppercase tracking-wider text-[#f5f0e8]/70">
                      Last Name <span className="text-[#c85a00]">*</span>
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      required
                      className="px-4 py-3 bg-[#1a1712] border border-[#2e2820] rounded text-[#f5f0e8] text-sm placeholder-[#9a8870] focus:outline-none focus:border-[#c85a00] transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-[#f5f0e8]/70">
                    Email Address <span className="text-[#c85a00]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="px-4 py-3 bg-[#1a1712] border border-[#2e2820] rounded text-[#f5f0e8] text-sm placeholder-[#9a8870] focus:outline-none focus:border-[#c85a00] transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-[#f5f0e8]/70">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="px-4 py-3 bg-[#1a1712] border border-[#2e2820] rounded text-[#f5f0e8] text-sm placeholder-[#9a8870] focus:outline-none focus:border-[#c85a00] transition-colors"
                    placeholder="(254) 555-0000"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-[#f5f0e8]/70">
                    Subject <span className="text-[#c85a00]">*</span>
                  </label>
                  <select
                    id="subject"
                    required
                    className="px-4 py-3 bg-[#1a1712] border border-[#2e2820] rounded text-[#f5f0e8] text-sm focus:outline-none focus:border-[#c85a00] transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a subject...</option>
                    <option value="product">Product Question</option>
                    <option value="delivery">Bell County Delivery</option>
                    <option value="retailer">Wholesale / Retailer Inquiry</option>
                    <option value="feeding">Feeding Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-[#f5f0e8]/70">
                    Message <span className="text-[#c85a00]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="px-4 py-3 bg-[#1a1712] border border-[#2e2820] rounded text-[#f5f0e8] text-sm placeholder-[#9a8870] focus:outline-none focus:border-[#c85a00] transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="px-7 py-4 bg-[#c85a00] text-white font-semibold text-sm uppercase tracking-widest rounded hover:bg-[#a84800] transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
