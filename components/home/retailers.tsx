import Link from 'next/link'

const featuredRetailers = [
  { name: 'Temple Feed & Supply', city: 'Temple, TX', county: 'Bell County', phone: '(254) 000-0001', address: '123 Ranch Rd, Temple, TX 76501' },
  { name: 'Belton Farm & Ranch', city: 'Belton, TX', county: 'Bell County', phone: '(254) 000-0002', address: '456 Farm Rd, Belton, TX 76513' },
  { name: 'Killeen Country Store', city: 'Killeen, TX', county: 'Bell County', phone: '(254) 000-0003', address: '789 County Rd, Killeen, TX 76541' },
  { name: 'Waco Ranch Supply', city: 'Waco, TX', county: 'McLennan County', phone: '(254) 000-0004', address: '321 Prairie Ln, Waco, TX 76701' },
  { name: 'Georgetown Feed Co.', city: 'Georgetown, TX', county: 'Williamson County', phone: '(512) 000-0005', address: '654 Stone Creek Dr, Georgetown, TX 78626' },
  { name: 'Austin Outdoor & Pet', city: 'Austin, TX', county: 'Travis County', phone: '(512) 000-0006', address: '987 Westlake Dr, Austin, TX 78746' },
]

export function Retailers() {
  return (
    <section
      id="find-a-store"
      aria-labelledby="retailers-heading"
      className="bg-cream-dark py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-orange font-sans text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Retail Locations
          </p>
          <h2
            id="retailers-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Find Outlaw Feed Near You
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-base leading-relaxed max-w-lg mx-auto">
            Available at independent farm &amp; ranch supply stores across Central Texas. Bell County delivery available — call to order.
          </p>
        </div>

        {/* Retailer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {featuredRetailers.map((r) => (
            <div
              key={r.name}
              className="bg-card border border-border rounded-sm p-5 flex flex-col gap-2"
            >
              <p className="inline-block text-xs font-semibold text-orange uppercase tracking-wider font-sans">{r.county}</p>
              <h3 className="font-serif text-base font-bold text-foreground">{r.name}</h3>
              <address className="not-italic font-sans text-sm text-muted-foreground leading-relaxed">
                <span className="block">{r.address}</span>
              </address>
              <a
                href={`tel:${r.phone.replace(/\D/g, '')}`}
                className="inline-flex items-center gap-1.5 text-sm text-foreground font-semibold hover:text-orange transition-colors mt-1"
                aria-label={`Call ${r.name} at ${r.phone}`}
              >
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                {r.phone}
              </a>
            </div>
          ))}
        </div>

        {/* Bell County callout */}
        <div className="bg-charcoal text-cream rounded-sm p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <p className="font-sans text-xs font-bold text-orange tracking-[0.15em] uppercase mb-2">Bell County Delivery</p>
            <h3 className="font-serif text-xl font-bold text-cream">We Deliver in Bell County, TX</h3>
            <p className="font-sans text-sm text-cream/65 mt-2 max-w-md leading-relaxed">
              Can&apos;t make it to a store? We offer direct delivery throughout Bell County. Call to place your order — minimum orders apply.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="tel:+18000000000"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-sm uppercase tracking-wider hover:bg-orange/90 transition-colors"
            >
              Call to Order
            </a>
            <Link
              href="/find-a-store"
              className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream font-bold text-sm px-6 py-3 rounded-sm uppercase tracking-wider hover:border-orange hover:text-orange transition-colors"
            >
              View All Locations
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
