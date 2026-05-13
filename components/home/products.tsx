import Link from 'next/link'

const formulas = [
  {
    slug: 'gold',
    name: 'Outlaw Gold Formula',
    tagline: 'Premium Performance for Working & Hunting Dogs',
    proteinPercent: 32,
    fatPercent: 18,
    proteinSource: 'Chicken & Pork Meal',
    keyBenefits: ['High-energy performance blend', 'Omega-3 & 6 for coat health', 'Optimal muscle recovery', 'Life stages: adult & senior'],
    bagColor: '#B8860B',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&q=75&auto=format&fit=crop',
    imageAlt: 'Outlaw Feed Gold Formula 50lb dog food bag for working and hunting dogs',
    badge: 'Best Seller',
  },
  {
    slug: 'blue',
    name: 'Outlaw Blue Formula',
    tagline: 'High-Protein Puppy & Active Adult Blend',
    proteinPercent: 30,
    fatPercent: 20,
    proteinSource: 'Beef & Chicken Meal',
    keyBenefits: ['Ideal for puppies to active adults', 'Joint support with glucosamine', 'DHA for brain development', 'Life stages: all life stages'],
    bagColor: '#1e4080',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=75&auto=format&fit=crop',
    imageAlt: 'Outlaw Feed Blue Formula dog food bag for puppies and active adult dogs',
    badge: 'All Life Stages',
  },
]

export function Products() {
  return (
    <section
      id="formulas"
      aria-labelledby="formulas-heading"
      className="bg-background py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-orange font-sans text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Our Formulas
          </p>
          <h2
            id="formulas-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Built for Dogs That Work
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-base leading-relaxed max-w-lg mx-auto">
            Two purpose-built formulas with real meat as the first ingredient — no corn, no wheat, no soy, no compromises.
          </p>
        </div>

        {/* Formula cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {formulas.map((formula) => (
            <article
              key={formula.slug}
              aria-label={formula.name}
              className="group bg-card rounded-sm overflow-hidden border border-border hover:border-orange/50 transition-colors duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
                <img
                  src={formula.image}
                  alt={formula.imageAlt}
                  width={600}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-charcoal text-orange text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                  {formula.badge}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 md:p-8 gap-5">
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">{formula.name}</h3>
                  <p className="font-sans text-sm text-muted-foreground mt-1">{formula.tagline}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: `${formula.proteinPercent}%`, label: 'Crude Protein' },
                    { value: `${formula.fatPercent}%`, label: 'Crude Fat' },
                    { value: formula.proteinSource, label: 'Protein Source' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-muted rounded-sm p-3 text-center">
                      <p className="font-sans font-bold text-sm text-foreground leading-tight">{stat.value}</p>
                      <p className="font-sans text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <ul className="flex flex-col gap-1.5" aria-label={`Key benefits of ${formula.name}`}>
                  {formula.keyBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/80 font-sans">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5 text-orange" aria-hidden="true">
                        <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto pt-2">
                  <Link
                    href={`/formulas/${formula.slug}`}
                    className="inline-flex w-full items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-6 py-3.5 rounded-sm uppercase tracking-wider hover:bg-orange/90 transition-colors duration-200"
                    aria-label={`Learn more about ${formula.name}`}
                  >
                    View Full Formula Details
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom link */}
        <p className="text-center mt-10 font-sans text-sm text-muted-foreground">
          Not sure which formula is right for your dog?{' '}
          <Link href="/feeding-guide" className="text-orange font-semibold hover:underline">
            Use our Feeding Guide
          </Link>
        </p>
      </div>
    </section>
  )
}
