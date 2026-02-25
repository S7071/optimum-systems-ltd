import SiteCTA from "@/components/ultimate-erp/layout01/site-cta";
import SiteFeatures from "@/components/ultimate-erp/layout01/site-features";
import SiteFooter from "@/components/ultimate-erp/layout01/site-footer";
import SiteHero from "@/components/ultimate-erp/layout01/site-hero";
import SiteNavbar from "@/components/ultimate-erp/layout01/site-navbar";
import { SitePartner } from "@/components/ultimate-erp/layout01/site-partners";
import SiteTestimonials from "@/components/ultimate-erp/layout01/site-testimonials";
import SiteApp from "@/components/ultimate-erp/layout01/site-app";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <SiteNavbar />
      <SiteHero />
      <SitePartner />
      <SiteFeatures />
      <SiteTestimonials />
      <SiteCTA />
      <SiteApp />
      <SiteFooter />
    </div>
  );
}
