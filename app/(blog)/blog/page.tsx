import type { Metadata } from "next";
import Link from "next/link";
import { fetchBlogData, getPublishedPosts, formatDate } from "@/lib/blog/source";

export const metadata: Metadata = {
  title: "Blog — Working & Hunting Dog Nutrition",
  description:
    "Articles on working dog nutrition, hunting dog feeding, and Central Texas dog food from Outlaw Feed. No corn, wheat, or soy.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Outlaw Feed Blog — Working & Hunting Dog Nutrition",
    description:
      "Articles on working dog nutrition, hunting dog feeding, and Central Texas dog food from Outlaw Feed.",
    url: "/blog",
    type: "website",
  },
};

export default async function BlogIndexPage() {
  const { posts } = await fetchBlogData();
  const published = getPublishedPosts(posts);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-14 md:pb-20 px-4 md:px-6 bg-[#0f0e0c] border-b border-[#2e2820]">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#c85a00] font-semibold mb-4">
            From the Ranch
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5f0e8] text-balance max-w-2xl mb-4">
            The Outlaw Feed Blog
          </h1>
          <p className="text-[#9a8870] text-lg leading-relaxed max-w-2xl">
            Dog nutrition articles, hunting dog care tips, and working dog
            feeding advice — written for people who take their dogs seriously.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="px-4 md:px-6 py-14 md:py-20 bg-[#0f0e0c]">
        <div className="max-w-7xl mx-auto">
          {published.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="font-serif text-2xl font-bold text-[#f5f0e8] mb-3">
                No posts yet
              </p>
              <p className="text-[#9a8870] text-base max-w-sm">
                Check back soon — articles are coming.
              </p>
            </div>
          ) : (
            <ul
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              role="list"
            >
              {published.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-[#1a1712] border border-[#2e2820] rounded-lg overflow-hidden hover:border-[#c85a00]/50 transition-colors cursor-pointer"
                    aria-label={`Read: ${post.title}`}
                  >
                    {/* Hero image */}
                    {post.heroImageUrl && (
                      <div className="h-48 overflow-hidden bg-[#2e2820]">
                        <img
                          src={post.heroImageUrl}
                          alt={post.title}
                          width={600}
                          height={192}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    )}

                    {/* Card body */}
                    <div className="p-6 flex flex-col gap-3">
                      {/* Category + date */}
                      <div className="flex items-center gap-3">
                        {post.categories?.[0] && (
                          <span className="text-xs font-semibold uppercase tracking-wider text-[#c85a00]">
                            {post.categories[0]}
                          </span>
                        )}
                        <span className="text-[#9a8870] text-xs">
                          {formatDate(post.publishAt)}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-serif text-lg font-bold text-[#f5f0e8] group-hover:text-[#e8a44a] transition-colors text-balance leading-snug">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-[#9a8870] text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta row */}
                      <div className="flex items-center justify-between pt-2 border-t border-[#2e2820] mt-auto">
                        <span className="text-xs text-[#9a8870]">
                          {post.author}
                        </span>
                        <span className="text-xs text-[#9a8870]">
                          {post.readingTimeMinutes} min read
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 md:px-6 py-14 bg-[#1a1712] border-t border-[#2e2820]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#c85a00] font-semibold mb-2">
              Ready to switch?
            </p>
            <p className="font-serif text-2xl font-bold text-[#f5f0e8]">
              See the formulas built for working dogs.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/products/gold-formula"
              className="px-5 py-2.5 text-sm font-semibold uppercase tracking-wider rounded bg-[#c85a00] text-white hover:bg-[#a84800] transition-colors whitespace-nowrap"
            >
              Gold Formula
            </Link>
            <Link
              href="/products/blue-formula"
              className="px-5 py-2.5 text-sm font-semibold uppercase tracking-wider rounded border border-[#2e2820] text-[#f5f0e8]/70 hover:border-[#c85a00] hover:text-[#c85a00] transition-colors whitespace-nowrap"
            >
              Blue Formula
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
