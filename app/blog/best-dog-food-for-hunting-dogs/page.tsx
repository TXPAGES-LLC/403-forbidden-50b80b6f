import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Best Dog Food for Hunting Dogs: What to Look For | Outlaw Feed Blog',
  description:
    'Protein percentage, fat ratios, and ingredient quality — what actually matters when you\'re feeding a hunting dog. A practical guide for bird dog, retriever, and hound owners.',
  alternates: { canonical: 'https://www.outlawfeed.com/blog/best-dog-food-for-hunting-dogs' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'The Best Dog Food for Hunting Dogs: What to Look For',
  description:
    'A practical guide on protein, fat ratios, and ingredient sourcing for hunting dog owners.',
  author: { '@type': 'Organization', name: 'Outlaw Feed' },
  publisher: { '@type': 'Organization', name: 'Outlaw Feed', url: 'https://www.outlawfeed.com' },
  datePublished: '2025-03-10',
  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
  url: 'https://www.outlawfeed.com/blog/best-dog-food-for-hunting-dogs',
}

export default function HuntingDogFoodArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main-content">
        {/* Article hero */}
        <section aria-labelledby="article-heading" className="relative bg-charcoal pt-32 pb-0 overflow-hidden">
          <div className="relative h-72 md:h-96 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80"
              alt="Bird dog running in a Texas field — hunting dog nutrition and best dog food guide"
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

        {/* Article content */}
        <article className="bg-background" aria-labelledby="article-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-sans text-xs text-muted-foreground mb-8">
              <Link href="/blog" className="hover:text-orange transition-colors">Blog</Link>
              <span aria-hidden="true">/</span>
              <span className="text-orange font-semibold">Dog Nutrition</span>
            </nav>

            {/* Meta */}
            <div className="flex items-center gap-3 font-sans text-xs text-muted-foreground mb-5">
              <span className="text-orange font-bold uppercase tracking-wider">Dog Nutrition</span>
              <span>&bull;</span>
              <time dateTime="2025-03-10">March 10, 2025</time>
              <span>&bull;</span>
              <span>8 min read</span>
            </div>

            <h1
              id="article-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance mb-6"
            >
              The Best Dog Food for Hunting Dogs: What to Look For
            </h1>

            <p className="font-sans text-base text-foreground/75 leading-relaxed mb-8 border-l-4 border-orange pl-5 italic">
              A hunting dog working a full day in the field burns two to three times the calories of the same dog sitting in a kennel. Feed it like a pet dog and you will get pet dog performance.
            </p>

            <div className="prose-content font-sans text-base text-foreground/80 leading-relaxed space-y-6">

              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Protein: The Foundation of a Working Dog&#39;s Diet</h2>
              <p>
                The minimum crude protein percentage you should consider for an active hunting dog is 26%. Most serious hunters and field dog trainers feed 28&ndash;32% protein year-round, increasing feeding volume during season rather than switching formulas. The reason is simple: muscle repair. A hunting dog running in rough terrain — jumping fences, busting brush, swimming through cold water — is doing a form of athletic work that tears muscle fiber. Protein is how that fiber gets rebuilt.
              </p>
              <p>
                But crude protein percentage alone is not enough. The source matters. Animal-based protein (chicken meal, beef meal, pork meal, fish meal) provides a complete amino acid profile that plant-based sources cannot match. A 28% crude protein formula backed by chicken meal is nutritionally superior to a 30% formula that gets a significant portion of its protein from corn gluten meal or soybean meal.
              </p>
              <p>
                Rule: look for a named meat source as the first ingredient. Not &ldquo;animal meal&rdquo; — a named species. Chicken meal. Beef meal. Turkey meal. If the bag says &ldquo;animal meal&rdquo; and nothing else, you don&rsquo;t know what you&rsquo;re buying.
              </p>

              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Fat: The Primary Fuel Source for Field Work</h2>
              <p>
                For sustained endurance work — the kind your dog does from sunrise to late afternoon — fat is the primary energy source, not carbohydrates. Carbohydrates provide quick energy but burn fast. Fat provides slow, sustained energy that keeps a dog performing through hour six when the carbs are long gone.
              </p>
              <p>
                A working dog diet should contain at least 16&ndash;18% crude fat. High-performance field dogs are commonly fed 20% fat or higher during heavy use periods. The 30/20 ratio (30% protein, 20% fat) is a well-known benchmark in the hunting dog community for in-season performance nutrition.
              </p>
              <p>
                Fat also determines caloric density. A higher-fat food means more calories per cup, which means you can fuel the same dog with less volume — important when a dog working hard may not want to eat a full meal mid-day in the heat.
              </p>

              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">What to Avoid: Corn, Wheat, and Soy</h2>
              <p>
                Corn, wheat, and soy are the three cheapest filler ingredients in mass-market dog food. They inflate crude protein numbers without providing the amino acid quality of meat-based protein. They are also the three most common dietary allergens in dogs — a dog with a grain sensitivity may show symptoms including itchy skin, hot spots, chronic ear infections, and inconsistent stool.
              </p>
              <p>
                For a hunting dog, allergen load becomes especially relevant during season. A dog fighting a food-related inflammatory response while also recovering from a hard day&rsquo;s work is a dog operating below its potential. Removing these ingredients eliminates a variable that many owners have addressed by simply switching to a cleaner formula.
              </p>
              <p>
                The dog food industry has no regulatory obligation to disclose the percentage of each ingredient — only the order. &ldquo;Corn-free&rdquo; or &ldquo;no corn, wheat, soy&rdquo; on the label means what it says. A food that lists corn as ingredient six is still a food where corn is a significant contributor to the total formula weight.
              </p>

              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">How Much to Feed a Hunting Dog</h2>
              <p>
                The feeding chart on the back of the bag is designed for the median dog. Your hunting dog is not the median dog. During season, a hard-working hunting dog may need 25&ndash;50% more food than the &ldquo;active&rdquo; column on the chart.
              </p>
              <p>
                Use body condition scoring, not behavior, to guide feeding amounts. Run your hands along the dog&rsquo;s ribcage. You should be able to feel the ribs easily but not see them prominently. If you&rsquo;re having to press to find the ribs, the dog needs less food or more exercise. If you can count the ribs by sight, the dog needs more food.
              </p>
              <p>
                Start increasing feeding volume 4&ndash;6 weeks before season opens. This gives the dog&rsquo;s metabolism time to adapt and ensures body weight and muscle mass are at their peak when you need them.
              </p>

              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">The Bottom Line</h2>
              <p>
                The best dog food for hunting dogs is one with a named meat source as the first ingredient, at least 26% crude protein from animal sources, at least 16% crude fat, and no corn, wheat, or soy in the formula. It should carry an AAFCO statement for adult maintenance or all life stages, and it should have a guaranteed analysis you can read without needing a chemistry degree.
              </p>
              <p>
                That is the standard Outlaw Feed was built around. Both the Gold and Blue formulas meet it. The Gold Formula was specifically designed for working and hunting dogs at 32% protein and 18% fat with chicken and pork meal as the lead protein source.
              </p>
            </div>

            {/* Internal CTA */}
            <div className="mt-12 bg-cream-dark border border-border rounded-sm p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                <p className="font-sans text-xs font-bold tracking-widest uppercase text-orange mb-1">Related</p>
                <h3 className="font-serif text-xl font-bold text-charcoal text-balance">
                  See Outlaw Gold Formula
                </h3>
                <p className="font-sans text-sm text-muted-foreground mt-1 leading-relaxed">
                  32% protein &middot; 18% fat &middot; Chicken &amp; Pork Meal first ingredient. Built for hunting dogs.
                </p>
              </div>
              <Link
                href="/formulas/gold"
                className="shrink-0 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-7 py-3.5 rounded-sm uppercase tracking-wider hover:bg-orange/90 transition-colors"
              >
                View Gold Formula
              </Link>
            </div>

            {/* Back to blog */}
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
