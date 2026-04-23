import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Dog Nutrition, Hunting Dog Care & Working Dog Tips",
  description:
    "Outlaw Feed's resource library for working dog owners. Dog nutrition articles, hunting dog care tips, feeding guides, and ranch dog health advice from Bell County, Texas.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    slug: "best-dog-food-hunting-dogs",
    title: "Best Dog Food for Hunting Dogs: What to Look For in a Field Formula",
    excerpt:
      "Not all high-protein dog foods deliver what hunting dogs actually need in the field. Learn the key markers of a true hunting dog formula — protein source, fat ratios, and what to avoid.",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=700&q=75",
    imgAlt: "Pointer hunting dog in Texas field — best dog food for hunting dogs",
    date: "April 10, 2025",
    category: "Nutrition",
    readTime: "6 min read",
  },
  {
    slug: "no-corn-wheat-soy-dog-food",
    title: "No Corn, Wheat, or Soy: Why It Matters for Your Dog",
    excerpt:
      "Corn, wheat, and soy are cheap fillers that compromise digestion, coat quality, and long-term health. Here is exactly why Outlaw cuts them out of every formula.",
    img: "https://images.unsplash.com/photo-1597843786411-a7fa8ad44a95?auto=format&fit=crop&w=700&q=75",
    imgAlt: "Real meat ingredients for dog food — no corn wheat or soy dog food Texas",
    date: "March 18, 2025",
    category: "Ingredients",
    readTime: "5 min read",
  },
  {
    slug: "working-dog-nutrition",
    title: "Working Dog Nutrition: Fueling a Ranch Dog Through Demand Season",
    excerpt:
      "During peak work seasons, your ranch dog needs more than maintenance calories. We break down protein, fat ratios, and feeding timing for hardworking dogs.",
    img: "/working-dog-nutrition.png",
    imgAlt: "Golden retriever working dog running across a rural field at sunset — working dog nutrition guide by Outlaw Feed",
    date: "February 22, 2025",
    category: "Working Dogs",
    readTime: "7 min read",
  },
  {
    slug: "hunting-dog-care-tips",
    title: "Hunting Dog Care Tips: Keeping Your Field Dog in Peak Condition Year-Round",
    excerpt:
      "From pre-season conditioning to off-season maintenance, here is how experienced hunters keep their dogs performing at the highest level.",
    img: "https://images.unsplash.com/photo-1601758174493-45d0a4d3e407?auto=format&fit=crop&w=700&q=75",
    imgAlt: "Hunting dog running in field — hunting dog care tips and conditioning",
    date: "January 30, 2025",
    category: "Hunting Dogs",
    readTime: "8 min read",
  },
];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Outlaw Feed Blog",
  url: "/blog",
  description:
    "Dog nutrition articles, hunting dog care tips, and working dog feeding guides from Outlaw Feed in Bell County, Texas.",
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: `/blog/${p.slug}`,
    datePublished: p.date,
    image: p.img,
  })),
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-6 bg-[#0f0e0c]">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-[#9a8870]">
              <li>
                <Link href="/" className="hover:text-[#e8a44a] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#f5f0e8]">Blog</li>
            </ol>
          </nav>
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#c85a00] font-semibold mb-4">
            Resources
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-[#f5f0e8] mb-6 text-balance">
            From the Ranch
          </h1>
          <p className="text-[#f5f0e8]/70 text-lg leading-relaxed max-w-2xl">
            Dog nutrition articles, hunting dog care tips, and working dog feeding advice —
            written for people who take their dogs seriously.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="px-4 md:px-6 pb-16 bg-[#0f0e0c]" aria-label="Featured article">
        <div className="max-w-7xl mx-auto">
          <Link
            href={`/blog/${posts[0].slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#1a1712] border border-[#2e2820] rounded-lg overflow-hidden hover:border-[#c85a00]/50 transition-colors"
            aria-label={`Read featured article: ${posts[0].title}`}
          >
            <div className="h-64 lg:h-auto overflow-hidden">
              <img
                src={posts[0].img}
                alt={posts[0].imgAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                fetchPriority="high"
                decoding="async"
                width={700}
                height={500}
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 bg-[#c85a00]/20 text-[#c85a00] text-xs font-semibold uppercase tracking-wider rounded">
                  Featured
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#c85a00]">
                  {posts[0].category}
                </span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mb-4 group-hover:text-[#e8a44a] transition-colors text-balance leading-snug">
                {posts[0].title}
              </h2>
              <p className="text-[#9a8870] text-sm leading-relaxed mb-6">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-[#9a8870] text-xs">
                <span>{posts[0].date}</span>
                <span>{posts[0].readTime}</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All posts grid */}
      <section
        className="py-12 md:py-16 px-4 md:px-6 bg-[#1a1712] border-t border-[#2e2820]"
        aria-labelledby="all-posts-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="all-posts-heading"
            className="font-serif text-3xl font-bold text-[#f5f0e8] mb-10"
          >
            All Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group bg-[#0f0e0c] border border-[#2e2820] rounded-lg overflow-hidden hover:border-[#c85a00]/50 transition-colors block"
                  aria-label={`Read: ${post.title}`}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.img}
                      alt={post.imgAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                      width={700}
                      height={192}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#c85a00]">
                        {post.category}
                      </span>
                      <span className="text-[#9a8870] text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#f5f0e8] mb-2 group-hover:text-[#e8a44a] transition-colors text-balance leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-[#9a8870] text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <p className="text-[#9a8870] text-xs">{post.date}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-[#0f0e0c] border-t border-[#2e2820]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-[#f5f0e8] mb-4">
            Ready to Make the Switch?
          </h2>
          <p className="text-[#9a8870] text-sm mb-8">
            Find Outlaw Feed at a retailer near you, or contact us for Bell County delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/where-to-buy"
              className="px-8 py-4 bg-[#c85a00] text-white font-semibold text-sm uppercase tracking-widest rounded hover:bg-[#a84800] transition-colors"
            >
              Find a Store
            </Link>
            <Link
              href="/products/gold-formula"
              className="px-8 py-4 border border-[#2e2820] text-[#f5f0e8]/70 font-semibold text-sm uppercase tracking-widest rounded hover:border-[#c85a00] hover:text-[#c85a00] transition-colors"
            >
              See Our Formulas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
