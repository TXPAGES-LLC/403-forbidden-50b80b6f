const reviews = [
  {
    name: 'Jake T.',
    location: 'Temple, TX',
    stars: 5,
    text: 'My two bird dogs have been on the Gold Formula for six months. Their coats are incredible and their energy in the field is better than ever. Real meat first — you can see the difference.',
    role: 'Hunting Dog Owner',
  },
  {
    name: 'Maria R.',
    location: 'Belton, TX',
    stars: 5,
    text: 'We run four working cattle dogs on our ranch. Switched to Outlaw last year and won\'t go back. They hold weight better through the summer heat and recover faster from long days.',
    role: 'Ranch Owner, Bell County',
  },
  {
    name: 'Chad B.',
    location: 'Killeen, TX',
    stars: 5,
    text: 'Bought a bag of the Blue Formula for my German Shepherd pup. He loves it, and I love knowing exactly what\'s in it. No corn, no mystery ingredients — just real food for a real dog.',
    role: 'Working Dog Trainer',
  },
  {
    name: 'Susan M.',
    location: 'Georgetown, TX',
    stars: 5,
    text: 'Started feeding Outlaw to my three dogs after my vet recommended a no-corn formula. All three are thriving. The local shop carries it and the price is very fair for the quality.',
    role: 'Multi-Dog Owner',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < count ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.5"
          className={i < count ? 'text-orange' : 'text-cream/30'}
          aria-hidden="true"
        >
          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
        </svg>
      ))}
    </span>
  )
}

export function Testimonials() {
  return (
    <section
      id="reviews"
      aria-labelledby="testimonials-heading"
      className="bg-background py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange font-sans text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Customer Reviews
          </p>
          <h2
            id="testimonials-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Texas Dog Owners Trust Outlaw
          </h2>
        </div>

        {/* Review grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, i) => (
            <blockquote
              key={i}
              className="bg-card border border-border rounded-sm p-6 flex flex-col gap-4"
              aria-label={`Review by ${review.name} from ${review.location}`}
            >
              <StarRating count={review.stars} />
              <p className="font-sans text-sm text-foreground/80 leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="border-t border-border pt-3">
                <cite className="not-italic">
                  <p className="font-sans text-sm font-bold text-foreground">{review.name}</p>
                  <p className="font-sans text-xs text-muted-foreground">{review.role} &mdash; {review.location}</p>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* UGC callout */}
        <div className="mt-12 text-center">
          <p className="font-sans text-sm text-muted-foreground">
            Share your dog&apos;s Outlaw story on Instagram{' '}
            <a
              href="https://instagram.com/outlawfeed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange font-semibold hover:underline"
              aria-label="Tag Outlaw Feed on Instagram at @outlawfeed"
            >
              @outlawfeed
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
