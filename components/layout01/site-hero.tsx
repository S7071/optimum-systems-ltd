"use client";

import { useState, useEffect, useRef } from "react";
import {
  BadgeCheck,
  Play,
  Star,
  Users,
  Briefcase,
  TrendingUp,
} from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

// ─── Types ───────────────────────────────────────────────────────────────────
type RevenueTab = "Daily" | "Weekly" | "Monthly";

const REVENUE: Record<RevenueTab, string> = {
  Daily: "68%",
  Weekly: "69%",
  Monthly: "90%",
};

// ─── StarRating ───────────────────────────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
  return (
    <span
      className="inline-flex items-center gap-px"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4].map((i) => (
        <Star key={i} size={12} fill="#f5c518" color="#f5c518" />
      ))}
      <span className="relative inline-flex">
        <Star size={12} fill="none" color="#f5c518" />
        <span className="absolute top-0 left-0 overflow-hidden w-1/2">
          <Star size={12} fill="#f5c518" color="#f5c518" />
        </span>
      </span>
    </span>
  );
}

// ─── AnimatedCounter ──────────────────────────────────────────────────────────
function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let cur = 0;
          const step = target / (1800 / 16);
          const timer = setInterval(() => {
            cur += step;
            if (cur >= target) {
              setCount(target);
              clearInterval(timer);
            } else setCount(Math.floor(cur));
          }, 16);
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

