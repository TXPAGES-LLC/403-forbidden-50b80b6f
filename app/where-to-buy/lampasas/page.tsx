import type { Metadata } from "next";
import CityPage from "@/components/city-page";

export const metadata: Metadata = {
  title: "Dog Food in Lampasas TX | Outlaw Feed — Lampasas County Feed Store",
  description:
    "Looking for high-protein dog food in Lampasas, TX? Outlaw Feed is Texas-made with no corn, wheat, or soy. Available at local feed stores in Lampasas County. Call (254) 939-3957.",
  alternates: { canonical: "/where-to-buy/lampasas" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Dog Food in Lampasas TX — Outlaw Feed",
  description:
    "Find Outlaw Feed near Lampasas, TX. Texas-made dog food with no corn, wheat, or soy. High-protein formulas for working, ranch, and hunting dogs in Lampasas County.",
  url: "/where-to-buy/lampasas",
};

export default function LampasasPage() {
  return (
    <CityPage
      city="Lampasas"
      state="Texas"
      county="Lampasas County"
      breadcrumb="Lampasas, TX"
      schema={schema}
      h1="Dog Food in Lampasas, TX — Grain-Free Fillers, Texas-Made Quality"
      h1Sub="Lampasas County sits at the crossroads of the Hill Country and the Central Texas plains — home to cattle operations, hunting leases, and dog owners who demand more than a brand name on a bag. Outlaw Feed delivers the kind of honest nutrition that working ranch dogs in Lampasas County have earned."
      sections={[
        {
          heading: "Where to Buy Outlaw Feed Near Lampasas, Texas",
          body: "Outlaw Feed is available through local feed retailers serving the Lampasas area. As we expand our retail network across the Hill Country region, Lampasas County has been a priority market given the density of working dog owners and hunting operations. Call (254) 939-3957 to get current retailer locations or to ask about direct delivery options in the area.",
        },
        {
          heading: "Dog Food for Lampasas County Hill Country Ranch Dogs",
          body: "The cedar-and-limestone terrain around Lampasas is demanding country for both ranchers and their dogs. Stock dogs in this region routinely cover miles of rough ground managing sheep, goat, and cattle herds. Their nutritional needs are fundamentally different from a sedentary house pet — and most national brand formulas are built with sedentary dogs in mind. Outlaw Feed's Gold Formula provides the protein and fat density these Hill Country working dogs need to perform without losing body condition.",
        },
        {
          heading: "Hunting Dog Nutrition for Lampasas County Deer Season",
          body: "Lampasas County is classic whitetail country, and November through January puts serious demands on deer dogs, retriever breeds, and pointer mixes worked in the area. A dog entering hunting season on poor nutrition cannot perform at the level serious hunters need. Outlaw Feed was developed with hunting-dog conditioning in mind — the Gold Formula's fat profile supports endurance over multi-day hunts, and the clean ingredient list means no digestive drama in the field.",
        },
        {
          heading: "No Corn Dog Food Available at Your Local Lampasas Feed Store",
          body: "Corn and soy are the two most-used plant-based protein substitutes in the commercial dog food industry. They are cheap, they are widely available, and they allow manufacturers to hit a protein percentage on the tag without using actual meat protein. Outlaw Feed refuses this approach. Every formula is built around chicken meal — an actual animal protein — as the first listed ingredient. For Lampasas dog owners, that is a difference you can see in your dog within weeks of switching.",
        },
      ]}
    />
  );
}
