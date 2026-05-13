import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Outlaw Gold Formula | High-Protein Dog Food for Working & Hunting Dogs',
  description:
    'Outlaw Gold Formula — 32% crude protein, chicken & pork meal first ingredient. No corn, no wheat, no soy. Texas-made, AAFCO-certified dog food for active, working, and hunting dogs.',
  alternates: { canonical: 'https://www.outlawfeed.com/formulas/gold' },
}

const benefits = [
  'Chicken & Pork Meal as the #1 ingredient — real protein that fuels muscle recovery and endurance',
  '32% Crude Protein — supports active, working, and hunting dogs through long days in the field',
  '18% Crude Fat — the primary energy source for sustained endurance; critical for hunting and working dogs',
  'No corn, wheat, or soy — removes the three most common dietary allergens found in mainstream dog food',
  'AAFCO Nutritional Adequacy — formulated to meet standards for adult maintenance',
  'Omega-3 & Omega-6 fatty acids — supports coat health, joint comfort, and cognitive function',
]

const analysis = [
  { nutrient: 'Crude Protein', value: 'Min 32%' },
  { nutrient: 'Crude Fat', value: 'Min 18%' },
  { nutrient: 'Crude Fiber', value: 'Max 4%' },
  { nutrient: 'Moisture', value: 'Max 10%' },
  { nutrient: 'Calcium', value: 'Min 1.2%' },
  { nutrient: 'Phosphorus', value: 'Min 0.9%' },
]

const feedingChart = [
  { weight: '25 lbs', inactive: '1¼ cups', active: '1¾ cups', working: '2½ cups' },
  { weight: '50 lbs', inactive: '2¼ cups', active: '3 cups', working: '4¼ cups' },
  { weight: '75 lbs', inactive: '3 cups', active: '4 cups', working: '5½ cups' },
  { weight: '100 lbs', inactive: '3¾ cups', active: '5 cups', working: '6¾ cups' },
]

const reviews = [
  {
    name: 'Jake M.',
    location: 'Waco, TX',
    breed: 'GSP Owner',
    stars: 5,
    text: 'My German Shorthair has been on Outlaw Gold for two seasons now. Her coat is tighter, her stamina is better, and she\'s holding weight through a full day in the field.',
  },
  {
    name: 'Randy K.',
    location: 'Temple, TX',
    breed: 'Pointer & Setter Owner',
    stars: 5,
    text: 'Switched my whole kennel of five bird dogs to the Gold Formula. Every single one of them looks and performs better than they did on the big-box brands.',
  },
  {
    name: 'Darla W.',
    location: 'Belton, TX',
    breed: 'Ranch Dog Owner',
    stars: 5,
    text: 'Our two Australian Shepherds work cattle every day. Gold Formula keeps them powered up without any of the digestive issues they had on corn-based food.',
  },
]

const keyIngredients = [
  {
    name: 'Chicken & Pork Meal',
    reason:
      'A concentrated source of animal protein, providing the amino acids your dog needs for muscle development and recovery. Meal means the water is removed — pound for pound, more protein than fresh meat.',
  },
  {
    name: 'Millet',
    reason:
      'A digestible, non-inflammatory carbohydrate source that provides clean energy without the allergen load of corn or wheat.',
  },
  {
    name: 'Flaxseed',
    reason:
      'Rich in Omega-3 fatty acids that support skin, coat, joint health, and cognitive performance — critical for hunting dogs maintaining peak condition.',
  },
  {
    name: 'Dried Beet Pulp',
    reason:
      'A moderately fermentable fiber source that supports digestive health and consistent stool quality — especially important for dogs with demanding activity schedules.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Outlaw Gold Formula Dog Food',
  description:
    '32% crude protein, chicken & pork meal first ingredient. No corn, no wheat, no soy. Texas-made, AAFCO-certified for working and hunting dogs.',
  brand: { '@type': 'Brand', name: 'Outlaw Feed' },
  url: 'https://www.outlawfeed.com/formulas/gold',
  image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStoreOnly', priceCurrency: 'USD' },
  review: reviews.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.name },
    reviewRating: { '@type': 'Rating', ratingValue: r.stars, bestRating: 5 },
    reviewBody: r.text,
  })),
  aggregateRating: { '@type': 'AggregateRating', ratingValue: 5, reviewCount: reviews.length },
}

