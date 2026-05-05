import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import UltimateConferencePage from "@/components/ultimate-conference/page";
import { Metadata } from "next";
import {
  createJsonLdGraph,
  webPageSchema,
  productSchema,
  breadcrumbSchema,
} from "@/lib/seo/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Ultimate CMS Conference Management System",
  description:
    "Ultimate CMS is a conference management system for events teams, built for package control, inventory tracking, services, staffing, quotations, invoicing, accommodation, meals, and profitability reporting.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/ultimate-cms",
  },
  openGraph: {
    title: "Ultimate CMS Conference Management System",
    description:
      "Run seamless and profitable conferences with Ultimate CMS for packages, inventory, meals, accommodation, staffing, quotations, invoicing, and profitability visibility.",
    url: "https://optimumsystems.co.ke/ultimate-cms",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/ultimatecms-og-image.png",
        width: 1200,
        height: 630,
        alt: "Ultimate CMS Conference Management System by Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultimate CMS Conference Management System",
    description:
      "Conference management software for packages, services, inventory, staffing, invoicing, accommodation, meals, and profitability tracking.",
    images: ["https://optimumsystems.co.ke/og/ultimatecms-og-image.png"],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Ultimate CMS Conference Management System",
      path: "/ultimate-cms",
      description:
        "Ultimate CMS is an integrated conference management system that helps event teams bring order, control, and profitability to conference operations through package management, inventory and equipment tracking, services integration, staffing support, quotations, invoicing, accommodation, meals, and profitability reporting.",
    }),

    productSchema({
      name: "Ultimate CMS Conference Management System",
      slug: "ultimate-cms",
      description:
        "Ultimate CMS, also known as Ultimate ConferenceERP, is an integrated conference management platform built for organizers managing complex conferences, events, services, equipment, staffing, meals, accommodation, quotations, invoicing, and financial control. It centralizes package management, inventory tracking, catering and accommodation workflows, staff coordination, profitability reporting, and real-time operational visibility in one connected system.",
      image: "/og/ultimatecms-og-image.png",
      category: "Conference Management and Event Operations Software",
      audience:
        "Conference organizers, event teams, hospitality venues, training centers, institutions, hotels, and organizations managing conference operations",
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
        name: "Ultimate CMS",
        url: "https://optimumsystems.co.ke/ultimate-cms",
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
      <UltimateConferencePage />
      <SiteFooter />
    </div>
  );
}
