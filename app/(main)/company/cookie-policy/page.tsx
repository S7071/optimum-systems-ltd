import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import CookiePolicyPage from "@/components/optimum-systems/layout01/section-cookie-policy";
import { Metadata } from "next";
import {
  createJsonLdGraph,
  webPageSchema,
  breadcrumbSchema,
} from "@/lib/seo/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Cookie Policy | Optimum ERP Systems Ltd",
  description:
    "Read the Optimum ERP Systems Ltd Cookie Policy to understand how cookies and similar technologies support website functionality, analytics, performance, user preferences, third-party integrations, and cookie consent choices.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/company/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy | Optimum ERP Systems Ltd",
    description:
      "Learn how Optimum ERP Systems Ltd uses cookies for secure website operation, analytics, performance, functionality, third-party tools, and user preference management.",
    url: "https://optimumsystems.co.ke/company/cookie-policy",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/cookie-policy-og-image.png",
        width: 1200,
        height: 630,
        alt: "Cookie Policy for Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | Optimum ERP Systems Ltd",
    description:
      "Understand how Optimum ERP Systems Ltd uses cookies, analytics, performance tools, third-party integrations, and consent preferences.",
    images: ["https://optimumsystems.co.ke/og/cookie-policy-og-image.png"],
  },
};

export default function PageLayout() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Cookie Policy | Optimum ERP Systems Ltd",
      path: "/company/cookie-policy",
      description:
        "The Optimum ERP Systems Ltd Cookie Policy explains how cookies and similar technologies are used across the website and digital platforms, including strictly necessary cookies, analytics and performance cookies, functional cookies, third-party cookies, cookie preference management, data protection practices, policy updates, and contact information.",
    }),

    {
      "@type": "WebPage",
      "@id": "https://optimumsystems.co.ke/company/cookie-policy#cookie-policy",
      name: "Cookie Policy",
      url: "https://optimumsystems.co.ke/company/cookie-policy",
      description:
        "This Cookie Policy explains how Optimum ERP Systems Ltd uses cookies and similar technologies to support website functionality, analytics, performance, user preferences, security controls, third-party integrations, and consent choices.",
      datePublished: "2026-04-01",
      dateModified: "2026-04-01",
      isPartOf: {
        "@id": "https://optimumsystems.co.ke/#website",
      },
      publisher: {
        "@id": "https://optimumsystems.co.ke/#organization",
      },
      about: [
        "Cookies",
        "Website analytics",
        "Performance cookies",
        "Functional cookies",
        "Third-party cookies",
        "Cookie preferences",
        "Data protection",
      ],
    },

    breadcrumbSchema([
      {
        name: "Home",
        url: "https://optimumsystems.co.ke",
      },
      {
        name: "Company",
        url: "https://optimumsystems.co.ke/company",
      },
      {
        name: "Cookie Policy",
        url: "https://optimumsystems.co.ke/company/cookie-policy",
      },
    ]),
  ]);

  return (
    <div className="flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <JsonLd data={jsonLd} />
      <HelpCenterButton />
      <WhatsappButton />
      <SiteBanner />
      <SiteNavbar />
      <CookiePolicyPage />
      <SiteFooter />
    </div>
  );
}
