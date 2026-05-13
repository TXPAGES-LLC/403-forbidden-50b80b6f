import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
      {
        userAgent: "GPTBot",
        allow: ["/llms.txt", "/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/llms.txt", "/"],
      },
      {
        userAgent: "Claude-Web",
        allow: ["/llms.txt", "/"],
      },
    ],
    sitemap: "/sitemap.xml",
    host: "",
  };
}
