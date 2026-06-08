import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Where to Buy Outlaw Feed — Texas Retailers & Store Locator",
  description:
    "Find Outlaw Feed dog food at retailers across Bell County and Central Texas. Store locator with addresses, phone numbers, and directions. Direct delivery available in Bell County, TX.",
  alternates: { canonical: "/where-to-buy" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Outlaw Feed Retail Locations",
  description: "Texas retailers carrying Outlaw Feed dog food",
  itemListElement: [
    { "@type": "ListItem", position: 1,  item: { "@type": "Store", name: "Belton Feed and Supply",           address: { "@type": "PostalAddress", streetAddress: "410 E 2nd Ave",             addressLocality: "Belton",         addressRegion: "TX", postalCode: "76513" }, telephone: "+12549393636" } },
    { "@type": "ListItem", position: 2,  item: { "@type": "Store", name: "Keith Ace Hardware (Belton)",      address: { "@type": "PostalAddress", streetAddress: "525 N Main St",            addressLocality: "Belton",         addressRegion: "TX", postalCode: "76513" }, telephone: "+12546134235" } },
    { "@type": "ListItem", position: 3,  item: { "@type": "Store", name: "Central Texas Feed and Supply",    address: { "@type": "PostalAddress", streetAddress: "5303 S Fort Hood St",       addressLocality: "Killeen",        addressRegion: "TX", postalCode: "76542" }, telephone: "+12546281002" } },
    { "@type": "ListItem", position: 4,  item: { "@type": "Store", name: "D and D Feed Store",               address: { "@type": "PostalAddress", streetAddress: "2744 FM 3046",             addressLocality: "Copperas Cove",  addressRegion: "TX", postalCode: "76522" }, telephone: "+12545474812" } },
    { "@type": "ListItem", position: 5,  item: { "@type": "Store", name: "Keith Ace Hardware (Salado)",      address: { "@type": "PostalAddress", streetAddress: "213 Mill Creek Dr",        addressLocality: "Salado",         addressRegion: "TX", postalCode: "76571" }, telephone: "+12549474008" } },
    { "@type": "ListItem", position: 6,  item: { "@type": "Store", name: "Murdoch's Ranch and Home Supply",  address: { "@type": "PostalAddress", streetAddress: "701 E Central TX Expressway", addressLocality: "Killeen",     addressRegion: "TX", postalCode: "76541" }, telephone: "+12543124300" } },
    { "@type": "ListItem", position: 7,  item: { "@type": "Store", name: "Keith Ace Hardware (Troy)",        address: { "@type": "PostalAddress", streetAddress: "402 Church Ave.",          addressLocality: "Troy",           addressRegion: "TX", postalCode: "76579" }, telephone: "+12545669355" } },
    { "@type": "ListItem", position: 8,  item: { "@type": "Store", name: "Florence Grain Co.",               address: { "@type": "PostalAddress", streetAddress: "600 E Main St.",           addressLocality: "Florence",       addressRegion: "TX", postalCode: "76527" }, telephone: "+12547932595" } },
    { "@type": "ListItem", position: 9,  item: { "@type": "Store", name: "Niemeier Feed and Grain",          address: { "@type": "PostalAddress", streetAddress: "103 S. Main St.",          addressLocality: "McGregor",       addressRegion: "TX", postalCode: "76657" }, telephone: "+12548404106" } },
    { "@type": "ListItem", position: 10, item: { "@type": "Store", name: "Expo Quik Stop",                   address: { "@type": "PostalAddress", streetAddress: "308 W Loop 121",           addressLocality: "Belton",         addressRegion: "TX", postalCode: "76513" }, telephone: "+12549333976" } },
    { "@type": "ListItem", position: 11, item: { "@type": "Store", name: "Murdoch's Ranch and Home Supply",  address: { "@type": "PostalAddress", streetAddress: "4001 Sunset Dr. Ste 4200", addressLocality: "San Angelo",     addressRegion: "TX", postalCode: "76904" } } },
    { "@type": "ListItem", position: 12, item: { "@type": "Store", name: "Murdoch's Ranch and Home Supply",  address: { "@type": "PostalAddress", streetAddress: "2500 S Bypass 35",         addressLocality: "Alvin",          addressRegion: "TX", postalCode: "77511" } } },
    { "@type": "ListItem", position: 13, item: { "@type": "Store", name: "Murdoch's Ranch and Home Supply",  address: { "@type": "PostalAddress", streetAddress: "516 IH 10 E",              addressLocality: "Seguin",         addressRegion: "TX", postalCode: "78155" } } },
    { "@type": "ListItem", position: 14, item: { "@type": "Store", name: "Murdoch's Ranch and Home Supply",  address: { "@type": "PostalAddress", streetAddress: "4200 IH 35 South",         addressLocality: "San Marcos",     addressRegion: "TX", postalCode: "78666" } } },
    { "@type": "ListItem", position: 15, item: { "@type": "Store", name: "Murdoch's Ranch and Home Supply",  address: { "@type": "PostalAddress", streetAddress: "17975 IH 35 N Ste B200",   addressLocality: "Schertz",        addressRegion: "TX", postalCode: "78154" } } },
    { "@type": "ListItem", position: 16, item: { "@type": "Store", name: "Murdoch's Ranch and Home Supply",  address: { "@type": "PostalAddress", streetAddress: "7508 N Navarro St.",       addressLocality: "Victoria",       addressRegion: "TX", postalCode: "77904" } } },
    { "@type": "ListItem", position: 17, item: { "@type": "Store", name: "Murdoch's Ranch and Home Supply",  address: { "@type": "PostalAddress", streetAddress: "1502 Harvey Rd. Suite 200", addressLocality: "College Station", addressRegion: "TX", postalCode: "77840" } } },
    { "@type": "ListItem", position: 18, item: { "@type": "Store", name: "Murdoch's Ranch and Home Supply",  address: { "@type": "PostalAddress", streetAddress: "311 S Bryan Rd. Suite 200A", addressLocality: "Mission",       addressRegion: "TX", postalCode: "78572" } } },
  ],
};

