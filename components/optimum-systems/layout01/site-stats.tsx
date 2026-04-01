/* eslint-disable @next/next/no-img-element */
import BadgePill from "@/components/ui/badge-pill";
import { LucideIcon } from "@/lib/utils";
import {
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
    <section className="w-full bg-primary-cbe-50 bg-[url('/patterns/content-pattern.png')] bg-cover-top bg-no-repeat flex flex-col items-center">
      <div className="container py-16 sm:py-32 px-6 sm:px-30 bg-gradient-to-t from-primary-cbe-50/40 to-transparent via-primary-cbe-50/55">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* ── LEFT COLUMN ── */}
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
              {/* Eyebrow pill */}
              <BadgePill label="What we offer" centered={false} />

              <h1 className="mb-3 text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500">
                Automate, Manage &amp; Grow Your{" "}<span className="text-primary-cta">Organisation</span>{" "}Today
              </h1>

              <p className="text-muted-foreground leading-relaxed">
                Leverage Optimum&apos;s purpose-built ERP platform to streamline
                operations across finance, HR, academics, and more — giving your
                team the tools to work smarter across every department.
              </p>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Feature cards ── */}
          <div className="grid gap-3 text-left sm:grid-cols-2">
            {cards.map((card) => (
              <div
                key={card.id}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-cbe-50/20 bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800"
              >
                {/* Icon */}
                <div className="size-11 rounded-sm bg-white/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/25">
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
