import type { Metadata } from "next";
import Link from "next/link";
import {
  fetchBlogData,
  getPublishedPosts,
  formatDate,
  type BlogPost,
} from "@/lib/blog/source";

export const metadata: Metadata = {
  title: "Blog — Dog Nutrition, Hunting Dog Care & Working Dog Tips",
  description:
    "Outlaw Feed's resource library for working dog owners. Dog nutrition articles, hunting dog care tips, feeding guides, and ranch dog health advice from Bell County, Texas.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "Outlaw Feed Blog — Dog Nutrition & Hunting Dog Tips",
    description:
      "Dog nutrition articles, hunting dog care tips, and working dog feeding guides from Bell County, Texas.",
    url: "/blog",
    siteName: "Outlaw Feed",
    images: [
      {
        url: "https://outlawfeed.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Outlaw Feed Blog — Dog Nutrition and Hunting Dog Tips",
      },
    ],
  },
};

function PostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  const category = post.categories?.[0] ?? post.tags?.[0] ?? "Article";
  const date = formatDate(post.publishAt);

  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#1a1712] border border-[#2e2820] rounded-lg overflow-hidden hover:border-[#c85a00]/50 transition-colors cursor-pointer"
        aria-label={`Read featured article: ${post.title}`}
      >
        <div className="h-64 lg:h-auto overflow-hidden">
          <img
            src={post.heroImageUrl}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            fetchPriority="high"
            decoding="async"
            width={700}
            height={500}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-1 bg-[#c85a00]/20 text-[#c85a00] text-xs font-semibold uppercase tracking-wider rounded">
              Featured
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c85a00]">
              {category}
            </span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e8] mb-4 group-hover:text-[#e8a44a] transition-colors text-balance leading-snug">
            {post.title}
          </h2>
          <p className="text-[#9a8870] text-sm leading-relaxed mb-6">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-[#9a8870] text-xs">
            {post.author && <span>{post.author}</span>}
            <span>{date}</span>
            <span>{post.readingTimeMinutes} min read</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <article>
      <Link
        href={`/blog/${post.slug}`}
        className="group bg-[#0f0e0c] border border-[#2e2820] rounded-lg overflow-hidden hover:border-[#c85a00]/50 transition-colors block cursor-pointer h-full"
        aria-label={`Read: ${post.title}`}
      >
        <div className="h-48 overflow-hidden">
          <img
            src={post.heroImageUrl}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            decoding="async"
            width={700}
            height={192}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-6 flex flex-col h-[calc(100%-192px)]">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c85a00]">
              {category}
            </span>
            <span className="text-[#9a8870] text-xs">{post.readingTimeMinutes} min read</span>
          </div>
          <h3 className="font-serif text-lg font-bold text-[#f5f0e8] mb-2 group-hover:text-[#e8a44a] transition-colors text-balance leading-snug">
            {post.title}
          </h3>
          <p className="text-[#9a8870] text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
          <div className="flex items-center gap-3 text-[#9a8870] text-xs mt-auto">
            {post.author && <span>{post.author}</span>}
            <span>{date}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default async function BlogPage() {
  const data = await fetchBlogData();
  const posts = getPublishedPosts(data.posts);
  const [featured, ...rest] = posts;

  const blogSchema = posts.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": "/blog#blog",
        name: "Outlaw Feed Blog",
        url: "/blog",
        description:
          "Dog nutrition articles, hunting dog care tips, and working dog feeding guides from Outlaw Feed in Bell County, Texas.",
        publisher: { "@type": "Organization", name: "Outlaw Feed", url: "" },
        blogPost: posts.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          url: `/blog/${p.slug}`,
          datePublished: p.publishAt,
          image: p.heroImageUrl,
        })),
      }
    : null;

  return (
    <>
      {blogSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
      )}

      {/* Page header */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20 px-4 md:px-6 bg-[#0f0e0c]">
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

      {/* Content */}
      {posts.length === 0 ? (
        <section className="px-4 md:px-6 py-24 bg-[#0f0e0c] text-center">
          <div className="max-w-xl mx-auto">
            <p className="font-serif text-2xl font-bold text-[#f5f0e8] mb-3">Coming Soon</p>
            <p className="text-[#9a8870] text-sm leading-relaxed">
              Articles are on the way. Check back shortly.
            </p>
          </div>
        </section>
      ) : (
        <>
          {/* Featured post */}
          {featured && (
            <section className="px-4 md:px-6 pb-16 bg-[#0f0e0c]" aria-label="Featured article">
              <div className="max-w-7xl mx-auto">
                <PostCard post={featured} featured />
              </div>
            </section>
          )}

          {/* All posts grid */}
          {rest.length > 0 && (
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-[#0f0e0c] border-t border-[#2e2820]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-[#f5f0e8] mb-4">
            Ready to Make the Switch?
          </h2>
          <p className="text-[#9a8870] text-sm mb-8">
            Find Outlaw Feed at a retailer near you, or contact us for Bell County delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/where-to-buy"
              className="inline-flex items-center justify-center px-8 py-4 min-h-[52px] bg-[#c85a00] text-white font-semibold text-sm uppercase tracking-widest rounded hover:bg-[#a84800] transition-colors"
            >
              Find a Store
            </Link>
            <Link
              href="/products/gold-formula"
              className="inline-flex items-center justify-center px-8 py-4 min-h-[52px] border border-[#2e2820] text-[#f5f0e8]/70 font-semibold text-sm uppercase tracking-widest rounded hover:border-[#c85a00] hover:text-[#c85a00] transition-colors"
            >
              See Our Formulas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
