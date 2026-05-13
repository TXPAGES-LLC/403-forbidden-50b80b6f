const propertyTypes = [
  { label: 'Retail', desc: 'Strip centers, pad sites, inline, and anchored centers' },
  { label: 'Office', desc: 'Class A/B office, medical office, and professional suites' },
  { label: 'Industrial', desc: 'Warehouse, flex, distribution, and manufacturing' },
  { label: 'Land', desc: 'Commercial land for development, pad sites, and investment' },
  { label: 'Healthcare', desc: 'Medical office, specialty clinic, and healthcare facilities' },
  { label: 'Net Lease', desc: 'Single and multi-tenant NNN investment properties' },
]

export function PropertyTypesSection() {
  return (
    <section className="bg-background py-20 lg:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-12 lg:mb-16">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent">
            Property Types
          </p>
          <div className="hidden lg:block w-px h-5 bg-border mx-4" aria-hidden="true" />
          <p className="text-muted-foreground text-sm">
            We transact across the full spectrum of commercial property.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
          {propertyTypes.map((type) => (
            <div
              key={type.label}
              className="bg-background p-6 group hover:bg-primary transition-colors duration-300"
            >
              <h3 className="font-serif text-base font-bold text-foreground group-hover:text-primary-foreground transition-colors duration-300 mb-2">
                {type.label}
              </h3>
              <p className="text-[11px] leading-relaxed text-muted-foreground group-hover:text-primary-foreground/60 transition-colors duration-300">
                {type.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
