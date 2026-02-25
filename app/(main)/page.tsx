import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteHero from "@/components/optimum-systems/layout01/site-hero";
import SiteFooter from "@/components/optimum-systems/layout01/site-footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <SiteNavbar />
      <SiteHero />
      <div className="h-200 w-full bg-green-200"></div>
      <SiteFooter />
    </div>
  );
}
