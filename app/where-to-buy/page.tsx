import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Where to Buy Outlaw Feed — Texas Retailers & Store Locator",
  description:
    "Find Outlaw Feed dog food at retailers across Bell County and Central Texas. Store locator with addresses, phone numbers, and directions. Direct delivery available in Bell County, TX.",
  alternates: { canonical: "https://outlawfeed.com/where-to-buy" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Outlaw Feed Retail Locations",
  description: "Texas retailers carrying Outlaw Feed dog food",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Store",
        name: "Belton Farm & Ranch Supply",
        address: { "@type": "PostalAddress", addressLocality: "Belton", addressRegion: "TX" },
        telephone: "+12545550121",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Store",
        name: "Temple Feed & Seed",
        address: { "@type": "PostalAddress", addressLocality: "Temple", addressRegion: "TX" },
        telephone: "+12545550144",
      },
    },
  ],
};

const retailers = [
  {
    name: "Belton Farm & Ranch Supply",
    address: "1200 E Central Ave",
    city: "Belton, TX 76513",
    phone: "(254) 555-0121",
    hours: "Mon–Sat 7am–6pm, Sun 10am–4pm",
    note: "Carries Gold & Blue Formula",
    county: "Bell County",
  },
  {
    name: "Temple Feed & Seed",
    address: "4310 S General Bruce Dr",
    city: "Temple, TX 76502",
    phone: "(254) 555-0144",
    hours: "Mon–Fri 8am–5:30pm, Sat 8am–4pm",
    note: "Carries Gold Formula",
    county: "Bell County",
  },
  {
    name: "Killeen Tractor Supply Co.",
    address: "2702 E Central Texas Expy",
    city: "Killeen, TX 76543",
    phone: "(254) 555-0158",
    hours: "Mon–Sat 8am–8pm, Sun 9am–7pm",
    note: "Carries Gold & Blue Formula",
    county: "Bell County",
  },
  {
    name: "Waco Agri-Center",
    address: "7120 Woodway Dr",
    city: "Waco, TX 76712",
    phone: "(254) 555-0167",
    hours: "Mon–Fri 7:30am–5:30pm, Sat 8am–3pm",
    note: "Carries Gold Formula",
    county: "McLennan County",
  },
  {
    name: "Georgetown Farm Store",
    address: "501 S Austin Ave",
    city: "Georgetown, TX 78626",
    phone: "(512) 555-0182",
    hours: "Mon–Sat 8am–6pm, Sun 10am–3pm",
    note: "Carries Gold & Blue Formula",
    county: "Williamson County",
  },
  {
    name: "Salado Feed Co.",
    address: "112 N Main St",
    city: "Salado, TX 76571",
    phone: "(254) 555-0199",
    hours: "Mon–Fri 8am–5pm, Sat 8am–12pm",
    note: "Carries Gold Formula",
    county: "Bell County",
  },
  {
    name: "Harker Heights Farm Supply",
    address: "320 E Central Texas Expy",
    city: "Harker Heights, TX 76548",
    phone: "(254) 555-0211",
    hours: "Mon–Sat 8am–6pm",
    note: "Carries Gold & Blue Formula",
    county: "Bell County",
  },
  {
    name: "Copperas Cove Livestock Supply",
    address: "1900 S Main St",
    city: "Copperas Cove, TX 76522",
    phone: "(254) 555-0228",
    hours: "Mon–Fri 7:30am–5:30pm, Sat 8am–2pm",
    note: "Carries Gold Formula",
    county: "Coryell County",
  },
];

const bellCounty = retailers.filter((r) => r.county === "Bell County");
const surrounding = retailers.filter((r) => r.county !== "Bell County");

