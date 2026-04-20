import Link from "next/link";

const footerLinks = [
  {
    heading: "Products",
    links: [
      { label: "Gold Formula", href: "/products/gold-formula" },
      { label: "Blue Formula", href: "/products/blue-formula" },
    ],
  },
  {
    heading: "Why Outlaw",
    links: [
      { label: "Ingredients", href: "/why-outlaw/ingredients" },
      { label: "Our Story", href: "/why-outlaw/our-story" },
      { label: "Why Outlaw", href: "/why-outlaw" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Feeding Guide", href: "/feeding-guide" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/feeding-guide#faq" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Where to Buy", href: "/where-to-buy" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0908] border-t border-[#2e2820]" role="contentinfo">
      {/* Email capture band */}
      <div className="border-b border-[#2e2820] py-12 px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#c85a00] font-semibold mb-2">
            Join the Pack
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mb-2">
            Get $5 Off Your Next Bag
          </h2>
          <p className="text-[#9a8870] text-sm mb-6">
            Sign up for ranch-dog nutrition tips, new product announcements, and exclusive member deals.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Email signup form"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded bg-[#1a1712] border border-[#2e2820] text-[#f5f0e8] placeholder-[#9a8870] text-sm focus:outline-none focus:border-[#c85a00] transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#c85a00] text-white text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#a84800] transition-colors whitespace-nowrap"
            >
              Join the Pack
            </button>
          </form>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label="Outlaw Feed home" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold tracking-widest uppercase text-[#f5f0e8] block">
                OUTLAW
              </span>
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c85a00] font-semibold">
                FEED
              </span>
            </Link>
            <p className="text-[#9a8870] text-xs leading-relaxed mb-4">
              Made in Texas. Made to Work. No corn, wheat, or soy — ever.
            </p>
            <p className="text-[#9a8870] text-xs">
              Bell County, TX
              <br />
              <a
                href="tel:+12545550100"
                className="hover:text-[#e8a44a] transition-colors"
              >
                (254) 555-0100
              </a>
            </p>
          </div>

          {/* Nav columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#f5f0e8] mb-4">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#9a8870] hover:text-[#e8a44a] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#2e2820] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#9a8870] text-xs">
            &copy; {new Date().getFullYear()} Outlaw Feed. All rights reserved. Made in Texas.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/outlawfeed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9a8870] hover:text-[#e8a44a] transition-colors text-xs uppercase tracking-wider"
              aria-label="Outlaw Feed on Instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/outlawfeed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9a8870] hover:text-[#e8a44a] transition-colors text-xs uppercase tracking-wider"
              aria-label="Outlaw Feed on Facebook"
            >
              Facebook
            </a>
            <Link
              href="/contact"
              className="text-[#9a8870] hover:text-[#e8a44a] transition-colors text-xs uppercase tracking-wider"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