const retailers = [
  // ── Bell County & immediate area ──────────────────────────────────────────
  { name: "Belton Feed and Supply",          address: "410 E 2nd Ave",              city: "Belton, TX 76513",        phone: "(254) 939-3636", county: "Bell County" },
  { name: "Keith Ace Hardware",              address: "525 N Main St",              city: "Belton, TX 76513",        phone: "(254) 613-4235", county: "Bell County" },
  { name: "Expo Quik Stop",                  address: "308 W Loop 121",             city: "Belton, TX 76513",        phone: "(254) 933-3976", county: "Bell County" },
  { name: "Keith Ace Hardware",              address: "213 Mill Creek Dr",          city: "Salado, TX 76571",        phone: "(254) 947-4008", county: "Bell County" },
  { name: "Keith Ace Hardware",              address: "402 Church Ave.",            city: "Troy, TX 76579",          phone: "(254) 566-9355", county: "Bell County" },
  { name: "Central Texas Feed and Supply",   address: "5303 S Fort Hood St",        city: "Killeen, TX 76542",       phone: "(254) 628-1002", county: "Bell County" },
  { name: "Murdoch's Ranch and Home Supply", address: "701 E Central TX Expressway",city: "Killeen, TX 76541",       phone: "(254) 312-4300", county: "Bell County" },
  { name: "D and D Feed Store",              address: "2744 FM 3046",               city: "Copperas Cove, TX 76522", phone: "(254) 547-4812", county: "Coryell County" },
  // ── Central Texas ────────────────────────────────────────────────────────
  { name: "Florence Grain Co.",              address: "600 E Main St.",             city: "Florence, TX 76527",      phone: "(254) 793-2595", county: "Williamson County" },
  { name: "Niemeier Feed and Grain",         address: "103 S. Main St.",            city: "McGregor, TX 76657",      phone: "(254) 840-4106", county: "McLennan County" },
  // ── Murdoch's Statewide ───────────────────────────────────────────────────
  { name: "Murdoch's Ranch and Home Supply", address: "4001 Sunset Dr. Ste 4200",  city: "San Angelo, TX 76904",    phone: "",              county: "Tom Green County" },
  { name: "Murdoch's Ranch and Home Supply", address: "2500 S Bypass 35",          city: "Alvin, TX 77511",         phone: "",              county: "Brazoria County" },
  { name: "Murdoch's Ranch and Home Supply", address: "516 IH 10 E",               city: "Seguin, TX 78155",        phone: "",              county: "Guadalupe County" },
  { name: "Murdoch's Ranch and Home Supply", address: "4200 IH 35 South",          city: "San Marcos, TX 78666",    phone: "",              county: "Hays County" },
  { name: "Murdoch's Ranch and Home Supply", address: "17975 IH 35 N Ste B200",    city: "Schertz, TX 78154",       phone: "",              county: "Guadalupe County" },
  { name: "Murdoch's Ranch and Home Supply", address: "7508 N Navarro St.",         city: "Victoria, TX 77904",      phone: "",              county: "Victoria County" },
  { name: "Murdoch's Ranch and Home Supply", address: "1502 Harvey Rd. Suite 200", city: "College Station, TX 77840", phone: "",            county: "Brazos County" },
  { name: "Murdoch's Ranch and Home Supply", address: "311 S Bryan Rd. Suite 200A",city: "Mission, TX 78572",       phone: "",              county: "Hidalgo County" },
];

const bellCounty = retailers.filter((r) => r.county === "Bell County" || r.county === "Coryell County");
const surrounding = retailers.filter((r) => r.county !== "Bell County" && r.county !== "Coryell County");

export default function WhereToBuyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20 px-4 md:px-6 bg-[#0f0e0c]">
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
                  {r.phone && (
                    <a href={`tel:${r.phone.replace(/[^0-9+]/g, "")}`} className="text-[#9a8870] text-xs hover:text-[#c85a00] transition-colors">
                      {r.phone}
                    </a>
                  )}
                  <span className="mt-2 inline-block px-2 py-1 bg-[#1a1712] border border-[#2e2820] rounded text-[10px] uppercase tracking-wider text-[#e8a44a] font-semibold w-fit">
                    Gold &amp; Blue Formula
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
                key={r.address}
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
                <div className="pl-7">
                  <span className="mt-2 inline-block px-2 py-1 bg-[#0f0e0c] border border-[#2e2820] rounded text-[10px] uppercase tracking-wider text-[#e8a44a] font-semibold w-fit">
                    Gold &amp; Blue Formula
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
                href="tel:+12549393957"
                className="px-7 py-4 bg-[#c85a00] text-white text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#a84800] transition-colors text-center"
              >
                Call (254) 939-3957
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
