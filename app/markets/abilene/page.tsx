import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Abilene, TX Commercial Real Estate | Leasing, Tenant Rep & Sales — Mesa CRE',
  description:
    'Mesa CRE provides commercial leasing, tenant representation, and investment sales in Abilene, Texas. Dyess AFB, three universities, and growing retail and industrial demand make Abilene an active market.',
}

const highlights = [
  { label: 'Dyess Air Force Base', detail: 'A major military installation that anchors consistent demand for retail, services, and residential support uses.' },
  { label: 'Three-University Market', detail: 'Abilene Christian University, Hardin-Simmons, and McMurry create sustained local demand and workforce.' },
  { label: 'Hendrick Health System', detail: 'A regional healthcare anchor driving medical office and healthcare-adjacent tenant demand across Abilene.' },
  { label: 'Active Retail Market', detail: 'Abilene serves as the regional retail hub for a trade area of nearly 300,000 people.' },
  { label: 'Industrial Corridor', detail: 'Growing industrial and flex demand supported by distribution activity along I-20.' },
  { label: 'Net Lease Activity', detail: 'Active buyer and seller market for single-tenant and multi-tenant NNN investment properties.' },
]

const activeUses = [
  'Retail Leasing',
  'Medical Office',
  'Industrial & Flex',
  'Net Lease Investment',
  'Tenant Representation',
  'Office Leasing',
  'Land Sales',
  'Multi-Tenant Retail',
]

export default function AbileneePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Markets — Abilene, Texas"
          title="A regional hub with real deal velocity."
          subtitle="Abilene's diversified economy — military, healthcare, education, and retail — creates consistent commercial real estate demand across all asset classes. Mesa CRE tracks this market closely."
          dark
          breadcrumbs={[{ label: 'Markets', href: '/markets/abilene' }, { label: 'Abilene' }]}
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
                  Taylor County, TX
                </h2>
                <div className="flex flex-col gap-5 text-muted-foreground text-base leading-relaxed">
                  <p>
                    Abilene is one of the largest commercial real estate markets in West Texas, anchored by Dyess Air Force Base, three universities, and a major regional healthcare system. Its diversified economy creates demand across retail, office, industrial, and healthcare uses.
                  </p>
                  <p>
                    Mesa CRE is active in Abilene across all three service lines — leasing commercial properties, representing tenants in site selection and lease negotiations, and facilitating investment sales for buyers and sellers. We know the submarkets, the vacancy conditions, and the key landlords.
                  </p>
                  <p>
                    For businesses looking to enter or expand in Abilene, and for investors evaluating West Texas assets, Mesa CRE provides the market access and deal execution capability you need.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-10 text-[13px] font-semibold tracking-[0.1em] uppercase text-primary hover:text-accent transition-colors duration-200"
                >
                  Talk About Abilene
                  <ArrowRight size={14} />
                </Link>
              </div>

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
              Active in Abilene
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
                { city: 'Brownwood', href: '/markets/brownwood', desc: "Mesa CRE's home market with the deepest relationships and deal flow in Brown County." },
                { city: 'San Angelo', href: '/markets/san-angelo', desc: 'Energy, agriculture, and education converge with growing retail and investment opportunity.' },
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
