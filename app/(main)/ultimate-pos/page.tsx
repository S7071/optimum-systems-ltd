import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import UltimatePOSPage from "@/components/ultimate-pos/page";
import { Metadata } from "next";
import {
  createJsonLdGraph,
  webPageSchema,
  productSchema,
  breadcrumbSchema,
} from "@/lib/seo/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Ultimate POS ERP | Retail & Wholesale Point of Sale System",
  description:
    "UltimatePOS is a retail, wholesale, and distribution POS ERP built for fast billing, real-time inventory sync, multi-outlet management, customer records, mobile sales, reporting, and secure access control.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/ultimate-pos",
  },
  openGraph: {
    title: "Ultimate POS ERP | Retail & Wholesale Point of Sale System",
    description:
      "Sell faster and stay in control with UltimatePOS for sales processing, billing, inventory integration, multi-outlet management, customer records, mobile sales, and real-time reporting.",
    url: "https://optimumsystems.co.ke/ultimate-pos",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/ultimatepos-og-image.png",
        width: 1200,
        height: 630,
        alt: "UltimatePOS retail and wholesale point of sale ERP by Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultimate POS ERP",
    description:
      "Point of sale ERP for fast billing, real-time stock sync, multi-outlet control, customer management, mobile sales, and reporting.",
    images: ["https://optimumsystems.co.ke/og/ultimatepos-og-image.png"],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Ultimate POS ERP | Retail & Wholesale Point of Sale System",
      path: "/ultimate-pos",
      description:
        "UltimatePOS is a modern point-of-sale ERP for retail, wholesale, and distribution environments. It helps businesses process sales faster, maintain accurate stock visibility, manage multiple outlets, improve checkout experiences, and monitor sales performance through real-time reporting and analytics.",
    }),

    productSchema({
      name: "Ultimate POS ERP",
      slug: "ultimate-pos",
      description:
        "UltimatePOS is a connected point-of-sale ERP built for retail, wholesale, distribution, supermarkets, multi-outlet businesses, and mobile sales teams. It supports fast sales processing and billing, inventory integration, real-time stock updates, multi-outlet management, customer management, reporting and analytics, user and access control, mobile and van sales enablement, flexible multi-device access, and integration with supply chain operations.",
      image: "/og/ultimatepos-og-image.png",
      category: "Point of Sale ERP and Retail Management Software",
      audience:
        "Retailers, wholesalers, supermarkets, distributors, multi-outlet businesses, mobile sales teams, and van sales operations",
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
        name: "Ultimate POS ERP",
        url: "https://optimumsystems.co.ke/ultimate-pos",
      },
    ]),
  ]);

  return (
    <div className="flex flex-col min-h-screen w-full items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <JsonLd data={jsonLd} />
      <HelpCenterButton />
      <WhatsappButton />
      <SiteBanner />
      <SiteNavbar />
      <UltimatePOSPage />
      <SiteFooter />
    </div>
  );
}
