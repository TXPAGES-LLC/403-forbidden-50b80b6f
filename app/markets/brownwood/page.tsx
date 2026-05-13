import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brownwood, TX Commercial Real Estate | Leasing, Tenant Rep & Sales — Mesa CRE',
  description:
    'Mesa CRE is based in Brownwood, Texas. We provide commercial leasing, tenant representation, and investment sales in Brown County with deep market knowledge and active deal flow.',
}

const highlights = [
  { label: 'County Seat', detail: 'Seat of Brown County — the regional hub for commerce, healthcare, and education in Central Texas.' },
  { label: 'Howard Payne University', detail: 'HPU anchors consistent retail and service demand in the immediate trade area.' },
  { label: 'Healthcare Corridor', detail: 'Growing medical office and healthcare services demand driven by regional health system expansion.' },
  { label: 'Light Industrial Base', detail: 'Strong fundamentals for industrial and flex properties serving light manufacturing and distribution.' },
  { label: 'Retail Activity', detail: 'Active retail leasing market with demand from both regional and local-concept tenants.' },
  { label: 'Investment Opportunity', detail: 'NNN and multi-tenant retail assets with favorable yield profiles relative to larger markets.' },
]

const activeUses = [
  'Retail Leasing',
  'Medical Office',
  'Light Industrial',
  'Net Lease Investment',
  'Pad Site Sales',
  'Office Leasing',
  'Land Sales',
  'Tenant Representation',
]

export default function BrownwoodPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Markets — Brownwood, Texas"
          title="Our home market. Our deepest relationships."
          subtitle="Brownwood is where Mesa CRE is rooted. We have more relationships, more deal flow, and more market intelligence here than any other firm operating in Brown County."
          dark
          breadcrumbs={[{ label: 'Markets', href: '/markets/brownwood' }, { label: 'Brownwood' }]}
        />

        {/* Market overview */}
        <section className="bg-background py-20 lg:py-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-4">
                  Market Overview
                </p>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mb-8">
                  Brown County, TX
                </h2>
                <div className="flex flex-col gap-5 text-muted-foreground text-base leading-relaxed">
                  <p>
                    Brownwood is the commercial center of Brown County and the broader Central Texas region stretching between Abilene, San Angelo, and the Hill Country. Its economy is driven by healthcare, education, retail trade, and light industrial activity.
                  </p>
                  <p>
                    Brandon Harris has been active in the Brownwood market for decades. The landlords, business owners, and investors in this market know Mesa CRE — and that familiarity translates into faster deal flow, better information, and more successful outcomes for our clients.
                  </p>
                  <p>
                    Whether you are looking to lease space for your business, find a tenant for your commercial building, or acquire an income-producing property, Brownwood is a market we work every week.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-10 text-[13px] font-semibold tracking-[0.1em] uppercase text-primary hover:text-accent transition-colors duration-200"
                >
                  Talk About Brownwood
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Market highlights */}
              <div className="flex flex-col gap-px bg-border">
                {highlights.map((h) => (
                  <div key={h.label} className="bg-background p-6 hover:bg-secondary transition-colors duration-200">
                    <h3 className="font-serif text-base font-bold text-foreground mb-1">{h.label}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{h.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Active uses */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-4">
              Active in Brownwood
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground text-balance mb-10">
              We are transacting across all major use categories.
            </h2>
            <div className="flex flex-wrap gap-3">
              {activeUses.map((use) => (
                <span
                  key={use}
                  className="text-[12px] font-semibold tracking-[0.12em] uppercase px-4 py-2.5 border border-border text-foreground bg-background"
                >
                  {use}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Other markets */}
        <section className="bg-[#1E3A2B] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-8">
              Other Markets
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-primary-foreground/10">
              {[
                { city: 'Abilene', href: '/markets/abilene', desc: 'Regional hub with diversified demand across office, retail, and industrial.' },
                { city: 'San Angelo', href: '/markets/san-angelo', desc: 'Intersection of energy, agriculture, and education with growing transaction activity.' },
                { city: 'DFW Metroplex', href: '/markets/dfw', desc: 'Tenant rep, investment sales, and site selection across the Metroplex.' },
              ].map((m) => (
                <Link
                  key={m.city}
                  href={m.href}
                  className="bg-[#1E3A2B] p-8 hover:bg-[#162E21] transition-colors duration-200 group flex flex-col gap-2"
                >
                  <h3 className="font-serif text-xl font-bold text-primary-foreground group-hover:text-accent transition-colors duration-200">
                    {m.city}
                  </h3>
                  <p className="text-primary-foreground/55 text-sm leading-relaxed">{m.desc}</p>
                  <span className="inline-flex items-center gap-1.5 mt-3 text-[12px] font-semibold tracking-[0.1em] uppercase text-accent">
                    View Market <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
