export const BLOG_DATA_URL =
  "https://raw.githubusercontent.com/TXPAGES-LLC/403-forbidden-50b80b6f/main/lib/blog/posts.json";

export interface BlogSeo {
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  ogImageUrl?: string;
  keywords?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  contentHtml: string;
  heroImageUrl: string;
  author: string;
  tags: string[];
  categories: string[];
  publishAt: string;
  updatedAt?: string;
  readingTimeMinutes: number;
  wordCount?: number;
  seo: BlogSeo;
}

export interface BlogCollection {
  title: string;
  navLabel: string;
  basePath: string;
}

export interface BlogData {
  collection: BlogCollection;
  posts: BlogPost[];
}

export async function fetchBlogData(): Promise<BlogData> {
  try {
    const res = await fetch(BLOG_DATA_URL, { cache: "no-store" });
    if (!res.ok) {
      return { collection: { title: "Blog", navLabel: "Blog", basePath: "/blog" }, posts: [] };
    }
    const data: BlogData = await res.json();
    return data;
  } catch {
    return { collection: { title: "Blog", navLabel: "Blog", basePath: "/blog" }, posts: [] };
  }
}

/** Returns only published posts (publishAt <= now), sorted newest first. */
export function getPublishedPosts(posts: BlogPost[]): BlogPost[] {
  const now = Date.now();
  return posts
    .filter((p) => new Date(p.publishAt).getTime() <= now)
    .sort((a, b) => new Date(b.publishAt).getTime() - new Date(a.publishAt).getTime());
}

/** Format an ISO date string to a human-readable date. */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
