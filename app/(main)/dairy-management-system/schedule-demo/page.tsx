import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import ScheduleDemoPage from "@/components/ultimate-cbe/layout01/section-schedule-demo";
import {
  breadcrumbSchema,
  createJsonLdGraph,
  faqPageSchema,
  productSchema,
  webPageSchema,
} from "@/lib/seo/structured-data";
import { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Dairy Management System for Cooperatives & Processors",
  description:
    "Dairy Management System is an ERP for dairy cooperatives and processors, built for milk intake, quality testing, farmer payments, production, inventory, cold-chain tracking, distribution, and real-time reporting.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/dairy-management-system",
  },
  openGraph: {
    title: "Dairy Management System for Cooperatives & Processors",
    description:
      "Manage the dairy value chain with ERP software for milk intake, quality testing, automated farmer payments, processing, inventory, cold-chain traceability, distribution, and financial reporting.",
    url: "https://optimumsystems.co.ke/dairy-management-system",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/schedule-demo/dairy-og-image.png",
        width: 1200,
        height: 630,
        alt: "Dairy Management System ERP by Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dairy Management System for Cooperatives & Processors",
    description:
      "Dairy ERP for milk intake, quality testing, farmer payments, cold-chain tracking, distribution, and real-time operational visibility.",
    images: ["https://optimumsystems.co.ke/og/schedule-demo/dairy-og-image.png"],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Dairy Management System for Cooperatives & Processors",
      path: "/dairy-management-system",
      description:
        "Dairy Management System is a complete ERP for dairy cooperatives and processors. It unifies milk intake, quality testing, farmer payments, production, inventory, cold-chain tracking, distribution, financial reporting, and real-time operational visibility in one connected platform.",
    }),

    productSchema({
      name: "Dairy Management System",
      slug: "dairy-management-system",
      description:
        "Dairy Management System is an end-to-end ERP for dairy cooperatives, collection centers, and processing plants. It supports digitized milk intake, quality testing, farmer and supplier profiles, quality-linked farmer payments, processing and yield oversight, inventory and cold-chain tracking, distribution logistics, secure financials, HR, payroll, dashboards, audit-ready records, and real-time visibility across the milk value chain.",
      image: "/og/schedule-demo/dairy-og-image.png",
      category: "Dairy ERP Software",
      audience:
        "Dairy cooperatives, milk collection centers, dairy processors, and multi-branch dairy operations",
    }),

    faqPageSchema([
      {
        question: "What is Dairy Management System?",
        answer:
          "Dairy Management System is a complete ERP for dairy cooperatives and processors. It connects milk intake, quality testing, production, inventory, financials, farmer payments, and distribution in one platform.",
      },
      {
        question: "Who is Dairy Management System built for?",
        answer:
          "Dairy Management System is built for dairy cooperatives, milk collection centers, processing plants, and multi-branch dairy operations that need better traceability, control, and real-time operational visibility.",
      },
      {
        question:
          "Does Dairy Management System support milk intake and quality testing?",
        answer:
          "Yes. The system digitizes milk reception, quality testing, acceptance workflows, and intake control to reduce manual errors, delays, and disputes.",
      },
      {
        question: "Can Dairy Management System automate farmer payments?",
        answer:
          "Yes. Dairy Management System supports structured, quality-linked farmer payment workflows to speed up settlement cycles and reduce reconciliation disputes.",
      },
      {
        question: "Does the system support cold-chain and inventory tracking?",
        answer:
          "Yes. It monitors inventory movement, storage conditions, cold-chain visibility, stock movement, and distribution to help reduce spoilage and operational losses.",
      },
      {
        question: "Can Dairy Management System support financial reporting?",
        answer:
          "Yes. It centralizes secure financial workflows including general ledger, accounts payable, accounts receivable, reporting, and performance dashboards for better dairy business visibility.",
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
        name: "Dairy Management System",
        url: "https://optimumsystems.co.ke/dairy-management-system",
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
