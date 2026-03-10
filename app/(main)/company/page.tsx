import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import HelpDeskButton from "@/components/optimum-systems/layout01/site-help-banner";
import SiteAboutUs from "@/components/ultimate-cbe/layout01/site-aboutus";

export default function PageLayout() {
  return (
    <div className="flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <HelpDeskButton />
      <SiteBanner />
      <SiteNavbar />
      <SiteAboutUs />
      <SiteFooter />
    </div>
  );
}
