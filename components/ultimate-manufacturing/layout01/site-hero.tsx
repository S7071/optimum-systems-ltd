/* eslint-disable react-hooks/set-state-in-effect */
"use client";

/**
 * SiteHero — Ultimate Manufacturing ERP · Optimum System Ltd
 *
 * ─── TAILWIND CONFIG ──────────────────────────────────────────────────────────
 *   theme: { extend: { spacing: { 30: "7.5rem" } } }
 *
 * ─── GLOBAL CSS ───────────────────────────────────────────────────────────────
 *   @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600
 *     &family=DM+Mono:wght@400;500&family=Bebas+Neue&display=swap');
 */

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────
type TickerColor = "green" | "red" | "amber" | "";
type MachineStatus = "running" | "idle" | "alert" | "maintenance";
type OrderStatus = "In Progress" | "Queued" | "On Hold";

// ─── Static data ─────────────────────────────────────────────────────────────
const TICKER: { label: string; val: string; color: TickerColor }[] = [
  { label: "OEE", val: "91.4%", color: "green" },
  { label: "THROUGHPUT", val: "842/hr", color: "green" },
  { label: "ON-TIME DELIVERY", val: "97.2%", color: "green" },
  { label: "OPEN WORK ORDERS", val: "1,204", color: "" },
  { label: "SCRAP RATE", val: "1.2%", color: "amber" },
  { label: "MACHINE UPTIME", val: "99.1%", color: "green" },
  { label: "PENDING POs", val: "38", color: "" },
  { label: "DEFECT COUNT", val: "12", color: "red" },
  { label: "INVENTORY TURNS", val: "14.2", color: "green" },
  { label: "SHIFT EFFICIENCY", val: "+2.1%", color: "green" },
];

const KPIS = [
  {
    short: "OEE",
    label: "Equip. Effectiveness",
    val: "91.4",
    unit: "%",
    delta: "+3.1%",
    up: true,
    sparkline:
      "M0,18 C8,16 16,12 24,10 C32,8 40,6 48,4 C56,3 64,5 72,3 C80,1 88,2 96,0",
  },
  {
    short: "UNITS/HR",
    label: "Production Output",
    val: "842",
    unit: "",
    delta: "+6.2%",
    up: true,
    sparkline:
      "M0,18 C8,15 16,14 24,11 C32,9 40,7 48,8 C56,6 64,4 72,5 C80,3 88,1 96,0",
  },
  {
    short: "QUALITY",
    label: "Quality Pass Rate",
    val: "98.8",
    unit: "%",
    delta: "+0.4%",
    up: true,
    sparkline:
      "M0,14 C8,13 16,15 24,12 C32,10 40,9 48,8 C56,7 64,6 72,4 C80,3 88,2 96,1",
  },
  {
    short: "OTD",
    label: "On-Time Delivery",
    val: "97.2",
    unit: "%",
    delta: "-0.8%",
    up: false,
    sparkline:
      "M0,4  C8,5  16,6  24,8  C32,10 40,9 48,12 C56,11 64,13 72,12 C80,14 88,15 96,16",
  },
];

// Hourly throughput data (8-hr shift, units × 100)
const THROUGHPUT_ACTUAL = [680, 712, 758, 790, 821, 808, 842, 855];
const THROUGHPUT_TARGET = 820;
const THROUGHPUT_HOURS = [
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
];

const MACHINES: {
  id: string;
  name: string;
  status: MachineStatus;
  load: number;
  temp?: string;
}[] = [
  {
    id: "MC-01",
    name: "CNC Mill A",
    status: "running",
    load: 94,
    temp: "68°C",
  },
  {
    id: "MC-02",
    name: "Weld Cell B",
    status: "running",
    load: 88,
    temp: "71°C",
  },
  { id: "MC-03", name: "Press Line", status: "alert", load: 61, temp: "92°C" },
  {
    id: "MC-04",
    name: "Assy Jig 1",
    status: "running",
    load: 100,
    temp: "65°C",
  },
  { id: "MC-05", name: "Paint Booth", status: "idle", load: 0 },
  { id: "MC-06", name: "QC Station", status: "maintenance", load: 0 },
];

