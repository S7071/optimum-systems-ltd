"use client";

import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileBarChart2,
  GraduationCap,
  Landmark,
  Layers3,
  Lock,
  Phone,
  Mail,
  Globe,
  MapPin,
  Network,
  ShieldCheck,
  Users,
  Workflow,
  BarChart3,
  ArrowRight,
  Play,
  Calendar,
  DollarSign,
  Activity,
  Home,
} from "lucide-react";
import { BadgePill } from "../ui/badge-pill";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type CardItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const complianceItems: CardItem[] = [
  {
    title: "Conference Packages",
    description:
      "Replace manual setup and inconsistent tracking with centralized package management and full visibility.",
    icon: BadgeCheck,
  },
  {
    title: "Inventory & Equipment",
    description:
      "Monitor stock levels, equipment allocation, and usage in real time with automated alerts.",
    icon: Landmark,
  },
  {
    title: "Meals & Accommodation",
    description:
      "Coordinate catering, accommodation bookings, check-ins, and charges from one connected workflow.",
    icon: ClipboardCheck,
  },
  {
    title: "Profitability Visibility",
    description:
      "Gain real-time insight into conference profitability instead of relying on delayed performance updates.",
    icon: Network,
  },
  {
    title: "Staff Coordination",
    description:
      "Structure staff scheduling, payroll integration, and performance tracking during peak conference periods.",
    icon: ShieldCheck,
  },
];

const featureItems: CardItem[] = [
  {
    title: "Conference Package Management",
    description:
      "Define, customize, and track conference packages with full visibility on inclusions, pricing, and availability.",
    icon: Layers3,
  },
  {
    title: "Inventory & Equipment Tracking",
    description:
      "Monitor stock levels, equipment allocation, usage logs, and low-stock or maintenance alerts in real time.",
    icon: ClipboardCheck,
  },
  {
    title: "Services Integration",
    description:
      "Manage meals, menu planning, orders, billing, accommodation bookings, check-ins, and related charges together.",
    icon: BarChart3,
  },
  {
    title: "Financial Management",
    description:
      "Automate quotations, proforma invoices, invoicing, expense tracking, and financial documentation workflows.",
    icon: FileBarChart2,
  },
  {
    title: "Profitability Tracking",
    description:
      "Get clear visibility into conference profitability so teams can manage margins with confidence.",
    icon: Building2,
  },
  {
    title: "Staffing & HR Support",
    description:
      "Manage casual staff scheduling, payroll integration, and performance tracking during busy conference periods.",
    icon: Lock,
  },
  {
    title: "Cross-Department Coordination",
    description:
      "Reduce delayed updates and fragmented processes through one connected operational platform.",
    icon: Database,
  },
  {
    title: "Centralized Operational Control",
    description:
      "Bring packages, services, finance, staffing, and inventory together in one intuitive conference system.",
    icon: Users,
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={[
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left",
      ].join(" ")}
    >
      <BadgePill label={eyebrow} centered={false} />
      <h2 className="mt-5 text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
function FeatureCard({ item }: { item: CardItem }) {
  const Icon = item.icon;

  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-primary-cbe-300 hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a1b55] to-[#1f3f98] text-white transition duration-300 group-hover:scale-105">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-md font-semibold text-primary-cbe-500">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        {item.description}
      </p>
    </div>
  );
}

function ComplianceCard({ item }: { item: CardItem }) {
  const Icon = item.icon;

  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#1f3f98]/20 hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition duration-300 group-hover:bg-red-600 group-hover:text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-md font-semibold text-primary-cbe-500">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        {item.description}
      </p>
    </div>
  );
}

interface CardProp {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  featured: boolean;
}

