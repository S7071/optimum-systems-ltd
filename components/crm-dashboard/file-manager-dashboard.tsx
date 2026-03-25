"use client";

import { useState, useEffect, useRef } from "react";
import {
  FileText,
  ImageIcon,
  Video,
  File,
  Folder,
  Upload,
  Star,
  ChevronRight,
  MoreHorizontal,
  MoreVertical,
  ArrowRight,
  Calendar,
  Film,
  HardDrive,
  TrendingUp,
  Clock,
  ArrowUpRight,
  UploadCloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";
import { usePathname, useRouter } from "next/navigation";

// ─── Animated Counter ─────────────────────────────────────────────────────────
function AnimatedCounter({
  value,
  duration = 1200,
}: {
  value: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [value, duration]);

  return <>{count.toLocaleString()}</>;
}

// ─── Animated Bar ─────────────────────────────────────────────────────────────
function AnimatedBar({
  percent,
  color,
  delay = 0,
}: {
  percent: number;
  color: string;
  delay?: number;
}) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(percent), delay + 200);
    return () => clearTimeout(t);
  }, [percent, delay]);
  return (
    <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
      <div
        className={`h-full rounded-full ${color}`}
        style={{
          width: `${width}%`,
          transition: `width 1s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
        }}
      />
    </div>
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────
interface StorageCategory {
  label: string;
  count: number;
  used: string;
  percent: number;
  icon: React.ReactNode;
  iconBg: string;
  barColor: string;
  textColor: string;
  accentColor: string;
  delay: number;
}
interface FolderItem {
  name: string;
  items: number;
  lastUpdate: string;
  starred: boolean;
  size: string;
}
interface RecentFile {
  name: string;
  size: string;
  date: string;
  type: "doc" | "image" | "video" | "other";
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const storageCategories: StorageCategory[] = [
  {
    label: "Documents",
    count: 1390,
    used: "2.1 GB used",
    percent: 35,
    icon: <FileText className="size-5" />,
    iconBg: "bg-blue-50 text-blue-800",
    barColor: "bg-blue-800",
    textColor: "text-blue-800",
    accentColor: "bg-blue-800",
    delay: 0,
  },
  {
    label: "Images",
    count: 5678,
    used: "3.8 GB used",
    percent: 62,
    icon: <ImageIcon className="size-5" />,
    iconBg: "bg-emerald-50 text-emerald-700",
    barColor: "bg-emerald-600",
    textColor: "text-emerald-700",
    accentColor: "bg-emerald-600",
    delay: 80,
  },
  {
    label: "Videos",
    count: 901,
    used: "7.5 GB used",
    percent: 89,
    icon: <Video className="size-5" />,
    iconBg: "bg-red-50 text-red-600",
    barColor: "bg-red-600",
    textColor: "text-red-600",
    accentColor: "bg-red-600",
    delay: 160,
  },
  {
    label: "Others",
    count: 234,
    used: "1.2 GB used",
    percent: 28,
    icon: <File className="size-5" />,
    iconBg: "bg-amber-50 text-amber-600",
    barColor: "bg-amber-500",
    textColor: "text-amber-600",
    accentColor: "bg-amber-500",
    delay: 240,
  },
];

const folders: FolderItem[] = [
  {
    name: "Documents",
    items: 120,
    lastUpdate: "10 days ago",
    starred: true,
    size: "2.1 GB",
  },
  {
    name: "Images",
    items: 250,
    lastUpdate: "2 days ago",
    starred: false,
    size: "3.8 GB",
  },
  {
    name: "Downloads",
    items: 80,
    lastUpdate: "Yesterday",
    starred: false,
    size: "890 MB",
  },
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const rawTransfer = [
  { d: 240, m: 120 },
  { d: 390, m: 260 },
  { d: 320, m: 180 },
  { d: 110, m: 250 },
  { d: 280, m: 175 },
  { d: 290, m: 190 },
  { d: 170, m: 130 },
  { d: 410, m: 285 },
  { d: 240, m: 200 },
  { d: 380, m: 240 },
  { d: 300, m: 215 },
  { d: 420, m: 270 },
];
const transferData = months.map((month, i) => ({
  month,
  desktop: rawTransfer[i].d,
  mobile: rawTransfer[i].m,
}));

const recentFiles: RecentFile[] = [
  {
    name: "project-proposal.docx",
    size: "2.38 MB",
    date: "Apr 15, 2025",
    type: "doc",
  },
  {
    name: "company-logo.png",
    size: "1.14 MB",
    date: "Apr 14, 2025",
    type: "image",
  },
  {
    name: "presentation.pptx",
    size: "5.34 MB",
    date: "Apr 13, 2025",
    type: "doc",
  },
  { name: "budget.xlsx", size: "957.03 KB", date: "Mar 12, 2025", type: "doc" },
  {
    name: "product-video.mp4",
    size: "150.68 MB",
    date: "Apr 11, 2025",
    type: "video",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function FileTypeIcon({ type }: { type: RecentFile["type"] }) {
  if (type === "image")
    return <ImageIcon className="size-4 shrink-0 text-emerald-600" />;
  if (type === "video")
    return <Film className="size-4 shrink-0 text-red-600" />;
  return <FileText className="size-4 shrink-0 text-blue-800" />;
}
function fileBadgeBg(type: RecentFile["type"]) {
  if (type === "image") return "bg-emerald-50";
  if (type === "video") return "bg-red-50";
  return "bg-blue-50";
}
function filePillStyle(type: RecentFile["type"]) {
  if (type === "image") return "bg-emerald-50 text-emerald-700";
  if (type === "video") return "bg-red-50 text-red-700";
  return "bg-blue-50 text-blue-800";
}

// ─── Custom Chart Tooltip ─────────────────────────────────────────────────────
const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
}) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-xl shadow-slate-100">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </p>
      {payload.map((p) => (
        <div key={p.name} className="flex items-center gap-2 text-sm">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: p.color }}
          />
          <span className="capitalize text-slate-500">{p.name}:</span>
          <span className="font-semibold text-slate-800">{p.value} MB</span>
        </div>
      ))}
    </div>
  );
};

// ─── Storage Card ─────────────────────────────────────────────────────────────
function StorageCard({ cat, index }: { cat: StorageCategory; index: number }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-slate-200">
      {/* Top accent bar */}
      <div className={`h-1 w-full ${cat.accentColor}`} />
      <div className="flex flex-1 flex-col p-6 pb-0">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">{cat.label}</p>
            <p className="mt-1.5 text-3xl font-bold tracking-tight text-slate-900">
              <AnimatedCounter
                value={cat.count}
                duration={1000 + index * 150}
              />
            </p>
          </div>
          <div
            className={`flex size-10 items-center justify-center rounded-xl ${cat.iconBg}`}
          >
            {cat.icon}
          </div>
        </div>
        <div className="mt-5 space-y-2">
          <AnimatedBar
            percent={cat.percent}
            color={cat.barColor}
            delay={cat.delay + 400}
          />
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">{cat.used}</span>
            <span className={`text-xs font-semibold ${cat.textColor}`}>
              {cat.percent}%
            </span>
          </div>
        </div>
      </div>
      <div className="mt-5 border-t border-slate-50 px-6">
        <a
          href="#"
          className="flex items-center gap-1.5 py-3.5 text-sm font-medium text-blue-800 transition-all hover:gap-2.5 hover:text-blue-900"
        >
          View more <ArrowRight className="size-3.5" />
        </a>
      </div>
    </div>
  );
}

// ─── Folder Card ─────────────────────────────────────────────────────────────
function FolderCard({ folder }: { folder: FolderItem }) {
  const [starred, setStarred] = useState(folder.starred);
  return (
    <div className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-slate-200">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-xl bg-amber-50">
            <Folder className="size-4 text-amber-600" />
          </div>
          <span className="text-sm font-semibold text-slate-800">
            {folder.name}
          </span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-slate-100 hover:text-slate-600"
            >
              <MoreVertical className="size-3.5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="rounded-xl">
            <DropdownMenuItem>Open</DropdownMenuItem>
            <DropdownMenuItem>Rename</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5">
        <span className="text-sm font-medium text-slate-700">
          {folder.items} items
        </span>
        <span className="ml-2 text-xs text-slate-400">· {folder.size}</span>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Clock className="size-3" />
          {folder.lastUpdate}
        </div>
        <button
          onClick={() => setStarred((s) => !s)}
          className="rounded-lg p-1.5 transition-colors hover:bg-slate-100"
        >
          <Star
            className={`size-4 transition-colors ${starred ? "fill-amber-400 text-amber-400" : "text-slate-300 hover:text-slate-400"}`}
          />
        </button>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function FileManager() {
  const router = useRouter();
  const pathname = usePathname();
    // const userId = useMemo(() => getUserIdFromPath(pathname), [pathname]);
  return (
    <div className="h-[92vh] bg-primary-cbe-50/30 overflow-hidden overflow-clip overflow-y-auto">
      <style>{`
        @keyframes fm-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fm-a  { opacity: 0; animation: fm-up 0.45s cubic-bezier(0.2,0,0,1) forwards; }
        .fm-d0 { animation-delay: 0ms; }
        .fm-d1 { animation-delay: 60ms; }
        .fm-d2 { animation-delay: 120ms; }
        .fm-d3 { animation-delay: 180ms; }
        .fm-d4 { animation-delay: 260ms; }
        .fm-d5 { animation-delay: 340ms; }
      `}</style>

      <div className="mx-auto max-w-screen-2xl space-y-5 px-6 py-7">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="fm-a fm-d0 flex items-center justify-between">
          <div>
            <h1 className="text-[22px] font-bold tracking-tight text-slate-900">
              File Manager
            </h1>
            <p className="mt-0.5 text-sm text-slate-400">
              Manage and monitor all your stored assets
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
            <Button variant="outline" size="sm" onClick={() => {
              router.push(`${pathname}/explorer`);
            }}>
              <ArrowUpRight className="size-3.5" /> Browse
            </Button>
            <Button variant="default" size="sm">
              <UploadCloud className="size-3.5" /> Upload
            </Button>
          </div>
        </div>

        {/* ── Storage Category Cards ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {storageCategories.map((cat, i) => (
            <div key={cat.label} className={`fm-a fm-d${i + 1}`}>
              <StorageCard cat={cat} index={i} />
            </div>
          ))}
        </div>

        {/* ── Folders + Storage ───────────────────────────────────────────── */}
        <div className="fm-a fm-d3 grid gap-4 lg:grid-cols-4">
          <div className="lg:col-span-3 grid gap-4 sm:grid-cols-3">
            {folders.map((f) => (
              <FolderCard key={f.name} folder={f} />
            ))}
          </div>

          {/* Storage Space Card */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-100">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Storage Space
                </p>
                <p className="mt-0.5 text-xs text-slate-400">
                  Remaining capacity
                </p>
              </div>
              <div className="flex size-9 items-center justify-center rounded-xl bg-blue-50">
                <HardDrive className="size-4 text-blue-800" />
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-2xl font-bold text-slate-900">1.8</span>
                  <span className="ml-1 text-sm text-slate-400">GB</span>
                </div>
                <span className="text-xs text-slate-400">of 3 GB</span>
              </div>
              <div className="mt-2.5">
                <AnimatedBar percent={60} color="bg-blue-800" delay={500} />
              </div>
              <div className="mt-2 flex items-center justify-between text-xs">
                <span className="text-slate-400">1.2 GB free</span>
                <span className="font-semibold text-blue-800">60%</span>
              </div>
            </div>

            <div className="mt-4 space-y-2.5">
              {[
                { label: "Documents", pct: 35, color: "bg-blue-800" },
                { label: "Images", pct: 62, color: "bg-emerald-500" },
                { label: "Videos", pct: 89, color: "bg-red-500" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className="w-16 shrink-0 text-xs text-slate-400">
                    {s.label}
                  </span>
                  <div className="flex-1">
                    <AnimatedBar percent={s.pct} color={s.color} delay={600} />
                  </div>
                  <span className="w-8 text-right text-xs font-medium text-slate-500">
                    {s.pct}%
                  </span>
                </div>
              ))}
            </div>

            <button className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 py-2.5 text-xs font-semibold text-slate-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800">
              Manage Storage <ChevronRight className="size-3.5" />
            </button>
          </div>
        </div>

        {/* ── Chart + Recent Files ─────────────────────────────────────────── */}
        <div className="fm-a fm-d4 grid gap-4 lg:grid-cols-5">
          {/* Monthly Transfer */}
          <div className="lg:col-span-3 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-100">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2.5">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-blue-50">
                    <TrendingUp className="size-4 text-blue-800" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800">
                    Monthly File Transfer
                  </p>
                </div>
                <p className="mt-1 pl-10 text-xs text-slate-400">
                  Last 28 days
                </p>
              </div>
              <button className="flex items-center gap-2 rounded-xl border border-slate-200 px-3.5 py-2 text-xs font-medium text-slate-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800">
                <Calendar className="size-3.5" />
                23 Feb 2026 – 22 Mar 2026
              </button>
            </div>

            <div className="mt-4 flex items-center gap-5 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="inline-block h-2.5 w-2.5 rounded-sm bg-blue-900" />
                Desktop
              </div>
              <div className="flex items-center gap-1.5">
                <span className="inline-block h-2.5 w-2.5 rounded-sm bg-red-500" />
                Mobile
              </div>
            </div>

            <div className="mt-3">
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={transferData} barSize={14} barCategoryGap="28%">
                  <CartesianGrid vertical={false} stroke="#f1f5f9" />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tick={{
                      fontSize: 11,
                      fill: "#94a3b8",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  />
                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={{ fill: "#f8fafc", radius: 6 }}
                  />
                  <Bar dataKey="desktop" name="desktop" radius={[4, 4, 2, 2]}>
                    {transferData.map((_, idx) => (
                      <Cell
                        key={idx}
                        fill={
                          idx === transferData.length - 1
                            ? "#1e3a8a"
                            : "#dbeafe"
                        }
                      />
                    ))}
                  </Bar>
                  <Bar dataKey="mobile" name="mobile" radius={[4, 4, 2, 2]}>
                    {transferData.map((_, idx) => (
                      <Cell
                        key={idx}
                        fill={
                          idx === transferData.length - 1
                            ? "#dc2626"
                            : "#fee2e2"
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recently Uploaded Files */}
          <div className="lg:col-span-2 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-100">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-800">
                Recently Uploaded
              </p>
              <button className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800">
                View All <ChevronRight className="size-3" />
              </button>
            </div>

            <div className="mt-4 space-y-0.5">
              {recentFiles.map((file) => (
                <div
                  key={file.name}
                  className="group flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-50"
                >
                  <div
                    className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${fileBadgeBg(file.type)}`}
                  >
                    <FileTypeIcon type={file.type} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-medium text-slate-700 group-hover:text-blue-800">
                      {file.name}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-400">{file.date}</p>
                  </div>
                  <span className="shrink-0 text-xs font-medium text-slate-400">
                    {file.size}
                  </span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        <MoreHorizontal className="size-3.5 text-slate-400" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="rounded-xl">
                      <DropdownMenuItem>Download</DropdownMenuItem>
                      <DropdownMenuItem>Rename</DropdownMenuItem>
                      <DropdownMenuItem>Share</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>

            {/* Upload Drop Zone */}
            <div className="mt-4 cursor-pointer rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/60 px-4 py-5 text-center transition-all hover:border-red-300 hover:bg-red-50/40">
              <div className="mx-auto flex size-9 items-center justify-center rounded-xl bg-white shadow-sm">
                <Upload className="size-4 text-slate-400" />
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Drop files here or{" "}
                <span className="font-semibold text-red-600 hover:text-red-700">
                  browse to upload
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* ── Full Table ───────────────────────────────────────────────────── */}
        <div className="fm-a fm-d5 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-100">
          <div className="flex items-center justify-between border-b border-slate-50 px-6 py-4">
            <div>
              <p className="text-sm font-semibold text-slate-800">
                All Recent Files
              </p>
              <p className="mt-0.5 text-xs text-slate-400">Full activity log</p>
            </div>
            <Button
              variant="ghost"
              className="h-8 gap-1.5 rounded-xl px-3 text-xs font-semibold text-blue-800 hover:bg-blue-50"
            >
              View All <ChevronRight className="size-3.5" />
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="border-slate-50 hover:bg-transparent">
                <TableHead className="pl-6 text-xs font-semibold uppercase tracking-wider text-slate-400 w-[320px]">
                  Name
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Size
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Upload Date
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Type
                </TableHead>
                <TableHead className="pr-6 text-right text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentFiles.map((file) => (
                <TableRow
                  key={file.name}
                  className="group border-slate-50 transition-colors hover:bg-slate-50/80"
                >
                  <TableCell className="pl-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${fileBadgeBg(file.type)}`}
                      >
                        <FileTypeIcon type={file.type} />
                      </div>
                      <a
                        href="#"
                        className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-800 hover:underline"
                      >
                        {file.name}
                      </a>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 text-sm text-slate-500">
                    {file.size}
                  </TableCell>
                  <TableCell className="py-4 text-sm text-slate-500">
                    {file.date}
                  </TableCell>
                  <TableCell className="py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${filePillStyle(file.type)}`}
                    >
                      {file.type}
                    </span>
                  </TableCell>
                  <TableCell className="pr-6 py-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="h-8 w-8 rounded-lg p-0 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-slate-100"
                        >
                          <MoreHorizontal className="size-4 text-slate-400" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="rounded-xl">
                        <DropdownMenuItem>Download</DropdownMenuItem>
                        <DropdownMenuItem>Rename</DropdownMenuItem>
                        <DropdownMenuItem>Share</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
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
      </div>
    </div>
  );
}
