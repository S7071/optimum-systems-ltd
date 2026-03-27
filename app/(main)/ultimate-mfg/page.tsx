import SiteHero from "@/components/ultimate-manufacturing/layout01/site-hero";
import SiteDemo from "@/components/ultimate-cbe/layout01/site-demo";
import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import SiteCta from "@/components/ultimate-cbe/layout02/site-cta";
import WhatWeOfferSection from "@/components/ultimate-ch/layout01/section-whatweoffer";
import FeatureSplitSection from "@/components/ultimate-ch/layout01/section-featuresplit";
import StatsSection from "@/components/ultimate-ch/layout01/section-stats";
import {
  Calendar,
  ChartBarBigIcon,
  Target,
  FileEdit,
  Users2,
  TimerReset,
  Users,
  ShieldCheck,
  Clock,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import HelpCenterButton from "@/components/optimum-systems/layout01/section-help-center";
import WhatsappButton from "@/components/optimum-systems/layout01/section-whatsapp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <HelpCenterButton />
            <WhatsappButton />
      <SiteBanner />
      <SiteNavbar />
      <SiteHero />
      <WhatWeOfferSection
        eyebrow="PLATFORM CAPABILITIES"
        title="What"
        titleSuffix="We Offer"
        description="Transform manufacturing operations with Kenya's most powerful production ERP — purpose-built to optimize every stage from raw material to finished goods and beyond."
        card={[
          {
            title: "Production Planning & Work Orders",
            description:
              "End-to-end production lifecycle management — from scheduled work orders and BOM-driven planning to WIP tracking and real-time performance monitoring at every stage of the floor.",
            icon: Calendar,
            cta: "Plan Production",
            featured: false,
          },
          {
            title: "CEO Manufacturing Dashboard",
            description:
              "Real-time plant performance, production costs, variance analysis, sales trends, and procurement KPIs — all in one executive command center accessible from any device, anywhere.",
            icon: ChartBarBigIcon,
            cta: "Live Insights",
            featured: true,
          },
          {
            title: "Bill of Materials & Costing",
            description:
              "Visualize and manage product-component relationships with full precision. Track costs and variances in real-time across purchasing, inventory, labor wages, and work orders with complete drill-down.",
            icon: Target,
            cta: "Track Costs",
            featured: false,
          },
          {
            title: "Procurement & Warehouse Management",
            description:
              "Automate the full procurement cycle from pre-qualification to GRN, with multi-location inventory control, automated reordering, vendor ratings, and full audit trails across all stock movements.",
            icon: FileEdit,
            cta: "Manage Stock",
            featured: false,
          },
          {
            title: "Sales & Revenue Management",
            description:
              "Full-cycle sales visibility from quotation to invoice — track accounts receivable, analyze performance by product and rep, and make production decisions backed by real market demand data.",
            icon: Users2,
            cta: "View Sales",
            featured: false,
          },
          {
            title: "Finance, HR & Payroll",
            description:
              "Integrated financial management with IPSAS-aligned general ledger, budgetary controls, bank reconciliation, and full HR and payroll automation — scalable across single or multi-plant operations.",
            icon: TimerReset,
            cta: "Explore Finance",
            featured: false,
          },
        ]}
      />
      <FeatureSplitSection
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
        titlePrefix="Control Every Stage"
        title="of Your Production on"
        titleSuffix="One Integrated Platform"
        description="Ultimate Manufacturing ERP unifies production planning, procurement, sales, costing, and HR into a single intelligent system — built for Kenyan manufacturers and processors ready to scale."
        eyebrow="ALL-IN-ONE SOLUTION"
        badge="SCM ERP PLATFORM"
        bulletPoints={[
          {
            label:
              "Optimize resource utilization with real-time BOM, WIP tracking, and variance analysis across every work order",
          },
          {
            label:
              "Make faster decisions with an executive CEO dashboard showing live production, cost, and sales KPIs",
          },
          {
            label:
              "Scale seamlessly across multiple plants with fully integrated procurement, finance, and payroll modules",
          },
        ]}
        cta={{
          cta: "Book a Demo",
          ctaLink: "/contact-us",
          action: "See Case Studies",
          actionLink: "ultimate-scm/case-studies",
        }}
        card={{
          title: "Today's Production",
          stats: [
            {
              label: "Finished Goods",
              value: 92,
              color: "bg-primary-cbe-500",
            },
            {
              label: "WIP Progress",
              value: 78,
              color: "bg-[#2e86d4]",
            },
            {
              label: "Raw Material Use",
              value: 66,
              color: "bg-[#C0392B]",
            },
          ],
          overview: [
            {
              label: "Work Orders",
              value: 47,
              color: "bg-primary-cbe-500",
            },
            {
              label: "Dispatched",
              value: 12,
              color: "bg-[#2e86d4]",
            },
            {
              label: "Pending",
              value: 5,
              color: "bg-[#C0392B]",
            },
          ],
        }}
      />
      <StatsSection
        description="Built for Kenya's manufacturers and processors. Plan production, track costs in real-time, manage procurement and HR — and give leadership the live plant visibility they need to drive results."
        title={
          <h3 className="text-2xl sm:text-4xl text-pretty leading-tight tracking-tight font-extrabold text-primary-cbe-500">
            Stay Ahead With <span className="text-primary-cta">Real-Time</span>{" "}
            Supply Chain Intelligence
          </h3>
        }
        eyebrow="Intelligent Operations"
        statCards={[
          {
            value: "150+",
            description:
              "Businesses successfully deployed across Kenya & East Africa",
            icon: Users,
            accent: false,
          },
          {
            value: "98%",
            description: "Uptime guarantee on cloud-hosted deployments",
            icon: ShieldCheck,
            accent: true,
          },
          {
            value: "40%",
            description:
              "Average reduction in operational costs reported by clients",
            icon: Clock,
            accent: false,
          },
          {
            value: "24/7",
            description: "Local Kenyan support team always available",
            icon: BarChart3,
            accent: false,
          },
        ]}
      />
      <SiteDemo
        title={
          <h2 className="font-extrabold text-2xl sm:text-4xl text-pretty leading-tight tracking-tight text-white">
            Get A Powerful Start
            <br />
            With <span className="text-primary-cta">UltimateSCM</span>
            <br />
            ERP Today
          </h2>
        }
        cards={[
          <div
            key="1"
            className="absolute -right-4 -top-4 hidden min-w-[168px] items-center gap-3 rounded-sm bg-white p-2 shadow-lg md:flex"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-blue-50">
              <TrendingUp
                size={4.5}
                className="size-4.5 text-primary-cbe-700"
              />
            </div>
            <div className="pr-5 flex flex-col gap-1">
              <p className="text-xs text-primary-cbe-800/40">Monthly Revenue</p>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-primary-cbe-800 leading-tight">
                  KES 48M
                </span>
                <span className="rounded-full bg-green-50 px-1.5 py-0.5 text-[9px] text-green-600">
                  +12.84%
                </span>
              </div>
            </div>
          </div>,
          <div
            key="2"
            className="absolute -bottom-4 -left-4 hidden min-w-[188px] items-center gap-3 rounded-sm bg-white p-2 shadow-xl md:flex"
          >
            {/* Stacked avatars */}
            <div className="flex flex-shrink-0 -space-x-2">
              {(
                [
                  { initials: "AN", bg: "bg-primary-cbe-700" },
                  { initials: "BK", bg: "bg-red-500" },
                  { initials: "CM", bg: "bg-violet-600" },
                ] as const
              ).map(({ initials, bg }) => (
                <span
                  key={initials}
                  className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[9px] font-semibold text-white ${bg}`}
                >
                  {initials}
                </span>
              ))}
            </div>
            <div className="pr-5 flex flex-col gap-1">
              <p className="text-sm font-bold text-primary-cbe-800 leading-tight">
                Van reps active now
              </p>
              <p className="text-xs text-primary-cbe-800/40">
                12 of 16 online today
              </p>
            </div>
          </div>,
        ]}
        videoSrc="https://www.youtube.com/embed/Da1hUqzoiAo?autoplay=1"
        videoTitle="Optimum ERP System – Product Walkthrough"
        mockupSrc="/images/cta.png"
        description="Built for Kenya's distributors, wholesalers, and retail chains. Manage procurement, track stock across every warehouse, run van sales on the go, and stay fully ETIMS-compliant — all from one unified platform."
        tags={[
          { label: "Multi-Branch Inventory" },
          { label: "Van Sales & POS" },
          { label: "ETIMS Compliance" },
          { label: "CEO Analytics" },
        ]}
        stats={[
          { label: "Businesses deployed", value: "150+" },
          { label: "Cost reduction avg.", value: "40%" },
          { label: "System uptime", value: "99.8%" },
        ]}
      />
      <SiteCta />
      <SiteFooter />
    </div>
  );
}
