import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import REMSPage from "@/components/rems/page";
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
  title: "Real Estate Management System (REMS) for Property Operations",
  description:
    "REMS is a real estate management system for property owners, agents, and managers, built for property listings, tenant management, lease tracking, rent collection, maintenance requests, payments, and real-time portfolio reporting.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/rems",
  },
  openGraph: {
    title: "Real Estate Management System (REMS) for Property Operations",
    description:
      "Manage property operations with REMS: listings, tenants, leases, rent collection, maintenance requests, payments, and real-time real estate portfolio reporting.",
    url: "https://optimumsystems.co.ke/rems",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/rems-og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Estate Management System by Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Management System (REMS)",
    description:
      "Property management software for listings, tenants, leases, rent collection, maintenance, payments, and portfolio reports.",
    images: ["https://optimumsystems.co.ke/og/rems-og-image.png"],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Real Estate Management System (REMS) for Property Operations",
      path: "/rems",
      description:
        "REMS is a real estate management system that helps property owners, agents, and managers digitize property operations including listings, tenant records, lease management, rent collection, maintenance requests, payments, and portfolio reporting.",
    }),

    productSchema({
      name: "Real Estate Management System (REMS)",
      slug: "rems",
      description:
        "REMS is a property management and real estate operations system designed for landlords, property managers, real estate agencies, and estate administrators. It supports property listings, unit management, tenant records, lease tracking, rent collection, payment monitoring, maintenance requests, occupancy visibility, financial reporting, and real-time portfolio management.",
      image: "/og/rems-og-image.png",
      category: "Real Estate and Property Management Software",
      audience:
        "Property owners, landlords, real estate agencies, property managers, estate administrators, and facility managers",
    }),

    faqPageSchema([
      {
        question: "What is REMS?",
        answer:
          "REMS is a real estate management system that helps property owners, landlords, agents, and property managers manage listings, tenants, leases, rent collection, maintenance, and reporting from one platform.",
      },
      {
        question: "Who is REMS built for?",
        answer:
          "REMS is built for property owners, landlords, real estate agencies, property managers, estate administrators, and facility managers who need better visibility and control over property operations.",
      },
      {
        question: "Does REMS support tenant and lease management?",
        answer:
          "Yes. REMS supports tenant records, lease tracking, occupancy management, rental terms, and property-unit assignments.",
      },
      {
        question: "Can REMS track rent collection and payments?",
        answer:
          "Yes. REMS helps track rent collection, payment status, arrears, receipts, and financial reporting across properties and tenants.",
      },
      {
        question: "Does REMS manage maintenance requests?",
        answer:
          "Yes. REMS supports maintenance request tracking to help property teams manage repairs, service requests, follow-ups, and operational accountability.",
      },
      {
        question: "Can REMS provide portfolio reports?",
        answer:
          "Yes. REMS provides real-time visibility into occupancy, rent performance, maintenance activity, tenant status, and property portfolio performance.",
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
        name: "Real Estate Management System",
        url: "https://optimumsystems.co.ke/rems",
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
      <REMSPage />
      <SiteFooter />
    </div>
  );
}
