import SiteHero from "@/components/ultimate-erp/layout01/site-hero";
import SiteDemo from "@/components/ultimate-cbe/layout01/site-demo";
import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteTestimonials from "@/components/ultimate-cbe/layout01/site-testimonials";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import SiteFaq from "@/components/optimum-systems/layout01/site-faq";
import SiteCta from "@/components/ultimate-cbe/layout02/site-cta";
import SiteCaseStudies from "@/components/ultimate-cbe/layout01/site-casestudies";
import WhatWeOfferSection from "@/components/ultimate-ch/layout02/section-whatweoffer";
import StatsSection from "@/components/ultimate-ch/layout01/section-stats";
import { Users, ShieldCheck, Clock, BarChart3, TrendingUp } from "lucide-react";
import WhyUsSections from "@/components/optimum-systems/layout02/section-whyus";
import IntegrationsSection from "@/components/optimum-systems/layout01/section-integrations";
import OnlinePresenceSection from "@/components/optimum-systems/layout01/section-online-presence";
import SiteLogos from "@/components/optimum-systems/layout02/site-logos";
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
      <SiteLogos />
      <WhyUsSections />
      <WhatWeOfferSection
        eyebrow="PLATFORM CAPABILITIES"
        title="What"
        titleSuffix="We Offer"
        description="Transform higher education management with Kenya's leading ERP — purpose-built to streamline student lifecycles, boost institutional efficiency, and deliver real-time control across every department."
        card={[
          {
            title: "System Administration",
            description:
              "Full-cycle student lifecycle management — online applications, enrollment, auto ID generation, demographic tracking, and bulk data handling across all departments with instant SMS/email confirmation.",
            icon: "Calendar",
            cta: "Student Portal",
            featured: false,
          },
          {
            title: "Student Management",
            description:
              "Full-cycle student lifecycle management — online applications, enrollment, auto ID generation, demographic tracking, and bulk data handling across all departments with instant SMS/email confirmation.",
            icon: "Calendar",
            cta: "Student Portal",
            featured: false,
          },
          {
            title: "Student Academics Assessment",
            description:
              "Full-cycle student lifecycle management — online applications, enrollment, auto ID generation, demographic tracking, and bulk data handling across all departments with instant SMS/email confirmation.",
            icon: "Calendar",
            cta: "Student Portal",
            featured: false,
          },
          {
            title: "Student Finance",
            description:
              "Full-cycle student lifecycle management — online applications, enrollment, auto ID generation, demographic tracking, and bulk data handling across all departments with instant SMS/email confirmation.",
            icon: "Calendar",
            cta: "Student Portal",
            featured: false,
          },
          {
            title: "Core Finance and Accounting",
            description:
              "Full-cycle student lifecycle management — online applications, enrollment, auto ID generation, demographic tracking, and bulk data handling across all departments with instant SMS/email confirmation.",
            icon: "Calendar",
            cta: "Student Portal",
            featured: false,
          },
          {
            title: "E-Citizen Integration",
            description:
              "Full-cycle student lifecycle management — online applications, enrollment, auto ID generation, demographic tracking, and bulk data handling across all departments with instant SMS/email confirmation.",
            icon: "Calendar",
            cta: "Student Portal",
            featured: false,
          },
          {
            title: "Timetabling Management",
            description:
              "Real-time enrollment trends, fee collection vs. targets, budget variances, staffing ratios, and debtor/creditor summaries — all in one executive view accessible from any device, anywhere.",
            icon: "ChartBarBigIcon",
            cta: "Live Insights",
            featured: false,
          },
          {
            title: "Lecturer Evaluation",
            description:
              "IPSAS-compliant general ledger, automated bank reconciliations completed in under 5 minutes, M-PESA & multi-bank integration, and audit-ready financial reporting ensuring zero revenue leakage.",
            icon: "Target",
            cta: "Finance Ready",
            featured: false,
          },
          {
            title: "Online Student Voting",
            description:
              "Automated course registration, AI-driven timetabling with conflict detection, CBET-CDACC compliant grading, result computation, and transcript generation — cutting processing time from weeks to hours.",
            icon: "FileEdit",
            cta: "Academic Tools",
            featured: false,
          },
          {
            title: "Online Student Application",
            description:
              "End-to-end staff onboarding, automated payroll with statutory deductions (NSSF, SHA, Housing Levy), biometric time tracking, and self-service portals for payslips and leave — all in one unified hub.",
            icon: "Users2",
            cta: "HR Portal",
            featured: false,
          },
          {
            title: "Online Student Clearance",
            description:
              "Fingerprint and facial campus access control with fee-eligibility enforcement, real-time unauthorized access alerts, attendance synchronization, and encrypted audit trails across all institutional modules.",
            icon: "TimerReset",
            cta: "Secure Access",
            featured: false,
          },
          {
            title: "Placement",
            description:
              "Fingerprint and facial campus access control with fee-eligibility enforcement, real-time unauthorized access alerts, attendance synchronization, and encrypted audit trails across all institutional modules.",
            icon: "TimerReset",
            cta: "Secure Access",
            featured: false,
          },
          {
            title: "Library Management",
            description:
              "Fingerprint and facial campus access control with fee-eligibility enforcement, real-time unauthorized access alerts, attendance synchronization, and encrypted audit trails across all institutional modules.",
            icon: "TimerReset",
            cta: "Secure Access",
            featured: false,
          },
          {
            title: "Pay As You Eat/Catering Management",
            description:
              "Fingerprint and facial campus access control with fee-eligibility enforcement, real-time unauthorized access alerts, attendance synchronization, and encrypted audit trails across all institutional modules.",
            icon: "TimerReset",
            cta: "Secure Access",
            featured: false,
          },
          {
            title: "Health/Clinic Management",
            description:
              "Fingerprint and facial campus access control with fee-eligibility enforcement, real-time unauthorized access alerts, attendance synchronization, and encrypted audit trails across all institutional modules.",
            icon: "TimerReset",
            cta: "Secure Access",
            featured: false,
          },
          {
            title: "Hostel and Accommodation Management",
            description:
              "Fingerprint and facial campus access control with fee-eligibility enforcement, real-time unauthorized access alerts, attendance synchronization, and encrypted audit trails across all institutional modules.",
            icon: "TimerReset",
            cta: "Secure Access",
            featured: false,
          },
          {
            title: "Human Resources and Payroll Management",
            description:
              "Fingerprint and facial campus access control with fee-eligibility enforcement, real-time unauthorized access alerts, attendance synchronization, and encrypted audit trails across all institutional modules.",
            icon: "TimerReset",
            cta: "Secure Access",
            featured: false,
          },
          {
            title: "Procurement & Stores Management",
            description:
              "Fingerprint and facial campus access control with fee-eligibility enforcement, real-time unauthorized access alerts, attendance synchronization, and encrypted audit trails across all institutional modules.",
            icon: "TimerReset",
            cta: "Secure Access",
            featured: false,
          },
          {
            title: "Biometric Gate Control System",
            description:
              "Fingerprint and facial campus access control with fee-eligibility enforcement, real-time unauthorized access alerts, attendance synchronization, and encrypted audit trails across all institutional modules.",
            icon: "TimerReset",
            cta: "Secure Access",
            featured: false,
          },
          {
            title: "Biometric Time and Attendance",
            description:
              "Fingerprint and facial campus access control with fee-eligibility enforcement, real-time unauthorized access alerts, attendance synchronization, and encrypted audit trails across all institutional modules.",
            icon: "TimerReset",
            cta: "Secure Access",
            featured: false,
          },
          {
            title: "Bank Integration",
            description:
              "Fingerprint and facial campus access control with fee-eligibility enforcement, real-time unauthorized access alerts, attendance synchronization, and encrypted audit trails across all institutional modules.",
            icon: "TimerReset",
            cta: "Secure Access",
            featured: false,
          },
          {
            title: "CEO’s Dashboard",
            description:
              "Fingerprint and facial campus access control with fee-eligibility enforcement, real-time unauthorized access alerts, attendance synchronization, and encrypted audit trails across all institutional modules.",
            icon: "TimerReset",
            cta: "Secure Access",
            featured: false,
          },
          {
            title: "Alumni Management",
            description:
              "Fingerprint and facial campus access control with fee-eligibility enforcement, real-time unauthorized access alerts, attendance synchronization, and encrypted audit trails across all institutional modules.",
            icon: "TimerReset",
            cta: "Secure Access",
            featured: false,
          },
          {
            title: "Students Affairs Management",
            description:
              "Fingerprint and facial campus access control with fee-eligibility enforcement, real-time unauthorized access alerts, attendance synchronization, and encrypted audit trails across all institutional modules.",
            icon: "TimerReset",
            cta: "Secure Access",
            featured: false,
          },
          {
            title: "SMS Integration",
            description:
              "Fingerprint and facial campus access control with fee-eligibility enforcement, real-time unauthorized access alerts, attendance synchronization, and encrypted audit trails across all institutional modules.",
            icon: "TimerReset",
            cta: "Secure Access",
            featured: false,
          },
          {
            title: "Self-Service Portal (For Students and Staff)",
            description:
              "Fingerprint and facial campus access control with fee-eligibility enforcement, real-time unauthorized access alerts, attendance synchronization, and encrypted audit trails across all institutional modules.",
            icon: "TimerReset",
            cta: "Secure Access",
            featured: false,
          },
          {
            title: "Estate Management",
            description:
              "Fingerprint and facial campus access control with fee-eligibility enforcement, real-time unauthorized access alerts, attendance synchronization, and encrypted audit trails across all institutional modules.",
            icon: "TimerReset",
            cta: "Secure Access",
            featured: false,
          },
          {
            title: "Transport/Fleet Management",
            description:
              "Fingerprint and facial campus access control with fee-eligibility enforcement, real-time unauthorized access alerts, attendance synchronization, and encrypted audit trails across all institutional modules.",
            icon: "TimerReset",
            cta: "Secure Access",
            featured: false,
          },
          {
            title: "Ticketing Management",
            description:
              "Fingerprint and facial campus access control with fee-eligibility enforcement, real-time unauthorized access alerts, attendance synchronization, and encrypted audit trails across all institutional modules.",
            icon: "TimerReset",
            cta: "Secure Access",
            featured: false,
          },
          {
            title: "Audit and Risk Management",
            description:
              "Fingerprint and facial campus access control with fee-eligibility enforcement, real-time unauthorized access alerts, attendance synchronization, and encrypted audit trails across all institutional modules.",
            icon: "TimerReset",
            cta: "Secure Access",
            featured: false,
          },
        ]}
      />
      <OnlinePresenceSection />
      <IntegrationsSection />
      <SiteDemo
        title={
          <h2 className="font-extrabold text-2xl sm:text-4xl text-pretty leading-tight tracking-tight text-white">
            Get A Powerful Start
            <br />
            With <span className="text-primary-cta">Ultimate</span>ERP
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
              <p className="text-xs text-primary-cbe-800/40">
                Monthly Fee Collection
              </p>
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
        mockupSrc="/images/saas/laptop.png"
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
      <SiteTestimonials
        description="See how UltimateERP has transformed institutional management for universities, TVETs, and polytechnics across Kenya — streamlining operations, ensuring compliance, and empowering administrators to focus on what matters most."
        stats={[
          {
            value: "186+",
            label: "Institutions successfully deployed",
          },
          {
            value: "98%",
            label: "Happiness Index",
          },
          {
            value: "98%",
            label: "Recommendation Index",
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
      <StatsSection
        description="Never miss a critical operational update. UltimateERP monitors fee balances, student attendance, exam results, payroll cycles, and procurement approvals — automatically alerting every stakeholder the moment action is required."
        title={
          <h3 className="text-2xl sm:text-4xl text-pretty leading-tight tracking-tight font-extrabold text-primary-cbe-500">
            Stay in Control With{" "}
            <span className="text-primary-cta">Real-Time</span> Institutional
            Intelligence
          </h3>
        }
        eyebrow="INTELLIGENT AUTOMATION"
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
            description:
              "Functional modules covering every aspect of institutional operations",
            icon: BarChart3,
            accent: false,
          },
        ]}
      />
      <SiteCaseStudies
        description="Discover how universities, TVETs, and national polytechnics across Kenya have transformed their operations, improved compliance, and unlocked institutional growth with UltimateERP."
        caseStudies={[
          {
            industry: "FINANCE",
            title:
              "Optimum Computer Systems launches AI tool to revolutionize financial reporting",
            stat: "5mins",
            statLabel: "Average bank reconciliation time, down from 3 days",
            coverSrc:
              "https://assets.citizen.digital/131897/conversions/WhatsApp-Image-2024-08-20-at-13.31.54-og_image.webp",
            href: "/blog",
          },
          {
            industry: "ADMINISTRATION",
            title:
              "Kenya Technical Trainers College's Journey to Paperless Operations",
            stat: "50%",
            statLabel: "Reduction in administrative workload institution-wide",
            coverSrc:
              "https://www.kisiipoly.ac.ke/sites/default/files/inline-images/gate.png",
            href: "#",
          },
          {
            industry: "COMPLIANCE",
            title: "Meru University Achieves Full IPSAS & TVETA Compliance",
            stat: "100%",
            statLabel:
              "Regulatory audit pass rate since UltimateERP deployment",
            coverSrc:
              "https://tuc.ac.ke/wp-content/uploads/2021/10/university-photo-1.jpg",
            href: "#",
          },
        ]}
      />
      {/* <SitePricing /> */}
      <SiteFaq />
      <SiteCta />
      <SiteFooter />
    </div>
  );
}
