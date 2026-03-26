import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteHero from "@/components/optimum-systems/layout01/site-hero";
import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteStats from "@/components/optimum-systems/layout01/site-stats";
import SiteFeatures from "@/components/optimum-systems/layout02/site-features";
import SiteTestimonials from "@/components/optimum-systems/layout01/site-testimonials";
import SiteFaq from "@/components/optimum-systems/layout01/site-faq";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import SiteMainFeature from "@/components/optimum-systems/layout01/site-main-feature";
import HelpDeskButton from "@/components/optimum-systems/layout01/site-help-banner";
import IndustrySection from "@/components/optimum-systems/layout01/section-industry";
import SiteLogos from "@/components/optimum-systems/layout02/site-logos";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <HelpDeskButton />
      <SiteBanner />
      <SiteNavbar />
      <SiteHero />
      <SiteLogos />
      <SiteMainFeature />
      <IndustrySection />
      <SiteFeatures />
      <SiteStats />
      <SiteTestimonials />
      <SiteFaq />
      <SiteFooter />
    </div>
  );
}
