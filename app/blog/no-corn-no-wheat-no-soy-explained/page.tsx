import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'What Does "No Corn, No Wheat, No Soy" Actually Mean? | Outlaw Feed Blog',
  description:
    'Why corn, wheat, and soy dominate mass-market dog food, what allergen load means for your dog, and what clean alternatives look like on a label.',
  alternates: { canonical: '/blog/no-corn-no-wheat-no-soy-explained' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'What Does "No Corn, No Wheat, No Soy" Actually Mean?',
  description: 'Why these three grains dominate dog food, what allergen load means, and what alternatives look like.',
  author: { '@type': 'Organization', name: 'Outlaw Feed' },
  publisher: { '@type': 'Organization', name: 'Outlaw Feed', url: '' },
  datePublished: '2025-03-31',
  url: 'https://www.outlawfeed.com/blog/no-corn-no-wheat-no-soy-explained',
}

export default function NoCornArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main-content">
        <section className="bg-charcoal pt-32 pb-0 overflow-hidden">
          <div className="relative h-72 md:h-96 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=1920&q=80"
              alt="Dog food ingredients — no corn no wheat no soy explained"
              width={1920} height={800} loading="eager" fetchPriority="high" decoding="async"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(24,18,12,1) 0%, rgba(24,18,12,0.3) 60%)' }} aria-hidden="true" />
          </div>
        </section>
        <article className="bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-sans text-xs text-muted-foreground mb-8">
              <Link href="/blog" className="hover:text-orange transition-colors">Blog</Link>
              <span aria-hidden="true">/</span>
              <span className="text-orange font-semibold">Dog Nutrition</span>
            </nav>
            <div className="flex items-center gap-3 font-sans text-xs text-muted-foreground mb-5">
              <span className="text-orange font-bold uppercase tracking-wider">Dog Nutrition</span>
              <span>&bull;</span>
              <time dateTime="2025-03-31">March 31, 2025</time>
              <span>&bull;</span>
              <span>6 min read</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance mb-6">
              What Does &ldquo;No Corn, No Wheat, No Soy&rdquo; Actually Mean?
            </h1>
            <p className="font-sans text-base text-foreground/75 leading-relaxed mb-8 border-l-4 border-orange pl-5 italic">
              &ldquo;No corn, no wheat, no soy&rdquo; has become a marketing badge. Here is what it actually means and why it matters for a dog that works for a living.
            </p>
            <div className="font-sans text-base text-foreground/80 leading-relaxed space-y-6">
              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Why These Three Grains Are Everywhere</h2>
              <p>
                Corn, wheat, and soy are the three cheapest widely-available carbohydrate and protein sources in the United States. They are grown at industrial scale, they are easy to process into pet food, and they serve a dual function: they fill the bag and they inflate the crude protein number on the guaranteed analysis. A food can achieve 28% crude protein using soybean meal and corn gluten meal. Whether that protein is nutritionally equivalent to chicken meal is a different question.
              </p>
              <p>
                The economics are simple. Corn and soy are commodity ingredients. Named meat meals are not. The difference in cost per ton is significant, and that difference shows up in the price of the bag — or stays in the manufacturer&rsquo;s margin.
              </p>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">The Allergen Problem</h2>
              <p>
                Corn, wheat, and soy are also the three most common dietary allergens in dogs. Food allergies in dogs typically manifest as: chronic itching and skin irritation, hot spots, recurring ear infections, digestive upset and inconsistent stool, and anal gland problems. These symptoms are often treated with veterinary visits, medication, and supplements — when the underlying cause may be the food.
              </p>
              <p>
                It is worth noting that dogs develop food sensitivities over time, often to proteins they have been repeatedly exposed to. This is why long-term feeding of the same formula containing these ingredients can lead to increasing sensitivity even in dogs that initially had no reaction.
              </p>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">What Outlaw Uses Instead</h2>
              <p>
                Removing corn, wheat, and soy leaves a need for digestible carbohydrate sources. Outlaw Gold Formula uses millet — a small-grain cereal that is highly digestible, low in the glycemic response associated with corn, and does not carry the allergen load of the three grains it replaces. Outlaw Blue Formula uses sweet potato, which provides a clean carbohydrate source with natural vitamins and fiber.
              </p>
              <p>
                Neither formula uses these ingredients as protein sources. All protein in both Outlaw formulas comes from named animal meal sources — chicken, beef, pork, and fish meal.
              </p>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">What to Look For on the Label</h2>
              <p>
                A label that says &ldquo;no corn, no wheat, no soy&rdquo; means none of those ingredients appear anywhere in the formula. Check the full ingredients list, not just the front of the bag. If corn, wheat, or soy appear anywhere in the list — even at positions six, seven, or eight — the claim is not accurate and the label statement should be absent.
              </p>
            </div>
            <div className="mt-12 bg-cream-dark border border-border rounded-sm p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                <p className="font-sans text-xs font-bold tracking-widest uppercase text-orange mb-1">Related</p>
                <h3 className="font-serif text-xl font-bold text-charcoal text-balance">Our Full Ingredient Philosophy</h3>
                <p className="font-sans text-sm text-muted-foreground mt-1 leading-relaxed">What we use, what we skip, and why — on the Ingredients page.</p>
              </div>
              <Link href="/ingredients" className="shrink-0 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-7 py-3.5 rounded-sm uppercase tracking-wider hover:bg-orange/90 transition-colors">
                Read Ingredients Guide
              </Link>
            </div>
            <div className="mt-10 pt-8 border-t border-border">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-orange transition-colors">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M11 7H3M7 3L3 7l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Back to Blog
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
