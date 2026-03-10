import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import HelpDeskButton from "@/components/optimum-systems/layout01/site-help-banner";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteFeatures from "@/components/optimum-systems/layout01/site-features";

export default function PageLayout() {
  return (
    <div className="flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <HelpDeskButton />
      <SiteBanner />
      <SiteNavbar />
      <SiteFeatures />
      <SiteFooter />
    </div>
  );
}
