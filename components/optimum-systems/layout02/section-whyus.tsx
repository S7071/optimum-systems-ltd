"use client";

import BadgePill from "@/components/ui/badge-pill";
import {
  Shield,
  Monitor,
  Users,
  ActivitySquare,
  Layers,
  Plug,
  ArrowUpRight,
} from "lucide-react";

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

interface StatItem {
  value: string;
  label: string;
}

interface CardItem {
  icon: React.ReactNode;
  title: string;
  body: string;
  badge: string;
}

// -----------------------------------------------------------------------------
// Data
// -----------------------------------------------------------------------------

const STATS: StatItem[] = [
  { value: "200+", label: "Institutions deployed" },
  { value: "30+", label: "ERP modules available" },
  { value: "11yr", label: "Average client retention" },
];

const CARDS: CardItem[] = [
  {
    icon: <Shield className="size-5" strokeWidth={1.8} />,
    title: "Category 1 Accredited",
    body: "Recognised at the highest ICT Authority accreditation tier across Systems & Applications and Information Security.",
    badge: "ICT Authority Kenya",
  },
  {
    icon: <Monitor className="size-5" strokeWidth={1.8} />,
    title: "Hybrid Architecture",
    body: "A secure hybrid model combining on-premise control with cloud accessibility for modern institutional operations.",
    badge: "Secure access model",
  },
  {
    icon: <Users className="size-5" strokeWidth={1.8} />,
    title: "Unlimited User Licensing",
    body: "Scale usage across departments and campuses without per-user cost friction, improving long-term commercial efficiency.",
    badge: "High-value deployment",
  },
  {
    icon: <ActivitySquare className="size-5" strokeWidth={1.8} />,
    title: "Regulatory Compliance",
    body: "Built to support IPSAS, CBET-CDACC, TVETA, KNEC, E-Citizen, and data protection obligations in Kenya.",
    badge: "Compliance ready",
  },
  {
    icon: <Layers className="size-5" strokeWidth={1.8} />,
    title: "Modular & Scalable",
    body: "Adopt only what you need today, then expand seamlessly as operational complexity and institutional demand increase.",
    badge: "30+ modules",
  },
  {
    icon: <Plug className="size-5" strokeWidth={1.8} />,
    title: "Deep Integrations",
    body: "Connect with M-Pesa, banks, KUCCPS, HELB, biometric hardware, SMS gateways, and internal enterprise systems.",
    badge: "Connected ecosystem",
  },
];

// -----------------------------------------------------------------------------
// Sub-components
// -----------------------------------------------------------------------------

function StatCard({ value, label }: StatItem) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-primary-cbe-50 bg-background px-6 py-6 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
      <div className="relative">
        <div className="text-3xl font-extrabold tracking-tight text-primary-cbe-500 sm:text-4xl">
          <span>{value.slice(0, -1)}</span>
          <span className="text-primary-cta">{value.slice(-1)}</span>
        </div>
        <p className="mx-auto mt-2 max-w-[14rem] text-sm leading-6 text-muted-foreground">
          {label}
        </p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, body, badge }: CardItem) {
  return (
    <div className="group relative h-full">
      <div className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-cbe-500/20 hover:shadow-md">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-cbe-500 to-primary-cbe-800 text-white shadow-md shadow-primary-cbe-500/20 ring-1 ring-white/40">
            {icon}
          </div>

          <div className="flex size-9 items-center justify-center rounded-full border border-border/70 bg-background/80 text-muted-foreground transition duration-300 group-hover:border-primary-cbe-500/20 group-hover:text-primary-cbe-500">
            <ArrowUpRight className="size-4" />
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{body}</p>
        </div>

        <div className="mt-6">
          <span className="inline-flex items-center rounded-full border border-primary-cta/15 bg-primary-cta/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-cta">
            {badge}
          </span>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Main section
// -----------------------------------------------------------------------------

export default function WhyUsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-background py-24 sm:py-28 w-full">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary-cbe-100/5 blur-3xl" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-primary-cta/10 blur-3xl" />
        <div className="absolute bottom-[-6%] left-0 h-72 w-72 rounded-full bg-primary-cbe-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center flex flex-col gap-3 items-center">
            <BadgePill label="Why Ultimate ERP" centered={true} />

            <h3 className="text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500 mb-4">
              Trusted infrastructure <br />
              for{" "}
              <span className="text-primary-cta">Serious Institutions</span>
            </h3>

            <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Built by experienced ICT professionals and deployed across
              institutions at scale, UltimateERP is designed for operational
              depth, compliance, resilience, and long-term growth.
            </p>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
            {STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          {/* Feature cards */}
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {CARDS.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
