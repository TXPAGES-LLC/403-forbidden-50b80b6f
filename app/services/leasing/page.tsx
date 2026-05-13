import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Leasing | Landlord Representation — Mesa CRE',
  description:
    'Mesa CRE provides landlord representation and commercial leasing services across Brownwood, Abilene, San Angelo, and DFW. We position, market, and close tenants for retail, office, and industrial assets.',
}

const process = [
  {
    step: '01',
    heading: 'Property Positioning',
    body: 'We analyze your asset, assess the competitive landscape, and define a leasing strategy — including pricing, target tenant profile, and property presentation.',
  },
  {
    step: '02',
    heading: 'Market Exposure',
    body: 'We put your property in front of the right people: active tenants, business owners, relocation consultants, and co-brokers working the market.',
  },
  {
    step: '03',
    heading: 'Tenant Qualification',
    body: 'We vet prospects on financials, use compatibility, and lease structure before you spend time on a deal that will not close.',
  },
  {
    step: '04',
    heading: 'Lease Negotiation & Closing',
    body: 'We negotiate terms that protect the long-term value of your asset — not just the quickest deal — and manage the process to a signed lease.',
  },
]

const propertyTypes = [
  { label: 'Retail', detail: 'Inline, end-cap, pad site, strip center, and anchored centers' },
  { label: 'Office', detail: 'Class A/B office, medical office, and professional suites' },
  { label: 'Industrial', detail: 'Warehouse, flex, manufacturing, and distribution space' },
  { label: 'Flex / Mixed-Use', detail: 'Hybrid warehouse-office and specialty-use properties' },
  { label: 'Healthcare', detail: 'Medical office, specialty clinic, and healthcare facilities' },
  { label: 'Net Lease', detail: 'Single-tenant NNN and multi-tenant investment properties' },
]

export default function LeasingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Services — Leasing"
          title="Your property, positioned to lease."
          subtitle="We represent landlords who want results — qualified tenants, favorable terms, and minimal vacancy. Not just activity reports."
          breadcrumbs={[{ label: 'Services', href: '/services/leasing' }, { label: 'Leasing' }]}
        />

        {/* What we do */}
        <section className="bg-background py-20 lg:py-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-4">
                  What We Do
                </p>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mb-8">
                  Full-cycle landlord representation.
                </h2>
                <div className="flex flex-col gap-5 text-muted-foreground text-base leading-relaxed">
                  <p>
                    When you list a property with Mesa CRE, you get more than sign placement and MLS exposure. We approach every leasing assignment as a positioning project — understanding what your asset offers, who the right tenants are, and how to reach them in markets where relationships matter as much as listings.
                  </p>
                  <p>
                    Brandon Harris handles your leasing assignment personally. You will not be handed off to junior staff halfway through a lease negotiation.
                  </p>
                  <p>
                    We operate in Brownwood, Abilene, San Angelo, and DFW — markets where deal flow depends on knowing who is looking, what they need, and when they are ready to move.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-10 text-[13px] font-semibold tracking-[0.1em] uppercase text-primary hover:text-accent transition-colors duration-200"
                >
                  Discuss Your Property
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Process */}
              <div className="flex flex-col gap-px bg-border">
                {process.map((p) => (
                  <div key={p.step} className="bg-background p-7 flex gap-6 items-start hover:bg-secondary transition-colors duration-200">
                    <span className="font-serif text-3xl font-bold text-border leading-none select-none shrink-0 mt-0.5">
                      {p.step}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-foreground mb-1.5">{p.heading}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Property types */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-4">
              Property Types
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mb-12">
              We lease across all commercial asset classes.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {propertyTypes.map((type) => (
                <div
                  key={type.label}
                  className="bg-secondary p-7 hover:bg-muted transition-colors duration-200"
                >
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">{type.label}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{type.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related services */}
        <section className="bg-[#1E3A2B] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-8">
              Related Services
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-primary-foreground/10">
              <Link
                href="/services/tenant-rep"
                className="bg-[#1E3A2B] p-8 hover:bg-[#162E21] transition-colors duration-200 group flex flex-col gap-2"
              >
                <h3 className="font-serif text-xl font-bold text-primary-foreground group-hover:text-accent transition-colors duration-200">
                  Tenant Representation
                </h3>
                <p className="text-primary-foreground/55 text-sm leading-relaxed">
                  We also represent tenants — helping businesses find and negotiate the right space.
                </p>
                <span className="inline-flex items-center gap-1.5 mt-3 text-[12px] font-semibold tracking-[0.1em] uppercase text-accent">
                  Learn More <ArrowRight size={12} />
                </span>
              </Link>
              <Link
                href="/services/investment-sales"
                className="bg-[#1E3A2B] p-8 hover:bg-[#162E21] transition-colors duration-200 group flex flex-col gap-2"
              >
                <h3 className="font-serif text-xl font-bold text-primary-foreground group-hover:text-accent transition-colors duration-200">
                  Investment Sales
                </h3>
                <p className="text-primary-foreground/55 text-sm leading-relaxed">
                  Looking to sell a leased asset or reposition your portfolio? We handle that too.
                </p>
                <span className="inline-flex items-center gap-1.5 mt-3 text-[12px] font-semibold tracking-[0.1em] uppercase text-accent">
                  Learn More <ArrowRight size={12} />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
