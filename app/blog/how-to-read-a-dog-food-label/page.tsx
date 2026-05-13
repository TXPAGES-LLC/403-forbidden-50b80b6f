import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'How to Read a Dog Food Label Without Getting Fooled | Outlaw Feed Blog',
  description:
    'The guaranteed analysis, ingredients list, AAFCO statement — what each means and how to use them to separate real nutrition from marketing language on a dog food bag.',
  alternates: { canonical: 'https://www.outlawfeed.com/blog/how-to-read-a-dog-food-label' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How to Read a Dog Food Label (Without Getting Fooled)',
  description:
    'The guaranteed analysis, ingredients list, and AAFCO statement explained clearly for dog owners.',
  author: { '@type': 'Organization', name: 'Outlaw Feed' },
  publisher: { '@type': 'Organization', name: 'Outlaw Feed', url: 'https://www.outlawfeed.com' },
  datePublished: '2025-03-17',
  image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=80',
  url: 'https://www.outlawfeed.com/blog/how-to-read-a-dog-food-label',
}

export default function LabelReadingArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main-content">
        <section aria-labelledby="article-heading" className="relative bg-charcoal pt-32 pb-0 overflow-hidden">
          <div className="relative h-72 md:h-96 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1920&q=80"
              alt="Dog food bag — how to read a dog food label guide"
              width={1920}
              height={800}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(24,18,12,1) 0%, rgba(24,18,12,0.3) 60%)' }} aria-hidden="true" />
          </div>
        </section>

        <article className="bg-background" aria-labelledby="article-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

            <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-sans text-xs text-muted-foreground mb-8">
              <Link href="/blog" className="hover:text-orange transition-colors">Blog</Link>
              <span aria-hidden="true">/</span>
              <span className="text-orange font-semibold">Education</span>
            </nav>

            <div className="flex items-center gap-3 font-sans text-xs text-muted-foreground mb-5">
              <span className="text-orange font-bold uppercase tracking-wider">Education</span>
              <span>&bull;</span>
              <time dateTime="2025-03-17">March 17, 2025</time>
              <span>&bull;</span>
              <span>7 min read</span>
            </div>

            <h1
              id="article-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance mb-6"
            >
              How to Read a Dog Food Label (Without Getting Fooled)
            </h1>

            <p className="font-sans text-base text-foreground/75 leading-relaxed mb-8 border-l-4 border-orange pl-5 italic">
              The front of a dog food bag is advertising. The back of a dog food bag is information. These are two different things, and most people treat them as one.
            </p>

            <div className="font-sans text-base text-foreground/80 leading-relaxed space-y-6">

              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">The Ingredients List: First Ingredient = Most Important</h2>
              <p>
                Dog food ingredients are listed by weight before processing, in descending order. The first ingredient is present in the largest amount by weight in the formula. This is federal law — it is not marketing.
              </p>
              <p>
                A bag that lists &ldquo;Chicken Meal&rdquo; as the first ingredient contains more chicken meal than anything else. A bag that lists &ldquo;Corn&rdquo; as the first ingredient is primarily a corn-based product, regardless of what the packaging on the front of the bag says about &ldquo;premium protein&rdquo; or &ldquo;high performance.&rdquo;
              </p>
              <p>
                One nuance: water weight. Fresh chicken is mostly water. When it is cooked down into meal, it loses most of its water content and becomes far more protein-dense per pound. A food that lists &ldquo;Fresh Chicken&rdquo; first may actually contain less total protein than one that lists &ldquo;Chicken Meal&rdquo; first, because the fresh chicken&rsquo;s water weight moved it to the top of the list before cooking. Look for named meals from identified protein sources.
              </p>

              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Crude Protein: What It Is and What It Is Not</h2>
              <p>
                The guaranteed analysis shows a crude protein percentage. This number measures total nitrogen in the food and uses it to estimate total protein. It does not tell you where the protein comes from.
              </p>
              <p>
                This matters because protein quality varies significantly by source. Animal-based proteins provide a complete amino acid profile — all the essential amino acids a dog needs. Plant proteins (corn gluten meal, soybean meal) are cheaper, inflate the crude protein number, and provide an incomplete amino acid profile.
              </p>
              <p>
                A formula showing 32% crude protein backed primarily by chicken and pork meal is nutritionally superior to a 34% formula that gets most of its protein from corn gluten meal. The label will not tell you which is which unless you read the full ingredients list.
              </p>

              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">The AAFCO Statement: What &ldquo;Nutritionally Complete&rdquo; Actually Means</h2>
              <p>
                AAFCO (Association of American Feed Control Officials) sets the minimum nutritional standards for dog food. Every legitimate dog food bag carries an AAFCO nutritional adequacy statement. Here&rsquo;s what it tells you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Life stage:</strong> &ldquo;for adult maintenance,&rdquo; &ldquo;for all life stages,&rdquo; or &ldquo;for growth and reproduction.&rdquo; A food formulated only for adult maintenance should not be fed to growing puppies.</li>
                <li><strong>Method:</strong> Either &ldquo;formulated to meet AAFCO nutrient profiles&rdquo; (calculated to meet minimums) or &ldquo;feeding trials using AAFCO procedures&rdquo; (tested on actual dogs). Both are valid; feeding trials are the gold standard.</li>
              </ul>
              <p>
                If a bag does not carry an AAFCO statement, it is not a complete and balanced dog food. Do not feed it as a primary diet.
              </p>

              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Filler Grains: The Shortcut That Costs Your Dog</h2>
              <p>
                Corn, wheat, and soy are the three most common filler grains in mass-market dog food. They perform a specific function in the economics of pet food manufacturing: they are cheap, they artificially inflate crude protein numbers (nitrogen is nitrogen, regardless of source), and they are readily available in enormous quantities.
              </p>
              <p>
                They are also the three most common dietary allergens in dogs. Skin issues, hot spots, ear infections, digestive upset, and anal gland problems are frequently traced to grain sensitivities in dogs. This is not always the case — some dogs handle grains fine — but it is common enough that &ldquo;no corn, no wheat, no soy&rdquo; has become a meaningful differentiator in the premium dog food market.
              </p>
              <p>
                The practical test: if you&rsquo;ve been managing your dog&rsquo;s allergies, skin issues, or digestive problems for years without a clear resolution, consider whether the food is contributing before spending more money on supplements and vet visits.
              </p>

              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">What to Look For on the Back of the Bag</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>First ingredient: a named meat meal (Chicken Meal, Beef Meal, Pork Meal, Turkey Meal)</li>
                <li>Protein source: at least 26% for active dogs, 28%+ for working or hunting dogs</li>
                <li>Fat: at least 16% for active dogs</li>
                <li>No corn, wheat, or soy in the first five ingredients — ideally not at all</li>
                <li>AAFCO statement for the appropriate life stage</li>
                <li>Natural preservatives: mixed tocopherols rather than BHA, BHT, or ethoxyquin</li>
              </ul>
            </div>

            {/* Internal CTA */}
            <div className="mt-12 bg-cream-dark border border-border rounded-sm p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                <p className="font-sans text-xs font-bold tracking-widest uppercase text-orange mb-1">Go Deeper</p>
                <h3 className="font-serif text-xl font-bold text-charcoal text-balance">
                  Our Full Ingredient Philosophy
                </h3>
                <p className="font-sans text-sm text-muted-foreground mt-1 leading-relaxed">
                  See exactly what Outlaw uses, what we skip, and why — on our Ingredients page.
                </p>
              </div>
              <Link
                href="/ingredients"
                className="shrink-0 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-7 py-3.5 rounded-sm uppercase tracking-wider hover:bg-orange/90 transition-colors"
              >
                Read Ingredients Guide
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-orange transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M11 7H3M7 3L3 7l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
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
