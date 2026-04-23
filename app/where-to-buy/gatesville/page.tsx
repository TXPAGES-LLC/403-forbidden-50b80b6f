import type { Metadata } from "next";
import CityPage from "@/components/city-page";

export const metadata: Metadata = {
  title: "Dog Food in Gatesville TX | Outlaw Feed — Coryell County Feed Store",
  description:
    "Outlaw Feed is Texas-made working dog food available near Gatesville, TX in Coryell County. No corn, wheat, or soy. Real meat first ingredient. Call (254) 393-3957.",
  alternates: { canonical: "/where-to-buy/gatesville" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Dog Food in Gatesville TX — Outlaw Feed",
  description:
    "Find Outlaw Feed working dog food near Gatesville, TX. No corn, wheat, or soy. AAFCO certified, made in Texas for ranch dogs, hunting dogs, and working livestock dogs.",
  url: "/where-to-buy/gatesville",
};

export default function GatesvillePage() {
  return (
    <CityPage
      city="Gatesville"
      state="Texas"
      county="Coryell County"
      breadcrumb="Gatesville, TX"
      schema={schema}
      h1="Working Dog Food in Gatesville, TX — Built for Coryell County Ranch Dogs"
      h1Sub="Gatesville and the surrounding Coryell County ranchland is cattle and hunting dog country. The dogs here work fence lines, run hog, and patrol livestock pastures day in and day out. Outlaw Feed was formulated for exactly that kind of life — high protein, clean ingredients, no filler grains masquerading as nutrition."
      sections={[
        {
          heading: "Where to Buy Working Dog Food Near Gatesville, Texas",
          body: "Outlaw Feed is available through local farm and ranch supply retailers in the Gatesville area. Coryell County ranchers looking to upgrade from a commodity brand can find the Gold Formula (26% protein, 18% fat) and Blue Formula (21% protein, 15% fat) at nearby feed stores. Call ahead or check our full store locator to confirm current stock near Gatesville.",
        },
        {
          heading: "Ranch Dog Food for Coryell County Livestock Operations",
          body: "Working livestock dogs in and around Gatesville need a diet calibrated to real energy expenditure — not a bag engineered to sit on a shelf for eighteen months. Corn, wheat, and soy are the three fillers most commonly used to hit protein numbers on the cheap. Outlaw Feed eliminates all three, using chicken meal as the primary protein source and a formulation designed to maintain body condition through hard working seasons.",
        },
        {
          heading: "Hunting Dog Food in Gatesville and Central Texas",
          body: "Coryell County offers some of the best deer and hog hunting in Central Texas, and serious hunters know that a dog that runs hard needs to eat right before and after a hunt. Outlaw Feed's Gold Formula provides the fat density that hunting dogs need to sustain performance across multi-day hunts. No crash after the first morning. No dull coat going into season. Just a consistent, clean diet your dog can perform on.",
        },
        {
          heading: "Texas-Made Dog Food with No Corn, Wheat, or Soy",
          body: "Every bag of Outlaw Feed is produced in Central Texas under quality-controlled conditions, with a full ingredients list and guaranteed analysis printed clearly on the label. There are no hidden blends or undisclosed by-products. For Gatesville area dog owners looking for a local, honest alternative to national brands, Outlaw Feed is the answer. Questions about availability? Call (254) 393-3957.",
        },
      ]}
    />
  );
}
