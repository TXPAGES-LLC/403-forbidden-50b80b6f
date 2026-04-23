import type { Metadata } from "next";
import CityPage from "@/components/city-page";

export const metadata: Metadata = {
  title: "Dog Food in Belton TX | Outlaw Feed — Bell County Feed Store",
  description:
    "Looking for high-protein dog food in Belton, TX? Outlaw Feed is Texas-made with no corn, wheat, or soy. Available at local feed stores in Bell County. Call (254) 393-3957.",
  alternates: { canonical: "/where-to-buy/belton" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Dog Food in Belton TX — Outlaw Feed",
  description:
    "Find Outlaw Feed Texas-made dog food at local feed stores in Belton, TX. No corn, wheat, or soy. High-protein formulas for working and hunting dogs in Bell County.",
  url: "/where-to-buy/belton",
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/body/main/section[1]/div/h1"] },
};

export default function BeltonPage() {
  return (
    <CityPage
      city="Belton"
      state="Texas"
      county="Bell County"
      breadcrumb="Belton, TX"
      schema={schema}
      h1="Dog Food in Belton, TX — No Corn, No Wheat, No Soy"
      h1Sub="Belton ranch owners and working dog handlers have been feeding Outlaw Feed for years. If you are tired of mystery-meal kibble and want a bag you can actually read, you are in the right place. Manufactured in Bell County — not shipped in from a plant two states over."
      sections={[
        {
          heading: "Where to Buy Outlaw Feed in Belton, Texas",
          body: "Outlaw Feed is stocked at select farm supply and feed retailers in and around Belton, TX. These are the same small, independently-owned stores that Bell County ranchers have trusted for generations. Stop in and ask for Outlaw Feed by name — the Gold Formula for working dogs at 26% protein/18% fat, or the Blue Formula for maintenance and active adults at 21% protein/15% fat.",
        },
        {
          heading: "The Right Dog Food for Bell County Working Dogs",
          body: "Bell County dogs work. They herd cattle outside Belton, run deer leases in the river bottom, and guard livestock on family ranches. Dogs putting in that kind of daily effort need a diet built around real protein — not corn gluten, soybean meal, or wheat middlings stuffed in to hit a number on the tag. Outlaw Feed uses real chicken meal as the first ingredient, backed by a guaranteed analysis you can verify yourself.",
        },
        {
          heading: "Why Belton Feed Store Owners Carry Outlaw",
          body: "Local retailers in Belton stock Outlaw Feed because their customers keep coming back for it. Word travels fast in a small Texas town: when a hunting dog gains back condition weight after a season, or a cattle dog stops scratching from a corn allergy, people talk. Outlaw Feed earns shelf space at independent stores by delivering results — not by outspending national brands on marketing.",
        },
        {
          heading: "AAFCO Certified Dog Food Made in Central Texas",
          body: "Outlaw Feed meets AAFCO nutritional standards for all life stages. Every bag is manufactured under controlled conditions in Central Texas, giving you the traceability you deserve when you are feeding an animal that works for you. Bell County delivery is available — call (254) 393-3957 Monday through Friday between 8am and 3pm to arrange a schedule.",
        },
      ]}
    />
  );
}
