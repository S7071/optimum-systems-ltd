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
  trustLogos = [
    "Nairobi Academy",
    "KCA University",
    "Riara Group",
    "Braeburn Schools",
    "St. Austin's",
  ],
}: Props) {
  return (
    <div className="bg-[#0B1437] text-white overflow-hidden w-full">
      {/* ── SECTION ────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden">
        {/* Background: subtle dot grid */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.06] w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Background: radial colour layers */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 65% 40%, rgba(26,52,148,0.45) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 10% 80%, rgba(212,43,43,0.18) 0%, transparent 60%)",
          }}
        />

        {/* Drifting blue glow — top right */}
        <div className="absolute -top-[200px] -right-[100px] w-[700px] h-[700px] rounded-full pointer-events-none z-0 animate-driftGlow bg-[radial-gradient(circle,rgba(43,79,216,0.3)_0%,transparent_70%)]" />

        {/* ── HERO GRID ──────────────────────────────────────────────── */}
        <div className="relative z-10 container px-6 sm:px-30 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-81px)]">
          {/* ── LEFT COPY ─────────────────────────────────────────────── */}
          <div className="w-full animate-fadeUp">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[rgba(26,52,148,0.3)] border border-[rgba(43,79,216,0.4)] rounded-full px-3 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F03333] shadow-[0_0_8px_#F03333] animate-pulse shrink-0" />
              <span className="text-[#93AAFF] text-xs font-medium">
                {badgeText}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-syne font-extrabold leading-[1.05] tracking-[-0.03em] text-[clamp(2.6rem,4.5vw,3.8rem)] mb-6 text-white">
              {title}
              <br />
              <span className="text-primary-cta">{highlight}</span>
              <br />
              {titleSuffix}
            </h1>

            {/* Description */}
            <p className="text-[#8A9AC5] text-[1.05rem] leading-[1.7] max-w-[440px] mb-10 font-light">
              {description}
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              {/* Primary red button */}
              <Button variant="default" size="lg">
                Get Started Free
              </Button>

              {/* Video button */}
              <Button variant="ghost" size="lg">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                Watch Overview
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex items-center">
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

          {/* ── RIGHT VISUAL ──────────────────────────────────────────── */}
          <div className="relative hidden lg:flex justify-center items-center">
            {/* Floating card — top left */}
            <div className="absolute top-[8%] left-[-5%] z-20 bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] rounded-[14px] px-4 py-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.4)] whitespace-nowrap animate-float1">
              <div className="text-[0.7rem] text-[#8A9AC5] mb-0.5">
                Total Students
              </div>
              <div className="font-syne font-bold text-[1.15rem] leading-none">
                12,480
              </div>
              <div className="text-[0.72rem] text-[#4ADE80] flex items-center gap-1 mt-0.5">
                <span>▲</span> Up 18% this term
              </div>
            </div>

            {/* Floating card — bottom left */}
            <div className="absolute bottom-[14%] left-[-8%] z-20 bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] rounded-[14px] px-4 py-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.4)] whitespace-nowrap animate-float2">
              <div className="text-[0.7rem] text-[#8A9AC5] mb-0.5">
                Fee Collection
              </div>
              <div className="font-syne font-bold text-[1.15rem] leading-none">
                KSh 4.2M
              </div>
              <div className="text-[0.72rem] text-[#4ADE80] flex items-center gap-1 mt-0.5">
                <span>▲</span> Collected this month
              </div>
            </div>

            {/* Floating card — top right */}
            <div className="absolute top-[15%] right-[-4%] z-20 bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] rounded-[14px] px-4 py-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.4)] whitespace-nowrap animate-float3">
              <div className="text-[0.7rem] text-[#8A9AC5] mb-0.5">
                System Uptime
              </div>
              <div className="font-syne font-bold text-[1.15rem] leading-none">
                99.97%
              </div>
              <div className="text-[0.72rem] text-[#4ADE80] flex items-center gap-1 mt-0.5">
                <span>▲</span> Last 30 days
              </div>
            </div>

            {/* Laptop image */}
            <div className="relative z-10 w-full max-w-[600px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)]">
              <Image
                src={imageSrc}
                alt="Ultimate ERP Dashboard Preview"
                width={1200}
                height={800}
                className="mx-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ──────────────────────────────────────────────────── */}
      <div className="relative z-10 border-t border-white/[0.06] px-6 lg:px-16 py-6 flex items-center gap-8 flex-wrap">
        <span className="text-[0.78rem] text-[#8A9AC5] whitespace-nowrap shrink-0">
          Trusted by leading institutions
        </span>
        <div className="hidden sm:block w-px h-7 bg-white/10 shrink-0" />
        <div className="flex items-center gap-9 flex-wrap">
          {trustLogos.map((name) => (
            <span
              key={name}
              className="font-syne font-bold text-[0.8rem] text-white/20 uppercase tracking-wider hover:text-white/50 transition-colors duration-200 cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
