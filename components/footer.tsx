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
  {
    heading: "Service Areas",
    links: [
      { label: "Belton, TX", href: "/where-to-buy/belton" },
      { label: "Harker Heights, TX", href: "/where-to-buy/harker-heights" },
      { label: "Gatesville, TX", href: "/where-to-buy/gatesville" },
      { label: "Copperas Cove, TX", href: "/where-to-buy/copperas-cove" },
      { label: "Hillsboro, TX", href: "/where-to-buy/hillsboro" },
      { label: "Hamilton, TX", href: "/where-to-buy/hamilton" },
      { label: "Lampasas, TX", href: "/where-to-buy/lampasas" },
      { label: "Waco, TX", href: "/where-to-buy/waco" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200" role="contentinfo">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label="Outlaw Feed home" className="inline-block mb-4">
              <img
                src="/Logo.png"
                alt="Travis Farr's Outlaw Feed Co."
                width={420}
                height={156}
                className="h-36 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              Made in Texas. Made to Work. No corn, wheat, or soy — ever.
            </p>
            <p className="text-gray-500 text-xs">
              Bell County, TX
              <br />
              <a
                href="tel:+12543933957"
                className="hover:text-[#c85a00] transition-colors"
              >
                (254) 393-3957
              </a>
            </p>
          </div>

          {/* Nav columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gray-900 mb-4">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-[#c85a00] transition-colors"
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
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} Outlaw Feed. All rights reserved. Made in Texas.
            {" "}Powered by{" "}
            <a
              href="https://www.txpages.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c85a00] transition-colors"
            >
              TXPAGES
            </a>.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/outlawfeed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#c85a00] transition-colors text-xs uppercase tracking-wider"
              aria-label="Outlaw Feed on Instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/outlawfeed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#c85a00] transition-colors text-xs uppercase tracking-wider"
              aria-label="Outlaw Feed on Facebook"
            >
              Facebook
            </a>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-[#c85a00] transition-colors text-xs uppercase tracking-wider"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
