'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // Simulate a brief pause before "submit" confirmation
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-background py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — contact info */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-4">
              Contact
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground leading-tight text-balance mb-8">
              Let&apos;s talk about your next move.
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed mb-10">
              Whether you are looking for space, trying to lease your property, or evaluating an investment — start with a conversation. No pitch, no obligation.
            </p>

            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-1">Broker</p>
                <p className="font-serif text-lg font-bold text-foreground">Brandon Harris</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-1">Phone</p>
                <a
                  href="tel:2145771520"
                  className="text-foreground font-medium hover:text-accent transition-colors duration-200"
                >
                  214-577-1520
                </a>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-1">Email</p>
                <a
                  href="mailto:bharris@mesa-cre.com"
                  className="text-foreground font-medium hover:text-accent transition-colors duration-200"
                >
                  bharris@mesa-cre.com
                </a>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-1">Markets Served</p>
                <p className="text-foreground text-sm leading-relaxed">
                  Brownwood &nbsp;&middot;&nbsp; Abilene &nbsp;&middot;&nbsp; San Angelo &nbsp;&middot;&nbsp; DFW
                </p>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col justify-center items-start py-12">
                <div className="w-10 h-0.5 bg-accent mb-6" aria-hidden="true" />
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Message received.</h3>
                <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
                  Brandon will be in touch shortly. In the meantime, feel free to call or email directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="firstName" className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                      First Name <span className="text-accent" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                      placeholder="First"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="lastName" className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                      Last Name <span className="text-accent" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Last"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                    Email <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="interest" className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                    I am looking to...
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="bg-secondary border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="">Select one</option>
                    <option value="lease-space">Lease space for my business</option>
                    <option value="lease-property">Lease my property</option>
                    <option value="buy">Buy commercial property</option>
                    <option value="sell">Sell commercial property</option>
                    <option value="other">Other / General inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                    Tell us more
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Property type, market, size requirements, timeline..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-[13px] font-semibold tracking-[0.1em] uppercase px-7 py-4 hover:bg-[#162E21] transition-colors duration-200 disabled:opacity-60"
                >
                  {loading ? 'Sending...' : (
                    <>
                      Send Message
                      <Send size={13} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
