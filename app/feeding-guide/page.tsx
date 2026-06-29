import type { Metadata } from "next";
import Link from "next/link";
import FeedingGuideFAQ from "@/components/feeding-guide-faq";

export const metadata: Metadata = {
  title: "Dog Feeding Guide & FAQ — Gold & Blue Formula | Outlaw Feed",
  description:
    "How much to feed your working or hunting dog. Daily feeding amounts for Gold and Blue formulas by weight, plus answers to the most common Outlaw Feed questions.",
  alternates: { canonical: "/feeding-guide" },
  openGraph: {
    type: "website",
    title: "Dog Feeding Guide & FAQ | Outlaw Feed",
    description:
      "Daily feeding charts for Gold and Blue formulas plus FAQ — how much to feed, how to transition, and which formula fits your dog.",
    url: "/feeding-guide",
    siteName: "Outlaw Feed",
    images: [
      {
        url: "https://outlawfeed.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Outlaw Feed Dog Feeding Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dog Feeding Guide | Outlaw Feed",
    description: "Daily feeding charts and FAQ for Gold and Blue formulas. Texas-made dog food for working dogs.",
    images: ["https://outlawfeed.com/opengraph-image.png"],
  },
};

const faqs = [
  {
    q: "Does Outlaw Feed contain corn, wheat, or soy?",
    a: "No. Never. Corn, wheat, and soy are categorically excluded from every Outlaw Feed formula. This is not a 'limited ingredient' claim — it is a foundational rule we built the entire brand around.",
  },
  {
    q: "Is Outlaw Feed AAFCO certified?",
    a: "Yes. Both Gold Formula (adult maintenance) and Blue Formula (all life stages, including large breed puppies) meet AAFCO Dog Food Nutrient Profiles as confirmed by formulation.",
  },
  {
    q: "Where is Outlaw Feed manufactured?",
    a: "Outlaw Feed is made in Bell County, Texas. We manufacture here, not through anonymous co-packing facilities in other states or overseas.",
  },
  {
    q: "Which formula is right for my dog?",
    a: "Gold Formula (26% protein, 18% fat) is built for adult working and hunting dogs that need high-energy performance nutrition. Blue Formula (21% protein, 15% fat) is ideal for adult dogs at everyday maintenance levels, multi-dog households, or dogs transitioning off a high-performance diet.",
  },
  {
    q: "How do I transition my dog to Outlaw Feed?",
    a: "Transition over 7 days: Days 1–2 feed 75% old food + 25% Outlaw; Days 3–4 feed 50/50; Days 5–6 feed 25% old + 75% Outlaw; Day 7 and beyond feed 100% Outlaw. Slower transitions are fine for sensitive dogs.",
  },
  {
    q: "How much should I feed my hunting dog during season?",
    a: "Field-working hunting dogs typically need 25–50% more than the baseline feeding chart. A 60-lb bird dog running all day in the field may need 4–5 cups of Gold Formula per day. Watch body condition — you want to feel ribs but not see them.",
  },
  {
    q: "Can I feed Blue Formula to my adult dog?",
    a: "Yes. Blue Formula is formulated for adult maintenance at 21% protein and 15% fat. It is a great everyday option for adult dogs with moderate activity levels, companion dogs, or any adult that does not require the higher energy output of Gold Formula.",
  },
  {
    q: "Do you offer delivery?",
    a: "We offer direct delivery within Bell County, Texas. Contact us at (254) 939-3957 to arrange a schedule. Outside Bell County, find our nearest retail partners on the Where to Buy page.",
  },
  {
    q: "Where can I buy Outlaw Feed?",
    a: "Outlaw Feed is available at farm supply stores across Central Texas, including Bell County, Temple, Killeen, Waco, Georgetown, and surrounding areas. See the full retailer list on our Where to Buy page.",
  },
  {
    q: "Can puppies eat Outlaw Feed?",
    a: "Contact us directly for puppy-specific feeding guidance, as our current Gold and Blue formulas are designed for adult dogs. Reach us at (254) 939-3957 or through the Contact page and we will point you in the right direction for your pup.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FeedingGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20 px-4 md:px-6 bg-[#0f0e0c]">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-[#9a8870]">
              <li><Link href="/" className="hover:text-[#e8a44a] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#f5f0e8]">Feeding Guide</li>
            </ol>
          </nav>
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#c85a00] font-semibold mb-4">
            How to Feed
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-[#f5f0e8] mb-6 text-balance">
            Feeding Guide & FAQ
          </h1>
          <p className="text-[#f5f0e8]/70 text-lg leading-relaxed max-w-2xl">
            How much to feed, when to feed, how to transition, and answers to every question we get asked about Outlaw Feed formulas.
          </p>
        </div>
      </section>

      {/* Formula comparison */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-[#1a1712] border-y border-[#2e2820]" aria-labelledby="formula-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="formula-heading" className="font-serif text-3xl font-bold text-[#f5f0e8] mb-10">
            Which Formula Is Right for My Dog?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#2e2820] rounded-lg overflow-hidden" aria-label="Formula comparison chart">
              <thead>
                <tr className="bg-[#0f0e0c] border-b border-[#2e2820]">
                  <th className="px-5 py-4 text-left text-[#9a8870] text-xs uppercase tracking-wider" />
                  <th className="px-5 py-4 text-left font-bold text-[#e8a44a] text-base">Gold Formula</th>
                  <th className="px-5 py-4 text-left font-bold text-[#e8a44a] text-base">Blue Formula</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Crude Protein", "26% min", "21% min"],
                  ["Crude Fat", "18% min", "15% min"],
                  ["Moisture", "12% max", "12% max"],
                  ["Calories", "3,640 kcal/kg", "3,170 kcal/kg"],
                  ["Per Cup", "441 kcal", "290 kcal"],
                  ["Primary Protein", "Chicken & Brown Rice", "Chicken Meal"],
                  ["Carb Source", "Brown Rice & Grain Sorghum", "Grain Sorghum & Brown Rice"],
                  ["Best For", "Working & hunting dogs", "Adult dogs & everyday nutrition"],
                  ["Corn / Wheat / Soy", "Never", "Never"],
                ].map(([label, gold, blue], i) => (
                  <tr key={label} className={`border-b border-[#2e2820] ${i % 2 === 0 ? "bg-[#1a1712]" : "bg-[#0f0e0c]"}`}>
                    <td className="px-5 py-3 text-[#9a8870] text-xs uppercase tracking-wider font-semibold">{label}</td>
                    <td className="px-5 py-3 text-[#f5f0e8]/80">{gold}</td>
                    <td className="px-5 py-3 text-[#f5f0e8]/80">{blue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products/gold-formula" className="inline-flex items-center justify-center px-6 py-3 bg-[#c85a00] text-white text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#a84800] transition-colors">
              Gold Formula Details
            </Link>
            <Link href="/products/blue-formula" className="inline-flex items-center justify-center px-6 py-3 border border-[#2e2820] text-[#f5f0e8]/70 text-sm font-semibold uppercase tracking-wider rounded hover:border-[#c85a00] hover:text-[#c85a00] transition-colors">
              Blue Formula Details
            </Link>
          </div>
        </div>
      </section>

      {/* Feeding tables */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-[#0f0e0c]" aria-labelledby="amounts-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="amounts-heading" className="font-serif text-3xl font-bold text-[#f5f0e8] mb-4">
            Daily Feeding Amounts
          </h2>
          <p className="text-[#9a8870] text-sm mb-8 leading-relaxed max-w-2xl">
            Amounts below are starting guidelines for dogs at moderate activity. Active working and hunting dogs typically require 25–50% more. Always adjust based on body condition — you want to easily feel ribs without seeing them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Gold Formula — Adult Dogs",
                rows: [
                  ["10–20 lbs", "¾ – 1½ cups/day"],
                  ["20–40 lbs", "1½ – 2½ cups/day"],
                  ["40–60 lbs", "2½ – 3½ cups/day"],
                  ["60–80 lbs", "3½ – 4½ cups/day"],
                  ["80–100 lbs", "4½ – 5½ cups/day"],
                  ["100+ lbs", "5½ cups + ¼ per 10 lbs"],
                ],
              },
              {
                title: "Blue Formula — Adult Maintenance",
                rows: [
                  ["10–20 lbs", "½ – 1 cup/day"],
                  ["20–40 lbs", "1 – 1¾ cups/day"],
                  ["40–60 lbs", "1¾ – 2½ cups/day"],
                  ["60–80 lbs", "2½ – 3¼ cups/day"],
                  ["80–100 lbs", "3¼ – 4 cups/day"],
                  ["100+ lbs", "4 cups + ¼ per 10 lbs"],
                ],
              },
            ].map((table) => (
              <div key={table.title}>
                <h3 className="font-serif text-lg font-bold text-[#f5f0e8] mb-4">{table.title}</h3>
                <div className="overflow-hidden border border-[#2e2820] rounded-lg">
                  <table className="w-full text-sm" aria-label={table.title}>
                    <thead>
                      <tr className="bg-[#1a1712] border-b border-[#2e2820]">
                        <th className="px-4 py-3 text-left text-[#9a8870] text-xs uppercase tracking-wider">Weight</th>
                        <th className="px-4 py-3 text-left text-[#9a8870] text-xs uppercase tracking-wider">Per Day</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map(([w, a], i) => (
                        <tr key={w} className={`border-b border-[#2e2820] last:border-0 ${i % 2 === 0 ? "bg-[#0f0e0c]" : "bg-[#1a1712]"}`}>
                          <td className="px-4 py-3 text-[#f5f0e8]/80">{w}</td>
                          <td className="px-4 py-3 text-[#e8a44a] font-semibold">{a}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 md:py-16 px-4 md:px-6 bg-[#1a1712] border-t border-[#2e2820]" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="font-serif text-3xl md:text-4xl font-bold text-[#f5f0e8] mb-10">
            Frequently Asked Questions
          </h2>
          <FeedingGuideFAQ faqs={faqs} />
          <div className="mt-10 p-6 bg-[#0f0e0c] border border-[#2e2820] rounded-lg">
            <p className="text-[#f5f0e8]/70 text-sm">
              Have a question not answered here?{" "}
              <Link href="/contact" className="text-[#c85a00] hover:text-[#e8a44a] transition-colors font-semibold">
                Contact us directly
              </Link>
              {" "}or call{" "}
              <a href="tel:+12549393957" className="text-[#c85a00] hover:text-[#e8a44a] transition-colors font-semibold">
                (254) 939-3957
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
