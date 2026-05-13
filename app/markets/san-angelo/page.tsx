import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'San Angelo, TX Commercial Real Estate | Leasing, Tenant Rep & Sales — Mesa CRE',
  description:
    'Mesa CRE provides commercial real estate services in San Angelo, Texas — leasing, tenant representation, and investment sales across retail, office, industrial, and healthcare property types.',
}

const highlights = [
  { label: 'Angelo State University', detail: 'ASU anchors a stable education-driven demand profile and supports retail, services, and housing activity.' },
  { label: 'Shannon Medical Center', detail: 'San Angelo\'s healthcare anchor drives medical office demand and healthcare-adjacent commercial uses.' },
  { label: 'Oil & Gas Services', detail: 'Permian Basin proximity sustains demand for industrial, flex, and service-sector commercial space.' },
  { label: 'Retail & Pad Sites', detail: 'Active retail market serving a regional trade area, with demand for both national and local-concept tenants.' },
  { label: 'Net Lease Investment', detail: 'Strong cap rate environment relative to major metros, with active buyer and seller activity.' },
  { label: 'Logistics & Distribution', detail: 'Growing demand for logistics and distribution space tied to energy and agricultural sectors.' },
]

const activeUses = [
  'Retail Leasing',
  'Medical Office',
  'Industrial & Flex',
  'Net Lease Investment',
  'Tenant Representation',
  'Office Leasing',
  'Pad Site Sales',
  'Land',
]

export default function SanAngeloPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Markets — San Angelo, Texas"
          title="Energy, education, and growing transaction activity."
          subtitle="San Angelo sits at the crossroads of oil and gas, agriculture, and higher education — creating a commercial market with steady demand, favorable yields, and real opportunity for businesses and investors."
          dark
          breadcrumbs={[{ label: 'Markets', href: '/markets/san-angelo' }, { label: 'San Angelo' }]}
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
                  Tom Green County, TX
                </h2>
                <div className="flex flex-col gap-5 text-muted-foreground text-base leading-relaxed">
                  <p>
                    San Angelo is the commercial center of the Concho Valley, serving a broad regional trade area that extends across Tom Green, Concho, Irion, and surrounding counties. Its economy is anchored by energy services, agricultural trade, healthcare, and Angelo State University.
                  </p>
                  <p>
                    Mesa CRE is active in San Angelo across leasing, tenant representation, and investment sales. We track vacancy, deal flow, and market conditions closely — and we have the relationships with local landlords and investors to move quickly on good opportunities.
                  </p>
                  <p>
                    For businesses evaluating a San Angelo location, or investors looking at West Texas net lease or multi-tenant retail assets, this is a market worth understanding — and Mesa CRE is the firm to help you understand it.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-10 text-[13px] font-semibold tracking-[0.1em] uppercase text-primary hover:text-accent transition-colors duration-200"
                >
                  Talk About San Angelo
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
              Active in San Angelo
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
                { city: 'Abilene', href: '/markets/abilene', desc: 'Regional hub with diversified demand across office, retail, and industrial.' },
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
