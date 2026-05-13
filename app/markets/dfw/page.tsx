import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DFW Metroplex Commercial Real Estate | Tenant Rep & Investment Sales — Mesa CRE',
  description:
    'Mesa CRE serves businesses and investors operating across Dallas-Fort Worth. Tenant representation, investment sales, and site selection for companies with DFW and West Texas footprints.',
}

const capabilities = [
  { label: 'Tenant Representation', detail: 'We represent businesses searching for space across the DFW Metroplex — from suburban office and retail to industrial and flex.' },
  { label: 'Investment Sales', detail: 'Buyers and sellers of commercial investment property in DFW, with particular focus on suburban assets and net lease transactions.' },
  { label: 'Site Selection', detail: 'Multi-market site selection for businesses that operate in both DFW and West Texas — coordinating lease strategy across geographies.' },
  { label: 'Multi-Market Coordination', detail: 'We are uniquely positioned to serve clients who have presence in both DFW and West Texas markets — one advisor managing both theaters.' },
]

const submarkets = [
  'Fort Worth & Mid-Cities',
  'North Dallas / Frisco / McKinney',
  'Dallas Suburbs',
  'Arlington & Mansfield',
  'Irving & Las Colinas',
  'Denton & Sherman',
]

export default function DFWPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Markets — DFW Metroplex"
          title="DFW scale. West Texas roots."
          subtitle="For businesses and investors with a DFW footprint, Mesa CRE provides tenant representation, investment sales, and site selection — with the added advantage of deep coverage across West Texas markets."
          dark
          breadcrumbs={[{ label: 'Markets', href: '/markets/dfw' }, { label: 'DFW Metroplex' }]}
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
                  Dallas-Fort Worth, TX
                </h2>
                <div className="flex flex-col gap-5 text-muted-foreground text-base leading-relaxed">
                  <p>
                    The DFW Metroplex is one of the largest and most active commercial real estate markets in the United States. Mesa CRE operates here strategically — not trying to compete with large multi-broker DFW firms, but to serve clients who need a capable, accountable single advisor with reach across both DFW and West Texas.
                  </p>
                  <p>
                    We focus on tenant representation for businesses relocating or expanding into DFW, investment sales for clients repositioning portfolio assets, and multi-market site selection for regional operators who need coordinated execution.
                  </p>
                  <p>
                    If your business has presence in both DFW and West Texas, Mesa CRE is the only firm that covers both geographies with the same level of care and market knowledge.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-10 text-[13px] font-semibold tracking-[0.1em] uppercase text-primary hover:text-accent transition-colors duration-200"
                >
                  Talk About DFW
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="flex flex-col gap-px bg-border">
                {capabilities.map((c) => (
                  <div key={c.label} className="bg-background p-7 hover:bg-secondary transition-colors duration-200">
                    <h3 className="font-serif text-base font-bold text-foreground mb-1.5">{c.label}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{c.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Submarkets */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-4">
              DFW Submarkets
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground text-balance mb-10">
              We cover the Metroplex — with focus on suburban and mid-market assets.
            </h2>
            <div className="flex flex-wrap gap-3">
              {submarkets.map((sub) => (
                <span
                  key={sub}
                  className="text-[12px] font-semibold tracking-[0.12em] uppercase px-4 py-2.5 border border-border text-foreground bg-background"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Other markets */}
        <section className="bg-[#1E3A2B] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-8">
              West Texas Markets
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-primary-foreground/10">
              {[
                { city: 'Brownwood', href: '/markets/brownwood', desc: "Mesa CRE's home market with the deepest relationships and deal flow in Brown County." },
                { city: 'Abilene', href: '/markets/abilene', desc: 'Regional hub with diversified demand across office, retail, and industrial.' },
                { city: 'San Angelo', href: '/markets/san-angelo', desc: 'Energy, agriculture, and education converge with growing transaction activity.' },
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
