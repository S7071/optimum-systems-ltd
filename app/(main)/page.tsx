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
import SiteLogos from "@/components/optimum-systems/layout02/site-logos";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <HelpCenterButton />
      <WhatsappButton />
      <SiteBanner />
      <SiteNavbar />
      <SiteHero />
      <SiteLogos />
      <IndustrySection />
      <SiteMainFeature />
      <SiteFeatures />
      <SiteStats />
      <SiteTestimonials />
      <SiteFaq />
      <SiteFooter />
    </div>
  );
}
