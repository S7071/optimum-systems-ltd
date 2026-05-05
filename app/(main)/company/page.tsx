import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import SiteAboutUs from "@/components/ultimate-cbe/layout01/site-aboutus";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import { Metadata } from "next";
import {
  createJsonLdGraph,
  webPageSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/seo/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About Optimum ERP Systems Ltd | ERP Software Company in Kenya",
  description:
    "Learn about Optimum ERP Systems Ltd, a Kenyan software company in Nairobi delivering tailored ERP and management information systems for institutions, enterprises, education, finance, healthcare, retail, and government.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/company",
  },
  openGraph: {
    title: "About Optimum ERP Systems Ltd | ERP Software Company in Kenya",
    description:
      "Optimum ERP Systems Ltd is a Nairobi-based software company delivering tailored ERP systems, hybrid cloud solutions, secure enterprise platforms, and client-centric implementation services.",
    url: "https://optimumsystems.co.ke/company",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/company-og-image.png",
        width: 1200,
        height: 630,
        alt: "About Optimum ERP Systems Ltd software company in Kenya",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Optimum ERP Systems Ltd | ERP Software Company in Kenya",
    description:
      "Nairobi-based ERP software company delivering tailored enterprise systems, hybrid architecture, secure implementation, and long-term technology partnerships.",
    images: ["https://optimumsystems.co.ke/og/company-og-image.png"],
  },
};

export default function PageLayout() {
  const jsonLd = createJsonLdGraph([
  webPageSchema({
    title: "About Optimum ERP Systems Ltd | ERP Software Company in Kenya",
    path: "/company",
    description:
      "Optimum ERP Systems Ltd is a Kenyan software company headquartered in Nairobi, specializing in tailored ERP and management information systems. The company delivers client-centric software solutions that improve efficiency, productivity, service delivery, compliance, reporting, and workflow optimization across institutions and enterprises.",
  }),

  faqPageSchema([
    {
      question: "What does Optimum ERP Systems Ltd do?",
      answer:
        "Optimum ERP Systems Ltd develops tailored ERP and management information systems that help institutions and enterprises improve efficiency, productivity, reporting, compliance, service delivery, and workflow optimization.",
    },
    {
      question: "Where is Optimum ERP Systems Ltd located?",
      answer:
        "Optimum ERP Systems Ltd is headquartered in Nairobi, Kenya, and serves institutions, enterprises, and organizations across the country.",
    },
    {
      question: "What industries does Optimum serve?",
      answer:
        "Optimum serves education, finance, retail, healthcare, hospitality, manufacturing, government, SACCOs, microfinance institutions, distributors, and other enterprise sectors.",
    },
    {
      question: "What makes Optimum ERP Systems Ltd different?",
      answer:
        "Optimum combines tailored ERP implementation, hybrid on-premise and cloud architecture, sector expertise, strong technical capability, long-term support, and client-centric delivery.",
    },
    {
      question: "Does Optimum support hybrid deployment?",
      answer:
        "Yes. Optimum supports hybrid on-premise and cloud deployment, helping organizations protect critical data while enabling secure access to services from anywhere.",
    },
    {
      question: "Is Optimum accredited?",
      answer:
        "Yes. Optimum holds ICT Authority Category 1 accreditations covering systems and applications, information security, cloud computing, and data centre capability. The company is also registered as both a Data Controller and Data Processor under Kenya’s data protection framework.",
    },
  ]),

  breadcrumbSchema([
    {
      name: "Home",
      url: "https://optimumsystems.co.ke",
    },
    {
      name: "Company",
      url: "https://optimumsystems.co.ke/company",
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
      <SiteAboutUs />
      <SiteFooter />
    </div>
  );
}
