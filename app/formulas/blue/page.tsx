import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Outlaw Blue Formula | All Life Stages Dog Food — Texas-Made, No Corn No Soy',
  description:
    'Outlaw Blue Formula — 30% crude protein, beef & chicken meal first ingredient. No corn, no wheat, no soy. Texas-made, AAFCO-certified for puppies, adults, and all life stages.',
  alternates: { canonical: '/products/blue-formula' },
  robots: { index: false, follow: false },
}

const benefits = [
  'Beef & Chicken Meal as the #1 ingredient — named animal protein for complete amino acid profiles',
  '30% Crude Protein — supports growth, development, and active adult maintenance',
  '20% Crude Fat — elevated fat supports brain development in puppies and sustained energy in active adults',
  'No corn, wheat, or soy — removes the three most common dietary allergens from day one',
  'AAFCO Nutritional Adequacy — formulated for all life stages including growth and reproduction',
  'DHA from fish meal — supports brain development and cognitive function in puppies and young dogs',
]

const analysis = [
  { nutrient: 'Crude Protein', value: 'Min 30%' },
  { nutrient: 'Crude Fat', value: 'Min 20%' },
  { nutrient: 'Crude Fiber', value: 'Max 4%' },
  { nutrient: 'Moisture', value: 'Max 10%' },
  { nutrient: 'Calcium', value: 'Min 1.3%' },
  { nutrient: 'Phosphorus', value: 'Min 1.0%' },
]

const feedingChart = [
  { weight: '25 lbs', puppy: '2 cups', active: '1¾ cups', adult: '1¼ cups' },
  { weight: '50 lbs', puppy: '3¼ cups', active: '3 cups', adult: '2¼ cups' },
  { weight: '75 lbs', puppy: '4¼ cups', active: '4 cups', adult: '3 cups' },
  { weight: '100 lbs', puppy: '5¼ cups', active: '5 cups', adult: '3¾ cups' },
]

const reviews = [
  {
    name: 'Chad B.',
    location: 'Killeen, TX',
    breed: 'German Shepherd Owner',
    stars: 5,
    text: 'Bought a bag of the Blue Formula for my GSD pup. He loves it, and I love knowing exactly what\'s in it. No corn, no mystery ingredients — just real food for a real dog.',
  },
  {
    name: 'Laura S.',
    location: 'Georgetown, TX',
    breed: 'Multi-Dog Owner',
    stars: 5,
    text: 'I have dogs ranging from 8 weeks to 6 years old. Blue Formula works for all of them. Huge convenience to feed one food across the whole kennel.',
  },
  {
    name: 'Mike T.',
    location: 'Round Rock, TX',
    breed: 'Retriever Trainer',
    stars: 5,
    text: 'Started my retriever pups on Blue from weaning. Their development is on point and their coats are stunning. Won\'t use anything else for the young dogs.',
  },
]

const keyIngredients = [
  {
    name: 'Beef & Chicken Meal',
    reason:
      'Dual animal protein sources providing a complete amino acid profile for growth and muscle maintenance. Meal form is concentrated — more protein per pound than fresh meat.',
  },
  {
    name: 'Sweet Potato',
    reason:
      'A highly digestible carbohydrate with natural vitamins, minerals, and fiber. Provides clean energy without the inflammation response associated with corn or wheat.',
  },
  {
    name: 'Fish Meal',
    reason:
      'A natural source of DHA Omega-3 fatty acids — essential for brain and eye development in puppies, and joint and coat support in adults.',
  },
  {
    name: 'Dried Egg Product',
    reason:
      'One of the most bioavailable protein sources available, supporting muscle development and immune function at every life stage.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Outlaw Blue Formula Dog Food',
  description:
    '30% crude protein, beef & chicken meal first ingredient. No corn, no wheat, no soy. Texas-made, AAFCO-certified for all life stages.',
  brand: { '@type': 'Brand', name: 'Outlaw Feed' },
  url: 'https://www.outlawfeed.com/formulas/blue',
  image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStoreOnly', priceCurrency: 'USD' },
  review: reviews.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.name },
    reviewRating: { '@type': 'Rating', ratingValue: r.stars, bestRating: 5 },
    reviewBody: r.text,
  })),
  aggregateRating: { '@type': 'AggregateRating', ratingValue: 5, reviewCount: reviews.length },
}

