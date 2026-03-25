"use client";

import { useState } from "react";
import {
  Users,
  BriefcaseBusiness,
  WalletMinimal,
  CirclePlus,
  ChevronDown,
  FolderUp,
  Ellipsis,
  Calendar,
  TrendingUp,
  TrendingDown,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

// ─── Brand tokens ─────────────────────────────────────────────────────────────
// Deep navy    : #1B3A6B
// Royal blue   : #1E4FBF
// Optimum red  : #D42B2B  (CTAs)
// Light bg     : #F4F7FC

// ─── Sparkline data per KPI ───────────────────────────────────────────────────

const customersData = [
  { month: "Oct", v: 2420 },
  { month: "Nov", v: 1550 },
  { month: "Dec", v: 1480 },
  { month: "Jan", v: 2610 },
  { month: "Feb", v: 1720 },
  { month: "Mar", v: 5890 },
];

const dealsData = [
  { month: "Oct", v: 1380 },
  { month: "Nov", v: 1450 },
  { month: "Dec", v: 1520 },
  { month: "Jan", v: 1410 },
  { month: "Feb", v: 1310 },
  { month: "Mar", v: 1300 },
];

const revenueData = [
  { month: "Oct", v: 290000 },
  { month: "Nov", v: 315000 },
  { month: "Dec", v: 298000 },
  { month: "Jan", v: 340000 },
  { month: "Feb", v: 362000 },
  { month: "Mar", v: 435578 },
];

// ─── Static data ─────────────────────────────────────────────────────────────

const leadSources = [
  { name: "Social", value: 275, color: "#1B3A6B" },
  { name: "Email", value: 200, color: "#1E4FBF" },
  { name: "Call", value: 287, color: "#4A7DD4" },
  { name: "Others", value: 173, color: "#A8C0E8" },
];

const pipeline = [
  { stage: "Lead", deals: 235, value: "$420,500", pct: 38, color: "#1B3A6B" },
  {
    stage: "Qualified",
    deals: 146,
    value: "$267,800",
    pct: 24,
    color: "#1E4FBF",
  },
  {
    stage: "Proposal",
    deals: 84,
    value: "$192,400",
    pct: 18,
    color: "#4A7DD4",
  },
  {
    stage: "Negotiation",
    deals: 52,
    value: "$129,600",
    pct: 12,
    color: "#D42B2B",
  },
  {
    stage: "Closed Won",
    deals: 36,
    value: "$87,200",
    pct: 8,
    color: "#E87070",
  },
];

interface Task {
  id: string;
  title: string;
  subtitle: string;
  priority: "High" | "Medium" | "Low";
  due: string;
  done: boolean;
}

const initialTasks: Task[] = [
  {
    id: "t1",
    title: "Follow up with Acme Inc.",
    subtitle: "Send proposal and schedule meeting",
    priority: "High",
    due: "Due Today",
    done: false,
  },
  {
    id: "t2",
    title: "Prepare quarterly report",
    subtitle: "Compile sales data and forecasts",
    priority: "Medium",
    due: "Due Tomorrow",
    done: false,
  },
  {
    id: "t3",
    title: "Update customer profiles",
    subtitle: "Verify contact information and preferences",
    priority: "Low",
    due: "Due Oct 15",
    done: true,
  },
];

const leads = [
  { id: "l1", status: "success", email: "ken99@yahoo.com", amount: "$316.00" },
  { id: "l2", status: "success", email: "abe45@gmail.com", amount: "$242.00" },
  {
    id: "l3",
    status: "processing",
    email: "monserrat44@gmail.com",
    amount: "$837.00",
  },
  {
    id: "l4",
    status: "success",
    email: "silas22@gmail.com",
    amount: "$874.00",
  },
  {
    id: "l5",
    status: "failed",
    email: "carmella@hotmail.com",
    amount: "$721.00",
  },
];

// ─── Micro-components ─────────────────────────────────────────────────────────

function StatusPill({ status }: { status: string }) {
  const cfg: Record<
    string,
    { dot: string; ring: string; text: string; bg: string }
  > = {
    success: {
      dot: "bg-emerald-500",
      ring: "ring-emerald-200",
      text: "text-emerald-700",
      bg: "bg-emerald-50",
    },
    processing: {
      dot: "bg-blue-500",
      ring: "ring-blue-200",
      text: "text-blue-700",
      bg: "bg-blue-50",
    },
    failed: {
      dot: "bg-red-500",
      ring: "ring-red-200",
      text: "text-red-700",
      bg: "bg-red-50",
    },
  };
  const s = cfg[status] ?? cfg.failed;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset capitalize ${s.bg} ${s.text} ${s.ring}`}
    >
      <span className={`size-1.5 rounded-full ${s.dot}`} />
      {status}
    </span>
  );
}

function PriorityPill({ priority }: { priority: Task["priority"] }) {
  const cfg = {
    High: "bg-red-50   text-red-700   ring-red-200",
    Medium: "bg-amber-50 text-amber-700 ring-amber-200",
    Low: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${cfg[priority]}`}
    >
      {priority}
    </span>
  );
}

