import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import SiteTeam from "@/components/optimum-systems/layout01/site-team";
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
  title: "Our Team | Optimum ERP Systems Ltd",
  description:
    "Meet the multidisciplinary team behind Optimum ERP Systems Ltd, combining leadership, engineering, design, marketing, sales, and product execution to build secure, scalable ERP systems for institutions across Kenya.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/company/team",
  },
  openGraph: {
    title: "Our Team | Optimum ERP Systems Ltd",
    description:
      "Meet the people shaping enterprise transformation at Optimum ERP Systems Ltd across leadership, engineering, design, marketing, sales, and institutional technology delivery.",
    url: "https://optimumsystems.co.ke/company/team",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/team-og-image.png",
        width: 1200,
        height: 630,
        alt: "Optimum ERP Systems Ltd team shaping enterprise transformation",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Optimum ERP Systems Ltd",
    description:
      "Meet the leadership, engineering, design, marketing, sales, and product teams building dependable ERP systems for institutions.",
    images: ["https://optimumsystems.co.ke/og/team-og-image.png"],
  },
};

export default function PageLayout() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Our Team | Optimum ERP Systems Ltd",
      path: "/company/team",
      description:
        "The Optimum ERP Systems Ltd team page introduces the multidisciplinary people shaping enterprise transformation, including leadership, engineering, design, marketing, and sales professionals building secure, scalable, and dependable ERP systems for institutions.",
    }),

    {
      "@type": "CollectionPage",
      "@id": "https://optimumsystems.co.ke/company/team#team",
      name: "Our People",
      headline: "Meet the team shaping enterprise transformation",
      url: "https://optimumsystems.co.ke/company/team",
      description:
        "A team directory for Optimum ERP Systems Ltd featuring professionals across leadership, engineering, design, marketing, and sales.",
      isPartOf: {
        "@id": "https://optimumsystems.co.ke/#website",
      },
      publisher: {
        "@id": "https://optimumsystems.co.ke/#organization",
      },
      about: [
        "Leadership",
        "Engineering",
        "Product design",
        "Marketing",
        "Sales",
        "Enterprise delivery",
        "ERP implementation",
        "Institutional technology",
      ],
      mainEntity: {
        "@type": "ItemList",
        name: "Optimum ERP Systems Ltd Team Members",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "Person",
              name: "Cossigah Mamboleo",
              jobTitle: "CEO",
              worksFor: {
                "@id": "https://optimumsystems.co.ke/#organization",
              },
              knowsAbout: ["Strategy", "Vision", "Growth"],
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "Person",
              name: "Calistus Imbali",
              jobTitle: "Director Business & Corporate Strategy",
              worksFor: {
                "@id": "https://optimumsystems.co.ke/#organization",
              },
              knowsAbout: ["Architecture", "Cloud", "Security"],
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "Person",
              name: "Betty Kinuthia",
              jobTitle: "CMO",
              worksFor: {
                "@id": "https://optimumsystems.co.ke/#organization",
              },
              knowsAbout: ["UX/UI", "Systems", "Research"],
            },
          },
        ],
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
        name: "Our Team",
        url: "https://optimumsystems.co.ke/company/team",
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
      <SiteTeam />
      <SiteFooter />
    </div>
  );
}
