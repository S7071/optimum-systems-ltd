import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import HospitalManagementSystemPage from "@/components/hms/page";
import { Metadata } from "next";
import {
  breadcrumbSchema,
  createJsonLdGraph,
  faqPageSchema,
  productSchema,
  webPageSchema,
} from "@/lib/seo/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Hospital Management System (HMS) for Healthcare Facilities",
  description:
    "HMS is a hospital management system for healthcare facilities in Kenya, designed for patient records, billing, pharmacy, laboratory, appointments, inpatient and outpatient management, and real-time hospital operations.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/hms",
  },
  openGraph: {
    title: "Hospital Management System (HMS) for Healthcare Facilities",
    description:
      "Streamline healthcare operations with HMS for patient management, billing, pharmacy, lab systems, appointments, wards, and real-time reporting.",
    url: "https://optimumsystems.co.ke/hms",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/hms-og-image.png",
        width: 1200,
        height: 630,
        alt: "Hospital Management System by Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospital Management System (HMS)",
    description:
      "Manage patient care, billing, pharmacy, lab services, and hospital workflows with HMS.",
    images: ["https://optimumsystems.co.ke/og/hms-og-image.png"],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Hospital Management System (HMS) for Healthcare Facilities",
      path: "/hms",
      description:
        "HMS is a comprehensive hospital management system that digitizes healthcare operations including patient registration, appointments, billing, pharmacy, laboratory, inpatient and outpatient services, and hospital reporting.",
    }),

    productSchema({
      name: "Hospital Management System (HMS)",
      slug: "hms",
      description:
        "HMS is a complete hospital management system designed for hospitals, clinics, and healthcare institutions. It supports patient records management, appointment scheduling, billing and invoicing, pharmacy and drug inventory, laboratory management, inpatient and outpatient workflows, reporting, and real-time operational visibility.",
      image: "/og/hms-og-image.png",
      category: "Healthcare Management Software",
      audience:
        "Hospitals, clinics, medical centers, and healthcare institutions",
    }),

    faqPageSchema([
      {
        question: "What is a Hospital Management System (HMS)?",
        answer:
          "A Hospital Management System (HMS) is a digital platform that helps healthcare facilities manage patient records, appointments, billing, pharmacy, laboratory services, and overall hospital operations.",
      },
      {
        question: "Who is HMS built for?",
        answer:
          "HMS is built for hospitals, clinics, medical centers, and healthcare institutions that need efficient patient management and streamlined operations.",
      },
      {
        question: "Does HMS support patient records management?",
        answer:
          "Yes. HMS provides secure patient records management including registration, medical history, treatment records, and visit tracking.",
      },
      {
        question: "Can HMS manage billing and payments?",
        answer:
          "Yes. HMS includes billing and invoicing features for patient services, consultations, laboratory tests, pharmacy purchases, and financial reporting.",
      },
      {
        question: "Does HMS include pharmacy and laboratory modules?",
        answer:
          "Yes. HMS supports pharmacy inventory management, drug dispensing, and laboratory test management including results tracking and reporting.",
      },
      {
        question: "Does HMS support inpatient and outpatient workflows?",
        answer:
          "Yes. HMS manages both inpatient and outpatient processes including admissions, discharges, appointments, and treatment workflows.",
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
        name: "Hospital Management System",
        url: "https://optimumsystems.co.ke/hms",
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
      <HospitalManagementSystemPage />
      <SiteFooter />
    </div>
  );
}