function Card(prop: CardProp) {
  return (
    <div
      className={[
        "relative flex flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-200",
        prop.featured
          ? "bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 border-primary-cbe-500"
          : "bg-white border-primary-cbe-50 hover:border-primary-cbe-100 hover:shadow-[0_8px_32px_rgba(24,95,165,0.03)]",
      ].join(" ")}
    >
      {/* Corner accent */}
      <div
        className={[
          "pointer-events-none absolute top-0 right-0 w-20 h-20 rounded-bl-full",
          prop.featured ? "bg-white/10" : "bg-[#EBF1FA]",
        ].join(" ")}
      />

      {/* Icon */}
      <div
        className={[
          "relative z-10 mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[13px] flex-shrink-0",
          prop.featured ? "bg-white/20" : "bg-[#EBF1FA]",
        ].join(" ")}
      >
        <prop.icon
          size={24}
          className={prop.featured ? "text-white" : "text-primary-cbe-400"}
        />
      </div>

      {/* Text */}
      <h3
        className={[
          "mb-2.5 text-base font-bold leading-snug",
          prop.featured ? "text-white" : "text-primary-cbe-800",
        ].join(" ")}
      >
        {prop.title}
      </h3>
      <p
        className={[
          "flex-1 text-[13.5px] leading-relaxed mb-[22px]",
          prop.featured ? "text-white/75" : "text-[#5a6a7e]",
        ].join(" ")}
      >
        {prop.description}
      </p>

      {/* Link */}
      <span
        className={[
          "text-[11px] font-bold uppercase tracking-[1px] inline-flex items-center gap-1.5 cursor-pointer flex flex-row gap-2 items-center",
          prop.featured
            ? "text-white/90 hover:text-white"
            : "text-primary-cta/90 hover:text-primary-cta",
        ].join(" ")}
      >
        {prop.cta}
        <ArrowRight size={16} />
      </span>
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const frac = rating - full;
  const empty = 5 - Math.ceil(rating);

  return (
    <span
      className="inline-flex items-center gap-px"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: full }).map((_, i) => (
        <svg
          key={`f${i}`}
          className="size-3"
          viewBox="0 0 14 14"
          fill="#F5A623"
        >
          <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.436.59 3.439L7 8.885l-3.09 1.625L4.5 7.07 2 4.635l3.455-.505L7 1z" />
        </svg>
      ))}
      {frac > 0 && (
        <span className="relative inline-flex">
          <svg className="size-3" viewBox="0 0 14 14" fill="#E0E0E0">
            <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.436.59 3.439L7 8.885l-3.09 1.625L4.5 7.07 2 4.635l3.455-.505L7 1z" />
          </svg>
          <span
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${frac * 100}%` }}
          >
            <svg className="size-3" viewBox="0 0 14 14" fill="#F5A623">
              <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.436.59 3.439L7 8.885l-3.09 1.625L4.5 7.07 2 4.635l3.455-.505L7 1z" />
            </svg>
          </span>
        </span>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <svg
          key={`e${i}`}
          className="size-3"
          viewBox="0 0 14 14"
          fill="#E0E0E0"
        >
          <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.436.59 3.439L7 8.885l-3.09 1.625L4.5 7.07 2 4.635l3.455-.505L7 1z" />
        </svg>
      ))}
    </span>
  );
}


interface featureProp {
  label: string;
  sub: string;
  icon: LucideIcon;
}

const FEATURES: featureProp[] = [
  {
    label: "Conference Packages",
    sub: "Pricing & availability",
    icon: Calendar,
  },
  {
    label: "Financial Management",
    sub: "Quotations to invoicing",
    icon: DollarSign,
  },
  {
    label: "Meals & Accommodation",
    sub: "Integrated service delivery",
    icon: Home,
  },
  {
    label: "Operational Visibility",
    sub: "Real-time profitability",
    icon: Activity,
  },
];


export default function UltimateConferencePage() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);
  return (
    <main className="bg-white text-primary-cbe-500 w-full">
      <section
        className="relative flex flex-col w-full overflow-hidden bg-primary-cbe-50"
        id="cbe-hero"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-64px)] max-h-[760px]">
          {/* ── LEFT: White content panel ── */}
          <div
            className={[
              "relative z-10 flex flex-col justify-center",
              "px-6 lg:px-30 py-16 gap-7",
              "transition-[opacity,transform] duration-700 ease-out",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7",
            ].join(" ")}
          >
            {/* Logo + product badge */}
            <div className="inline-flex items-center gap-3 w-fit">
              <div className="size-12 rounded-lg bg-background flex items-center justify-center flex-shrink-0 p-1.5 border border-primary-cbe-100">
                <Image
                  src="/logos/ultimate-conference.svg"
                  alt="Ultimate ConferenceERP"
                  width={12}
                  height={12}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-cbe-800">
                <span className="text-primary-cta font-extrabold">
                  Ultimate
                </span>{" "}
                ConferenceERP
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.18] text-primary-cbe-800 tracking-[-1px]">
              End the Chaos of
              <br />
              <span className="text-primary-cbe-500 font-bold">
                Conference Management
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-primary-cbe-800 text-base leading-relaxed max-w-[340px] sm:max-w-[440px]">
              Deliver seamless, profitable events with Ultimate ConferenceERP — a powerful integrated platform for conference packages, equipment, services, staffing, and financial control.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* Primary — red action */}
              <Button
                variant="default"
                size="lg"
                onClick={() => {
                  router.push("/ultimate-cbe/schedule-demo");
                }}
              >
                Book Your Demo
                <ArrowRight className="size-4" />
              </Button>

              {/* Ghost — secondary / video */}
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="lg">
                    <span className="size-7 rounded-full bg-primary-cbe-800 flex items-center justify-center flex-shrink-0">
                      <Play
                        size={10}
                        fill="white"
                        color="white"
                        className="ml-px"
                      />
                    </span>
                    Watch Overview
                  </Button>
                </DialogTrigger>
                <DialogTitle className="sr-only">
                  Ultimate ConferenceERP Overview
                </DialogTitle>
                <DialogContent className="max-w-4xl overflow-hidden p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      className="h-full w-full"
                      src="https://www.youtube.com/embed/Da1hUqzoiAo?autoplay=1"
                      title="Ultimate ConferenceERP Overview"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Rating social proof */}
            <div className="flex items-center gap-2 pt-1">
              <StarRating rating={5} />
              <span className="text-[13px] text-slate-500">
                <strong className="text-slate-700 font-medium">
                  5 core operational areas
                </strong>{" "}
                · unified in{" "}
                <strong className="text-slate-700 font-medium">one</strong>{" "}
                connected platform
              </span>
            </div>
          </div>
          {/* ── RIGHT: Photo ── */}
          <div className="relative overflow-hidden hidden md:block">
            {/* Hero photo */}
            <Image
              src="/heros/ultimateCMS.jpg"
              alt="Conference audience and event operations"
              fill
              className="object-cover object-center z-[1]"
              priority
            />

            {/*
            Left-edge bleed — softens the hard cut between
            white left panel and photo.
          */}
            <div
              className="absolute inset-0 z-[2] pointer-events-none"
              style={{
                background: `
                linear-gradient(to right, rgba(255,255,255,0.15) 0%, transparent 25%),
                linear-gradient(135deg, rgba(11,61,145,0.15) 0%, transparent 55%)
              `,
              }}
              aria-hidden="true"
            />

            {/* KNEC tag — top-right */}
            <div className="absolute top-8 right-8 z-10 bg-primary-cbe-800 text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full flex items-center gap-2">
              <CheckCircle2 className="size-3" />
              All-in-One Platform
            </div>

            {/* Floating activity badge — bottom-left */}
            <div
              className="absolute bottom-10 left-6 z-10 bg-white rounded-xl px-4 py-3 flex items-center gap-3 min-w-[230px]"
              style={{
                boxShadow:
                  "0 8px 32px rgba(11,61,145,0.15), 0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <div className="size-10 rounded-lg bg-[#E8F0FC] flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="size-5 text-primary-cbe-800" />
              </div>
              <div>
                <p className="text-[13px] font-medium text-slate-800 leading-tight">
                  Real-time operational visibility
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Packages, services, and profitability connected
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border-t border-b border-gray-200 hidden sm:flex flex-wrap px-10 w-full">
        {FEATURES.map((feat, i) => (
          <div
            key={feat.label}
            className={[
              "flex items-center justify-center gap-4 py-4 px-6 flex-1",
              i < FEATURES.length - 1 ? "border-r border-gray-200" : "",
              i === 0 ? "pl-0" : "",
            ].join(" ")}
          >
            <div className="w-8 h-8 bg-primary-cbe-100 rounded-sm flex items-center justify-center flex-shrink-0">
              <feat.icon size={4} className="size-4 text-primary-cbe-800" />
            </div>
            <div>
              <div className="text-[12.5px] font-semibold text-gray-700 leading-snug">
                {feat.label}
              </div>
              <div className="text-[11px] text-[#8a97a8] mt-0.5">
                {feat.sub}
              </div>
            </div>
          </div>
        ))}
      </div>
      </section>
      <section
        className="w-full px-6 py-20 sm:px-16 lg:px-30"
        id="product-overview"
      >
        <div className="grid items-start gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <SectionHeading
              eyebrow="Platform overview"
              title="What is Ultimate ConferenceERP?"
              description="An integrated conference management system built to bring order, control, and profitability to conference operations."
            />

            <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
              <p>
                The platform is purpose-built for organizers managing complex conferences under tight timelines, high expectations, and multiple moving parts.
              </p>
              <p>
                It connects conference packages, inventory, meals, accommodation, staffing, quotations, invoicing, and profitability reporting inside one intuitive solution.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Conference Packages", "Inventory Control", "Profitability Tracking"].map((pathway) => (
                <span
                  key={pathway}
                  className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700"
                >
                  {pathway}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0a1b55] text-white">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary-cbe-500">
                Integrated Package Control
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Built to define, customize, and track conference packages with visibility on inclusions, pricing, and availability.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-white">
                <Layers3 className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary-cbe-500">
                Operational & Financial Visibility
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Brings services, inventory, staffing, quotations, and profitability into one coordinated operating view.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-primary-cbe-500">
                    Built for seamless conference delivery
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                    Conference teams need more than spreadsheets and fragmented tools. Ultimate ConferenceERP supports end-to-end planning, execution, and financial oversight in one platform.
                  </p>
                </div>

                <div className="grid shrink-0 grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-slate-50 px-4 py-3 text-center">
                    <div className="text-xl font-extrabold text-primary-cbe-500">
                      ALL-IN-ONE
                    </div>
                    <div className="font-semibold mt-1 text-xs uppercase tracking-widest text-primary-cbe-400">
                      platform
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 px-4 py-3 text-center">
                    <div className="text-xl font-extrabold text-primary-cbe-500">
                      REAL-TIME
                    </div>
                    <div className="font-semibold mt-1 text-xs uppercase tracking-widest text-primary-cbe-400">
                      visibility
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full bg-background bg-[url('/patterns/content-pattern.png')] bg-cover-top bg-no-repeat overflow-hidden"
        id="why-ultimatecbe"
      >
        <div className="text-center flex flex-col gap-3 items-center px-6 sm:px-30 pt-16 sm:pt-32">
          <BadgePill label="Why Ultimate ConferenceERP" centered={true} />
          <h2 className="mb-4 text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500">
            A Platform Designed for Control, <br />
            Coordination, and <span className="text-primary-cta">Profitability.</span>
          </h2>
          <p className="mx-auto max-w-[600px] text-[15px] leading-[1.7] text-primary-cbe-800/60 line-clamp-3">
            Ultimate ConferenceERP brings together packages, inventory, services, staffing, finance, and profitability reporting in one product experience.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 bg-gradient-to-t from-background to-transparent via-background px-6 sm:px-30 w-full py-10 sm:py-16">
          {[
            {
              title: "Conference Package Management",
              description:
                "Define, customize, and track conference packages with full visibility on inclusions, pricing, and availability.",
              icon: GraduationCap,
              cta: "Manage Packages",
              featured: false,
            },
            {
              title: "Inventory & Equipment Tracking",
              description:
                "Monitor stock levels, equipment allocation, usage logs, and automated alerts for low inventory or maintenance.",
              icon: CheckCircle2,
              cta: "Track Inventory",
              featured: true,
            },
            {
              title: "Services Integration",
              description:
                "Manage catering services, menu planning, orders, billing, accommodation bookings, check-ins, and charges together.",
              icon: Workflow,
              cta: "Coordinate Services",
              featured: false,
            },
            {
              title: "Financial Management",
              description:
                "Automate quotations, proforma invoices, invoicing, expense tracking, and financial documentation with less friction.",
              icon: Layers3,
              cta: "Automate Billing",
              featured: false,
            },
            {
              title: "Staffing & HR Support",
              description:
                "Manage casual staff scheduling, payroll integration, and performance tracking during peak conference periods.",
              icon: FileBarChart2,
              cta: "Manage Staffing",
              featured: false,
            },
            {
              title: "Operational Control",
              description:
                "Replace fragmented processes and delayed updates with centralized control across all conference operations.",
              icon: BarChart3,
              cta: "View Controls",
              featured: false,
            },
          ].map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </section>
      <section id="product-features" className="w-full px-6 py-20 sm:px-15 lg:px-30">
        <div className="text-center flex flex-col gap-3 items-center px-6 sm:px-30 pt-16 sm:pt-32">
          <BadgePill label="Key features" centered={true} />
          <h2 className="mb-4 text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500">
            Everything You Need to Run Conferences <br />
            Seamlessly — In <span className="text-primary-cta">One System.</span>
          </h2>
          <p className="mx-auto max-w-[600px] text-[15px] leading-[1.7] text-primary-cbe-800/60 line-clamp-3">
            From packages and equipment to meals, accommodation, staffing, invoicing, and profitability, Ultimate ConferenceERP centralizes the conference stack.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureItems.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="bg-[#f8fafc]" id="product-accreditation">
        <div className="w-full px-6 py-20 sm:px-15 lg:px-30">
          <div className="grid items-start gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <div className="text-left flex flex-col gap-3 justify-start items-start">
                <BadgePill
                  label="Benefits at a glance"
                  centered={false}
                />
                <h2 className="mb-4 text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500">
                  From Fragmented Processes to{" "}
                  <span className="text-primary-cta">
                    Coordinated Conference Operations.
                  </span>
                </h2>
                <p className="mx-auto max-w-[600px] text-[15px] leading-[1.7] text-primary-cbe-800/60 line-clamp-3">
                  Ultimate ConferenceERP replaces manual coordination and limited oversight with structured control across the full conference lifecycle.
                </p>
              </div>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.25)]">
                <ul className="space-y-4 text-sm leading-6 text-slate-600">
                  {[
                    "Centralized package management with full visibility",
                    "Real-time monitoring and automated alerts",
                    "Integrated management of catering and accommodation",
                    "Automated quotations, invoicing, and expense tracking",
                    "Real-time tracking of conference profitability",
                    "Structured staff management and scheduling",
                    "Seamless coordination across departments",
                    "Centralized control of all conference operations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
              {complianceItems.map((item) => (
                <ComplianceCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="product-demo"
        className="relative isolate w-full overflow-hidden px-6 py-20 sm:px-16 lg:px-30 lg:py-28"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-cbe-900 via-primary-cbe-700 to-primary-cbe-500" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.18),transparent_24%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <div className="flex flex-col gap-6">
              <BadgePill label="Demo preview" centered={false} />

              <div className="space-y-4">
                <h2 className="text-xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Take Control of Your
                  <br />
                  Conference Operations with
                  <span className="text-primary-cta"> Ultimate</span> ConferenceERP
                </h2>

                <p className="max-w-xl text-base leading-8 text-white/72">
                  Deliver seamless, profitable conferences with a platform that connects package management, inventory tracking, services integration, staffing, quotations, invoicing, and profitability reporting.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Conference Package Management",
                  "Inventory & Equipment Tracking",
                  "Services Integration",
                  "Profitability Reporting",
                ].map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white/85 backdrop-blur-sm transition duration-300 hover:bg-white/12"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/12 text-primary-cta">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <span className="leading-6">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => {
                    router.push("/ultimate-cbe/schedule-demo");
                  }}
                  className="shadow-sm"
                >
                  Book Your Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/15 bg-white/8 text-white backdrop-blur-sm hover:bg-white/12 hover:text-white"
                    >
                      Watch Overview
                      <Play className="h-3.5 w-3.5 fill-white" />
                    </Button>
                  </DialogTrigger>
                  <DialogTitle className="sr-only">
                    Ultimate ConferenceERP Product Overview
                  </DialogTitle>
                  <DialogContent className="max-w-4xl overflow-hidden p-0">
                    <div className="aspect-video w-full">
                      <iframe
                        className="h-full w-full"
                        src="https://www.youtube.com/embed/Da1hUqzoiAo?autoplay=1"
                        title="Ultimate ConferenceERP Product Overview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  "Conference Package Control",
                  "Integrated Services",
                  "Profitability Visibility",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/8 px-3.5 py-1.5 text-xs font-medium text-white/75 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[720px]">
              <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-primary-cta/20 blur-3xl" />
              <div className="absolute -right-8 bottom-8 h-36 w-36 rounded-full bg-white/12 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-3 shadow-[0_40px_120px_-40px_rgba(2,6,23,0.65)] backdrop-blur-md">
                <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/30 p-3">
                  <div className="mb-3 flex items-center justify-between rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Ultimate ConferenceERP Dashboard Preview
                      </p>
                      <p className="mt-1 text-xs text-white/55">
                        Packages, services, staffing, and finance in one view
                      </p>
                    </div>
                    <div className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold text-emerald-300 sm:block">
                      Live Overview
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[1.4rem] bg-white">
                    <Image
                      src="/images/saas/laptop.png"
                      alt="Ultimate ConferenceERP product preview"
                      width={1400}
                      height={900}
                      priority
                      className="h-auto w-full object-cover"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-cbe-900/18 via-transparent to-transparent" />
                  </div>
                </div>

                <div className="absolute left-4 bottom-4 hidden max-w-[280px] rounded-2xl border border-white/10 bg-white p-4 shadow-xl lg:block">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-cbe-50 text-primary-cbe-600">
                      <Layers3 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-cbe-500">
                        Conference Packages
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Define, customize, and track packages with full visibility on pricing, inclusions, and availability.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 hidden max-w-[280px] rounded-2xl border border-white/10 bg-white p-4 shadow-xl lg:block">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-cbe-50 text-primary-cbe-600">
                      <ClipboardCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-cbe-500">
                        Financial Visibility
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Automate quotations, invoicing, expenses, and profitability tracking in one connected workflow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    label: "Packages",
                    value: "Visible",
                  },
                  {
                    label: "Profitability",
                    value: "Real-Time",
                  },
                  {
                    label: "Operations",
                    value: "Centralized"
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-center backdrop-blur-sm"
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary-cbe-200">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact-us"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12"
      >
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div className="flex-1 flex flex-col justify-center">
                <div className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-primary-cbe-400">
                  Request a demo
                </div>
                <h2 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-tight text-primary-cbe-500 sm:text-4xl">
                  Take control of your conference operations with Ultimate ConferenceERP.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                  Deliver seamless, profitable conferences with one integrated conference management platform.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:info@optimumsystems.co.ke"
                  className="inline-flex items-center justify-center rounded-full bg-primary-cta px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-primary-cta-800"
                >
                  Email Optimum
                </a>
                <a
                  href="tel:+254118859686"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
                >
                  Call for Demo
                </a>
              </div>
            </div>

            <div className="border-t border-slate-200 bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 border-primary-cbe-500 p-8 text-white sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <h3 className="text-xl font-semibold">
                Optimum ERP Systems Ltd.
              </h3>

              <div className="mt-8 space-y-5 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-red-400" />
                  <span>0118 859 686 | 0118 859 685</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-red-400" />
                  <span>info@optimumsystems.co.ke</span>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="mt-0.5 h-5 w-5 text-red-400" />
                  <span>www.optimumsystems.co.ke</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-red-400" />
                  <span>
                    Crown Z Towers, 3rd Floor, Office B3
                    <br />
                    Eastern Bypass, near KCB Kamakis
                  </span>
                </div>
              </div>

              <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-widest text-primary-cbe-200">
                  Product focus
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Conference packages",
                    "Inventory tracking",
                    "Services integration",
                    "Profitability visibility",
                  ].map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
