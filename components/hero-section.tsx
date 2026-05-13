import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end bg-[#1E3A2B] overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
        }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1E3A2B]/75" aria-hidden="true" />
      {/* Subtle texture band at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#1A1916]/60 to-transparent" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-36 lg:pb-28 w-full">
        {/* Eyebrow */}
        <p className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-accent mb-6">
          Leasing &nbsp;&middot;&nbsp; Tenant Representation &nbsp;&middot;&nbsp; Sales
        </p>

        {/* H1 */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.08] text-balance max-w-4xl mb-8">
          Smart commercial moves across&nbsp;West Texas and&nbsp;DFW.
        </h1>

        <p className="font-sans text-base lg:text-lg text-primary-foreground/70 leading-relaxed max-w-2xl mb-12">
          Mesa CRE works with businesses, investors, and landlords to lease, buy, sell, and reposition commercial property in Brownwood, Abilene, San Angelo, and the DFW Metroplex. We know these markets — and we work them hard.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <Link
            href="/services/leasing"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-[13px] font-semibold tracking-[0.1em] uppercase px-7 py-4 hover:bg-[#9A6D25] transition-colors duration-200"
          >
            Our Services
            <ArrowRight size={15} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground text-[13px] font-semibold tracking-[0.1em] uppercase px-7 py-4 hover:border-primary-foreground/70 hover:bg-primary-foreground/5 transition-colors duration-200"
          >
            Talk to Brandon
          </Link>
        </div>

        {/* Stat bar */}
        <div className="mt-16 lg:mt-20 pt-8 border-t border-primary-foreground/15 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
          {[
            { value: '4', label: 'Active Markets' },
            { value: '20+', label: 'Years of Experience' },
            { value: '3', label: 'Service Lines' },
            { value: '1', label: 'Point of Contact' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl lg:text-4xl font-bold text-accent">{stat.value}</p>
              <p className="text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-primary-foreground/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
