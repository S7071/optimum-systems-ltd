import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import SiteContact from "@/components/optimum-systems/layout01/site-contact";
import { Metadata } from "next";
import {
  createJsonLdGraph,
  webPageSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/seo/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us | Enterprise ERP Software in Kenya",
  description:
    "Optimum ERP Systems Ltd develops customizable enterprise ERP software for education, healthcare, finance, retail, manufacturing, hospitality, government, SACCOs, and microfinance institutions in Kenya.",
  alternates: {
    canonical: "https://optimumsystems.co.ke",
  },
  openGraph: {
    title:
      "Optimum ERP Systems Ltd | Contact Us | Enterprise ERP Software in Kenya",
    description:
      "Kenya-based ERP software company delivering scalable, customizable enterprise systems for institutions, businesses, SACCOs, healthcare, education, retail, manufacturing, and government.",
    url: "https://optimumsystems.co.ke",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/contact-us/og-image.png",
        width: 1200,
        height: 630,
        alt: "Optimum ERP Systems Ltd enterprise ERP software solutions in Kenya",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Optimum ERP Systems Ltd | Contact Us | Enterprise ERP Software in Kenya",
    description:
      "Customizable ERP software for education, healthcare, finance, retail, manufacturing, hospitality, government, SACCOs, and microfinance institutions in Kenya.",
    images: ["https://optimumsystems.co.ke/og/contact-us/og-image.png"],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Optimum ERP Systems Ltd | Contact Us | Enterprise ERP Software in Kenya",
      path: "/contact-us",
      description:
        "Optimum ERP Systems Ltd is a Kenya-based enterprise software company delivering customizable ERP systems for education, healthcare, finance, retail, manufacturing, hospitality, government, SACCOs, microfinance, real estate, and institutional operations.",
    }),

    faqPageSchema([
      {
        question: "Where are your offices located?",
        answer:
          "Our head office is located in Nairobi at Tripple Two Address Building, along Thika Road.",
      },
      {
        question: "How long does ERP implementation take?",
        answer:
          "Implementation can begin immediately after contract signing and usually takes about 21 days, depending on the size and complexity of the project.",
      },
      {
        question: "How many modules does UltimateERP have?",
        answer:
          "UltimateERP has more than 30 integrated modules. The modules are pluggable, so clients can purchase and deploy only what they need based on their operations and budget.",
      },
      {
        question: "Do you offer support after purchase?",
        answer:
          "Yes. Optimum ERP Systems Ltd provides support during the initial grace period, which is normally included in the project cost, and continued post-grace-period support through an annual maintenance arrangement.",
      },
      {
        question: "Are your ERP solutions customizable?",
        answer:
          "Yes. Optimum ERP solutions are customizable and can be tailored to suit client workflows while maintaining standard operational and professional best practices.",
      },
      {
        question: "What software solutions do you provide?",
        answer:
          "Optimum ERP Systems Ltd provides ERP solutions for universities, TVETs, colleges, SACCOs, microfinance institutions, distributors, retailers, manufacturers, construction firms, secondary schools, healthcare institutions, hospitality businesses, real estate, and security operations.",
      },
      {
        question: "What architecture do your solutions use?",
        answer:
          "Optimum ERP Systems Ltd provides hybrid architecture covering both desktop applications and web-based applications, combining secure on-premise capabilities with accessible modern web workflows.",
      },
    ]),

    breadcrumbSchema([
      {
        name: "Home",
        url: "https://optimumsystems.co.ke",
      },
      {
        name: "Contact Us",
        url: "https://optimumsystems.co.ke/contact-us",
      },
    ]),
  ]);

  return (
    <div className="flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <JsonLd data={jsonLd} />
      <SiteBanner />
      <SiteNavbar />
      <SiteContact />
      <SiteFooter />
    </div>
  );
}
