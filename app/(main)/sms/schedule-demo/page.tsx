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
  title: "Security Management System (SMS) for Safer Operations | Schedule Demo",
  description:
    "SMS is a security management system for organizations, built for incident reporting, guard operations, visitor control, patrol monitoring, access oversight, emergency response, and real-time security intelligence.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/sms",
  },
  openGraph: {
    title: "Security Management System (SMS) for Safer Operations | Schedule Demo",
    description:
      "Strengthen security operations with SMS for incident reporting, guard management, visitor control, patrol monitoring, access oversight, emergency response, and real-time security dashboards.",
    url: "https://optimumsystems.co.ke/sms/schedule-demo",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/schedule-demo/sms-og-image.png",
        width: 1200,
        height: 630,
        alt: "Security Management System by Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Management System (SMS) | Schedule Demo",
    description:
      "Security operations software for incidents, guards, visitors, patrols, access oversight, emergencies, and real-time dashboards.",
    images: ["https://optimumsystems.co.ke/og/schedule-demo/sms-og-image.png"],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Security Management System (SMS) for Safer Operations | Schedule Demo",
      path: "/sms/schedule-demo",
      description:
        "SMS is a security management system that helps organizations digitize security operations, including incident reporting, guard management, visitor control, patrol monitoring, access oversight, emergency response, and real-time security intelligence.",
    }),

    productSchema({
      name: "Security Management System (SMS)",
      slug: "sms",
      description:
        "SMS is a security operations management system designed for institutions, enterprises, facilities, security teams, and public-sector organizations. It supports incident reporting, guard operations, visitor management, patrol monitoring, access oversight, emergency response workflows, security dashboards, audit trails, and real-time operational visibility.",
      image: "/og/sms-og-image.png",
      category: "Security Operations Management Software",
      audience:
        "Institutions, enterprises, facilities, security teams, property managers, and public-sector organizations",
    }),

    faqPageSchema([
      {
        question: "What is SMS?",
        answer:
          "SMS is a security management system that helps organizations manage incidents, guards, visitors, patrols, access oversight, emergencies, and security reporting from one platform.",
      },
      {
        question: "Who is SMS built for?",
        answer:
          "SMS is built for institutions, enterprises, facilities, security teams, property managers, and public-sector organizations that need better visibility and control over security operations.",
      },
      {
        question: "Does SMS support incident reporting?",
        answer:
          "Yes. SMS supports structured incident reporting, follow-up workflows, audit trails, and real-time visibility into security events.",
      },
      {
        question: "Can SMS manage guard operations?",
        answer:
          "Yes. SMS helps manage guard assignments, activity logs, patrol monitoring, shift visibility, and operational accountability.",
      },
      {
        question: "Does SMS support visitor control?",
        answer:
          "Yes. SMS supports visitor registration, access oversight, movement records, and controlled entry workflows.",
      },
      {
        question: "Can SMS provide real-time security reports?",
        answer:
          "Yes. SMS provides dashboards and reports for incidents, patrols, visitors, access activity, emergency response, and overall security performance.",
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
        name: "Security Management System",
        url: "https://optimumsystems.co.ke/sms",
      },
      {
        name: "Schedule Demo",
        url: "https://optimumsystems.co.ke/sms/schedule-demo",
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
