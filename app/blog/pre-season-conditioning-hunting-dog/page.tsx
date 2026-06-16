import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Pre-Season Conditioning: Get Your Hunting Dog Field Ready | Outlaw Feed',
  description:
    'A six-week pre-season conditioning and nutrition timeline for hunting dogs. Get your bird dog, retriever, or hound to peak physical condition before opening day.',
  alternates: { canonical: '/blog/pre-season-conditioning-hunting-dog' },
}

const timeline = [
  {
    week: 'Week 6–5',
    title: 'Build the Base',
    training: '20–30 minute structured runs or long walks, 4–5x per week. Focus on steady aerobic conditioning, not intensity. Let the dog find its cadence.',
    nutrition: 'Begin increasing daily food volume by 10%. If you\'ve been on maintenance feeding, move toward the "active" column on the feeding guide. No formula switch needed yet.',
  },
  {
    week: 'Week 4–3',
    title: 'Add Intensity',
    training: '45–60 minute sessions with more varied terrain — hills, water retrieves, running in heavier cover. Begin introducing short bird-finding work to sharpen the nose and the mind.',
    nutrition: 'Increase feeding another 10%. Monitor body condition — you should feel ribs easily but not see them. If the dog is losing weight, increase more aggressively. Hydration becomes critical now.',
  },
  {
    week: 'Week 2–1',
    title: 'Simulate Season Conditions',
    training: 'Full 2–4 hour sessions at least 2x per week. Run in heat if season conditions call for it. This is where the conditioning work pays off or doesn\'t.',
    nutrition: 'Feed at working-dog levels (25–30% above maintenance). Ensure the dog is fully hydrated before, during, and after sessions. Watch stool quality — a significant change signals something worth investigating.',
  },
  {
    week: 'Opening Day',
    title: 'Execute',
    training: 'Your dog is ready. Manage session length on day one — don\'t push a conditioned dog to failure on the first day. Build from there.',
    nutrition: 'Maintain working-level feeding throughout season. Use body condition to adjust up or down. Don\'t drop calories immediately after a hard day — recovery nutrition matters.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': '/blog/pre-season-conditioning-hunting-dog#article',
  headline: 'Pre-Season Conditioning: Getting Your Hunting Dog Field Ready',
  description: 'A six-week pre-season conditioning and nutrition timeline for bird dogs, retrievers, and hounds.',
  author: { '@type': 'Organization', name: 'Outlaw Feed', url: '' },
  publisher: { '@type': 'Organization', name: 'Outlaw Feed', url: '' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': '/blog/pre-season-conditioning-hunting-dog' },
  datePublished: '2025-03-24',
  dateModified: '2025-03-24',
  image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=80',
  url: '/blog/pre-season-conditioning-hunting-dog',
}

export default function PreSeasonConditioningArticle() {
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
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1920&q=80"
              alt="Ranch dog running outdoors — hunting dog pre-season conditioning guide"
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
              <span className="text-orange font-semibold">Hunting Dog Care</span>
            </nav>

            <div className="flex items-center gap-3 font-sans text-xs text-muted-foreground mb-5">
              <span className="text-orange font-bold uppercase tracking-wider">Hunting Dog Care</span>
              <span>&bull;</span>
              <time dateTime="2025-03-24">March 24, 2025</time>
              <span>&bull;</span>
              <span>9 min read</span>
            </div>

            <h1
              id="article-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance mb-6"
            >
              Pre-Season Conditioning: Getting Your Hunting Dog Field Ready
            </h1>

            <p className="font-sans text-base text-foreground/75 leading-relaxed mb-8 border-l-4 border-orange pl-5 italic">
              Six weeks before opening day is when the season is decided. By the time you&rsquo;re loading the truck on day one, the training is either done or it isn&rsquo;t.
            </p>

            <div className="font-sans text-base text-foreground/80 leading-relaxed space-y-6">

              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Why Six Weeks?</h2>
              <p>
                Aerobic conditioning for a hunting dog — the kind that allows sustained effort over hours rather than minutes — takes four to eight weeks of consistent work to build meaningfully. A dog that goes from kennel life to an eight-hour quail hunt in two weeks is going to struggle, and depending on conditions, may get hurt.
              </p>
              <p>
                Six weeks gives you enough runway to build a real aerobic base, add intensity without injury risk, and arrive at opening day with a dog that is physically prepared to do the work you&rsquo;re asking it to do.
              </p>
              <p>
                It also gives nutrition time to work. If you&rsquo;re switching to a higher-protein, higher-fat formula for season, start the transition now — not the week before opening day. The 7&ndash;10 day transition period plus three to four weeks on the new formula means your dog&rsquo;s metabolism will be fully adapted by the time the work starts.
              </p>

              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">The Six-Week Conditioning Timeline</h2>
            </div>

            {/* Timeline */}
            <div className="flex flex-col gap-0 mt-6 mb-8">
              {timeline.map((phase, i) => (
                <div key={i} className="flex gap-6 pb-8 last:pb-0">
                  <div className="shrink-0 flex flex-col items-center gap-1">
                    <span className="w-8 h-8 rounded-full bg-orange text-charcoal font-bold font-sans text-sm flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    {i < timeline.length - 1 && (
                      <span className="flex-1 w-px bg-border mt-1" aria-hidden="true" />
                    )}
                  </div>
                  <div className="flex flex-col gap-3">
                    <div>
                      <span className="font-sans text-xs font-bold tracking-widest uppercase text-orange">{phase.week}</span>
                      <h3 className="font-serif text-xl font-bold text-foreground mt-0.5">{phase.title}</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-muted/40 rounded-sm p-4">
                        <p className="font-sans text-xs font-bold uppercase tracking-wider text-foreground/50 mb-2">Training</p>
                        <p className="font-sans text-sm text-foreground/75 leading-relaxed">{phase.training}</p>
                      </div>
                      <div className="bg-orange/5 border border-orange/20 rounded-sm p-4">
                        <p className="font-sans text-xs font-bold uppercase tracking-wider text-orange mb-2">Nutrition</p>
                        <p className="font-sans text-sm text-foreground/75 leading-relaxed">{phase.nutrition}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="font-sans text-base text-foreground/80 leading-relaxed space-y-6">

              <h2 className="font-serif text-2xl font-bold text-foreground mt-4 mb-4">The Nutrition Side of Pre-Season</h2>
              <p>
                Conditioning work burns calories. A dog running 45-minute sessions four times per week is burning significantly more than a kennel dog. If you don&rsquo;t increase feeding volume to match, the dog will lose body weight and muscle mass — the exact opposite of what you&rsquo;re trying to accomplish.
              </p>
              <p>
                Feed a formula with sufficient fat to support sustained aerobic work. The fat percentage matters more than most people realize: fat provides nine calories per gram, versus four calories per gram for protein and carbohydrates. A higher-fat formula means more available energy per cup, which means the dog can fuel long efforts without relying on protein breakdown for energy — a metabolic state that costs muscle mass.
              </p>
              <p>
                The minimum recommended fat percentage for a hunting dog in conditioning is 16%. For dogs doing heavy pre-season work in heat, 18&ndash;20% is appropriate. This is not a time to feed a &ldquo;lite&rdquo; or weight-management formula.
              </p>

              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Monitoring Body Condition</h2>
              <p>
                Throughout pre-season conditioning, assess body condition weekly. Run your hands firmly along the ribcage. You should feel each rib individually without pressing hard, but not see them prominently from a distance. A dog losing noticeable weight during conditioning needs more food. A dog gaining weight needs more exercise or slightly less food.
              </p>
              <p>
                Body condition at the start of season is a predictor of how the dog will perform through the season. A lean, well-muscled dog in proper body condition will recover faster between hunts and sustain effort longer within a single hunt than an over- or under-conditioned dog.
              </p>
            </div>

            {/* Internal CTA */}
            <div className="mt-12 bg-cream-dark border border-border rounded-sm p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                <p className="font-sans text-xs font-bold tracking-widest uppercase text-orange mb-1">Related</p>
                <h3 className="font-serif text-xl font-bold text-charcoal text-balance">
                  Feeding Guide for Working Dogs
                </h3>
                <p className="font-sans text-sm text-muted-foreground mt-1 leading-relaxed">
                  Full feeding charts, transition schedules, and FAQ for active and working dogs.
                </p>
              </div>
              <Link
                href="/feeding-guide"
                className="shrink-0 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-7 py-3.5 rounded-sm uppercase tracking-wider hover:bg-orange/90 transition-colors"
              >
                View Feeding Guide
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
