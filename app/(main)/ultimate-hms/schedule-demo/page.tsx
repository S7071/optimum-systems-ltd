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
    "Ultimate Hotel ERP | Hotel Management System in Kenya | Schedule Demo",
  description:
    "Ultimate HotelERP helps hotels manage reservations, events, restaurant and bar POS, inventory, HR, payroll, finance, guest CRM, and real-time reporting.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/ultimate-hms",
  },
  openGraph: {
    title:
      "Ultimate Hotel ERP | Hotel Management System in Kenya | Schedule Demo",
    description:
      "Run hotel operations from one connected platform for reservations, rooms, events, restaurant and bar POS, inventory, procurement, HR, payroll, finance, and guest service.",
    url: "https://optimumsystems.co.ke/ultimate-hms/schedule-demo",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/schedule-demo/ultimatehms-og-image.png",
        width: 1200,
        height: 630,
        alt: "Ultimate Hotel ERP by Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultimate Hotel ERP | Schedule Demo",
    description:
      "Hotel management ERP for reservations, events, dining, inventory, HR, payroll, finance, guest CRM, and real-time reports.",
    images: [
      "https://optimumsystems.co.ke/og/schedule-demo/ultimatehms-og-image.png",
    ],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title:
        "Ultimate Hotel ERP | Hotel Management System in Kenya | Schedule Demo",
      path: "/ultimate-hms",
      description:
        "Ultimate HotelERP is a unified hotel management ERP that helps hotels manage reservations, room availability, guest service, events, restaurant and bar operations, inventory, procurement, HR, payroll, finance, reporting, and real-time operational visibility.",
    }),

    productSchema({
      name: "Ultimate Hotel Management ERP",
      slug: "ultimate-hms",
      description:
        "Ultimate HotelERP is an all-in-one hotel management platform for modern hospitality operations. It unifies reservations, rooms, check-ins, check-outs, housekeeping status, guest management, conference and events management, restaurant and bar POS, inventory, procurement, HR, payroll, financial reporting, guest CRM, and real-time hotel performance visibility in one connected system.",
      image: "/og/ultimatehms-og-image.png",
      category: "Hotel Management ERP Software",
      audience:
        "Hotels, resorts, lodges, conference venues, hospitality groups, restaurants, bars, and accommodation businesses",
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
        name: "Ultimate Hotel ERP",
        url: "https://optimumsystems.co.ke/ultimate-hms",
      },
      {
        name: "Schedule Demo",
        url: "https://optimumsystems.co.ke/ultimate-hms/schedule-demo",
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
