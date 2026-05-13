import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Leasing',
    subtitle: 'Landlord Representation',
    href: '/services/leasing',
    body: 'We represent property owners across office, retail, industrial, and flex assets. From positioning your property to closing qualified tenants, we handle the full leasing cycle — with market-specific knowledge others lack.',
    tags: ['Office', 'Retail', 'Industrial', 'Flex/Mixed-Use'],
  },
  {
    number: '02',
    title: 'Tenant Rep',
    subtitle: 'Tenant Representation',
    href: '/services/tenant-rep',
    body: "Your interests, not the landlord's. We identify the right space, negotiate favorable terms, and protect your business from costly mistakes — whether you're expanding, relocating, or opening your first location.",
    tags: ['Site Selection', 'Lease Negotiation', 'Renewals & Expansions'],
  },
  {
    number: '03',
    title: 'Investment Sales',
    subtitle: 'Acquisition & Disposition',
    href: '/services/investment-sales',
    body: "We connect buyers and sellers of commercial investment property across our core Texas markets. Whether you're acquiring income-producing assets or repositioning your portfolio, we deliver deal clarity and execution.",
    tags: ['Net Lease', 'Multi-Tenant Retail', 'Office & Industrial', 'Land'],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-4">
              What We Do
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Three service lines.<br />One advisor.
            </h2>
          </div>
          <p className="text-muted-foreground text-base leading-relaxed max-w-sm lg:text-right">
            We do not spread thin across every segment. We focus on leasing, tenant rep, and investment sales — and we do each one well.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border">
          {services.map((svc) => (
            <div
              key={svc.number}
              className="bg-background p-8 lg:p-10 flex flex-col gap-6 group hover:bg-secondary transition-colors duration-300"
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-5xl font-bold text-border group-hover:text-accent/30 transition-colors duration-300 leading-none select-none">
                  {svc.number}
                </span>
              </div>

              <div>
                <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-2">
                  {svc.subtitle}
                </p>
                <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground">
                  {svc.title}
                </h3>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {svc.body}
              </p>

              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold tracking-[0.12em] uppercase px-3 py-1 border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={svc.href}
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.12em] uppercase text-primary hover:text-accent transition-colors duration-200 mt-auto pt-2"
                aria-label={`Learn more about ${svc.title}`}
              >
                Learn More
                <ArrowUpRight size={13} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
