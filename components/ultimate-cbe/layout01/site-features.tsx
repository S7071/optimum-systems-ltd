"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Workflow,
  TrendingUp,
  Award,
  ShieldCheck,
  Users,
  Clock,
  BarChart3,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "../ui/progress";
import BadgePill from "@/components/ui/badge-pill";

// ─── Types ───────────────────────────────────────────────────────────────────

type FeatureItem = {
  title: string;
  description: string;
  badge: string;
  icon: React.ElementType;
};

type StatItem = {
  value: string;
  description: string;
  icon: React.ElementType;
  accent?: boolean;
};

type InsightItem = {
  title: string;
  subtitle: string;
};

// ─── Data ────────────────────────────────────────────────────────────────────

const features: FeatureItem[] = [
  {
    title: "Competency-Based Assessment",
    description:
      "Auto-aligned to CBC goals & KNEC standards with precision competency tracking for every learner across all grade levels.",
    badge: "KNEC Aligned",
    icon: Workflow,
  },
  {
    title: "Live Dashboards & Insights",
    description:
      "Real-time performance metrics for students, parents & teachers with interactive visualisations and actionable alerts.",
    badge: "Real-time Data",
    icon: TrendingUp,
  },
  {
    title: "Secure & Seamless Integration",
    description:
      "Works natively with NEMIS and all existing school systems, ensuring a unified operational environment with zero friction.",
    badge: "NEMIS Ready",
    icon: Award,
  },
];

const platformChecklist: string[] = [
  "Streamline your school workflow and gain real-time insights at every level",
  "Make data-driven decisions with our comprehensive CBC assessment solution",
  "Dedicated onboarding support and training at every stage of deployment",
];

const insightItems: InsightItem[] = [
  {
    title: "Comprehensive Competency Mapping & CBC Analytics",
    subtitle: "Track every learner against all CBC strand indicators",
  },
  {
    title: "Scalable Solutions Backed by KNEC-Aligned Standards",
    subtitle: "Built and verified for Kenya's national curriculum framework",
  },
  {
    title: "Customisable Dashboards for Admins, Teachers & Parents",
    subtitle: "Role-specific views so everyone sees what matters most to them",
  },
];

