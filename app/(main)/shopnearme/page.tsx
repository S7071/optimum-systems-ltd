import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import FinderAppPage from "@/components/finder-app/page";
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
  title: "ShopNearMe | Discover Local Products & Services",
  description:
    "ShopNearMe is a local marketplace platform that helps users discover nearby products, services, and businesses. Connect buyers and sellers with location-based search, listings, and real-time discovery.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/shopnearme",
  },
  openGraph: {
    title: "ShopNearMe | Discover Local Products & Services",
    description:
      "Find nearby products, services, and businesses with ShopNearMe. A location-based marketplace connecting customers with local sellers.",
    url: "https://optimumsystems.co.ke/shopnearme",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/shopnearme-og-image.png",
        width: 1200,
        height: 630,
        alt: "ShopNearMe marketplace platform by Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopNearMe Marketplace",
    description:
      "Discover local products, services, and businesses near you with a smart marketplace platform.",
    images: ["https://optimumsystems.co.ke/og/shopnearme-og-image.png"],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "ShopNearMe | Discover Local Products & Services",
      path: "/shopnearme",
      description:
        "ShopNearMe is a location-based marketplace platform that helps users discover nearby products, services, and businesses through searchable listings, vendor profiles, and real-time local discovery.",
    }),

    productSchema({
      name: "ShopNearMe Marketplace Platform",
      slug: "shopnearme",
      description:
        "ShopNearMe is a digital marketplace platform designed to connect buyers with local sellers. It supports location-based product discovery, business listings, vendor profiles, category browsing, search functionality, and real-time local commerce visibility.",
      image: "/og/shopnearme-og-image.png",
      category: "Marketplace and Local Business Discovery Platform",
      audience:
        "Retail businesses, service providers, SMEs, local vendors, customers, and marketplace operators",
    }),

    faqPageSchema([
      {
        question: "What is ShopNearMe?",
        answer:
          "ShopNearMe is a local marketplace platform that helps users discover nearby products, services, and businesses using location-based search and listings.",
      },
      {
        question: "Who is ShopNearMe built for?",
        answer:
          "ShopNearMe is built for local businesses, service providers, SMEs, vendors, and customers who want to connect through a digital marketplace platform.",
      },
      {
        question: "Does ShopNearMe support local business listings?",
        answer:
          "Yes. ShopNearMe allows businesses to create listings for their products and services, making them discoverable to nearby customers.",
      },
      {
        question: "Can users search for nearby products and services?",
        answer:
          "Yes. ShopNearMe provides location-based search to help users find products and services near them in real time.",
      },
      {
        question: "Does ShopNearMe support vendor profiles?",
        answer:
          "Yes. Vendors can create profiles showcasing their offerings, business information, and available products or services.",
      },
      {
        question: "Is ShopNearMe suitable for small businesses?",
        answer:
          "Yes. ShopNearMe is designed to help SMEs and local businesses increase visibility, attract customers, and grow through digital discovery.",
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
        name: "ShopNearMe",
        url: "https://optimumsystems.co.ke/shopnearme",
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
      <FinderAppPage />
      <SiteFooter />
    </div>
  );
}
