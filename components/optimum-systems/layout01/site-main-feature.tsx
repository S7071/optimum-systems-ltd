import { Badge } from "@/components/ui/badge";
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

/* eslint-disable @next/next/no-img-element */
export default function SiteMainFeature() {
  // ── Feature cards ────────────────────────────────────────────────
  interface FeatureCard {
    icon: LucideIcon;
    title: string;
    description: string;
  }

  const features: FeatureCard[] = [
    {
      icon: Receipt,
      title: "Finance & Accounts",
      description:
        "Full budget management, receipts processing, and multi-ledger accounting with real-time reporting and audit trails.",
    },
    {
      icon: Users,
      title: "HR & Payroll",
      description:
        "Staff management, leave tracking, payslip generation, and statutory deduction calculations in one place.",
    },
    {
      icon: BadgeCheck,
      title: "Compliance & Controls",
      description:
        "Policy enforcement, role-based access controls, and comprehensive compliance monitoring to keep you audit-ready.",
    },
    {
      icon: BoxesIcon,
      title: "Inventory & Procurement",
      description:
        "Track goods, assets, and supplier relationships with automated reorder alerts and purchase order workflows.",
    },
    {
      icon: ChartColumnStacked,
      title: "Reports & Analytics",
      description:
        "Customisable dashboards, audit trails, and exportable reports that give leadership real-time institutional insights.",
    },
    {
      icon: BadgeDollarSign,
      title: "Fee Collection",
      description:
        "End-to-end invoicing, payment reconciliation, and fee management with automated reminders and receipt generation.",
    },
  ];

  // ── Stats strip ──────────────────────────────────────────────────
  const stats = [
    { value: "500+", label: "Institutions" },
    { value: "6", label: "Core Modules" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="w-full bg-background bg-[url('/patterns/content-pattern.png')] bg-cover-top bg-no-repeat overflow-hidden">
      <div className="container flex flex-col items-center pt-16 sm:pt-32">

        {/* ── Hero Copy ─────────────────────────────────────────── */}
        <div className="flex flex-col gap-5 items-center px-6 sm:px-30 text-center">

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
          <h2 className="max-w-2xl text-center text-2xl sm:text-4xl font-semibold text-pretty leading-tight tracking-tight">
            One Powerful System.{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              Every Module You Need.
            </span>
          </h2>

          <p className="max-w-xl text-center text-muted-foreground">
            UltimateERP brings all your institutional operations into a single,
            fully integrated platform. See how your departments connect, track
            data flows, and manage everything from one intelligent dashboard.
          </p>
        </div>

        {/* ── Main content block ─────────────────────────────────── */}
        <div className="flex flex-col gap-10 md:gap-16 items-center bg-gradient-to-t from-background to-transparent via-background px-6 sm:px-30 w-full py-10 sm:py-16">

          {/* Stats strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-0 rounded-xl border border-border bg-background shadow-sm px-8 py-4 md:divide-x divide-border">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center px-8 py-1 gap-0.5">
                <span className="font-bold text-xl sm:text-2xl text-primary-cbe-900 dark:text-white leading-none">
                  {/* Highlight the number, colour the suffix in red */}
                  {stat.value.replace(/[^0-9.]/g, "")}
                  <span className="text-red-600">
                    {stat.value.replace(/[0-9.]/g, "")}
                  </span>
                </span>
                <span className="text-xs text-muted-foreground font-normal">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Dashboard mockup */}
          <div className="mx-auto w-full max-w-5xl">
            <div className="relative inline-block w-full align-middle leading-none aspect-[1203/753] shadow-2xl shadow-primary-cbe-100 dark:shadow-primary-cbe-950 rounded-xl">
              {/* Glow under frame */}
              <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-primary-cbe-500/20 blur-2xl rounded-full z-0" />

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
                    <rect x="0" y="0" width="1203" height="753" fill="white" />
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
                  <circle cx="27" cy="25" r="6" className="fill-[#E5E5E5] dark:fill-[#404040]" />
                  <circle cx="47" cy="25" r="6" className="fill-[#E5E5E5] dark:fill-[#404040]" />
                  <circle cx="67" cy="25" r="6" className="fill-[#E5E5E5] dark:fill-[#404040]" />
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
                    <text x="580" y="30" fill="#A3A3A3" fontSize="12" fontFamily="Arial, sans-serif">
                      https://app.ultimateerp.co.ke
                    </text>
                  </g>
                </g>
              </svg>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" size="lg" className="gap-2">
              Explore UltimateERP
              <ArrowRight className="size-4" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Play className="size-4 fill-current" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* ── Features Section ──────────────────────────────────── */}
        <div className="w-full bg-muted/40 border-t border-border px-6 sm:px-16 py-16 sm:py-24">
          {/* Section header */}
          <div className="flex flex-col items-center gap-3 text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-red-600">
              What&apos;s Included
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-primary-cbe-900 dark:text-white tracking-tight">
              Six Modules. One Unified Platform.
            </h3>
            <p className="max-w-md text-muted-foreground text-sm">
              Every department stays in sync — from payroll to procurement —
              through a single source of truth.
            </p>
          </div>

          {/* Feature card grid */}
          <ul className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
        </div>

      </div>
    </section>
  );
}