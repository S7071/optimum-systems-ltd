"use client";

import type { LucideIcon } from "lucide-react";
import {
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileBarChart2,
  GraduationCap,
  Layers3,
  Lock,
  Phone,
  Mail,
  Globe,
  MapPin,
  Users,
  Workflow,
  BarChart3,
  ArrowRight,
  Play,
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

const featureItems: CardItem[] = [
  {
    title: "Integrated Supply Chain Management",
    description:
      "Track procurement, inventory, and logistics in real time to eliminate bottlenecks and keep operations efficient.",
    icon: Layers3,
  },
  {
    title: "Advanced Inventory Optimization",
    description:
      "Manage multi-location inventory with demand forecasting to maintain optimal stock levels and improve cash flow.",
    icon: ClipboardCheck,
  },
  {
    title: "Order & Sales Management",
    description:
      "Streamline order processing, invoicing, and payment tracking to accelerate revenue cycles and improve execution.",
    icon: BarChart3,
  },
  {
    title: "Financial & Compliance Integration",
    description:
      "Support accurate financial management with integrated accounting, tax compliance, and audit-ready records.",
    icon: FileBarChart2,
  },
  {
    title: "Analytics & Reporting Dashboard",
    description:
      "Use custom dashboards, KPI tracking, and actionable insights to support data-driven supply chain decisions.",
    icon: Building2,
  },
  {
    title: "Secure Hybrid Architecture",
    description:
      "Operate on a flexible hybrid model that combines cloud accessibility with on-premise reliability, security, and performance.",
    icon: Lock,
  },
  {
    title: "Seamless Integration Capabilities",
    description:
      "Integrates with third-party platforms such as e-commerce, CRM, logistics, and related business systems.",
    icon: Database,
  },
  {
    title: "User-Friendly Interface & Mobility",
    description:
      "Accessible via web, mobile, and desktop with role-based access to improve visibility and productivity across teams.",
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

const PLATFORM_FEATURES = [
  "Procurement Control",
  "Inventory Optimization",
  "Order Fulfillment",
  "Logistics Visibility",
  "Financial Tracking",
];

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

export default function UltimateSupplyChainPage() {
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
                  src="/logos/ultimate-cbe.svg"
                  alt="Ultimate Supply Chain ERP"
                  width={12}
                  height={12}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-cbe-800">
                <span className="text-primary-cta font-extrabold">
                  Ultimate
                </span>{" "}
                Supply Chain ERP
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.18] text-primary-cbe-800 tracking-[-1px]">
              Gain Full Visibility.
              <br />
              Move Faster.{" "}
              <span className="text-primary-cbe-500 font-bold">
                Reduce Costs.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-primary-cbe-800 text-base leading-relaxed max-w-[340px] sm:max-w-[440px]">
              Take full control of your supply chain from procurement to
              delivery with a unified ERP platform built to improve visibility,
              accelerate fulfillment, and optimize inventory across operations.
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
                Book a Demo
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
                  Product Overview Demo
                </DialogTitle>
                <DialogContent className="max-w-4xl overflow-hidden p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      className="h-full w-full"
                      src="https://www.youtube.com/embed/Da1hUqzoiAo?autoplay=1"
                      title="Product Overview Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Rating social proof */}
            <div className="flex items-center gap-2 pt-1">
              <StarRating rating={4.6} />
              <span className="text-[13px] text-slate-500">
                <strong className="text-slate-700 font-medium">
                  Rated 4.6
                </strong>{" "}
                · built to improve{" "}
                <strong className="text-slate-700 font-medium">
                  visibility, speed, and cost control
                </strong>
              </span>
            </div>
          </div>
          {/* ── RIGHT: Photo ── */}
          <div className="relative overflow-hidden hidden md:block">
            {/* Hero photo */}
            <Image
              src="/heros/ultimateSCM.jpg"
              alt="Supply chain warehouse operations and logistics activity"
              fill
              className="object-cover object-center z-[1]"
              priority
            />

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
              Real-Time Visibility
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
                  Unified supply chain control
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Procurement, inventory, and delivery in one platform
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-20 bg-primary-cbe-500 px-6 sm:px-10 lg:px-16 py-4 flex items-center gap-6 flex-wrap">
          <span className="text-xs uppercase tracking-widest text-white/60 whitespace-nowrap flex-shrink-0">
            Platform includes:
          </span>
          <div className="flex items-center gap-3 flex-wrap">
            {PLATFORM_FEATURES.map((feature) => (
              <span
                key={feature}
                className="flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-3.5 py-1 text-xs text-white/80 whitespace-nowrap"
              >
                <span className="size-1.5 rounded-full bg-[#7AAFF5] flex-shrink-0" />
                {feature}
              </span>
            ))}
          </div>
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
              title="What is Ultimate Supply Chain ERP?"
              description="A fully integrated ERP platform that brings procurement, inventory management, order processing, logistics, and financial tracking into one unified system."
            />

            <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Built for wholesale and distribution environments where demand
                fluctuates, supply chains are fragmented, and operational costs
                continue to rise.
              </p>
              <p>
                The platform helps businesses reduce stockouts, overstocking,
                delayed deliveries, and poor visibility by centralizing supply
                chain operations inside one connected ERP.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Procurement",
                "Inventory Management",
                "Logistics",
                "Financial Tracking",
              ].map((pathway) => (
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
                End-to-End Supply Chain Platform
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Unifies procurement, stock control, order fulfillment,
                logistics, and finance in one connected operational layer.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-white">
                <Layers3 className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary-cbe-500">
                Real-Time Visibility & Control
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Monitor procurement, inventory, and logistics in real time with
                centralized dashboards and actionable business insights.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-primary-cbe-500">
                    Built for supply chain transformation
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                    Move beyond fragmented processes with a system designed to
                    improve coordination, control costs, and respond faster to
                    market demand across your distribution network.
                  </p>
                </div>

                <div className="grid shrink-0 grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-slate-50 px-4 py-3 text-center">
                    <div className="text-xl font-extrabold text-primary-cbe-500">
                      ERP
                    </div>
                    <div className="font-semibold mt-1 text-xs uppercase tracking-widest text-primary-cbe-400">
                      unified
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 px-4 py-3 text-center">
                    <div className="text-xl font-extrabold text-primary-cbe-500">
                      Hybrid
                    </div>
                    <div className="font-semibold mt-1 text-xs uppercase tracking-widest text-primary-cbe-400">
                      scalable
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
          <BadgePill label="Why Ultimate Supply Chain ERP" centered={true} />
          <h2 className="mb-4 text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500">
            A Platform Designed for Visibility, <br />
            Control, and <span className="text-primary-cta">Efficiency.</span>
          </h2>
          <p className="mx-auto max-w-[600px] text-[15px] leading-[1.7] text-primary-cbe-800/60 line-clamp-3">
            Ultimate Supply Chain ERP helps organizations centralize operations,
            reduce costs, improve delivery performance, and gain real-time
            control from procurement to distribution.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 bg-gradient-to-t from-background to-transparent via-background px-6 sm:px-30 w-full py-10 sm:py-16">
          {[
            {
              title: "A Fully Integrated Supply Chain Platform",
              description:
                "Integrates procurement, inventory management, order processing, logistics, and financial tracking into one unified ERP platform.",
              icon: GraduationCap,
              cta: "View Platform",
              featured: false,
            },
            {
              title: "Optimize Inventory & Reduce Costs",
              description:
                "Use real-time tracking and predictive insights to maintain optimal stock levels, avoid stockouts, and reduce overstocking.",
              icon: CheckCircle2,
              cta: "See Visibility",
              featured: true,
            },
            {
              title: "Streamline Order Fulfillment & Delivery",
              description:
                "Automate order processing, invoicing, and delivery workflows to accelerate order-to-cash cycles and improve customer satisfaction.",
              icon: Workflow,
              cta: "View Workflows",
              featured: false,
            },
            {
              title: "Gain Real-Time Visibility Across Operations",
              description:
                "Monitor procurement, inventory, and logistics in real time through centralized dashboards and operational insights.",
              icon: Layers3,
              cta: "Track Operations",
              featured: false,
            },
            {
              title: "Scale Seamlessly with Hybrid Architecture",
              description:
                "Built on a flexible hybrid model that combines cloud accessibility and on-premise reliability for security and performance.",
              icon: FileBarChart2,
              cta: "Explore Scale",
              featured: false,
            },
            {
              title: "Improve Accuracy & Operational Response",
              description:
                "Replace fragmented manual processes with automated workflows that improve accuracy, coordination, and responsiveness.",
              icon: BarChart3,
              cta: "See Benefits",
              featured: false,
            },
          ].map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </section>
      <section
        id="product-features"
        className="w-full px-6 py-20 sm:px-15 lg:px-30"
      >
        <div className="text-center flex flex-col gap-3 items-center px-6 sm:px-30 pt-16 sm:pt-32">
          <BadgePill label="Key features" centered={true} />
          <h2 className="mb-4 text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500">
            Everything Needed to Optimize <br />
            Your Supply <span className="text-primary-cta">Chain.</span>
          </h2>
          <p className="mx-auto max-w-[600px] text-[15px] leading-[1.7] text-primary-cbe-800/60 line-clamp-3">
            From inventory synchronization and order capture to analytics,
            finance, logistics, and third-party integrations, the platform
            centralizes your supply chain operations.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureItems.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
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
              <BadgePill label="Demo Preview" centered={false} />

              <div className="space-y-4">
                <h2 className="text-xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Transform Your Supply Chain
                  <br />
                  with <span className="text-primary-cta">Ultimate</span> Supply
                  Chain ERP
                </h2>

                <p className="max-w-xl text-base leading-8 text-white/72">
                  Improve visibility, reduce costs, and enhance efficiency
                  across procurement, inventory, logistics, and fulfillment.
                  Built for modern wholesale and distribution operations that
                  need one connected system from stock movement to delivery.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Integrated Supply Chain Management",
                  "Advanced Inventory Optimization",
                  "Order & Sales Management",
                  "Analytics & Reporting Dashboard",
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
                  Request a Demo
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
                    Ultimate Supply Chain ERP Product Overview
                  </DialogTitle>
                  <DialogContent className="max-w-4xl overflow-hidden p-0">
                    <div className="aspect-video w-full">
                      <iframe
                        className="h-full w-full"
                        src="https://www.youtube.com/embed/Da1hUqzoiAo?autoplay=1"
                        title="Ultimate Supply Chain ERP Product Overview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  "Real-Time Inventory Sync",
                  "Multi-Location Visibility",
                  "Order-to-Cash Efficiency",
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
                        Ultimate Supply Chain ERP Dashboard Preview
                      </p>
                      <p className="mt-1 text-xs text-white/55">
                        Real-time operational control from procurement to
                        delivery
                      </p>
                    </div>
                    <div className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold text-emerald-300 sm:block">
                      Live Overview
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[1.4rem] bg-white">
                    <Image
                      src="/images/saas/original.png"
                      alt="Ultimate Supply Chain ERP product preview"
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
                        Inventory Optimization
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Maintain optimal stock levels and reduce stockouts and
                        overstocking with real-time visibility.
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
                        Order Fulfillment
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Automate processing, invoicing, and delivery workflows
                        to improve speed and customer satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    label: "Inventory",
                    value: "Optimized",
                  },
                  {
                    label: "Operations",
                    value: "Real-Time",
                  },
                  {
                    label: "Fulfillment",
                    value: "Faster",
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
                  Take your supply chain operations to the next level.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                  Improve visibility, reduce costs, and enhance efficiency
                  across your entire distribution network with Ultimate Supply
                  Chain ERP.
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
                    "Inventory visibility",
                    "Order fulfillment",
                    "Cost reduction",
                    "Supply chain control",
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
