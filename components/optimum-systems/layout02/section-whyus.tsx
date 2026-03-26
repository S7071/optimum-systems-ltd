"use client";

import { useEffect, useRef } from "react";
import BadgePill from "@/components/ui/badge-pill";
import {
  Shield,
  Monitor,
  Users,
  ActivitySquare,
  Layers,
  Plug,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  duration: number;
}

interface CardItem {
  icon: React.ReactNode;
  title: string;
  body: string;
  badge: string;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const STATS: StatItem[] = [
  { target: 150, suffix: "+", label: "Institutions\ndeployed", duration: 1400 },
  { target: 30, suffix: "+", label: "ERP modules\navailable", duration: 1200 },
  {
    target: 8,
    suffix: "yr",
    label: "Average client\nretention",
    duration: 900,
  },
];

const CARDS: CardItem[] = [
  {
    icon: <Shield className="size-5" strokeWidth={1.75} />,
    title: "Category 1 Accredited",
    body: "Holders of the ICT Authority's highest accreditation level in both Systems & Applications and Information Security.",
    badge: "ICT Authority Kenya",
  },
  {
    icon: <Monitor className="size-5" strokeWidth={1.75} />,
    title: "Hybrid Architecture",
    body: "On-premise security combined with cloud accessibility — your data stays protected while staff access it from anywhere.",
    badge: "Zero breaches reported",
  },
  {
    icon: <Users className="size-5" strokeWidth={1.75} />,
    title: "Unlimited User Licensing",
    body: "No per-user fees. One installation cost covers your entire organisation — from 50 to over 100,000 users.",
    badge: "Maximum ROI",
  },
  {
    icon: <ActivitySquare className="size-5" strokeWidth={1.75} />,
    title: "Full Regulatory Compliance",
    body: "IPSAS, CBET-CDACC, TVETA, KNEC, and E-Citizen ready. Registered Data Controller and Processor under Kenya's Data Protection Act.",
    badge: "Data Protection Act 2019",
  },
  {
    icon: <Layers className="size-5" strokeWidth={1.75} />,
    title: "Modular & Scalable",
    body: "Start with the modules you need today and expand without budget strain. Tailored exactly to your operations — no cookie-cutter approach.",
    badge: "30+ modules",
  },
  {
    icon: <Plug className="size-5" strokeWidth={1.75} />,
    title: "Deep Integrations",
    body: "Seamlessly connects with M-Pesa, major banks, E-Citizen, KUCCPS, HELB, Active Directory, SMS gateways, and biometric hardware.",
    badge: "Plug & play ecosystem",
  },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function StatCounter({ target, suffix, label, duration }: StatItem) {
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const timer = setTimeout(() => {
      const start = performance.now();

      function update(now: number) {
        const elapsed = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - elapsed, 3);
        el!.textContent = String(Math.round(eased * target));
        if (elapsed < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
    }, 200);

    return () => clearTimeout(timer);
  }, [target, duration]);

  return (
    <div className="flex flex-col items-center justify-center bg-background px-4 py-5 text-center">
      <span className="font-extrabold text-3xl leading-none text-primary-cbe-500">
        <span ref={numRef}>0</span>
        <span className="text-primary-cta">{suffix}</span>
      </span>
      <span className="mt-1.5 whitespace-pre-line text-xs leading-snug text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function FeatureCard({ icon, title, body, badge }: CardItem) {
  return (
    <div className="group relative block h-full w-full p-2">
      <div className="relative z-20 flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background p-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:border-border/80">
        {/* Top-border sweep on hover */}
        <div className="absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0 bg-primary-cbe-500 transition-transform duration-300 ease-out group-hover:scale-x-100" />

        {/* Icon */}
        <div className="mb-4 mt-1 flex size-10 items-center justify-center rounded-xl bg-primary-cbe-500/10 text-primary-cbe-500">
          {icon}
        </div>

        {/* Text */}
        <h3 className="mb-1.5 text-base font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {body}
        </p>

        {/* Badge */}
        <span className="mt-4 inline-block self-start rounded-full bg-primary-cta/10 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-primary-cta">
          {badge}
        </span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main section
// ---------------------------------------------------------------------------

export default function WhyUsSections() {
  return (
    <section className="w-full overflow-hidden py-24 bg-primary-cbe-50">
      <div className="container flex flex-col gap-6 px-6 sm:px-30 w-full items-center">
        <div className="flex flex-col items-center gap-3 text-center mb-12">
          <BadgePill label="Why UltimateERP" centered={true} />
          <h3 className="text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500 mb-4">
            World&apos;s Most Trusted{" "}
            <span className="relative inline-block text-primary-cta">
              ERP Partner
            </span>
          </h3>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            Built by 50+ ICT professionals, deployed across 200+ institutions —
            we deliver technology that actually transforms how organisations
            operate.
          </p>
        </div>

        {/* Stats bar */}
        <div className="mb-10 w-full max-w-4xl overflow-hidden rounded-xl border border-border">
          <div className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-3 md:divide-y-0">
            {STATS.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        {/* Feature cards */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {CARDS.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
