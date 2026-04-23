import type { Metadata } from "next";
import CityPage from "@/components/city-page";

export const metadata: Metadata = {
  title: "Dog Food in Copperas Cove TX | Outlaw Feed — No Fillers, Made in Texas",
  description:
    "Outlaw Feed is high-protein dog food available near Copperas Cove, TX. No corn, wheat, or soy. Texas-made, AAFCO certified for working dogs, hunting dogs, and active breeds.",
  alternates: { canonical: "/where-to-buy/copperas-cove" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Dog Food in Copperas Cove TX — Outlaw Feed",
  description:
    "Find Outlaw Feed near Copperas Cove, TX. High-protein Texas-made dog food with no corn, wheat, or soy. Available at local feed stores in Coryell and Bell County.",
  url: "/where-to-buy/copperas-cove",
};

export default function CopperasCovePage() {
  return (
    <CityPage
      city="Copperas Cove"
      state="Texas"
      county="Coryell County"
      breadcrumb="Copperas Cove, TX"
      schema={schema}
      h1="Dog Food in Copperas Cove, TX — High Protein, No Junk Fillers"
      h1Sub="Copperas Cove dog owners — whether you are running a cattle operation west of town, training a bird dog for South Texas season, or simply done tolerating poor ingredients in your dog's bowl — Outlaw Feed was made for you. Texas-manufactured, AAFCO certified, and built on the principle that real meat belongs first on the ingredient list."
      sections={[
        {
          heading: "Where to Find Outlaw Feed Dog Food Near Copperas Cove",
          body: "Outlaw Feed is stocked at local feed retailers serving the Copperas Cove and Coryell County area. Located at the junction of Coryell and Bell counties, Copperas Cove sits within easy reach of multiple Outlaw Feed retail partners. Check our store locator for the nearest location, or call (254) 393-3957 to find out which retailer currently has your preferred formula in stock.",
        },
        {
          heading: "Active and Working Dog Nutrition Near Fort Hood",
          body: "Copperas Cove's proximity to Fort Hood means this community has a higher-than-average concentration of disciplined dog owners — handlers, trainers, and veterans who understand what peak physical conditioning actually looks like. Outlaw Feed's Gold Formula is built to fuel that standard: 26% crude protein, 18% crude fat, no corn or soy padding the numbers. Real nutrition for dogs that actually work.",
        },
        {
          heading: "No Corn, No Wheat Dog Food for Dogs with Dietary Sensitivities",
          body: "Grain sensitivities are more common than most dog owners realize, and corn and soy are among the most frequent offenders. If your dog has been scratching, showing hot spots, or struggling with digestive issues, the food is often the first thing to examine. Outlaw Feed removes corn, wheat, and soy entirely — not because it is a trend, but because those ingredients have no place in a working animal's diet. Owners near Copperas Cove who have made the switch consistently report improvements in coat quality and digestion within the first bags.",
        },
        {
          heading: "AAFCO Certified Texas Dog Food for All Life Stages",
          body: "Outlaw Feed meets AAFCO nutritional profiles for all life stages, which means the same bag that fuels your adult working dog can also support your younger stock. Both the Gold and Blue Formulas carry full AAFCO compliance, giving Copperas Cove dog owners confidence that they are feeding a properly balanced diet — not guessing at homemade alternatives. See the full feeding guide to calculate the right amount by weight and activity level.",
        },
      ]}
    />
  );
}
