import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import PartnersGrid from "@/components/optimum-systems/layout01/section-partners";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import MapHeroSection from "@/components/optimum-systems/layout01/section-map-hero";
import { Metadata } from "next";
import {
  createJsonLdGraph,
  webPageSchema,
  breadcrumbSchema,
} from "@/lib/seo/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Our Clients | Optimum ERP Systems Ltd Client Footprint",
  description:
    "Explore Optimum ERP Systems Ltd’s national client footprint across Kenya, including 141 institutions in 39 counties across TVETs, national polytechnics, universities, teacher training colleges, schools, healthcare, finance, hospitality, NGOs, and public sector organizations.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/company/partners",
  },
  openGraph: {
    title: "Our Clients | Optimum ERP Systems Ltd Client Footprint",
    description:
      "View Optimum ERP Systems Ltd’s client footprint across Kenya, with institutional deployments across education, healthcare, finance, hospitality, NGOs, and public sector organizations.",
    url: "https://optimumsystems.co.ke/company/partners",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/partners-og-image.png",
        width: 1200,
        height: 630,
        alt: "Optimum ERP Systems Ltd national client footprint across Kenya",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Clients | Optimum ERP Systems Ltd Client Footprint",
    description:
      "Explore Optimum ERP Systems Ltd’s national client footprint across 39 counties and 141 institutions in Kenya.",
    images: ["https://optimumsystems.co.ke/og/partners-og-image.png"],
  },
};

export default function PageLayout() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Our Clients | Optimum ERP Systems Ltd Client Footprint",
      path: "/company/partners",
      description:
        "The Optimum ERP Systems Ltd clients page presents a national deployment footprint across Kenya, showing 141 institutions in 39 counties through an interactive coverage map and client directory. The page includes universities, national polytechnics, technical and vocational colleges, teacher training colleges, secondary schools, finance, healthcare, hospitality, NGOs, and public sector clients.",
    }),

    {
      "@type": "CollectionPage",
      "@id": "https://optimumsystems.co.ke/company/partners#client-footprint",
      name: "Optimum ERP Systems Ltd Client Footprint",
      url: "https://optimumsystems.co.ke/company/partners",
      description:
        "A client footprint and institutional deployment directory showing Optimum ERP Systems Ltd clients across 39 counties and 141 institutions in Kenya.",
      isPartOf: {
        "@id": "https://optimumsystems.co.ke/#website",
      },
      publisher: {
        "@id": "https://optimumsystems.co.ke/#organization",
      },
      about: [
        "ERP deployments in Kenya",
        "Client institutions",
        "TVET institutions",
        "National polytechnics",
        "Teacher training colleges",
        "Universities",
        "Healthcare clients",
        "Finance clients",
        "Hospitality clients",
        "NGO clients",
        "Public sector clients",
      ],
    },

    breadcrumbSchema([
      {
        name: "Home",
        url: "https://optimumsystems.co.ke",
      },
      {
        name: "Company",
        url: "https://optimumsystems.co.ke/company",
      },
      {
        name: "Our Clients",
        url: "https://optimumsystems.co.ke/company/partners",
      },
    ]),
  ]);

  return (
    <div className="flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <JsonLd data={jsonLd} />
      <HelpCenterButton />
      <WhatsappButton />
      <SiteBanner />
      <SiteNavbar />
      <MapHeroSection />
      <PartnersGrid />
      <SiteFooter />
    </div>
  );
}
