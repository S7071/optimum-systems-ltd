import SiteCTA from "@/components/site-cta";
import SiteFeatures from "@/components/layout01/site-features";
import SiteFooter from "@/components/layout01/site-footer";
import SiteNavbar from "@/components/layout01/site-navbar";
import { SitePartner } from "@/components/site-partners";
import SiteTestimonials from "@/components/site-testimonials";
import SiteApp from "@/components/site-app";
import SiteHero from "@/components/layout01/site-hero";

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
