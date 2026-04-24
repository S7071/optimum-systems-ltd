import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";
import CaseStudiesPage from "@/components/optimum-systems/layout01/section-case-studies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies - Optimum ERP Systems Ltd",
  description:
    "Et deserunt consequat minim veniam adipisicing pariatur mollit veniam ea aliquip laborum aliqua dolore Lorem. Culpa consectetur deserunt adipisicing amet ex in exercitation ut deserunt exercitation deserunt amet enim. Deserunt mollit occaecat aliquip excepteur velit esse dolor enim in esse aute elit ex officia. Culpa aliqua reprehenderit quis laborum non anim dolore in officia nulla.",
};

export default function PageLayout() {
  return (
    <div className="flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <HelpCenterButton />
      <WhatsappButton />
      <SiteBanner />
      <SiteNavbar />
      <CaseStudiesPage />
      <SiteFooter />
    </div>
  );
}
