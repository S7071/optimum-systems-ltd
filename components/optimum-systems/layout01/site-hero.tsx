/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Product {
  src: string;
  label: string; // e.g. "Ultimate"
  name: string; // e.g. "CBE"
  desc: string; // e.g. "SACCO & Banking"
  accent?: boolean; // highlights the featured card
}

interface Stat {
  value: string;
  suffix: string;
  label: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PRODUCTS: Product[] = [
  {
    src: "/logos/icon.svg",
    label: "Ultimate",
    name: "ERP",
    desc: "Resource Mgmt",
    accent: true,
  },
  {
    src: "/logos/ultimate-icon.svg",
    label: "Ultimate",
    name: "CBE",
    desc: "Education",
  },
  {
    src: "/logos/ultimate-icon.svg",
    label: "Ultimate",
    name: "CMS",
    desc: "Conference Mgmt",
  },
  {
    src: "/logos/ultimate-icon.svg",
    label: "Ultimate",
    name: "HMS",
    desc: "Hotel Mgmt",
  },
  {
    src: "/logos/ultimate-icon.svg",
    label: "Ultimate",
    name: "MFG",
    desc: "Manufacturing",
  },
  {
    src: "/logos/ultimate-icon.svg",
    label: "Ultimate",
    name: "POS",
    desc: "Point of Sale",
  },
  {
    src: "/logos/ultimate-icon.svg",
    label: "Ultimate",
    name: "SCM",
    desc: "Supply Chain",
  },
];

const STATS: Stat[] = [
  { value: "200", suffix: "+", label: "Organizations" },
  { value: "15", suffix: "+", label: "Years Active" },
  { value: "30", suffix: "+", label: "Products" },
];

const TRUST_AVATARS = ["KU", "SB", "MP", "KE", "+"];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className={[
        "flex items-center gap-3 rounded-xl border p-3 cursor-pointer",
        "transition-all duration-200 hover:-translate-y-px",
        product.accent
          ? "bg-primary-cbe-500/20 border-primary-cbe-500/25 hover:bg-primary-cbe-500/18 hover:border-primary-cbe-500/40"
          : "bg-white/5 border-white/8 hover:bg-white/10 hover:border-white/18",
      ].join(" ")}
    >
      {/* icon wrapper */}
      <div className="size-9 rounded-lg bg-primary-cbe-50 flex items-center justify-center flex-shrink-0 p-1.5">
        <img
          src={product.src}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* text */}
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="text-[10px] font-bold uppercase tracking-widest text-primary-cta leading-none">
          {product.label}
        </span>
        <span className="text-sm font-bold text-white leading-tight">
          {product.name}
        </span>
        <span className="text-[10px] text-white leading-tight truncate hidden sm:flex">
          {product.desc}
        </span>
      </div>
    </div>
  );
}

