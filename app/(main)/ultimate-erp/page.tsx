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
              "Centralized ERP control with granular role permissions, audit logging, MFA, real-time system health monitoring, and Active Directory single sign-on for seamless administration.",
            icon: "Settings",
            cta: "System Control",
          },
          {
            title: "Student Management",
            description:
              "Full student lifecycle — enrollment tracking, auto ID generation, biometric records, attendance, bulk data imports, dropout analytics, and instant SMS/email notifications.",
            icon: "Users",
            cta: "Student Portal",
          },
          {
            title: "Student Academics & Assessment",
            description:
              "Automates course registration, grade entry, transcript generation, exam scheduling with conflict detection, and full CBET-CDACC compliance for modularized programs.",
            icon: "GraduationCap",
            cta: "Academic Tools",
          },
          {
            title: "Student Finance",
            description:
              "Invoice generation, MPESA-linked fee payments, sponsorship tracking, overdue SMS alerts, aging reports, and fast reconciliation tools for healthy institutional cash flow.",
            icon: "CreditCard",
            cta: "Fee Management",
          },
          {
            title: "Core Finance & Accounting",
            description:
              "IPSAS-compliant accrual accounting, general ledger, automated bank reconciliations under 5 minutes, multi-currency support, and KRA-integrated audit-ready reporting.",
            icon: "DollarSign",
            cta: "Finance Ready",
          },
          {
            title: "E-Citizen Integration",
            description:
              "Seamlessly syncs with E-Citizen for certificate issuance, compliance reporting, and real-time government data exchange via secure API endpoints.",
            icon: "Globe",
            cta: "Gov Integration",
          },
          {
            title: "Timetabling Management",
            description:
              "AI-driven scheduling resolves room, lecturer, and course conflicts automatically. Supports hybrid learning modes with printable, calendar-synced timetables.",
            icon: "CalendarDays",
            cta: "Schedule Now",
          },
          {
            title: "Lecturer Evaluation",
            description:
              "Anonymous student feedback surveys with real-time analytics on teaching effectiveness, term-based trend reporting, and HR-linked professional development tracking.",
            icon: "ClipboardList",
            cta: "Quality Assurance",
          },
          {
            title: "Online Student Voting",
            description:
              "Secure biometric-verified digital elections with real-time vote tallying, full audit trails, multi-position ballot support, and automated SMS reminders.",
            icon: "CheckSquare",
            cta: "Democratic Tools",
          },
          {
            title: "Online Student Application",
            description:
              "Digital applications with document uploads, automated eligibility checks, application fee payment integration, waitlist management, and instant admission letter generation.",
            icon: "FilePlus",
            cta: "Apply Online",
          },
          {
            title: "Online Student Clearance",
            description:
              "Multi-department digital clearance — finance, library, hostels — with automated notifications, document submission portals, and real-time approval status dashboards.",
            icon: "CheckCircle",
            cta: "Clearance Portal",
          },
          {
            title: "Placement",
            description:
              "Matches students to internships by skills and preferences, tracks placements via progress logs, supervisor evaluation forms, and placement success rate reporting.",
            icon: "Briefcase",
            cta: "Internship Hub",
          },
          {
            title: "Library Management",
            description:
              "Full LMS with RFID/barcode cataloging, automated overdue fines, digital e-book access, inter-library loans, and borrowing usage analytics integrated with student portals.",
            icon: "BookOpen",
            cta: "Library Access",
          },
          {
            title: "Pay As You Eat / Catering",
            description:
              "RFID/biometric cashless cafeteria payments, meal plan subscriptions, food inventory tracking, nutritional menu planning, and demand forecasting to reduce waste.",
            icon: "UtensilsCrossed",
            cta: "Smart Dining",
          },
          {
            title: "Health / Clinic Management",
            description:
              "EHR system with appointment scheduling, vaccination tracking, medication inventory, telemedicine integration, and proactive health outbreak monitoring and emergency alerts.",
            icon: "HeartPulse",
            cta: "Student Health",
          },
          {
            title: "Hostel & Accommodation",
            description:
              "Room allocation dashboards, online booking portals, maintenance request tracking, utility billing, biometric access control, and occupancy analytics for resident satisfaction.",
            icon: "Home",
            cta: "Hostel Portal",
          },
          {
            title: "HR & Payroll Management",
            description:
              "End-to-end HR — onboarding, payroll automation, NSSF/SHA/Housing Levy compliance, leave management, self-service payslips, and biometric time tracking for accuracy.",
            icon: "UserCheck",
            cta: "HR Portal",
          },
          {
            title: "Procurement & Stores",
            description:
              "Automates requisitions, tender management, supplier databases, inventory reordering, and spend analytics with full audit trails and finance module integration.",
            icon: "ShoppingCart",
            cta: "Procurement",
          },
          {
            title: "Biometric Gate Control",
            description:
              "Fingerprint/iris campus access with visitor logging, fee-eligibility enforcement, real-time unauthorized-entry alerts, and detailed entry/exit pattern analytics.",
            icon: "ShieldCheck",
            cta: "Secure Access",
          },
          {
            title: "Biometric Time & Attendance",
            description:
              "Biometric attendance for staff and students linked directly to payroll, with absenteeism dashboards, proxy fraud elimination, and flexible remote check-in support.",
            icon: "Clock",
            cta: "Attendance Hub",
          },
          {
            title: "Bank Integration",
            description:
              "Direct API links to banks for real-time transactions, automated reconciliations in under 5 minutes, MPESA payment gateways, and secure inter-account fund transfers.",
            icon: "Landmark",
            cta: "Bank Connect",
          },
          {
            title: "CEO's Dashboard",
            description:
              "Executive KPI hub — enrollment trends, revenue, debtors, creditors, cashbook balances, gender splits, staffing counts, and drill-down predictive analytics from any device.",
            icon: "LayoutDashboard",
            cta: "Live Insights",
          },
          {
            title: "Alumni Management",
            description:
              "Graduate tracking database, event management, donation portals, networking features, and alumni engagement analytics that foster lifelong institutional connections.",
            icon: "Network",
            cta: "Alumni Network",
          },
          {
            title: "Students Affairs Management",
            description:
              "Club registrations, event calendars, counseling logs, and student welfare tracking with SMS integration for holistic extracurricular support and community engagement.",
            icon: "Star",
            cta: "Student Life",
          },
          {
            title: "SMS Integration",
            description:
              "Bulk SMS notifications for fees, events, and urgent alerts. Two-way messaging with customizable templates and delivery analytics for instant, low-cost stakeholder reach.",
            icon: "MessageSquare",
            cta: "Communicate",
          },
          {
            title: "Self-Service Portal",
            description:
              "Mobile-responsive portals for transcripts, fee statements, payslips, course registration, and exam booking — reducing admin workload with push notification support.",
            icon: "Monitor",
            cta: "Self Service",
          },
          {
            title: "Estate Management",
            description:
              "Campus property tracking with maintenance schedules, lease management, utility billing, and GIS mapping for optimal institutional asset utilization and cost control.",
            icon: "MapPin",
            cta: "Campus Assets",
          },
          {
            title: "Transport / Fleet Management",
            description:
              "Vehicle scheduling, maintenance logs, fuel tracking, driver assignments, and GPS real-time monitoring with efficiency reporting to reduce institutional operational costs.",
            icon: "Truck",
            cta: "Fleet Control",
          },
          {
            title: "Ticketing Management",
            description:
              "Issue resolution system with ticket creation, SLA tracking, team assignments, knowledge bases, and response-time analytics to improve support across all departments.",
            icon: "Tag",
            cta: "Support Desk",
          },
          {
            title: "Audit & Risk Management",
            description:
              "Risk assessments, audit planning, issue tracking, and compliance reporting dashboards ensuring regulatory adherence and proactive institutional risk mitigation at all levels.",
            icon: "ShieldAlert",
            cta: "Compliance",
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
            industry: "INNOVATION",
            title:
              "Optimum Computer Systems launches AI tool to revolutionize financial reporting",
            stat: "5mins",
            statLabel: "Average bank reconciliation time, down from 3 days",
            coverSrc:
              "https://assets.citizen.digital/131897/conversions/WhatsApp-Image-2024-08-20-at-13.31.54-og_image.webp",
            href: "/blog",
          },
          {
            industry: "SUCCESS STORIES",
            title: "Kisii National Polytechnic Journey to Paperless Operations",
            stat: "50%",
            statLabel: "Reduction in administrative workload institution-wide",
            coverSrc:
              "https://www.kisiipoly.ac.ke/sites/default/files/inline-images/gate.png",
            href: "#",
          },
          {
            industry: "SUCCESS STORY",
            title: "Turkana University Achieves Full IPSAS & TVETA Compliance",
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
