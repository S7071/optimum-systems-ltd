import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

const AVATARS = [
  { label: "KE", bg: "#1240a0", color: "white" },
  { label: "TZ", bg: "#2a5abf", color: "white" },
  { label: "UG", bg: "#4a7ad0", color: "white" },
  { label: "+", bg: "#e8ecf5", color: "#526280" },
] as const;

const STATS = [
  { value: "99.9%", label: "System Uptime" },
  { value: "$2.1B", label: "Processed / Year" },
  { value: "4.2×",  label: "Average ROI" },
] as const;

const ORDERS = [
  { id: "#ORD-8812", route: "Nairobi → Lagos",    status: "Delivered",  color: "#22e080",  bg: "rgba(34,224,128,0.10)",  border: "rgba(34,224,128,0.28)" },
  { id: "#ORD-8811", route: "Mombasa → Dubai",    status: "In Transit", color: "#f59e42",  bg: "rgba(245,158,66,0.10)",  border: "rgba(245,158,66,0.28)" },
  { id: "#ORD-8809", route: "Kampala → EU",        status: "Delivered",  color: "#22e080",  bg: "rgba(34,224,128,0.10)",  border: "rgba(34,224,128,0.28)" },
] as const;

export default function SiteHero() {
  return (
    <>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInHero {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hubRing {
          0%, 100% { opacity: .2; }
          50%       { opacity: .55; }
        }
        @keyframes flowAnim {
          to { stroke-dashoffset: -20; }
        }
        @keyframes orderFade {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-left  { animation: slideUp 0.55s ease both; }
        .hero-right { animation: fadeInHero 0.7s 0.15s ease both; opacity: 0; }
        .stat-card  { animation: countUp 0.5s ease both; }
        .stat-card:nth-child(1) { animation-delay: 0.6s; }
        .stat-card:nth-child(2) { animation-delay: 0.75s; }
        .pulse-dot  { animation: pulseDot 2s infinite; }
        .live-dot   { animation: pulseDot 1.5s infinite; }
        .hub-pulse  { animation: hubRing 3s ease-in-out infinite; }
        .flow-in    { stroke-dasharray: 6 4; animation: flowAnim 2s linear infinite; }
        .flow-out   { stroke-dasharray: 6 4; animation: flowAnim 1.75s linear infinite; }
        .flow-delay { stroke-dasharray: 6 4; animation: flowAnim 2.3s linear infinite; }
        .order-item { animation: orderFade 0.4s ease both; }
        .order-item:nth-child(1) { animation-delay: 0.8s; }
        .order-item:nth-child(2) { animation-delay: 0.95s; }
        .order-item:nth-child(3) { animation-delay: 1.1s; }
      `}</style>

      {/* ── Hero ── */}
      <section className="w-full bg-primary-cbe-50">
        <div className="grid lg:grid-cols-2 items-stretch w-full">

          {/* ── Left panel ── */}
          <div className="hero-left px-6 sm:px-30 py-14 flex flex-col justify-center gap-7 max-w-full shrink-0">

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-3 w-fit">
              <div className="size-10 rounded-lg bg-background flex items-center justify-center flex-shrink-0 p-1.5 border border-primary-cbe-100">
                <Image
                  src="/logos/approved/sc-dark-icon.svg"
                  alt="UltimateSCM"
                  width={10}
                  height={10}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-cbe-800">
                Ultimate SCM ERP
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.18] text-primary-cbe-800 tracking-[-1px]">
              Ultimate
              <br />
              <span className="text-primary-cbe-500 font-bold">Supply Chain</span>{" "}ERP
              <br />
              Built for scale
            </h1>

            {/* Subtext */}
            <p className="text-primary-cbe-800 text-base leading-relaxed max-w-[340px] sm:max-w-[440px]">
              Automate procurement, unify warehouse operations, and gain real-time
              visibility across every node — from raw material sourcing to last-mile
              delivery.
            </p>

            {/* Bottom stats row */}
            <div className="flex gap-0 pt-5 border-t border-[#edf0f8]">
              {STATS.map((stat, i) => (
                <div key={i} className="flex items-stretch gap-0">
                  {i > 0 && <div className="w-px mr-6 bg-[#edf0f8]" />}
                  <div className={i < 2 ? "pr-6" : ""}>
                    <div className="text-2xl font-extrabold leading-none text-[#0a1938]">
                      {stat.value}
                    </div>
                    <div className="text-xs mt-1 text-[#94a3be]">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-2.5 items-center flex-wrap">
              <Button variant="default" size="lg">
                Book a Demo
                <ArrowRight size={4} />
              </Button>
              <Button variant="ghost" size="lg">
                <Play className="size-3.5 fill-current text-primary-cbe-800 hidden sm:block" />
                Watch Overview
              </Button>
            </div>

            {/* Social proof avatars */}
            <div className="flex items-center">
              {AVATARS.map((av, i) => (
                <div
                  key={i}
                  className={[
                    "w-8 h-8 rounded-full flex items-center justify-center",
                    "text-xs font-bold flex-shrink-0 border-2 border-white relative",
                    i > 0 ? "-ml-2" : "",
                  ].join(" ")}
                  style={{ background: av.bg, color: av.color, zIndex: 5 - i }}
                >
                  {av.label}
                </div>
              ))}
              <span className="ml-3 text-xs text-[#6a7b9a]">
                Trusted by{" "}
                <strong className="text-[#0a1938] font-bold">2,400+ enterprises</strong>{" "}
                across Africa
              </span>
            </div>
          </div>

          {/* ── Right panel ── */}
          <div className="hero-right relative flex flex-col gap-3.5 p-6 overflow-hidden bg-[#0a1938]">

            {/* Dot-grid background */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="hero-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.18)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-dots)" />
            </svg>

            {/* ── Panel header ── */}
            <div className="relative z-10 flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                {/* Mini network icon */}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                  <circle cx="2" cy="8" r="1.5" fill="rgba(255,255,255,0.3)" />
                  <circle cx="8" cy="4" r="1.5" fill="rgba(255,255,255,0.3)" />
                  <circle cx="8" cy="12" r="1.5" fill="rgba(255,255,255,0.3)" />
                  <circle cx="14" cy="8" r="1.5" fill="rgba(255,255,255,0.3)" />
                  <line x1="3.4" y1="7.2" x2="6.6" y2="4.8" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
                  <line x1="3.4" y1="8.8" x2="6.6" y2="11.2" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
                  <line x1="9.4" y1="4.8" x2="12.6" y2="7.2" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
                  <line x1="9.4" y1="11.2" x2="12.6" y2="8.8" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
                </svg>
                <span className="text-[11px] font-medium uppercase text-white/30 tracking-[2px]">
                  Live Supply Chain Map
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-white/20">1,284 orders today</span>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[rgba(34,224,128,0.10)] border border-[rgba(34,224,128,0.25)]">
                  <div className="live-dot w-1.5 h-1.5 rounded-full bg-[#22e080]" />
                  <span className="text-[11px] font-semibold text-[#22e080]">Live</span>
                </div>
              </div>
            </div>

            {/* ── Supply chain flow diagram ── */}
            <svg
              viewBox="0 0 560 295"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10 w-full flex-1 min-h-[190px]"
            >
              <defs>
                <marker id="arw-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="rgba(80,140,220,0.6)" />
                </marker>
                <marker id="arw-red" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="rgba(229,53,40,0.65)" />
                </marker>
                <marker id="arw-amber" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="rgba(245,158,66,0.65)" />
                </marker>
              </defs>

              {/* ── Supplier A (y=16, h=68, center_y=50) ── */}
              <rect x="10" y="16" width="120" height="68" rx="9" fill="rgba(18,55,140,0.45)" stroke="rgba(80,130,220,0.3)" strokeWidth=".8" />
              <line x1="14" y1="23" x2="14" y2="76" stroke="#4a80e8" strokeWidth="3.5" strokeLinecap="round" />
              <circle cx="116" cy="25" r="4" fill="#22e080" />
              <text x="25" y="38" fill="rgba(255,255,255,0.92)" fontSize="11" fontWeight="600" fontFamily="system-ui">Supplier A</text>
              <text x="25" y="53" fill="rgba(140,180,255,0.75)" fontSize="11" fontFamily="system-ui">240 units / day</text>
              <text x="25" y="66" fill="rgba(255,255,255,0.28)" fontSize="11" fontFamily="system-ui">Mombasa, KE</text>

              {/* ── Supplier B (y=113, h=68, center_y=147) ── */}
              <rect x="10" y="113" width="120" height="68" rx="9" fill="rgba(18,55,140,0.45)" stroke="rgba(80,130,220,0.3)" strokeWidth=".8" />
              <line x1="14" y1="120" x2="14" y2="173" stroke="#4a80e8" strokeWidth="3.5" strokeLinecap="round" />
              <circle cx="116" cy="122" r="4" fill="#22e080" />
              <text x="25" y="135" fill="rgba(255,255,255,0.92)" fontSize="11" fontWeight="600" fontFamily="system-ui">Supplier B</text>
              <text x="25" y="150" fill="rgba(140,180,255,0.75)" fontSize="11" fontFamily="system-ui">180 units / day</text>
              <text x="25" y="163" fill="rgba(255,255,255,0.28)" fontSize="11" fontFamily="system-ui">Dar es Salaam, TZ</text>

              {/* ── Supplier C (y=210, h=68, center_y=244) — amber = delayed ── */}
              <rect x="10" y="210" width="120" height="68" rx="9" fill="rgba(18,55,140,0.45)" stroke="rgba(245,158,66,0.35)" strokeWidth=".8" />
              <line x1="14" y1="217" x2="14" y2="270" stroke="#f59e42" strokeWidth="3.5" strokeLinecap="round" />
              <circle cx="116" cy="219" r="4" fill="#f59e42" />
              <text x="25" y="232" fill="rgba(255,255,255,0.92)" fontSize="11" fontWeight="600" fontFamily="system-ui">Supplier C</text>
              <text x="25" y="247" fill="rgba(140,180,255,0.75)" fontSize="11" fontFamily="system-ui">320 units / day</text>
              <text x="25" y="260" fill="rgba(245,158,66,0.85)" fontSize="11" fontFamily="system-ui">Delay: 2hr Kampala</text>

              {/* ── Central Hub — pulse ring ── */}
              <rect className="hub-pulse" x="193" y="85" width="162" height="124" rx="14" fill="none" stroke="rgba(229,53,40,0.5)" strokeWidth="7" />
              {/* ── Central Hub — card ── */}
              <rect x="200" y="92" width="148" height="110" rx="10" fill="rgba(229,53,40,0.14)" stroke="rgba(229,53,40,0.7)" strokeWidth="1.2" />
              <text x="274" y="115" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="system-ui">Central Hub</text>
              <text x="274" y="131" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="11" fontFamily="system-ui">Nairobi Warehouse</text>
              <line x1="208" y1="141" x2="340" y2="141" stroke="rgba(229,53,40,0.28)" strokeWidth=".8" />
              <text x="234" y="160" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="system-ui">14.2K</text>
              <text x="234" y="175" textAnchor="middle" fill="rgba(229,100,90,0.8)" fontSize="11" fontFamily="system-ui">Active SKUs</text>
              <text x="318" y="160" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="system-ui">94%</text>
              <text x="318" y="175" textAnchor="middle" fill="rgba(229,100,90,0.8)" fontSize="11" fontFamily="system-ui">Utilization</text>
              <rect x="208" y="184" width="132" height="4" rx="2" fill="rgba(255,255,255,0.12)" />
              <rect x="208" y="184" width="124" height="4" rx="2" fill="rgba(229,53,40,0.65)" />

              {/* ── Distribution: Retail East (y=16, h=60, center_y=46) ── */}
              <rect x="440" y="16" width="112" height="60" rx="9" fill="rgba(18,70,150,0.42)" stroke="rgba(34,224,128,0.28)" strokeWidth=".8" />
              <line x1="444" y1="23" x2="444" y2="68" stroke="#22e080" strokeWidth="3.5" strokeLinecap="round" />
              <circle cx="544" cy="25" r="4" fill="#22e080" />
              <text x="455" y="38" fill="rgba(255,255,255,0.92)" fontSize="11" fontWeight="600" fontFamily="system-ui">Retail East</text>
              <text x="455" y="53" fill="rgba(140,180,255,0.72)" fontSize="11" fontFamily="system-ui">KE · TZ · UG</text>
              <text x="455" y="67" fill="rgba(34,224,128,0.7)" fontSize="11" fontFamily="system-ui">412 active stores</text>

              {/* ── Distribution: Wholesale West (y=117, h=60, center_y=147) ── */}
              <rect x="440" y="117" width="112" height="60" rx="9" fill="rgba(18,70,150,0.42)" stroke="rgba(34,224,128,0.28)" strokeWidth=".8" />
              <line x1="444" y1="124" x2="444" y2="169" stroke="#22e080" strokeWidth="3.5" strokeLinecap="round" />
              <circle cx="544" cy="126" r="4" fill="#22e080" />
              <text x="455" y="139" fill="rgba(255,255,255,0.92)" fontSize="11" fontWeight="600" fontFamily="system-ui">Wholesale W.</text>
              <text x="455" y="154" fill="rgba(140,180,255,0.72)" fontSize="11" fontFamily="system-ui">NG · GH · SN</text>
              <text x="455" y="168" fill="rgba(34,224,128,0.7)" fontSize="11" fontFamily="system-ui">89 distributors</text>

              {/* ── Distribution: Export Global (y=218, h=60, center_y=248) ── */}
              <rect x="440" y="218" width="112" height="60" rx="9" fill="rgba(18,70,150,0.42)" stroke="rgba(124,154,232,0.3)" strokeWidth=".8" />
              <line x1="444" y1="225" x2="444" y2="270" stroke="#7c9ae8" strokeWidth="3.5" strokeLinecap="round" />
              <circle cx="544" cy="227" r="4" fill="#7c9ae8" />
              <text x="455" y="240" fill="rgba(255,255,255,0.92)" fontSize="11" fontWeight="600" fontFamily="system-ui">Export Global</text>
              <text x="455" y="255" fill="rgba(140,180,255,0.72)" fontSize="11" fontFamily="system-ui">EU · MENA · APAC</text>
              <text x="455" y="269" fill="rgba(255,255,255,0.28)" fontSize="11" fontFamily="system-ui">24 countries</text>

              {/* ── Bezier connectors: Suppliers → Hub ── */}
              <path className="flow-in" d="M 130 50 C 166 50, 166 147, 200 147" fill="none" stroke="rgba(80,140,220,0.45)" strokeWidth="1.5" markerEnd="url(#arw-blue)" />
              <path className="flow-in" d="M 130 147 C 165 147, 165 147, 200 147" fill="none" stroke="rgba(80,140,220,0.45)" strokeWidth="1.5" markerEnd="url(#arw-blue)" />
              <path className="flow-delay" d="M 130 244 C 166 244, 166 147, 200 147" fill="none" stroke="rgba(245,158,66,0.45)" strokeWidth="1.5" markerEnd="url(#arw-amber)" />

              {/* ── Bezier connectors: Hub → Distribution ── */}
              <path className="flow-out" d="M 348 147 C 394 147, 394 46, 440 46" fill="none" stroke="rgba(229,53,40,0.5)" strokeWidth="1.5" markerEnd="url(#arw-red)" />
              <path className="flow-out" d="M 348 147 C 394 147, 394 147, 440 147" fill="none" stroke="rgba(229,53,40,0.5)" strokeWidth="1.5" markerEnd="url(#arw-red)" />
              <path className="flow-out" d="M 348 147 C 394 147, 394 248, 440 248" fill="none" stroke="rgba(229,53,40,0.5)" strokeWidth="1.5" markerEnd="url(#arw-red)" />
            </svg>

            {/* ── Bottom row: 2 metric cards + live order stream ── */}
            <div className="relative z-10 grid grid-cols-[1fr_1fr_1.45fr] gap-2.5">

              {/* Orders Today */}
              <div className="stat-card rounded-xl p-3 bg-white/[0.055] border border-white/[0.09] flex-col justify-between sm:flex hidden">
                <div className="text-white/30 mb-1.5 uppercase text-[11px] tracking-[1.2px]">
                  Orders Today
                </div>
                <div className="text-[22px] font-extrabold text-white leading-none tracking-tight mb-1">
                  1,284
                </div>
                {/* Mini sparkline */}
                <svg viewBox="0 0 80 22" className="w-full block my-1">
                  <polyline
                    points="0,18 12,16 24,12 36,9 48,12 62,6 80,3"
                    fill="none"
                    stroke="#22e080"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="text-[11px] text-[#22e080]">↑ 12% vs yesterday</div>
              </div>

              {/* On-Time Delivery */}
              <div className="stat-card rounded-xl p-3 bg-white/[0.055] border border-white/[0.09] flex-col justify-between sm:flex hidden">
                <div className="text-white/30 mb-1.5 uppercase text-[11px] tracking-[1.2px]">
                  On-Time Delivery
                </div>
                <div className="text-[22px] font-extrabold text-white leading-none tracking-tight mb-1">
                  98.3%
                </div>
                {/* Progress bar */}
                <div className="h-[4px] rounded-full bg-white/10 my-1 overflow-hidden">
                  <div className="h-full rounded-full bg-[#22e080]" style={{ width: "98.3%" }} />
                </div>
                <div className="text-[11px] text-[#22e080]">↑ 2.1pp this month</div>
              </div>

              {/* Live order stream */}
              <div className="rounded-xl p-3 bg-white/[0.055] border border-white/[0.09] flex-col justify-between sm:flex hidden">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-white/30 uppercase text-[11px] tracking-[1.2px]">
                    Order Stream
                  </span>
                  <span className="text-[11px] font-semibold text-[#22e080] flex items-center gap-1">
                    <span className="live-dot inline-block w-1.5 h-1.5 rounded-full bg-[#22e080]" />
                    Live
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {ORDERS.map((order, i) => (
                    <div
                      key={i}
                      className="order-item flex items-center justify-between gap-2"
                    >
                      <div>
                        <div className="text-[11px] font-semibold text-white/85">
                          {order.id}
                        </div>
                        <div className="text-[11px] text-white/30">{order.route}</div>
                      </div>
                      <div
                        className="text-[11px] font-semibold px-1.5 py-0.5 rounded-[5px] whitespace-nowrap border"
                        style={{
                          color: order.color,
                          background: order.bg,
                          borderColor: order.border,
                        }}
                      >
                        {order.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}