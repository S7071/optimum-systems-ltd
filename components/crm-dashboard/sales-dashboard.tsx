"use client";

import { useState, useEffect, type FC, JSX } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  type TooltipProps,
} from "recharts";
import {
  ArrowUp,
  ArrowDown,
  Calendar,
  Download,
  ChevronRight,
  Upload,
  Search,
  TrendingUp,
  ShoppingBag,
  Package,
  DollarSign,
  type LucideIcon,
} from "lucide-react";
import { Button } from "../ui/button";

// ─── Types ─────────────────────────────────────────────────────────────────

interface RevenuePoint {
  d: string;
  dt: number;
  m: number;
}

interface Product {
  name: string;
  ab: string;
  sold: number;
  avatarClass: string;
}

type OrderStatus = "new" | "prog" | "hold" | "done" | "ret";

interface Order {
  id: number;
  name: string;
  qty: string;
  amt: string;
  pay: string;
  st: OrderStatus;
}

interface StatItem {
  lbl: string;
  val: number;
  pfx: string;
  chg: string;
  up: boolean;
  ico: LucideIcon;
  delayClass: string;
}

interface OrderStat {
  lbl: string;
  n: number;
  pct: number;
  up: boolean;
  d: string;
  fillClass: string;
  trackClass: string;
}

interface StatusMeta {
  badgeClass: string;
  lbl: string;
}

interface BarToggle {
  k: "dt" | "m";
  l: string;
  v: string;
}

interface CounterProps {
  to: number;
  prefix?: string;
  dur?: number;
}

// ─── Data ──────────────────────────────────────────────────────────────────

const revenueData: RevenuePoint[] = [
  { d: "Apr 4", dt: 148, m: 120 },
  { d: "Apr 5", dt: 65, m: 90 },
  { d: "Apr 6", dt: 112, m: 75 },
  { d: "Apr 7", dt: 162, m: 130 },
  { d: "Apr 8", dt: 249, m: 200 },
  { d: "Apr 9", dt: 201, m: 170 },
  { d: "Apr 10", dt: 164, m: 140 },
  { d: "Apr 11", dt: 273, m: 220 },
  { d: "Apr 12", dt: 39, m: 55 },
  { d: "Apr 13", dt: 174, m: 145 },
  { d: "Apr 14", dt: 219, m: 180 },
  { d: "Apr 15", dt: 195, m: 160 },
  { d: "Apr 16", dt: 229, m: 185 },
  { d: "Apr 17", dt: 92, m: 78 },
  { d: "Apr 18", dt: 80, m: 68 },
  { d: "Apr 19", dt: 92, m: 80 },
  { d: "Apr 20", dt: 298, m: 240 },
  { d: "Apr 21", dt: 243, m: 198 },
  { d: "Apr 22", dt: 162, m: 135 },
  { d: "Apr 23", dt: 59, m: 48 },
  { d: "Apr 24", dt: 92, m: 76 },
  { d: "Apr 25", dt: 150, m: 122 },
  { d: "Apr 26", dt: 92, m: 78 },
  { d: "Apr 27", dt: 259, m: 210 },
  { d: "Apr 28", dt: 144, m: 118 },
  { d: "Apr 29", dt: 50, m: 42 },
  { d: "Apr 30", dt: 256, m: 208 },
  { d: "May 1", dt: 80, m: 67 },
  { d: "May 2", dt: 196, m: 160 },
  { d: "May 3", dt: 303, m: 246 },
  { d: "May 4", dt: 333, m: 270 },
  { d: "May 5", dt: 260, m: 212 },
  { d: "May 6", dt: 100, m: 82 },
  { d: "May 7", dt: 152, m: 125 },
  { d: "May 8", dt: 196, m: 160 },
  { d: "May 9", dt: 178, m: 145 },
  { d: "May 10", dt: 132, m: 108 },
  { d: "May 11", dt: 132, m: 108 },
  { d: "May 12", dt: 300, m: 244 },
  { d: "May 13", dt: 316, m: 258 },
  { d: "May 14", dt: 226, m: 184 },
  { d: "May 15", dt: 333, m: 272 },
  { d: "May 16", dt: 210, m: 172 },
  { d: "May 17", dt: 157, m: 128 },
  { d: "May 18", dt: 55, m: 45 },
];

