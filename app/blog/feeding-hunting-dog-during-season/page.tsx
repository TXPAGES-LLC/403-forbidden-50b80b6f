import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Feeding Your Hunting Dog During Season: What Changes and Why | Outlaw Feed Blog',
  description:
    'In-season hunting dogs burn significantly more calories than the bag\'s feeding chart accounts for. What to adjust, when, and how to monitor body condition throughout the season.',
  alternates: { canonical: 'https://www.outlawfeed.com/blog/feeding-hunting-dog-during-season' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Feeding Your Hunting Dog During Season: What Changes and Why',
  description: 'In-season caloric adjustments, meal timing, and body condition monitoring for hunting dogs.',
  author: { '@type': 'Organization', name: 'Outlaw Feed' },
  publisher: { '@type': 'Organization', name: 'Outlaw Feed', url: 'https://www.outlawfeed.com' },
  datePublished: '2025-04-14',
  url: 'https://www.outlawfeed.com/blog/feeding-hunting-dog-during-season',
}

export default function InSeasonFeedingArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main-content">
        <section className="bg-charcoal pt-32 pb-0 overflow-hidden">
          <div className="relative h-72 md:h-96 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1920&q=80"
              alt="Hunting dog in the field — in-season feeding guide for hunting dogs"
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
              <span className="text-orange font-semibold">Hunting Dog Care</span>
            </nav>
            <div className="flex items-center gap-3 font-sans text-xs text-muted-foreground mb-5">
              <span className="text-orange font-bold uppercase tracking-wider">Hunting Dog Care</span>
              <span>&bull;</span>
              <time dateTime="2025-04-14">April 14, 2025</time>
              <span>&bull;</span>
              <span>8 min read</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance mb-6">
              Feeding Your Hunting Dog During Season: What Changes and Why
            </h1>
            <p className="font-sans text-base text-foreground/75 leading-relaxed mb-8 border-l-4 border-orange pl-5 italic">
              A hunting dog working a full day burns more calories than the feeding chart printed on the bag was designed for. Feeding to the chart and wondering why performance drops mid-season is a common mistake.
            </p>
            <div className="font-sans text-base text-foreground/80 leading-relaxed space-y-6">
              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">How Much More Does an In-Season Dog Need?</h2>
              <p>
                Research on working and sporting dog caloric needs consistently shows that hard-working dogs in active use require 25&ndash;50% more daily calories than the same dog at rest. For a 60-pound bird dog, that can be the difference between 2 cups and 3 cups per day — or more in cold-weather hunts, where thermoregulation burns additional calories.
              </p>
              <p>
                The important factor is that this increase should already be in place by opening day — not something you increase reactively after watching the dog lose weight through the first week of season. See the pre-season conditioning article for the timeline recommendation.
              </p>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Meal Timing on Hunt Days</h2>
              <p>
                Do not feed a large meal immediately before running a dog. A dog with a full stomach working in heat is at risk for gastric dilatation-volvulus (GDV, or bloat) — a life-threatening emergency. Feed a light meal 3&ndash;4 hours before a hunt or nothing at all before a morning hunt with a large recovery meal after.
              </p>
              <p>
                Post-hunt feeding is the most important meal of the day. The dog has depleted glycogen stores and experienced muscle micro-trauma from hours of physical work. A full, high-quality meal within 30&ndash;60 minutes of finishing work supports recovery and prepares the dog for the next day.
              </p>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Hydration Is as Important as Calories</h2>
              <p>
                Caloric intake is the primary concern for maintaining body weight, but hydration drives every physiological system that supports performance. A dog that is even mildly dehydrated will show reduced endurance, impaired scenting ability, and slower recovery.
              </p>
              <p>
                Offer water every 15&ndash;30 minutes during active hunting. Dogs working in heat may not drink voluntarily even when dehydrated — encourage drinking during breaks. A dog that refuses water when offered in hot conditions should be watched carefully for heat exhaustion.
              </p>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">Monitoring Body Condition Through Season</h2>
              <p>
                Check body condition every 5&ndash;7 days during hunting season. Working dogs can lose body condition rapidly when caloric intake does not keep pace with expenditure. A dog that loses 5% of body weight in a week is in a caloric deficit that should be addressed immediately.
              </p>
              <p>
                If the dog is maintaining or gaining slight weight and body condition looks correct, the feeding amount is right. Adjust the feeding volume up or down in 10% increments per week rather than dramatic changes that upset the digestive system.
              </p>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">After Season Ends</h2>
              <p>
                Drop feeding volume gradually over 2&ndash;3 weeks as the dog transitions from working to rest. An abrupt caloric reduction after season is less disruptive than most people think — dogs adapt well — but a gradual reduction is gentler on the digestive system and prevents rapid fat accumulation in a suddenly-sedentary dog.
              </p>
            </div>
            <div className="mt-12 bg-cream-dark border border-border rounded-sm p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                <p className="font-sans text-xs font-bold tracking-widest uppercase text-orange mb-1">Related</p>
                <h3 className="font-serif text-xl font-bold text-charcoal text-balance">Outlaw Gold Formula</h3>
                <p className="font-sans text-sm text-muted-foreground mt-1 leading-relaxed">32% protein &middot; 18% fat — built specifically for working and hunting dogs.</p>
              </div>
              <Link href="/formulas/gold" className="shrink-0 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-7 py-3.5 rounded-sm uppercase tracking-wider hover:bg-orange/90 transition-colors">
                View Gold Formula
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
