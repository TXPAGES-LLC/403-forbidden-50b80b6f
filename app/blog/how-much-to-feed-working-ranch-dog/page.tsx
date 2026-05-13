import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'How Much to Feed a Working Ranch Dog | Outlaw Feed Blog',
  description:
    'Ranch dogs burn significantly more calories than pet dogs. Learn how activity level changes feeding requirements and how to use body condition scoring to dial in the right amount.',
  alternates: { canonical: 'https://www.outlawfeed.com/blog/how-much-to-feed-working-ranch-dog' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How Much to Feed a Working Ranch Dog',
  description: 'Activity-based feeding guide for ranch dogs, cattle dogs, and working farm dogs.',
  author: { '@type': 'Organization', name: 'Outlaw Feed' },
  publisher: { '@type': 'Organization', name: 'Outlaw Feed', url: 'https://www.outlawfeed.com' },
  datePublished: '2025-04-07',
  url: 'https://www.outlawfeed.com/blog/how-much-to-feed-working-ranch-dog',
}

export default function RanchDogFeedingArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main-content">
        <section className="bg-charcoal pt-32 pb-0 overflow-hidden">
          <div className="relative h-72 md:h-96 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1920&q=80"
              alt="Working ranch dog — how much food to feed a working dog feeding guide"
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
              <span className="text-orange font-semibold">Feeding Guide</span>
            </nav>
            <div className="flex items-center gap-3 font-sans text-xs text-muted-foreground mb-5">
              <span className="text-orange font-bold uppercase tracking-wider">Feeding Guide</span>
              <span>&bull;</span>
              <time dateTime="2025-04-07">April 7, 2025</time>
              <span>&bull;</span>
              <span>7 min read</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance mb-6">
              How Much to Feed a Working Ranch Dog
            </h1>
            <p className="font-sans text-base text-foreground/75 leading-relaxed mb-8 border-l-4 border-orange pl-5 italic">
              The bag on the shelf was written for the average dog. A cattle dog running fence six days a week is not the average dog.
            </p>
            <div className="font-sans text-base text-foreground/80 leading-relaxed space-y-6">
              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Why the Feeding Chart Is Just a Starting Point</h2>
              <p>
                Dog food manufacturers calculate feeding guidelines for a population average — a dog of a given weight, living an average lifestyle, with average activity levels. The &ldquo;active&rdquo; category on most feeding charts accounts for moderate exercise, not sustained physical labor.
              </p>
              <p>
                A working Australian Shepherd or Border Collie that runs cattle morning and afternoon, six days a week, may burn two to three times the calories of the same breed in a suburban household. An Catahoula working hogs, a Heeler running fence, a Labrador retrieving bumpers for a guide service — these are working athletes, and they need to be fed like it.
              </p>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">The Body Condition Scoring Method</h2>
              <p>
                The most reliable way to know whether you are feeding the right amount is body condition scoring — assessing the dog&rsquo;s physical state rather than trusting a printed number.
              </p>
              <ul className="list-disc pl-6 space-y-3 mt-4">
                <li><strong>Ribs:</strong> Run your hands firmly along the dog&rsquo;s ribcage from behind the shoulder. You should feel each individual rib easily without pressing hard. The ribs should not be prominently visible from a few feet away. If you are pressing to find them, the dog is overweight. If you can count them by sight, the dog is underweight.</li>
                <li><strong>Waist:</strong> Viewed from above, the dog should have a visible waist — a slight inward taper between the rib cage and the hips. A dog with no visible waist from above is overweight.</li>
                <li><strong>Abdomen:</strong> Viewed from the side, the belly should tuck up from the chest toward the rear. A dog that is level from chest to hip or hanging low in the belly is overweight.</li>
              </ul>
              <p>
                For a working ranch dog, aim for a 4 or 4.5 out of 9 on the standard body condition scale — slightly leaner than the &ldquo;ideal&rdquo; shown in pet food charts. Lean dogs move more efficiently and are less prone to heat-related exhaustion.
              </p>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Adjusting for Seasonal Work Patterns</h2>
              <p>
                Ranch dogs often have distinct work seasons — calving, branding, hunting leases, slow summer months. Feeding volume should follow the work load, not stay fixed year-round.
              </p>
              <p>
                Increase feeding volume 2&ndash;3 weeks before heavy work periods begin. Decrease gradually at the end of heavy work periods. Abrupt changes to feeding volume are harder on the dog&rsquo;s digestive system than gradual adjustments. A 10% increase per week is a reasonable rate of change in either direction.
              </p>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Caloric Density and Formula Choice</h2>
              <p>
                A higher-fat formula provides more calories per cup, which means you can meet a working dog&rsquo;s energy needs with less volume. This matters for ranch dogs that may not want to eat large meals in summer heat, or that need to be fed once a day in a work environment that does not allow for midday feeding.
              </p>
              <p>
                Outlaw Gold Formula at 32% protein and 18% fat provides a caloric density appropriate for working dogs without having to feed impractical amounts per day. For the highest-demand working dogs, supplementing with a higher-fat topper during peak work periods is a practical option rather than switching formulas.
              </p>
            </div>
            <div className="mt-12 bg-cream-dark border border-border rounded-sm p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                <p className="font-sans text-xs font-bold tracking-widest uppercase text-orange mb-1">Related</p>
                <h3 className="font-serif text-xl font-bold text-charcoal text-balance">Full Feeding Guide + Charts</h3>
                <p className="font-sans text-sm text-muted-foreground mt-1 leading-relaxed">Feeding charts by dog weight and activity level, plus the transition schedule.</p>
              </div>
              <Link href="/feeding-guide" className="shrink-0 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-7 py-3.5 rounded-sm uppercase tracking-wider hover:bg-orange/90 transition-colors">
                View Feeding Guide
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
