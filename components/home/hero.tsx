import Link from 'next/link'

export function Hero() {
  return (
    <section
      aria-label="Outlaw Feed — Premium Texas Dog Food for Working and Hunting Dogs"
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-charcoal"
    >
      {/* Full-bleed hero image — working ranch dog, not studio shot */}
      <img
        src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1920&q=80"
        alt="Working ranch dog in a Texas field — fueled by Outlaw Feed premium no-corn dog food"
        width={1920}
        height={1080}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gradient overlay — bottom-heavy so text reads clearly */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to top, rgba(24,18,12,0.96) 0%, rgba(24,18,12,0.60) 40%, rgba(24,18,12,0.15) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:pb-32 pt-36">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="inline-flex items-center gap-3 text-orange font-sans text-xs font-bold tracking-[0.22em] uppercase mb-6">
            <span className="block w-8 h-px bg-orange" aria-hidden="true" />
            Texas-Made &bull; Family Owned &bull; AAFCO Certified
          </p>

          {/* H1 — primary keyword placement */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-cream leading-none tracking-tight text-balance mb-6">
            No Fillers.{' '}
            <br className="hidden sm:block" />
            No Compromise.{' '}
            <br className="hidden sm:block" />
            <span className="text-orange">No Apologies.</span>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-cream/75 leading-relaxed mb-10 max-w-2xl">
            Outlaw Feed is a Texas-made, family-owned premium dog food &mdash; no corn, no wheat, no soy. Just the nutrition your dog was built to eat.
          </p>

          {/* Dual CTAs per content direction */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/find-a-store"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-8 py-4 rounded-sm uppercase tracking-widest hover:bg-orange/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
            >
              Find a Store Near You
            </Link>
            <Link
              href="/formulas"
              className="inline-flex items-center justify-center gap-2 border-2 border-cream/40 text-cream font-bold text-sm px-8 py-4 rounded-sm uppercase tracking-widest hover:border-orange hover:text-orange transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
            >
              See Our Formulas
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-cream/40"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-[0.15em] uppercase font-sans">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="animate-bounce">
          <path d="M8 3v10M3 9l5 4 5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
