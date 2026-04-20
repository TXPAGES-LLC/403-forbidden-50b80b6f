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
  { label: "Where to Buy", href: "/where-to-buy" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0e0c]/95 backdrop-blur-sm border-b border-[#2e2820]"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col leading-none group"
          aria-label="Outlaw Feed — Home"
        >
          <span
            className="font-serif text-2xl font-bold tracking-widest uppercase text-[#f5f0e8] group-hover:text-[#e8a44a] transition-colors"
          >
            OUTLAW
          </span>
          <span
            className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#c85a00] font-semibold -mt-0.5"
          >
            FEED
          </span>
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
                  className="text-sm font-medium text-[#f5f0e8]/80 hover:text-[#e8a44a] transition-colors tracking-wide uppercase"
                >
                  {link.label}
                </Link>
                {dropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-44 bg-[#1a1712] border border-[#2e2820] rounded-md shadow-xl overflow-hidden">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-3 text-sm text-[#f5f0e8]/80 hover:bg-[#2e2820] hover:text-[#e8a44a] transition-colors"
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
                className="text-sm font-medium text-[#f5f0e8]/80 hover:text-[#e8a44a] transition-colors tracking-wide uppercase"
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
            className={`block w-6 h-0.5 bg-[#f5f0e8] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#f5f0e8] transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#f5f0e8] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#0f0e0c] border-t border-[#2e2820]"
        >
          <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-semibold uppercase tracking-wider text-[#f5f0e8]/80 hover:text-[#e8a44a] border-b border-[#2e2820] transition-colors"
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
                        className="block py-2 text-sm text-[#9a8870] hover:text-[#e8a44a] transition-colors"
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
