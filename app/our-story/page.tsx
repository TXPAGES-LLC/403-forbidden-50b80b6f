import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Our Story | Outlaw Feed — Texas-Made Dog Food, Built by Working Dog Owners',
  description:
    'Outlaw Feed was founded in Temple, TX by working dog owners who couldn\'t find a clean, Texas-made dog food worth feeding their animals. Learn the story behind the brand.',
  alternates: { canonical: '/why-outlaw/our-story' },
  robots: { index: false, follow: false },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Our Story — Outlaw Feed',
  description: 'The founding story of Outlaw Feed, Texas-made premium dog food for working and hunting dogs.',
  url: 'https://www.outlawfeed.com/our-story',
  publisher: {
    '@type': 'Organization',
    name: 'Outlaw Feed',
    address: { '@type': 'PostalAddress', addressLocality: 'Temple', addressRegion: 'TX', addressCountry: 'US' },
  },
}

export default function OurStoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main-content">
        {/* Hero */}
        <section aria-labelledby="story-heading" className="relative bg-charcoal pt-32 pb-20 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=70"
            alt="Texas landscape — Outlaw Feed, made in Temple TX"
            width={1920}
            height={800}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-sans text-xs font-bold tracking-[0.22em] uppercase text-orange mb-4">Our Story</p>
            <h1 id="story-heading" className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-cream leading-tight text-balance">
              The Story Behind Outlaw
            </h1>
            <p className="mt-6 font-sans text-xl text-cream/70 max-w-2xl leading-relaxed">
              A Texas dog food built by the people who needed it most &mdash; and couldn&apos;t find it anywhere else.
            </p>
          </div>
        </section>

        {/* The Origin */}
        <section aria-labelledby="origin-heading" className="bg-background py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="origin-heading" className="font-serif text-3xl font-bold text-charcoal mb-6 text-balance">
              The Origin
            </h2>
            <div className="font-sans text-base text-foreground/75 leading-relaxed space-y-5">
              <p>
                Outlaw Feed started the same way most good things in Texas start &mdash; out of necessity and a refusal to settle. The founders were working dog owners and hunters who had spent years reading ingredient labels, switching formulas, watching dogs underperform, and wondering why there wasn&apos;t a Texas-made option worth trusting.
              </p>
              <p>
                The national brands were making food for the mass market. The mass market isn&apos;t a ranch dog that runs cattle six days a week. It isn&apos;t a bird dog that runs eight hours in October heat. It isn&apos;t the working dog owner in Bell County who wants to know, specifically, what&apos;s going into the bag sitting in their truck bed.
              </p>
              <p>
                So they built Outlaw Feed. Formulated for the dogs they owned. Made in the state they lived in. Built around an ingredient standard they could defend at any feed store counter in Central Texas.
              </p>
            </div>
          </div>
        </section>

        {/* The Standard — image break */}
        <div className="relative h-64 md:h-80 overflow-hidden bg-charcoal">
          <img
            src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1920&q=70"
            alt="Working ranch dog at sunset in Texas — the standard Outlaw Feed was built around"
            width={1920}
            height={600}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-charcoal/40" aria-hidden="true" />
          <div className="relative h-full flex items-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <blockquote className="font-serif text-2xl sm:text-3xl font-bold text-cream leading-snug max-w-2xl text-balance">
              &ldquo;There are a lot of dog food brands. Most of them have never seen a working dog earn its feed. Outlaw was built by people who have. That changes what goes in the bag.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* The Standard */}
        <section aria-labelledby="standard-heading" className="bg-background py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="standard-heading" className="font-serif text-3xl font-bold text-charcoal mb-6 text-balance">
              The Standard
            </h2>
            <div className="font-sans text-base text-foreground/75 leading-relaxed space-y-5">
              <p>
                Outlaw Feed is built on one belief: your dog&apos;s food should be good enough to explain. Not to a nutritionist. To your neighbor at the feed store. If you can&apos;t point to every ingredient and say what it does and why it&apos;s there, it shouldn&apos;t be in the bag.
              </p>
              <p>
                That means real meat first &mdash; named, traceable protein, not &ldquo;animal meal.&rdquo; It means no corn, no wheat, no soy &mdash; the three cheapest and most allergenic fillers in the business. It means a guaranteed analysis you can actually read and an AAFCO statement you can actually trust.
              </p>
              <p>
                It means manufacturing right here in Texas, where we can stand behind every batch.
              </p>
            </div>
          </div>
        </section>

        {/* The Location */}
        <section aria-labelledby="location-heading" className="bg-cream-dark py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-sans text-xs font-bold tracking-[0.22em] uppercase text-orange mb-4">Temple, Texas</p>
              <h2 id="location-heading" className="font-serif text-3xl font-bold text-charcoal mb-5 text-balance">
                Made in Texas. Means Something Here.
              </h2>
              <p className="font-sans text-base text-foreground/75 leading-relaxed mb-5">
                Temple, TX sits in Bell County at the heart of Central Texas farm and ranch country. This isn&apos;t a branding tagline &mdash; it&apos;s geography. The people buying Outlaw are the same people who produce the state&apos;s cattle, work its fields, and run its hunting leases. We&apos;re neighbors, not a corporation on a coast shipping into a market we&apos;ve never seen.
              </p>
              <p className="font-sans text-base text-foreground/75 leading-relaxed">
                Manufacturing in Texas means local jobs, local accountability, and a supply chain short enough that we can stand behind every bag that leaves the facility.
              </p>
            </div>
            <div className="rounded-sm overflow-hidden h-72 md:h-80">
              <img
                src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=75"
                alt="Central Texas farmland — Outlaw Feed is manufactured in Temple, TX"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* The Future */}
        <section aria-labelledby="future-heading" className="bg-background py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="future-heading" className="font-serif text-3xl font-bold text-charcoal mb-6 text-balance">
              Where We&apos;re Going
            </h2>
            <p className="font-sans text-base text-foreground/75 leading-relaxed mb-5">
              Outlaw Feed is expanding its retail footprint across Texas and developing new formulas for specific working dog needs. Our goal is to be the regional standard &mdash; the brand that Central Texas farm and ranch owners recommend by name to anyone who asks what they feed their dogs.
            </p>
            <p className="font-sans text-base text-foreground/75 leading-relaxed mb-8">
              If you run a feed store, a farm supply, or a pet shop and want to carry Outlaw, we want to hear from you. And if you&apos;re a dog owner who&apos;s been waiting for a no-compromise Texas option, welcome to the Pack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-7 py-4 rounded-sm uppercase tracking-wider hover:bg-orange/90 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/find-a-store"
                className="inline-flex items-center justify-center gap-2 border-2 border-charcoal/20 text-charcoal font-bold text-sm px-7 py-4 rounded-sm uppercase tracking-wider hover:border-orange hover:text-orange transition-colors"
              >
                Find a Store
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
