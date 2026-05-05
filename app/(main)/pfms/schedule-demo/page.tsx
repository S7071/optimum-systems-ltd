import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import ScheduleDemoPage from "@/components/ultimate-cbe/layout01/section-schedule-demo";
import { Metadata } from "next";
import {
  createJsonLdGraph,
  webPageSchema,
  productSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/seo/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title:
    "Poultry Farm Management System (PFMS) for Smart Farming | Schedule Demo",
  description:
    "PFMS is a poultry farm management system for tracking feed, egg production, flock health, mortality, sales, expenses, and farm performance with real-time insights and automation.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/pfms",
  },
  openGraph: {
    title: "Poultry Farm Management System (PFMS) | Schedule Demo",
    description:
      "Manage poultry operations with PFMS: feed tracking, egg production, flock health, mortality, sales, expenses, and real-time farm analytics.",
    url: "https://optimumsystems.co.ke/pfms/schedule-demo",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/schedule-demo/pfms-og-image.png",
        width: 1200,
        height: 630,
        alt: "Poultry Farm Management System by Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poultry Farm Management System (PFMS) | Schedule Demo",
    description:
      "Track feed, egg production, flock health, mortality, and farm finances with PFMS.",
    images: ["https://optimumsystems.co.ke/og/schedule-demo/pfms-og-image.png"],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Poultry Farm Management System (PFMS) | Schedule Demo",
      path: "/pfms/schedule-demo",
      description:
        "PFMS is a poultry farm management system that digitizes farm operations including feed management, egg production tracking, flock health monitoring, mortality tracking, sales, expenses, and farm performance analytics.",
    }),

    productSchema({
      name: "Poultry Farm Management System (PFMS)",
      slug: "pfms",
      description:
        "PFMS is a farm management system designed for poultry farmers and agribusinesses. It supports feed procurement and consumption tracking, egg production logging, flock health and mortality monitoring, vaccination tracking, sales and expense management, and real-time farm performance analytics.",
      image: "/og/pfms-og-image.png",
      category: "Agriculture and Poultry Farm Management Software",
      audience:
        "Poultry farmers, agribusinesses, farm managers, and agricultural enterprises",
    }),

    faqPageSchema([
      {
        question: "What is PFMS?",
        answer:
          "PFMS is a poultry farm management system that helps farmers track feed, egg production, flock health, mortality, sales, expenses, and farm performance.",
      },
      {
        question: "Who is PFMS built for?",
        answer:
          "PFMS is built for poultry farmers, agribusinesses, and farm managers who need better control and visibility of farm operations.",
      },
      {
        question: "Does PFMS track egg production?",
        answer:
          "Yes. PFMS tracks daily egg production, waste, and output trends to help optimize productivity.",
      },
      {
        question: "Can PFMS manage feed consumption?",
        answer:
          "Yes. PFMS tracks feed procurement, usage, and feed conversion ratios (FCR) for better cost control.",
      },
      {
        question: "Does PFMS track flock health and mortality?",
        answer:
          "Yes. PFMS records flock health, vaccination schedules, and mortality to support better farm management decisions.",
      },
      {
        question: "Can PFMS track farm finances?",
        answer:
          "Yes. PFMS tracks sales, expenses, and profitability to provide a clear financial picture of farm operations.",
      },
    ]),

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
        name: "Poultry Farm Management System",
        url: "https://optimumsystems.co.ke/pfms",
      },
      {
        name: "Schedule Demo",
        url: "https://optimumsystems.co.ke/pfms/schedule-demo",
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
