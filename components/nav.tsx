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

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-36">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          aria-label="Outlaw Feed — Home"
        >
          <img
            src="/Logo.png"
            alt="Travis Farr's Outlaw Feed Co."
            width={480}
            height={180}
            className="h-36 w-auto object-contain"
            fetchPriority="high"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
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
                  className="text-sm font-medium text-gray-800 hover:text-[#c85a00] transition-colors tracking-wide uppercase"
                >
                  {link.label}
                </Link>
                {dropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-xl overflow-hidden">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c85a00] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-800 hover:text-[#c85a00] transition-colors tracking-wide uppercase"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/where-to-buy"
            className="px-4 py-2 text-sm font-semibold uppercase tracking-wider rounded bg-[#c85a00] text-white hover:bg-[#a84800] transition-colors"
          >
            Find a Store
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-gray-200"
        >
          <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-semibold uppercase tracking-wider text-gray-800 hover:text-[#c85a00] border-b border-gray-100 transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block py-2 text-sm text-gray-500 hover:text-[#c85a00] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/where-to-buy"
              onClick={() => setOpen(false)}
              className="mt-3 py-3 text-center text-sm font-semibold uppercase tracking-wider rounded bg-[#c85a00] text-white hover:bg-[#a84800] transition-colors"
            >
              Find a Store Near You
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
