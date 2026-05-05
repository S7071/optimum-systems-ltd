import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import { SiteHelpCenter } from "@/components/ultimate-cbe/layout01/site-helpcenter";
import { Metadata } from "next";
import {
  createJsonLdGraph,
  webPageSchema,
  breadcrumbSchema,
} from "@/lib/seo/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Help Center | Optimum ERP Systems Ltd Support",
  description:
    "Get support from Optimum ERP Systems Ltd through the Help Center. Access ERP assistance, product support, implementation help, troubleshooting guidance, client service channels, and expert technical support.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/company/help-center",
  },
  openGraph: {
    title: "Help Center | Optimum ERP Systems Ltd Support",
    description:
      "Find ERP product support, implementation assistance, troubleshooting guidance, service channels, and expert help from Optimum ERP Systems Ltd.",
    url: "https://optimumsystems.co.ke/company/help-center",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/help-center-og-image.png",
        width: 1200,
        height: 630,
        alt: "Optimum ERP Systems Ltd Help Center and Support",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Help Center | Optimum ERP Systems Ltd Support",
    description:
      "Access ERP support, product assistance, troubleshooting help, and client service channels from Optimum ERP Systems Ltd.",
    images: ["https://optimumsystems.co.ke/og/help-center-og-image.png"],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Help Center | Optimum ERP Systems Ltd Support",
      path: "/company/help-center",
      description:
        "The Optimum ERP Systems Ltd Help Center provides client support resources, ERP product assistance, implementation guidance, troubleshooting support, technical help channels, and service information for institutions and enterprises using Optimum ERP solutions.",
    }),

    {
      "@type": "CollectionPage",
      "@id": "https://optimumsystems.co.ke/company/help-center#support-center",
      name: "Optimum ERP Systems Ltd Help Center",
      url: "https://optimumsystems.co.ke/company/help-center",
      description:
        "A support center for ERP users, clients, and institutions seeking assistance with Optimum ERP products, implementation, troubleshooting, training, and technical support.",
      isPartOf: {
        "@id": "https://optimumsystems.co.ke/#website",
      },
      publisher: {
        "@id": "https://optimumsystems.co.ke/#organization",
      },
      about: [
        "ERP support",
        "Product assistance",
        "Technical support",
        "Implementation help",
        "Troubleshooting",
        "Client service",
        "Training support",
        "Enterprise software support",
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
        name: "Help Center",
        url: "https://optimumsystems.co.ke/company/help-center",
      },
    ]),
  ]);

  return (
    <div className="flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <JsonLd data={jsonLd} />
      <SiteBanner />
      <SiteNavbar />
      <SiteHelpCenter />
      <SiteFooter />
    </div>
  );
}
