"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Add these to tailwind.config.ts → theme.extend ────────────────────────
//
//  fontFamily: {
//    syne: ["var(--font-syne)", "sans-serif"],   // load via next/font/google
//  },
//  keyframes: {
//    driftGlow: {
//      "0%":   { transform: "translate(0, 0) scale(1)" },
//      "100%": { transform: "translate(-40px, 60px) scale(1.1)" },
//    },
//    float1: {
//      "0%, 100%": { transform: "translateY(0)" },
//      "50%":      { transform: "translateY(-10px)" },
//    },
//    float2: {
//      "0%, 100%": { transform: "translateY(0)" },
//      "50%":      { transform: "translateY(8px)" },
//    },
//    float3: {
//      "0%, 100%": { transform: "translateY(0)" },
//      "50%":      { transform: "translateY(-12px)" },
//    },
//    shimmer: {
//      to: { backgroundPosition: "200% center" },
//    },
//    fadeUp: {
//      from: { opacity: "0", transform: "translateY(24px)" },
//      to:   { opacity: "1", transform: "translateY(0)" },
//    },
//  },
//  animation: {
//    driftGlow: "driftGlow 8s ease-in-out infinite alternate",
//    float1:    "float1 4s ease-in-out infinite",
//    float2:    "float2 5s ease-in-out infinite",
//    float3:    "float3 4.5s ease-in-out infinite",
//    shimmer:   "shimmer 3s linear infinite 1s",
//    fadeUp:    "fadeUp 0.6s ease both",
//  },
//
// ────────────────────────────────────────────────────────────────────────────

interface StatItem {
  value: string;
  suffix: string;
  label: string;
}

interface Props {
  title?: string;
  highlight?: string;
  titleSuffix?: string;
  description?: string;
  primaryCtaHref?: string;
  videoUrl?: string;
  imageSrc?: string;
  badgeText?: string;
  stats?: StatItem[];
  trustLogos?: string[];
}

export default function SiteHeroEnhanced({
  title = "The Complete",
  highlight = "ERP Solution",
  titleSuffix = "for Every Team",
  description = "Optimum System Ltd brings together HR, finance, academics, and operations in one unified platform — built for organisations that refuse to compromise.",
  primaryCtaHref = "#",
  videoUrl = "https://www.youtube.com/watch?v=Da1hUqzoiAo",
  imageSrc = "/images/laptop.png",
  badgeText = "Now available · Ultimate ERP v3.0",
  stats = [
    { value: "500", suffix: "+", label: "Schools & Institutions" },
    { value: "98", suffix: "%", label: "Client Retention Rate" },
    { value: "24", suffix: "/7", label: "Uptime & Support" },
  ],
}: Props) {
  return (
    <div className="bg-primary-cbe-500 text-white overflow-hidden w-full">
      {/* ── SECTION ────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-[url('/heros/ultimateERP.jpg')] bg-cover bg-black">
        {/* Background: radial colour layers */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 65% 40%, rgba(26,52,148,0.45) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 10% 80%, rgba(212,43,43,0.18) 0%, transparent 60%)",
          }}
        />

        {/* Drifting blue glow — top right */}
        <div className="absolute z-10 w-full h-full bg-[linear-gradient(to_right,rgba(21,20,62,0.97)_0%,rgba(21,20,62,0.93)_30%,rgba(21,20,62,0.55)_52%,rgba(21,20,62,0.18)_70%,rgba(21,20,62,0.04)_100%),linear-gradient(to_top,rgba(21,20,62,0.65)_0%,transparent_38%)]" />

        {/* ── HERO GRID ──────────────────────────────────────────────── */}
        <div className="relative z-10 container px-6 sm:px-30 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-81px)]">
          {/* ── LEFT COPY ─────────────────────────────────────────────── */}
          <div className="animate-fadeUp flex flex-col gap-7 md:max-w-full shrink-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[rgba(26,52,148,0.3)] border border-[rgba(43,79,216,0.4)] rounded-full px-3 py-1.5 mb-8 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F03333] shadow-[0_0_8px_#F03333] animate-pulse shrink-0" />
              <span className="text-white text-sm font-medium">
                {badgeText}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.06] text-white">
              {title} {" "}
              <span className="text-primary-cta">{highlight}</span> {" "}
              {titleSuffix}
            </h1>

            {/* Description */}
            <p className="text-white/65 text-base leading-relaxed max-w-[440px]">
              {description}
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary red button */}
              <Button variant="default" size="lg">
                Get Started Free
              </Button>

              {/* Video button */}
              <Button variant="ghost" size="lg" className="flex flex-row gap-2">
                <Play className="w-3.5 h-3.5 fill-current" />
                Watch Overview
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex items-center mt-6">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={[
                    i !== 0 ? "pl-7 border-l border-white/10" : "",
                    i !== stats.length - 1 ? "pr-7" : "",
                  ].join(" ")}
                >
                  <div className="font-syne font-extrabold text-[1.8rem] leading-none tracking-[-0.03em]">
                    {stat.value}
                    <span className="text-[#F03333]">{stat.suffix}</span>
                  </div>
                  <div className="text-[0.78rem] text-[#8A9AC5] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
