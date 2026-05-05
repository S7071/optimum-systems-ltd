import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import GalleryPageBody from "@/components/ultimate-cbe/layout01/site-gallery";
import { Metadata } from "next";
import {
  createJsonLdGraph,
  webPageSchema,
  breadcrumbSchema,
} from "@/lib/seo/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Gallery | Optimum ERP Systems Ltd in Action",
  description:
    "Explore the Optimum ERP Systems Ltd gallery featuring product demonstrations, client engagements, training sessions, deployments, support visits, institutional events, and ERP implementation moments across Kenya.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/company/gallery",
  },
  openGraph: {
    title: "Gallery | Optimum ERP Systems Ltd in Action",
    description:
      "View highlights from Optimum ERP Systems Ltd including ERP product demos, client training, deployments, support visits, institutional engagements, and company events.",
    url: "https://optimumsystems.co.ke/company/gallery",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/gallery-og-image.png",
        width: 1200,
        height: 630,
        alt: "Optimum ERP Systems Ltd gallery of client engagements and ERP deployments",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Optimum ERP Systems Ltd in Action",
    description:
      "Explore Optimum ERP product demos, training sessions, deployments, client engagements, support visits, and company events.",
    images: ["https://optimumsystems.co.ke/og/gallery-og-image.png"],
  },
};

export default function PageLayout() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Gallery | Optimum ERP Systems Ltd in Action",
      path: "/company/gallery",
      description:
        "The Optimum ERP Systems Ltd gallery showcases company moments, client engagements, product demonstrations, training sessions, ERP deployments, technical support visits, and institutional events across education, enterprise, public sector, and business environments in Kenya.",
    }),

    {
      "@type": "ImageGallery",
      "@id": "https://optimumsystems.co.ke/company/gallery#image-gallery",
      name: "Optimum ERP Systems Ltd Gallery",
      url: "https://optimumsystems.co.ke/company/gallery",
      description:
        "A visual gallery of Optimum ERP Systems Ltd product demos, training sessions, ERP deployments, client engagements, support activities, and institutional events.",
      isPartOf: {
        "@id": "https://optimumsystems.co.ke/#website",
      },
      publisher: {
        "@id": "https://optimumsystems.co.ke/#organization",
      },
      about: [
        "ERP product demonstrations",
        "Client training",
        "Software deployments",
        "Technical support",
        "Institutional engagements",
        "Company events",
        "Enterprise software implementation",
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
        name: "Gallery",
        url: "https://optimumsystems.co.ke/company/gallery",
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
      <GalleryPageBody />
      <SiteFooter />
    </div>
  );
}
