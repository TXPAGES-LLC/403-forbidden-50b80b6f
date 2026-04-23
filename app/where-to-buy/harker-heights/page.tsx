import type { Metadata } from "next";
import CityPage from "@/components/city-page";

export const metadata: Metadata = {
  title: "Dog Food in Harker Heights TX | Outlaw Feed — No Fillers, Real Protein",
  description:
    "Find Outlaw Feed dog food near Harker Heights, TX. Texas-made, AAFCO certified, no corn wheat or soy. High-protein formulas for active and working dogs in Bell County.",
  alternates: { canonical: "/where-to-buy/harker-heights" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Dog Food in Harker Heights TX — Outlaw Feed",
  description:
    "Outlaw Feed is available near Harker Heights, TX. No corn, wheat, or soy. Real meat first ingredient. Made in Bell County, Texas for working and active dogs.",
  url: "/where-to-buy/harker-heights",
};

export default function HarkerHeightsPage() {
  return (
    <CityPage
      city="Harker Heights"
      state="Texas"
      county="Bell County"
      breadcrumb="Harker Heights, TX"
      schema={schema}
      h1="Dog Food Near Harker Heights, TX — Real Ingredients for Active Dogs"
      h1Sub="Harker Heights sits on the western edge of Bell County, home to military families, veteran dog handlers, and serious working dog owners who do not settle for second-rate nutrition. Outlaw Feed was built for exactly that crowd — no fillers, no apologies, made right here in Central Texas."
      sections={[
        {
          heading: "Find Outlaw Feed Near Harker Heights, Texas",
          body: "Outlaw Feed is available at local farm supply and feed stores serving the Harker Heights area, including retailers just minutes from the Highway 190 corridor. Pick up the Gold Formula (26/18) for high-drive working dogs or the Blue Formula (21/15) for active adults that need quality maintenance nutrition without the premium price of boutique brands.",
        },
        {
          heading: "No Corn, No Wheat, No Soy Dog Food in Bell County",
          body: "Many dogs near Harker Heights — particularly working breeds, retrievers, and Belgian Malinois common in military handler households — are sensitive to the fillers packed into big-box brand kibble. Outlaw Feed removes corn, wheat, and soy entirely. What is left is a clean, digestible diet built around real chicken meal, whole grains, and essential fatty acids that support coat condition, joint health, and sustained energy output.",
        },
        {
          heading: "Texas-Made Dog Food Trusted by Working Dog Handlers",
          body: "From military working dog handlers transitioning out of Fort Hood to ranchers east of Harker Heights running cattle dogs daily, Outlaw Feed has earned a reputation in this part of Bell County through performance, not packaging. Dogs on Outlaw hold weight through deer season, recover faster from hard days, and show better coat condition than on leading national brands — without a boutique price tag.",
        },
        {
          heading: "High-Protein Dog Food for Harker Heights and the Killeen Metro",
          body: "The Harker Heights and Killeen area is one of the densest concentrations of working dog owners in Central Texas. Outlaw Feed formulas are designed to meet the caloric demands of dogs that are actually working — not just living in a backyard. The Gold Formula at 26% protein and 18% fat delivers the energy density serious dog owners need. Call (254) 393-3957 to confirm local availability.",
        },
      ]}
    />
  );
}
