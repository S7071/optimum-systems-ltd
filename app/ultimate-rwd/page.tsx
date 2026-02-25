import SiteHero from "@/components/ultimate-rwd/layout01/site-hero";
import SiteNavbar from "@/components/ultimate-rwd/layout01/site-navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <SiteNavbar />
      <SiteHero />
    </div>
  );
}
