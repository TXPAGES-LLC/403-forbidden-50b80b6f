import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Dog Food Formulas | Outlaw Feed — Gold & Blue Formula Texas Dog Food',
  description:
    'Compare Outlaw Feed Gold and Blue formulas. Texas-made dog food with real meat first, no corn, no wheat, no soy. Built for working dogs, hunting dogs, and all life stages.',
  alternates: { canonical: 'https://www.outlawfeed.com/formulas' },
}

const formulas = [
  {
    slug: 'gold',
    name: 'Outlaw Gold Formula',
    tagline: 'Built for the Dog That Earns Its Keep',
    image:
      'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=75',
    imageAlt:
      'Outlaw Feed Gold Formula dog food bag — high-protein formula for working and hunting dogs',
    badge: 'Best Seller',
    stats: [
      { label: 'Crude Protein', value: '32% Min' },
      { label: 'Crude Fat', value: '18% Min' },
      { label: 'Crude Fiber', value: '4% Max' },
      { label: 'Moisture', value: '10% Max' },
      { label: 'Protein Source', value: 'Chicken & Pork Meal' },
      { label: 'Life Stage', value: 'Adult Maintenance' },
    ],
    bestFor: 'Active, Working & Hunting Dogs',
    accentClass: 'text-orange border-orange',
    badgeClass: 'bg-orange/10 text-orange',
  },
  {
    slug: 'blue',
    name: 'Outlaw Blue Formula',
    tagline: 'Complete Nutrition from Day One to Full Throttle',
    image:
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=75',
    imageAlt:
      'Outlaw Feed Blue Formula dog food bag — all life stages formula with beef and chicken',
    badge: 'All Life Stages',
    stats: [
      { label: 'Crude Protein', value: '30% Min' },
      { label: 'Crude Fat', value: '20% Min' },
      { label: 'Crude Fiber', value: '4% Max' },
      { label: 'Moisture', value: '10% Max' },
      { label: 'Protein Source', value: 'Beef & Chicken Meal' },
      { label: 'Life Stage', value: 'All Life Stages' },
    ],
    bestFor: 'Puppies, Adults & All Life Stages',
    accentClass: 'text-blue-500 border-blue-500',
    badgeClass: 'bg-blue-500/10 text-blue-500',
  },
]

const comparisonRows = [
  { label: 'Best For', gold: 'Working & Hunting Dogs', blue: 'Puppies & All Life Stages' },
  { label: 'Crude Protein', gold: '32% Min', blue: '30% Min' },
  { label: 'Crude Fat', gold: '18% Min', blue: '20% Min' },
  { label: 'Crude Fiber', gold: '4% Max', blue: '4% Max' },
  { label: 'Moisture', gold: '10% Max', blue: '10% Max' },
  { label: 'Life Stage', gold: 'Adult Maintenance', blue: 'All Life Stages' },
  { label: 'Protein Source', gold: 'Chicken & Pork Meal', blue: 'Beef & Chicken Meal' },
  { label: 'Bag Sizes', gold: '40 lb / 50 lb', blue: '40 lb / 50 lb' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Outlaw Feed Dog Food Formulas',
  description:
    'Compare Outlaw Gold and Blue dog food formulas — Texas-made, AAFCO-certified, no corn, no wheat, no soy.',
  url: 'https://www.outlawfeed.com/formulas',
}

export default function FormulasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main-content">
        {/* Page hero */}
        <section
          aria-labelledby="formulas-page-heading"
          className="bg-charcoal pt-32 pb-16 md:pb-20"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-sans text-xs font-bold tracking-[0.22em] uppercase text-orange mb-4">
              Our Formulas
            </p>
            <h1
              id="formulas-page-heading"
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-cream leading-tight text-balance"
            >
              Two Formulas. One Standard:{' '}
              <span className="text-orange">No Shortcuts.</span>
            </h1>
            <p className="mt-5 font-sans text-lg text-cream/70 max-w-2xl mx-auto leading-relaxed">
              Both Outlaw formulas are built around real, named meat sources and zero filler grains. No corn, no wheat, no soy &mdash; formulated for dogs that work and live life at full throttle.
            </p>
          </div>
        </section>

        {/* Formula cards */}
        <section
          aria-label="Formula options"
          className="bg-background py-16 md:py-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {formulas.map((f) => (
                <article
                  key={f.slug}
                  aria-label={f.name}
                  className={`bg-card border-2 ${f.accentClass} rounded-sm overflow-hidden flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300`}
                >
                  <div className="relative h-64 overflow-hidden bg-cream-dark">
                    <img
                      src={f.image}
                      alt={f.imageAlt}
                      width={800}
                      height={500}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    <span
                      className={`absolute top-4 left-4 font-sans text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm ${f.badgeClass}`}
                    >
                      {f.badge}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-7 gap-5">
                    <div>
                      <h2 className={`font-serif text-2xl font-bold leading-tight ${f.accentClass.split(' ')[0]}`}>
                        {f.name}
                      </h2>
                      <p className="font-sans text-sm text-muted-foreground mt-1 italic">{f.tagline}</p>
                      <p className={`font-sans text-xs font-bold tracking-widest uppercase mt-2 ${f.accentClass.split(' ')[0]}`}>
                        Best For: {f.bestFor}
                      </p>
                    </div>
                    <ul className="flex flex-col gap-0">
                      {f.stats.map((s) => (
                        <li
                          key={s.label}
                          className="flex items-center justify-between py-2.5 border-b border-border last:border-0"
                        >
                          <span className="font-sans text-sm text-foreground/70">{s.label}</span>
                          <span className="font-sans text-sm font-bold text-foreground">{s.value}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/formulas/${f.slug}`}
                      className={`mt-auto inline-flex items-center justify-center gap-2 border-2 ${f.accentClass} font-bold text-sm px-6 py-3.5 uppercase tracking-wider hover:bg-charcoal hover:text-cream transition-colors duration-200 rounded-sm`}
                    >
                      View Full Details &rarr;
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section
          aria-labelledby="comparison-heading"
          className="bg-cream-dark py-16 md:py-24"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="comparison-heading"
              className="font-serif text-3xl sm:text-4xl font-bold text-charcoal text-center mb-10 text-balance"
            >
              Formula Comparison
            </h2>
            <div className="overflow-x-auto rounded-sm border border-border">
              <table className="w-full text-sm font-sans border-collapse">
                <thead>
                  <tr className="bg-charcoal">
                    <th className="text-left py-4 px-5 text-cream/60 font-semibold uppercase tracking-wider text-xs w-1/3">
                      Spec
                    </th>
                    <th className="text-center py-4 px-5 text-orange font-bold uppercase tracking-wider text-xs">
                      Gold Formula
                    </th>
                    <th className="text-center py-4 px-5 text-blue-400 font-bold uppercase tracking-wider text-xs">
                      Blue Formula
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? 'bg-card' : 'bg-muted/40'}>
                      <td className="py-3.5 px-5 font-medium text-foreground/70">{row.label}</td>
                      <td className="py-3.5 px-5 text-center font-bold text-foreground">{row.gold}</td>
                      <td className="py-3.5 px-5 text-center font-bold text-foreground">{row.blue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-center font-sans text-sm text-muted-foreground">
              Not sure which formula fits your dog?{' '}
              <Link href="/feeding-guide" className="text-orange font-semibold hover:underline">
                See the Feeding Guide &rarr;
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
