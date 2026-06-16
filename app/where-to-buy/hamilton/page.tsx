import type { Metadata } from "next";
import CityPage from "@/components/city-page";

export const metadata: Metadata = {
  title: "Dog Food in Hamilton TX — Hamilton County | Outlaw Feed",
  description:
    "Outlaw Feed working dog food is available near Hamilton, TX. No corn, wheat, or soy. Made in Texas for ranch dogs, hunting dogs, and livestock working dogs in Hamilton County.",
  alternates: { canonical: "/where-to-buy/hamilton" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "/where-to-buy/hamilton#webpage",
  name: "Dog Food in Hamilton TX — Outlaw Feed",
  description:
    "Find Outlaw Feed near Hamilton, TX. Texas-made high-protein dog food with no corn, wheat, or soy. Built for Hamilton County working ranch dogs and hunting dogs.",
  url: "/where-to-buy/hamilton",
};

export default function HamiltonPage() {
  return (
    <CityPage
      city="Hamilton"
      state="Texas"
      county="Hamilton County"
      breadcrumb="Hamilton, TX"
      schema={schema}
      h1="Ranch Dog Food in Hamilton, TX — No Fillers, No Compromises"
      h1Sub="Hamilton County is rugged Central Texas ranch country where working dogs are not pets — they are partners. Outlaw Feed was built for this kind of country, where a dog's daily calorie burn demands real protein from real sources, not filler grain padded to look good on a tag."
      sections={[
        {
          heading: "Where to Find Dog Food Near Hamilton, Texas",
          body: "Outlaw Feed is working its way into local feed and ranch supply stores throughout the Hamilton County area. Hamilton is surrounded by cedar and oak hill country that supports significant deer hunting and ranching operations — and those operations need dogs that can perform. Call (254) 939-3957 to get directed to the nearest retailer currently carrying Outlaw Feed near Hamilton.",
        },
        {
          heading: "Livestock Dog Food for Hamilton County Ranch Operations",
          body: "Great Pyrenees, Anatolian Shepherds, Blue Heelers, and Australian Shepherds working livestock in Hamilton County need a calorie-dense, protein-forward diet to maintain condition through long days. Most commercial dog food brands undercut these animals with corn-forward formulas that spike blood sugar and burn off fast. Outlaw Feed's Gold Formula is engineered with steady fat and protein ratios that support sustained energy, not just a quick spike after the bowl.",
        },
        {
          heading: "Hunting Dog Food for Hamilton County Deer and Hog Country",
          body: "The cedar-covered hills and creek bottoms of Hamilton County are prime whitetail and feral hog habitat, and hunters from across Central Texas work dogs in this terrain every season. A hunting dog going into season underweight or under-conditioned is a liability. Outlaw Feed's Gold Formula at 26% protein and 18% fat is specifically suited to getting dogs to peak condition before the season opens — and keeping them there.",
        },
        {
          heading: "Small Feed Stores Over Big Box: Why Hamilton Matters",
          body: "Big-box pet retail rarely makes it to communities like Hamilton, which means local feed stores are the backbone of how rural dog owners source nutrition. Outlaw Feed is designed to fit that distribution model — manufactured in Central Texas, distributed through independent feed retailers, and priced to compete without sacrificing quality. If your local Hamilton feed store does not yet carry Outlaw, ask them to. We are actively expanding our retail network in Hamilton County.",
        },
      ]}
    />
  );
}
