import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import NexusTradePage from "@/components/nexus-trade/page";
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
  title: "NexusTrade AI Marketplace for Smarter Commerce",
  description:
    "NexusTrade is an AI-powered marketplace platform that connects buyers and sellers, enabling product discovery, smart matching, digital transactions, vendor management, and real-time commerce insights.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/nexus-trade",
  },
  openGraph: {
    title: "NexusTrade AI Marketplace for Smarter Commerce",
    description:
      "Discover products, connect with vendors, and trade smarter using NexusTrade’s AI-powered marketplace with intelligent matching, analytics, and seamless transactions.",
    url: "https://optimumsystems.co.ke/nexus-trade",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/nexus-trade-og-image.png",
        width: 1200,
        height: 630,
        alt: "NexusTrade AI Marketplace Platform by Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusTrade AI Marketplace",
    description:
      "AI-powered marketplace for product discovery, vendor matching, and smarter digital commerce.",
    images: ["https://optimumsystems.co.ke/og/nexus-trade-og-image.png"],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "NexusTrade AI Marketplace for Smarter Commerce",
      path: "/nexus-trade",
      description:
        "NexusTrade is an AI-powered marketplace platform that connects buyers and sellers, enabling product discovery, intelligent matching, vendor engagement, digital transactions, and real-time commerce analytics.",
    }),

    productSchema({
      name: "NexusTrade Marketplace Platform",
      slug: "nexus-trade",
      description:
        "NexusTrade is an AI-powered digital marketplace designed for businesses, vendors, and consumers. It supports product discovery, intelligent buyer-seller matching, vendor management, listings, digital transactions, analytics, and scalable commerce operations across industries.",
      image: "/og/nexus-trade-og-image.png",
      category: "AI-Powered Marketplace and E-Commerce Platform",
      audience:
        "Businesses, vendors, distributors, retailers, and digital commerce platforms",
    }),

    faqPageSchema([
      {
        question: "What is NexusTrade?",
        answer:
          "NexusTrade is an AI-powered marketplace platform that connects buyers and sellers, enabling smart product discovery, vendor matching, and digital transactions.",
      },
      {
        question: "Who is NexusTrade built for?",
        answer:
          "NexusTrade is built for businesses, vendors, distributors, retailers, and organizations looking to digitize and scale their commerce operations.",
      },
      {
        question: "Does NexusTrade support product discovery?",
        answer:
          "Yes. NexusTrade uses AI-powered matching to help users discover relevant products, suppliers, and opportunities quickly.",
      },
      {
        question: "Can NexusTrade manage vendors and listings?",
        answer:
          "Yes. NexusTrade supports vendor onboarding, product listings, catalog management, and marketplace participation.",
      },
      {
        question: "Does NexusTrade support digital transactions?",
        answer:
          "Yes. NexusTrade enables seamless digital commerce workflows including product browsing, engagement, and transaction processing.",
      },
      {
        question: "Does NexusTrade provide analytics?",
        answer:
          "Yes. NexusTrade provides insights into product performance, user behavior, transactions, and marketplace activity.",
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
        name: "NexusTrade Marketplace",
        url: "https://optimumsystems.co.ke/nexus-trade",
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
      <NexusTradePage />
      <SiteFooter />
    </div>
  );
}
