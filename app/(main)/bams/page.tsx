import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import BAMSPage from "@/components/bams/page";
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
  title: "Biometric Attendance System for Staff and Students in Kenya",
  description:
    "BAMS is a biometric attendance system for institutions in Kenya, built for fingerprint-based attendance capture, trainer-led sessions, automated percentage calculation, real-time reporting, and reliable staff and student attendance tracking.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/bams",
  },
  openGraph: {
    title: "Biometric Attendance System for Staff and Students in Kenya",
    description:
      "Track staff and student attendance with BAMS, a biometric attendance system for fingerprint capture, trainer-initiated sessions, automatic percentage calculation, and real-time reporting.",
    url: "https://optimumsystems.co.ke/bams",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/bams-og-image.png",
        width: 1200,
        height: 630,
        alt: "Biometric Attendance System by Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biometric Attendance System for Staff and Students in Kenya",
    description:
      "Fingerprint-based attendance system for staff and students with automated percentages, trainer-led sessions, and real-time reports.",
    images: ["https://optimumsystems.co.ke/og/bams-og-image.png"],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Biometric Attendance System for Staff and Students in Kenya",
      path: "/bams",
      description:
        "BAMS is a biometric attendance system for institutions in Kenya. It enables fingerprint-based attendance capture, trainer-initiated sessions, automated attendance percentage calculation, real-time attendance reporting, and accurate staff and student attendance tracking.",
    }),

    productSchema({
      name: "Biometric Attendance System (BAMS)",
      slug: "bams",
      description:
        "BAMS is a biometric attendance management system designed for schools, colleges, TVETs, universities, training institutions, and organizations that need accurate staff and student attendance tracking. It supports fingerprint attendance capture, trainer-initiated sessions, automatic attendance percentage calculation, real-time reporting, and secure attendance records.",
      image: "/og/bams-og-image.png",
      category: "Biometric Attendance Management Software",
      audience:
        "Schools, colleges, TVETs, universities, training institutions, and organizations in Kenya",
    }),

    faqPageSchema([
      {
        question: "What is BAMS?",
        answer:
          "BAMS is a biometric attendance system that helps institutions and organizations capture, manage, and report staff and student attendance using biometric verification such as fingerprint attendance capture.",
      },
      {
        question: "Who is BAMS built for?",
        answer:
          "BAMS is built for schools, colleges, TVETs, universities, training institutions, and organizations that need accurate, reliable, and auditable attendance tracking.",
      },
      {
        question: "Does BAMS support trainer-initiated sessions?",
        answer:
          "Yes. BAMS supports trainer-initiated attendance sessions, allowing attendance to be captured against specific classes, sessions, or training activities.",
      },
      {
        question: "Can BAMS calculate attendance percentages automatically?",
        answer:
          "Yes. BAMS can automatically calculate attendance percentages, helping institutions monitor participation, compliance, and attendance performance in real time.",
      },
      {
        question: "Does BAMS provide real-time attendance reports?",
        answer:
          "Yes. BAMS provides real-time attendance reporting, giving administrators visibility into attendance records, session participation, and attendance trends.",
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
        name: "Biometric Attendance System",
        url: "https://optimumsystems.co.ke/bams",
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
      <BAMSPage />
      <SiteFooter />
    </div>
  );
}
