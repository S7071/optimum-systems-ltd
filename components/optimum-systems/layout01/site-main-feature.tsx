/* eslint-disable @next/next/no-img-element */
"use client";

import BadgePill from "@/components/ui/badge-pill";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "@/lib/utils";
import {
  ArrowRight,
  BadgeCheck,
  BadgeDollarSign,
  BoxesIcon,
  ChartColumnStacked,
  Play,
  Receipt,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function SiteMainFeature() {
  const router = useRouter();

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
        "Built for Kenyan TVET institutions with strong CBET support, local integrations, and practical compliance readiness.",
    },
    {
      icon: Users,
      title: "Modular & Scalable Architecture",
      description:
        "Deploy only what you need today, then expand confidently as your institution grows and operational demands evolve.",
    },
    {
      icon: BadgeCheck,
      title: "End-to-End Institutional Management",
      description:
        "Unify academics, finance, HR, procurement, and student services in one connected operational environment.",
    },
    {
      icon: BoxesIcon,
      title: "Security, Reliability & Support",
      description:
        "Role-based access, audit visibility, dependable uptime, and responsive local support for mission-critical operations.",
    },
    {
      icon: ChartColumnStacked,
      title: "ROI-Driven Performance & Innovation",
      description:
        "Improve productivity, reduce operational friction, and unlock smarter workflows through analytics and automation.",
    },
    {
      icon: BadgeDollarSign,
      title: "Data-Driven Decision Making",
      description:
        "Give leadership real-time insight into institutional performance, finance, enrollment, and operational health.",
    },
  ];

  const stats = [
    { value: "200+", label: "Institutions Supported" },
    { value: "30+", label: "Core ERP Modules" },
    { value: "99.9%", label: "Target Platform Uptime" },
    { value: "24/7", label: "Dedicated Support" },
  ];

  const modules = Array.from(
    new Set([
      "System Administration",
      "Student Management",
      "Student Academics Assessment",
      "Student Finance",
      "Core Finance & Accounting",
      "E-Citizen Integration",
      "Timetabling Management",
      "Lecturer Evaluation",
      "Online Student Voting",
      "Online Student Application",
      "Online Student Clearance",
      "Placement",
      "Library Management",
      "Catering Management",
      "Health / Clinic Management",
      "Hostel & Accommodation",
      "HR & Payroll Management",
      "Procurement & Stores",
      "Biometric Gate Control",
      "Time & Attendance",
      "Bank Integration",
      "CEO Dashboard",
      "Alumni Management",
      "Students Affairs",
      "SMS Integration",
      "Self-Service Portal",
      "Estate Management",
      "Transport / Fleet",
      "Ticketing Management",
      "Audit & Risk Management",
    ]),
  );

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-11%] right-0 h-72 w-72 rounded-full bg-primary-cta/5 blur-3xl" />
      </div>

      <div className="relative w-full px-6 py-16 sm:px-10 sm:py-24 md:px-30">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-3 items-center">
          <BadgePill label="Our Flagship Product" centered={true} />

          <h3 className="text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500 mb-4">
            One Powerful System. <br />
            <span className="text-primary-cta">Every Module You Need.</span>
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            UltimateERP centralizes academic, financial, administrative, and
            operational workflows into a single integrated platform built for
            modern institutional performance.
          </p>
        </div>

        {/* Hero content */}
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left panel */}
          <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 p-7 shadow-sm backdrop-blur sm:p-9">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-cbe-500 via-primary-cbe-400 to-primary-cta" />

            <div className="flex flex-col gap-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary-cbe-100 bg-primary-cbe-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-cbe-700">
                  <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-primary-cta" />
                  Enterprise-ready ERP
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Built to bring clarity, control, and operational scale.
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  From admissions and academics to finance, HR, governance, and
                  support services, UltimateERP gives institutions a single
                  command layer for daily execution and long-term planning.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="group rounded-2xl border border-slate-200 bg-slate-50/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-cbe-200 hover:bg-white hover:shadow-sm"
                  >
                    <div className="text-2xl font-extrabold tracking-tight text-primary-cbe-600 sm:text-3xl">
                      {stat.value}
                    </div>
                    <p className="mt-2 text-sm font-medium text-slate-600">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Trusted operational foundation
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Designed for complex institutions that need visibility
                      across departments without sacrificing flexibility,
                      governance, or service quality.
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Stable & secure
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="gap-2 rounded-full bg-primary-cta px-6 text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-cta-800"
                  onClick={() => router.push("/ultimate-erp")}
                >
                  Explore UltimateERP
                  <ArrowRight className="size-4" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 rounded-full border-slate-300 bg-white px-6 text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-cbe-300 hover:bg-primary-cbe-50 hover:text-primary-cbe-700"
                >
                  <Play className="size-4 fill-current" />
                  Request a Demo
                </Button>
              </div>
            </div>
          </div>

          {/* Right panel / product visual */}
          <div className="h-fit relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 p-3 shadow-2xl shadow-primary-cbe-100/60">
            <div className="absolute left-8 top-8 h-28 w-28 rounded-full bg-primary-cbe-500/20 blur-3xl" />
            <div className="absolute bottom-6 right-8 h-24 w-24 rounded-full bg-primary-cta/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/5 backdrop-blur">
              {/* browser chrome */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <div className="ml-3 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] text-white/60">
                  optimumsystems.co.ke / ultimate-erp
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/dashboard-1.png"
                  alt="UltimateERP Dashboard"
                  className="aspect-[1203/753] w-full object-cover object-top"
                />

                {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent h-fit" /> */}

                <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/15 bg-slate-950/65 p-4 backdrop-blur">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
                      Visibility
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      Real-time institutional oversight
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-slate-950/65 p-4 backdrop-blur">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
                      Integration
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      Connected departments and workflows
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-slate-950/65 p-4 backdrop-blur">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
                      Reporting
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      Faster executive decision support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value proposition cards */}
        <div className="mt-16 rounded-[32px] border border-slate-200 bg-gradient-to-br from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 px-6 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <BadgePill label="Why Institutions Choose UltimateERP" centered />
            <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
              Operational depth with
              <span className="text-primary-cta"> enterprise discipline</span>
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              A refined ERP foundation for institutions that need performance,
              governance, flexibility, and measurable operational control.
            </p>
          </div>

          <ul className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-cbe-300/40 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-primary-cbe-950/30"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-cbe-300/80 to-transparent opacity-60" />

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105 group-hover:bg-primary-cbe-500/20">
                  <feature.icon className="size-5 text-primary-cbe-200" />
                </div>

                <h4 className="mt-5 text-base font-semibold text-white">
                  {feature.title}
                </h4>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Modules */}
        <div className="mt-10 rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur sm:p-8">
          <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.125rem] text-primary-cbe-400">
                Operational Coverage
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-primary-cbe-500 sm:text-3xl">
                30+ integrated modules across the institution
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                Structured for real operational breadth, from academics and
                finance to biometric controls, self-service portals, and
                executive reporting.
              </p>
            </div>

            <div className="inline-flex w-fit items-center rounded-full border border-primary-cbe-100 bg-primary-cbe-50 px-4 py-2 text-sm font-semibold text-primary-cbe-700">
              Unified • Scalable • Connected
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {modules.map((module) => (
              <div
                key={module}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-cbe-200 hover:bg-primary-cbe-50 hover:text-primary-cbe-700"
              >
                {module}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
