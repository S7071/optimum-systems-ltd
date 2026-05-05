import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import ScheduleDemoPage from "@/components/ultimate-cbe/layout01/section-schedule-demo";
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
  title: "Modularized CBET Governance Platform for TVETs in Kenya | Contact Us",
  description:
    "CBET is a modularized curriculum governance platform for TVET and technical institutions in Kenya, built for competency mapping, module sequencing, learner progression tracking, assessment governance, audit trails, and accreditation-ready compliance reporting.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/cbet",
  },
  openGraph: {
    title:
      "Modularized CBET Governance Platform for TVETs in Kenya | Contact Us",
    description:
      "Automate modularized CBET curriculum control with competency mapping, assessment governance, learner progression tracking, ERP integration, audit trails, and compliance-ready reporting.",
    url: "https://optimumsystems.co.ke/cbet/schedule-demo",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/schedule-demo/cbet-og-image.png",
        width: 1200,
        height: 630,
        alt: "Modularized CBET Governance Platform by Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Modularized CBET Governance Platform for TVETs in Kenya | Contact Us",
    description:
      "CBET platform for TVETs with module sequencing, competency mapping, learner progression tracking, assessment governance, audit trails, and compliance reporting.",
    images: ["https://optimumsystems.co.ke/og/schedule-demo/cbet-og-image.png"],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Modularized CBET Governance Platform for TVETs in Kenya",
      path: "/cbet/schedule-demo",
      description:
        "CBET is a secure modularized curriculum governance platform for TVET and technical institutions in Kenya. It centralizes module sequencing, competency mapping, learner progression tracking, assessment governance, audit trails, ERP integration, and accreditation-ready compliance reporting.",
    }),

    productSchema({
      name: "Modularized Curriculum Management Module (CBET)",
      slug: "cbet",
      description:
        "CBET is a modularized curriculum governance platform designed for TVET institutions, national polytechnics, technical colleges, and multi-campus institutions. It supports module sequencing, competency and outcome mapping, formative and summative assessment governance, practical verification, remedials, learner progression tracking, role-based access, audit trails, ERP integration, and accreditation-ready reporting.",
      image: "/og/schedule-demo/cbet-og-image.png",
      category: "CBET Curriculum Governance Software",
      audience:
        "TVET institutions, national polytechnics, technical colleges, and multi-campus training institutions in Kenya",
    }),

    faqPageSchema([
      {
        question: "What is CBET?",
        answer:
          "CBET is a modularized curriculum governance platform that helps TVET and technical institutions manage modules, competencies, credits, learner progression, assessments, audit trails, and compliance reporting from one connected system.",
      },
      {
        question: "Who is CBET built for?",
        answer:
          "CBET is built for TVET institutions, national polytechnics, technical colleges, and multi-campus institutions delivering modularized competency-based education and training.",
      },
      {
        question: "Does CBET support competency mapping?",
        answer:
          "Yes. CBET supports competency and outcome mapping by linking modules, learning outcomes, performance criteria, and assessments in a structured academic governance workflow.",
      },
      {
        question: "Does CBET support assessment governance?",
        answer:
          "Yes. CBET supports formative assessments, summative assessments, practical verification, remedials, completion tracking, and clear assessment-to-competency mapping.",
      },
      {
        question: "Can CBET generate compliance and accreditation reports?",
        answer:
          "Yes. CBET helps institutions generate accreditation-ready reports covering enrolments, completion rates, competency statistics, learner progression, quality assurance, and compliance requirements.",
      },
      {
        question: "Does CBET integrate with ERP systems?",
        answer:
          "Yes. CBET is designed for ERP-connected governance and can integrate with institutional workflows such as registration, scheduling, exams, and certification processes.",
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
        name: "Modularized CBET Governance Platform",
        url: "https://optimumsystems.co.ke/cbet",
      },
      {
        name: "Book a Demo",
        url: "https://optimumsystems.co.ke/cbet/schedule-demo",
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