const products: Product[] = [
  { name: "Sports Shoes", ab: "SP", sold: 316, avatarClass: "bg-orange-500" },
  { name: "Black T-Shirt", ab: "BL", sold: 274, avatarClass: "bg-slate-800" },
  { name: "Jeans", ab: "JE", sold: 195, avatarClass: "bg-blue-600" },
  { name: "Red Sneakers", ab: "RE", sold: 402, avatarClass: "bg-red-600" },
  { name: "Red Scarf", ab: "RS", sold: 280, avatarClass: "bg-pink-500" },
  {
    name: "Kitchen Accessory",
    ab: "KI",
    sold: 150,
    avatarClass: "bg-emerald-500",
  },
];

const orders: Order[] = [
  {
    id: 1083,
    name: "Marvin Dekidis",
    qty: "2 Items",
    amt: "$34.50",
    pay: "E-Wallet",
    st: "new",
  },
  {
    id: 1082,
    name: "Carter Lipshitz",
    qty: "6 Items",
    amt: "$60.50",
    pay: "Bank Transfer",
    st: "prog",
  },
  {
    id: 1081,
    name: "Addison Philips",
    qty: "3 Items",
    amt: "$47.50",
    pay: "E-Wallet",
    st: "new",
  },
  {
    id: 1079,
    name: "Craig Siphron",
    qty: "15 Items",
    amt: "$89.80",
    pay: "Bank Transfer",
    st: "hold",
  },
  {
    id: 1078,
    name: "Emma Johnson",
    qty: "4 Items",
    amt: "$120.75",
    pay: "Credit Card",
    st: "done",
  },
  {
    id: 1077,
    name: "Michael Smith",
    qty: "8 Items",
    amt: "$210.50",
    pay: "PayPal",
    st: "done",
  },
];

const STATUS_MAP: Record<OrderStatus, StatusMeta> = {
  new: {
    badgeClass: "bg-blue-50 text-blue-700 border border-blue-200",
    lbl: "New Order",
  },
  prog: {
    badgeClass: "bg-orange-50 text-orange-700 border border-orange-200",
    lbl: "In Progress",
  },
  hold: {
    badgeClass: "bg-amber-50 text-amber-700 border border-amber-200",
    lbl: "On Hold",
  },
  done: {
    badgeClass: "bg-green-50 text-green-700 border border-green-200",
    lbl: "Completed",
  },
  ret: {
    badgeClass: "bg-red-50 text-red-700 border border-red-200",
    lbl: "Return",
  },
};

const ORDER_STATS: OrderStat[] = [
  {
    lbl: "New Order",
    n: 43,
    pct: 43,
    up: true,
    d: "0.5%",
    fillClass: "bg-blue-500",
    trackClass: "bg-blue-100",
  },
  {
    lbl: "On Progress",
    n: 12,
    pct: 25,
    up: false,
    d: "0.3%",
    fillClass: "bg-teal-400",
    trackClass: "bg-teal-100",
  },
  {
    lbl: "Completed",
    n: 40,
    pct: 40,
    up: true,
    d: "0.5%",
    fillClass: "bg-green-500",
    trackClass: "bg-green-100",
  },
  {
    lbl: "Return",
    n: 2,
    pct: 48,
    up: false,
    d: "0.5%",
    fillClass: "bg-orange-400",
    trackClass: "bg-orange-100",
  },
];

const BAR_TOGGLES: BarToggle[] = [
  { k: "dt", l: "Desktop", v: "13,746" },
  { k: "m", l: "Mobile", v: "13,580" },
];

const STAT_ITEMS: StatItem[] = [
  {
    lbl: "Total Balance",
    val: 103045,
    pfx: "$",
    chg: "3.6%",
    up: true,
    ico: TrendingUp,
    delayClass: "[animation-delay:50ms]",
  },
  {
    lbl: "Total Income",
    val: 78000,
    pfx: "$",
    chg: "2.5%",
    up: true,
    ico: DollarSign,
    delayClass: "[animation-delay:100ms]",
  },
  {
    lbl: "Total Expense",
    val: 15010,
    pfx: "$",
    chg: "6.0%",
    up: false,
    ico: ShoppingBag,
    delayClass: "[animation-delay:150ms]",
  },
  {
    lbl: "Total Sales Tax",
    val: 9090,
    pfx: "$",
    chg: "5.0%",
    up: true,
    ico: Package,
    delayClass: "[animation-delay:200ms]",
  },
];

const TABLE_HEADERS = [
  "ID",
  "Customer",
  "Qty",
  "Amount",
  "Payment",
  "Status",
] as const;

// ─── Animated Counter ──────────────────────────────────────────────────────