const ORDERS: {
  wo: string;
  part: string;
  qty: number;
  done: number;
  status: OrderStatus;
  priority: "high" | "normal" | "low";
}[] = [
  {
    wo: "WO-7841",
    part: "Bearing Housing Assy",
    qty: 500,
    done: 73,
    status: "In Progress",
    priority: "high",
  },
  {
    wo: "WO-7842",
    part: "Drive Shaft Sub-Assy",
    qty: 1200,
    done: 41,
    status: "In Progress",
    priority: "normal",
  },
  {
    wo: "WO-7843",
    part: "Hydraulic Manifold",
    qty: 80,
    done: 0,
    status: "Queued",
    priority: "normal",
  },
  {
    wo: "WO-7844",
    part: "Control Panel Bracket",
    qty: 320,
    done: 18,
    status: "On Hold",
    priority: "low",
  },
];

const STATS = [
  { target: 340, suffix: "+", label: "Plants Deployed", isFloat: false },
  { target: 18, suffix: "%", label: "Avg OEE Uplift", isFloat: false },
  { target: 99.9, suffix: "%", label: "System Uptime", isFloat: true },
];

const CERTS = ["ISO 9001:2015", "SOC 2 Type II", "GDPR Ready"];

// ─── Config maps ─────────────────────────────────────────────────────────────
const MSTATUS: Record<
  MachineStatus,
  {
    dot: string;
    bg: string;
    border: string;
    bar: string;
    label: string;
    textColor: string;
  }
> = {
  running: {
    dot: "#4ecca3",
    bg: "rgba(78,204,163,0.08)",
    border: "rgba(78,204,163,0.2)",
    bar: "#4ecca3",
    label: "RUN",
    textColor: "#4ecca3",
  },
  idle: {
    dot: "#6b7280",
    bg: "rgba(107,114,128,0.06)",
    border: "rgba(107,114,128,0.15)",
    bar: "#6b7280",
    label: "IDLE",
    textColor: "#6b7280",
  },
  alert: {
    dot: "#E24B4A",
    bg: "rgba(226,75,74,0.08)",
    border: "rgba(226,75,74,0.22)",
    bar: "#E24B4A",
    label: "ALERT",
    textColor: "#E24B4A",
  },
  maintenance: {
    dot: "#EF9F27",
    bg: "rgba(239,159,39,0.08)",
    border: "rgba(239,159,39,0.18)",
    bar: "#EF9F27",
    label: "MAINT",
    textColor: "#EF9F27",
  },
};

const OSTATUS: Record<
  OrderStatus,
  { color: string; bg: string; border: string }
> = {
  "In Progress": {
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.1)",
    border: "rgba(96,165,250,0.2)",
  },
  Queued: {
    color: "#9ca3af",
    bg: "rgba(156,163,175,0.1)",
    border: "rgba(156,163,175,0.2)",
  },
  "On Hold": {
    color: "#EF9F27",
    bg: "rgba(239,159,39,0.1)",
    border: "rgba(239,159,39,0.2)",
  },
};

const PRIORITY: Record<"high" | "normal" | "low", string> = {
  high: "#E24B4A",
  normal: "#378ADD",
  low: "#6b7280",
};

// ─── Throughput SVG helpers ───────────────────────────────────────────────────
const CHART_W = 460;
const CHART_H = 72;
const CHART_PAD = { l: 4, r: 4, t: 6, b: 2 };

function toX(i: number, total: number) {
  return (
    CHART_PAD.l + (i / (total - 1)) * (CHART_W - CHART_PAD.l - CHART_PAD.r)
  );
}
function toY(val: number, min: number, max: number) {
  return (
    CHART_PAD.t +
    (1 - (val - min) / (max - min)) * (CHART_H - CHART_PAD.t - CHART_PAD.b)
  );
}

