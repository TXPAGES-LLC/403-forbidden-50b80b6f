import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tenant Representation | Space Search & Lease Negotiation — Mesa CRE',
  description:
    'Mesa CRE represents business tenants in Brownwood, Abilene, San Angelo, and DFW. Site selection, lease negotiation, renewals, and expansions — with one advisor working in your interest.',
}

const steps = [
  {
    step: '01',
    heading: 'Needs Assessment',
    body: 'We start with your business requirements — space size, location, use type, lease term, and timeline. We also factor in where you are going, not just where you are now.',
  },
  {
    step: '02',
    heading: 'Market Search & Site Selection',
    body: 'We canvas on- and off-market options in our core markets. We know what is available, what is coming available, and what landlords are flexible on before we walk through a single door.',
  },
  {
    step: '03',
    heading: 'Proposal & Counterproposal',
    body: 'We prepare and submit your LOI, evaluate landlord counteroffers, and push back where the terms do not favor your business — rent abatement, TI allowance, termination rights, co-tenancy.',
  },
  {
    step: '04',
    heading: 'Lease Review & Execution',
    body: 'We walk through the lease with you before you sign. We flag provisions that could cost you later — personal guarantees, maintenance responsibilities, exclusives, and assignment clauses.',
  },
]

const useCases = [
  {
    heading: 'New Location',
    body: 'Opening your first Texas location or expanding into a new market? We handle site selection from scratch — understanding trade area dynamics, traffic patterns, and landlord quality.',
  },
  {
    heading: 'Lease Renewal',
    body: "Your lease is expiring. That is your best negotiating leverage — and most tenants leave it on the table. We help you use it. Whether you're staying or moving, we negotiate from a position of strength.",
  },
  {
    heading: 'Expansion',
    body: 'Growing from one location to several across West Texas or DFW? We coordinate the search, standardize your lease terms where possible, and compress your transaction timeline.',
  },
  {
    heading: 'Relocation',
    body: 'Outgrowing your space, or in the wrong location? We identify alternatives, help you understand early termination exposure, and overlap your search with your existing timeline.',
  },
]

export default function TenantRepPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Services — Tenant Representation"
          title="Your interests. Your terms. Your advisor."
          subtitle="Most tenants negotiate their lease alone, against a landlord who does this every day. We change that equation — representing businesses in every phase of the leasing process."
          breadcrumbs={[{ label: 'Services', href: '/services/tenant-rep' }, { label: 'Tenant Representation' }]}
        />

        {/* Why it matters */}
        <section className="bg-background py-20 lg:py-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-4">
                  Why It Matters
                </p>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mb-8">
                  The landlord has a broker. You should too.
                </h2>
                <div className="flex flex-col gap-5 text-muted-foreground text-base leading-relaxed">
                  <p>
                    Commercial leases are long, legally binding, and full of landlord-favorable language most tenants do not read carefully enough. Rent abatement, tenant improvement allowances, early termination provisions, personal guarantees — these are negotiable. But only if you know what to ask for, and when.
                  </p>
                  <p>
                    Mesa CRE represents tenants exclusively on tenant rep assignments. We do not represent the landlord on the same deal. Our fee is typically paid by the landlord — meaning our advocacy costs you nothing out of pocket.
                  </p>
                  <p>
                    We work in Brownwood, Abilene, San Angelo, and DFW — markets where the landlord landscape is known to us and where we have standing relationships that benefit our clients.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-10 text-[13px] font-semibold tracking-[0.1em] uppercase text-primary hover:text-accent transition-colors duration-200"
                >
                  Start Your Space Search
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Process */}
              <div className="flex flex-col gap-px bg-border">
                {steps.map((s) => (
                  <div key={s.step} className="bg-background p-7 flex gap-6 items-start hover:bg-secondary transition-colors duration-200">
                    <span className="font-serif text-3xl font-bold text-border leading-none select-none shrink-0 mt-0.5">
                      {s.step}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-foreground mb-1.5">{s.heading}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-4">
              When We Work Together
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mb-12">
              Every stage of your leasing lifecycle.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
              {useCases.map((u) => (
                <div key={u.heading} className="bg-secondary p-8 hover:bg-muted transition-colors duration-200">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">{u.heading}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{u.body}</p>
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
                href="/services/leasing"
                className="bg-[#1E3A2B] p-8 hover:bg-[#162E21] transition-colors duration-200 group flex flex-col gap-2"
              >
                <h3 className="font-serif text-xl font-bold text-primary-foreground group-hover:text-accent transition-colors duration-200">
                  Leasing
                </h3>
                <p className="text-primary-foreground/55 text-sm leading-relaxed">
                  We also represent landlords — positioning and leasing commercial assets.
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
                  Own commercial property and considering a sale? We handle acquisition and disposition.
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
