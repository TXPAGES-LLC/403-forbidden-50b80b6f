'use client'

import { useState } from 'react'

export function EmailCapture() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    // Simulate submission — wire up to your email platform
    await new Promise((r) => setTimeout(r, 600))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section
      id="join-the-pack"
      aria-labelledby="email-capture-heading"
      className="bg-leather text-cream py-16 md:py-20"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
        <div>
          <p className="text-orange font-sans text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Join the Pack
          </p>
          <h2
            id="email-capture-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-cream text-balance"
          >
            Get $5 Off Your Next Bag
          </h2>
          <p className="mt-3 font-sans text-cream/70 text-base leading-relaxed max-w-md mx-auto">
            Subscribe to the Outlaw Pack newsletter for exclusive deals, feeding tips for working dogs, and early access to new formulas.
          </p>
        </div>

        {submitted ? (
          <div
            role="status"
            aria-live="polite"
            className="bg-charcoal/50 border border-orange/40 rounded-sm px-8 py-5 text-center"
          >
            <p className="font-serif text-lg font-bold text-cream">You&apos;re in the Pack.</p>
            <p className="font-sans text-sm text-cream/70 mt-1">Check your email for your $5 discount code.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md"
            aria-label="Email subscription form"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="email-input" className="sr-only">
                Your email address
              </label>
              <input
                id="email-input"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                autoComplete="email"
                className="flex-1 bg-charcoal/40 border border-cream/20 rounded-sm px-4 py-3 text-cream placeholder:text-cream/40 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-sm uppercase tracking-wider hover:bg-orange/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed shrink-0"
                aria-label="Subscribe to the Outlaw Pack newsletter"
              >
                {loading ? 'Joining...' : 'Join the Pack'}
              </button>
            </div>
            <p className="mt-2 text-xs text-cream/45 font-sans text-center">
              No spam. Unsubscribe anytime. By signing up you agree to our Privacy Policy.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