const stats: StatItem[] = [
  {
    value: "12K+",
    description: "Students actively tracked across Kenyan schools",
    icon: Users,
  },
  {
    value: "98%",
    description: "KNEC compliance rate across all assessments",
    icon: ShieldCheck,
    accent: true,
  },
  {
    value: "3 Wks",
    description: "Average school onboarding & go-live time",
    icon: Clock,
  },
  {
    value: "24/7",
    description: "Dedicated support and platform uptime guarantee",
    icon: BarChart3,
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Small pill label used as a section eyebrow */
function SectionTag({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`mb-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-widest ${
        light
          ? "bg-white/10 text-blue-300"
          : "bg-primary-cbe-100 text-primary-cbe-800"
      }`}
    >
      {/* Red indicator dot */}
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          light ? "bg-red-400" : "bg-[#E01E37]"
        }`}
      />
      {children}
    </div>
  );
}

/** Checkmark row used in the platform checklist */
function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-[15px] leading-relaxed text-muted-foreground">
      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-cbe-100">
        {/* Mini SVG checkmark — avoids adding another lucide import */}
        <svg
          viewBox="0 0 12 12"
          className="h-2.5 w-2.5 stroke-primary-cbe-800 fill-none stroke-[2.5] [stroke-linecap:round] [stroke-linejoin:round]"
        >
          <polyline points="2,6 5,9 10,3" />
        </svg>
      </span>
      {text}
    </li>
  );
}

/** Pill row in the insights section */
function InsightPill({ title, subtitle }: InsightItem) {
  return (
    <div className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 transition-colors hover:border-blue-400/30 hover:bg-white/[0.08]">
      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#E01E37]" />
      <div>
        <p className="text-[13.5px] font-semibold text-white">{title}</p>
        <p className="mt-0.5 text-[12px] text-white/45">{subtitle}</p>
      </div>
    </div>
  );
}

/** Red primary CTA button */
function RedButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Button
      asChild
      className="inline-flex items-center gap-2.5 rounded-[10px] bg-[#E01E37] px-7 py-3.5 text-[14px] font-semibold text-white shadow-[0_4px_20px_rgba(200,21,43,0.30)] transition-all hover:bg-[#C8152B] hover:shadow-[0_8px_30px_rgba(200,21,43,0.40)] hover:-translate-y-0.5"
    >
      <Link href={href}>
        {children}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </Button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SiteFeatures() {
  return (
    <>
      {/* ══════════ SECTION 1 — WHAT WE OFFER ══════════ */}
      <section
        id="features"
        className="relative overflow-hidden bg-gray-50 px-6 py-24 sm:px-10 md:py-28 w-full"
      >
        {/* Subtle radial glow top-right */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(30,79,189,0.07) 0%, transparent 70%)",
          }}
        />
        {/* Subtle radial glow bottom-left */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(200,21,43,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          {/* Header */}
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <SectionTag>Platform Capabilities</SectionTag>
            <h2 className="text-3xl font-extrabold tracking-tight text-primary-cbe-500 md:text-5xl">
              What{" "}
              <span className="text-[#E01E37]">We Offer</span>
            </h2>
            <p className="mt-4 text-[17px] font-light leading-relaxed text-muted-foreground">
              Transform education management with Kenya&apos;s leading CBE
              Assessment platform — purpose-built to enhance learning outcomes,
              ensure KNEC compliance, and deliver real-time insights across
              every classroom.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className={`
                    group relative overflow-hidden rounded-2xl border border-blue-900/[0.08]
                    bg-white shadow-sm transition-all duration-300
                    hover:-translate-y-1.5 hover:border-blue-700/15 hover:shadow-[0_24px_60px_rgba(11,28,61,0.12)]
                  `}
                >
                  {/* Animated top accent bar */}
                  <div className="absolute left-0 right-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#1E4FBD] to-[#6B95E8] transition-transform duration-500 group-hover:scale-x-100" />

                  <CardContent className="flex flex-col p-9">
                    {/* Icon box */}
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[14px] bg-primary-cbe-100 transition-colors duration-300 group-hover:bg-primary-cbe-800">
                      <Icon className="h-6 w-6 text-primary-cbe-800 transition-colors duration-300 group-hover:text-white" />
                    </div>

                    <h4 className="text-[18px] font-bold tracking-tight text-[#0B1C3D]">
                      {feature.title}
                    </h4>

                    <p className="mt-3 text-[14.5px] font-light leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>

                    <span className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-primary-cbe-800">
                      {feature.badge} →
                    </span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ SECTION 2 — INTEGRATED PLATFORM ══════════ */}
      <section className="bg-white px-6 py-24 sm:px-10 md:py-32 w-full">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-16 md:grid-cols-2">

            {/* Image + Floating Card */}
            <div className="relative pb-10">
              <Image
                src="/images/saas/about.jpg"
                alt="UltimateCBE dashboard preview"
                width={600}
                height={450}
                className="rounded-2xl shadow-md"
                priority
              />

              {/* Floating progress card */}
              <Card className="absolute -bottom-2 right-0 w-60 rounded-2xl shadow-[0_20px_60px_rgba(11,28,61,0.16)] md:w-72">
                <CardContent className="p-5">
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    UltimateCBE Assessment ERP
                  </p>
                  <h5 className="text-[13px] font-bold text-[#0B1C3D]">
                    Implementation Progress
                  </h5>

                  <div className="mt-3 flex justify-between text-[11px]">
                    <span className="text-muted-foreground">Onboarding</span>
                    <span className="font-semibold text-primary-cbe-800">84%</span>
                  </div>
                  <Progress value={84} className="mt-1.5 h-1.5" />
                </CardContent>
              </Card>
            </div>

            {/* Text content */}
            <div>
              <SectionTag>One Platform</SectionTag>
              <h3 className="text-2xl font-extrabold tracking-tight text-primary-cbe-500 md:text-4xl">
                Manage All Your School&apos;s Assessment Operations on{" "}
                <em className="not-italic text-[#E01E37]">
                  One Integrated Platform
                </em>
              </h3>

              <p className="mt-4 text-[16px] font-light leading-relaxed text-muted-foreground">
                UltimateCBE brings together competency tracking, student
                enrolment, continuous assessment, reporting, and parent
                engagement into a unified system — designed specifically for
                Kenyan schools.
              </p>

              <ul className="mt-7 space-y-3.5">
                {platformChecklist.map((item, i) => (
                  <CheckItem key={i} text={item} />
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <RedButton href="#">Book A Demo</RedButton>

                <Link
                  href="#"
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary-cbe-800 transition-colors hover:text-primary-cbe-700"
                >
                  See Case Studies
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ SECTION 3 — REAL-TIME INSIGHTS ══════════ */}
      <section
        className="relative overflow-hidden px-6 py-24 sm:px-10 md:py-32 w-full"
        style={{ backgroundColor: "#0B1C3D" }}
      >
        {/* Background glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(30,79,189,0.30) 0%, transparent 65%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-100px] left-[30%] h-[400px] w-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(200,21,43,0.12) 0%, transparent 65%)",
          }}
        />

        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-16 md:grid-cols-2">

            {/* Text content */}
            <div className="flex flex-col gap-3">
              <BadgePill label="Intelligent Alerting" centered={false} />

              <h3 className="text-2xl font-extrabold tracking-tight text-white md:text-4xl">
                Stay Informed With{" "}
                <span className="text-[#F04459]">Real-Time</span> Assessment
                Insights
              </h3>

              <p className="mt-4 text-[16px] font-light leading-relaxed text-white/65">
                Never miss a critical academic update. UltimateCBE monitors
                student competency levels, attendance, grade submissions, and
                key deadlines — automatically notifying every stakeholder when
                action is required.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {insightItems.map((item, i) => (
                  <InsightPill key={i} {...item} />
                ))}
              </div>

              <div className="mt-10">
                <RedButton href="/">Find Out More</RedButton>
              </div>
            </div>

            {/* Stat cards grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className={`
                      group rounded-[18px] border p-6 transition-all duration-300 hover:-translate-y-1
                      ${
                        stat.accent
                          ? "border-[#C8152B] bg-[#E01E37] hover:bg-[#C8152B]"
                          : "border-white/10 bg-white/5 hover:bg-white/[0.09]"
                      }
                    `}
                  >
                    <Icon
                      className={`mb-4 h-7 w-7 ${
                        stat.accent ? "text-white/80" : "text-white/45"
                      }`}
                    />
                    <p className="text-[32px] font-extrabold leading-none tracking-tight text-white">
                      {stat.value}
                    </p>
                    <p
                      className={`mt-2 text-[12.5px] leading-snug ${
                        stat.accent ? "text-white/75" : "text-white/50"
                      }`}
                    >
                      {stat.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}