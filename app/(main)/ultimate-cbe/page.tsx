import SiteHero from "@/components/ultimate-cbe/layout02/site-hero";
import SiteDemo from "@/components/ultimate-cbe/layout01/site-demo";
import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import SiteCta from "@/components/ultimate-cbe/layout02/site-cta";
import WhatWeOfferSection from "@/components/ultimate-ch/layout01/section-whatweoffer";
import FeatureSplitSection from "@/components/ultimate-ch/layout01/section-featuresplit";
import { TrendingUp } from "lucide-react";
import {
  Calendar,
  ChartBarBigIcon,
  FileEdit,
  Target,
  TimerReset,
  Users2,
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
        description="Transform your school's assessment operations with Kenya's leading CBE platform — purpose-built to track competencies, empower teachers, engage parents, and deliver real-time academic insights across every grade and pathway."
        card={[
          {
            title: "Student Enrollment & Management",
            description:
              "Full-cycle student administration — online registration, education background capture, pathway selection, co-curricular activities, and instant admission number generation across all grades.",
            icon: Calendar,
            cta: "Enroll Students",
            featured: false,
          },
          {
            title: "Admin Analytics Dashboard",
            description:
              "Real-time stream distribution, attendance trends, gender analytics, pathway performance, and school-wide statistics — all in one executive view accessible from any device, anywhere.",
            icon: ChartBarBigIcon,
            cta: "Live Insights",
            featured: true,
          },
          {
            title: "Competency Mapping & Assessment",
            description:
              "Automated alignment of assessments to CBE competencies and KNEC syllabi, with rubric-based grading, theory and practical tracking, and real-time performance level updates.",
            icon: Target,
            cta: "View Assessments",
            featured: false,
          },
          {
            title: "Report Cards & Grading",
            description:
              "Digital generation of MOE-compliant report cards with teacher comments, learner conduct scores, competency grades, and one-click PDF export and printing per student.",
            icon: FileEdit,
            cta: "Generate Reports",
            featured: false,
          },
          {
            title: "Parent & Teacher Portal",
            description:
              "Complete parent dashboards with child profiles, report cards, attendance records, teacher messaging, and meeting scheduling — building stronger school-to-home engagement.",
            icon: Users2,
            cta: "View Portals",
            featured: false,
          },
          {
            title: "Timetabling & Scheduling",
            description:
              "Centralized class schedule management, subject-teacher assignments, pathway-based timetabling, and real-time schedule visibility for teachers and administrators.",
            icon: TimerReset,
            cta: "All Features",
            featured: false,
          },
        ]}
      />
      <FeatureSplitSection
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
        titlePrefix="Manage Every Aspect"
        title="of Your School on"
        titleSuffix="One Integrated Platform"
        description="UltimateCBE brings together student enrollment, competency tracking, continuous assessment, report cards, parent portals, and timetabling into a single unified system — designed specifically for Kenyan senior secondary schools delivering the CBC curriculum."
        eyebrow="ALL-IN-ONE SOLUTION"
        badge="CBE ERP PLATFORM"
        bulletPoints={[
          {
            label:
              "Streamline your school administration and save hours of manual work every term",
          },
          {
            label:
              "Make data-driven decisions with real-time competency and pathway performance analytics",
          },
          {
            label:
              "Deliver personalized learning experiences for every student across STEM, Arts & Sports, and Social Sciences",
          },
        ]}
        cta={{
          cta: "Book a Demo",
          ctaLink: "/contact-us",
          action: "See Key Features",
          actionLink: "ultimate-cbe/documentation/key-features",
        }}
        card={{
          title: "Today's Assessment Overview",
          stats: [
            {
              label: "STEM",
              value: 92,
              color: "bg-primary-cbe-500",
            },
            {
              label: "Arts & Sports",
              value: 78,
              color: "bg-[#2e86d4]",
            },
            {
              label: "Social Sciences",
              value: 66,
              color: "bg-[#C0392B]",
            },
          ],
          overview: [
            {
              label: "Enrolled Today",
              value: 47,
              color: "bg-primary-cbe-500",
            },
            {
              label: "Reports Generated",
              value: 12,
              color: "bg-[#2e86d4]",
            },
            {
              label: "Pending Approvals",
              value: 5,
              color: "bg-[#C0392B]",
            },
          ],
        }}
      />
      <SiteDemo
        title={
          <h2 className="font-extrabold text-2xl sm:text-4xl text-pretty leading-tight tracking-tight text-white">
            Get A Powerful Start
            <br />
            With <span className="text-primary-cta">UltimateCBE</span>
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
                  KES 48,575
                </span>
                <span className="rounded-full bg-green-50 px-1.5 py-0.5 text-[9px] text-green-600">
                  +3.84%
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
                Teachers active now
              </p>
              <p className="text-xs text-primary-cbe-800/40">
                16 of 16 online today
              </p>
            </div>
          </div>,
        ]}
        videoSrc="https://www.youtube.com/embed/Da1hUqzoiAo?autoplay=1"
        videoTitle="Optimum ERP System – Product Walkthrough"
        mockupSrc="/images/cta.png"
        description="Built specifically for Kenya's CBC curriculum. Track student competencies, generate instant report cards, engage parents in real time, and give teachers the tools they need to focus on what matters most: teaching."
        tags={[
          { label: "CBC Competency Tracking" },
          { label: "Instant Report Cards" },
          { label: "Parent Engagement" },
          { label: "Admin Analytics" },
        ]}
        stats={[
          { label: "Schools onboarded", value: "186+" },
          { label: "Students managed", value: "50k+" },
          { label: "System uptime", value: "99.8%" },
        ]}
      />
      <SiteCta />
      <SiteFooter />
    </div>
  );
}
