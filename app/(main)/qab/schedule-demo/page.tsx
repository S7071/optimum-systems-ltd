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
  title: "Qualification Award Board System (QAB) for TVETs in Kenya | Schedule Demo",
  description:
    "QAB is a Qualification Award Board system for TVETs and training institutions in Kenya, built for award board workflows, learner qualification review, result approval, certification readiness, audit trails, and academic governance.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/qab",
  },
  openGraph: {
    title: "Qualification Award Board System (QAB) for TVETs in Kenya | Schedule Demo",
    description:
      "Streamline qualification award board workflows with QAB for learner review, result approval, certification readiness, academic governance, audit trails, and institutional reporting.",
    url: "https://optimumsystems.co.ke/qab/schedule-demo",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/schedule-demo/qab-og-image.png",
        width: 1200,
        height: 630,
        alt: "Qualification Award Board System by Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qualification Award Board System (QAB) | Schedule Demo",
    description:
      "Award board software for learner review, result approval, certification readiness, audit trails, and academic governance.",
    images: ["https://optimumsystems.co.ke/og/schedule-demo/qab-og-image.png"],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Qualification Award Board System (QAB) for TVETs in Kenya | Schedule Demo",
      path: "/qab",
      description:
        "QAB is a Qualification Award Board system for TVETs and training institutions. It supports learner qualification review, result approval, certification readiness, award board workflows, academic governance, audit trails, and institutional reporting.",
    }),

    productSchema({
      name: "Qualification Award Board System (QAB)",
      slug: "qab",
      description:
        "QAB is an academic governance and qualification award board system designed for TVETs, colleges, universities, and training institutions. It helps institutions manage learner qualification reviews, assessment outcomes, result approval workflows, board decisions, certification readiness, audit trails, academic compliance, and reporting.",
      image: "/og/qab-og-image.png",
      category: "Academic Governance and Qualification Award Board Software",
      audience:
        "TVET institutions, colleges, universities, examination offices, academic boards, and training institutions",
    }),

    faqPageSchema([
      {
        question: "What is QAB?",
        answer:
          "QAB is a Qualification Award Board system that helps institutions manage learner qualification reviews, result approval, award board decisions, certification readiness, and academic governance workflows.",
      },
      {
        question: "Who is QAB built for?",
        answer:
          "QAB is built for TVET institutions, colleges, universities, examination offices, academic boards, and training institutions that need structured qualification award workflows.",
      },
      {
        question: "Does QAB support qualification review workflows?",
        answer:
          "Yes. QAB supports structured learner qualification review workflows, helping academic teams evaluate eligibility, assessment outcomes, and award readiness.",
      },
      {
        question: "Can QAB manage result approval?",
        answer:
          "Yes. QAB supports result approval workflows, board review processes, decision tracking, and controlled academic governance.",
      },
      {
        question: "Does QAB support certification readiness?",
        answer:
          "Yes. QAB helps institutions confirm learner award eligibility and certification readiness before final approval and issuance.",
      },
      {
        question: "Does QAB provide audit trails and reporting?",
        answer:
          "Yes. QAB maintains audit trails, board decision records, approval history, and institutional reports for transparency and compliance.",
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
        name: "Qualification Award Board System",
        url: "https://optimumsystems.co.ke/qab",
      },
      {
        name: "Schedule Demo",
        url: "https://optimumsystems.co.ke/qab/schedule-demo",
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
