import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const differentiators = [
  {
    heading: 'Market Depth',
    body: 'We are not a big-city firm covering West Texas as a footnote. Brownwood, Abilene, and San Angelo are our primary territories — and we track them deal by deal.',
  },
  {
    heading: 'One Advisor',
    body: 'Brandon Harris handles your transaction personally. No hand-offs to junior staff. You get a senior broker who is accountable from initial call to closing.',
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

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — narrative */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-4">
              About Mesa CRE
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground leading-tight text-balance mb-8">
              Built for West Texas. Wired for results.
            </h2>
            <div className="flex flex-col gap-5 text-muted-foreground text-base leading-relaxed">
              <p>
                Mesa Commercial Real Estate was founded with a clear purpose: give businesses and property owners in West Texas the same quality of commercial real estate representation they would find in any major metro — delivered by someone who actually lives and works in these markets.
              </p>
              <p>
                Brandon Harris brings decades of transactional experience across leasing, tenant representation, and investment sales. He has completed deals across retail, office, industrial, and land in Brownwood, Abilene, San Angelo, and DFW.
              </p>
              <p>
                The firm is deliberately structured. We are not trying to be the biggest CRE operation in Texas. We are trying to be the most valuable one in the markets we serve.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-10 text-[13px] font-semibold tracking-[0.1em] uppercase text-primary hover:text-accent transition-colors duration-200"
            >
              Start a Conversation
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right — differentiators */}
          <div className="flex flex-col gap-px bg-border">
            {differentiators.map((d) => (
              <div key={d.heading} className="bg-secondary p-7 hover:bg-muted transition-colors duration-200">
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{d.heading}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
