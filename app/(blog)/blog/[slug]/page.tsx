import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchBlogData, getPublishedPosts, formatDate } from "@/lib/blog/source";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { posts } = await fetchBlogData();
  const published = getPublishedPosts(posts);
  const post = published.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || post.excerpt;
  const canonical = post.seo?.canonicalUrl || `/blog/${slug}`;
  const ogImage = post.seo?.ogImageUrl || post.heroImageUrl;

  return {
    title,
    description,
    alternates: { canonical },
    keywords: post.seo?.keywords?.length ? post.seo.keywords : undefined,
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      publishedTime: post.publishAt,
      modifiedTime: post.updatedAt,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: post.title }] : undefined,
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
  const { posts } = await fetchBlogData();
  const published = getPublishedPosts(posts);
  const post = published.find((p) => p.slug === slug);

  if (!post) notFound();

  // JSON-LD for the article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    image: post.heroImageUrl || post.seo?.ogImageUrl,
    datePublished: post.publishAt,
    dateModified: post.updatedAt || post.publishAt,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Outlaw Feed",
      url: "",
    },
    url: `/blog/${post.slug}`,
    wordCount: post.wordCount,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <div className="pt-24 md:pt-32 bg-[#0f0e0c]">
        {post.heroImageUrl && (
          <div className="w-full max-h-[480px] overflow-hidden">
            <img
              src={post.heroImageUrl}
              alt={post.title}
              width={1200}
              height={480}
              className="w-full h-[300px] md:h-[420px] object-cover"
              fetchPriority="high"
            />
          </div>
        )}
      </div>

      {/* Article */}
      <article className="bg-[#0f0e0c] px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-[#9a8870]" role="list">
              <li>
                <Link href="/" className="hover:text-[#c85a00] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#2e2820]">/</li>
              <li>
                <Link href="/blog" className="hover:text-[#c85a00] transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#2e2820]">/</li>
              <li className="text-[#f5f0e8]/50 truncate max-w-[200px]" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            {post.categories?.map((cat) => (
              <span
                key={cat}
                className="text-xs font-semibold uppercase tracking-wider text-[#c85a00]"
              >
                {cat}
              </span>
            ))}
            <span className="text-[#9a8870] text-xs">{formatDate(post.publishAt)}</span>
            <span className="text-[#9a8870] text-xs">&middot;</span>
            <span className="text-[#9a8870] text-xs">{post.readingTimeMinutes} min read</span>
            <span className="text-[#9a8870] text-xs">&middot;</span>
            <span className="text-[#9a8870] text-xs">By {post.author}</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#f5f0e8] text-balance leading-tight mb-6">
            {post.title}
          </h1>

          {/* Excerpt lead */}
          <p className="text-[#9a8870] text-lg leading-relaxed mb-10 border-l-2 border-[#c85a00] pl-5 italic">
            {post.excerpt}
          </p>

          {/* Divider */}
          <hr className="border-[#2e2820] mb-10" />

          {/* Body */}
          <div
            className="blog-prose"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[#2e2820] flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-[#1a1712] border border-[#2e2820] rounded-full text-[#9a8870]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>

      {/* Back to blog + CTA */}
      <section className="bg-[#1a1712] border-t border-[#2e2820] px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#9a8870] hover:text-[#c85a00] transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Blog
          </Link>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/products/gold-formula"
              className="px-5 py-2.5 text-sm font-semibold uppercase tracking-wider rounded bg-[#c85a00] text-white hover:bg-[#a84800] transition-colors whitespace-nowrap"
            >
              Gold Formula
            </Link>
            <Link
              href="/where-to-buy"
              className="px-5 py-2.5 text-sm font-semibold uppercase tracking-wider rounded border border-[#2e2820] text-[#f5f0e8]/70 hover:border-[#c85a00] hover:text-[#c85a00] transition-colors whitespace-nowrap"
            >
              Find a Store
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
