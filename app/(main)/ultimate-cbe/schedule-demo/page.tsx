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
  title: "UltimateCBE Assessment ERP for Senior Schools in Kenya | Schedule Demo",
  description:
    "UltimateCBE is a competency-based assessment ERP for Kenya senior schools, built for Grades 10–12 with KNEC-aligned grading, competency mapping, continuous assessments, learner progress tracking, parent engagement, and NEMIS-ready workflows.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/ultimate-cbe",
  },
  openGraph: {
    title: "UltimateCBE Assessment ERP for Senior Schools in Kenya | Schedule Demo",
    description:
      "Manage Grades 10–12 with a CBE-aligned ERP for competency mapping, automated grading, continuous assessment, KNEC reporting, parent engagement, and real-time academic visibility.",
    url: "https://optimumsystems.co.ke/ultimate-cbe/schedule-demo",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/schedule-demo/ultimatecbe-og-image.png",
        width: 1200,
        height: 630,
        alt: "UltimateCBE Assessment ERP by Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UltimateCBE Assessment ERP for Senior Schools in Kenya | Schedule Demo",
    description:
      "CBE-aligned assessment ERP for Kenya senior schools with automated grading, competency tracking, KNEC reporting, parent engagement, and NEMIS-ready workflows.",
    images: ["https://optimumsystems.co.ke/og/schedule-demo/ultimatecbe-og-image.png"],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "UltimateCBE Assessment ERP for Senior Schools in Kenya | Schedule Demo",
      path: "/ultimate-cbe/schedule-demo",
      description:
        "UltimateCBE is a competency-based assessment ERP for Kenya senior schools, built for Grades 10–12 with automated grading, competency mapping, continuous assessment management, learner progress tracking, parent engagement, KNEC-aligned reporting, and NEMIS-ready workflows.",
    }),

    productSchema({
      name: "UltimateCBE Assessment ERP",
      slug: "ultimate-cbe",
      description:
        "UltimateCBE is an all-in-one competency-based assessment ERP platform for senior schools in Kenya. It supports Grades 10–12, pathway-based learning, competency mapping, automated grading, continuous and formative assessments, learner performance tracking, parent communication, KNEC-aligned reporting, MOE framework compliance, and NEMIS-ready academic workflows.",
      image: "/og/ultimatecbe-og-image.png",
      category: "Competency-Based Education Assessment ERP Software",
      audience:
        "Senior schools, secondary schools, and learning institutions in Kenya",
    }),

    faqPageSchema([
      {
        question: "What is UltimateCBE?",
        answer:
          "UltimateCBE is a competency-based assessment ERP platform for senior schools in Kenya. It helps institutions manage Grades 10–12 assessments, competency mapping, learner progression, grading, reporting, and academic visibility from one connected system.",
      },
      {
        question: "Who is UltimateCBE built for?",
        answer:
          "UltimateCBE is built for senior schools, secondary schools, and learning institutions delivering competency-based education under Kenya’s CBE framework.",
      },
      {
        question: "Does UltimateCBE support Kenya’s CBE framework?",
        answer:
          "Yes. UltimateCBE is designed to support Kenya’s competency-based education framework, including pathway-based learning, continuous assessments, learner progression tracking, MOE frameworks, KNEC-aligned reporting, and NEMIS-ready workflows.",
      },
      {
        question: "What features does UltimateCBE include?",
        answer:
          "UltimateCBE includes competency mapping, automated grading, continuous and formative assessment management, student performance tracking, parent communication, secure academic records, KNEC reporting, and integration readiness with national education systems such as NEMIS.",
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
        name: "UltimateCBE Assessment ERP",
        url: "https://optimumsystems.co.ke/ultimate-cbe",
      },
      {
        name: "Schedule Demo",
        url: "https://optimumsystems.co.ke/ultimate-cbe/schedule-demo",
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
