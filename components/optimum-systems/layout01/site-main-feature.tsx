"use client";

import { Badge } from "@/components/ui/badge";
import BadgePill from "@/components/ui/badge-pill";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "@/lib/utils";
import {
  ArrowRight,
  BadgeCheck,
  BadgeDollarSign,
  BoxesIcon,
  ChartColumnStacked,
  Receipt,
  Users,
  Play,
} from "lucide-react";
import { useRouter } from "next/navigation";

type TickerColor = "green" | "red" | "amber" | "";

const TICKER: { label: string; val: string; color: TickerColor }[] = [
  { label: "System Administration", val: "91.4%", color: "green" },
  { label: "Student Management", val: "842/hr", color: "green" },
  { label: "Student Academics Assessment", val: "97.2%", color: "green" },
  { label: "Student Finance", val: "1,204", color: "" },
  { label: "Core Finance and Accounting", val: "1.2%", color: "amber" },
  { label: "E-Citizen Integration", val: "99.1%", color: "green" },
  { label: "Timetabling Management", val: "38", color: "" },
  { label: "Lecturer Evaluation", val: "12", color: "red" },
  { label: "Online Student Voting", val: "14.2", color: "green" },
  { label: "Online Student Application", val: "+2.1%", color: "green" },
  { label: "Online Student Clearance", val: "+2.1%", color: "green" },
  { label: "Placement", val: "+2.1%", color: "green" },
  { label: "Library Management", val: "+2.1%", color: "green" },
  { label: "Pay As You Eat/Catering Management", val: "+2.1%", color: "green" },
  { label: "Health/Clinic Management", val: "+2.1%", color: "green" },
  {
    label: "Hostel and Accommodation Management",
    val: "+2.1%",
    color: "green",
  },
  {
    label: "Human Resources and Payroll Management",
    val: "+2.1%",
    color: "green",
  },
  { label: "Procurement & Stores Management", val: "+2.1%", color: "green" },
  {
    label: "Human Resources and Payroll Management",
    val: "+2.1%",
    color: "green",
  },
  { label: "Procurement & Stores Management", val: "+2.1%", color: "green" },
  { label: "Biometric Gate Control System", val: "+2.1%", color: "green" },
  { label: "Biometric Time and Attendance", val: "+2.1%", color: "green" },
  { label: "Bank Integration", val: "+2.1%", color: "green" },
  { label: "CEO’s Dashboard", val: "+2.1%", color: "green" },
  { label: "Alumni Management", val: "+2.1%", color: "green" },
  { label: "Students Affairs Management", val: "+2.1%", color: "green" },
  { label: "SMS Integration", val: "+2.1%", color: "green" },
  {
    label: "Self-Service Portal (For Students and Staff)",
    val: "+2.1%",
    color: "green",
  },
  { label: "Estate Management", val: "+2.1%", color: "green" },
  { label: "Transport/Fleet Management", val: "+2.1%", color: "green" },
  { label: "Ticketing Management", val: "+2.1%", color: "green" },
  { label: "Audit and Risk Management", val: "+2.1%", color: "green" },
];

const doubled = [...TICKER, ...TICKER];

