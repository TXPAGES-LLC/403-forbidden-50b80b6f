import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dog Feeding Guide — Gold & Blue Formula Charts | Outlaw Feed",
  description:
    "How much to feed your dog with Outlaw Feed Gold or Blue Formula. Feeding charts by weight, transition tips, and FAQ for working and hunting dogs.",
  alternates: { canonical: "/feeding-guide" },
  openGraph: {
    type: "website",
    title: "Dog Feeding Guide — Gold & Blue Formula Charts | Outlaw Feed",
    description:
      "How much to feed your dog with Outlaw Feed. Weight-based feeding charts for Gold (26% protein) and Blue (21% protein) formulas. Transition tips included.",
    url: "/feeding-guide",
    siteName: "Outlaw Feed",
    images: [
      {
        url: "https://outlawfeed.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Outlaw Feed dog feeding guide — Gold and Blue formula feeding charts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dog Feeding Guide — Gold & Blue Formula Charts",
    description: "Weight-based feeding charts for Outlaw Feed Gold and Blue formulas.",
    images: ["https://outlawfeed.com/opengraph-image.png"],
  },
};

export default function FeedingGuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
