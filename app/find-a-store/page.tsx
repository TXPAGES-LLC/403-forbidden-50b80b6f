import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Find Outlaw Feed Near You | Dog Food Temple TX & Central Texas Retailers',
  description:
    'Find Outlaw Feed dog food at feed stores and farm & ranch retailers across Central Texas. Local delivery available in Bell County, TX. Call 254-773-1231 to order.',
  alternates: { canonical: 'https://www.outlawfeed.com/find-a-store' },
}

const retailers = [
  {
    county: 'Bell County',
    stores: [
      { name: 'Temple Feed & Supply', address: '1234 W Adams Ave', city: 'Temple', state: 'TX', zip: '76504', phone: '(254) 773-0001' },
      { name: 'Belton Farm & Ranch', address: '456 E Central Ave', city: 'Belton', state: 'TX', zip: '76513', phone: '(254) 933-0002' },
      { name: 'Killeen Country Store', address: '789 S Fort Hood St', city: 'Killeen', state: 'TX', zip: '76541', phone: '(254) 634-0003' },
    ],
  },
  {
    county: 'McLennan County',
    stores: [
      { name: 'Waco Ranch Supply', address: '321 Prairie Ln', city: 'Waco', state: 'TX', zip: '76701', phone: '(254) 755-0004' },
      { name: 'Hillsboro Feed Barn', address: '654 Corsicana St', city: 'Hillsboro', state: 'TX', zip: '76645', phone: '(254) 582-0005' },
    ],
  },
  {
    county: 'Williamson County',
    stores: [
      { name: 'Georgetown Feed Co.', address: '654 S Austin Ave', city: 'Georgetown', state: 'TX', zip: '78626', phone: '(512) 930-0006' },
      { name: 'Round Rock Ranch & Pet', address: '100 Round Rock Ave', city: 'Round Rock', state: 'TX', zip: '78664', phone: '(512) 244-0007' },
    ],
  },
  {
    county: 'Travis County',
    stores: [
      { name: 'Austin Outdoor & Pet', address: '987 Westlake Dr', city: 'Austin', state: 'TX', zip: '78746', phone: '(512) 327-0008' },
    ],
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Find Outlaw Feed Near You',
  description: 'Outlaw Feed retail locations across Central Texas. Local delivery in Bell County, TX.',
  url: 'https://www.outlawfeed.com/find-a-store',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: retailers.flatMap((county) =>
      county.stores.map((store, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Store',
          name: store.name,
          address: {
            '@type': 'PostalAddress',
            streetAddress: store.address,
            addressLocality: store.city,
            addressRegion: store.state,
            postalCode: store.zip,
            addressCountry: 'US',
          },
          telephone: store.phone,
        },
      }))
    ),
  },
}

export default function FindAStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main-content">
        {/* Page hero */}
        <section aria-labelledby="store-heading" className="bg-charcoal pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-sans text-xs font-bold tracking-[0.22em] uppercase text-orange mb-4">Retail Locations</p>
            <h1 id="store-heading" className="font-serif text-4xl sm:text-5xl font-bold text-cream leading-tight text-balance">
              Find Outlaw Feed Near You
            </h1>
            <p className="mt-5 font-sans text-lg text-cream/70 max-w-2xl leading-relaxed">
              Available at feed stores and farm &amp; ranch retailers across Central Texas. Local delivery available in Bell County &mdash; call to arrange.
            </p>
          </div>
        </section>

        {/* Map embed placeholder */}
        <section aria-label="Store locator map" className="bg-background py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full h-80 md:h-[480px] rounded-sm overflow-hidden border border-border bg-muted flex items-center justify-center">
              <iframe
                title="Outlaw Feed retail locations in Central Texas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220975.7!2d-97.4075!3d31.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864f5e8c9d1b7e6b%3A0xd2d6f88f19f7a7d6!2sTemple%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </section>

        {/* Retailer list */}
        <section aria-labelledby="retailer-list-heading" className="bg-background py-8 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="retailer-list-heading" className="font-serif text-2xl font-bold text-charcoal mb-8">
              All Retail Locations
            </h2>
            <div className="flex flex-col gap-10">
              {retailers.map((county) => (
                <div key={county.county}>
                  <h3 className="font-sans text-xs font-bold tracking-[0.22em] uppercase text-orange mb-4 pb-2 border-b border-border">
                    {county.county}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {county.stores.map((store) => (
                      <div
                        key={store.name}
                        className="bg-card border border-border rounded-sm p-5 flex flex-col gap-2"
                      >
                        <h4 className="font-serif text-base font-bold text-foreground">{store.name}</h4>
                        <address className="not-italic font-sans text-sm text-muted-foreground leading-relaxed">
                          {store.address}<br />
                          {store.city}, {store.state} {store.zip}
                        </address>
                        <a
                          href={`tel:${store.phone.replace(/\D/g, '')}`}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-orange transition-colors mt-1"
                          aria-label={`Call ${store.name}`}
                        >
                          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                          </svg>
                          {store.phone}
                        </a>
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(`${store.name} ${store.address} ${store.city} ${store.state}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-orange font-semibold hover:underline mt-1"
                          aria-label={`Get directions to ${store.name}`}
                        >
                          Get Directions &rarr;
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bell County delivery callout */}
        <section id="bell-county" aria-labelledby="delivery-heading" className="bg-charcoal py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="font-sans text-xs font-bold tracking-[0.22em] uppercase text-orange mb-3">Bell County Delivery</p>
              <h2 id="delivery-heading" className="font-serif text-3xl font-bold text-cream text-balance mb-3">
                We Deliver in Bell County, TX
              </h2>
              <p className="font-sans text-base text-cream/65 max-w-md leading-relaxed">
                Can&apos;t make it to a store? We offer direct delivery throughout Bell County. Contact us to arrange delivery directly to your door or your ranch. Minimum order quantities apply.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <a
                href="tel:+12547731231"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-7 py-4 rounded-sm uppercase tracking-wider hover:bg-orange/90 transition-colors"
              >
                Call 254-773-1231
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream font-bold text-sm px-7 py-4 rounded-sm uppercase tracking-wider hover:border-orange hover:text-orange transition-colors"
              >
                Delivery Inquiry
              </Link>
            </div>
          </div>
        </section>

        {/* Don't see your area */}
        <section aria-label="Expand Outlaw coverage" className="bg-cream-dark py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-3 text-balance">
              Don&apos;t See Your Area?
            </h2>
            <p className="font-sans text-base text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
              We&apos;re actively expanding to new retail partners across Texas. Contact us and we&apos;ll let you know when Outlaw Feed arrives near you &mdash; or arrange phone or delivery ordering.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-7 py-4 rounded-sm uppercase tracking-wider hover:bg-orange/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* Wholesale */}
        <section aria-labelledby="wholesale-heading" className="bg-background py-14 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 id="wholesale-heading" className="font-serif text-xl font-bold text-charcoal mb-2">
                Own a Feed Store or Farm Supply?
              </h2>
              <p className="font-sans text-sm text-muted-foreground max-w-md leading-relaxed">
                Outlaw Feed is available for wholesale. Contact us to discuss carrying Outlaw in your store and becoming a retail partner.
              </p>
            </div>
            <Link
              href="/contact?type=wholesale"
              className="shrink-0 inline-flex items-center justify-center gap-2 border-2 border-charcoal/20 text-charcoal font-bold text-sm px-7 py-3.5 rounded-sm uppercase tracking-wider hover:border-orange hover:text-orange transition-colors"
            >
              Wholesale Inquiry &rarr;
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
