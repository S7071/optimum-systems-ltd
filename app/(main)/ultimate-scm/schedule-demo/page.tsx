import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import ScheduleDemoPage from "@/components/ultimate-cbe/layout01/section-schedule-demo";
import { Metadata } from "next";
import {
  createJsonLdGraph,
  webPageSchema,
  productSchema,
  breadcrumbSchema,
} from "@/lib/seo/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title:
    "Ultimate Supply Chain ERP | Inventory & Logistics Software | Schedule Demo",
  description:
    "Ultimate Supply Chain ERP helps wholesalers, distributors, and supply chain teams manage procurement, inventory, order fulfillment, logistics, financial tracking, reporting, and real-time operational visibility.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/ultimate-scm",
  },
  openGraph: {
    title:
      "Ultimate Supply Chain ERP | Inventory & Logistics Software | Schedule Demo",
    description:
      "Gain full supply chain visibility with UltimateSCM for procurement control, inventory optimization, order fulfillment, logistics, financial tracking, analytics, and hybrid ERP deployment.",
    url: "https://optimumsystems.co.ke/ultimate-scm/schedule-demo",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/schedule-demo/ultimatescm-og-image.png",
        width: 1200,
        height: 630,
        alt: "Ultimate Supply Chain ERP by Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultimate Supply Chain ERP | Schedule Demo",
    description:
      "Supply chain ERP for procurement, inventory, order fulfillment, logistics, finance, analytics, integrations, and real-time visibility.",
    images: [
      "https://optimumsystems.co.ke/og/schedule-demo/ultimatescm-og-image.png",
    ],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title:
        "Ultimate Supply Chain ERP | Inventory & Logistics Software | Schedule Demo",
      path: "/ultimate-scm/schedule-demo",
      description:
        "Ultimate Supply Chain ERP is a unified supply chain management platform that centralizes procurement, inventory management, order processing, logistics, financial tracking, reporting, integrations, and real-time operational visibility for wholesale and distribution environments.",
    }),

    productSchema({
      name: "Ultimate Supply Chain ERP",
      slug: "ultimate-scm",
      description:
        "Ultimate Supply Chain ERP is an integrated supply chain management system built for wholesalers, distributors, procurement teams, logistics teams, inventory managers, and multi-location operations. It supports procurement control, inventory optimization, order and sales management, order fulfillment, invoicing, payment tracking, logistics visibility, financial and compliance integration, analytics dashboards, third-party integrations, role-based access, mobile access, and hybrid cloud and on-premise deployment.",
      image: "/og/ultimatescm-og-image.png",
      category: "Supply Chain ERP and Inventory Management Software",
      audience:
        "Wholesalers, distributors, procurement teams, logistics teams, inventory managers, finance teams, and multi-location supply chain operations",
    }),

    breadcrumbSchema([
      {
        name: "Home",
        url: "https://optimumsystems.co.ke",
      },
      {
        name: "Products",
        url: "https://optimumsystems.co.ke/products",
      },
      {
        name: "Ultimate Supply Chain ERP",
        url: "https://optimumsystems.co.ke/ultimate-scm",
      },
      {
        name: "Schedule Demo",
        url: "https://optimumsystems.co.ke/ultimate-scm/schedule-demo",
      },
    ]),
  ]);

  return (
    <div className="flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <JsonLd data={jsonLd} />
      <SiteBanner />
      <SiteNavbar />
      <ScheduleDemoPage />
      <SiteFooter />
    </div>
  );
}
