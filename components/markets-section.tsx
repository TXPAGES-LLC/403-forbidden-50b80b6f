import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const markets = [
  {
    city: 'Brownwood',
    state: 'Texas',
    href: '/markets/brownwood',
    description:
      "Brownwood is Mesa's home base. We have deep roots here — relationships with major landlords, investors, and tenants going back years. If you need space in or around Brownwood, there is no one who knows this market better.",
    highlights: ['Seat of Brown County', 'Howard Payne University market', 'Strong light industrial & retail base', 'Growing healthcare corridor'],
  },
  {
    city: 'Abilene',
    state: 'Texas',
    href: '/markets/abilene',
    description:
      'A regional hub with diversified demand across office, retail, and industrial. Dyess Air Force Base, ACU, and Hendrick Health anchor steady demand. We understand Abilene\'s submarkets and track vacancy, absorption, and deal flow closely.',
    highlights: ['Dyess AFB-driven demand', 'Three university market', 'Active retail and net lease transactions', 'Industrial corridor growth'],
  },
  {
    city: 'San Angelo',
    state: 'Texas',
    href: '/markets/san-angelo',
    description:
      'San Angelo sits at the intersection of energy, agriculture, and education. Angelo State University and Shannon Medical anchor the economy, while growing logistics and retail needs create transaction opportunity for tenants and investors.',
    highlights: ['ASU and Shannon Medical anchor', 'Oil & gas services demand', 'Retail & pad site activity', 'Net lease investment opportunities'],
  },
  {
    city: 'DFW Metroplex',
    state: 'Texas',
    href: '/markets/dfw',
    description:
      "The DFW Metroplex adds scale to Mesa's capabilities. We work with businesses that operate in both West Texas and DFW — handling site selection, lease negotiations, and investment transactions across the region.",
    highlights: ['Tenant rep for multi-market operators', 'Investment sales & acquisitions', 'Strategic site selection', 'Suburban office & industrial focus'],
  },
]

export function MarketsSection() {
  return (
    <section id="markets" className="bg-[#1E3A2B] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-4">
            Our Markets
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-primary-foreground leading-tight text-balance max-w-2xl">
            We work the markets we know.
          </h2>
          <p className="text-primary-foreground/60 mt-5 text-base leading-relaxed max-w-xl">
            Mesa CRE operates in four distinct Texas markets. We do not dabble — we stay active in each one with ongoing deal flow, landlord relationships, and market intelligence.
          </p>
        </div>

        {/* Markets grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary-foreground/10">
          {markets.map((market) => (
            <div
              key={market.city}
              className="bg-[#1E3A2B] p-8 lg:p-10 group hover:bg-[#162E21] transition-colors duration-300 flex flex-col gap-6"
            >
              <div>
                <h3 className="font-serif text-2xl lg:text-3xl font-bold text-primary-foreground">
                  {market.city}
                </h3>
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mt-1">
                  {market.state}
                </p>
              </div>

              <p className="text-primary-foreground/65 text-sm leading-relaxed">
                {market.description}
              </p>

              <ul className="flex flex-col gap-2.5">
                {market.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 text-[13px] text-primary-foreground/75"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>

              <Link
                href={market.href}
                className="inline-flex items-center gap-1.5 mt-auto text-[12px] font-semibold tracking-[0.12em] uppercase text-accent hover:text-primary-foreground transition-colors duration-200"
              >
                View Market
                <ArrowRight size={12} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
