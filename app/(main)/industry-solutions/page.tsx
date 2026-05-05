import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import IndustrySolutionsPageBody from "@/components/optimum-systems/layout01/section-industry-solutions";
import { Metadata } from "next";
import { createJsonLdGraph, webPageSchema, breadcrumbSchema } from "@/lib/seo/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "ERP Industry Solutions | Optimum ERP Systems Ltd",
  description:
    "Explore ERP industry solutions by Optimum ERP Systems Ltd for education, healthcare, finance, retail, manufacturing, hospitality, government, SACCOs, and enterprise operations in Kenya.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/industry-solutions",
  },
  openGraph: {
    title: "ERP Industry Solutions | Optimum ERP Systems Ltd",
    description:
      "Tailored ERP solutions for multiple industries including education, healthcare, finance, retail, manufacturing, hospitality, and government institutions in Kenya.",
    url: "https://optimumsystems.co.ke/industry-solutions",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/industry-solutions-og-image.png",
        width: 1200,
        height: 630,
        alt: "ERP Industry Solutions by Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Industry Solutions | Optimum ERP Systems Ltd",
    description:
      "Discover ERP solutions tailored for education, healthcare, finance, retail, manufacturing, and government sectors.",
    images: [
      "https://optimumsystems.co.ke/og/industry-solutions-og-image.png",
    ],
  },
};

export default function PageLayout() {
const jsonLd = createJsonLdGraph([
  webPageSchema({
    title: "ERP Industry Solutions | Optimum ERP Systems Ltd",
    path: "/industry-solutions",
    description:
      "Optimum ERP Systems Ltd provides industry-specific ERP solutions tailored for education, healthcare, finance, retail, manufacturing, hospitality, government, SACCOs, and enterprise sectors.",
  }),

  {
    "@type": "CollectionPage",
    "@id": "https://optimumsystems.co.ke/industry-solutions#industries",
    name: "ERP Industry Solutions",
    url: "https://optimumsystems.co.ke/industry-solutions",
    description:
      "A collection of industry-specific ERP solutions designed to meet the operational needs of different sectors.",
    isPartOf: {
      "@id": "https://optimumsystems.co.ke/#website",
    },
    publisher: {
      "@id": "https://optimumsystems.co.ke/#organization",
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Industry ERP Solutions",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "ERP for Education Sector",
          url: "https://optimumsystems.co.ke/products#education",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "ERP for Healthcare Sector",
          url: "https://optimumsystems.co.ke/products#healthcare",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "ERP for Finance & SACCOs",
          url: "https://optimumsystems.co.ke/products#sacco-microfinance",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "ERP for Retail & Distribution",
          url: "https://optimumsystems.co.ke/products#retail",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "ERP for Manufacturing",
          url: "https://optimumsystems.co.ke/products#manufacturing",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "ERP for Hospitality & Travel",
          url: "https://optimumsystems.co.ke/products#hospitality-travel",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "ERP for Government & Public Sector",
          url: "https://optimumsystems.co.ke/products#gov",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "ERP for Corporate & Enterprise",
          url: "https://optimumsystems.co.ke/products#corporate",
        },
      ],
    },
  },

  breadcrumbSchema([
    {
      name: "Home",
      url: "https://optimumsystems.co.ke",
    },
    {
      name: "Industry Solutions",
      url: "https://optimumsystems.co.ke/industry-solutions",
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
      <IndustrySolutionsPageBody />
      <SiteFooter />
    </div>
  );
}