// ─── Sparkline ────────────────────────────────────────────────────────────────
function Sparkline() {
  return (
    <svg
      width="80"
      height="40"
      viewBox="0 0 80 40"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="spark-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e89c1c" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ececec" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 34 C10 32 14 20 22 18 C30 16 34 28 42 22 C50 16 54 8 62 6 C70 4 74 14 80 10"
        stroke="#e89c1c"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0 34 C10 32 14 20 22 18 C30 16 34 28 42 22 C50 16 54 8 62 6 C70 4 74 14 80 10 L80 40 L0 40 Z"
        fill="url(#spark-grad)"
      />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function SiteHero() {
  const [activeTab, setActiveTab] = useState<RevenueTab>("Daily");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/*
        Minimal <style> block — only for things Tailwind cannot express:
          1. Google Fonts @import
          2. @keyframes (floatUp, spin, bounce)
          3. ::before / ::after pseudo-elements
          4. Descendant/child selectors  (.fig-center .head)
          5. :not() compound hover  (.rev-tab:hover:not(.active))
      */}
      <style>{`
        @keyframes spin {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes floatUp {
          from { transform: translateY(0px); }
          to   { transform: translateY(-8px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(6px); }
        }

        .hero-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 60% at 100% 50%, rgba(139,92,246,0.22) 0%, transparent 70%),
            radial-gradient(ellipse 50% 70% at 30% 100%, rgba(99,38,255,0.15) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        .cap-board::after {
          content: '';
          display: block;
          width: 42px; height: 6px;
          background: #1f2937;
          position: absolute;
          top: 17px; left: -2px;
          border-radius: 2px;
        }
        .gown::after {
          content: '';
          display: block;
          width: 100%; height: 100%;
          background: linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%);
        }

        /* Child-selector overrides for centre figure */
        .fig-center .head { width: 52px !important; height: 58px !important; background: #c9a07a !important; }
        .fig-center .gown { width: 82px !important; height: 120px !important; background: #111827 !important; }

        /* :not() hover — cannot be composed as a Tailwind variant */
        .rev-tab:hover:not(.active) { color: #374151; }
      `}</style>

      {/* ── Root ── */}
      <section className="hero-root w-full bg-[#191e3e] min-h-screen relative overflow-hidden py-8 sm:py-20">
        <Image
          src="/images/cbe/bg-lines.webp"
          alt=""
          fill
          className="object-cover opacity-[0.18] pointer-events-none z-0"
          aria-hidden="true"
        />

        {/* ── Body grid ── */}
        <div className="grid grid-cols-2 max-[900px]:grid-cols-1 items-center gap-10 px-12 max-[900px]:px-6 pt-10 pb-20 max-[900px]:pb-[60px] relative z-[1] max-w-[1400px] mx-auto">
          {/* ── LEFT ── */}
          <div
            className={`text-white transition-[opacity,transform] duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.15)] rounded-full py-[5px] pr-[14px] pl-2 mb-6 text-[13px] font-medium">
              <BadgeCheck size={12} color="#3b82f6" fill="#3b82f6" />
              <span className="text-[12px] font-bold leading-none text-white">
                #1
              </span>
              <span className="text-[10px] leading-[1.2] text-[rgba(255,255,255,0.7)] uppercase tracking-[.04em]">
                Kenyan Certified CBE Assessment ERP
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[clamp(40px,5vw,68px)] leading-[1.04] font-light tracking-[-0.02em] mb-5">
              Competency-Based Assessment{" "}
              <strong className="font-bold">ERP</strong> for{" "}
              <strong className="font-bold">Senior Schools</strong>
            </h1>

            {/* Subtext */}
            <p className="text-base font-normal leading-[1.6] text-[rgba(255,255,255,0.75)] max-w-[460px] mb-10">
              Manage Grades 10–12 seamlessly with UltimateCBE — Kenya&apos;s
              most advanced CBE-aligned platform with real-time insights,
              automated grading, and KNEC syllabus integration. Completely built
              for your school.
            </p>

            {/* CTA row */}
            <div className="flex items-center flex-wrap gap-4">
              <Button className="inline-flex items-center gap-2 py-[28px] px-9">
                Get Started,&nbsp;
                <span className="font-light">Book a demo</span>
              </Button>

              <button
                type="button"
                aria-label="Watch demo video"
                className="w-14 h-14 rounded-full [border:2px_solid_rgba(255,255,255,0.5)] bg-transparent flex items-center justify-center text-white flex-shrink-0 cursor-pointer transition-all duration-200 hover:border-white hover:bg-[rgba(255,255,255,0.1)] hover:scale-[1.06]"
              >
                <Play size={20} fill="white" />
              </button>

              <div className="text-[13px] leading-[1.55] text-[rgba(255,255,255,0.8)]">
                Trusted by{" "}
                <strong className="text-white font-bold">500+</strong> kenyan
                schools
                <div className="flex items-center gap-1 mt-[3px] text-[13px] text-white font-semibold">
                  Rated 4.6&nbsp;
                  <StarRating rating={4.6} />
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div
            className={`relative max-[900px]:hidden transition-[opacity,transform] duration-[800ms] delay-200 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Spinning orb */}
            <div
              className="absolute top-1/2 left-1/2 w-[420px] h-[420px] rounded-full opacity-55 z-0 [background:conic-gradient(from_180deg,#7c3aed,#E89C1C,#3b82f6,#7c3aed)] [animation:spin_12s_linear_infinite]"
              style={{ transform: "translate(-50%, -50%)" }}
            />
            {/* Orb inner mask */}
            <div
              className="absolute top-1/2 left-1/2 w-[390px] h-[390px] rounded-full bg-[#191e3e] z-[1]"
              style={{ transform: "translate(-50%, -50%)" }}
            />

            {/* Graduate figures (CSS art) */}
            <div className="relative z-[2] flex justify-center items-end h-[500px] w-full">
              {/* Center figure (larger, foreground) */}
              <div className="figure fig-center relative left-[250px] -translate-x-1/2 z-[2] flex flex-col items-center">
                <Image
                  src="/images/cbe/hero.png"
                  alt="Logo"
                  width={440}
                  height={440}
                  className="dark:hidden"
                />
              </div>
            </div>

            {/* Floating card — Students */}
            <div className="absolute top-[10%] left-0 min-w-[190px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.2)] rounded-[14px] py-[14px] px-[18px] text-white shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-[5] [animation:floatUp_3s_ease-in-out_infinite_alternate]">
              <div className="flex items-center gap-[5px] text-[10px] uppercase tracking-[.08em] text-[rgba(255,255,255,0.55)] mb-1.5">
                <Users size={11} /> Total Students
              </div>
              <div className="text-[28px] font-bold text-[#e89c1c] leading-none">
                <AnimatedCounter target={1365} />
              </div>
              <div className="flex justify-between items-center mt-2 text-[11px] text-[rgba(255,255,255,0.6)]">
                <span>New Enrollments</span>
                <span className="font-bold text-green-400">+24</span>
              </div>
            </div>

            {/* Floating card — Teachers */}
            <div className="absolute top-0 right-[5%] min-w-[200px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.2)] rounded-[14px] py-[14px] px-[18px] text-white shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-[5] [animation:floatUp_3s_ease-in-out_infinite_alternate] [animation-delay:1.2s]">
              <div className="flex items-center gap-[5px] text-[10px] uppercase tracking-[.08em] text-[rgba(255,255,255,0.55)] mb-1.5">
                <Briefcase size={11} /> Active Teachers
              </div>
              <div className="text-[22px] font-bold text-[#e89c1c] leading-none">
                <AnimatedCounter target={37} />
              </div>
              <div className="flex justify-between items-center mt-2 text-[11px] text-[rgba(255,255,255,0.6)]">
                <span>Newly Onboarded</span>
                <span className="font-bold text-green-400">+04</span>
              </div>
            </div>

            {/* Revenue card */}
            <div className="absolute -bottom-6 -left-5 bg-[rgba(245,245,250,0.96)] rounded-2xl py-4 px-5 flex items-center gap-5 shadow-[0_16px_48px_rgba(0,0,0,0.35)] z-[6] text-[#1a1a2e] min-w-[260px] [animation:floatUp_4s_ease-in-out_infinite_alternate] [animation-delay:0.6s]">
              <div>
                <div className="flex items-center gap-[3px] text-[10px] uppercase tracking-[.08em] text-[#9ca3af] mb-1 font-semibold">
                  <TrendingUp size={10} className="inline" /> Attendance Rate
                </div>
                <div className="text-[26px] font-bold text-[#1a1a2e] mb-2.5 tracking-[-0.02em] transition-all duration-300">
                  {REVENUE[activeTab]}
                </div>
                <div className="flex gap-2.5">
                  {(["Daily", "Weekly", "Monthly"] as RevenueTab[]).map(
                    (tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveTab(tab)}
                        className={`rev-tab text-xs bg-transparent border-none p-0 cursor-pointer font-[inherit] transition-colors duration-150 ${
                          activeTab === tab
                            ? "active text-[#E89C1C] font-bold underline underline-offset-[3px]"
                            : "text-[#9ca3af] font-medium"
                        }`}
                      >
                        {tab}
                      </button>
                    ),
                  )}
                </div>
              </div>
              <Sparkline />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