const Counter: FC<CounterProps> = ({ to, prefix = "", dur = 1200 }) => {
  const [val, setVal] = useState<number>(0);

  useEffect(() => {
    const t0 = Date.now();
    const tick = (): void => {
      const p = Math.min((Date.now() - t0) / dur, 1);
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [to, dur]);

  return (
    <>
      {prefix}
      {val.toLocaleString()}
    </>
  );
};

// ─── Custom Chart Tooltip ──────────────────────────────────────────────────

const ChartTooltip: FC<TooltipProps<number, string>> = ({
  active,
  payload,
  label,
}) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#0F2D6B] rounded-xl px-3.5 py-2 shadow-xl text-white">
      <p className="text-[11px] text-white/60 mb-0.5">{label}</p>
      <p className="text-base font-bold">
        {payload[0].value?.toLocaleString()}
      </p>
    </div>
  );
};

// ─── Stat Card ─────────────────────────────────────────────────────────────

const StatCard: FC<StatItem> = ({
  lbl,
  val,
  pfx,
  chg,
  up,
  ico: Icon,
  delayClass,
}) => (
  <div
    className={[
      "group relative bg-white rounded-2xl p-5 shadow-sm",
      "border border-[#E8EEF7] border-l-[3px] border-l-blue-600",
      "animate-[fadeUp_0.45s_ease_both]",
      delayClass,
      "transition-all duration-200",
      "hover:shadow-[0_6px_28px_rgba(27,79,216,0.10)] hover:border-blue-200 hover:-translate-y-px hover:border-l-red-600",
    ].join(" ")}
  >
    <div className="flex items-start justify-between mb-3">
      <p className="text-xs font-medium text-slate-500 m-0">{lbl}</p>
      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
        <Icon size={14} className="text-blue-600" />
      </div>
    </div>

    <p className="text-2xl font-extrabold text-[#0F2D6B] mb-2 tracking-tight leading-none font-[Sora,sans-serif]">
      <Counter to={val} prefix={pfx} dur={1100} />
    </p>

    <div className="flex items-center gap-1.5 text-[11px]">
      <span
        className={[
          "inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full font-semibold",
          up ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600",
        ].join(" ")}
      >
        {up ? <ArrowUp size={9} /> : <ArrowDown size={9} />}
        {chg}
      </span>
      <span className="text-slate-400">vs last month</span>
    </div>
  </div>
);

// ─── Main Dashboard ────────────────────────────────────────────────────────

