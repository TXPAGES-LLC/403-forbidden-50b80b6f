import Link from 'next/link'

const pillars = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: 'Real Ingredients',
    body: 'Every bag starts with real meat — chicken, beef, or pork — as the first ingredient. No mystery meals, no corn, no wheat, no soy. What you see on the label is what goes into the bag.',
    href: '/ingredients',
    linkLabel: 'See our full ingredients list',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
      </svg>
    ),
    title: 'Life Stage Formulas',
    body: 'From high-energy puppies to hard-working adult ranch dogs and hunting dogs, our Gold and Blue formulas are designed to meet the specific nutritional demands of every life stage.',
    href: '/formulas',
    linkLabel: 'Compare Gold vs Blue Formula',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'Texas Made',
    body: 'Outlaw Feed is manufactured right here in Texas. We support local agriculture, source regional ingredients where possible, and take pride in every bag that leaves our facility.',
    href: '/made-in-texas',
    linkLabel: 'Our Texas roots',
  },
]

export function WhyOutlaw() {
  return (
    <section
      id="why-outlaw"
      aria-labelledby="why-heading"
      className="bg-charcoal text-cream py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-orange font-sans text-xs font-bold tracking-[0.2em] uppercase mb-3">
              Why Outlaw
            </p>
            <h2
              id="why-heading"
              className="font-serif text-3xl sm:text-4xl font-bold text-cream text-balance"
            >
              The Outlaw Standard
            </h2>
          </div>
          <p className="font-sans text-cream/60 text-base leading-relaxed max-w-sm">
            Three non-negotiables that define every bag of Outlaw Feed — and why working dog owners across Texas choose us.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-charcoal p-8 md:p-10 flex flex-col gap-5"
            >
              <span className="text-orange">{pillar.icon}</span>
              <h3 className="font-serif text-xl font-bold text-cream">{pillar.title}</h3>
              <p className="font-sans text-cream/65 text-sm leading-relaxed">{pillar.body}</p>
              <Link
                href={pillar.href}
                className="inline-flex items-center gap-1.5 text-orange text-sm font-semibold hover:gap-2.5 transition-all duration-200 mt-auto"
                aria-label={pillar.linkLabel}
              >
                {pillar.linkLabel}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Brand manifesto — "The Outlaw Difference" */}
        <div className="mt-16 border-t border-white/10 pt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-orange font-sans text-xs font-bold tracking-[0.2em] uppercase mb-4">The Outlaw Difference</p>
            <blockquote className="font-serif text-xl sm:text-2xl text-cream leading-relaxed text-balance">
              &ldquo;Most dog food is made by corporations who&apos;ve never owned a working dog. They&apos;re in the ingredient-cost business. We&apos;re in the results business.&rdquo;
            </blockquote>
            <p className="font-sans text-cream/60 text-base leading-relaxed mt-5">
              Outlaw Feed was built around one idea: your dog&apos;s food should be good enough to explain. No mystery meals. No filler grains. No ingredient panel you need a chemistry degree to read. Just honest food, made in Texas, for dogs that earn their keep.
            </p>
            <Link
              href="/our-story"
              className="inline-flex items-center gap-1.5 text-orange font-semibold text-sm hover:gap-3 transition-all duration-200 mt-6"
            >
              Read Our Story
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 h-72">
            <div className="overflow-hidden rounded-sm row-span-2">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=70&auto=format&fit=crop"
                alt="Hunting bird dog running in a Texas field — powered by Outlaw Feed"
                width={600}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1611003229186-c26f4c3c0bfc?w=600&q=70&auto=format&fit=crop"
                alt="Real meat ingredients — the first ingredient in every Outlaw Feed formula"
                width={600}
                height={300}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&q=70&auto=format&fit=crop"
                alt="Ranch dog working on a Texas farm — fed Outlaw Feed no-corn dog food"
                width={600}
                height={300}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
