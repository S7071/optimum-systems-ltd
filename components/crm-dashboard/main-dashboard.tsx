/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect, useRef } from "react";
import {
  TrendingUp,
  TrendingDown,
  Download,
  Upload,
  DollarSign,
  BarChart2,
  HandCoins,
  Ticket,
  Clock,
  MessageCircleReply,
  ChevronRight,
  Mail,
  Eye,
  MousePointer,
  UserPlus,
  CircleAlert,
  UserMinus,
  ChevronUp,
  CalendarDays,
  Globe,
  Activity,
  Calendar,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// ─── Brand Tokens ──────────────────────────────────────────────────────────────
// Blue: #1B3FA0  |  Red (actions): #D02B20
// ──────────────────────────────────────────────────────────────────────────────

const earningsBarData = [
  { day: "Mo", value: 86 },
  { day: "Tu", value: 74 },
  { day: "We", value: 91 },
  { day: "Th", value: 35 },
  { day: "Fr", value: 50 },
  { day: "Sa", value: 60 },
  { day: "Su", value: 94 },
];

const totalEarningBarData = [
  { month: "Jan", desktop: 22, mobile: 10 },
  { month: "Feb", desktop: 37, mobile: 24 },
  { month: "Mar", desktop: 29, mobile: 14 },
  { month: "Apr", desktop: 9, mobile: 23 },
  { month: "May", desktop: 25, mobile: 16 },
  { month: "Jun", desktop: 26, mobile: 17 },
];

const avgDailySalesData = [
  { v: 33 },
  { v: 60 },
  { v: 40 },
  { v: 58 },
  { v: 45 },
  { v: 75 },
];

const pieData = [
  { name: "Completed", value: 88 },
  { name: "Remaining", value: 12 },
];

const salesByCountry = [
  {
    country: "United States",
    code: "US",
    change: "+27.4%",
    up: true,
    amount: "+$1,999.00",
  },
  {
    country: "Brazil",
    code: "BR",
    change: "+20.1%",
    up: true,
    amount: "+$39.00",
  },
  {
    country: "India",
    code: "IN",
    change: "-5%",
    up: false,
    amount: "+$299.00",
  },
  {
    country: "Australia",
    code: "AU",
    change: "+10.9%",
    up: true,
    amount: "+$99.00",
  },
  {
    country: "France",
    code: "FR",
    change: "+2.1%",
    up: true,
    amount: "+$39.00",
  },
  {
    country: "Greece",
    code: "GR",
    change: "-0.1%",
    up: false,
    amount: "+$30.00",
  },
];

const campaignStats = [
  { icon: Mail, label: "Emails", value: "1,503", change: "-0.3%", up: false },
  { icon: Eye, label: "Opened", value: "6,043", change: "+2.1%", up: true },
  {
    icon: MousePointer,
    label: "Clicked",
    value: "600",
    change: "-2.1%",
    up: false,
  },
  {
    icon: UserPlus,
    label: "Subscribe",
    value: "490",
    change: "+8.5%",
    up: true,
  },
  {
    icon: CircleAlert,
    label: "Complaints",
    value: "490",
    change: "+4.5%",
    up: true,
  },
  {
    icon: UserMinus,
    label: "Unsubscribe",
    value: "1.2",
    change: "-0.5%",
    up: false,
  },
];

// ─── Animated counter hook ─────────────────────────────────────────────────────
function useCountUp(end: number, duration = 1200, delay = 0) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      const step = end / (duration / 16);
      let current = 0;
      const interval = setInterval(() => {
        current = Math.min(current + step, end);
        setCount(Math.floor(current));
        if (current >= end) clearInterval(interval);
      }, 16);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [end, duration, delay]);
  return count;
}

