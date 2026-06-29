import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Outlaw Feed | Texas-Made Dog Food for Working & Hunting Dogs",
    template: "%s | Outlaw Feed",
  },
  description:
    "Outlaw Feed is a Texas-made, AAFCO-certified dog food with no corn, wheat, or soy. Real meat first ingredient. Formulated for working dogs, hunting dogs, and ranch dogs in Bell County, TX.",
  keywords: [
    "Texas dog food",
    "hunting dog food",
    "working dog food",
    "no corn wheat soy dog food",
    "dog food Bell County Texas",
    "Texas made dog food",
    "AAFCO certified dog food",
    "ranch dog food",
    "real meat dog food",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || ""),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    siteName: "Outlaw Feed",
    title: "Outlaw Feed — Texas-Made Dog Food for Working & Hunting Dogs",
    description:
      "No corn. No wheat. No soy. Real meat — first ingredient. Outlaw Feed is handcrafted in Bell County, Texas for dogs that work as hard as their owners.",
    images: [
      {
        url: "https://outlawfeed.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Outlaw Feed — Texas-Made Dog Food for Working & Hunting Dogs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Outlaw Feed — Texas-Made Dog Food",
    description: "No corn. No wheat. No soy. Made in Texas for dogs that work hard.",
    images: ["https://outlawfeed.com/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon-dark-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f0e0c",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "/#organization",
  name: "Outlaw Feed",
  url: "",
  telephone: "+1-254-939-3957",
  email: "fencesbyfarr@yahoo.com",
  description:
    "Texas-made, AAFCO-certified dog food with no corn, wheat, or soy. Real meat first ingredient for working and hunting dogs.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belton",
    addressRegion: "TX",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.056,
    longitude: -97.4641,
  },
  areaServed: "Texas",
  sameAs: [
    "https://www.instagram.com/outlawfeed",
    "https://maps.google.com/?cid=5693377320952782312",
    "https://www.yelp.com/biz/outlaw-feed-temple-2",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "/#website",
  name: "Outlaw Feed",
  url: "",
  publisher: { "@id": "/#organization" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoSlab.variable} bg-background`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T7BHPVKG');`,
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T7BHPVKG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ScrollToTop />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
