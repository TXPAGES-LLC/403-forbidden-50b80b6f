import type { Metadata } from "next";
import CityPage from "@/components/city-page";

export const metadata: Metadata = {
  title: "Dog Food in Hillsboro TX — Hill County | Outlaw Feed",
  description:
    "Find Outlaw Feed working dog food near Hillsboro, TX in Hill County. No corn, wheat, or soy. Texas-made, AAFCO certified high-protein kibble for ranch and hunting dogs.",
  alternates: { canonical: "/where-to-buy/hillsboro" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "/where-to-buy/hillsboro#webpage",
  name: "Dog Food in Hillsboro TX — Outlaw Feed",
  description:
    "Outlaw Feed is available near Hillsboro, TX. Texas-made working dog food with no corn, wheat, or soy. Real meat first ingredient for Hill County ranch and hunting dogs.",
  url: "/where-to-buy/hillsboro",
};

export default function HillsboroPage() {
  return (
    <CityPage
      city="Hillsboro"
      state="Texas"
      county="Hill County"
      breadcrumb="Hillsboro, TX"
      schema={schema}
      h1="Dog Food in Hillsboro, TX — Real Meat First, Made in Texas"
      h1Sub="Hill County is classic North-Central Texas ranch country, and Hillsboro dog owners know the difference between a working dog diet and grocery store filler feed. Outlaw Feed brings a Central Texas-manufactured option to the area — no corn, no wheat, no soy, and a guaranteed analysis that tells the full story."
      sections={[
        {
          heading: "Where to Buy Outlaw Feed Near Hillsboro, Texas",
          body: "Outlaw Feed is distributed to local farm and feed retail partners in the Hillsboro and Hill County area. Hillsboro sits along the I-35 corridor between Waco and Dallas, making it a natural distribution point for Central Texas-made products. Ask your local feed store about stocking Outlaw Feed, or call (254) 939-3957 to find the current retailer closest to you.",
        },
        {
          heading: "High-Protein Kibble for Hill County Ranch and Farm Dogs",
          body: "Hill County farming operations depend on dogs — whether that is stock dogs running cattle on black-land prairie pastures, barn dogs, or hunting dogs worked on the surrounding deer leases. These animals burn real calories doing real work. Outlaw Feed's Gold Formula delivers 26% protein and 18% fat from real chicken meal — not protein equivalents from plant-based fillers that do not metabolize the same way in a working canine.",
        },
        {
          heading: "Switching From a National Brand? Here Is What to Expect",
          body: "Hillsboro-area dog owners who have switched from major chain brands to Outlaw Feed commonly report cleaner stools, less shedding, and better coat condition within the first two to three bags. This is typical when removing corn and soy from a dog's diet — digestibility improves and you often see a reduction in skin irritation. Outlaw Feed's transition recommendation is to blend over 7 to 10 days to avoid digestive disruption during the switch.",
        },
        {
          heading: "Texas-Made Dog Food, Not a Brand Made Somewhere Else",
          body: "There is no shortage of dog food brands claiming Texas values while manufacturing in facilities out of state. Outlaw Feed is actually manufactured in Central Texas, with a sourcing and production chain that gives local retailers and consumers real accountability. For Hillsboro area dog owners who care about where their pet's food comes from, that distinction matters. View the feeding guide or call for more information on getting Outlaw Feed to Hill County.",
        },
      ]}
    />
  );
}
