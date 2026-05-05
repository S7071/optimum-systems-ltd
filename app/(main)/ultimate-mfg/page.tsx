import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import UltimateManufacturingPage from "@/components/ultimate-manufacturing/page";
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
  title: "Ultimate Manufacturing ERP | Production Management System",
  description:
    "Ultimate Manufacturing ERP helps manufacturers control production planning, work orders, BOMs, WIP tracking, inventory, procurement, sales, finance, costing, HR, payroll, and profitability in one integrated system.",
  alternates: {
    canonical: "https://optimumsystems.co.ke/ultimate-mfg",
  },
  openGraph: {
    title: "Ultimate Manufacturing ERP | Production Management System",
    description:
      "Control production, maximize output, reduce delays, and improve profitability with an integrated manufacturing ERP for planning, BOM, WIP, inventory, procurement, sales, finance, and costing.",
    url: "https://optimumsystems.co.ke/ultimate-mfg",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/ultimatemfg-og-image.png",
        width: 1200,
        height: 630,
        alt: "Ultimate Manufacturing ERP by Optimum ERP Systems Ltd",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultimate Manufacturing ERP",
    description:
      "Manufacturing ERP for production planning, BOMs, WIP tracking, inventory, procurement, costing, sales, finance, HR, and profitability.",
    images: ["https://optimumsystems.co.ke/og/ultimatemfg-og-image.png"],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Ultimate Manufacturing ERP | Production Management System",
      path: "/ultimate-mfg",
      description:
        "Ultimate Manufacturing ERP is a fully integrated manufacturing platform that centralizes production planning, work order control, Bill of Materials management, WIP tracking, inventory, procurement, sales, finance, costing, HR, payroll, and profitability reporting for better manufacturing control and operational visibility.",
    }),

    productSchema({
      name: "Ultimate Manufacturing ERP",
      slug: "ultimate-mfg",
      description:
        "Ultimate Manufacturing ERP is a production management and manufacturing ERP system built for modern manufacturers that need control from planning to profitability. It connects production planning, work orders, Bill of Materials management, work-in-progress tracking, inventory and warehouse management, procurement, sales and order management, financial reporting, HR, payroll, costing, profitability analysis, and real-time operational visibility in one centralized platform.",
      image: "/og/ultimatemfg-og-image.png",
      category: "Manufacturing ERP and Production Management Software",
      audience:
        "Manufacturers, production companies, factories, warehouses, operations teams, procurement teams, finance teams, and manufacturing enterprises",
    }),

    faqPageSchema([
      {
        question: "What is Ultimate Manufacturing ERP?",
        answer:
          "Ultimate Manufacturing ERP is an integrated manufacturing management system that connects production planning, inventory, procurement, sales, finance, costing, HR, payroll, and reporting in one centralized platform.",
      },
      {
        question: "Who is Ultimate Manufacturing ERP built for?",
        answer:
          "Ultimate Manufacturing ERP is built for manufacturers, factories, production companies, warehouses, and operations teams that need better control over planning, production, inventory, costs, and profitability.",
      },
      {
        question:
          "Does Ultimate Manufacturing ERP support production planning?",
        answer:
          "Yes. The system supports production planning, work order management, scheduling, resource requirements, and delivery timeline coordination.",
      },
      {
        question: "Can Ultimate Manufacturing ERP manage Bill of Materials?",
        answer:
          "Yes. Ultimate Manufacturing ERP supports Bill of Materials management, helping manufacturers track raw materials, components, production requirements, and cost calculations.",
      },
      {
        question: "Does Ultimate Manufacturing ERP support WIP tracking?",
        answer:
          "Yes. The platform tracks work in progress at every production stage, giving teams real-time visibility into production performance and workflow efficiency.",
      },
      {
        question:
          "Can Ultimate Manufacturing ERP track costs and profitability?",
        answer:
          "Yes. It tracks material, labor, and operational costs, analyzes variances, and provides profitability visibility to improve margins and decision-making.",
      },
      {
        question:
          "Does Ultimate Manufacturing ERP include inventory and procurement?",
        answer:
          "Yes. The system includes inventory and warehouse management, procurement workflows, supplier coordination, purchase orders, goods receipt, and integration with finance.",
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
        name: "Ultimate Manufacturing ERP",
        url: "https://optimumsystems.co.ke/ultimate-mfg",
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
      <UltimateManufacturingPage />
      <SiteFooter />
    </div>
  );
}
