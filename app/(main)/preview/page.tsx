import FeaturesLayout01Section from "@/components/optimum-systems/layout01/section-features-01";
import FeaturesLayout02Section from "@/components/optimum-systems/layout01/section-features-02";
import FeaturesLayout04Section from "@/components/optimum-systems/layout01/section-features-04";
import FeaturesLayout06Section from "@/components/optimum-systems/layout01/section-features-06";
import FeaturesLayout07Section from "@/components/optimum-systems/layout01/section-features-07";
import GallaryLayout01Section from "@/components/optimum-systems/layout01/section-gallery";
import Gallery02Section from "@/components/optimum-systems/layout01/section-gallery-02";
import Gallery03Section from "@/components/optimum-systems/layout01/section-gallery-03";
import StatsLayout01Section from "@/components/optimum-systems/layout01/section-stats-01";
import StatsLayout02Section from "@/components/optimum-systems/layout01/section-stats-02";
import StatsLayout03Section from "@/components/optimum-systems/layout01/section-stats-03";
import Timeline01LayoutSection from "@/components/optimum-systems/layout01/section-timeline-01";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";

export default function PageLayout() {
  return (
    <div className="flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <SiteBanner />
      <SiteNavbar />
      <GallaryLayout01Section />
      <Gallery02Section />
      <Gallery03Section />
      <Timeline01LayoutSection />
      <FeaturesLayout01Section />
      <FeaturesLayout02Section />
      <FeaturesLayout04Section />
      <FeaturesLayout06Section />
      <FeaturesLayout07Section />
      <StatsLayout01Section />
      <StatsLayout02Section />
      <StatsLayout03Section />
      <SiteFooter />
    </div>
  );
}
