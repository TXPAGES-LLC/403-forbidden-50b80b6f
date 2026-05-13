import Link from 'next/link'

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const footerServices = [
  { label: 'Leasing', href: '/services/leasing' },
  { label: 'Tenant Representation', href: '/services/tenant-rep' },
  { label: 'Investment Sales', href: '/services/investment-sales' },
]

const footerMarkets = [
  { label: 'Brownwood, TX', href: '/markets/brownwood' },
  { label: 'Abilene, TX', href: '/markets/abilene' },
  { label: 'San Angelo, TX', href: '/markets/san-angelo' },
  { label: 'DFW Metroplex', href: '/markets/dfw' },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#13261B] text-primary-foreground">
      {/* CTA band */}
      <div className="border-b border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="font-serif text-2xl lg:text-3xl font-bold text-primary-foreground text-balance">
              Ready to make a move?
            </p>
            <p className="text-primary-foreground/60 text-sm mt-2">
              Call or email Brandon directly — no gatekeepers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <a
              href="tel:2145771520"
              className="text-[13px] font-semibold tracking-wide text-primary-foreground/80 hover:text-accent transition-colors duration-200"
            >
              214-577-1520
            </a>
            <span className="hidden sm:block text-primary-foreground/20 text-xs" aria-hidden="true">/</span>
            <Link
              href="/contact"
              className="text-[12px] font-semibold tracking-[0.12em] uppercase px-6 py-3 bg-accent text-accent-foreground hover:bg-[#9A6D25] transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="mb-5">
              <p className="font-serif text-xl font-bold text-primary-foreground tracking-wide">MESA</p>
              <p className="text-[9px] font-sans font-medium tracking-[0.25em] text-accent uppercase mt-0.5">
                Commercial Real Estate
              </p>
            </div>
            <p className="text-primary-foreground/55 text-[13px] leading-relaxed">
              Leasing, tenant representation, and investment sales across Brownwood, Abilene, San Angelo, and DFW.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href="tel:2145771520"
                className="text-[13px] text-primary-foreground/65 hover:text-accent transition-colors duration-200"
              >
                214-577-1520
              </a>
              <a
                href="mailto:bharris@mesa-cre.com"
                className="text-[13px] text-primary-foreground/65 hover:text-accent transition-colors duration-200"
              >
                bharris@mesa-cre.com
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-primary-foreground/40 mb-5">
              Navigation
            </p>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-primary-foreground/65 hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Markets */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-primary-foreground/40 mb-5">
              Markets
            </p>
            <nav className="flex flex-col gap-3" aria-label="Footer markets">
              {footerMarkets.map((m) => (
                <Link
                  key={m.href}
                  href={m.href}
                  className="text-[13px] text-primary-foreground/65 hover:text-accent transition-colors duration-200"
                >
                  {m.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-primary-foreground/40 mb-5">
              Services
            </p>
            <nav className="flex flex-col gap-3" aria-label="Footer services">
              {footerServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="text-[13px] text-primary-foreground/65 hover:text-accent transition-colors duration-200"
                >
                  {s.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-[11px] text-primary-foreground/35">
            &copy; {new Date().getFullYear()} Mesa Commercial Real Estate. All rights reserved.
          </p>
          <p className="text-[11px] text-primary-foreground/25">
            Texas Real Estate Commission Information About Brokerage Services
          </p>
        </div>
      </div>
    </footer>
  )
}
