import SiteHero from "@/components/ultimate-erp/layout01/site-hero";
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
        description="Transform higher education management with Kenya's leading ERP — purpose-built to streamline student lifecycles, boost institutional efficiency, and deliver real-time control across every department."
        card={[
          {
            title: "Student Management & Admissions",
            description:
              "Full-cycle student lifecycle management — online applications, enrollment, auto ID generation, demographic tracking, and bulk data handling across all departments with instant SMS/email confirmation.",
            icon: Calendar,
            cta: "Student Portal",
            featured: false,
          },
          {
            title: "CEO's Dashboard",
            description:
              "Real-time enrollment trends, fee collection vs. targets, budget variances, staffing ratios, and debtor/creditor summaries — all in one executive view accessible from any device, anywhere.",
            icon: ChartBarBigIcon,
            cta: "Live Insights",
            featured: true,
          },
          {
            title: "Finance & Bank Integration",
            description:
              "IPSAS-compliant general ledger, automated bank reconciliations completed in under 5 minutes, M-PESA & multi-bank integration, and audit-ready financial reporting ensuring zero revenue leakage.",
            icon: Target,
            cta: "Finance Ready",
            featured: false,
          },
          {
            title: "Academics, Exams & Timetabling",
            description:
              "Automated course registration, AI-driven timetabling with conflict detection, CBET-CDACC compliant grading, result computation, and transcript generation — cutting processing time from weeks to hours.",
            icon: FileEdit,
            cta: "Academic Tools",
            featured: false,
          },
          {
            title: "HR, Payroll & Self-Service",
            description:
              "End-to-end staff onboarding, automated payroll with statutory deductions (NSSF, SHA, Housing Levy), biometric time tracking, and self-service portals for payslips and leave — all in one unified hub.",
            icon: Users2,
            cta: "HR Portal",
            featured: false,
          },
          {
            title: "Biometric Gate Control & Security",
            description:
              "Fingerprint and facial campus access control with fee-eligibility enforcement, real-time unauthorized access alerts, attendance synchronization, and encrypted audit trails across all institutional modules.",
            icon: TimerReset,
            cta: "Secure Access",
            featured: false,
          },
        ]}
      />
      <FeatureSplitSection
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
        titlePrefix="Manage Every Corner"
        title="of Your Institution on"
        titleSuffix="One Integrated Platform"
        description="UltimateERP brings together student management, finance, HR, procurement, examinations, and campus operations into a single unified system — purpose-built for Kenyan universities, TVETs, and national polytechnics."
        eyebrow="ALL-IN-ONE SOLUTION"
        badge="ERP PLATFORM"
        bulletPoints={[
          {
            label:
              "Reduce administrative workload by up to 50% through end-to-end process automation",
          },
          {
            label:
              "Make data-driven decisions with real-time enrollment, finance, and staffing analytics",
          },
          {
            label:
              "Ensure full regulatory compliance — IPSAS, CBET-CDACC, TVETA, KNEC, and E-Citizen ready",
          },
        ]}
        cta={{
          cta: "Book a Demo",
          ctaLink: "/contact-us",
          action: "See Case Studies",
          actionLink: "ultimate-erp/case-studies",
        }}
        card={{
          title: "Today's Operations",
          stats: [
            {
              label: "Undergraduate",
              value: 74,
              color: "bg-primary-cbe-500",
            },
            {
              label: "Postgraduate",
              value: 78,
              color: "bg-[#2e86d4]",
            },
            {
              label: "TVET Modules",
              value: 92,
              color: "bg-[#C0392B]",
            },
          ],
          overview: [
            {
              label: "New Enrolments",
              value: 47,
              color: "bg-primary-cbe-500",
            },
            {
              label: "Clearances",
              value: 12,
              color: "bg-[#2e86d4]",
            },
            {
              label: "Pending Fees",
              value: 5,
              color: "bg-[#C0392B]",
            },
          ],
        }}
      />
      <StatsSection
        description="Never miss a critical operational update. UltimateERP monitors fee balances, student attendance, exam results, payroll cycles, and procurement approvals — automatically alerting every stakeholder the moment action is required."
        title={
          <h3 className="text-2xl sm:text-4xl text-pretty leading-tight tracking-tight font-extrabold text-white">
            Stay in Control With <span className="text-primary-cta">Real-Time</span>{" "}
            Institutional Intelligence
          </h3>
        }
        eyebrow="INTELLIGENT AUTOMATION"
        bulletPoints={[
          {
            label: "Comprehensive Finance & Fee Collection Analytics",
            description:
              "Live dashboards showing fee collection rates, debtor aging, budget vs. actual variances, and real-time cashbook balances across all departments.",
          },
          {
            label: "Seamless Compliance with M-PESA & Bank Standards",
            description:
              "Fully automated bank reconciliations completed in under 5 minutes, with integrated M-PESA, card, and direct bank transfer processing.",
          },
          {
            label: "Configurable Workflows for Admins, Finance & Academics",
            description:
              "Role-based access ensures every staff member — from principal to department head — sees only exactly what they need, with full audit trails.",
          },
        ]}
        statCards={[
          {
            value: "186+",
            description:
              "Institutions successfully deployed across Kenya and East Africa",
            icon: Users,
            accent: false,
          },
          {
            value: "98%",
            description: "System uptime on hybrid cloud-hosted deployments",
            icon: ShieldCheck,
            accent: true,
          },
          {
            value: "50%",
            description:
              "Reduction in administrative workload reported by client institutions",
            icon: Clock,
            accent: false,
          },
          {
            value: "30+",
            description: "Functional modules covering every aspect of institutional operations",
            icon: BarChart3,
            accent: false,
          },
        ]}
      />
      <SiteTestimonials
        description="See how UltimateERP has transformed institutional management for universities, TVETs, and polytechnics across Kenya — streamlining operations, ensuring compliance, and empowering administrators to focus on what matters most."
        stats={[
          {
            value: "186+",
            label: "Institutions successfully deployed",
          },
          {
            value: "50%",
            label: "Reduction in admin workload",
          },
          {
            value: "5mins",
            label: "Average bank reconciliation time",
          },
        ]}
        testimonies={[
          {
            name: "Dr. James Mwangi",
            position: "Finance Director",
            insitution: "Kenya Technical Trainers College",
            avator: "/images/clients/01.jpg",
            rating: 4,
            testimony:
              "Since deploying UltimateERP, our finance team reconciles bank statements in minutes rather than days. The IPSAS-compliant reporting and automated fee collection have completely transformed how we run our institution.",
            featured: false,
          },
          {
            name: "Prof. Grace Achieng",
            position: "Principal",
            insitution: "Kisumu National Polytechnic",
            avator: "/images/clients/02.jpg",
            rating: 5,
            testimony:
              "The CEO Dashboard has completely changed how I oversee our campuses. Enrollment trends, fee collection, HR data — all live, on my phone. What used to take our team weeks to compile now updates in real time, and the accuracy of our compliance reports has improved dramatically.",
            featured: true,
          },
          {
            name: "David Kariuki",
            position: "Registrar",
            insitution: "Meru University of Science & Technology",
            avator: "/images/clients/03.jpg",
            rating: 3,
            testimony:
              "Coordinating admissions, exams, hostels, and payroll across departments was our biggest operational challenge. UltimateERP connected everything on one platform, eliminating data gaps and bringing our entire institution's administration under one roof.",
            featured: false,
          },
        ]}
      />
      <SiteDemo
        title={
          <h2 className="font-extrabold text-2xl sm:text-4xl text-pretty leading-tight tracking-tight text-white">
            Get A Powerful Start
            <br />
            With <span className="text-primary-cta">UltimateERP</span>
            <br />
            Today
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
              <p className="text-xs text-primary-cbe-800/40">Monthly Fee Collection</p>
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
                Staff active now
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
        description="Built specifically for Kenya's universities, TVETs, and national polytechnics. Manage student lifecycles, automate finance and payroll, enforce compliance, and give administrators the tools they need to focus on what matters most: education."
        tags={[
          { label: "CBET-CDACC Compliance" },
          { label: "Automated Bank Reconciliation" },
          { label: "Biometric Access Control" },
          { label: "CEO Analytics Dashboard" },
        ]}
        stats={[
          { label: "Institutions deployed", value: "186+" },
          { label: "Students managed", value: "100k+" },
          { label: "System uptime", value: "99.9%" },
        ]}
      />
      <SitePricing />
      <SiteFaq />
      <SiteCta />
      <SiteCaseStudies
        description="Discover how universities, TVETs, and national polytechnics across Kenya have transformed their operations, improved compliance, and unlocked institutional growth with UltimateERP."
        caseStudies={[
          {
            industry: "FINANCE",
            title:
              "How Kisumu Polytechnic Eliminated Manual Bank Reconciliations",
            stat: "5mins",
            statLabel: "Average bank reconciliation time, down from 3 days",
            coverSrc:
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-5oYbG-sEImY-unsplash.jpg",
            href: "#",
          },
          {
            industry: "ADMINISTRATION",
            title:
              "Kenya Technical Trainers College's Journey to Paperless Operations",
            stat: "50%",
            statLabel:
              "Reduction in administrative workload institution-wide",
            coverSrc:
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-o9F8dRoSucM-unsplash.jpg",
            href: "#",
          },
          {
            industry: "COMPLIANCE",
            title:
              "Meru University Achieves Full IPSAS & TVETA Compliance",
            stat: "100%",
            statLabel: "Regulatory audit pass rate since UltimateERP deployment",
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