export default function GoldFormulaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main-content">
        {/* Product hero */}
        <section
          aria-labelledby="gold-heading"
          className="bg-charcoal pt-32 pb-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-sm overflow-hidden aspect-square max-w-lg mx-auto w-full">
              <img
                src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80"
                alt="Outlaw Feed Gold Formula 50lb dog food bag — premium working dog food Texas"
                width={800}
                height={800}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-orange text-charcoal font-sans font-bold text-xs px-3 py-1.5 uppercase tracking-widest rounded-sm">
                Best Seller
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="font-sans text-xs font-bold tracking-[0.22em] uppercase text-orange mb-3">
                  Outlaw Feed &mdash; Working Dog Formula
                </p>
                <h1
                  id="gold-heading"
                  className="font-serif text-4xl sm:text-5xl font-bold text-cream leading-tight text-balance"
                >
                  Gold Formula
                </h1>
                <p className="font-sans text-lg text-cream/60 mt-2 italic">
                  Built for the Dog That Earns Its Keep
                </p>
              </div>
              {/* Top stat callouts */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: '32%', label: 'Crude Protein' },
                  { value: '18%', label: 'Crude Fat' },
                  { value: 'Chicken & Pork', label: 'First Protein' },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 border border-white/10 rounded-sm p-3 text-center">
                    <p className="font-serif text-xl font-bold text-orange leading-none">{s.value}</p>
                    <p className="font-sans text-xs text-cream/50 mt-1 uppercase tracking-wide">{s.label}</p>
                  </div>
                ))}
              </div>
              {/* AAFCO + no fillers */}
              <p className="font-sans text-xs text-cream/50 leading-relaxed border-l-2 border-orange/50 pl-3">
                AAFCO Nutritional Adequacy Statement: Outlaw Gold Formula is formulated to meet the nutritional levels established by the AAFCO Dog Food Nutrient Profiles for maintenance of adult dogs. No corn. No wheat. No soy.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/find-a-store"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-7 py-4 rounded-sm uppercase tracking-wider hover:bg-orange/90 transition-colors"
                >
                  Find a Store
                </Link>
                <a
                  href="tel:+12547731231"
                  className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream font-bold text-sm px-7 py-4 rounded-sm uppercase tracking-wider hover:border-orange hover:text-orange transition-colors"
                >
                  Call to Order
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key benefits */}
        <section aria-labelledby="benefits-heading" className="bg-background py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="benefits-heading" className="font-serif text-3xl font-bold text-charcoal mb-8 text-balance">
              Key Benefits
            </h2>
            <ul className="flex flex-col gap-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 font-sans text-base text-foreground/80 leading-relaxed">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-0.5 text-orange" aria-hidden="true">
                    <path d="M3 9l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Guaranteed analysis */}
        <section aria-labelledby="analysis-heading" className="bg-cream-dark py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="analysis-heading" className="font-serif text-3xl font-bold text-charcoal mb-3 text-balance">
              Guaranteed Analysis
            </h2>
            <p className="font-sans text-sm text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Crude protein and fat are measured as minimums &mdash; meaning your dog gets at least this much, every bag, every time. For an active or working dog, the numbers that matter most are protein (muscle repair) and fat (sustained energy).
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
        <section aria-labelledby="ingredients-heading" className="bg-background py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="ingredients-heading" className="font-serif text-3xl font-bold text-charcoal mb-3 text-balance">
              What&apos;s In Here and Why
            </h2>
            <p className="font-sans text-sm text-muted-foreground mb-8 leading-relaxed">
              Full ingredients list available on each bag. Below are the key ingredients and why they matter for a working or hunting dog.
            </p>
            <div className="flex flex-col gap-5">
              {keyIngredients.map((ing) => (
                <div key={ing.name} className="border-l-4 border-orange pl-5 py-1">
                  <h3 className="font-sans font-bold text-charcoal text-base">{ing.name}</h3>
                  <p className="font-sans text-sm text-muted-foreground mt-1 leading-relaxed">{ing.reason}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 font-sans text-sm text-muted-foreground">
              Want to understand dog food labels?{' '}
              <Link href="/ingredients" className="text-orange font-semibold hover:underline">
                Read our ingredient guide &rarr;
              </Link>
            </p>
          </div>
        </section>

        {/* Feeding guide */}
        <section aria-labelledby="feeding-heading" className="bg-cream-dark py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="feeding-heading" className="font-serif text-3xl font-bold text-charcoal mb-3 text-balance">
              How Much to Feed
            </h2>
            <p className="font-sans text-sm text-muted-foreground mb-8 leading-relaxed">
              Daily feeding amounts are guidelines — adjust based on your dog&apos;s body condition, age, and environment. Working and hunting dogs in season may need 25&ndash;50% more than the &ldquo;active&rdquo; column.
            </p>
            <div className="overflow-x-auto rounded-sm border border-border mb-6">
              <table className="w-full text-sm font-sans">
                <thead>
                  <tr className="bg-charcoal">
                    <th className="text-left py-3.5 px-4 text-cream/60 font-semibold uppercase tracking-wider text-xs">Dog Weight</th>
                    <th className="text-center py-3.5 px-4 text-cream/60 font-semibold uppercase tracking-wider text-xs">Inactive</th>
                    <th className="text-center py-3.5 px-4 text-cream/60 font-semibold uppercase tracking-wider text-xs">Active</th>
                    <th className="text-center py-3.5 px-4 text-orange font-bold uppercase tracking-wider text-xs">Working / Hunting</th>
                  </tr>
                </thead>
                <tbody>
                  {feedingChart.map((row, i) => (
                    <tr key={row.weight} className={i % 2 === 0 ? 'bg-card' : 'bg-muted/40'}>
                      <td className="py-3 px-4 font-bold text-foreground">{row.weight}</td>
                      <td className="py-3 px-4 text-center text-foreground/70">{row.inactive}</td>
                      <td className="py-3 px-4 text-center text-foreground/70">{row.active}</td>
                      <td className="py-3 px-4 text-center font-bold text-orange">{row.working}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-charcoal/5 border border-border rounded-sm p-5">
              <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                <strong className="text-foreground">Transitioning from another food?</strong> Switch gradually over 7&ndash;10 days: 25% Outlaw / 75% old food for days 1&ndash;3, then 50/50 for days 4&ndash;6, then 75% Outlaw for days 7&ndash;9, then 100% Outlaw. This lets your dog&apos;s digestive system adjust and lets you see the benefits clearly.
              </p>
            </div>
          </div>
        </section>

        {/* Who this is for */}
        <section aria-labelledby="who-heading" className="bg-background py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="who-heading" className="font-serif text-3xl font-bold text-charcoal mb-6 text-balance">
              Who Gold Formula Is For
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Hunting dogs (bird dogs, retrievers, hounds)',
                'Ranch and working dogs',
                'High-energy adult dogs',
                'Dogs with sensitivities to corn, wheat, or soy',
                'Dogs in season requiring extra calories',
                'Any dog whose owner reads the label',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-sans text-sm text-foreground/80 bg-muted/40 rounded-sm px-4 py-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-orange" aria-hidden="true">
                    <path d="M2 8l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-sans text-sm text-muted-foreground">
              Not sure which formula is right?{' '}
              <Link href="/feeding-guide" className="text-orange font-semibold hover:underline">
                See the Feeding Guide &rarr;
              </Link>
            </p>
          </div>
        </section>

        {/* Reviews */}
        <section aria-labelledby="gold-reviews-heading" className="bg-cream-dark py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="gold-reviews-heading" className="font-serif text-3xl font-bold text-charcoal mb-8 text-center">
              What Gold Formula Owners Say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {reviews.map((r) => (
                <blockquote key={r.name} className="bg-card border border-border rounded-sm p-6 flex flex-col gap-3">
                  <span className="flex gap-0.5" aria-label={`${r.stars} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-orange" aria-hidden="true">
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
        <section aria-labelledby="buy-gold-heading" className="bg-charcoal py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
            <h2 id="buy-gold-heading" className="font-serif text-3xl font-bold text-cream text-balance">
              Find Gold Formula Near You
            </h2>
            <p className="font-sans text-cream/65 text-base leading-relaxed max-w-xl">
              Available at feed stores and farm &amp; ranch retailers across Central Texas. Bell County delivery available &mdash; call to arrange.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/find-a-store"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-8 py-4 rounded-sm uppercase tracking-wider hover:bg-orange/90 transition-colors"
              >
                See All Locations
              </Link>
              <a
                href="tel:+12547731231"
                className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream font-bold text-sm px-8 py-4 rounded-sm uppercase tracking-wider hover:border-orange hover:text-orange transition-colors"
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
