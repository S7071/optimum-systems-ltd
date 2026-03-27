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

// Pre-defined pillar heights per index — asymmetric skyline
const PILLAR_HEIGHTS = [
  "h-[200px] sm:h-[220px]",
  "h-[290px] sm:h-[340px]",
  "h-[240px] sm:h-[280px]",
  "h-[165px] sm:h-[190px]",
];

// Color palette per index for non-accent cards
const NON_ACCENT_PALETTES = [
  {
    card: "bg-[#081529]",
    num: "text-white",
    desc: "text-white/55",
    label: "text-white/20",
    divider: "bg-white/12",
    icon: "text-white/10",
    shadow: "hover:shadow-sm",
  },
  {
    card: "bg-background border border-slate-200/80",
    num: "text-slate-900",
    desc: "text-slate-400",
    label: "text-slate-300",
    divider: "bg-slate-300",
    icon: "text-slate-200",
    shadow: "hover:shadow-sm",
  },
  {
    card: "bg-[#1940A0]",
    num: "text-white",
    desc: "text-white/55",
    label: "text-white/18",
    divider: "bg-white/15",
    icon: "text-white/10",
    shadow: "hover:shadow-sm",
  },
  {
    card: "bg-[#EEF0F5] border border-slate-200/60",
    num: "text-slate-900",
    desc: "text-slate-400",
    label: "text-slate-300",
    divider: "bg-slate-300",
    icon: "text-slate-200",
    shadow: "hover:shadow-sm",
  },
];

const ACCENT_PALETTE = {
  card: "bg-[#E01E37]",
  num: "text-white",
  desc: "text-white/72",
  label: "text-white/22",
  divider: "bg-white/22",
  icon: "text-white/10",
  shadow: "hover:shadow-sm",
};

export default function StatsSection(prop: prop) {
  // Assign palette per card (pure — no mutation during render)
  let nonAccentCount = 0;
  const palettes = prop.statCards.map((stat) => {
    if (stat.accent) return ACCENT_PALETTE;
    const p = NON_ACCENT_PALETTES[nonAccentCount % NON_ACCENT_PALETTES.length];
    nonAccentCount++;
    return p;
  });

  return (
    <section className="relative overflow-hidden bg-primary-cbe-50 w-full">

      {/* Subtle dot-grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.032]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Faint mid-section horizontal rule */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-[44%] h-px bg-gradient-to-r from-transparent via-slate-200/90 to-transparent"
      />

      <div className="relative z-10 container mx-auto max-w-7xl px-6 sm:px-10 pt-20 sm:pt-28">

        {/* ── TOP COPY ROW ── */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-14">

          {/* Left: badge + title */}
          <div className="max-w-xl">
            <BadgePill label={prop.eyebrow} centered={false} />
            <div className="mt-3">{prop.title}</div>
          </div>

          {/* Right: description + CTA */}
          <div className="max-w-[300px] flex flex-col gap-6">
            <p className="text-[13.5px] leading-relaxed text-slate-500">
              {prop.description}
            </p>
            <div>
              <Button variant="default" size="lg">
                Find Out More
              </Button>
            </div>
          </div>

        </div>

        {/* ── PILLAR BARS ── */}
        <div className="flex items-end gap-2.5 sm:gap-3 w-full">
          {prop.statCards.map((stat, i) => {
            const Icon = stat.icon;
            const palette = palettes[i];
            const heightClass = PILLAR_HEIGHTS[i] ?? "h-[220px]";

            return (
              <div
                key={i}
                className={`
                  relative flex-1 ${heightClass} rounded-2xl overflow-hidden
                  flex flex-col justify-between p-5 sm:p-6
                  ${palette.card} ${palette.shadow}
                  group cursor-default
                  shadow-[0_2px_16px_rgba(0,0,0,0.04)]
                  transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  hover:-translate-y-3
                `}
              >
                {/* Serial index + icon */}
                <div className="flex items-start justify-between">
                  <Icon
                    className={`h-10 w-10 sm:h-12 sm:w-12 shrink-0 ${palette.icon}
                      transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}
                  />
                </div>

                {/* Stat value + divider + description */}
                <div>
                  <p
                    className={`
                      text-[30px] sm:text-[38px] md:text-[44px]
                      font-black leading-none tracking-tight ${palette.num}
                      transition-transform duration-500 origin-bottom-left group-hover:scale-[1.04]
                    `}
                  >
                    {stat.value}
                  </p>

                  <div className={`my-3 h-px w-7 rounded-full ${palette.divider}`} />

                  <p className={`text-[10.5px] sm:text-[11.5px] leading-snug ${palette.desc}`}>
                    {stat.description}
                  </p>
                </div>

                {/* Accent card: bottom inner glow */}
                {stat.accent && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 rounded-b-2xl"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(255,255,255,0.08) 0%, transparent 100%)",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* ── BASELINE with tick marks ── */}
        <div className="flex items-start gap-2.5 sm:gap-3 w-full">
          {prop.statCards.map((_, i) => (
            <div key={i} className="flex-1 flex flex-col items-center">
              <div className="h-2 w-px bg-slate-300/50" />
              <div className="h-px w-full bg-slate-200" />
            </div>
          ))}
        </div>

        {/* ── Footer label strip ── */}
        <div className="flex items-center justify-between mt-5 pb-20 sm:pb-28">
          <p className="text-[9.5px] tracking-[0.22em] uppercase text-slate-300 font-semibold select-none">
            Performance metrics
          </p>
          <p className="text-[9.5px] tracking-[0.22em] uppercase text-slate-300 font-semibold select-none">
            Optimum ERP Systems
          </p>
        </div>

      </div>
    </section>
  );
}