export default function WhereToBuyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-6 bg-[#0f0e0c]">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-[#9a8870]">
              <li><Link href="/" className="hover:text-[#e8a44a] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#f5f0e8]">Where to Buy</li>
            </ol>
          </nav>
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#c85a00] font-semibold mb-4">
            Store Locator
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-[#f5f0e8] mb-6 text-balance">
            Find Outlaw Feed Near You
          </h1>
          <p className="text-[#f5f0e8]/70 text-lg leading-relaxed max-w-2xl">
            Outlaw Feed is carried at farm supply stores and feed stores across Central Texas. Find your nearest retailer below — or call us direct for Bell County delivery.
          </p>
        </div>
      </section>

      {/* Map embed */}
      <section className="px-4 md:px-6 pb-16" aria-label="Store map">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden border border-[#2e2820]">
            <iframe
              title="Outlaw Feed retail locations in Central Texas"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d220000!2d-97.4641!3d31.056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              aria-label="Map showing Outlaw Feed retail locations in Bell County and Central Texas"
            />
          </div>
        </div>
      </section>

      {/* Bell County */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-[#1a1712] border-y border-[#2e2820]" aria-labelledby="bell-heading">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-8 bg-[#c85a00] rounded-full" aria-hidden="true" />
            <h2 id="bell-heading" className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8]">
              Bell County Retailers
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bellCounty.map((r) => (
              <address
                key={r.name}
                className="not-italic p-6 bg-[#0f0e0c] border border-[#2e2820] rounded-lg hover:border-[#c85a00]/40 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-[#c85a00] mt-0.5 shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#f5f0e8] text-sm leading-snug">{r.name}</p>
                    <p className="text-[#9a8870] text-xs mt-1">{r.address}</p>
                    <p className="text-[#9a8870] text-xs">{r.city}</p>
                  </div>
                </div>
                <div className="pl-7 flex flex-col gap-1">
                  <a href={`tel:${r.phone.replace(/[^0-9+]/g, "")}`} className="text-[#9a8870] text-xs hover:text-[#c85a00] transition-colors">
                    {r.phone}
                  </a>
                  <p className="text-[#9a8870] text-xs">{r.hours}</p>
                  <span className="mt-2 inline-block px-2 py-1 bg-[#1a1712] border border-[#2e2820] rounded text-[10px] uppercase tracking-wider text-[#e8a44a] font-semibold w-fit">
                    {r.note}
                  </span>
                </div>
              </address>
            ))}
          </div>
        </div>
      </section>

      {/* Surrounding */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-[#0f0e0c]" aria-labelledby="surrounding-heading">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-8 bg-[#5c3d22] rounded-full" aria-hidden="true" />
            <h2 id="surrounding-heading" className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8]">
              Surrounding Areas
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {surrounding.map((r) => (
              <address
                key={r.name}
                className="not-italic p-6 bg-[#1a1712] border border-[#2e2820] rounded-lg hover:border-[#c85a00]/40 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-[#9a8870] mt-0.5 shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#f5f0e8] text-sm leading-snug">{r.name}</p>
                    <p className="text-[#9a8870] text-xs mt-1">{r.address}</p>
                    <p className="text-[#9a8870] text-xs">{r.city}</p>
                    <p className="text-[#9a8870] text-[10px] uppercase tracking-wider mt-0.5">{r.county}</p>
                  </div>
                </div>
                <div className="pl-7 flex flex-col gap-1">
                  <a href={`tel:${r.phone.replace(/[^0-9+]/g, "")}`} className="text-[#9a8870] text-xs hover:text-[#c85a00] transition-colors">
                    {r.phone}
                  </a>
                  <p className="text-[#9a8870] text-xs">{r.hours}</p>
                  <span className="mt-2 inline-block px-2 py-1 bg-[#0f0e0c] border border-[#2e2820] rounded text-[10px] uppercase tracking-wider text-[#e8a44a] font-semibold w-fit">
                    {r.note}
                  </span>
                </div>
              </address>
            ))}
          </div>
        </div>
      </section>

      {/* Bell County Delivery CTA */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-[#1a1712] border-t border-[#2e2820]">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 bg-[#0f0e0c] border border-[#c85a00]/30 rounded-lg">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mb-3">
              Bell County Direct Delivery
            </h2>
            <p className="text-[#f5f0e8]/70 mb-6 leading-relaxed">
              Live in Bell County? We deliver direct to your ranch, farm, or home. Call us to set up a regular delivery schedule and never run out of feed again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+12545550100"
                className="px-7 py-4 bg-[#c85a00] text-white text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#a84800] transition-colors text-center"
              >
                Call (254) 555-0100
              </a>
              <Link
                href="/contact"
                className="px-7 py-4 border border-[#2e2820] text-[#f5f0e8]/70 text-sm font-semibold uppercase tracking-wider rounded hover:border-[#c85a00] hover:text-[#c85a00] transition-colors text-center"
              >
                Send a Message
              </Link>
            </div>
          </div>
          <p className="text-[#9a8870] text-xs text-center mt-6">
            {"Don't see a retailer near you? "}
            <Link href="/contact" className="text-[#c85a00] hover:text-[#e8a44a] transition-colors">
              Contact us
            </Link>
            {" to request Outlaw Feed at your local feed store."}
          </p>
        </div>
      </section>
    </>
  );
}
