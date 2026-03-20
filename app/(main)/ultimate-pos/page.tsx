import SiteHero from "@/components/ultimate-ch/layout02/site-hero";
import SiteDemo from "@/components/ultimate-cbe/layout01/site-demo";
import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteTestimonials from "@/components/ultimate-cbe/layout01/site-testimonials";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import SiteFaq from "@/components/optimum-systems/layout01/site-faq";
import SiteCta from "@/components/ultimate-cbe/layout02/site-cta";
import SitePricing from "@/components/ultimate-cbe/layout01/site-pricing";
import SiteCaseStudies from "@/components/ultimate-cbe/layout01/site-casestudies";
import HelpDeskButton from "@/components/optimum-systems/layout01/site-help-banner";
import WhatWeOfferSection from "@/components/ultimate-ch/layout01/section-whatweoffer";
import FeatureSplitSection from "@/components/ultimate-ch/layout01/section-featuresplit";
import StatsSection from "@/components/ultimate-ch/layout01/section-stats";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <HelpDeskButton />
      <SiteBanner />
      <SiteNavbar />
      <SiteHero />
      <WhatWeOfferSection />
      <FeatureSplitSection />
      <StatsSection />
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