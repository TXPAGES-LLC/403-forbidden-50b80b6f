"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  {
    label: "Products",
    href: "/products/gold-formula",
    children: [
      { label: "Gold Formula", href: "/products/gold-formula" },
      { label: "Blue Formula", href: "/products/blue-formula" },
    ],
  },
  {
    label: "Why Outlaw",
    href: "/why-outlaw",
    children: [
      { label: "Why Outlaw", href: "/why-outlaw" },
      { label: "Ingredients", href: "/why-outlaw/ingredients" },
      { label: "Our Story", href: "/why-outlaw/our-story" },
    ],
  },
  {
    label: "Where to Buy",
    href: "/where-to-buy",
    children: [
      { label: "Store Locator", href: "/where-to-buy" },
      { label: "Belton", href: "/where-to-buy/belton" },
      { label: "Harker Heights", href: "/where-to-buy/harker-heights" },
      { label: "Gatesville", href: "/where-to-buy/gatesville" },
      { label: "Copperas Cove", href: "/where-to-buy/copperas-cove" },
      { label: "Hillsboro", href: "/where-to-buy/hillsboro" },
      { label: "Hamilton", href: "/where-to-buy/hamilton" },
      { label: "Lampasas", href: "/where-to-buy/lampasas" },
      { label: "Waco", href: "/where-to-buy/waco" },
    ],
  },
  { label: "Feeding Guide", href: "/feeding-guide" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// Simplified links shown in mobile menu (no city sub-pages)
const mobileNavLinks = navLinks.map((link) =>
  link.label === "Where to Buy"
    ? { ...link, children: [{ label: "Store Locator", href: "/where-to-buy" }] }
    : link
);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeMenu = () => { setOpen(false); setMobileExpanded(null); };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-24 md:h-32 lg:h-36">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0"
          aria-label="Outlaw Feed — Home"
          onClick={closeMenu}
        >
          <img
            src="/logo-transparent-long.png"
            alt="Travis Farr's Outlaw Feed Co."
            width={280}
            height={60}
            className="h-20 md:h-28 lg:h-32 w-auto object-contain"
            fetchPriority="high"
          />
        </Link>

        {/* Desktop Nav — hidden below lg */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Main navigation">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdown(link.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="text-xs xl:text-sm font-semibold text-gray-800 hover:text-[#c85a00] transition-colors tracking-wide uppercase flex items-center gap-1"
                >
                  {link.label}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
                </Link>
                {dropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2 w-48 z-50">
                    <div className="bg-white border border-gray-200 rounded-md shadow-xl overflow-hidden">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c85a00] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-gray-800 hover:text-[#c85a00] transition-colors tracking-wide uppercase"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+12549393957"
            className="text-xs text-gray-500 hover:text-[#c85a00] transition-colors font-medium hidden xl:block"
          >
            (254) 939-3957
          </a>
          <Link
            href="/where-to-buy"
            className="px-4 py-2 text-xs xl:text-sm font-semibold uppercase tracking-wider rounded bg-[#c85a00] text-white hover:bg-[#a84800] transition-colors whitespace-nowrap"
          >
            Find a Store
          </Link>
        </div>

        {/* Tablet/Mobile: hamburger */}
        <div className="flex lg:hidden items-center">
          <button
            className="flex flex-col justify-center gap-[5px] p-2 rounded hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu — fixed full-screen overlay below the header bar */}
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed left-0 right-0 top-24 md:top-32 bottom-0 bg-white overflow-y-auto z-40 border-t border-gray-200"
        >
          <nav className="flex flex-col px-4 py-2" aria-label="Mobile navigation">
            {mobileNavLinks.map((link) => (
              <div key={link.label} className="border-b border-gray-100 last:border-0">
                {link.children ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                      className="w-full flex items-center justify-between py-4 text-sm font-semibold uppercase tracking-wider text-gray-800 hover:text-[#c85a00] transition-colors"
                      aria-expanded={mobileExpanded === link.label}
                    >
                      {link.label}
                      <svg
                        width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        className={`transition-transform duration-200 shrink-0 ${mobileExpanded === link.label ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </button>
                    {mobileExpanded === link.label && (
                      <div className="pb-3 pl-4 flex flex-col">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMenu}
                            className="block py-2.5 text-sm text-gray-500 hover:text-[#c85a00] transition-colors border-b border-gray-50 last:border-0"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-4 text-sm font-semibold uppercase tracking-wider text-gray-800 hover:text-[#c85a00] transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            {/* CTA buttons — always visible on all mobile/tablet sizes */}
            <div className="flex flex-col gap-3 pt-5 pb-8">
              <a
                href="tel:+12549393957"
                className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold rounded bg-[#c85a00] text-white hover:bg-[#a84800] transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 5.45 5.45l1.79-1.78a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z"/></svg>
                Call (254) 939-3957
              </a>
              <Link
                href="/where-to-buy"
                onClick={closeMenu}
                className="py-3.5 text-center text-sm font-semibold uppercase tracking-wider rounded border border-gray-300 text-gray-700 hover:border-[#c85a00] hover:text-[#c85a00] transition-colors"
              >
                Find a Store
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
