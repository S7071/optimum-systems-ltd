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
  title: "Turnstile Biometric Gate Control System for Secure Access | Schedule Demo",
  description:
    "Turnstile Biometric Gate Control System provides secure facility access using fingerprint and facial authentication, anti-tailgating turnstiles, access enforcement, and real-time entry monitoring.",
  alternates: {
    canonical:
      "https://optimumsystems.co.ke/turnstile-biometric-gate-control-system",
  },
  openGraph: {
    title: "Turnstile Biometric Gate Control System for Secure Access | Schedule Demo",
    description:
      "Control access with biometric turnstiles featuring fingerprint and facial authentication, anti-tailgating design, access enforcement, and real-time monitoring.",
    url: "https://optimumsystems.co.ke/turnstile-biometric-gate-control-system/schedule-demo",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/schedule-demo/turnstile-og-image.png",
        width: 1200,
        height: 630,
        alt: "Turnstile Biometric Gate Control System by Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnstile Biometric Gate Control System | Schedule Demo",
    description:
      "Biometric turnstile system for secure access control using fingerprint and facial authentication with anti-tailgating protection.",
    images: ["https://optimumsystems.co.ke/og/schedule-demo/turnstile-og-image.png"],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Turnstile Biometric Gate Control System for Secure Access | Schedule Demo",
      path: "/turnstile-biometric-gate-control-system/schedule-demo",
      description:
        "Turnstile Biometric Gate Control System provides secure access control using fingerprint and facial authentication, anti-tailgating turnstiles, access enforcement, and real-time entry monitoring for institutions and facilities.",
    }),

    productSchema({
      name: "Turnstile Biometric Gate Control System",
      slug: "turnstile-biometric-gate-control-system",
      description:
        "Turnstile Biometric Gate Control System is a secure access control solution combining biometric authentication with physical turnstile barriers. It supports fingerprint and facial recognition, anti-tailgating full-height turnstiles, access eligibility enforcement, entry logging, and real-time monitoring for institutions, facilities, and high-security environments.",
      image: "/og/turnstile-og-image.png",
      category: "Biometric Access Control and Security System",
      audience:
        "Schools, universities, corporate offices, factories, government facilities, gated premises, and high-security environments",
    }),

    faqPageSchema([
      {
        question: "What is a Turnstile Biometric Gate Control System?",
        answer:
          "It is a secure access control system that combines biometric authentication such as fingerprint and facial recognition with physical turnstile gates to regulate entry and prevent unauthorized access.",
      },
      {
        question: "Who is this system built for?",
        answer:
          "It is built for schools, universities, corporate offices, factories, government facilities, and any organization that requires controlled and secure physical access.",
      },
      {
        question: "Does the system prevent tailgating?",
        answer:
          "Yes. The system uses full-height anti-tailgating turnstiles to ensure that only one authorized individual passes through per authentication.",
      },
      {
        question: "What authentication methods are supported?",
        answer:
          "The system supports fingerprint and facial recognition authentication for secure and reliable identity verification.",
      },
      {
        question: "Can the system enforce access eligibility?",
        answer:
          "Yes. It can enforce access rules based on user status, permissions, schedules, or eligibility criteria.",
      },
      {
        question: "Does the system provide real-time monitoring?",
        answer:
          "Yes. It provides real-time entry logs, monitoring dashboards, and access control reporting for operational visibility.",
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
        name: "Turnstile Biometric Gate Control System",
        url: "https://optimumsystems.co.ke/turnstile-biometric-gate-control-system",
      },
      {
        name: "Schedule Demo",
        url: "https://optimumsystems.co.ke/turnstile-biometric-gate-control-system/schedule-demo",
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
