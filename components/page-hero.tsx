import Link from 'next/link'

interface Breadcrumb {
  label: string
  href?: string
}

interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle?: string
  breadcrumbs?: Breadcrumb[]
  dark?: boolean
}

export function PageHero({ eyebrow, title, subtitle, breadcrumbs, dark = false }: PageHeroProps) {
  return (
    <section
      className={`pt-32 pb-16 lg:pt-40 lg:pb-20 ${dark ? 'bg-[#1E3A2B]' : 'bg-secondary border-b border-border'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6 flex items-center gap-2" aria-label="Breadcrumb">
            <Link
              href="/"
              className={`text-[11px] font-medium tracking-[0.15em] uppercase transition-colors duration-200 ${
                dark ? 'text-primary-foreground/45 hover:text-accent' : 'text-muted-foreground hover:text-accent'
              }`}
            >
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span
                  className={`text-[10px] ${dark ? 'text-primary-foreground/25' : 'text-muted-foreground/40'}`}
                  aria-hidden="true"
                >
                  /
                </span>
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className={`text-[11px] font-medium tracking-[0.15em] uppercase transition-colors duration-200 ${
                      dark ? 'text-primary-foreground/45 hover:text-accent' : 'text-muted-foreground hover:text-accent'
                    }`}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    className={`text-[11px] font-medium tracking-[0.15em] uppercase ${
                      dark ? 'text-accent' : 'text-accent'
                    }`}
                    aria-current="page"
                  >
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Eyebrow */}
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-5">
          {eyebrow}
        </p>

        {/* Title */}
        <h1
          className={`font-serif text-4xl lg:text-6xl font-bold leading-tight text-balance max-w-3xl ${
            dark ? 'text-primary-foreground' : 'text-foreground'
          }`}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className={`mt-6 text-base lg:text-lg leading-relaxed max-w-2xl ${
              dark ? 'text-primary-foreground/65' : 'text-muted-foreground'
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
