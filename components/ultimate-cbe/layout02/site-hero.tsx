"use client";

import { useState, useEffect } from "react";
import { Play, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "../../ui/button";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Stat {
  value: string;
  suffix?: string;
  label: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS: Stat[] = [
  { value: "500", suffix: "+", label: "Kenyan schools" },
  { value: "4.6", label: "Avg. rating" },
  { value: "KNEC", label: "Syllabus aligned" },
];

const PLATFORM_FEATURES = [
  "Automated CBE Grading",
  "Student Progress Tracking",
  "Parent Portals",
  "KNEC Reporting",
  "Staff Management",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

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

function StatBlock({ stat }: { stat: Stat }) {
  return (
    <div className="flex flex-col gap-1 px-5 py-3 border-r border-primary-cbe-800/12 last:border-r-0 hover:bg-primary-cbe-800/[0.04] transition-colors items-center justify-center">
      <span className="font-bold text-primary-cbe-800 text-2xl leading-none tabular-nums">
        {stat.value}
        {stat.suffix && (
          <sup className="text-red-600 text-sm">{stat.suffix}</sup>
        )}
      </span>
      <span className="uppercase tracking-widest text-slate-400 text-[10px] text-center whitespace-nowrap">
        {stat.label}
      </span>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SiteHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex flex-col w-full overflow-hidden bg-primary-cbe-50">
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
            <div className="size-10 rounded-lg bg-background flex items-center justify-center flex-shrink-0 p-1.5 border border-primary-cbe-100">
              <Image
                src="/logos/approved/cbe-dark-icon.svg"
                alt="UltimateCBE"
                width={10}
                height={10}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-cbe-800">
              <span className="text-primary-cta font-extrabold">Ultimate</span>CBE ASSESSMENT ERP
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.18] text-primary-cbe-800 tracking-[-1px]">
            Competency Based ERP
            <br />
            for{" "}
            <span className="text-primary-cbe-500 font-bold">
              Senior Schools
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-primary-cbe-800 text-base leading-relaxed max-w-[340px] sm:max-w-[440px]">
            Manage Grades 10–12 seamlessly with UltimateCBE — Kenya&apos;s most
            advanced CBE-aligned platform with real-time insights,{" "}
            <strong className="text-primary-cbe-500 font-semibold">
              automated grading
            </strong>
            , and{" "}
            <strong className="text-primary-cbe-500 font-semibold">
              KNEC syllabus integration
            </strong>
            . Completely built for your school.
          </p>

          {/* Stat strip */}
          <div className="flex w-fit overflow-hidden rounded-xl border border-primary-cbe-800/12 bg-[#F7F8FA]">
            {STATS.map((stat) => (
              <StatBlock key={stat.label} stat={stat} />
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* Primary — red action */}
            <Button variant="default" size="lg">
              Book a Demo
              <ArrowRight className="size-4" />
            </Button>

            {/* Ghost — secondary / video */}
            <Button variant="ghost" size="lg">
              <span className="size-7 rounded-full bg-primary-cbe-800 flex items-center justify-center flex-shrink-0">
                <Play size={10} fill="white" color="white" className="ml-px" />
              </span>
              Watch Overview
            </Button>
          </div>

          {/* Rating social proof */}
          <div className="flex items-center gap-2 pt-1">
            <StarRating rating={4.6} />
            <span className="text-[13px] text-slate-500">
              <strong className="text-slate-700 font-medium">Rated 4.6</strong>{" "}
              · trusted by{" "}
              <strong className="text-slate-700 font-medium">500+</strong>{" "}
              Kenyan schools
            </span>
          </div>
        </div>
        {/* ── RIGHT: Photo ── */}
        <div className="relative overflow-hidden hidden md:block">
          {/* Background texture from original */}
          <Image
            src="/images/cbe/bg-lines.webp"
            alt=""
            fill
            className="object-cover opacity-30 pointer-events-none z-0"
            aria-hidden="true"
          />

          {/* Hero photo */}
          <Image
            src="/images/cbe/hero.jpg"
            alt="Teacher working with students on CBE curriculum"
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
            KNEC Aligned
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
                Auto-grading enabled
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                47 assessments processed today
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
  );
}
