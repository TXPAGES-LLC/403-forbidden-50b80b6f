import type { Metadata } from "next";
import CityPage from "@/components/city-page";

export const metadata: Metadata = {
  title: "Dog Food in Waco TX — McLennan County | Outlaw Feed",
  description:
    "Find Outlaw Feed dog food in Waco, TX. Texas-made, AAFCO certified, no corn wheat or soy. High-protein formulas for working dogs, hunting dogs, and active breeds in McLennan County.",
  alternates: { canonical: "/where-to-buy/waco" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "/where-to-buy/waco#webpage",
  name: "Dog Food in Waco TX — Outlaw Feed",
  description:
    "Outlaw Feed is available in and around Waco, TX. Texas-made high-protein dog food with no corn, wheat, or soy. Available at local McLennan County feed and ranch supply stores.",
  url: "/where-to-buy/waco",
};

export default function WacoPage() {
  return (
    <CityPage
      city="Waco"
      state="Texas"
      county="McLennan County"
      breadcrumb="Waco, TX"
      schema={schema}
      h1="Dog Food in Waco, TX — Texas-Made, No Corn, No Soy"
      h1Sub="Waco and McLennan County sit at the heart of Central Texas — surrounded by Brazos River bottoms, working cattle operations, and active hunting communities. Outlaw Feed is manufactured just down I-35 in Bell County, making it one of the most locally-sourced dog food options available to Waco-area dog owners who care about what goes into their animal's bowl."
      sections={[
        {
          heading: "Where to Buy Outlaw Feed Dog Food in Waco, Texas",
          body: "Outlaw Feed is stocked at local feed and ranch supply retailers in the Waco and greater McLennan County area. Waco's farm-supply retail base has been a natural fit for Outlaw Feed's independent retail distribution model. Look for the Gold Formula (26/18) and Blue Formula (21/15) at participating stores, or use our full store locator to find current inventory near your zip code.",
        },
        {
          heading: "High-Protein Dog Food for Waco Area Working and Hunting Dogs",
          body: "The Brazos River bottom east of Waco is some of the best squirrel, deer, and duck habitat in Texas — and working dogs in the McLennan County area are put through serious paces during season. Outlaw Feed was built for exactly this use case: a high-protein, high-fat formula that maintains peak body condition through demanding field work. The Gold Formula delivers 26% crude protein and 18% crude fat from real chicken meal, not plant-based protein substitutes.",
        },
        {
          heading: "No Corn, No Wheat, No Soy Dog Food Available in McLennan County",
          body: "Waco-area dog owners have more access to pet food brands than most Central Texas communities — but more options does not mean better options. Most major brands sold in Waco's big-box stores are built on corn and soy as the primary calorie sources, with real meat protein secondary or tertiary in the formulation. Outlaw Feed inverts that model: chicken meal leads, and the ingredient list reads like it belongs on a working animal's tag — not a marketing deck.",
        },
        {
          heading: "Supporting Central Texas Feed Stores, Not National Chains",
          body: "Outlaw Feed is distributed through independently-owned farm supply and feed stores in Waco and surrounding McLennan County — not through national pet retail chains. This is a deliberate decision: it keeps money in local businesses, keeps the distribution chain short, and ensures the retailers selling Outlaw Feed are the kind of people who actually know what is in the bag. If you want to request Outlaw Feed at your Waco-area feed store, or if you have questions about the formulas, call (254) 939-3957 Monday through Friday, 8am to 3pm.",
        },
      ]}
    />
  );
}
