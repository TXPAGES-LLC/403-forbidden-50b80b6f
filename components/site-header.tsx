'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

const services = [
  { label: 'Leasing', href: '/services/leasing', desc: 'Landlord representation' },
  { label: 'Tenant Representation', href: '/services/tenant-rep', desc: 'Space search & lease negotiation' },
  { label: 'Investment Sales', href: '/services/investment-sales', desc: 'Acquisition & disposition' },
]

const markets = [
  { label: 'Brownwood', href: '/markets/brownwood', desc: 'Brown County, TX' },
  { label: 'Abilene', href: '/markets/abilene', desc: 'Taylor County, TX' },
  { label: 'San Angelo', href: '/markets/san-angelo', desc: 'Tom Green County, TX' },
  { label: 'DFW Metroplex', href: '/markets/dfw', desc: 'Dallas-Fort Worth, TX' },
]

function DropdownMenu({
  label,
  items,
  open,
  onToggle,
  onClose,
}: {
  label: string
  items: { label: string; href: string; desc: string }[]
  open: boolean
  onToggle: () => void
  onClose: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    if (open) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open, onClose])

  const isActive = items.some((item) => pathname?.startsWith(item.href.split('/').slice(0, 2).join('/')))

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-haspopup="true"
        className={`flex items-center gap-1 text-[13px] font-medium tracking-[0.12em] uppercase transition-colors duration-200 ${
          isActive ? 'text-accent' : 'text-primary-foreground/80 hover:text-accent'
        }`}
      >
        {label}
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-3 w-64 bg-[#162E21] border border-primary-foreground/10 shadow-xl z-50">
          <ul role="menu">
            {items.map((item) => (
              <li key={item.href} role="none">
                <Link
                  href={item.href}
                  role="menuitem"
                  onClick={onClose}
                  className="flex flex-col gap-0.5 px-5 py-4 hover:bg-[#1E3A2B] border-b border-primary-foreground/8 last:border-0 transition-colors duration-150 group"
                >
                  <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-primary-foreground group-hover:text-accent transition-colors duration-150">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-primary-foreground/45 leading-snug">
                    {item.desc}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdowns on route change
  useEffect(() => {
    setOpenDropdown(null)
    setIsOpen(false)
  }, [pathname])

  const toggle = (key: string) => setOpenDropdown((prev) => (prev === key ? null : key))
  const close = () => setOpenDropdown(null)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-[#1E3A2B] ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-none shrink-0"
            aria-label="Mesa Commercial Real Estate — Home"
          >
            <span className="font-serif text-xl lg:text-2xl font-bold text-primary-foreground tracking-wide">
              MESA
            </span>
            <span className="text-[9px] lg:text-[10px] font-sans font-medium tracking-[0.25em] text-accent uppercase mt-0.5">
              Commercial Real Estate
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            <DropdownMenu
              label="Services"
              items={services}
              open={openDropdown === 'services'}
              onToggle={() => toggle('services')}
              onClose={close}
            />
            <DropdownMenu
              label="Markets"
              items={markets}
              open={openDropdown === 'markets'}
              onToggle={() => toggle('markets')}
              onClose={close}
            />
            <Link
              href="/about"
              className={`text-[13px] font-medium tracking-[0.12em] uppercase transition-colors duration-200 ${
                pathname === '/about' ? 'text-accent' : 'text-primary-foreground/80 hover:text-accent'
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-[13px] font-medium tracking-[0.12em] uppercase transition-colors duration-200 ${
                pathname === '/contact' ? 'text-accent' : 'text-primary-foreground/80 hover:text-accent'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA — desktop */}
          <div className="hidden md:flex items-center gap-5 shrink-0">
            <a
              href="tel:2145771520"
              className="text-[13px] font-medium tracking-wide text-primary-foreground/70 hover:text-accent transition-colors duration-200"
            >
              214-577-1520
            </a>
            <Link
              href="/contact"
              className="text-[12px] font-semibold tracking-[0.12em] uppercase px-5 py-2.5 bg-accent text-accent-foreground hover:bg-[#9A6D25] transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-primary-foreground p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#162E21] border-t border-white/10">
          <nav className="px-6 py-6 flex flex-col gap-1" aria-label="Mobile navigation">
            {/* Services accordion */}
            <div>
              <button
                onClick={() => setMobileExpanded((p) => (p === 'services' ? null : 'services'))}
                className="w-full flex items-center justify-between py-3 text-[13px] font-medium tracking-[0.15em] uppercase text-primary-foreground/85 hover:text-accent transition-colors"
                aria-expanded={mobileExpanded === 'services'}
              >
                Services
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${mobileExpanded === 'services' ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              {mobileExpanded === 'services' && (
                <div className="pl-4 pb-2 flex flex-col gap-1 border-l border-accent/30 ml-1">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setIsOpen(false)}
                      className="py-2 text-[12px] font-medium tracking-[0.1em] uppercase text-primary-foreground/70 hover:text-accent transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Markets accordion */}
            <div>
              <button
                onClick={() => setMobileExpanded((p) => (p === 'markets' ? null : 'markets'))}
                className="w-full flex items-center justify-between py-3 text-[13px] font-medium tracking-[0.15em] uppercase text-primary-foreground/85 hover:text-accent transition-colors"
                aria-expanded={mobileExpanded === 'markets'}
              >
                Markets
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${mobileExpanded === 'markets' ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              {mobileExpanded === 'markets' && (
                <div className="pl-4 pb-2 flex flex-col gap-1 border-l border-accent/30 ml-1">
                  {markets.map((m) => (
                    <Link
                      key={m.href}
                      href={m.href}
                      onClick={() => setIsOpen(false)}
                      className="py-2 text-[12px] font-medium tracking-[0.1em] uppercase text-primary-foreground/70 hover:text-accent transition-colors"
                    >
                      {m.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="py-3 text-[13px] font-medium tracking-[0.15em] uppercase text-primary-foreground/85 hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="py-3 text-[13px] font-medium tracking-[0.15em] uppercase text-primary-foreground/85 hover:text-accent transition-colors"
            >
              Contact
            </Link>

            <div className="pt-5 border-t border-white/10 flex flex-col gap-3 mt-2">
              <a href="tel:2145771520" className="text-sm text-primary-foreground/70">
                214-577-1520
              </a>
              <a href="mailto:bharris@mesa-cre.com" className="text-sm text-primary-foreground/70">
                bharris@mesa-cre.com
              </a>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 text-center text-[12px] font-semibold tracking-[0.12em] uppercase px-5 py-3 bg-accent text-accent-foreground"
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
