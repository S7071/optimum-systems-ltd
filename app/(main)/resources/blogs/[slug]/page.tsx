/* eslint-disable @typescript-eslint/no-unused-vars */
import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import SiteBlogPost from "@/components/optimum-systems/layout01/site-blogpost";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";

export default async function Home(
  props: PageProps<"/resources/blogs/[slug]">,
) {
  const params = await props.params;
  return (
    <div className="flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <HelpCenterButton />
      <WhatsappButton />
      <SiteBanner />
      <SiteNavbar />
      <SiteBlogPost />
      <SiteFooter />
    </div>
  );
}