/* eslint-disable @next/next/no-img-element */
export default function SiteMainFeature() {
  const router = useRouter();
  // ── Feature cards ────────────────────────────────────────────────
  interface FeatureCard {
    icon: LucideIcon;
    title: string;
    description: string;
  }

  const features: FeatureCard[] = [
    {
      icon: Receipt,
      title: "Local Expertise & TVET Alignment",
      description:
        "Built specifically for Kenyan TVET institutions with full support for CBET frameworks, local integrations (MPESA, E-Citizen), and regulatory compliance.",
    },
    {
      icon: Users,
      title: "Modular & Scalable Architecture",
      description:
        "Start with what you need and scale as you grow. Flexible modules allow phased implementation without disrupting existing operations or budgets.",
    },
    {
      icon: BadgeCheck,
      title: "End-to-End Institutional Management",
      description:
        "Manage academics, finance, HR, procurement, and student services in one unified system—eliminating silos and improving efficiency.",
    },
    {
      icon: BoxesIcon,
      title: "Security, Reliability & Support",
      description:
        "Enterprise-grade security with audit trails, data encryption, and role-based access—backed by dedicated local support and proven system reliability.",
    },
    {
      icon: ChartColumnStacked,
      title: "ROI-Driven Performance & Innovation",
      description:
        "Reduce operational costs, improve productivity, and leverage advanced tools like analytics, automation, and AI to drive measurable institutional growth.",
    },
    {
      icon: BadgeDollarSign,
      title: "Data-Driven Decision Making",
      description:
        "Access real-time dashboards and insights on performance, enrollment, and finances to support smarter, faster strategic decisions.",
    },
  ];

  // ── Stats strip ──────────────────────────────────────────────────
  interface statProp {
    value: string;
    preffix: string;
    suffix: string;
    label: string;
  }
  const stats: statProp[] = [
    { value: "200", preffix: "", suffix: "+", label: "Institutions" },
    { value: "30", preffix: "", suffix: "+", label: "Core Modules" },
    { value: "99.9", preffix: "", suffix: "%", label: "Uptime SLA" },
    { value: "24", preffix: "/", suffix: "7", label: "Support" },
  ];

  return (
    <>
      <style>{`
      .hero-scene::before {
          content:''; position:absolute; inset:0; pointer-events:none; z-index:1;
          background-image:
            linear-gradient(rgba(55,138,221,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(55,138,221,0.06) 1px, transparent 1px);
          background-size: 56px 56px;
        }

        .erp-ticker { display:flex; white-space:nowrap; animation:tick-scroll 38s linear infinite; }
        @keyframes tick-scroll { from{transform:translateX(0);} to{transform:translateX(-50%);} }

        @keyframes erp-up {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes erp-in {
          from { opacity:0; transform:translateX(24px); }
          to   { opacity:1; transform:translateX(0); }
        }
        .fu0 { animation:erp-up 0.5s 0.05s cubic-bezier(0.22,1,0.36,1) both; }
        .fu1 { animation:erp-up 0.5s 0.12s cubic-bezier(0.22,1,0.36,1) both; }
        .fu2 { animation:erp-up 0.5s 0.22s cubic-bezier(0.22,1,0.36,1) both; }
        .fu3 { animation:erp-up 0.5s 0.32s cubic-bezier(0.22,1,0.36,1) both; }
        .fu4 { animation:erp-up 0.5s 0.42s cubic-bezier(0.22,1,0.36,1) both; }
        .pi  { animation:erp-in 0.65s 0.45s cubic-bezier(0.22,1,0.36,1) both; }

        @keyframes fill-bar { from { width:0 !important; } }
        .pfill { animation:fill-bar 1.4s 1s cubic-bezier(0.22,1,0.36,1) both; }

        /* Chart line draw-on */
        @keyframes draw-line {
          from { stroke-dashoffset: 700; }
          to   { stroke-dashoffset: 0; }
        }
        .chart-line {
          stroke-dasharray: 700;
          stroke-dashoffset: 700;
          animation: draw-line 1.6s 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        @keyframes fade-area { from{opacity:0;} to{opacity:1;} }
        .chart-area { animation: fade-area 0.8s 1.8s ease forwards; opacity:0; }

        /* Sparkline draw */
        @keyframes spark { from{stroke-dashoffset:120;} to{stroke-dashoffset:0;} }
        .spark { stroke-dasharray:120; stroke-dashoffset:120; animation:spark 1s 0.6s ease forwards; }

        @keyframes erp-blink { 0%,100%{opacity:1;} 50%{opacity:0.2;} }
        .blink { animation:erp-blink 1.8s ease-in-out infinite; }

        @keyframes erp-pulse { 0%{transform:scale(1);opacity:0.5;} 100%{transform:scale(2.8);opacity:0;} }
        .pulse { animation:erp-pulse 2.4s ease-out infinite; }

        .ticker-badge { clip-path:polygon(0 0,100% 0,calc(100% + 8px) 100%,0 100%); }

        /* Console tab active underline */
        .console-tab-active::after {
          content:''; position:absolute; bottom:-1px; left:0; right:0; height:2px;
          background:#378ADD; border-radius:1px;
        }
      `}</style>
      <section className="w-full bg-primary-cbe-50 bg-[url('/patterns/content-pattern.png')] bg-cover-top bg-no-repeat overflow-hidden">
        <div className="flex flex-col items-center pt-16 sm:pt-32">
          {/* header section */}
          <div className="flex flex-col gap-3 items-center px-6 sm:px-30 text-center">
            {/* Badge with animated pulse dot */}
            <Badge
              variant="outline"
              className="text-red-600 border-red-200 bg-red-50 dark:bg-red-950/30 dark:border-red-900 text-xs font-bold rounded-full h-10 px-5 py-0.5 gap-3"
            >
              {/* Animated red pulse dot */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
              </span>
              Now with AI-powered analytics
            </Badge>

            {/* Headline with red gradient accent */}
            <h2 className="max-w-2xl text-center text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight mb-4 text-primary-cbe-500">
              One Powerful System.{" "}
              <span className="text-primary-cta">Every Module You Need.</span>
            </h2>

            <p className="max-w-xl text-muted-foreground leading-relaxed">
              UltimateERP brings all your institutional operations into a
              single, fully integrated platform. See how your departments
              connect, track data flows, and manage everything from one
              intelligent dashboard.
            </p>
          </div>

          {/* ── Main content block ─────────────────────────────────── */}
          <div className="flex flex-col gap-10 md:gap-16 items-center bg-gradient-to-t from-primary-cbe-50 to-transparent via-primary-cbe-50 px-6 sm:px-30 w-full py-10 sm:py-16">
            {/* Stats strip */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-0 rounded-xl border border-border bg-background shadow-sm px-8 py-4 md:divide-x divide-border">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center px-8 py-1 gap-0.5"
                >
                  <span className="font-bold text-xl sm:text-2xl text-primary-cbe-500 dark:text-white leading-none">
                    {/* Highlight the number, colour the suffix in red */}
                    {stat.value}
                    <span className="text-primary-cta">{stat.preffix}</span>
                    {stat.value !== "24" ? (
                      <span className="text-primary-cta">{stat.suffix}</span>
                    ) : (
                      stat.suffix
                    )}
                    {/* <span className="text-primary-cta">{stat.suffix}</span> */}
                  </span>
                  <span className="text-xs text-muted-foreground font-normal">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Dashboard mockup */}
            <div className="mx-auto w-full max-w-5xl">
              <div className="relative inline-block w-full align-middle leading-none aspect-[1203/753] shadow-2xl shadow-primary-cbe-50 rounded-xl">
                {/* Glow under frame */}
                <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-primary-cbe-50/20 blur-2xl rounded-full z-0" />

                {/* Screenshot */}
                <div className="pointer-events-none absolute z-0 overflow-hidden left-[0.0831255%] top-[6.90571%] w-[99.7506%] h-[92.9615%] rounded-tl-none rounded-tr-none rounded-br-[11px] rounded-bl-[11px]">
                  <img
                    alt="UltimateERP Dashboard"
                    className="block size-full object-cover object-top"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/dashboard-1.png"
                  />
                </div>

                {/* Browser chrome SVG */}
                <svg
                  viewBox="0 0 1203 753"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 z-10 size-full transform-gpu"
                >
                  <defs>
                    <mask id="safariPunch" maskUnits="userSpaceOnUse">
                      <rect
                        x="0"
                        y="0"
                        width="1203"
                        height="753"
                        fill="white"
                      />
                      <path
                        d="M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z"
                        fill="black"
                      />
                    </mask>
                    <clipPath id="path0">
                      <rect width="1203" height="753" fill="white" />
                    </clipPath>
                    <clipPath id="roundedBottom">
                      <path
                        d="M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#path0)" mask="url(#safariPunch)">
                    <path
                      d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z"
                      className="fill-[#E5E5E5] dark:fill-[#404040]"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z"
                      className="fill-[#E5E5E5] dark:fill-[#404040]"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z"
                      className="fill-white dark:fill-[#262626]"
                    />
                    <circle
                      cx="27"
                      cy="25"
                      r="6"
                      className="fill-[#E5E5E5] dark:fill-[#404040]"
                    />
                    <circle
                      cx="47"
                      cy="25"
                      r="6"
                      className="fill-[#E5E5E5] dark:fill-[#404040]"
                    />
                    <circle
                      cx="67"
                      cy="25"
                      r="6"
                      className="fill-[#E5E5E5] dark:fill-[#404040]"
                    />
                    <path
                      d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z"
                      className="fill-[#E5E5E5] dark:fill-[#404040]"
                    />
                    <g className="mix-blend-luminosity">
                      <path
                        d="M566.269 32.0852H572.426C573.277 32.0852 573.696 31.6663 573.696 30.7395V25.9851C573.696 25.1472 573.353 24.7219 572.642 24.6521V23.0842C572.642 20.6721 571.036 19.5105 569.348 19.5105C567.659 19.5105 566.053 20.6721 566.053 23.0842V24.6711C565.393 24.7727 565 25.1917 565 25.9851V30.7395C565 31.6663 565.418 32.0852 566.269 32.0852ZM567.272 22.97C567.272 21.491 568.211 20.6785 569.348 20.6785C570.478 20.6785 571.423 21.491 571.423 22.97V24.6394L567.272 24.6458V22.97Z"
                        fill="#A3A3A3"
                      />
                    </g>
                    <g className="mix-blend-luminosity">
                      <text
                        x="580"
                        y="30"
                        fill="#A3A3A3"
                        fontSize="12"
                        fontFamily="Arial, sans-serif"
                      >
                        https://ssogroup.co.ke
                      </text>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* ── Features Section ──────────────────────────────────── */}
          <div className="w-full bg-primary-cbe-50 border-t border-border py-16 sm:py-24">
            {/* Section header */}
            <div className="flex flex-col items-center gap-3 text-center mb-12 px-6 sm:px-16">
              <BadgePill label="What Makes Us Standout" centered={true} />
              <h3 className="text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500 mb-4">
                Everything Your Institution <br />
                Needs,{" "}
                <span className="text-primary-cta">One Unified System</span>
              </h3>
              <p className="max-w-md text-muted-foreground leading-relaxed">
                From student management and finance to compliance and analytics,
                streamline every operation through a single, integrated ERP
                platform built for TVET institutions.
              </p>
            </div>

            {/* Feature card grid */}
            <ul className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-6 sm:px-16">
              {features.map((feat, idx) => (
                <li
                  key={idx}
                  className="group relative flex flex-col gap-3 rounded-xl border border-border bg-background p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-primary-cbe-200 overflow-hidden"
                >
                  {/* Accent bar that reveals on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-cbe-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  {/* Icon */}
                  <div className="w-11 h-11 rounded-lg bg-primary-cbe-50 dark:bg-primary-cbe-950/30 flex items-center justify-center shrink-0">
                    <feat.icon className="size-5 text-primary-cbe-500" />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-semibold text-sm text-primary-cbe-900 dark:text-white">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed font-normal">
                      {feat.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* components */}
            <div className="relative z-10 flex w-full items-center overflow-hidden h-[50px] bg-primary-cbe-100 border-t border-b border-primary-cbe-800 mt-30">
              <div className="ticker-badge flex h-full shrink-0 items-center gap-1.5 bg-[#C0392B] pl-[14px] pr-5 text-[10px] font-semibold tracking-[0.12em] uppercase text-white">
                <span className="blink inline-block h-[5px] w-[5px] rounded-full bg-[#ffaaaa]" />
                ERP MODULES
              </div>
              <div className="min-w-0 flex-1 overflow-hidden">
                <div className="erp-ticker">
                  {doubled.map((item, i) => {
                    return (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-6 text-lg text-primary-cbe-800 font-semibold"
                      >
                        {item.label}
                        <span className="text-[8px] text-[rgba(55,138,221,0.2)]">
                          ◆
                        </span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-20 px-6 sm:px-16">
              <Button
                variant="default"
                size="lg"
                className="gap-2"
                onClick={() => {
                  router.push("/ultimate-erp");
                }}
              >
                Explore UltimateERP
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Play className="size-4 fill-current" />
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
