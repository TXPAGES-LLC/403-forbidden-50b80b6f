import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ingredients — No Corn, Wheat, or Soy Texas Dog Food | Outlaw Feed",
  description:
    "Outlaw Feed uses real named meat, whole grains, and no corn, wheat, or soy fillers. See exactly what is in our Gold and Blue formulas and why every ingredient earns its place.",
  alternates: { canonical: "/why-outlaw/ingredients" },
};

const principles = [
  {
    label: "Real Named Meats",
    desc: "We list chicken, not 'poultry'. Chicken meal, not 'meat by-product meal'. Every protein source is named, traceable, and accountable.",
  },
  {
    label: "No Corn, Wheat, or Soy",
    desc: "These three ingredients account for more digestive issues, allergen reactions, and poor coat conditions than any other fillers in commercial dog food. We cut them all.",
  },
  {
    label: "No Artificial Preservatives",
    desc: "We use mixed tocopherols (natural vitamin E) to preserve freshness — not BHA, BHT, or ethoxyquin.",
  },
  {
    label: "Whole Food Carbohydrates",
    desc: "Brown rice and oatmeal provide slow-release complex carbohydrates with fiber and micronutrients that cheap corn and wheat simply cannot match.",
  },
  {
    label: "Functional Fats",
    desc: "Chicken fat and flaxseed deliver omega-3 and omega-6 fatty acids for coat health, joint lubrication, and dense caloric fuel for working dogs.",
  },
  {
    label: "Chelated Minerals",
    desc: "Zinc, iron, copper, and manganese proteinate are chelated (bound to amino acids) for dramatically higher bioavailability than inorganic mineral salts.",
  },
];

const neverUse = [
  "Corn",
  "Wheat",
  "Soy",
  "Corn syrup or sweeteners",
  "Artificial colors or dyes",
  "BHA / BHT / Ethoxyquin",
  "Generic 'meat by-product meal'",
  "'Animal digest' or unnamed animal sources",
  "Chicken by-product meal",
  "Artificial flavors",
];

export default function IngredientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-20 lg:pt-28 lg:pb-28 px-4 md:px-6 bg-[#0f0e0c]">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-[#9a8870]">
              <li><Link href="/" className="hover:text-[#e8a44a] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/why-outlaw" className="hover:text-[#e8a44a] transition-colors">Why Outlaw</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#f5f0e8]">Ingredients</li>
            </ol>
          </nav>
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#c85a00] font-semibold mb-4">
            What Goes In
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-[#f5f0e8] mb-6 text-balance">
            Ingredients Worth Reading
          </h1>
          <p className="text-[#f5f0e8]/70 text-lg leading-relaxed max-w-2xl">
            Every ingredient in Outlaw Feed is there for a reason. Here is exactly what we use, why we use it, and what we categorically refuse to put in our formulas.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-[#1a1712] border-y border-[#2e2820]" aria-labelledby="principles-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="principles-heading" className="font-serif text-3xl md:text-4xl font-bold text-[#f5f0e8] mb-10">
            Our Ingredient Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {principles.map((p) => (
              <div key={p.label} className="flex items-start gap-4 p-6 bg-[#0f0e0c] border border-[#2e2820] rounded-lg">
                <span className="text-[#c85a00] shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#f5f0e8] mb-1">{p.label}</h3>
                  <p className="text-[#9a8870] text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Never Use */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-[#0f0e0c]" aria-labelledby="never-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="never-heading" className="font-serif text-3xl md:text-4xl font-bold text-[#f5f0e8] mb-4">
            What We Never Use
          </h2>
          <p className="text-[#9a8870] mb-8 text-sm leading-relaxed">
            These are not ingredients we limit or minimize. They are ingredients we refuse to use — period. Every bag of Outlaw Feed is free of all of the following:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {neverUse.map((item) => (
              <li key={item} className="flex items-center gap-3 p-4 bg-[#1a1712] border border-[#2e2820] rounded-lg">
                <span className="text-red-500 shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </span>
                <span className="text-[#f5f0e8]/80 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Image + CTA */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-[#1a1712] border-t border-[#2e2820]">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src="/dog-food-that-dogs-love.png"
            alt="English bulldog eating Outlaw Feed kibble from a bowl — real ingredients dogs love, no corn wheat or soy"
            className="w-full rounded-lg object-cover aspect-video mb-10"
            loading="lazy"
            decoding="async"
            width={900}
            height={506}
          />
          <h2 className="font-serif text-3xl font-bold text-[#f5f0e8] mb-4">
            See the Full Ingredient Lists
          </h2>
          <p className="text-[#9a8870] mb-8">View the complete ingredient and analysis panels for each Outlaw Feed formula.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products/gold-formula" className="px-7 py-4 bg-[#c85a00] text-white text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#a84800] transition-colors">
              Gold Formula
            </Link>
            <Link href="/products/blue-formula" className="px-7 py-4 border border-[#2e2820] text-[#f5f0e8]/70 text-sm font-semibold uppercase tracking-wider rounded hover:border-[#c85a00] hover:text-[#c85a00] transition-colors">
              Blue Formula
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
