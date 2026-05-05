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
    "MedFlow Drug Tracking System for County Health Supply Chains | Schedule Demo",
  description:
    "MedFlow is a cloud-based drug tracking and management system for county health teams, built for end-to-end medicine traceability, automated requisitions, GRN workflows, biometric transfers, real-time stock visibility, and role-based dashboards.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/medflow",
  },
  openGraph: {
    title:
      "MedFlow Drug Tracking System for County Health Supply Chains | Schedule Demo",
    description:
      "Digitize pharmaceutical supply control with MedFlow: drug traceability from KEMSA to patient issue, automated requisitions, GRNs, secure transfers, stock visibility, and audit-ready dashboards.",
    url: "https://optimumsystems.co.ke/medflow/schedule-demo",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/schedule-demo/medflow-og-image.png",
        width: 1200,
        height: 630,
        alt: "MedFlow Drug Tracking and Management System by Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MedFlow Drug Tracking System | Schedule Demo",
    description:
      "Cloud-based drug tracking for county health supply chains with real-time stock visibility, automated requisitions, GRNs, biometric transfers, and dashboards.",
    images: [
      "https://optimumsystems.co.ke/og/schedule-demo/medflow-og-image.png",
    ],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title:
        "MedFlow Drug Tracking System for County Health Supply Chains | Schedule Demo",
      path: "/medflow/schedule-demo",
      description:
        "MedFlow is a cloud-based drug tracking and management platform built for county health systems. It centralizes pharmaceutical movement from KEMSA through county stores, sub-county facilities, and patient issue points with end-to-end traceability, automated requisitions, GRN workflows, biometric-secured transfers, real-time stock visibility, role-based dashboards, and audit-ready accountability.",
    }),

    productSchema({
      name: "MedFlow Drug Tracking & Management System",
      slug: "medflow",
      description:
        "MedFlow is a cloud-based pharmaceutical supply chain platform for county governments, public health departments, county stores, sub-county facilities, and healthcare teams. It supports end-to-end drug tracking from KEMSA to patient issue, automated requisitions, goods received note workflows, real-time stock visibility, role-based dashboards, biometric-secured transfers, geo-fenced movement visibility, audit logs, and controls to reduce theft, expiries, and stockouts.",
      image: "/og/medflow-og-image.png",
      category:
        "Drug Tracking and Pharmaceutical Supply Chain Management Software",
      audience:
        "County governments, public health departments, county stores, sub-county facilities, and healthcare supply chain teams",
    }),

    faqPageSchema([
      {
        question: "What is MedFlow?",
        answer:
          "MedFlow is a cloud-based drug tracking and management platform built for county health systems to control pharmaceutical movement from supply receipt to patient issue.",
      },
      {
        question: "Who is MedFlow built for?",
        answer:
          "MedFlow is built for county governments, public health departments, county stores, sub-county facilities, and healthcare teams managing pharmaceutical supply chains.",
      },
      {
        question: "Does MedFlow support end-to-end drug traceability?",
        answer:
          "Yes. MedFlow tracks medicine movement from KEMSA through county stores, facilities, and patient-level issue points in one connected workflow.",
      },
      {
        question: "Can MedFlow automate requisitions?",
        answer:
          "Yes. MedFlow streamlines facility requests, approvals, and replenishment workflows to reduce delays and manual follow-up.",
      },
      {
        question: "Does MedFlow support GRNs and receiving control?",
        answer:
          "Yes. MedFlow supports goods received note workflows and receiving controls for cleaner stock reconciliation, accountability, and audit-ready records.",
      },
      {
        question: "Does MedFlow provide real-time stock visibility?",
        answer:
          "Yes. MedFlow provides live stock visibility across county warehouses, stores, and facilities to support faster operational decisions.",
      },
      {
        question: "How does MedFlow improve accountability?",
        answer:
          "MedFlow improves accountability through role-based dashboards, biometric-secured transfers, controlled approvals, geo-fenced movement visibility, audit logs, and secure stock movement workflows.",
      },
      {
        question: "Can MedFlow help reduce theft, expiries, and stockouts?",
        answer:
          "Yes. MedFlow improves oversight and control across the pharmaceutical supply chain to help reduce theft, stock expiries, avoidable stockouts, and inventory losses.",
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
        name: "MedFlow Drug Tracking System",
        url: "https://optimumsystems.co.ke/medflow",
      },
      {
        name: "Schedule Demo",
        url: "https://optimumsystems.co.ke/medflow/schedule-demo",
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
