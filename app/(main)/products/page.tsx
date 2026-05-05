import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import ProductCataloguePage from "@/components/catalogue/page";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import { Metadata } from "next";
import {
  createJsonLdGraph,
  webPageSchema,
  breadcrumbSchema,
} from "@/lib/seo/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "ERP Software Products",
  description:
    "Explore ERP software products by Optimum ERP Systems Ltd including education systems, healthcare software, lending platforms, biometric systems, agriculture tools, and enterprise management solutions.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/products",
  },
  openGraph: {
    title: "ERP Software Products | Optimum ERP Systems Ltd",
    description:
      "Browse enterprise software solutions for education, healthcare, finance, agriculture, security, and business operations.",
    url: "https://optimumsystems.co.ke/products",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/products-og-image.png",
        width: 1200,
        height: 630,
        alt: "Optimum ERP Systems Ltd software products",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Software Products",
    description:
      "Explore ERP, healthcare, education, finance, agriculture, and enterprise software solutions.",
    images: ["https://optimumsystems.co.ke/og/products-og-image.png"],
  },
};

export default function PageLayout() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "ERP Software Products | Optimum ERP Systems Ltd",
      path: "/products",
      description:
        "Browse the full suite of Optimum ERP Systems Ltd software products including ERP systems, education platforms, healthcare systems, lending solutions, agriculture systems, and enterprise management tools.",
    }),

    {
      "@type": "CollectionPage",
      "@id": "https://optimumsystems.co.ke/products#products",
      name: "Optimum ERP Systems Ltd Products",
      url: "https://optimumsystems.co.ke/products",
      description:
        "A collection of ERP software products and digital systems designed for multiple industries and business operations.",
      isPartOf: {
        "@id": "https://optimumsystems.co.ke/#website",
      },
      publisher: {
        "@id": "https://optimumsystems.co.ke/#organization",
      },
      mainEntity: {
        "@type": "ItemList",
        name: "Software Products",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ultimate ERP System",
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
            name: "CBET Curriculum Management System",
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
            name: "MedFlow Drug Tracking System",
            url: "https://optimumsystems.co.ke/medflow",
          },
          {
            "@type": "ListItem",
            position: 7,
            name: "Lend360 Lending System",
            url: "https://optimumsystems.co.ke/lend360",
          },
          {
            "@type": "ListItem",
            position: 8,
            name: "NexusTrade Marketplace",
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
        "ERP software",
        "Education systems",
        "Healthcare software",
        "Lending systems",
        "Agriculture systems",
        "Biometric systems",
        "Enterprise software",
        "Business automation",
      ],
    },

    breadcrumbSchema([
      {
        name: "Home",
        url: "https://optimumsystems.co.ke",
      },
      {
        name: "Products",
        url: "https://optimumsystems.co.ke/products",
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
      <ProductCataloguePage />
      <SiteFooter />
    </div>
  );
}