function StatBlock({ stat }: { stat: Stat }) {
  return (
    <div className="flex-1 flex flex-col gap-1 px-5 py-3 border-r border-white/10 last:border-r-0 bg-white/[0.03] hover:bg-white/[0.06] transition-colors items-center justify-center">
      <span className="font-bold text-white text-2xl leading-none tabular-nums">
        {stat.value}
        <sup className="text-red-500 text-base">{stat.suffix}</sup>
      </span>
      <span className="uppercase tracking-widest text-white/50 sm:text-[11px] text-[7px] text-center">
        {stat.label}
      </span>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SiteHero() {
  return (
    <section className="relative flex flex-col items-center min-h-screen overflow-hidden w-full">
      {/* ── Background photo ── */}
      <div className="absolute inset-0 z-0 bg-primary-cbe-800">
        <Image
          src="/images/parent/hero.jpg"
          alt="background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/*
        ── Directional gradient overlay ──
        Heavy dark-blue on the LEFT so text is legible;
        fades to near-transparent on the RIGHT so the photo breathes.
        A separate bottom vignette anchors the scene.
        Using inline style for the multi-stop gradient Tailwind can't express.
      */}
      <div
        className={cn(
          "absolute inset-0 z-10 pointer-events-none",
          "bg-[linear-gradient(to_right,rgba(21,20,62,0.97)_0%,rgba(21,20,62,0.93)_30%,rgba(21,20,62,0.55)_52%,rgba(21,20,62,0.18)_70%,rgba(21,20,62,0.04)_100%),linear-gradient(to_top,rgba(21,20,62,0.65)_0%,transparent_38%)]",
        )}
        aria-hidden="true"
      />

      {/* Subtle red tint over photo side */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(215,43,43,0.07), transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ── Main content grid ── */}
      <div className="container relative z-20 flex-1 flex flex-col">
        <div className="flex-1 container px-6 sm:px-20 lg:px-30 py-16 sm:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-12 lg:gap-16 w-full">
          {/* ── LEFT: Copy ── */}
          <div className="flex flex-col gap-7 md:max-w-full shrink-0">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 bg-[rgba(26,52,148,0.3)] border border-[rgba(43,79,216,0.4)] rounded-full px-3 py-1.5 mb-8 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F03333] shadow-[0_0_8px_#F03333] animate-pulse shrink-0" />
              <span className="text-white text-sm font-medium">
                Transforming business processes, sustaining growth
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.06] text-white">
              Enterprise Solutions
              <br />
              Built for the
              <br />
              mordern{" "}
              <span className="text-red-500 relative inline-block">
                World
                {/* underline accent */}
                <span
                  className="absolute left-0 -bottom-1 h-0.5 w-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(to right, #D72B2B, transparent)",
                  }}
                />
              </span>
            </h1>

            {/* Body */}
            <p className="text-white/65 text-base leading-relaxed max-w-[440px]">
              Kenya&apos;s leading developer of enterprise resource planning
              software — from academic institutions and SACCOs to manufacturers
              and microfinance organizations. Fully customizable, scalable, and
              backed by 15+ years of proven results.
            </p>

            {/* Stats row */}
            <div className="flex overflow-hidden rounded-xl border border-white/10 w-[440px]">
              {STATS.map((stat) => (
                <StatBlock key={stat.label} stat={stat} />
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-2 md:gap-4">
              <Button variant="default" size="lg">
                Explore ERP Solutions
                <ArrowRight className="size-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-12 gap-2 border-white/20 bg-transparent text-white/75 hover:bg-white/5 hover:border-white/40 hover:text-white transition-all duration-200 md:flex hidden"
              >
                <Play className="size-3.5 fill-current" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* ── RIGHT: Frosted product panel ── */}
          <div className="w-fit flex justify-end">
            <div
              className="bg-primary-cbe-50/10 backdrop-blur-xl shadow-[0_24px_64px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.07)] w-full max-w-[420px] rounded-2xl border border-white/10 p-6 flex flex-col gap-5"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-white">
                  Our Product Suite
                </span>
                <span className="text-xs font-semibold tracking-wide uppercase text-white bg-primary-cta/30 border border-primary-cta/45 rounded px-2 py-0.5">
                  30+ Products
                </span>
              </div>

              {/* 2-column product grid */}
              <div className="grid grid-cols-2 gap-2">
                {PRODUCTS.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-white/8 -mx-1" />

              {/* Trust footer */}
              <div className="flex items-center gap-3">
                {/* Avatar stack */}
                <div className="flex">
                  {TRUST_AVATARS.map((initials, i) => (
                    <span
                      key={initials}
                      className="size-7 rounded-full border-2 border-white/20 flex items-center justify-center text-[10px] font-bold text-white"
                      style={{
                        marginLeft: i === 0 ? 0 : "-7px",
                        zIndex: TRUST_AVATARS.length - i,
                        background: [
                          "#1A4596",
                          "#D72B2B",
                          "#14a08c",
                          "#7C3AED",
                          "#D97706",
                        ][i],
                      }}
                    >
                      {initials}
                    </span>
                  ))}
                </div>

                <p className="text-[13px] text-white/55 leading-snug">
                  Trusted by{" "}
                  <strong className="text-white font-medium">
                    200+ organizations
                  </strong>
                  <br />
                  across the World
                </p>

                {/* Arrow nudge */}
                <div className="ml-auto size-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-white/35 hover:bg-white/5 hover:text-white transition-all duration-200 cursor-pointer flex-shrink-0">
                  <ArrowRight className="size-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
