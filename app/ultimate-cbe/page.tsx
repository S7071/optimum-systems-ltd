import SiteDemo from "@/components/ultimate-cbe/layout01/site-demo";
import SiteFeatures from "@/components/ultimate-cbe/layout01/site-features";
import SiteFooter from "@/components/ultimate-cbe/layout01/site-footer";
import SiteNavbar from "@/components/ultimate-cbe/layout01/site-navbar";
import SiteTestimonials from "@/components/ultimate-cbe/layout01/site-testimonials";
import SiteHero from "@/components/ultimate-cbe/layout02/site-hero";
import SiteBanner from "@/components/ultimate-cbe/layout01/site-banner";
import SiteFaq from "@/components/ultimate-cbe/layout01/site-faq";
import SiteCta from "@/components/ultimate-cbe/layout02/site-cta";
import { SitePartner } from "@/components/ultimate-erp/layout01/site-partners";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <SiteBanner />
      <SiteNavbar />
      <SiteHero />
      <SitePartner />
      <SiteFeatures />
      <SiteTestimonials />
      <SiteDemo />
      <SiteFaq />
      <SiteCta />
      <SiteFooter />
    </div>
  );
}
