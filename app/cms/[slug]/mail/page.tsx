import MailApp from "@/components/crm-dashboard/mail-app";
import { SiteHeader } from "@/components/crm-dashboard/site-header";

export default function Page() {
  return (
    <div className="overflow-hidden overflow-clip">
      <SiteHeader />
      <MailApp />
    </div>
  );
}
