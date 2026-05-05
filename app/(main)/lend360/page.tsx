import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import Lend360ManagementSystemPage from "@/components/lend360/page";
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
  title: "Lend360 Microfinance ERP System | Lending Management Software",
  description:
    "Lend360 is a full-cycle microfinance ERP system for lending institutions, built for KYC onboarding, configurable loan products, appraisal, disbursement, repayment controls, MPESA and SMS integration, portfolio analytics, finance, HR, and payroll.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/lend360",
  },
  openGraph: {
    title: "Lend360 Microfinance ERP System | Lending Management Software",
    description:
      "Manage lending operations with Lend360: KYC onboarding, loan products, appraisal, disbursement, repayment controls, MPESA and SMS integration, and real-time portfolio visibility.",
    url: "https://optimumsystems.co.ke/lend360",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/lend360-og-image.png",
        width: 1200,
        height: 630,
        alt: "Lend360 Microfinance ERP System by Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lend360 Microfinance ERP System",
    description:
      "Full-cycle lending ERP for KYC, appraisal, disbursement, repayment controls, MPESA integration, SMS, and portfolio analytics.",
    images: ["https://optimumsystems.co.ke/og/lend360-og-image.png"],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Lend360 Microfinance ERP System | Lending Management Software",
      path: "/lend360",
      description:
        "Lend360 is a full-cycle lending ERP platform for microfinance institutions and lending companies. It centralizes KYC onboarding, configurable loan products, appraisal, approval, disbursement, repayment, 1/3 rule controls, MPESA and SMS integration, portfolio analytics, finance, HR, payroll, audit trails, and secure lending records.",
    }),

    productSchema({
      name: "Lend360 Management System",
      slug: "lend360",
      description:
        "Lend360 is a connected microfinance ERP and lending management system built for microfinance institutions, lending companies, and multi-branch lending operations. It supports customer onboarding, KYC workflows, configurable loan products, appraisal, approval, disbursement, repayment tracking, 1/3 rule controls, MPESA and SMS integration, financials, HR, payroll, secure records, audit trails, and real-time portfolio monitoring.",
      image: "/og/lend360-og-image.png",
      category: "Microfinance ERP and Lending Management Software",
      audience:
        "Microfinance institutions, lending companies, and multi-branch lending operations",
    }),

    faqPageSchema([
      {
        question: "What is Lend360?",
        answer:
          "Lend360 is a full-cycle lending ERP system for microfinance institutions and lending companies. It helps manage customers, loans, appraisal, disbursement, repayment, financials, HR, payroll, and portfolio analytics from one connected platform.",
      },
      {
        question: "Who is Lend360 built for?",
        answer:
          "Lend360 is built for microfinance institutions, lending companies, and multi-branch lending operations that need stronger onboarding, faster loan processing, tighter repayment control, and real-time portfolio visibility.",
      },
      {
        question: "Does Lend360 support KYC and customer onboarding?",
        answer:
          "Yes. Lend360 supports KYC-enabled customer onboarding, customer profile management, verification workflows, and secure lending records.",
      },
      {
        question: "Can Lend360 manage the full loan lifecycle?",
        answer:
          "Yes. Lend360 manages loan product configuration, appraisal, approval, disbursement, repayment, collections, client servicing, and portfolio monitoring across the full lending cycle.",
      },
      {
        question: "Does Lend360 support MPESA and SMS integration?",
        answer:
          "Yes. Lend360 supports MPESA and SMS integration for repayments, client alerts, collections workflows, and customer engagement.",
      },
      {
        question: "Does Lend360 support repayment and 1/3 rule controls?",
        answer:
          "Yes. Lend360 supports automated repayment workflows and internal lending controls, including 1/3 rule handling aligned to institutional credit policies.",
      },
      {
        question: "Can Lend360 provide real-time portfolio analytics?",
        answer:
          "Yes. Lend360 provides real-time visibility into repayments, portfolio performance, client activity, lending trends, and operational reports.",
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
        name: "Lend360 Management System",
        url: "https://optimumsystems.co.ke/lend360",
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
      <Lend360ManagementSystemPage />
      <SiteFooter />
    </div>
  );
}
