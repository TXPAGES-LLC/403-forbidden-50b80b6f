import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dog Feeding Guide — Gold & Blue Formula Charts | Outlaw Feed",
  description:
    "How much to feed your dog with Outlaw Feed Gold or Blue Formula. Feeding charts by weight, transition tips, and FAQ for working and hunting dogs.",
  alternates: { canonical: "/feeding-guide" },
};

export default function FeedingGuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
