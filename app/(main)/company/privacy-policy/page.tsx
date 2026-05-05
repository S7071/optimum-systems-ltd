import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import PrivacyPolicyPage from "@/components/optimum-systems/layout01/section-privacy-policy";
import { Metadata } from "next";
import {
  createJsonLdGraph,
  webPageSchema,
  breadcrumbSchema,
} from "@/lib/seo/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy | Optimum ERP Systems Ltd",
  description:
    "Read the Optimum ERP Systems Ltd Privacy Policy to understand how we collect, use, store, and protect personal data in compliance with Kenya’s Data Protection Act, including user rights, data security, and privacy practices.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/company/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Optimum ERP Systems Ltd",
    description:
      "Learn how Optimum ERP Systems Ltd handles personal data, privacy rights, data protection, security measures, and compliance with Kenya’s Data Protection Act.",
    url: "https://optimumsystems.co.ke/company/privacy-policy",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/privacy-policy-og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Optimum ERP Systems Ltd",
    description:
      "Understand how Optimum ERP Systems Ltd collects, uses, and protects personal data in compliance with Kenya’s Data Protection laws.",
    images: ["https://optimumsystems.co.ke/og/privacy-policy-og-image.png"],
  },
};

export default function PageLayout() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Privacy Policy | Optimum ERP Systems Ltd",
      path: "/company/privacy-policy",
      description:
        "The Optimum ERP Systems Ltd Privacy Policy explains how personal data is collected, processed, stored, and protected, including user rights, lawful processing, security measures, and compliance with Kenya’s Data Protection Act.",
    }),

    {
      "@type": "WebPage",
      "@id":
        "https://optimumsystems.co.ke/company/privacy-policy#privacy-policy",
      name: "Privacy Policy",
      url: "https://optimumsystems.co.ke/company/privacy-policy",
      description:
        "This Privacy Policy outlines how Optimum ERP Systems Ltd handles personal data, including data collection, usage, storage, protection, third-party sharing, user rights, and compliance with applicable data protection laws.",
      datePublished: "2026-04-01",
      dateModified: "2026-04-01",
      isPartOf: {
        "@id": "https://optimumsystems.co.ke/#website",
      },
      publisher: {
        "@id": "https://optimumsystems.co.ke/#organization",
      },
      about: [
        "Data protection",
        "Privacy policy",
        "Personal data",
        "User rights",
        "Data security",
        "Data processing",
        "Kenya Data Protection Act",
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
        name: "Privacy Policy",
        url: "https://optimumsystems.co.ke/company/privacy-policy",
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
      <PrivacyPolicyPage />
      <SiteFooter />
    </div>
  );
}
