/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { cn, LucideIcon } from "@/lib/utils";
import {
  ArrowRight,
  ChartLine,
  HeartPlus,
  ServerCog,
  ShieldCheck,
} from "lucide-react";

export default function SiteStats() {
  interface StatCard {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
  }

  interface Stat {
    value: string;
    label: string;
  }

  const stats: Stat[] = [
    { value: "160+", label: "Institutions Served" },
    { value: "15+", label: "Years of Experience" },
    { value: "47", label: "Counties Covered" },
  ];

  const cards: StatCard[] = [
    {
      id: 0,
      title: "Cloud & On-Premise Deployment",
      description:
        "Flexible hosting options — deploy on the cloud or on your own servers based on your institution's needs and infrastructure.",
      icon: ServerCog,
    },
    {
      id: 1,
      title: "24/7 Dedicated Support",
      description:
        "Round-the-clock technical assistance, system monitoring, and expert helpdesk support whenever you need it.",
      icon: HeartPlus,
    },
    {
      id: 2,
      title: "Real-Time Reporting & Analytics",
      description:
        "Generate instant financial, academic, and operational reports with powerful dashboards built for decision-makers.",
      icon: ChartLine,
    },
    {
      id: 3,
      title: "Secure & Reliable Systems",
      description:
        "Bank-grade data security with role-based access controls, audit trails, and automatic backups to keep your data safe.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="w-full bg-background bg-[url('/patterns/content-pattern.png')] bg-cover-top bg-no-repeat">
      <div className="container w-full py-16 sm:py-32 px-6 sm:px-30 bg-gradient-to-t from-muted/40 to-transparent via-background/55">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* ── LEFT COLUMN ── */}
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
              {/* Eyebrow pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-cbe-500/20 bg-primary-cbe-500/8 px-3.5 py-1.5 mb-1">
                <span className="size-1.5 rounded-full bg-primary-cta" />
                <span className="text-[11px] font-medium uppercase tracking-widest text-primary-cbe-500">
                  ERP Platform
                </span>
              </div>

              <h1 className="mb-3 text-2xl sm:text-4xl font-bold text-pretty leading-tight tracking-tight">
                Automate, Manage &amp; Grow Your Institution Today
              </h1>

              <p className="text-muted-foreground leading-relaxed">
                Leverage Optimum&apos;s purpose-built ERP platform to streamline
                operations across finance, HR, academics, and more — giving your
                team the tools to work smarter across every department.
              </p>
            </div>

            {/* Stats row — unified card */}
            <div className="mt-10 flex overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={cn(
                    "flex flex-1 flex-col gap-1 px-5 py-4 items-center",
                    i !== stats.length - 1 && "border-r border-border",
                  )}
                >
                  <p className="text-2xl font-bold text-foreground sm:text-3xl">
                    {stat.value.replace("+", "")}
                    <span className="text-primary-cta">
                      {stat.value.includes("+") ? "+" : ""}
                    </span>
                  </p>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 justify-center lg:justify-start">
              <Button variant="default" size="lg">
                Request a Demo
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Feature cards ── */}
          <div className="grid gap-3 text-left sm:grid-cols-2">
            {cards.map((card, i) => (
              <div
                key={card.id}
                className={cn(
                  "group relative flex flex-col gap-4 overflow-hidden rounded-2xl border p-6 transition-all duration-300",
                  "hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-cbe-500/20",
                  // Alternate very slightly between two navy shades for depth
                  i % 2 === 0
                    ? "bg-primary-cbe-500 border-primary-cbe-600"
                    : "bg-primary-cbe-600 border-primary-cbe-700",
                )}
              >
                {/* Icon */}
                <div className="size-11 rounded-xl bg-white/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary-cta/25">
                  <card.icon className="size-5 text-white" />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5 z-10">
                  <p className="font-semibold text-white leading-snug">
                    {card.title}
                  </p>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Red accent bar — slides in on hover from bottom */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 rounded-b-2xl bg-primary-cta transition-all duration-300 group-hover:w-full" />

                {/* Decorative dot pattern (kept from original) */}
                <div className="absolute top-4 right-4 z-0 size-16 opacity-[0.07]">
                  <img
                    src="/patterns/dots.svg"
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
