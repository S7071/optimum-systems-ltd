import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteFeatures from "@/components/optimum-systems/layout02/site-features";

export default function PageLayout() {
    return (
        <div className="flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
          <HelpCenterButton />
                <WhatsappButton />
          <SiteBanner />
          <SiteNavbar />
          <SiteFeatures />
          <SiteFooter />
        </div>
      );
}