import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Mesa CRE | Brandon Harris, Commercial Real Estate Broker — Brownwood, TX',
  description:
    'Mesa Commercial Real Estate is led by Brandon Harris, a senior commercial real estate broker serving Brownwood, Abilene, San Angelo, and DFW. Leasing, tenant rep, and investment sales.',
}

const differentiators = [
  {
    heading: 'Market Depth',
    body: 'We are not a big-city firm covering West Texas as a footnote. Brownwood, Abilene, and San Angelo are our primary territories — and we track them deal by deal.',
  },
  {
    heading: 'One Advisor',
    body: 'Brad Harris handles your transaction personally. No hand-offs to junior staff. You get a senior broker who is accountable from initial call to closing.',
  },
  {
    heading: 'Outcomes Over Process',
    body: 'We measure success by transactions closed, terms negotiated, and clients who come back. Not by activity metrics or report generation.',
  },
  {
    heading: 'Relationship First',
    body: 'Commercial real estate in smaller Texas markets runs on trust built over time. We know the landlords, owners, and tenants in our markets — and they know us.',
  },
]

const services = [
  { label: 'Leasing', href: '/services/leasing' },
  { label: 'Tenant Representation', href: '/services/tenant-rep' },
  { label: 'Investment Sales', href: '/services/investment-sales' },
]

const markets = [
  { label: 'Brownwood', href: '/markets/brownwood' },
  { label: 'Abilene', href: '/markets/abilene' },
  { label: 'San Angelo', href: '/markets/san-angelo' },
  { label: 'DFW Metroplex', href: '/markets/dfw' },
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="About Mesa CRE"
          title="Built for West Texas. Wired for results."
          subtitle="Mesa Commercial Real Estate was founded with a clear purpose: give businesses and property owners in West Texas the same quality of commercial real estate representation they would find in any major metro."
          breadcrumbs={[{ label: 'About' }]}
        />

        {/* About Brad */}
        <section className="bg-background py-20 lg:py-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-4">
                  The Firm
                </p>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mb-8">
                  One broker. Focused markets. Direct access.
                </h2>
                <div className="flex flex-col gap-5 text-muted-foreground text-base leading-relaxed">
                  <p>
                    Mesa Commercial Real Estate is a focused commercial brokerage serving Brownwood, Abilene, San Angelo, and the DFW Metroplex. We handle leasing, tenant representation, and investment sales — and nothing else.
                  </p>
                  <p>
                    The firm was built around a deliberate thesis: smaller Texas markets are underserved by large multi-broker firms, and business owners and property investors deserve the same quality of representation they would receive in Dallas or Houston. Mesa CRE was founded to close that gap.
                  </p>
                  <p>
                    We are not trying to be the biggest commercial real estate firm in Texas. We are trying to be the most valuable one in the markets we serve.
                  </p>
                </div>
              </div>

              {/* Brad Harris */}
              <div className="bg-secondary p-8 lg:p-10">
                <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-2">
                  Principal Broker
                </p>
                <h3 className="font-serif text-3xl font-bold text-foreground mb-1">Brandon Harris</h3>
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-6">
                  Mesa Commercial Real Estate
                </p>
                <div className="flex flex-col gap-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Brandon Harris brings decades of transactional experience across leasing, tenant representation, and investment sales in West Texas commercial markets. He has completed deals across retail, office, industrial, and land in Brownwood, Abilene, San Angelo, and DFW.
                  </p>
                  <p>
                    Brandon is based in Brownwood, Texas — not a regional office of a larger firm. Every client he works with gets direct access: his personal cell, his direct email, and his undivided attention on their transaction.
                  </p>
                  <p>
                    He is known in these markets as someone who gets deals done, represents his clients' interests without compromise, and follows through on every commitment he makes.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-border flex flex-col gap-2">
                  <a
                    href="tel:2145771520"
                    className="text-[13px] font-medium text-foreground hover:text-accent transition-colors duration-200"
                  >
                    214-577-1520
                  </a>
                  <a
                    href="mailto:bharris@mesa-cre.com"
                    className="text-[13px] font-medium text-foreground hover:text-accent transition-colors duration-200"
                  >
                    bharris@mesa-cre.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="bg-secondary py-20 lg:py-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-4">
              Why Mesa CRE
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mb-12">
              What makes us different.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
              {differentiators.map((d) => (
                <div key={d.heading} className="bg-secondary p-8 hover:bg-muted transition-colors duration-200">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">{d.heading}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services and markets nav */}
        <section className="bg-[#1E3A2B] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-6">
                  Services
                </p>
                <ul className="flex flex-col gap-3">
                  {services.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.08em] uppercase text-primary-foreground/75 hover:text-accent transition-colors duration-200"
                      >
                        {s.label}
                        <ArrowRight size={12} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-6">
                  Markets
                </p>
                <ul className="flex flex-col gap-3">
                  {markets.map((m) => (
                    <li key={m.href}>
                      <Link
                        href={m.href}
                        className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.08em] uppercase text-primary-foreground/75 hover:text-accent transition-colors duration-200"
                      >
                        {m.label}
                        <ArrowRight size={12} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
