import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story — Texas-Made Dog Food from Bell County | Outlaw Feed",
  description:
    "Outlaw Feed was founded in Bell County, Texas to solve a real problem: commercial dog food full of fillers failing working and hunting dogs. Read how we built a better formula.",
  alternates: { canonical: "/why-outlaw/our-story" },
};

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-0 md:pt-40 overflow-hidden bg-[#0f0e0c]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 pb-20 md:pb-28">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-[#9a8870]">
              <li><Link href="/" className="hover:text-[#e8a44a] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/why-outlaw" className="hover:text-[#e8a44a] transition-colors">Why Outlaw</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#f5f0e8]">Our Story</li>
            </ol>
          </nav>
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#c85a00] font-semibold mb-4">
            Bell County, Texas
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-[#f5f0e8] mb-8 text-balance">
            Built from a Problem We Lived
          </h1>
        </div>
        <div className="w-full">
          <img
            src="/working-dog-nutrition.png"
            alt="Golden retriever working dog running across a rural field at sunset — Outlaw Feed, made in Texas for dogs that work"
            className="w-full h-72 md:h-96 object-cover"
            fetchPriority="high"
            decoding="async"
            width={1400}
            height={384}
          />
        </div>
      </section>

      {/* Story body */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-[#0f0e0c]" aria-labelledby="story-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="story-heading" className="sr-only">Our founding story</h2>
          <div className="prose-custom flex flex-col gap-6">
            {[
              "Outlaw Feed started the same way most good ideas do — with frustration. Working in Bell County, surrounded by ranchers, hunters, and livestock farmers who relied on their dogs every single day, we kept running into the same problem: the dog food on store shelves was not built for dogs that work.",
              "Bags full of corn, wheat, and soy. Vague ingredient labels with by-products and mystery meal. Premium-priced products that delivered budget-quality nutrition while looking good in a display rack. Working dog owners deserve better than that, and so do their dogs.",
              "We spent time building a formula that started with one rule: every ingredient must earn its place. Real chicken. Real chicken meal for concentrated protein. Brown rice and oatmeal — whole food carbohydrates with real fiber. No corn. No wheat. No soy. Full stop.",
              "After developing and testing formulas with working dogs across Central Texas — bird dogs, cattle dogs, ranch hounds — we launched Outlaw Feed out of Bell County. We manufacture here. We sell here. We stand behind every bag.",
              "The name is not accidental. Outlaw Feed is a rejection of the commercial dog food industry's standard playbook: hide the bad ingredients, market the bag, and hope the consumer does not read the label. We want you to read the label. We want you to ask questions. We want you to hold us to the same standard we hold ourselves.",
              "If your dog works for a living, Outlaw Feed is the food they have earned.",
            ].map((para, i) => (
              <p key={i} className="text-[#f5f0e8]/75 text-base md:text-lg leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-[#1a1712] border-y border-[#2e2820]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#f5f0e8] mb-10 text-center">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Transparency", desc: "Every ingredient named. Every nutrient disclosed. No marketing language to obscure bad decisions." },
              { label: "Accountability", desc: "Made in Bell County, Texas. We know exactly who makes our food, how it is made, and what goes in it." },
              { label: "Performance", desc: "Built to fuel dogs that work — not pets that commute. Real nutrition for real demands." },
            ].map((v) => (
              <div key={v.label} className="p-8 bg-[#0f0e0c] border border-[#2e2820] rounded-lg text-center">
                <h3 className="font-serif text-xl font-bold text-[#e8a44a] mb-3">{v.label}</h3>
                <p className="text-[#9a8870] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-[#0f0e0c]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-[#f5f0e8] mb-4">
            Ready to Try Outlaw Feed?
          </h2>
          <p className="text-[#9a8870] mb-8">Find a retailer near you or contact us directly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/where-to-buy" className="px-8 py-4 bg-[#c85a00] text-white text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#a84800] transition-colors">
              Find a Store
            </Link>
            <Link href="/why-outlaw/ingredients" className="px-8 py-4 border border-[#2e2820] text-[#f5f0e8]/70 text-sm font-semibold uppercase tracking-wider rounded hover:border-[#c85a00] hover:text-[#c85a00] transition-colors">
              See the Ingredients
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