export default function BlueFormulaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main-content">
        {/* Product hero */}
        <section aria-labelledby="blue-heading" className="bg-charcoal pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-sm overflow-hidden aspect-square max-w-lg mx-auto w-full">
              <img
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80"
                alt="Outlaw Feed Blue Formula dog food bag — all life stages premium dog food Texas"
                width={800}
                height={800}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-blue-500 text-white font-sans font-bold text-xs px-3 py-1.5 uppercase tracking-widest rounded-sm">
                All Life Stages
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="font-sans text-xs font-bold tracking-[0.22em] uppercase text-blue-400 mb-3">
                  Outlaw Feed &mdash; All Life Stages Formula
                </p>
                <h1 id="blue-heading" className="font-serif text-4xl sm:text-5xl font-bold text-cream leading-tight text-balance">
                  Blue Formula
                </h1>
                <p className="font-sans text-lg text-cream/60 mt-2 italic">
                  Complete Nutrition from Day One to Full Throttle
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: '30%', label: 'Crude Protein' },
                  { value: '20%', label: 'Crude Fat' },
                  { value: 'Beef & Chicken', label: 'First Protein' },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 border border-white/10 rounded-sm p-3 text-center">
                    <p className="font-serif text-xl font-bold text-blue-400 leading-none">{s.value}</p>
                    <p className="font-sans text-xs text-cream/50 mt-1 uppercase tracking-wide">{s.label}</p>
                  </div>
                ))}
              </div>
              <p className="font-sans text-xs text-cream/50 leading-relaxed border-l-2 border-blue-500/50 pl-3">
                AAFCO Nutritional Adequacy Statement: Outlaw Blue Formula is formulated to meet the nutritional levels established by the AAFCO Dog Food Nutrient Profiles for all life stages, including growth of large-size dogs (70 lbs or more as an adult). No corn. No wheat. No soy.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/find-a-store"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold text-sm px-7 py-4 rounded-sm uppercase tracking-wider hover:bg-blue-700 transition-colors"
                >
                  Find a Store
                </Link>
                <a
                  href="tel:+12547731231"
                  className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream font-bold text-sm px-7 py-4 rounded-sm uppercase tracking-wider hover:border-blue-400 hover:text-blue-400 transition-colors"
                >
                  Call to Order
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key benefits */}
        <section aria-labelledby="blue-benefits-heading" className="bg-background py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="blue-benefits-heading" className="font-serif text-3xl font-bold text-charcoal mb-8 text-balance">
              Key Benefits
            </h2>
            <ul className="flex flex-col gap-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 font-sans text-base text-foreground/80 leading-relaxed">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-0.5 text-blue-500" aria-hidden="true">
                    <path d="M3 9l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Guaranteed analysis */}
        <section aria-labelledby="blue-analysis-heading" className="bg-cream-dark py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="blue-analysis-heading" className="font-serif text-3xl font-bold text-charcoal mb-3 text-balance">
              Guaranteed Analysis
            </h2>
            <p className="font-sans text-sm text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              All life stages formulas must meet higher nutritional minimums than adult-only foods &mdash; especially for calcium and phosphorus ratios critical to large breed puppy development.
            </p>
            <div className="overflow-x-auto rounded-sm border border-border">
              <table className="w-full text-sm font-sans">
                <thead>
                  <tr className="bg-charcoal">
                    <th className="text-left py-3.5 px-5 text-cream/60 font-semibold uppercase tracking-wider text-xs">Nutrient</th>
                    <th className="text-right py-3.5 px-5 text-cream/60 font-semibold uppercase tracking-wider text-xs">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {analysis.map((row, i) => (
                    <tr key={row.nutrient} className={i % 2 === 0 ? 'bg-card' : 'bg-muted/40'}>
                      <td className="py-3 px-5 font-medium text-foreground/70">{row.nutrient}</td>
                      <td className="py-3 px-5 text-right font-bold text-foreground">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Key ingredients */}
        <section aria-labelledby="blue-ingredients-heading" className="bg-background py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="blue-ingredients-heading" className="font-serif text-3xl font-bold text-charcoal mb-3 text-balance">
              What&apos;s In Here and Why
            </h2>
            <p className="font-sans text-sm text-muted-foreground mb-8 leading-relaxed">
              Full ingredients list available on each bag. Below are the key ingredients and what they do at every life stage.
            </p>
            <div className="flex flex-col gap-5">
              {keyIngredients.map((ing) => (
                <div key={ing.name} className="border-l-4 border-blue-500 pl-5 py-1">
                  <h3 className="font-sans font-bold text-charcoal text-base">{ing.name}</h3>
                  <p className="font-sans text-sm text-muted-foreground mt-1 leading-relaxed">{ing.reason}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 font-sans text-sm text-muted-foreground">
              Learn how to read a dog food label:{' '}
              <Link href="/ingredients" className="text-blue-500 font-semibold hover:underline">
                Our Ingredient Guide &rarr;
              </Link>
            </p>
          </div>
        </section>

        {/* Feeding chart */}
        <section aria-labelledby="blue-feeding-heading" className="bg-cream-dark py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="blue-feeding-heading" className="font-serif text-3xl font-bold text-charcoal mb-3 text-balance">
              How Much to Feed
            </h2>
            <p className="font-sans text-sm text-muted-foreground mb-8 leading-relaxed">
              Puppies need more calories per pound of body weight than adults. Feed puppies up to 3x per day. Adults can be fed once or twice daily.
            </p>
            <div className="overflow-x-auto rounded-sm border border-border mb-6">
              <table className="w-full text-sm font-sans">
                <thead>
                  <tr className="bg-charcoal">
                    <th className="text-left py-3.5 px-4 text-cream/60 font-semibold uppercase tracking-wider text-xs">Dog Weight</th>
                    <th className="text-center py-3.5 px-4 text-blue-400 font-bold uppercase tracking-wider text-xs">Puppy</th>
                    <th className="text-center py-3.5 px-4 text-cream/60 font-semibold uppercase tracking-wider text-xs">Active Adult</th>
                    <th className="text-center py-3.5 px-4 text-cream/60 font-semibold uppercase tracking-wider text-xs">Maintenance Adult</th>
                  </tr>
                </thead>
                <tbody>
                  {feedingChart.map((row, i) => (
                    <tr key={row.weight} className={i % 2 === 0 ? 'bg-card' : 'bg-muted/40'}>
                      <td className="py-3 px-4 font-bold text-foreground">{row.weight}</td>
                      <td className="py-3 px-4 text-center font-bold text-blue-500">{row.puppy}</td>
                      <td className="py-3 px-4 text-center text-foreground/70">{row.active}</td>
                      <td className="py-3 px-4 text-center text-foreground/70">{row.adult}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-charcoal/5 border border-border rounded-sm p-5">
              <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                <strong className="text-foreground">Transitioning from another food?</strong> Switch gradually over 7&ndash;10 days: 25% Outlaw / 75% old food for days 1&ndash;3, then 50/50 for days 4&ndash;6, then 75% Outlaw for days 7&ndash;9, then 100% Outlaw.
              </p>
            </div>
          </div>
        </section>

        {/* Who this is for */}
        <section aria-labelledby="blue-who-heading" className="bg-background py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="blue-who-heading" className="font-serif text-3xl font-bold text-charcoal mb-6 text-balance">
              Who Blue Formula Is For
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Puppies of all breeds (including large breeds)',
                'Adult dogs at all activity levels',
                'Multi-dog households wanting one premium formula',
                'Working dogs needing high fat for sustained energy',
                'Dogs with sensitivities to corn, wheat, or soy',
                'Breeding females and nursing mothers',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-sans text-sm text-foreground/80 bg-muted/40 rounded-sm px-4 py-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-blue-500" aria-hidden="true">
                    <path d="M2 8l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Reviews */}
        <section aria-labelledby="blue-reviews-heading" className="bg-cream-dark py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="blue-reviews-heading" className="font-serif text-3xl font-bold text-charcoal mb-8 text-center">
              What Blue Formula Owners Say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {reviews.map((r) => (
                <blockquote key={r.name} className="bg-card border border-border rounded-sm p-6 flex flex-col gap-3">
                  <span className="flex gap-0.5" aria-label={`${r.stars} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500" aria-hidden="true">
                        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                      </svg>
                    ))}
                  </span>
                  <p className="font-sans text-sm text-foreground/80 leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
                  <footer className="border-t border-border pt-3">
                    <cite className="not-italic font-sans text-xs text-muted-foreground">
                      <strong className="text-foreground">{r.name}</strong> &mdash; {r.breed}, {r.location}
                    </cite>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Where to buy */}
        <section aria-labelledby="buy-blue-heading" className="bg-charcoal py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
            <h2 id="buy-blue-heading" className="font-serif text-3xl font-bold text-cream text-balance">
              Find Blue Formula Near You
            </h2>
            <p className="font-sans text-cream/65 text-base leading-relaxed max-w-xl">
              Available at feed stores and farm &amp; ranch retailers across Central Texas. Bell County delivery available &mdash; call to arrange.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/find-a-store"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold text-sm px-8 py-4 rounded-sm uppercase tracking-wider hover:bg-blue-700 transition-colors"
              >
                See All Locations
              </Link>
              <a
                href="tel:+12547731231"
                className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream font-bold text-sm px-8 py-4 rounded-sm uppercase tracking-wider hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                Call 254-773-1231
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