function buildLinePath(data: number[], min: number, max: number) {
  return data
    .map(
      (v, i) =>
        `${i === 0 ? "M" : "L"}${toX(i, data.length).toFixed(1)},${toY(v, min, max).toFixed(1)}`,
    )
    .join(" ");
}
function buildAreaPath(data: number[], min: number, max: number) {
  const line = buildLinePath(data, min, max);
  const lastX = toX(data.length - 1, data.length).toFixed(1);
  const firstX = toX(0, data.length).toFixed(1);
  const baseY = (CHART_H - CHART_PAD.b).toFixed(1);
  return `${line} L${lastX},${baseY} L${firstX},${baseY} Z`;
}

const MIN_TP = 600;
const MAX_TP = 900;

// ─────────────────────────────────────────────────────────────────────────────
export default function SiteHero() {
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const [time, setTime] = useState("--:--:--");
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCounts(
        STATS.map((s) =>
          parseFloat((ease * s.target).toFixed(s.isFloat ? 1 : 0)),
        ),
      );
      if (p < 1) requestAnimationFrame(tick);
    };
    const t = setTimeout(() => requestAnimationFrame(tick), 700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  const doubled = [...TICKER, ...TICKER];

  const targetY = toY(THROUGHPUT_TARGET, MIN_TP, MAX_TP).toFixed(1);
  const linePath = buildLinePath(THROUGHPUT_ACTUAL, MIN_TP, MAX_TP);
  const areaPath = buildAreaPath(THROUGHPUT_ACTUAL, MIN_TP, MAX_TP);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&family=Bebas+Neue&display=swap');

        .hero-scene::before {
          content:''; position:absolute; inset:0; pointer-events:none; z-index:1;
          background-image:
            linear-gradient(rgba(55,138,221,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(55,138,221,0.06) 1px, transparent 1px);
          background-size: 56px 56px;
        }

        .erp-ticker { display:flex; white-space:nowrap; animation:tick-scroll 38s linear infinite; }
        @keyframes tick-scroll { from{transform:translateX(0);} to{transform:translateX(-50%);} }

        @keyframes erp-up {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes erp-in {
          from { opacity:0; transform:translateX(24px); }
          to   { opacity:1; transform:translateX(0); }
        }
        .fu0 { animation:erp-up 0.5s 0.05s cubic-bezier(0.22,1,0.36,1) both; }
        .fu1 { animation:erp-up 0.5s 0.12s cubic-bezier(0.22,1,0.36,1) both; }
        .fu2 { animation:erp-up 0.5s 0.22s cubic-bezier(0.22,1,0.36,1) both; }
        .fu3 { animation:erp-up 0.5s 0.32s cubic-bezier(0.22,1,0.36,1) both; }
        .fu4 { animation:erp-up 0.5s 0.42s cubic-bezier(0.22,1,0.36,1) both; }
        .pi  { animation:erp-in 0.65s 0.45s cubic-bezier(0.22,1,0.36,1) both; }

        @keyframes fill-bar { from { width:0 !important; } }
        .pfill { animation:fill-bar 1.4s 1s cubic-bezier(0.22,1,0.36,1) both; }

        /* Chart line draw-on */
        @keyframes draw-line {
          from { stroke-dashoffset: 700; }
          to   { stroke-dashoffset: 0; }
        }
        .chart-line {
          stroke-dasharray: 700;
          stroke-dashoffset: 700;
          animation: draw-line 1.6s 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        @keyframes fade-area { from{opacity:0;} to{opacity:1;} }
        .chart-area { animation: fade-area 0.8s 1.8s ease forwards; opacity:0; }

        /* Sparkline draw */
        @keyframes spark { from{stroke-dashoffset:120;} to{stroke-dashoffset:0;} }
        .spark { stroke-dasharray:120; stroke-dashoffset:120; animation:spark 1s 0.6s ease forwards; }

        @keyframes erp-blink { 0%,100%{opacity:1;} 50%{opacity:0.2;} }
        .blink { animation:erp-blink 1.8s ease-in-out infinite; }

        @keyframes erp-pulse { 0%{transform:scale(1);opacity:0.5;} 100%{transform:scale(2.8);opacity:0;} }
        .pulse { animation:erp-pulse 2.4s ease-out infinite; }

        .ticker-badge { clip-path:polygon(0 0,100% 0,calc(100% + 8px) 100%,0 100%); }

        /* Console tab active underline */
        .console-tab-active::after {
          content:''; position:absolute; bottom:-1px; left:0; right:0; height:2px;
          background:#378ADD; border-radius:1px;
        }
      `}</style>

      <div className="w-full overflow-hidden bg-[rgba(21,20,62,0.97)] text-white">
        {/* ── Hero ── */}
        <section className="w-full bg-primary-cbe-50">
          <div className="grid lg:grid-cols-2 items-stretch w-full">
            {/* ── LEFT: Copy ── */}
            <div className="flex flex-col gap-7 max-w-full shrink-0 px-6 sm:px-30 py-14">
              <div className="inline-flex items-center gap-3 w-fit">
                <div className="size-10 rounded-lg bg-background flex items-center justify-center flex-shrink-0 p-1.5 border border-primary-cbe-100">
                  <Image
                    src="/logos/approved/mfg-dark-icon.svg"
                    alt="Ultimate Manufacturing ERP"
                    width={10}
                    height={10}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary-cbe-800">
                  Ultimate MFG ERP
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.18] text-primary-cbe-800 tracking-[-1px]">
                One Platform for <br />
                All{" "}
                <span className="text-primary-cbe-500 font-bold">
                  Manufacturing
                </span>
                <br />
                Operations
              </h1>

              <p className="text-primary-cbe-800 text-base leading-relaxed max-w-[340px] sm:max-w-[440px]">
                Complete real-time visibility across production, supply chain,
                quality, and finance — built for manufacturers who can&apos;t
                afford downtime or blind spots.
              </p>

              <div className="flex items-center gap-3">
                <Button variant="default" size="lg">
                  Request a Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-primary-cbe-800"
                >
                  <Play className="hidden size-3.5 fill-current text-primary-cbe-800 sm:block" />
                  Watch Overview
                </Button>
              </div>

              <div className="fu3 flex flex-wrap items-center gap-4">
                {CERTS.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-1 text-xs font-medium tracking-[0.05em] text-primary-cbe-800"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5l2 2 4-4"
                        stroke="#4ecca3"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {cert}
                  </div>
                ))}
              </div>

              <div className="fu4 flex gap-0 border-t border-t-[rgba(55,138,221,0.13)] pt-8">
                {STATS.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`flex-1${i < STATS.length - 1 ? " pr-7 mr-7 border-r border-r-[rgba(55,138,221,0.1)]" : ""}`}
                  >
                    <div className="text-3xl font-semibold tracking-[0.04em] leading-none text-primary-cbe-800">
                      {counts[i]}
                      <span className="text-base text-primary-cta">
                        {stat.suffix}
                      </span>
                    </div>
                    <div className="mt-1.5 text-xs font-medium uppercase tracking-widest text-primary-cbe-800">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════════════════
                RIGHT: Production Console — fully redesigned
            ══════════════════════════════════════════════════════════════════ */}
            <div className="hidden lg:flex items-stretch justify-center bg-primary-cbe-800 relative overflow-hidden">
              {/* Left edge fade */}
              {/* <div className="absolute inset-y-0 left-0 w-12 bg-[linear-gradient(to_right,#07152e,transparent)] pointer-events-none z-10" /> */}

              <div className="pi relative z-20 flex w-full max-w-[600px] flex-col py-8 px-5">
                {/* ── Console chrome ── */}
                <div className="flex h-9 items-center gap-2 px-3 mb-3 rounded-t-lg bg-[rgba(3,12,30,0.9)] border border-[rgba(55,138,221,0.14)]">
                  {["#E24B4A", "#EF9F27", "#4ecca3"].map((c, i) => (
                    <div
                      key={i}
                      className="h-[7px] w-[7px] rounded-full opacity-70"
                      style={{ background: c }}
                    />
                  ))}
                  <span className="ml-1.5 text-[10px] tracking-[0.06em] text-[rgba(133,183,235,0.3)]">
                    ultimate-erp · production-floor · nairobi-plant
                  </span>
                  <div className="ml-auto flex items-center gap-2">
                    <span className="blink inline-block h-[5px] w-[5px] rounded-full bg-[#4ecca3]" />
                    <span className="text-[10px] tracking-[0.08em] text-[#4ecca3] font-medium">
                      LIVE
                    </span>
                    <span className="ml-1 text-[10px] text-[rgba(133,183,235,0.28)]">
                      {time}
                    </span>
                  </div>
                </div>

                {/* ── Module tabs ── */}
                <div className="flex items-center gap-0 mb-4 border-b border-[rgba(55,138,221,0.12)]">
                  {["Production", "Quality", "Supply Chain", "Finance"].map(
                    (tab, i) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(i)}
                        className={`relative px-3.5 py-2 text-[11px] font-medium tracking-wide transition-colors duration-150 ${
                          activeTab === i
                            ? "text-[#60a5fa] console-tab-active"
                            : "text-[rgba(133,183,235,0.38)] hover:text-[rgba(133,183,235,0.65)]"
                        }`}
                      >
                        {tab}
                      </button>
                    ),
                  )}
                  <div className="ml-auto flex items-center gap-1.5 pb-1.5">
                    <span className="text-[9px] uppercase tracking-widest text-[rgba(133,183,235,0.3)]">
                      Shift A
                    </span>
                    <span className="text-[rgba(55,138,221,0.2)] text-[10px]">
                      ·
                    </span>
                    <span className="text-[9px] text-[rgba(133,183,235,0.3)]">
                      07:00 – 15:00
                    </span>
                  </div>
                </div>

                {/* ── KPI row: 4 cards ── */}
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {KPIS.map((kpi) => (
                    <div
                      key={kpi.short}
                      className="flex flex-col rounded-md px-2.5 pt-2.5 pb-2 bg-primary-cbe-50/5 border border-[rgba(55,138,221,0.1)] hover:border-[rgba(55,138,221,0.22)] transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[8.5px] uppercase tracking-widest text-[rgba(133,183,235,0.38)] font-medium">
                          {kpi.short}
                        </span>
                        {/* ⚠ Dynamic — colour from kpi.up */}
                        <span
                          className="text-[8.5px] font-semibold"
                          style={{ color: kpi.up ? "#4ecca3" : "#E24B4A" }}
                        >
                          {kpi.delta}
                        </span>
                      </div>
                      {/* Value */}
                      <div className="text-[1.45rem] font-semibold leading-none tracking-tight text-white mb-1">
                        {kpi.val}
                        <span className="text-[0.85rem] text-[rgba(181,212,244,0.3)] ml-0.5">
                          {kpi.unit}
                        </span>
                      </div>
                      {/* Sparkline */}
                      <svg
                        viewBox={`0 0 96 20`}
                        className="w-full h-4 mt-0.5"
                        preserveAspectRatio="none"
                      >
                        {/* ⚠ Dynamic — stroke colour from kpi.up */}
                        <path
                          d={kpi.sparkline}
                          fill="none"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          className="spark"
                          style={{ stroke: kpi.up ? "#4ecca3" : "#EF9F27" }}
                        />
                      </svg>
                      <div className="text-[8px] text-[rgba(133,183,235,0.3)] mt-1 truncate">
                        {kpi.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* ── Throughput area chart ── */}
                <div className="rounded-md bg-primary-cbe-50/5 border border-[rgba(55,138,221,0.1)] px-3 pt-2.5 pb-2 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] uppercase tracking-widest font-medium text-[rgba(133,183,235,0.45)]">
                        Shift Throughput
                      </span>
                      <span className="text-[9px] text-[rgba(133,183,235,0.3)]">
                        vs Target
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="h-[2px] w-4 bg-[#378ADD] rounded" />
                        <span className="text-[8.5px] text-[rgba(133,183,235,0.4)]">
                          Actual
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="h-[1px] w-4 border-t border-dashed border-[rgba(239,159,39,0.6)]" />
                        <span className="text-[8.5px] text-[rgba(133,183,235,0.4)]">
                          Target 820
                        </span>
                      </div>
                    </div>
                  </div>

                  <svg
                    viewBox={`0 0 ${CHART_W} ${CHART_H}`}
                    className="w-full"
                    style={{ height: "72px" }}
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor="#378ADD"
                          stopOpacity="0.25"
                        />
                        <stop
                          offset="100%"
                          stopColor="#378ADD"
                          stopOpacity="0.02"
                        />
                      </linearGradient>
                    </defs>

                    {/* Horizontal grid lines */}
                    {[0, 0.25, 0.5, 0.75, 1].map((t) => {
                      const y = (
                        CHART_PAD.t +
                        t * (CHART_H - CHART_PAD.t - CHART_PAD.b)
                      ).toFixed(1);
                      return (
                        <line
                          key={t}
                          x1={CHART_PAD.l}
                          y1={y}
                          x2={CHART_W - CHART_PAD.r}
                          y2={y}
                          stroke="rgba(55,138,221,0.07)"
                          strokeWidth="1"
                        />
                      );
                    })}

                    {/* Target dashed line */}
                    <line
                      x1={CHART_PAD.l}
                      y1={targetY}
                      x2={CHART_W - CHART_PAD.r}
                      y2={targetY}
                      stroke="rgba(239,159,39,0.5)"
                      strokeWidth="1"
                      strokeDasharray="4 3"
                    />

                    {/* Area fill */}
                    <path
                      d={areaPath}
                      fill="url(#areaGrad)"
                      className="chart-area"
                    />

                    {/* Line */}
                    <path
                      d={linePath}
                      fill="none"
                      stroke="#378ADD"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="chart-line"
                    />

                    {/* Data point dots + hour labels */}
                    {THROUGHPUT_ACTUAL.map((v, i) => {
                      const x = toX(i, THROUGHPUT_ACTUAL.length);
                      const y = toY(v, MIN_TP, MAX_TP);
                      const isLast = i === THROUGHPUT_ACTUAL.length - 1;
                      return (
                        <g key={i}>
                          {isLast && (
                            <>
                              <circle
                                cx={x}
                                cy={y}
                                r="5"
                                fill="rgba(55,138,221,0.2)"
                              />
                              <circle cx={x} cy={y} r="2.5" fill="#60a5fa" />
                            </>
                          )}
                          {!isLast && i % 2 === 0 && (
                            <circle
                              cx={x}
                              cy={y}
                              r="1.5"
                              fill="#378ADD"
                              opacity="0.7"
                            />
                          )}
                          {i % 2 === 0 && (
                            <text
                              x={x}
                              y={CHART_H}
                              textAnchor="middle"
                              fontSize="7"
                              fill="rgba(133,183,235,0.35)"
                              fontFamily="DM Mono, monospace"
                            >
                              {THROUGHPUT_HOURS[i]}
                            </text>
                          )}
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* ── Machine utilization — horizontal bars ── */}
                <div className="rounded-md bg-primary-cbe-50/5 border border-[rgba(55,138,221,0.1)] px-3 pt-2.5 pb-2 mb-3">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[9px] uppercase tracking-widest font-medium text-[rgba(133,183,235,0.45)]">
                      Machine Utilization
                    </span>
                    <div className="flex items-center gap-3">
                      {(
                        [
                          "running",
                          "idle",
                          "alert",
                          "maintenance",
                        ] as MachineStatus[]
                      ).map((s) => (
                        <div key={s} className="flex items-center gap-1">
                          <div
                            className="h-[5px] w-[5px] rounded-full"
                            style={{ background: MSTATUS[s].dot }}
                          />
                          <span className="text-[8px] capitalize text-[rgba(133,183,235,0.3)]">
                            {s}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    {MACHINES.map((m) => {
                      const cfg = MSTATUS[m.status];
                      return (
                        <div key={m.id} className="flex items-center gap-2.5">
                          {/* Status dot with pulse */}
                          <div className="relative flex h-4 w-4 shrink-0 items-center justify-center">
                            {m.status === "running" && (
                              <div
                                className="pulse absolute h-2 w-2 rounded-full origin-center"
                                style={{ background: cfg.dot }}
                              />
                            )}
                            <div
                              className="h-2 w-2 rounded-full"
                              style={{ background: cfg.dot }}
                            />
                          </div>

                          {/* Machine ID */}
                          <span className="w-[34px] shrink-0 text-[9px] font-medium text-[rgba(181,212,244,0.55)]">
                            {m.id}
                          </span>

                          {/* Machine name */}
                          <span className="w-[76px] shrink-0 truncate text-[9px] text-[rgba(133,183,235,0.4)]">
                            {m.name}
                          </span>

                          {/* Progress bar */}
                          <div className="relative h-[5px] flex-1 overflow-hidden rounded-full bg-[rgba(55,138,221,0.1)]">
                            <div
                              className="pfill h-full rounded-full"
                              style={{
                                width: m.load > 0 ? `${m.load}%` : "0%",
                                background: cfg.bar,
                              }}
                            />
                          </div>

                          {/* Load % */}
                          <span
                            className="w-8 shrink-0 text-right text-[9px] font-medium"
                            style={{
                              color:
                                m.load > 0
                                  ? cfg.textColor
                                  : "rgba(133,183,235,0.25)",
                            }}
                          >
                            {m.load > 0 ? `${m.load}%` : "—"}
                          </span>

                          {/* Status badge */}
                          <span
                            className="shrink-0 rounded px-1.5 py-0.5 text-[8px] font-semibold tracking-wide"
                            style={{
                              color: cfg.textColor,
                              background: cfg.bg,
                              border: `1px solid ${cfg.border}`,
                            }}
                          >
                            {cfg.label}
                          </span>

                          {/* Temp (if present) */}
                          {m.temp && (
                            <span
                              className="shrink-0 text-[8.5px] font-medium"
                              style={{
                                color:
                                  m.status === "alert"
                                    ? "#EF9F27"
                                    : "rgba(133,183,235,0.35)",
                              }}
                            >
                              {m.temp}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* ── Work Orders ── */}
                <div className="rounded-md overflow-hidden bg-primary-cbe-50/5 border border-[rgba(55,138,221,0.1)] mb-3">
                  {/* Table header */}
                  <div className="grid grid-cols-[8px_62px_1fr_54px_56px_72px] items-center gap-2 px-3 py-2 bg-[rgba(3,10,28,0.5)] border-b border-[rgba(55,138,221,0.09)]">
                    <div />
                    {["WO #", "Part", "Qty", "Progress", "Status"].map((h) => (
                      <span
                        key={h}
                        className="text-[8.5px] uppercase tracking-widest text-[rgba(133,183,235,0.3)]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {ORDERS.map((order, i) => {
                    const sc = OSTATUS[order.status];
                    return (
                      <div
                        key={order.wo}
                        className={`grid grid-cols-[8px_62px_1fr_54px_56px_72px] items-center gap-2 px-3 py-2 transition-colors duration-150 hover:bg-[rgba(55,138,221,0.04)] cursor-default${
                          i < ORDERS.length - 1
                            ? " border-b border-[rgba(55,138,221,0.06)]"
                            : ""
                        }`}
                      >
                        {/* Priority indicator bar */}
                        <div
                          className="h-5 w-[3px] rounded-full shrink-0"
                          style={{ background: PRIORITY[order.priority] }}
                        />

                        {/* WO # */}
                        <span className="text-[9.5px] font-medium tracking-[0.03em] text-[#60a5fa]">
                          {order.wo}
                        </span>

                        {/* Part name */}
                        <span className="truncate text-[10px] font-light text-[rgba(181,212,244,0.75)]">
                          {order.part}
                        </span>

                        {/* Qty */}
                        <span className="text-[9px] text-[rgba(133,183,235,0.45)] tabular-nums">
                          {order.qty.toLocaleString()}
                        </span>

                        {/* Progress bar + % */}
                        <div className="flex flex-col gap-0.5">
                          <div className="h-[3px] w-full overflow-hidden rounded-full bg-[rgba(55,138,221,0.12)]">
                            <div
                              className="pfill h-full rounded-full"
                              style={{
                                width: `${order.done}%`,
                                background:
                                  order.done > 70
                                    ? "#4ecca3"
                                    : order.done > 30
                                      ? "#378ADD"
                                      : "rgba(133,183,235,0.4)",
                              }}
                            />
                          </div>
                          <span className="text-[8px] text-[rgba(133,183,235,0.35)] tabular-nums">
                            {order.done}%
                          </span>
                        </div>

                        {/* Status badge */}
                        <span
                          className="inline-block rounded px-1.5 py-0.5 text-center text-[8.5px] font-medium tracking-[0.03em] truncate"
                          style={{
                            color: sc.color,
                            background: sc.bg,
                            border: `1px solid ${sc.border}`,
                          }}
                        >
                          {order.status}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* ── Alert footer ── */}
                <div className="flex items-center gap-2.5 rounded-md bg-[rgba(226,75,74,0.06)] border border-[rgba(226,75,74,0.15)] [border-left:3px_solid_#E24B4A] px-3 py-2">
                  <div className="blink h-1.5 w-1.5 shrink-0 rounded-full bg-[#E24B4A]" />
                  <div className="flex flex-1 flex-col gap-0.5">
                    <span className="text-[10px] font-medium text-[#F09595] tracking-[0.02em]">
                      MC-03 Press Line — throughput below threshold
                    </span>
                    <span className="text-[9px] text-[rgba(226,75,74,0.5)]">
                      Auto-routing active · Estimated recovery 14:45
                    </span>
                  </div>
                  <span className="shrink-0 text-[9.5px] text-[rgba(133,183,235,0.22)] tabular-nums">
                    {time}
                  </span>
                </div>
              </div>
            </div>
            {/* end RIGHT */}
          </div>
        </section>
        {/* ── Ticker ── */}
        <div className="relative z-10 flex w-full items-center overflow-hidden h-[33px] bg-primary-cbe-800 border-t border-primary-cbe-800">
          <div className="ticker-badge flex h-full shrink-0 items-center gap-1.5 bg-[#C0392B] pl-[14px] pr-5 text-[10px] font-semibold tracking-[0.12em] uppercase text-white">
            <span className="blink inline-block h-[5px] w-[5px] rounded-full bg-[#ffaaaa]" />
            Live
          </div>
          <div className="min-w-0 flex-1 overflow-hidden">
            <div className="erp-ticker">
              {doubled.map((item, i) => {
                const col =
                  item.color === "green"
                    ? "#4ecca3"
                    : item.color === "red"
                      ? "#E24B4A"
                      : item.color === "amber"
                        ? "#EF9F27"
                        : "rgba(181,212,244,0.45)";
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-6 text-[11px] text-[rgba(181,212,244,0.42)]"
                  >
                    {item.label}
                    <strong className="font-medium" style={{ color: col }}>
                      {item.val}
                    </strong>
                    <span className="text-[8px] text-[rgba(55,138,221,0.2)]">
                      ◆
                    </span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
