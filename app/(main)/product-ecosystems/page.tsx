import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import ProductEcosystemsPageBody from "@/components/optimum-systems/layout01/section-product-ecosystems";
import { Metadata } from "next";
import {
  createJsonLdGraph,
  webPageSchema,
  breadcrumbSchema,
} from "@/lib/seo/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Product Ecosystem",
  description:
    "Explore the Optimum ERP Systems Ltd product ecosystem, featuring enterprise ERP, education systems, healthcare software, finance solutions, security platforms, agriculture tools, marketplace systems, and sector-specific digital products.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/product-ecosystems",
  },
  openGraph: {
    title: "Product Ecosystem | Optimum ERP Systems Ltd",
    description:
      "Discover Optimum ERP Systems Ltd’s connected product ecosystem for education, healthcare, finance, agriculture, security, retail, hospitality, government, and enterprise operations.",
    url: "https://optimumsystems.co.ke/product-ecosystems",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/product-ecosystems-og-image.png",
        width: 1200,
        height: 630,
        alt: "Optimum ERP Systems Ltd product ecosystem",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Ecosystem | Optimum ERP Systems Ltd",
    description:
      "Explore connected ERP, education, healthcare, finance, agriculture, security, retail, and enterprise software solutions.",
    images: ["https://optimumsystems.co.ke/og/product-ecosystems-og-image.png"],
  },
};

export default function PageLayout() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Product Ecosystem | Optimum ERP Systems Ltd",
      path: "/product-ecosystems",
      description:
        "The Optimum ERP Systems Ltd product ecosystem brings together connected enterprise software solutions for education, healthcare, finance, agriculture, retail, hospitality, manufacturing, security, government, marketplace commerce, and institutional operations.",
    }),

    {
      "@type": "CollectionPage",
      "@id":
        "https://optimumsystems.co.ke/product-ecosystems#product-ecosystem",
      name: "Optimum ERP Systems Ltd Product Ecosystem",
      url: "https://optimumsystems.co.ke/product-ecosystems",
      description:
        "A collection of Optimum ERP Systems Ltd software products and digital platforms built for enterprise resource planning, institutional management, sector automation, and operational transformation.",
      isPartOf: {
        "@id": "https://optimumsystems.co.ke/#website",
      },
      publisher: {
        "@id": "https://optimumsystems.co.ke/#organization",
      },
      mainEntity: {
        "@type": "ItemList",
        name: "Optimum ERP Product Ecosystem",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "UltimateERP",
            url: "https://optimumsystems.co.ke/products",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "UltimateCBE Assessment ERP",
            url: "https://optimumsystems.co.ke/ultimate-cbe",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Modularized Curriculum Management Module (CBET)",
            url: "https://optimumsystems.co.ke/cbet",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Biometric Attendance System (BAMS)",
            url: "https://optimumsystems.co.ke/bams",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Hospital Management System (HMS)",
            url: "https://optimumsystems.co.ke/hms",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "MedFlow Drug Tracking & Management System",
            url: "https://optimumsystems.co.ke/medflow",
          },
          {
            "@type": "ListItem",
            position: 7,
            name: "Lend360 Management System",
            url: "https://optimumsystems.co.ke/lend360",
          },
          {
            "@type": "ListItem",
            position: 8,
            name: "NexusTrade Marketplace Platform",
            url: "https://optimumsystems.co.ke/nexus-trade",
          },
          {
            "@type": "ListItem",
            position: 9,
            name: "Poultry Farm Management System (PFMS)",
            url: "https://optimumsystems.co.ke/pfms",
          },
          {
            "@type": "ListItem",
            position: 10,
            name: "Dairy Management System",
            url: "https://optimumsystems.co.ke/dairy-management-system",
          },
        ],
      },
      about: [
        "Enterprise ERP software",
        "Education management systems",
        "Healthcare software",
        "Financial management systems",
        "Agriculture management systems",
        "Security management systems",
        "Marketplace platforms",
        "Institutional automation",
        "Business process automation",
      ],
    },

    breadcrumbSchema([
      {
        name: "Home",
        url: "https://optimumsystems.co.ke",
      },
      {
        name: "Product Ecosystem",
        url: "https://optimumsystems.co.ke/product-ecosystems",
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
      <ProductEcosystemsPageBody />
      <SiteFooter />
    </div>
  );
}
