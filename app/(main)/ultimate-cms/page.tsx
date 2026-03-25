import SiteHero from "@/components/ultimate-ch/layout03/site-hero";
import SiteDemo from "@/components/ultimate-cbe/layout01/site-demo";
import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteTestimonials from "@/components/ultimate-cbe/layout01/site-testimonials";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import SiteFaq from "@/components/optimum-systems/layout01/site-faq";
import SiteCta from "@/components/ultimate-cbe/layout02/site-cta";
import SitePricing from "@/components/ultimate-cbe/layout01/site-pricing";
import SiteCaseStudies from "@/components/ultimate-cbe/layout01/site-casestudies";
import HelpDeskButton from "@/components/optimum-systems/layout01/site-help-banner";
import WhatWeOfferSection from "@/components/ultimate-ch/layout01/section-whatweoffer";
import FeatureSplitSection from "@/components/ultimate-ch/layout01/section-featuresplit";
import StatsSection from "@/components/ultimate-ch/layout01/section-stats";
import { Calendar, ChartBarBigIcon, Target, FileEdit, Users2, TimerReset, Users, ShieldCheck, Clock, BarChart3, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <HelpDeskButton />
      <SiteBanner />
      <SiteNavbar />
      <SiteHero />
      <WhatWeOfferSection
        eyebrow="PLATFORM CAPABILITIES"
        title="What"
        titleSuffix="We Offer"
        description="Transform supply chain operations with Kenya's leading distribution ERP — purpose-built to maximize efficiency, eliminate waste, and deliver real-time control across every branch and warehouse."
        card={[
          {
            title: "Smart POS & Van Sales",
            description:
              "Touchscreen point-of-sale, mobile van invoicing, route optimization, and real-time inventory updates — all integrated for faster, error-free transactions at every outlet.",
            icon: Calendar,
            cta: "Live Transactions",
            featured: false,
          },
          {
            title: "CEO Analytics Dashboard",
            description:
              "Real-time sales trends, inventory health, financial performance, and multi-branch comparisons — all in one executive view accessible from any device, anywhere.",
            icon: ChartBarBigIcon,
            cta: "Live Insights",
            featured: true,
          },
          {
            title: "Finance & ETIMS Compliance",
            description:
              "Automated invoicing, MPESA & bank integration, credit/debit notes, and full ETIMS tax compliance — ensuring zero revenue leakage and faster month-end closes.",
            icon: Target,
            cta: "ETIMS Ready",
            featured: false,
          },
          {
            title: "Procurement & Inventory Control",
            description:
              "Advanced stock tracking, automated reordering, multi-warehouse visibility, and store transfers with approval workflows — cutting discrepancies and overstocking of perishables.",
            icon: FileEdit,
            cta: "Stock Management",
            featured: false,
          },
          {
            title: "HR & Payroll Management",
            description:
              "End-to-end employee management with automated payroll, statutory deductions, performance tracking, and a self-service staff portal — fully compliant with Kenyan labour laws.",
            icon: Users2,
            cta: "Workforce Tools",
            featured: false,
          },
          {
            title: "Asset & Distribution Management",
            description:
              "Fixed asset tracking with depreciation schedules, maintenance alerts, and multi-branch distribution oversight — turning every resource into a managed, accountable asset.",
            icon: TimerReset,
            cta: "All Operations",
            featured: false,
          },
        ]}
      />
      <FeatureSplitSection
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
        titlePrefix="Control Every Link"
        title="of Your Supply Chain on"
        titleSuffix="One Unified Platform"
        description="Ultimate SCM brings together procurement, inventory, van sales, ETIMS compliance, and financial reporting into a single system — designed specifically for Kenyan distributors, wholesalers, and retail chains."
        eyebrow="ALL-IN-ONE SOLUTION"
        badge="SCM ERP PLATFORM"
        bulletPoints={[
          {
            label:
              "Eliminate stock discrepancies and cut warehouse waste by up to 25% with real-time multi-branch inventory control",
          },
          {
            label:
              "Make faster decisions with live sales trends, van route performance, and executive dashboards accessible anywhere",
          },
          {
            label:
              "Stay fully compliant with automated ETIMS tax filing, MPESA integration, and KRA-ready financial reporting",
          },
        ]}
        cta={{
          cta: "Book a Demo",
          ctaLink: "/contact-us",
          action: "See Case Studies",
          actionLink: "ultimate-scm/case-studies",
        }}
        card={{
          title: "Today's Operations",
          stats: [
            {
              label: "Nairobi WH",
              value: 92,
              color: "bg-primary-cbe-500",
            },
            {
              label: "Mombasa WH",
              value: 78,
              color: "bg-[#2e86d4]",
            },
            {
              label: "Kisumu WH",
              value: 66,
              color: "bg-[#C0392B]",
            },
          ],
          overview: [
            {
              label: "Van Sales",
              value: 47,
              color: "bg-primary-cbe-500",
            },
            {
              label: "Reorders",
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
        description="Never lose visibility across your distribution network. Ultimate SCM monitors stock movements, van sales performance, purchase orders, and financial transactions — automatically alerting every stakeholder when action is required."
        title={
          <h3 className="text-2xl sm:text-4xl text-pretty leading-tight tracking-tight font-extrabold text-white">
            Stay Ahead With <span className="text-primary-cta">Real-Time</span>{" "}
            Supply Chain Intelligence
          </h3>
        }
        eyebrow="Intelligent Operations"
        bulletPoints={[
          {
            label: "Live Multi-Branch Inventory & Stock Alerts",
            description:
              "Real-time stock levels across all warehouses with automated low-stock and reorder notifications",
          },
          {
            label: "MPESA, ETIMS & Bank-Ready Financial Compliance",
            description:
              "Fully automated tax invoicing, digital payments, and KRA-compliant reporting built into every transaction",
          },
          {
            label: "Configurable Roles for Owners, Managers & Sales Reps",
            description:
              "Role-based access ensures every team member sees only the data relevant to their function",
          },
        ]}
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
      <SiteTestimonials
        description="See how Ultimate SCM has transformed distribution and retail operations across Kenya — streamlining procurement, eliminating stock losses, and driving measurable growth."
        stats={[
          {
            value: "150+",
            label: "Businesses deployed",
          },
          {
            value: "40%",
            label: "Average cost reduction",
          },
          {
            value: "25hrs",
            label: "Saved per week",
          },
        ]}
        testimonies={[
          {
            name: "James Mwangi",
            position: "Operations Manager",
            insitution: "Farmline Agrovet Supplies",
            avator: "/images/clients/01.jpg",
            rating: 4,
            testimony:
              "Since deploying Ultimate SCM, our stock reconciliations across three branches take minutes instead of days. The automated reorder alerts alone have saved us from countless stockouts during peak season.",
            featured: false,
          },
          {
            name: "Grace Achieng",
            position: "General Manager",
            insitution: "Savanna Wholesale Distributors",
            avator: "/images/clients/02.jpg",
            rating: 5,
            testimony:
              "The van sales module completely changed how our field team operates. Real-time invoicing, route tracking, and instant inventory updates mean our drivers close more sales with zero paperwork at the end of the day.",
            featured: true,
          },
          {
            name: "David Kariuki",
            position: "Finance Director",
            insitution: "Kariuki Retail Chain",
            avator: "/images/clients/03.jpg",
            rating: 3,
            testimony:
              "ETIMS compliance used to be a nightmare every month. With Ultimate SCM, every invoice is automatically filed and our KRA submissions are done in minutes. Our accountant finally has time to focus on actual analysis.",
            featured: false,
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
      <SitePricing />
      <SiteFaq />
      <SiteCta />
      <SiteCaseStudies
        description="Discover how schools across Kenya are transforming their CBC assessment management with UltimateCBE — reducing admin workload, improving student outcomes, and embracing digital learning."
        caseStudies={[
          {
            industry: "Wholesale Distribution",
            title:
              "Savanna Distributors Scales to 5 Branches Without Adding Headcount",
            stat: "35%",
            statLabel: "Reduction in fulfilment errors across all branches",
            coverSrc:
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-5oYbG-sEImY-unsplash.jpg",
            href: "#",
          },
          {
            industry: "Agri-Supply Retail",
            title:
              "Farmline Agrovet Eliminates Seasonal Stockouts With Smart Reordering",
            stat: "50%",
            statLabel:
              "Decrease in stockout incidents during peak planting season",
            coverSrc:
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-o9F8dRoSucM-unsplash.jpg",
            href: "#",
          },
          {
            industry: "Finance & Compliance",
            title:
              "Kariuki Retail Chain Achieves Full ETIMS Compliance in Under 30 Days",
            stat: "60%",
            statLabel: "Faster month-end close after automating tax invoicing",
            coverSrc:
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-K1W9OjEgacI-unsplash.jpg",
            href: "#",
          },
        ]}
      />
      <SiteFooter />
    </div>
  );
}