// ─── Trend badge ───────────────────────────────────────────────────────────────
function TrendBadge({ value, up }: { value: string; up: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-all ${
        up
          ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
          : "bg-red-50 text-red-700 ring-1 ring-red-200"
      }`}
    >
      {up ? (
        <TrendingUp className="h-3 w-3" />
      ) : (
        <TrendingDown className="h-3 w-3" />
      )}
      {value}
    </span>
  );
}

// ─── Custom tooltip ────────────────────────────────────────────────────────────
function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-lg">
      <p className="text-xs font-medium text-slate-500">{label}</p>
      <p className="text-sm font-bold text-[#1B3FA0]">${payload[0].value}</p>
    </div>
  );
}

// ─── Section fade-in wrapper ──────────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`animate-fade-in-up ${className}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
    >
      {children}
    </div>
  );
}

// ─── Main dashboard ────────────────────────────────────────────────────────────
export default function OptimumAnalyticsDashboard() {
  const dau = useCountUp(3450, 1400, 300);
  const ws = useCountUp(1342, 1200, 450);
  const cr = useCountUp(28, 1000, 600); // 2.8 → animate integer part
  const [progressValues, setProgressValues] = useState([0, 0, 0]);

  useEffect(() => {
    const t = setTimeout(() => setProgressValues([70, 45, 20]), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="h-[92vh] bg-primary-cbe-50/30 overflow-hidden overflow-clip overflow-y-auto">
      {/* ── Global animation keyframes injected via a style tag ── */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1);    }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .animate-fade-in-up  { animation: fadeInUp 0.55s cubic-bezier(.16,1,.3,1) both; }
        .animate-scale-in    { animation: scaleIn  0.4s cubic-bezier(.16,1,.3,1)  both; }
        .card-hover { transition: box-shadow .2s ease, transform .2s ease; }
        .card-hover:hover { box-shadow: 0 8px 30px -8px rgba(27,63,160,.15); transform: translateY(-2px); }
        .btn-shimmer {
          background: linear-gradient(105deg, #D02B20 0%, #FF4438 45%, #D02B20 55%, #B02218 100%);
          background-size: 200% auto;
        }
        .btn-shimmer:hover { animation: shimmer 1.4s linear infinite; }
        .blue-progress [data-slot="progress-indicator"] { background: #1B3FA0 !important; }
        .kpi-border::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px; height: 100%;
          background: #1B3FA0;
          border-radius: 3px 0 0 3px;
        }
      `}</style>

      <div className="mx-auto max-w-screen-2xl space-y-5 px-6 py-7">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="fm-a fm-d0 flex items-center justify-between">
          <div>
            <h1 className="text-[22px] font-bold tracking-tight text-slate-900">
              Website Analytics
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

        {/* ── KPI row ────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Daily Active Users",
              value: dau.toLocaleString(),
              change: "+12.1%",
              up: true,
              delay: 100,
            },
            {
              label: "Weekly Sessions",
              value: ws.toLocaleString(),
              change: "-9.8%",
              up: false,
              delay: 180,
            },
            {
              label: "Avg. Duration",
              value: "5.2min",
              change: "+7.7%",
              up: true,
              delay: 260,
            },
            {
              label: "Conversion Rate",
              value: "2.8%",
              change: "+4.3%",
              up: true,
              delay: 340,
            },
          ].map((kpi) => (
            <FadeIn key={kpi.label} delay={kpi.delay}>
              <div className="card-hover relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm kpi-border">
                <div className="flex items-start justify-between">
                  <p className="text-xs font-medium text-slate-500">
                    {kpi.label}
                  </p>
                  <TrendBadge value={kpi.change} up={kpi.up} />
                </div>
                <p className="mt-3 text-3xl font-bold tracking-tight text-slate-800">
                  {kpi.value}
                </p>
                {/* subtle blue glow blob */}
                <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#1B3FA0]/5" />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ── Row 2: Earning Reports + Donut ─────────────────────────────── */}
        <div className="grid gap-4 lg:grid-cols-12">
          {/* Earning Reports */}
          <FadeIn delay={200} className="lg:col-span-8">
            <div className="card-hover rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              {/* card header */}
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                <div>
                  <p className="font-semibold text-slate-800">
                    Earning Reports
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">Last 28 days</p>
                </div>
                <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-medium text-slate-600 transition hover:border-[#1B3FA0]/40 hover:bg-[#1B3FA0]/5 hover:text-[#1B3FA0]">
                  <Upload className="h-3.5 w-3.5" />
                  Export
                </button>
              </div>

              <div className="grid gap-6 px-6 py-5 lg:grid-cols-2">
                {/* Bar chart */}
                <div>
                  <div className="mb-4 flex items-center gap-2.5">
                    <span className="text-2xl font-bold text-slate-800">
                      $1,468
                    </span>
                    <span className="rounded-full bg-emerald-500 px-2.5 py-0.5 text-xs font-bold text-white">
                      +4.2%
                    </span>
                  </div>
                  <ResponsiveContainer width="100%" height={185}>
                    <BarChart data={earningsBarData} barSize={32} barGap={6}>
                      <defs>
                        <linearGradient
                          id="blueBarGrad"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#1B3FA0" />
                          <stop offset="100%" stopColor="#3B6FD0" />
                        </linearGradient>
                      </defs>
                      <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          fill: "#94a3b8",
                          fontSize: 11,
                          fontWeight: 500,
                        }}
                      />
                      <Tooltip
                        content={<ChartTooltip />}
                        cursor={{ fill: "#f1f5f9", radius: 6 }}
                      />
                      <Bar
                        dataKey="value"
                        fill="url(#blueBarGrad)"
                        radius={[6, 6, 4, 4]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Progress cards */}
                <div className="flex flex-col justify-center gap-3">
                  {[
                    {
                      icon: DollarSign,
                      label: "Earnings",
                      value: "$545.69",
                      idx: 0,
                    },
                    {
                      icon: BarChart2,
                      label: "Profit",
                      value: "$256.34",
                      idx: 1,
                    },
                    {
                      icon: HandCoins,
                      label: "Expense",
                      value: "$74.19",
                      idx: 2,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 transition hover:border-[#1B3FA0]/20 hover:bg-[#1B3FA0]/5"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1B3FA0]/10">
                            <item.icon className="h-4 w-4 text-[#1B3FA0]" />
                          </div>
                          <span className="text-sm font-medium text-slate-700">
                            {item.label}
                          </span>
                        </div>
                        <span className="text-sm font-bold text-slate-800">
                          {item.value}
                        </span>
                      </div>
                      <div className="mt-3">
                        <Progress
                          value={progressValues[item.idx]}
                          className="h-1.5 bg-slate-200 blue-progress"
                          style={{ transition: "all 1s ease" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Donut + Tickets */}
          <FadeIn delay={300} className="lg:col-span-4">
            <div className="card-hover flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              <div className="flex flex-1 items-center justify-center px-6 pt-6">
                <div className="relative flex items-center justify-center">
                  <PieChart width={230} height={230}>
                    <Pie
                      data={pieData}
                      cx={110}
                      cy={110}
                      innerRadius={58}
                      outerRadius={100}
                      startAngle={90}
                      endAngle={-270}
                      strokeWidth={4}
                      dataKey="value"
                    >
                      <Cell fill="#1B3FA0" />
                      <Cell fill="#e2e8f0" />
                    </Pie>
                  </PieChart>
                  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-slate-800">
                      88%
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      Completed
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 px-6 py-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    {
                      icon: Ticket,
                      label: "New Tickets",
                      value: "40",
                      bg: "bg-emerald-50",
                      text: "text-emerald-600",
                      ring: "ring-emerald-200",
                    },
                    {
                      icon: Clock,
                      label: "Open Tickets",
                      value: "25",
                      bg: "bg-amber-50",
                      text: "text-amber-600",
                      ring: "ring-amber-200",
                    },
                    {
                      icon: MessageCircleReply,
                      label: "Response",
                      value: "1 Day",
                      bg: "bg-blue-50",
                      text: "text-[#1B3FA0]",
                      ring: "ring-blue-200",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center gap-1.5 text-center"
                    >
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-full ${item.bg} ring-1 ${item.ring}`}
                      >
                        <item.icon className={`h-4 w-4 ${item.text}`} />
                      </div>
                      <span className="text-xs font-medium text-slate-500">
                        {item.label}
                      </span>
                      <span className={`text-sm font-bold ${item.text}`}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── Row 3: Web Analytics + Avg Daily Sales + Sales Overview ────── */}
        <div className="grid gap-4 lg:grid-cols-12">
          {/* Website Analytics */}
          <FadeIn delay={100} className="lg:col-span-4">
            <div className="card-hover h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <div className="mb-1 flex items-center gap-2">
                <Globe className="h-4 w-4 text-[#1B3FA0]" />
                <p className="font-semibold text-slate-800">
                  Website Analytics
                </p>
              </div>
              <p className="mb-5 text-xs text-slate-400">
                Total 28.5% Conversion Rate
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { badge: "432", label: "Direct" },
                  { badge: "216", label: "Organic" },
                  { badge: "29%", label: "Sessions" },
                  { badge: "2.3K", label: "Page Views" },
                  { badge: "1.6K", label: "Leads" },
                  { badge: "8%", label: "Conversions" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5">
                    <span className="inline-flex min-w-[44px] items-center justify-center rounded-full bg-[#1B3FA0]/10 px-2.5 py-1 text-xs font-bold text-[#1B3FA0]">
                      {item.badge}
                    </span>
                    <span className="text-sm text-slate-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Average Daily Sales */}
          <FadeIn delay={180} className="lg:col-span-4">
            <div className="card-hover h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              <div className="flex items-start justify-between px-6 pt-5">
                <div>
                  <p className="text-xs text-slate-400">Average Daily Sales</p>
                  <p className="mt-1 text-2xl font-bold text-slate-800">
                    $28,450
                  </p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 ring-1 ring-red-200">
                  <TrendingDown className="h-4 w-4 text-red-500" />
                </div>
              </div>
              <div className="mt-2 h-[110px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={avgDailySalesData}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="blueAreaGrad"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#1B3FA0"
                          stopOpacity={0.25}
                        />
                        <stop
                          offset="95%"
                          stopColor="#1B3FA0"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="v"
                      stroke="#1B3FA0"
                      strokeWidth={2.5}
                      fill="url(#blueAreaGrad)"
                      dot={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </FadeIn>

          {/* Sales Overview */}
          <FadeIn delay={260} className="lg:col-span-4">
            <div className="card-hover h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-slate-400">Sales Overview</p>
                  <p className="mt-1 text-2xl font-bold text-slate-800">
                    $42.5K
                  </p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200">
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center rounded-full bg-[#1B3FA0]/10 px-2.5 py-0.5 text-xs font-bold text-[#1B3FA0]">
                    62.2%
                  </span>
                  <span className="text-slate-500">Orders</span>
                </div>
                <div className="h-4 w-px bg-slate-200" />
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
                    25.5%
                  </span>
                  <span className="text-slate-500">Visits</span>
                </div>
              </div>

              <div className="mt-4 flex overflow-hidden rounded-full shadow-inner">
                <div
                  className="h-3 bg-[#D02B20] transition-all duration-1000"
                  style={{ width: "70%" }}
                />
                <div
                  className="h-3 bg-emerald-500 transition-all duration-1000"
                  style={{ width: "30%" }}
                />
              </div>
              <div className="mt-2 flex justify-between">
                <span className="text-[10px] font-medium text-[#D02B20]">
                  Orders 70%
                </span>
                <span className="text-[10px] font-medium text-emerald-600">
                  Visits 30%
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── Row 4: Countries + Total Earning + Monthly Campaign ─────────── */}
        <div className="grid gap-4 lg:grid-cols-12">
          {/* Sales by Countries */}
          <FadeIn delay={100} className="lg:col-span-4">
            <div className="card-hover h-full rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                <div>
                  <p className="font-semibold text-slate-800">
                    Sales by Countries
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">Last 28 days</p>
                </div>
                <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-[#1B3FA0]/30 hover:text-[#1B3FA0]">
                  View All
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="space-y-1 px-4 py-3">
                {salesByCountry.map((c, i) => (
                  <div
                    key={c.country}
                    className="flex items-center gap-3 rounded-xl px-2 py-2.5 transition hover:bg-slate-50"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    {/* Country code pill */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1B3FA0] text-[10px] font-extrabold text-white shadow-sm">
                      {c.code}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-slate-700">
                        {c.country}
                      </p>
                      <p className="text-xs">
                        <span
                          className={c.up ? "text-emerald-600" : "text-red-500"}
                        >
                          {c.change}
                        </span>
                        <span className="text-slate-400"> from last month</span>
                      </p>
                    </div>
                    <span className="shrink-0 text-sm font-bold text-slate-700">
                      {c.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Total Earning */}
          <FadeIn delay={200} className="lg:col-span-4">
            <div className="card-hover h-full rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              <div className="flex items-start justify-between border-b border-slate-100 px-6 py-4">
                <div>
                  <p className="text-xs text-slate-400">Total Earning</p>
                  <p className="mt-1 text-2xl font-bold text-slate-800">83%</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
                  <ChevronUp className="h-3 w-3" />
                  24.2%
                </span>
              </div>

              <div className="px-4 py-4">
                <ResponsiveContainer width="100%" height={140}>
                  <BarChart data={totalEarningBarData} barSize={18} barGap={3}>
                    <defs>
                      <linearGradient id="stackBot" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1B3FA0" />
                        <stop offset="100%" stopColor="#3B6FD0" />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#94a3b8", fontSize: 11, fontWeight: 500 }}
                    />
                    <Tooltip
                      cursor={{ fill: "#f8fafc" }}
                      contentStyle={{
                        background: "#fff",
                        border: "1px solid #e2e8f0",
                        borderRadius: 8,
                        fontSize: 12,
                      }}
                    />
                    <Bar
                      dataKey="desktop"
                      stackId="a"
                      fill="url(#stackBot)"
                      radius={[0, 0, 4, 4]}
                    />
                    <Bar
                      dataKey="mobile"
                      stackId="a"
                      fill="#93c5fd"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-3 border-t border-slate-100 px-6 py-4">
                {[
                  {
                    icon: HandCoins,
                    label: "Total Revenue",
                    sub: "Client Payment",
                    value: "+$126",
                    up: true,
                  },
                  {
                    icon: DollarSign,
                    label: "Total Sales",
                    sub: "Refund",
                    value: "-$98",
                    up: false,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                      <item.icon className="h-4 w-4 text-slate-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-700">
                        {item.label}
                      </p>
                      <p className="text-xs text-slate-400">{item.sub}</p>
                    </div>
                    <span
                      className={`text-sm font-bold ${item.up ? "text-emerald-600" : "text-red-500"}`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Monthly Campaign State */}
          <FadeIn delay={300} className="lg:col-span-4">
            <div className="card-hover h-full rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              <div className="flex items-center gap-2 border-b border-slate-100 px-6 py-4">
                <Activity className="h-4 w-4 text-[#1B3FA0]" />
                <div>
                  <p className="font-semibold text-slate-800">
                    Monthly Campaign
                  </p>
                  <p className="text-xs text-slate-400">8.5K social visitors</p>
                </div>
              </div>

              <div className="divide-y divide-slate-100 px-4">
                {campaignStats.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 py-3 transition hover:bg-slate-50/70 rounded-lg px-2"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1B3FA0]/8 bg-opacity-8">
                      <item.icon className="h-4 w-4 text-[#1B3FA0]" />
                    </div>
                    <span className="flex-1 text-sm font-medium text-slate-700">
                      {item.label}
                    </span>
                    <span className="text-sm text-slate-500">{item.value}</span>
                    <span
                      className={`min-w-[52px] rounded-full border px-2 py-0.5 text-center text-xs font-semibold ${
                        item.up
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                          : "border-red-200 bg-red-50 text-red-600"
                      }`}
                    >
                      {item.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── Footer brand strip ────────────────────────────────────────── */}
        <FadeIn delay={400}>
          <div className="flex items-center justify-between rounded-xl border border-slate-200/60 bg-white/60 px-5 py-3 backdrop-blur">
            <span className="text-xs font-semibold text-[#1B3FA0]">
              Optimum ERP Systems &nbsp;·&nbsp; Analytics v2.6
            </span>
            <span className="text-xs text-slate-400">
              Data refreshed · {new Date().toLocaleTimeString()}
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
