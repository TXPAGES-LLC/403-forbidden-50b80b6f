import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investment Sales | Commercial Acquisition & Disposition — Mesa CRE',
  description:
    'Mesa CRE handles commercial investment property sales across Brownwood, Abilene, San Angelo, and DFW. Buyer and seller representation, net lease, multi-tenant retail, office, industrial, and land.',
}

const buyerProcess = [
  {
    step: '01',
    heading: 'Investment Criteria',
    body: 'We begin by understanding your acquisition parameters — asset class, market, price range, cap rate targets, and hold strategy.',
  },
  {
    step: '02',
    heading: 'Market Sourcing',
    body: 'We identify on-market and off-market opportunities across our Texas markets, using landlord relationships and deal flow intelligence to surface options before they are widely shopped.',
  },
  {
    step: '03',
    heading: 'Underwriting Support',
    body: 'We help you evaluate the numbers — current income, lease expiration risk, market rent, and occupancy assumptions — so you buy with clarity.',
  },
  {
    step: '04',
    heading: 'Negotiation & Close',
    body: 'We negotiate purchase price, due diligence periods, and seller representations. We stay engaged through closing to protect your position.',
  },
]

const sellerProcess = [
  {
    step: '01',
    heading: 'Valuation & Positioning',
    body: 'We assess your property against current market comparables, income performance, and buyer demand — and set a price strategy designed to close, not just attract attention.',
  },
  {
    step: '02',
    heading: 'Targeted Marketing',
    body: 'We market to qualified buyers: institutional investors, private equity, 1031 buyers, and local investors active in our markets. We do not broadcast — we target.',
  },
  {
    step: '03',
    heading: 'Offer Management',
    body: 'We evaluate offers on price, terms, and buyer credibility. The highest offer is not always the best offer. We help you choose wisely.',
  },
  {
    step: '04',
    heading: 'Due Diligence & Closing',
    body: 'We manage the due diligence process, coordinate with title and attorneys, and keep the deal on track through the final signature.',
  },
]

const assetClasses = [
  { label: 'Net Lease', detail: 'Single-tenant NNN — national and regional credit tenants' },
  { label: 'Multi-Tenant Retail', detail: 'Strip centers, neighborhood centers, and grocery-anchored assets' },
  { label: 'Office', detail: 'Class A/B office and medical office investment properties' },
  { label: 'Industrial', detail: 'Warehouse, distribution, and flex investment assets' },
  { label: 'Land', detail: 'Commercial land for development, held for investment, or pad site sale' },
  { label: 'Mixed-Use', detail: 'Retail-office and specialty-use investment properties' },
]

export default function InvestmentSalesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Services — Investment Sales"
          title="Buy smart. Sell well. Execute clean."
          subtitle="We represent buyers and sellers of commercial investment property across our Texas markets — with market intelligence, deal discipline, and a track record of transactions closed."
          breadcrumbs={[{ label: 'Services', href: '/services/investment-sales' }, { label: 'Investment Sales' }]}
        />

        {/* Buyer & Seller side-by-side */}
        <section className="bg-background py-20 lg:py-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Buyer side */}
              <div>
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-4">
                  Buyer Representation
                </p>
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground leading-tight text-balance mb-8">
                  Acquire income-producing assets in markets we know deeply.
                </h2>
                <div className="flex flex-col gap-px bg-border">
                  {buyerProcess.map((p) => (
                    <div key={p.step} className="bg-background p-6 flex gap-5 items-start hover:bg-secondary transition-colors duration-200">
                      <span className="font-serif text-2xl font-bold text-border leading-none select-none shrink-0 mt-0.5">
                        {p.step}
                      </span>
                      <div>
                        <h3 className="font-serif text-base font-bold text-foreground mb-1">{p.heading}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Seller side */}
              <div>
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-4">
                  Seller Representation
                </p>
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground leading-tight text-balance mb-8">
                  Position your asset for the right buyer at the right time.
                </h2>
                <div className="flex flex-col gap-px bg-border">
                  {sellerProcess.map((p) => (
                    <div key={p.step} className="bg-background p-6 flex gap-5 items-start hover:bg-secondary transition-colors duration-200">
                      <span className="font-serif text-2xl font-bold text-border leading-none select-none shrink-0 mt-0.5">
                        {p.step}
                      </span>
                      <div>
                        <h3 className="font-serif text-base font-bold text-foreground mb-1">{p.heading}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4 items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-[13px] font-semibold tracking-[0.1em] uppercase px-7 py-4 hover:bg-[#9A6D25] transition-colors duration-200"
              >
                Discuss an Investment
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Asset classes */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-4">
              Asset Classes
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mb-12">
              We transact across the full investment spectrum.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {assetClasses.map((a) => (
                <div key={a.label} className="bg-secondary p-7 hover:bg-muted transition-colors duration-200">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">{a.label}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{a.detail}</p>
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
                  Need to stabilize occupancy before a sale? We handle landlord representation too.
                </p>
                <span className="inline-flex items-center gap-1.5 mt-3 text-[12px] font-semibold tracking-[0.1em] uppercase text-accent">
                  Learn More <ArrowRight size={12} />
                </span>
              </Link>
              <Link
                href="/services/tenant-rep"
                className="bg-[#1E3A2B] p-8 hover:bg-[#162E21] transition-colors duration-200 group flex flex-col gap-2"
              >
                <h3 className="font-serif text-xl font-bold text-primary-foreground group-hover:text-accent transition-colors duration-200">
                  Tenant Representation
                </h3>
                <p className="text-primary-foreground/55 text-sm leading-relaxed">
                  Acquiring a property and need to backfill or replace tenants? We represent tenants in your market.
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
