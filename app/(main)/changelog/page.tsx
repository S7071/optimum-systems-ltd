import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import SiteChangeLog from "@/components/ultimate-cbe/layout01/site-changelog";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import { Metadata } from "next";
import {
  createJsonLdGraph,
  webPageSchema,
  breadcrumbSchema,
} from "@/lib/seo/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Changelog | Latest Features & Enhancements",
  description:
    "Explore the latest product updates, feature releases, improvements, cloud storage enhancements, AI assistant upgrades, collaboration tools, and upcoming roadmap updates from Optimum ERP Systems Ltd.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/changelog",
  },
  openGraph: {
    title: "Changelog | Latest Features & Enhancements",
    description:
      "Track the latest updates including cloud storage, AI-powered assistance, collaboration tools, feature improvements, and roadmap enhancements.",
    url: "https://optimumsystems.co.ke/changelog",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/changelog-og-image.png",
        width: 1200,
        height: 630,
        alt: "Product updates by Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Changelog | Latest Features & Enhancements",
    description:
      "Latest feature releases, improvements, cloud storage updates, AI assistant enhancements, and collaboration tools.",
    images: ["https://optimumsystems.co.ke/og/changelog-og-image.png"],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
  webPageSchema({
    title: "Changelog | Latest Features & Enhancements",
    path: "/changelog",
    description:
      "The Optimum ERP Systems Ltd changelog highlights the latest feature releases, improvements, product enhancements, cloud storage updates, AI assistant upgrades, collaboration tools, and upcoming roadmap items.",
  }),

  breadcrumbSchema([
    {
      name: "Home",
      url: "https://optimumsystems.co.ke",
    },
    {
      name: "Changelog",
      url: "https://optimumsystems.co.ke/changelog",
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
      <SiteChangeLog />
      <SiteFooter />
    </div>
  );
}