// ─── Inline sparkline bar chart ───────────────────────────────────────────────

interface SparkBarProps {
  data: { month: string; v: number }[];
  color: string;
  /** highlight the last bar as the "current" value */
  highlightLast?: boolean;
}

function SparkBar({ data, color, highlightLast = true }: SparkBarProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        barCategoryGap="10%"
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <CartesianGrid
          vertical={false}
          strokeDasharray="3 3"
          stroke="#f1f5f9"
        />
        <XAxis
          dataKey="month"
          tick={{ fontSize: 9, fill: "#94a3b8", fontWeight: 500 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis hide domain={["auto", "auto"]} />
        <Tooltip
          cursor={{ fill: "rgba(30,79,191,0.05)" }}
          contentStyle={{
            borderRadius: 8,
            border: "none",
            boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
            fontSize: 11,
            padding: "4px 8px",
          }}
          labelStyle={{ fontWeight: 600, color: "#1B3A6B" }}
          formatter={(v: number) => [v.toLocaleString(), ""]}
        />
        <Bar dataKey="v" radius={[3, 3, 0, 0]}>
          {data.map((_, i) => (
            <Cell
              key={i}
              fill={
                highlightLast && i === data.length - 1 ? color : `${color}55`
              }
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

// ─── KPI card with sparkline ──────────────────────────────────────────────────

function KpiCard({
  label,
  value,
  delta,
  positive,
  icon,
  sparkData,
  sparkColor,
  delay = "0ms",
}: {
  label: string;
  value: string;
  delta: string;
  positive: boolean;
  icon: React.ReactNode;
  sparkData: { month: string; v: number }[];
  sparkColor: string;
  delay?: string;
}) {
  return (
    <Card
      className="relative overflow-hidden border-0 bg-white shadow-sm ring-1 ring-slate-200/80 flex flex-col"
      style={{ animation: "fadeSlideUp 0.5s ease both", animationDelay: delay }}
    >
      {/* Left accent stripe */}
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-[#1B3A6B] to-[#1E4FBF]" />

      <CardHeader className="pb-0 pl-6 pr-5 pt-5">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-0.5">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
              {label}
            </p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-[#1B3A6B]">
              {value}
            </p>
            <div className="mt-2 flex items-center gap-1.5">
              {positive ? (
                <TrendingUp className="size-3.5 text-emerald-500" />
              ) : (
                <TrendingDown className="size-3.5 text-red-500" />
              )}
              <span
                className={`text-xs font-semibold ${positive ? "text-emerald-600" : "text-red-600"}`}
              >
                {delta}
              </span>
              <span className="text-xs text-slate-400">from last month</span>
            </div>
          </div>
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FB] text-[#1E4FBF]">
            {icon}
          </div>
        </div>
      </CardHeader>

      {/* Sparkline fills the bottom */}
      <CardContent className="flex-1 px-5">
        <div className="h-full w-full">
          <SparkBar data={sparkData} color={sparkColor} />
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Target card ──────────────────────────────────────────────────────────────

function TargetCard() {
  const pct = 48;
  const r = 26;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;

  return (
    <Card
      className="relative overflow-hidden border-0 bg-gradient-to-br from-[#1B3A6B] to-[#1E4FBF] shadow-sm"
      style={{ animation: "fadeSlideUp 0.5s ease both" }}
    >
      <CardHeader className="px-5 pb-0 pt-5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-200">
          Target Progress
        </p>
        <p className="mt-1 text-base font-bold leading-snug text-white">
          Your target is incomplete
        </p>
      </CardHeader>
      <CardContent className="px-5 pb-5">
        <div className="mt-3 flex items-center gap-4">
          <div className="relative shrink-0">
            <svg
              width="68"
              height="68"
              viewBox="0 0 68 68"
              className="-rotate-90"
            >
              <circle
                cx="34"
                cy="34"
                r={r}
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="7"
              />
              <circle
                cx="34"
                cy="34"
                r={r}
                fill="none"
                stroke="#D42B2B"
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray={`${dash} ${circ}`}
                style={{
                  transition: "stroke-dasharray 1s cubic-bezier(0.4,0,0.2,1)",
                }}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
              {pct}%
            </span>
          </div>
          <p className="text-sm leading-relaxed text-blue-100">
            You&apos;ve completed{" "}
            <span className="font-bold text-white">{pct}%</span> of the given
            target. Check your full status report.
          </p>
        </div>
      </CardContent>
      <div className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -right-2 bottom-4 size-14 rounded-full bg-white/5" />
    </Card>
  );
}

// ─── Leads by Source ──────────────────────────────────────────────────────────

function LeadsBySourceCard() {
  const total = leadSources.reduce((s, d) => s + d.value, 0);
  return (
    <Card
      className="flex flex-col border-0 bg-white shadow-sm ring-1 ring-slate-200/80"
      style={{ animation: "fadeSlideUp 0.55s ease both" }}
    >
      <CardHeader className="flex flex-row items-center justify-between px-6 pb-0 pt-5">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
            Analytics
          </p>
          <CardTitle className="mt-0.5 text-base font-bold text-[#1B3A6B]">
            Leads by Source
          </CardTitle>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="gap-1.5 border-slate-200 text-slate-500 text-xs hover:border-[#1E4FBF] hover:text-[#1E4FBF]"
        >
          <FolderUp className="size-3.5" /> Export
        </Button>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col px-6 pb-5">
        <div className="flex justify-center py-2">
          <div className="relative h-[200px] w-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={leadSources}
                  cx="50%"
                  cy="50%"
                  innerRadius={58}
                  outerRadius={90}
                  strokeWidth={4}
                  stroke="#fff"
                  dataKey="value"
                >
                  {leadSources.map((e, i) => (
                    <Cell key={i} fill={e.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: 8,
                    border: "none",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
                    fontSize: 12,
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-[#1B3A6B]">{total}</span>
              <span className="text-xs font-medium text-slate-400">
                Total Leads
              </span>
            </div>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-3">
          {leadSources.map((src) => (
            <div key={src.name} className="flex items-center gap-2.5">
              <span
                className="size-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: src.color }}
              />
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                  {src.name}
                </p>
                <p className="text-base font-bold text-[#1B3A6B]">
                  {src.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Tasks ────────────────────────────────────────────────────────────────────

function TasksCard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const toggle = (id: string) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );

  return (
    <Card
      className="flex flex-col border-0 bg-white shadow-sm ring-1 ring-slate-200/80"
      style={{ animation: "fadeSlideUp 0.60s ease both" }}
    >
      <CardHeader className="flex flex-row items-start justify-between px-6 pb-0 pt-5">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
            To-Do
          </p>
          <CardTitle className="mt-0.5 text-base font-bold text-[#1B3A6B]">
            Tasks
          </CardTitle>
          <CardDescription className="mt-0.5 text-xs text-slate-400">
            Track and manage upcoming tasks
          </CardDescription>
        </div>
        <Button
          size="sm"
          className="gap-1.5 bg-[#D42B2B] text-white shadow-sm text-xs hover:bg-[#B52424] transition-all duration-200 hover:shadow-md"
        >
          <CirclePlus className="size-3.5" /> Add Task
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col gap-2.5 px-6 pb-5 pt-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-start gap-3 rounded-xl border p-3.5 transition-all duration-200
              ${
                task.done
                  ? "border-slate-100 bg-slate-50/70"
                  : "border-slate-200 bg-white hover:border-[#1E4FBF]/30 hover:shadow-sm"
              }`}
          >
            <Checkbox
              checked={task.done}
              onCheckedChange={() => toggle(task.id)}
              className="mt-0.5 data-[state=checked]:bg-[#1E4FBF] data-[state=checked]:border-[#1E4FBF]"
            />
            <div className="min-w-0 flex-1 space-y-1">
              <p
                className={`text-sm font-semibold leading-tight ${task.done ? "line-through text-slate-400" : "text-slate-700"}`}
              >
                {task.title}
              </p>
              <p
                className={`text-xs leading-relaxed ${task.done ? "line-through text-slate-300" : "text-slate-400"}`}
              >
                {task.subtitle}
              </p>
              <div className="flex items-center gap-2 pt-0.5">
                <PriorityPill priority={task.priority} />
                <span className="text-xs text-slate-400">{task.due}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// ─── Sales Pipeline ───────────────────────────────────────────────────────────

function SalesPipelineCard() {
  return (
    <Card
      className="flex flex-col border-0 bg-white shadow-sm ring-1 ring-slate-200/80"
      style={{ animation: "fadeSlideUp 0.65s ease both" }}
    >
      <CardHeader className="px-6 pb-0 pt-5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
          Overview
        </p>
        <CardTitle className="mt-0.5 text-base font-bold text-[#1B3A6B]">
          Sales Pipeline
        </CardTitle>
        <CardDescription className="text-xs text-slate-400">
          Current deals distribution
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-5 pt-4">
        <div className="mb-5 flex h-3 w-full gap-px overflow-hidden rounded-full">
          {pipeline.map((p) => (
            <div
              key={p.stage}
              className="h-full first:rounded-l-full last:rounded-r-full"
              style={{ width: `${p.pct}%`, backgroundColor: p.color }}
            />
          ))}
        </div>
        <div className="space-y-3.5">
          {pipeline.map((p) => (
            <div key={p.stage} className="flex items-center gap-3">
              <span
                className="size-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: p.color }}
              />
              <div className="flex flex-1 items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-700">
                    {p.stage}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {p.deals} deals · {p.value}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <div
                    className="w-20 overflow-hidden rounded-full bg-slate-100"
                    style={{ height: 6 }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${p.pct}%`, backgroundColor: p.color }}
                    />
                  </div>
                  <span className="w-7 text-right text-xs font-bold text-slate-500">
                    {p.pct}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Leads Table ──────────────────────────────────────────────────────────────

function LeadsTable() {
  const [filter, setFilter] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const filtered = leads.filter(
    (l) =>
      l.email.toLowerCase().includes(filter.toLowerCase()) ||
      l.status.toLowerCase().includes(filter.toLowerCase()),
  );

  const toggleRow = (id: string) =>
    setSelected((prev) => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });

  const allChecked =
    filtered.length > 0 && filtered.every((l) => selected.has(l.id));
  const toggleAll = () =>
    allChecked
      ? setSelected(new Set())
      : setSelected(new Set(filtered.map((l) => l.id)));

  return (
    <Card
      className="col-span-full border-0 bg-white shadow-sm ring-1 ring-slate-200/80"
      style={{ animation: "fadeSlideUp 0.70s ease both" }}
    >
      <CardHeader className="flex flex-row items-center justify-between px-6 pb-0 pt-5">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
            Records
          </p>
          <CardTitle className="mt-0.5 text-base font-bold text-[#1B3A6B]">
            Leads
          </CardTitle>
        </div>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Filter leads..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="h-8 w-52 border-slate-200 text-xs focus-visible:ring-[#1E4FBF]/30"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-8 gap-1.5 border-slate-200 text-xs"
              >
                Columns <ChevronDown className="size-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="text-sm">
              <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Status</DropdownMenuItem>
              <DropdownMenuItem>Email</DropdownMenuItem>
              <DropdownMenuItem>Amount</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-5 pt-4">
        <div className="overflow-hidden rounded-xl border border-slate-100">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-100 bg-slate-50/80 hover:bg-slate-50/80">
                <TableHead className="w-10 pl-4">
                  <Checkbox
                    checked={allChecked}
                    onCheckedChange={toggleAll}
                    aria-label="Select all"
                    className="data-[state=checked]:bg-[#1E4FBF] data-[state=checked]:border-[#1E4FBF]"
                  />
                </TableHead>
                <TableHead className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Status
                </TableHead>
                <TableHead className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  <button className="flex items-center gap-1 transition-colors hover:text-[#1B3A6B]">
                    Email <ChevronDown className="size-3" />
                  </button>
                </TableHead>
                <TableHead className="text-right text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Amount
                </TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((lead, idx) => (
                <TableRow
                  key={lead.id}
                  data-state={selected.has(lead.id) ? "selected" : undefined}
                  className={`cursor-pointer border-slate-100 transition-colors
                    ${selected.has(lead.id) ? "bg-[#EEF3FB]" : "hover:bg-slate-50/60"}`}
                  style={{
                    animation: "fadeSlideUp 0.4s ease both",
                    animationDelay: `${idx * 50}ms`,
                  }}
                >
                  <TableCell className="pl-4">
                    <Checkbox
                      checked={selected.has(lead.id)}
                      onCheckedChange={() => toggleRow(lead.id)}
                      aria-label="Select row"
                      className="data-[state=checked]:bg-[#1E4FBF] data-[state=checked]:border-[#1E4FBF]"
                    />
                  </TableCell>
                  <TableCell>
                    <StatusPill status={lead.status} />
                  </TableCell>
                  <TableCell className="text-sm font-medium text-slate-600">
                    {lead.email}
                  </TableCell>
                  <TableCell className="text-right text-sm font-bold text-[#1B3A6B]">
                    {lead.amount}
                  </TableCell>
                  <TableCell className="pr-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="size-7 p-0 text-slate-400 hover:bg-[#EEF3FB] hover:text-[#1B3A6B]"
                        >
                          <Ellipsis className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="text-sm">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Edit lead</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600 focus:bg-red-50 focus:text-red-600">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs text-slate-400">
            {selected.size} of {filtered.length} row(s) selected
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled
              className="h-7 border-slate-200 text-xs"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled
              className="h-7 border-slate-200 text-xs"
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function CRMDashboard() {
  return (
    <section className="h-[92vh] bg-primary-cbe-50/30 overflow-hidden overflow-clip overflow-y-auto">
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>

      <div className="mx-auto max-w-screen-2xl space-y-5 px-6 py-7">
        {/* ── Header ── */}
        <div className="fm-a fm-d0 flex items-center justify-between">
          <div>
            <h1 className="text-[22px] font-bold tracking-tight text-slate-900">
              Performance Overview
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
        {/* KPI row — all 4 cards equal height */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <TargetCard />
          <KpiCard
            label="Total Customers"
            value="1,890"
            delta="+10.4%"
            positive
            icon={<Users className="size-5" />}
            sparkData={customersData}
            sparkColor="#1E4FBF"
            delay="80ms"
          />
          <KpiCard
            label="Total Deals"
            value="1,300"
            delta="-0.8%"
            positive={false}
            icon={<BriefcaseBusiness className="size-5" />}
            sparkData={dealsData}
            sparkColor="#D42B2B"
            delay="140ms"
          />
          <KpiCard
            label="Total Revenue"
            value="$435,578"
            delta="+20.1%"
            positive
            icon={<WalletMinimal className="size-5" />}
            sparkData={revenueData}
            sparkColor="#1B3A6B"
            delay="200ms"
          />
        </div>

        {/* Middle row */}
        <div className="grid gap-4 xl:grid-cols-3">
          <LeadsBySourceCard />
          <TasksCard />
          <SalesPipelineCard />
        </div>

        {/* Leads table */}
        <div className="grid grid-cols-1">
          <LeadsTable />
        </div>

        <p className="pb-2 text-center text-[11px] text-slate-300">
          © {new Date().getFullYear()} Optimum ERP Systems Ltd · Nairobi, Kenya
        </p>
      </div>
    </section>
  );
}
