import SiteHero from "@/components/ultimate-rwd/layout01/site-hero";
import SiteDemo from "@/components/ultimate-cbe/layout01/site-demo";
import SiteFeatures from "@/components/ultimate-cbe/layout01/site-features";
import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteTestimonials from "@/components/ultimate-cbe/layout01/site-testimonials";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import SiteFaq from "@/components/ultimate-cbe/layout01/site-faq";
import SiteCta from "@/components/ultimate-cbe/layout02/site-cta";
import { SitePartner } from "@/components/ultimate-erp/layout01/site-partners";
import SitePricing from "@/components/ultimate-cbe/layout01/site-pricing";
import SiteCaseStudies from "@/components/ultimate-cbe/layout01/site-casestudies";
import HelpDeskButton from "@/components/optimum-systems/layout01/site-help-banner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <HelpDeskButton />
      <SiteBanner />
      <SiteNavbar />
      <SiteHero />
      <SitePartner />
      <SiteFeatures />
      <SiteTestimonials />
      <SiteDemo />
      <SitePricing />
      <SiteFaq />
      <SiteCta />
      <SiteCaseStudies />
      <SiteFooter />
    </div>
  );
}
