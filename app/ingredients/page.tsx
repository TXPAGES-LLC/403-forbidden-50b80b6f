import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Dog Food Ingredients | Outlaw Feed — No Corn, No Wheat, No Soy Texas Dog Food',
  description:
    'Outlaw Feed\'s ingredient philosophy explained. Learn why we skip corn, wheat, and soy, what we use instead, and how to read a dog food label to spot the difference between real nutrition and filler.',
  alternates: { canonical: 'https://www.outlawfeed.com/ingredients' },
}

const ingredientTable = [
  { use: 'Named meat sources (chicken, beef, pork meal)', skip: 'Generic "animal meal" or "by-products"', why: 'You know exactly what your dog is eating' },
  { use: 'Digestible carbohydrates (millet, sweet potato)', skip: 'Corn, wheat, soy', why: 'Reduced allergen load and cleaner energy' },
  { use: 'Natural preservatives (mixed tocopherols)', skip: 'Artificial colors, flavors, BHA/BHT', why: 'Nothing your dog doesn\'t need' },
  { use: 'Omega-3 fatty acids (flaxseed, fish meal)', skip: 'Cheap filler fats', why: 'Supports coat, joints, and cognitive health' },
]

const labelSections = [
  {
    heading: 'The Ingredients List: First Ingredient = Most Important',
    body: 'Dog food ingredients are listed by weight before cooking, in descending order. The first ingredient is present in the largest quantity. A food that lists "chicken meal" first contains more chicken meal than anything else. A food that lists "corn" first is primarily corn — regardless of what the marketing on the front of the bag says. Always read the back.',
  },
  {
    heading: 'Crude Protein: What It Is and What It Isn\'t',
    body: 'The guaranteed analysis shows "crude protein" as a percentage. This measures total protein nitrogen — not just animal protein. A food can hit 30% crude protein while getting most of it from plant sources like corn gluten meal. True protein quality comes from named, animal-based sources with complete amino acid profiles. That\'s why Outlaw\'s first ingredient is always a named meat meal.',
  },
  {
    heading: 'The AAFCO Statement: What "Nutritionally Complete" Actually Means',
    body: 'Look for the AAFCO statement on every bag. It tells you two things: (1) what life stage the food is designed for — puppy, adult, or all life stages — and (2) whether it was formulated to meet nutrient profiles or tested via feeding trials. Outlaw formulas are formulated to meet AAFCO nutrient profiles for their respective life stages.',
  },
  {
    heading: 'Filler Grains: The Shortcut That Costs Your Dog',
    body: 'Corn, wheat, and soy are the three most common filler grains in mass-market dog food. They\'re inexpensive, they artificially inflate crude protein numbers, and they\'re also the three most common dietary allergens in dogs. Itchy skin, hot spots, chronic ear infections, and digestive upset are frequently traced back to grain sensitivities. Outlaw doesn\'t use them. Simple.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Dog Food Ingredients — Outlaw Feed',
  description:
    'Outlaw Feed\'s ingredient philosophy: no corn, no wheat, no soy, real named meat first. Learn how to read a dog food label.',
  url: 'https://www.outlawfeed.com/ingredients',
}

export default function IngredientsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main-content">
        {/* Page hero */}
        <section aria-labelledby="ingredients-hero-heading" className="bg-charcoal pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-sans text-xs font-bold tracking-[0.22em] uppercase text-orange mb-4">Why Outlaw &mdash; Ingredients</p>
            <h1 id="ingredients-hero-heading" className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-cream leading-tight text-balance">
              We Read Every Label.{' '}
              <span className="text-orange">That&apos;s Why We Wrote Our Own.</span>
            </h1>
            <p className="mt-6 font-sans text-lg text-cream/70 max-w-2xl leading-relaxed">
              Corn, wheat, and soy are the three most common filler grains in mass-market dog food. They&apos;re cheap, they&apos;re easy to source, and they drive up crude protein numbers without driving up nutritional value. They&apos;re also the three most common dietary allergens in dogs. Outlaw doesn&apos;t use them. Simple.
            </p>
          </div>
        </section>

        {/* Our Standard */}
        <section aria-labelledby="standard-heading" className="bg-background py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="standard-heading" className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-10 text-balance">
              Our Ingredient Philosophy
            </h2>
            <div className="overflow-x-auto rounded-sm border border-border">
              <table className="w-full text-sm font-sans">
                <thead>
                  <tr className="bg-charcoal">
                    <th className="text-left py-4 px-5 text-orange font-bold uppercase tracking-wider text-xs">What We Use</th>
                    <th className="text-left py-4 px-5 text-cream/50 font-semibold uppercase tracking-wider text-xs">What We Skip</th>
                    <th className="text-left py-4 px-5 text-cream/50 font-semibold uppercase tracking-wider text-xs">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {ingredientTable.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-card' : 'bg-muted/40'}>
                      <td className="py-4 px-5 font-semibold text-foreground align-top">{row.use}</td>
                      <td className="py-4 px-5 text-muted-foreground align-top line-through decoration-red-400/60">{row.skip}</td>
                      <td className="py-4 px-5 text-foreground/70 align-top">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How to read a label */}
        <section aria-labelledby="label-guide-heading" className="bg-cream-dark py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-sans text-xs font-bold tracking-[0.22em] uppercase text-orange mb-4">Label Reading Guide</p>
            <h2 id="label-guide-heading" className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-10 text-balance">
              How to Read a Dog Food Label Without Getting Fooled
            </h2>
            <div className="flex flex-col gap-10">
              {labelSections.map((section, i) => (
                <div key={i} className="flex gap-6">
                  <div className="shrink-0 flex flex-col items-center gap-1">
                    <span className="w-8 h-8 rounded-full bg-orange text-charcoal font-bold font-sans text-sm flex items-center justify-center">
                      {i + 1}
                    </span>
                    {i < labelSections.length - 1 && (
                      <span className="flex-1 w-px bg-border mt-1" aria-hidden="true" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-serif text-xl font-bold text-charcoal mb-3 leading-snug">{section.heading}</h3>
                    <p className="font-sans text-base text-foreground/75 leading-relaxed">{section.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA to products */}
        <section aria-label="Learn more about Outlaw formulas" className="bg-charcoal py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
            <h2 className="font-serif text-3xl font-bold text-cream text-balance">
              See the Ingredients in Action
            </h2>
            <p className="font-sans text-cream/65 text-base leading-relaxed max-w-xl">
              Now that you know what to look for, see exactly how Outlaw Gold and Blue stack up against the standard you just learned.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/formulas/gold"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-8 py-4 rounded-sm uppercase tracking-wider hover:bg-orange/90 transition-colors"
              >
                View Gold Formula
              </Link>
              <Link
                href="/formulas/blue"
                className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream font-bold text-sm px-8 py-4 rounded-sm uppercase tracking-wider hover:border-orange hover:text-orange transition-colors"
              >
                View Blue Formula
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
