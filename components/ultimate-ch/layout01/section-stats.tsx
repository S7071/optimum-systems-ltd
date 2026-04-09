/* eslint-disable react-hooks/immutability */
// components/HMSStatsSection.tsx
import BadgePill from "@/components/ui/badge-pill";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "@/lib/utils";
import * as React from "react";

interface StatCardProp {
  value: string;
  description: string;
  icon: LucideIcon;
  accent: boolean;
}

interface Props {
  eyebrow: string;
  title: React.ReactElement;
  description: string;
  statCards: StatCardProp[];
}

const PILLAR_HEIGHTS = [
  "md:h-[320px] xl:h-[360px]",
  "md:h-[390px] xl:h-[450px]",
  "md:h-[350px] xl:h-[400px]",
  "md:h-[285px] xl:h-[320px]",
] as const;

const NON_ACCENT_PALETTES = [
  {
    card: "bg-[#081529] border border-white/10",
    number: "text-white",
    copy: "text-slate-300",
    eyebrow: "text-white/55",
    iconWrap: "bg-white/10 ring-1 ring-white/10",
    icon: "text-white",
    divider: "bg-white/15",
    shadow: "shadow-[0_24px_60px_rgba(2,6,23,0.18)]",
    overlay: "from-white/10 via-white/0 to-transparent",
  },
  {
    card: "bg-white border border-slate-200/80",
    number: "text-slate-950",
    copy: "text-slate-600",
    eyebrow: "text-slate-400",
    iconWrap: "bg-slate-100 ring-1 ring-slate-200",
    icon: "text-slate-700",
    divider: "bg-slate-200",
    shadow: "shadow-[0_24px_60px_rgba(15,23,42,0.08)]",
    overlay: "from-slate-200/40 via-slate-100/0 to-transparent",
  },
  {
    card: "bg-[#1940A0] border border-white/10",
    number: "text-white",
    copy: "text-blue-100/85",
    eyebrow: "text-blue-100/60",
    iconWrap: "bg-white/10 ring-1 ring-white/10",
    icon: "text-white",
    divider: "bg-white/15",
    shadow: "shadow-[0_24px_60px_rgba(25,64,160,0.22)]",
    overlay: "from-white/10 via-white/0 to-transparent",
  },
  {
    card: "bg-[#F5F7FB] border border-slate-200/80",
    number: "text-slate-950",
    copy: "text-slate-600",
    eyebrow: "text-slate-400",
    iconWrap: "bg-white ring-1 ring-slate-200",
    icon: "text-slate-700",
    divider: "bg-slate-200",
    shadow: "shadow-[0_24px_60px_rgba(15,23,42,0.08)]",
    overlay: "from-slate-200/50 via-slate-100/0 to-transparent",
  },
] as const;

const ACCENT_PALETTE = {
  card: "bg-[#E01E37] border border-white/10",
  number: "text-white",
  copy: "text-white/80",
  eyebrow: "text-white/60",
  iconWrap: "bg-white/10 ring-1 ring-white/15",
  icon: "text-white",
  divider: "bg-white/20",
  shadow: "shadow-sm",
  overlay: "from-white/0 via-white/0 to-transparent",
} as const;

export default function StatsSection(prop: Props) {
  let nonAccentCount = 0;

  const palettes = prop.statCards.map((stat) => {
    if (stat.accent) return ACCENT_PALETTE;
    const palette =
      NON_ACCENT_PALETTES[nonAccentCount % NON_ACCENT_PALETTES.length];
    nonAccentCount += 1;
    return palette;
  });

  return (
    <section className="relative isolate w-full overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="absolute top-[-120px] left-0 h-[300px] w-[300px] rounded-full bg-primary-cta/5 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-10 h-80 w-80 rounded-full bg-primary-cbe-500/5 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-[46%] h-px bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />

      <div className="relative z-10 max-w-full px-6 py-20 sm:px-16 lg:px-30 sm:py-24 xl:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_360px] lg:items-end">
          <div className="max-w-3xl">
            <BadgePill label={prop.eyebrow} centered={false} />

            <div className="mt-5 text-balance [&_*]:m-0 [&_h1]:text-4xl [&_h1]:font-semibold [&_h1]:tracking-tight [&_h1]:text-slate-950 [&_h2]:text-4xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-slate-950 [&_p]:text-slate-950 sm:[&_h1]:text-5xl sm:[&_h2]:text-5xl">
              {prop.title}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-sm backdrop-blur">
            <p className="text-sm leading-7 text-slate-600">
              {prop.description}
            </p>

            <div className="mt-6 flex items-center gap-4">
              <Button
                variant="default"
                size="lg"
                className="h-12 rounded-full px-6 text-sm font-semibold shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
              >
                Find Out More
              </Button>

              <div className="hidden h-px flex-1 bg-slate-200 sm:block" />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              Performance Overview
            </p>
            <p className="hidden text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400 sm:block">
              Enterprise Benchmarks
            </p>
          </div>

          <div className="flex items-end gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {prop.statCards.map((stat, i) => {
              const Icon = stat.icon;
              const palette = palettes[i];
              const heightClass = PILLAR_HEIGHTS[i % PILLAR_HEIGHTS.length];

              return (
                <article
                  key={`${stat.value}-${i}`}
                  className={[
                    "group relative flex min-h-[300px] min-w-[260px] flex-1 snap-start flex-col justify-between overflow-hidden rounded-[28px] p-5 transition-all duration-500 ease-out",
                    "sm:min-w-[280px] sm:p-6",
                    "md:min-w-0",
                    "h-[320px]",
                    heightClass,
                    palette.card,
                    "hover:translate-y-2 hover:shadow-md",
                  ].join(" ")}
                >

                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div>
                      <p
                        className={`text-[11px] font-semibold uppercase tracking-widest ${palette.eyebrow}`}
                      >
                        Metric {String(i + 1).padStart(2, "0")}
                      </p>
                    </div>

                    <div
                      className={[
                        "flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500",
                        "group-hover:scale-105 group-hover:-translate-y-0.5",
                        palette.iconWrap,
                      ].join(" ")}
                    >
                      <Icon className={`h-5 w-5 ${palette.icon}`} />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div
                      className={`mb-4 h-px w-10 rounded-full ${palette.divider}`}
                    />

                    <p
                      className={[
                        "text-[2rem] font-extrabold leading-none tracking-[-0.04em] transition-transform duration-500",
                        "sm:text-[2.5rem] xl:text-[3rem]",
                        "group-hover:translate-x-0.5",
                        palette.number,
                      ].join(" ")}
                    >
                      {stat.value}
                    </p>

                    <p
                      className={`mt-4 max-w-[18ch] text-sm leading-6 ${palette.copy}`}
                    >
                      {stat.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-2 hidden items-start gap-4 md:flex">
            {prop.statCards.map((_, i) => (
              <div key={i} className="flex flex-1 flex-col items-center">
                <div className="h-2 w-px bg-slate-300/60" />
                <div className="h-px w-full bg-slate-200" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-200/80 pt-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
            Institutional performance metrics
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
            Optimum ERP Systems
          </p>
        </div>
      </div>
    </section>
  );
}
