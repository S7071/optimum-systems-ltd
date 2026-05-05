import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import TermsConditionsPage from "@/components/optimum-systems/layout01/section-terms";
import { Metadata } from "next";
import {
  createJsonLdGraph,
  webPageSchema,
  breadcrumbSchema,
} from "@/lib/seo/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Terms of Service | Optimum ERP Systems Ltd",
  description:
    "Read the Optimum ERP Systems Ltd Terms of Service covering website use, software services, user responsibilities, intellectual property, acceptable use, limitations of liability, termination, and governing terms.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/company/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | Optimum ERP Systems Ltd",
    description:
      "Review the terms governing use of Optimum ERP Systems Ltd websites, software platforms, services, content, user obligations, acceptable use, and legal responsibilities.",
    url: "https://optimumsystems.co.ke/company/terms-of-service",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/terms-of-service-og-image.png",
        width: 1200,
        height: 630,
        alt: "Terms of Service for Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Optimum ERP Systems Ltd",
    description:
      "Review Optimum ERP Systems Ltd terms covering website use, software services, acceptable use, intellectual property, liability, and user responsibilities.",
    images: ["https://optimumsystems.co.ke/og/terms-of-service-og-image.png"],
  },
};

export default function PageLayout() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Terms of Service | Optimum ERP Systems Ltd",
      path: "/company/terms-of-service",
      description:
        "The Optimum ERP Systems Ltd Terms of Service explain the rules and conditions governing use of the company website, software platforms, services, content, intellectual property, acceptable use, user responsibilities, service limitations, liability, termination, and related legal terms.",
    }),

    {
      "@type": "WebPage",
      "@id": "https://optimumsystems.co.ke/company/terms-of-service#terms",
      name: "Terms of Service",
      url: "https://optimumsystems.co.ke/company/terms-of-service",
      description:
        "This Terms of Service page outlines the legal conditions for using Optimum ERP Systems Ltd websites, software services, digital platforms, content, and related business services.",
      isPartOf: {
        "@id": "https://optimumsystems.co.ke/#website",
      },
      publisher: {
        "@id": "https://optimumsystems.co.ke/#organization",
      },
      about: [
        "Terms of service",
        "Website use",
        "Software services",
        "User responsibilities",
        "Acceptable use",
        "Intellectual property",
        "Service limitations",
        "Liability",
        "Termination",
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
        name: "Terms of Service",
        url: "https://optimumsystems.co.ke/company/terms-of-service",
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
      <TermsConditionsPage />
      <SiteFooter />
    </div>
  );
}
