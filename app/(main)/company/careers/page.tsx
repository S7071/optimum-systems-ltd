import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import SiteCareer from "@/components/optimum-systems/layout01/site-careers";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import { Metadata } from "next";
import {
  breadcrumbSchema,
  createJsonLdGraph,
  webPageSchema,
} from "@/lib/seo/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Careers at Optimum ERP Systems Ltd | Join Our Team",
  description:
    "Explore career opportunities at Optimum ERP Systems Ltd. Join a Nairobi-based ERP software company building enterprise systems across education, finance, healthcare, retail, and government sectors.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/company/careers",
  },
  openGraph: {
    title: "Careers at Optimum ERP Systems Ltd | Join Our Team",
    description:
      "Work with Optimum ERP Systems Ltd. Discover career opportunities in software engineering, ERP implementation, support, and enterprise systems development in Kenya.",
    url: "https://optimumsystems.co.ke/company/careers",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/careers-og-image.png",
        width: 1200,
        height: 630,
        alt: "Careers at Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Optimum ERP Systems Ltd",
    description:
      "Join a leading ERP software company in Kenya. Explore careers in engineering, implementation, and enterprise systems.",
    images: ["https://optimumsystems.co.ke/og/careers-og-image.png"],
  },
};

export default function PageLayout() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Careers at Optimum ERP Systems Ltd | Join Our Team",
      path: "/company/careers",
      description:
        "Explore careers at Optimum ERP Systems Ltd, a Nairobi-based ERP software company. Join a team building enterprise systems across education, finance, healthcare, retail, manufacturing, and government sectors.",
    }),

    {
      "@type": "CollectionPage",
      "@id": "https://optimumsystems.co.ke/company/careers#careers",
      name: "Careers at Optimum ERP Systems Ltd",
      description:
        "Browse job opportunities, internships, and career openings at Optimum ERP Systems Ltd.",
      url: "https://optimumsystems.co.ke/company/careers",
      isPartOf: {
        "@id": "https://optimumsystems.co.ke/#website",
      },
      about: {
        "@id": "https://optimumsystems.co.ke/#organization",
      },
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
        name: "Careers",
        url: "https://optimumsystems.co.ke/company/careers",
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
      <SiteCareer />
      <SiteFooter />
    </div>
  );
}
