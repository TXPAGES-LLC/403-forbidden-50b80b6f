import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  fetchBlogData,
  getPublishedPosts,
  formatDate,
} from "@/lib/blog/source";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchBlogData();
  const published = getPublishedPosts(data.posts);
  const post = published.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || post.excerpt;
  const canonical = post.seo?.canonicalUrl || `/blog/${post.slug}`;
  const ogImage = post.seo?.ogImageUrl || post.heroImageUrl;
  const keywords = post.seo?.keywords?.length ? post.seo.keywords : undefined;

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title,
      description,
      url: canonical.startsWith("http") ? canonical : `${canonical}`,
      siteName: "Outlaw Feed",
      publishedTime: post.publishAt,
      modifiedTime: post.updatedAt,
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630, alt: post.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const data = await fetchBlogData();
  const published = getPublishedPosts(data.posts);
  const post = published.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const category = post.categories?.[0] ?? post.tags?.[0] ?? "Article";
  const date = formatDate(post.publishAt);
  const updatedDate = post.updatedAt ? formatDate(post.updatedAt) : null;

  // Related posts: up to 2 others sharing a category or tag, excluding current
  const related = published
    .filter((p) => p.slug !== post.slug)
    .filter(
      (p) =>
        p.categories?.some((c) => post.categories?.includes(c)) ||
        p.tags?.some((t) => post.tags?.includes(t))
    )
    .slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishAt,
    dateModified: post.updatedAt || post.publishAt,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "Outlaw Feed", url: "" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `/blog/${post.slug}`,
    },
    image: post.heroImageUrl,
    url: `/blog/${post.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
      { "@type": "ListItem", position: 3, name: post.title },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="bg-[#0f0e0c]">
        {/* Hero image */}
        <header className="relative pt-16 md:pt-20 overflow-hidden">
          <div className="relative h-72 md:h-96 overflow-hidden">
            <img
              src={post.heroImageUrl}
              alt={post.title}
              className="w-full h-full object-cover object-center"
              fetchPriority="high"
              decoding="async"
              width={1400}
              height={384}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-[#0f0e0c]/30 to-transparent" />
          </div>
        </header>

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-16">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-[#9a8870]">
              <li>
                <Link href="/" className="hover:text-[#e8a44a] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-[#e8a44a] transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#f5f0e8] truncate max-w-[200px]">{post.title}</li>
            </ol>
          </nav>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c85a00]">
              {category}
            </span>
            <span className="text-[#2e2820]" aria-hidden="true">·</span>
            <span className="text-[#9a8870] text-xs">{date}</span>
            {updatedDate && updatedDate !== date && (
              <>
                <span className="text-[#2e2820]" aria-hidden="true">·</span>
                <span className="text-[#9a8870] text-xs">Updated {updatedDate}</span>
              </>
            )}
            <span className="text-[#2e2820]" aria-hidden="true">·</span>
            <span className="text-[#9a8870] text-xs">{post.readingTimeMinutes} min read</span>
            {post.author && (
              <>
                <span className="text-[#2e2820]" aria-hidden="true">·</span>
                <span className="text-[#9a8870] text-xs">{post.author}</span>
              </>
            )}
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#f5f0e8] mb-6 text-balance leading-tight">
            {post.title}
          </h1>

          {/* Excerpt / lede */}
          <p className="text-[#f5f0e8]/70 text-lg leading-relaxed mb-10 border-l-2 border-[#c85a00] pl-5">
            {post.excerpt}
          </p>

          {/* Body content */}
          <div
            className="blog-prose"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2" aria-label="Tags">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#1a1712] border border-[#2e2820] rounded text-xs text-[#9a8870] uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[#2e2820]">
              <h2 className="font-serif text-xl font-bold text-[#f5f0e8] mb-5">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group flex gap-4 p-4 bg-[#1a1712] border border-[#2e2820] rounded-lg hover:border-[#c85a00]/50 transition-colors"
                  >
                    <div className="shrink-0 w-20 h-16 rounded overflow-hidden">
                      <img
                        src={r.heroImageUrl}
                        alt={r.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                        width={80}
                        height={64}
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-[#c85a00] mb-1">
                        {r.categories?.[0] ?? r.tags?.[0] ?? "Article"}
                      </p>
                      <p className="font-serif text-sm font-bold text-[#f5f0e8] group-hover:text-[#e8a44a] transition-colors leading-snug line-clamp-2">
                        {r.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA links */}
          <div className="mt-12 pt-8 border-t border-[#2e2820]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <Link
                href="/products/gold-formula"
                className="p-5 bg-[#1a1712] border border-[#2e2820] rounded-lg hover:border-[#c85a00]/50 transition-colors group"
              >
                <p className="text-xs uppercase tracking-wider text-[#c85a00] mb-1">Product</p>
                <p className="font-serif font-bold text-[#f5f0e8] group-hover:text-[#e8a44a] transition-colors">
                  Gold Formula — 26% Protein
                </p>
                <p className="text-[#9a8870] text-xs mt-1">Built for working and hunting dogs</p>
              </Link>
              <Link
                href="/feeding-guide"
                className="p-5 bg-[#1a1712] border border-[#2e2820] rounded-lg hover:border-[#c85a00]/50 transition-colors group"
              >
                <p className="text-xs uppercase tracking-wider text-[#c85a00] mb-1">Guide</p>
                <p className="font-serif font-bold text-[#f5f0e8] group-hover:text-[#e8a44a] transition-colors">
                  Feeding Guide &amp; FAQ
                </p>
                <p className="text-[#9a8870] text-xs mt-1">How much to feed by weight and activity</p>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link
                href="/blog"
                className="text-sm text-[#9a8870] hover:text-[#e8a44a] transition-colors inline-flex items-center gap-2"
              >
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
              <Link
                href="/where-to-buy"
                className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] bg-[#c85a00] text-white text-sm font-semibold uppercase tracking-wider rounded hover:bg-[#a84800] transition-colors"
              >
                Find a Store
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
