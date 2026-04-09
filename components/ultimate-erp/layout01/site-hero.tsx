"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Play,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

interface Props {
  title?: string;
  highlight?: string;
  titleSuffix?: string;
  description?: string;
  primaryCtaHref?: string;
  videoUrl?: string;
  imageSrc?: string;
  badgeText?: string;
  trustLogos?: string[];
}

export default function SiteHeroEnhanced({
  title = "The Complete",
  highlight = "ERP Solution",
  titleSuffix = "for Modern Institutions",
  description = "Ultimate ERP unifies finance, HR, academics, procurement, and operations in one intelligent platform built for institutions that need scale, control, and clarity.",
  primaryCtaHref = "#",
  videoUrl = "https://www.youtube.com/watch?v=Da1hUqzoiAo",
  imageSrc = "/images/saas/laptop.png",
  badgeText = "Now available · Ultimate ERP v3.0",
  trustLogos = ["Finance", "Academics", "HR & Payroll", "Procurement"],
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-primary-cbe-500 text-white w-full">
      {/* Background image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/heros/ultimateERP.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(5,10,24,0.97)_0%,rgba(7,17,39,0.94)_40%,rgba(7,17,39,0.72)_72%,rgba(7,17,39,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.14),transparent_28%)]" />
      </div>

      {/* Ambient glows */}
      <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl animate-pulse" />
      <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-red-500/10 blur-3xl animate-pulse" />

      <div className="relative mx-auto grid min-h-[calc(100vh-81px)] w-full max-w-full grid-cols-1 items-center gap-14 px-6 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 xl:px-30">
        {/* Left */}
        <div className="flex max-w-2xl flex-col">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-400/20 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur-md">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_16px_rgba(239,68,68,0.9)]" />
            <span>{badgeText}</span>
          </div>

          <div className="mt-6 space-y-6">
            <div className="space-y-4">
              <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.24em] text-blue-200/80">
                <Sparkles className="h-4 w-4" />
                Enterprise Resource Planning
              </p>

              <h1 className="max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl xl:text-[4.4rem]">
                {title}{" "}
                <span className="bg-gradient-to-r from-primary-cta to-primary-cta-800 bg-clip-text text-transparent">
                  {highlight}
                </span>{" "}
                {titleSuffix}
              </h1>

              <p className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {trustLogos.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-slate-200 backdrop-blur-sm transition duration-300 hover:border-blue-300/30 hover:bg-white/10"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href={primaryCtaHref}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-cta px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-primary-cta-800"
              >
                Request a Demo
                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href={videoUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-white/20 hover:bg-white/10 h-fit"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/10">
                  <Play className="ml-0.5 h-3 w-3 fill-current" />
                </span>
                Watch Overview
              </Link>
            </div>

          </div>
        </div>

        {/* Right */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[620px]">
            {/* Floating card top */}
            <div className="absolute -left-5 top-8 z-20 hidden rounded-2xl border border-white/10 bg-[#0f1b3d]/90 p-4 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 xl:block">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-blue-500/15 p-2 text-blue-300">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Real-time visibility
                  </p>
                  <p className="mt-1 max-w-[180px] text-xs leading-5 text-slate-300">
                    Track approvals, finance, and institutional activity from one dashboard.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating card bottom */}
            <div className="absolute -right-4 bottom-8 z-20 hidden rounded-2xl border border-white/10 bg-[#101d42]/90 p-4 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 xl:block">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-emerald-500/15 p-2 text-emerald-300">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Secure by design
                  </p>
                  <p className="mt-1 max-w-[180px] text-xs leading-5 text-slate-300">
                    Role-based control, audit trails, and enterprise-grade reliability.
                  </p>
                </div>
              </div>
            </div>

            {/* Main product frame */}
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.06] p-3 shadow-[0_30px_120px_rgba(2,6,23,0.55)] backdrop-blur-2xl">
              <div className="rounded-[24px] border border-white/10 bg-[#0a1430]/95">
                {/* Window top */}
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Ultimate ERP Console
                      </p>
                      <p className="text-xs text-slate-400">
                        Unified operations workspace
                      </p>
                    </div>
                  </div>

                  <div className="hidden items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300 sm:flex">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live System
                  </div>
                </div>

                {/* Product image */}
                <div className="p-4">
                  <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-slate-950/60">
                    <div className="absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-blue-400/10 to-transparent" />
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={imageSrc}
                        alt="Ultimate ERP platform preview"
                        fill
                        className="object-cover transition duration-700 hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 620px"
                        priority
                      />
                    </div>
                  </div>

                  {/* Bottom info row */}
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex items-center gap-2 text-blue-300">
                        <Building2 className="h-4 w-4" />
                        <span className="text-xs font-medium uppercase tracking-widest">
                          Modules
                        </span>
                      </div>
                      <p className="mt-3 text-base font-semibold text-white">30+</p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        Flexible modules across key departments.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex items-center gap-2 text-red-300">
                        <ShieldCheck className="h-4 w-4" />
                        <span className="text-xs font-medium uppercase tracking-widest">
                          Control
                        </span>
                      </div>
                      <p className="mt-3 text-base font-semibold text-white">Role-based</p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        Permissions, reviews, and audit visibility.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex items-center gap-2 text-emerald-300">
                        <BarChart3 className="h-4 w-4" />
                        <span className="text-xs font-medium uppercase tracking-widest">
                          Insight
                        </span>
                      </div>
                      <p className="mt-3 text-base font-semibold text-white">Live Reporting</p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        Faster decision-making with operational intelligence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative ring */}
            <div className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.12)_0%,transparent_58%)] blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}