import SiteCTA from "@/components/site-cta";
import SiteFeatures from "@/components/site-features";
import SiteFooter from "@/components/site-footer";
import SiteHero from "@/components/site-hero";
import SiteNavbar from "@/components/site-navbar";
import { SitePartner } from "@/components/site-partners";
import SiteTestimonials from "@/components/site-testimonials";
import SiteApp from "@/components/site-app";

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
