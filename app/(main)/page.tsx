import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteHero from "@/components/optimum-systems/layout01/site-hero";
import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteStats from "@/components/optimum-systems/layout01/site-stats";
import SiteFeatures from "@/components/optimum-systems/layout02/site-features";
import SiteTestimonials from "@/components/optimum-systems/layout01/site-testimonials";
import SiteFaq from "@/components/optimum-systems/layout01/site-faq";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import SiteMainFeature from "@/components/optimum-systems/layout01/site-main-feature";
import IndustrySection from "@/components/optimum-systems/layout01/section-industry";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import SiteCaseStudies from "@/components/ultimate-cbe/layout01/site-casestudies";
import {
  breadcrumbSchema,
  createJsonLdGraph,
  faqPageSchema,
  webPageSchema,
} from "@/lib/seo/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise ERP Software in Kenya",
  description:
    "Optimum ERP Systems Ltd develops customizable enterprise ERP software for education, healthcare, finance, retail, manufacturing, hospitality, government, SACCOs, and microfinance institutions in Kenya.",
  alternates: {
    canonical: "https://optimumsystems.co.ke",
  },
  openGraph: {
    title: "Optimum ERP Systems Ltd | Enterprise ERP Software in Kenya",
    description:
      "Kenya-based ERP software company delivering scalable, customizable enterprise systems for institutions, businesses, SACCOs, healthcare, education, retail, manufacturing, and government.",
    url: "https://optimumsystems.co.ke",
    siteName: "Optimum ERP Systems Ltd",
    images: [
      {
        url: "https://optimumsystems.co.ke/og/og-image.png",
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
    title: "Optimum ERP Systems Ltd | Enterprise ERP Software in Kenya",
    description:
      "Customizable ERP software for education, healthcare, finance, retail, manufacturing, hospitality, government, SACCOs, and microfinance institutions in Kenya.",
    images: ["https://optimumsystems.co.ke/og/og-image.png"],
  },
};

export default function Home() {
  const jsonLd = createJsonLdGraph([
    webPageSchema({
      title: "Optimum ERP Systems Ltd | Enterprise ERP Software in Kenya",
      path: "/",
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
    ]),
  ]);

  return (
    <div className="flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <JsonLd data={jsonLd} />
      <HelpCenterButton />
      <WhatsappButton />
      <SiteBanner />
      <SiteNavbar />
      <SiteHero />
      <SiteStats />
      <IndustrySection />
      <SiteMainFeature />
      <SiteFeatures />
      <SiteTestimonials />
      <SiteCaseStudies
        description="Discover how universities, TVETs, and national polytechnics across Kenya have transformed their operations, improved compliance, and unlocked institutional growth with UltimateERP."
        caseStudies={[
          {
            badge: "Innovation",
            title:
              "Optimum Computer Systems launches AI tool to revolutionize financial reporting",
            description:
              "A breakthrough deployment that dramatically reduced reconciliation delays and modernized finance workflows for institutional teams.",
            metric: "5 mins",
            metricLabel: "Average bank reconciliation time, down from 3 days",
            image:
              "https://assets.citizen.digital/131897/conversions/WhatsApp-Image-2024-08-20-at-13.31.54-og_image.webp",
            href: "https://citizen.digital/article/optimum-computer-systems-launches-ai-tool-to-revolutionize-financial-reporting-n347946",
            institution: "Optimum Computer Systems",
          },
          {
            badge: "Success Story",
            title: "Kisii National Polytechnic Journey to Paperless Operations",
            description:
              "A digital transformation initiative that reduced manual workload, streamlined approvals, and improved operational efficiency campus-wide.",
            metric: "50%",
            metricLabel:
              "Reduction in administrative workload institution-wide",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxZirPhbAqOhCxg8XPbqa805hR9IvbWlkmvQ&s",
            href: "/resources/case-studies",
            institution: "Kisii National Polytechnic",
          },
          {
            badge: "Success Story",
            title: "Turkana University Achieves Full IPSAS & TVETA Compliance",
            description:
              "UltimateERP enabled stronger reporting controls, improved audit readiness, and sustained compliance across core institutional processes.",
            metric: "100%",
            metricLabel:
              "Regulatory audit pass rate since UltimateERP deployment",
            image:
              "https://tuc.ac.ke/wp-content/uploads/2021/10/university-photo-1.jpg",
            href: "/resources/case-studies",
            institution: "Turkana University College",
          },
        ]}
      />
      <SiteFaq />
      <SiteFooter />
    </div>
  );
}
