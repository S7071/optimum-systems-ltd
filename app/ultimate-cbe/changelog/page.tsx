import SiteFooter from "@/components/ultimate-cbe/layout01/site-footer";
import SiteNavbar from "@/components/ultimate-cbe/layout01/site-navbar";
import SiteBanner from "@/components/ultimate-cbe/layout01/site-banner";
import SiteChangeLog from "@/components/ultimate-cbe/layout01/site-changelog";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <SiteBanner />
      <SiteNavbar />
      <SiteChangeLog />
      <SiteFooter />
    </div>
  );
}
