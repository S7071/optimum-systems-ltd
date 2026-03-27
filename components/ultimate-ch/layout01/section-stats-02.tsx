// components/HMSStatsSection.tsx
import BadgePill from "@/components/ui/badge-pill";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "@/lib/utils";
import * as React from "react";

interface statCardProp {
  value: string;
  description: string;
  icon: LucideIcon;
  accent: boolean;
}

interface prop {
  eyebrow: string;
  title: React.ReactElement;
  description: string;
  statCards: statCardProp[];
}

function StatCard({
  stat,
  index,
}: {
  stat: statCardProp;
  index: number;
}) {
  const Icon = stat.icon;
  // Every other card gets extra height via more vertical padding
  const isTall = index % 2 === 1;

  return (
    <div
      className={`
        group relative overflow-hidden rounded-2xl cursor-default
        transition-all duration-500 ease-out
        hover:-translate-y-2
        ${isTall ? "py-9 px-7" : "py-7 px-7"}
        ${
          stat.accent
            ? "bg-primary-cbe-500 shadow-sm hover:shadow-lg"
            : "bg-primary-cbe-100 border border-white/[0.10] hover:bg-white/[0.09] hover:border-white/[0.22] hover:shadow-lg"
        }
      `}
    >
      {/* Hairline top accent bar — glass cards only */}
      {!stat.accent && (
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-primary-cbe-500/80 via-primary-cbe-500/25 to-transparent" />
      )}

      {/* Subtle inner highlight for accent card */}
      {stat.accent && (
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-white/40 to-transparent" />
      )}

      {/* Watermark icon — bottom-right, large + faded */}
      <div
        className={`
          absolute right-4 bottom-4
          transition-all duration-500 ease-out
          group-hover:scale-110 group-hover:rotate-[-6deg]
          ${stat.accent ? "opacity-[0.18]" : "opacity-[0.08] group-hover:opacity-[0.13]"}
        `}
      >
        <Icon className="h-24 w-24 text-primary-cbe-800" />
      </div>

      {/* Serial number label */}
      <span
        className={`
          block mb-4 text-[9px] font-bold tracking-[0.25em] uppercase
          ${stat.accent ? "text-primary-cbe-800/50" : "text-primary-cbe-800/22"}
        `}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Stat value */}
      <p
        className={`
          relative z-10 font-black leading-none tracking-tight text-primary-cbe-800
          text-[44px] sm:text-[48px]
          transition-transform duration-500 group-hover:scale-[1.02] origin-left
        `}
      >
        {stat.value}
      </p>

      {/* Thin divider */}
      <div
        className={`
          my-4 h-px w-10 rounded-full
          ${stat.accent ? "bg-white/30" : "bg-white/18"}
        `}
      />

      {/* Description */}
      <p
        className={`
          relative z-10 text-[12.5px] leading-snug
          ${stat.accent ? "text-primary-cbe-800/82 font-medium" : "text-primary-cbe-800/48"}
        `}
      >
        {stat.description}
      </p>
    </div>
  );
}

export default function StatsSection(prop: prop) {
  // Split cards into two columns for staggered layout
  const col1 = prop.statCards.filter((_, i) => i % 2 === 0);
  const col2 = prop.statCards.filter((_, i) => i % 2 !== 0);

  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-30 md:py-32 w-full bg-primary-cbe-50">
      {/* Ambient orb — top-right */}
      

      {/* Ambient orb — bottom-center */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-100px] left-[30%] h-[400px] w-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(200,21,43,0.14) 0%, transparent 65%)",
        }}
      />

      {/* Subtle dot-grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Diagonal accent line — decorative */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-[45%] h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent hidden md:block"
      />

      <div className="container relative z-10 mx-auto w-full px-4">
        <div className="grid items-center gap-16 md:grid-cols-2">

          {/* ── Left: copy ── */}
          <div className="flex flex-col gap-3">
            <BadgePill label={prop.eyebrow} centered={false} />

            {prop.title}

            <p className="mt-4 text-base font-light leading-relaxed text-primary-cbe-800/65 line-clamp-3">
              {prop.description}
            </p>

            <div className="mt-10 flex items-center gap-4">
              <Button variant="default" size="lg">
                Find Out More
              </Button>
            </div>
          </div>

          {/* ── Right: staggered 2-column stat cards ── */}
          <div className="grid grid-cols-2 gap-3 items-start">
            {/* Column 1 — flush top */}
            <div className="flex flex-col gap-3">
              {col1.map((stat, i) => (
                <StatCard key={i} stat={stat} index={i * 2} />
              ))}
            </div>

            {/* Column 2 — offset downward for stagger effect */}
            <div className="flex flex-col gap-3 pt-8">
              {col2.map((stat, i) => (
                <StatCard key={i} stat={stat} index={i * 2 + 1} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}