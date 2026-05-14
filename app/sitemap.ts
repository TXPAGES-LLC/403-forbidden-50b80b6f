import { MetadataRoute } from "next";

// Simple sitemap - add additional routes as needed
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "/",
      lastModified: new Date(),
    },
  ];
}
