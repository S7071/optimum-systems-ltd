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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
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
