import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import ReferralManagementModulePage from "@/components/referral-management-module/page";
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
  title: "Referral Management Module for Enrollment Growth",
  description:
    "Referral Management Module is a referral tracking system for institutions, built for referrer registration, lead tracking, verified enrollment rewards, campaign analytics, conversion reporting, and referrer and admin portals.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/referral-management-module",
  },
  openGraph: {
    title: "Referral Management Module for Enrollment Growth",
    description:
      "Grow enrollment with referral tracking, lead management, verified enrollment rewards, campaign analytics, conversion reports, and referrer and admin portals.",
    url: "https://optimumsystems.co.ke/referral-management-module",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/referral-og-image.png",
        width: 1200,
        height: 630,
        alt: "Referral Management Module by Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Referral Management Module",
    description:
      "Referral tracking system for leads, verified enrollments, rewards, campaign analytics, and referrer portals.",
    images: ["https://optimumsystems.co.ke/og/referral-og-image.png"],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Referral Management Module for Enrollment Growth",
      path: "/referral-management-module",
      description:
        "Referral Management Module helps institutions manage referral-driven enrollment growth through referrer registration, lead tracking, verified enrollment workflows, tiered rewards, campaign analytics, conversion reporting, and dedicated referrer and admin portals.",
    }),

    productSchema({
      name: "Referral Management Module",
      slug: "referral-management-module",
      description:
        "Referral Management Module is a digital referral tracking and enrollment growth system for schools, colleges, universities, TVETs, and training institutions. It supports referrer registration, lead capture, referral tracking, verified enrollment validation, reward management, campaign analytics, conversion reporting, and referrer and admin portals.",
      image: "/og/referral-og-image.png",
      category: "Referral Tracking and Enrollment Growth Software",
      audience:
        "Schools, colleges, universities, TVET institutions, training institutions, admissions teams, and marketing departments",
    }),

    faqPageSchema([
      {
        question: "What is Referral Management Module?",
        answer:
          "Referral Management Module is a referral tracking system that helps institutions manage referrers, leads, enrollment conversions, rewards, campaigns, and reporting from one platform.",
      },
      {
        question: "Who is Referral Management Module built for?",
        answer:
          "Referral Management Module is built for schools, colleges, universities, TVET institutions, training institutions, admissions teams, and marketing departments that want to grow enrollment through structured referral programs.",
      },
      {
        question: "Does Referral Management Module track leads?",
        answer:
          "Yes. It tracks referred leads from capture through follow-up, enrollment validation, conversion reporting, and reward eligibility.",
      },
      {
        question: "Can Referral Management Module manage rewards?",
        answer:
          "Yes. It supports reward workflows based on verified enrollments, helping institutions manage referral incentives transparently.",
      },
      {
        question: "Does the module provide campaign analytics?",
        answer:
          "Yes. It provides campaign and conversion analytics to help institutions monitor referral performance, source effectiveness, and enrollment growth.",
      },
      {
        question: "Does Referral Management Module include portals?",
        answer:
          "Yes. It includes referrer and admin portal workflows for referral submission, tracking, management, verification, and reporting.",
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
        name: "Referral Management Module",
        url: "https://optimumsystems.co.ke/referral-management-module",
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
      <ReferralManagementModulePage />
      <SiteFooter />
    </div>
  );
}