export default function SalesDashboard(): JSX.Element {
  const [bar, setBar] = useState<"dt" | "m">("dt");
  const [q, setQ] = useState<string>("");

  const filtered: Order[] = orders.filter(
    (o: Order) =>
      o.name.toLowerCase().includes(q.toLowerCase()) ||
      String(o.id).includes(q),
  );

  return (
    <section className="h-[92vh] bg-primary-cbe-50/30 overflow-hidden overflow-clip overflow-y-auto">
      {/* Global font + keyframe injection */}
      <style>{`
        .font-sora { font-family:'Sora',sans-serif; }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(14px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes fillBar {
          from { width:0%; }
          to   { width:var(--bar-w); }
        }
        .bar-anim {
          animation: fillBar 1.1s cubic-bezier(.34,1.56,.64,1) both;
          width: var(--bar-w);
        }
      `}</style>

      <div className="mx-auto max-w-screen-2xl space-y-5 px-6 py-7">
        {/* ── Header ── */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[22px] font-bold tracking-tight text-slate-900">
              Sales Overview
            </h1>
            <p className="mt-0.5 text-sm text-slate-400">
              Est nostrud nostrud elit fugiat dolor occaecat ipsum.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="hidden h-8 gap-2 border-slate-200 text-xs font-medium text-slate-600 sm:flex"
            >
              <Calendar className="size-3.5 text-[#1E4FBF]" />
              23 Feb 2026 – 22 Mar 2026
            </Button>
            <Button variant="default" size="sm">
              <Download className="size-3.5" /> Download Report
            </Button>
          </div>
        </div>

        {/* Row 1 — Revenue chart + stat cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          {/* Revenue Chart card */}
          <div className="bg-white rounded-2xl border border-[#E8EEF7] shadow-sm overflow-hidden animate-[fadeUp_0.45s_ease_both] [animation-delay:50ms] transition-all duration-200 hover:shadow-[0_6px_28px_rgba(27,79,216,0.10)] hover:border-blue-200 hover:-translate-y-px">
            <div className="flex items-start justify-between px-5 pt-5">
              <div>
                <h2 className="font-sora text-[15px] font-bold text-[#0F2D6B] m-0">
                  Revenue Chart
                </h2>
                <p className="text-[12px] text-slate-400 mt-1 m-0">
                  Last 28 days performance
                </p>
              </div>

              {/* Toggle: Desktop / Mobile */}
              <div className="flex rounded-xl overflow-hidden border border-[#E8EEF7]">
                {BAR_TOGGLES.map((t: BarToggle) => (
                  <button
                    key={t.k}
                    onClick={() => setBar(t.k)}
                    className={[
                      "min-w-[88px] px-5 py-2.5 text-left border-none cursor-pointer transition-colors duration-150",
                      bar === t.k
                        ? "bg-blue-50 border-b-[2.5px] border-b-blue-600"
                        : "bg-transparent hover:bg-blue-50/50",
                    ].join(" ")}
                  >
                    <span className="block text-[11px] text-slate-400">
                      {t.l}
                    </span>
                    <span
                      className={[
                        "block font-sora text-[17px] font-bold leading-tight mt-0.5",
                        bar === t.k ? "text-blue-600" : "text-[#0F2D6B]",
                      ].join(" ")}
                    >
                      {t.v}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="px-2 pt-3 pb-2">
              <ResponsiveContainer width="100%" height={186}>
                <BarChart
                  data={revenueData}
                  barSize={7}
                  barCategoryGap="22%"
                  margin={{ top: 4, right: 8, left: -20, bottom: 0 }}
                >
                  <CartesianGrid vertical={false} stroke="#F1F5FB" />
                  <XAxis
                    dataKey="d"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 10, fill: "#94A3B8" }}
                    interval={6}
                  />
                  <Tooltip
                    content={<ChartTooltip />}
                    cursor={{ fill: "rgba(238,243,253,0.6)" }}
                  />
                  <Bar dataKey={bar} fill="#1B4FD8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 2 × 2 Stat cards */}
          <div className="grid grid-cols-2 gap-3.5">
            {STAT_ITEMS.map((s: StatItem) => (
              <StatCard key={s.lbl} {...s} />
            ))}
          </div>
        </div>

        {/* Row 2 — Best Selling + Order Tracker */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
          {/* Best Selling */}
          <div className="bg-white rounded-2xl border border-[#E8EEF7] shadow-sm animate-[fadeUp_0.45s_ease_both] [animation-delay:280ms] transition-all duration-200 hover:shadow-[0_6px_28px_rgba(27,79,216,0.10)] hover:border-blue-200 hover:-translate-y-px">
            <div className="flex items-start justify-between px-5 pt-5 pb-3">
              <div>
                <h2 className="font-sora text-[15px] font-bold text-[#0F2D6B] m-0">
                  Best Selling
                </h2>
                <p className="text-[12px] text-slate-400 mt-1 m-0">
                  Top products this period
                </p>
              </div>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#E8EEF7] bg-white text-slate-500 cursor-pointer transition-all duration-150 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600">
                <ChevronRight size={15} />
              </button>
            </div>

            <div className="px-4 pb-5 flex flex-col gap-2">
              {products.map((p: Product) => (
                <div
                  key={p.name}
                  className="flex items-center justify-between rounded-xl border border-[#E8EEF7] px-3 py-2.5 cursor-pointer transition-all duration-150 hover:bg-blue-50 hover:border-blue-200 hover:shadow-[0_2px_8px_rgba(27,79,216,0.07)]"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-[38px] h-[38px] rounded-[10px] shrink-0 flex items-center justify-center font-sora text-[11px] font-bold text-white ${p.avatarClass}`}
                    >
                      {p.ab}
                    </div>
                    <span className="text-[13px] font-semibold text-[#0F2D6B]">
                      {p.name}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-green-50 text-green-700">
                    {p.sold.toLocaleString()} sold
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Track Order Status */}
          <div className="xl:col-span-2 bg-white rounded-2xl border border-[#E8EEF7] shadow-sm animate-[fadeUp_0.45s_ease_both] [animation-delay:330ms] transition-all duration-200 hover:shadow-[0_6px_28px_rgba(27,79,216,0.10)] hover:border-blue-200 hover:-translate-y-px">
            <div className="flex items-start justify-between px-6 pt-5 pb-3.5">
              <div>
                <h2 className="font-sora text-[15px] font-bold text-[#0F2D6B] m-0">
                  Track Order Status
                </h2>
                <p className="text-[12px] text-slate-400 mt-1 m-0">
                  Analyze growth and changes in visitor patterns
                </p>
              </div>
              <button className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-white px-3.5 py-2 rounded-xl bg-red-600 border-none shadow-[0_2px_8px_rgba(232,25,44,0.28)] cursor-pointer transition-all duration-150 hover:bg-red-700 hover:shadow-[0_4px_18px_rgba(232,25,44,0.38)] hover:-translate-y-px active:translate-y-0">
                <Upload size={13} />
                Export
              </button>
            </div>

            {/* Progress stat row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 pb-5">
              {ORDER_STATS.map((s: OrderStat, i: number) => (
                <div key={s.lbl}>
                  <p className="font-sora text-[28px] font-extrabold text-[#0F2D6B] leading-none mb-1.5 m-0">
                    <Counter to={s.n} dur={900 + i * 100} />
                  </p>
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-[12px] text-slate-500">{s.lbl}</span>
                    <span
                      className={[
                        "inline-flex items-center gap-0.5 text-[11px] font-semibold",
                        s.up ? "text-green-600" : "text-red-600",
                      ].join(" ")}
                    >
                      {s.up ? <ArrowUp size={9} /> : <ArrowDown size={9} />}
                      {s.d}
                    </span>
                  </div>
                  <div
                    className={`h-1.5 w-full rounded-full overflow-hidden ${s.trackClass}`}
                  >
                    <div
                      className={`bar-anim h-full rounded-full ${s.fillClass}`}
                      style={
                        {
                          "--bar-w": `${s.pct}%`,
                          animationDelay: `${i * 0.1 + 0.5}s`,
                        } as React.CSSProperties
                      }
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Filter input */}
            <div className="px-6 pb-4">
              <div className="relative w-fit">
                <Search
                  size={13}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
                <input
                  type="text"
                  className="w-[260px] text-[13px] rounded-[10px] pl-9 pr-4 py-2 outline-none border border-[#E8EEF7] bg-[#FAFBFD] text-[#0F2D6B] placeholder:text-slate-400 transition-all duration-150 focus:border-blue-500 focus:ring-[3px] focus:ring-blue-500/10"
                  placeholder="Filter orders..."
                  value={q}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setQ(e.target.value)
                  }
                />
              </div>
            </div>

            {/* Orders table */}
            <div className="px-6 pb-6">
              <div className="rounded-xl border border-[#E8EEF7] overflow-hidden">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#F8FAFD]">
                      {TABLE_HEADERS.map((h: string) => (
                        <th
                          key={h}
                          className="px-3.5 py-2.5 text-left text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-[#E8EEF7]"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((o: Order, i: number) => {
                      const meta: StatusMeta =
                        STATUS_MAP[o.st] ?? STATUS_MAP.new;
                      return (
                        <tr
                          key={o.id}
                          className={[
                            "transition-colors duration-100 hover:bg-blue-50",
                            i < filtered.length - 1
                              ? "border-b border-[#F8FAFD]"
                              : "",
                          ].join(" ")}
                        >
                          <td className="px-3.5 py-3 font-mono text-[12px] font-semibold text-blue-600">
                            #{o.id}
                          </td>
                          <td className="px-3.5 py-3 text-[13px] font-semibold text-[#0F2D6B]">
                            {o.name}
                          </td>
                          <td className="px-3.5 py-3 text-[12px] text-slate-500">
                            {o.qty}
                          </td>
                          <td className="px-3.5 py-3 text-[13px] font-semibold text-[#0F2D6B]">
                            {o.amt}
                          </td>
                          <td className="px-3.5 py-3 text-[12px] text-slate-500">
                            {o.pay}
                          </td>
                          <td className="px-3.5 py-3">
                            <span
                              className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-semibold ${meta.badgeClass}`}
                            >
                              {meta.lbl}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-3">
                <span className="text-[12px] text-slate-400">
                  Showing {filtered.length} of {orders.length} orders
                </span>
                <div className="flex gap-2">
                  <button
                    disabled
                    className="px-3.5 py-1.5 text-[12px] font-medium rounded-lg border border-[#E8EEF7] bg-white text-slate-400 opacity-40 cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <button className="px-3.5 py-1.5 text-[12px] font-medium rounded-lg border border-[#E8EEF7] bg-white text-blue-600 cursor-pointer transition-all duration-150 hover:border-blue-500 hover:bg-blue-50">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
