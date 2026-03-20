"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Brand tokens (extend your Tailwind config with these if preferred) ───────
const C = {
  blueDeep: "#080817",
  blueMid: "#201e5c",
  blueLight: "#3e3ab1",
  blueTint: "#f4f4fc",
  red: "#ed1c24",
  redHover: "#B01F1F",
} as const;

// ─── Types ────────────────────────────────────────────────────────────────────
type WorkType = "Remote" | "Onsite" | "Hybrid";

type Job = {
  id: string;
  title: string;
  location: string;
  department: string;
  workType?: WorkType;
  isNew?: boolean;
  href?: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const JOBS: Job[] = [
  /* ENGINEERING & PLATFORM */
  {
    id: "eng-1",
    title: "Senior Software Engineer (Platform)",
    location: "Kenya, Nairobi",
    department: "Engineering & Development",
    workType: "Remote",
    isNew: true,
    href: "#",
  },
  {
    id: "eng-2",
    title: "Backend Engineer (Security Systems)",
    location: "Kenya, Nairobi",
    department: "Engineering & Development",
    workType: "Remote",
    href: "#",
  },
  {
    id: "eng-3",
    title: "Frontend Engineer (Security Dashboards)",
    location: "Kenya, Nairobi",
    department: "Engineering & Development",
    workType: "Remote",
    href: "#",
  },
  {
    id: "eng-4",
    title: "Detection Engineer",
    location: "Kenya, Nairobi",
    department: "Engineering & Development",
    workType: "Remote",
    href: "#",
  },
  {
    id: "eng-5",
    title: "Security Research Engineer",
    location: "Kenya, Nairobi",
    department: "Engineering & Development",
    workType: "Remote",
    href: "#",
  },

  /* IT & INFRASTRUCTURE */
  {
    id: "infra-1",
    title: "Site Reliability Engineer (SRE)",
    location: "Kenya, Nairobi",
    department: "IT & Infrastructure",
    workType: "Remote",
    href: "#",
  },
  {
    id: "infra-2",
    title: "Cloud Infrastructure Engineer",
    location: "Kenya, Nairobi",
    department: "IT & Infrastructure",
    workType: "Remote",
    href: "#",
  },
  {
    id: "infra-3",
    title: "DevSecOps Engineer",
    location: "Kenya, Nairobi",
    department: "IT & Infrastructure",
    workType: "Remote",
    isNew: true,
    href: "#",
  },

  /* CYBER SECURITY */
  {
    id: "soc-1",
    title: "SOC Analyst (Tier 1)",
    location: "Kenya, Nairobi",
    department: "Cyber Security",
    workType: "Onsite",
    href: "#",
  },
  {
    id: "soc-2",
    title: "SOC Analyst (Tier 2)",
    location: "Kenya, Nairobi",
    department: "Cyber Security",
    workType: "Onsite",
    href: "#",
  },
  {
    id: "soc-3",
    title: "Incident Response Analyst",
    location: "Kenya, Nairobi",
    department: "Cyber Security",
    workType: "Remote",
    href: "#",
  },
  {
    id: "soc-4",
    title: "Threat Intelligence Analyst",
    location: "Kenya, Nairobi",
    department: "Cyber Security",
    workType: "Remote",
    href: "#",
  },
  {
    id: "soc-5",
    title: "SOC Manager",
    location: "Kenya, Nairobi",
    department: "Cyber Security",
    workType: "Onsite",
    href: "#",
  },

  /* PRODUCT MANAGEMENT */
  {
    id: "pm-1",
    title: "Product Manager (Medusa Platform)",
    location: "Kenya, Nairobi",
    department: "Product Management",
    workType: "Hybrid",
    isNew: true,
    href: "#",
  },
  {
    id: "pm-2",
    title: "Technical Product Manager (Security)",
    location: "Kenya, Nairobi",
    department: "Product Management",
    workType: "Remote",
    href: "#",
  },
  {
    id: "pm-3",
    title: "Product Operations Manager",
    location: "Kenya, Nairobi",
    department: "Product Management",
    workType: "Remote",
    href: "#",
  },

  /* DESIGN & UX */
  {
    id: "ux-1",
    title: "Product Designer (UX/UI)",
    location: "Kenya, Nairobi",
    department: "Design & User Experience",
    workType: "Remote",
    isNew: true,
    href: "#",
  },

  /* SALES & MARKETING */
  {
    id: "sales-1",
    title: "Enterprise Sales Executive",
    location: "Kenya, Nairobi",
    department: "Sales & Marketing",
    workType: "Hybrid",
    href: "#",
  },
  {
    id: "sales-2",
    title: "Solutions Engineer (Pre-Sales)",
    location: "Kenya, Nairobi",
    department: "Sales & Marketing",
    workType: "Remote",
    href: "#",
  },
  {
    id: "sales-3",
    title: "Customer Success Manager",
    location: "Kenya, Nairobi",
    department: "Sales & Marketing",
    workType: "Onsite",
    href: "#",
  },
  {
    id: "sales-4",
    title: "Account Manager (Enterprise)",
    location: "Kenya, Nairobi",
    department: "Sales & Marketing",
    workType: "Hybrid",
    href: "#",
  },

  /* LEGAL & COMPLIANCE */
  {
    id: "grc-1",
    title: "GRC Analyst",
    location: "Kenya, Nairobi",
    department: "Legal & Compliance",
    workType: "Remote",
    href: "#",
  },
  {
    id: "grc-2",
    title: "Compliance & Audit Manager",
    location: "Kenya, Nairobi",
    department: "Legal & Compliance",
    workType: "Hybrid",
    href: "#",
  },
  {
    id: "legal-1",
    title: "Legal Counsel (Technology & Data)",
    location: "Kenya, Nairobi",
    department: "Legal & Compliance",
    workType: "Onsite",
    href: "#",
  },

  /* OPERATIONS & LEADERSHIP */
  {
    id: "ops-1",
    title: "Head of Security Operations",
    location: "Kenya, Nairobi",
    department: "Operations & Leadership",
    workType: "Onsite",
    isNew: true,
    href: "#",
  },
  {
    id: "ops-2",
    title: "Chief Technology Officer (CTO)",
    location: "Kenya, Nairobi",
    department: "Operations & Leadership",
    workType: "Onsite",
    href: "#",
  },
];

const DEPT_FILTERS: { label: string; value: string }[] = [
  { label: "All Roles", value: "all" },
  { label: "Engineering", value: "Engineering & Development" },
  { label: "IT & Infra", value: "IT & Infrastructure" },
  { label: "Cyber Security", value: "Cyber Security" },
  { label: "Product", value: "Product Management" },
  { label: "Design", value: "Design & User Experience" },
  { label: "Sales", value: "Sales & Marketing" },
  { label: "Legal", value: "Legal & Compliance" },
  { label: "Operations", value: "Operations & Leadership" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function WorkTypeBadge({ type }: { type?: WorkType }) {
  if (!type) return null;
  const styles: Record<WorkType, React.CSSProperties> = {
    Remote: { color: "#1A7A4A", background: "#E8F7EF" },
    Onsite: { color: C.blueMid, background: C.blueTint },
    Hybrid: { color: "#7A4A1A", background: "#FFF0E0" },
  };
  return (
    <span
      className="inline-block rounded px-2 py-0.5 text-[11px] font-medium leading-none"
      style={styles[type]}
    >
      {type}
    </span>
  );
}

function JobCard({ job }: { job: Job }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={job.href ?? "#"}>
      <div
        className={cn(
          "relative flex flex-col gap-3 rounded-xl border bg-white p-5 transition-all duration-200 overflow-hidden",
          `${hovered ? "border-primary-cbe-200/50 shadow-primary-cta -translate-y-0.5" : "border-[#E4E8F2] shadow-none translate-y-0"}`,
        )}
        // className="relative flex flex-col gap-3 rounded-xl border bg-white p-5 transition-all duration-200"
        //         {`
        //   border
        //   ${hovered ? "border-blue-300 shadow-[0_8px_32px_rgba(26,74,156,0.12)] -translate-y-0.5" : "border-[#E4E8F2] shadow-none translate-y-0"}
        //   overflow-hidden
        //   transition-all
        // `}
        // style={{
        //   borderColor: hovered ? C.blueLight : "#E4E8F2",
        //   boxShadow: hovered ? "0 8px 32px rgba(26,74,156,0.12)" : "none",
        //   transform: hovered ? "translateY(-2px)" : "translateY(0)",
        //   overflow: "hidden",
        // }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Top accent bar */}
        <div
          className="absolute inset-x-0 top-0 h-[3px] transition-transform duration-300 origin-left"
          style={{
            background: `linear-gradient(90deg, ${C.blueMid}, ${C.blueLight})`,
            transform: hovered ? "scaleX(1)" : "scaleX(0)",
          }}
        />

        {/* Title row */}
        <div className="flex items-start justify-between gap-2">
          <h3
            className="flex-1 text-sm font-bold leading-snug transition-colors duration-200"
            style={{
              color: hovered ? C.blueDeep : "#0F1117",
            }}
          >
            {job.title}
          </h3>
          {job.isNew && (
            <span
              className="mt-0.5 shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white"
              style={{ background: C.red, letterSpacing: "0.8px" }}
            >
              New
            </span>
          )}
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1 text-[11.5px] text-gray-400">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path
                d="M5.5 1C3.567 1 2 2.567 2 4.5 2 7.25 5.5 10 5.5 10S9 7.25 9 4.5C9 2.567 7.433 1 5.5 1z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <circle
                cx="5.5"
                cy="4.5"
                r="1.2"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
            {job.location}
          </span>
          <span className="h-[3px] w-[3px] rounded-full bg-gray-300" />
          <WorkTypeBadge type={job.workType} />
        </div>

        {/* Footer row */}
        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="text-[11.5px] font-light text-gray-400">
            Full-time
          </span>
          <span
            className="flex items-center gap-1 text-xs font-semibold transition-all duration-200"
            style={{
              color: C.red,
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateX(0)" : "translateX(-8px)",
            }}
          >
            Apply now
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M2.5 6.5h8M7.5 3.5l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function SiteCareer() {
  const [activeDept, setActiveDept] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const grouped = useMemo(() => {
    const map = new Map<string, Job[]>();
    for (const job of JOBS) {
      if (!map.has(job.department)) map.set(job.department, []);
      map.get(job.department)!.push(job);
    }
    return map;
  }, []);

  const visibleSections = useMemo(() => {
    const lc = searchTerm.toLowerCase();
    return Array.from(grouped.entries())
      .filter(([dept]) => activeDept === "all" || dept === activeDept)
      .map(([dept, jobs]) => ({
        dept,
        jobs: jobs.filter((j) => j.title.toLowerCase().includes(lc)),
      }))
      .filter(({ jobs }) => jobs.length > 0);
  }, [grouped, activeDept, searchTerm]);

  const totalVisible = useMemo(
    () => visibleSections.reduce((n, s) => n + s.jobs.length, 0),
    [visibleSections],
  );

  return (
    <section className="w-full min-h-screen" style={{ background: "#F5F7FC" }}>
      {/* ── HERO BAND ──────────────────────────────────────────────────── */}
      <div
        className="relative w-full overflow-hidden px-6 pb-12 pt-14 sm:px-16"
        style={{
          background: `linear-gradient(135deg, ${C.blueDeep} 0%, ${C.blueMid} 60%, ${C.blueLight} 100%)`,
        }}
      >
        {/* Subtle grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative mx-auto max-w-5xl">
          <p className="mb-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[1.5px] text-primary-cta">
            <span className="block h-px w-4 bg-primary-cta" />
            We&apos;re Hiring
          </p>
          <h1
            className="mb-3 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl"
            style={{ letterSpacing: "-1px" }}
          >
            Open <span style={{ color: C.red }}>Positions</span>
          </h1>
          <p className="mb-8 max-w-md text-sm font-light leading-relaxed text-white/65">
            Join a team building the future of enterprise security. We&apos;re
            looking for exceptional people across engineering, product, and
            operations.
          </p>

          {/* Stats */}
          <div className="flex gap-8">
            {[
              { value: totalVisible, label: "Open Roles" },
              { value: grouped.size, label: "Departments" },
              { value: "50%", label: "Remote Eligible" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="text-3xl font-extrabold leading-none text-white">
                  {value}
                </span>
                <span className="text-xs font-light text-white/50">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── STICKY TOOLBAR ─────────────────────────────────────────────── */}
      <div className="sticky top-0 z-40 hidden sm:flex items-stretch border-b border-gray-200 bg-white shadow-sm px-6 sm:px-30">
        {/* Search */}
        <div className="flex items-center border-r border-gray-200 px-3 py-3 sm:w-64 gap-5">
          <Search size={15} />
          <input
            type="text"
            placeholder="Search roles…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent text-[13.5px] text-gray-900 outline-none placeholder:text-gray-400"
          />
        </div>

        {/* Chip filters */}
        <div className="flex flex-1 items-center gap-1.5 overflow-x-auto px-4 py-3 scrollbar-hide">
          {DEPT_FILTERS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveDept(value)}
              className="shrink-0 whitespace-nowrap rounded-full border px-3 py-1 text-[12.5px] font-medium transition-all duration-150"
              style={{
                borderColor: activeDept === value ? C.blueDeep : "#E4E8F2",
                background: activeDept === value ? C.blueDeep : "transparent",
                color: activeDept === value ? "#fff" : "#3B3F4C",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2 border-l border-gray-200 px-4 py-3">
          <button className="flex items-center gap-1.5 rounded-md border border-gray-200 px-3 py-1.5 text-[13px] font-medium text-gray-600 transition-colors hover:border-blue-400 hover:text-blue-600">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 4h12M3 7h8M5 10h4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Sort
          </button>
          <button
            className="flex items-center gap-1.5 rounded-md px-4 py-1.5 text-[13px] font-semibold text-white transition-all duration-150 hover:opacity-90"
            style={{ background: C.red }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M6 1.5v9M1.5 6h9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Submit CV
          </button>
        </div>
      </div>

      {/* ── POSITIONS ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-10 sm:px-12">
        {visibleSections.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-lg font-semibold text-gray-700">
              No matching positions
            </p>
            <p className="mt-1 text-sm text-gray-400">
              Try adjusting your search or filter.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-14">
            {visibleSections.map(({ dept, jobs }, i) => (
              <div
                key={dept}
                className="flex flex-col gap-5"
                style={{ animationDelay: `${i * 55}ms` }}
              >
                {/* Section header */}
                <div
                  className="relative flex items-baseline gap-3 border-b-2 pb-3.5"
                  style={{ borderColor: "#E4E8F2" }}
                >
                  {/* Red underline accent */}
                  <span
                    className="absolute bottom-[-2px] left-0 h-[2px] w-10 rounded"
                    style={{ background: C.red }}
                  />
                  <h2
                    className="text-[17px] font-bold leading-none tracking-tight"
                    style={{
                      color: C.blueDeep,
                    }}
                  >
                    {dept}
                  </h2>
                  <span className="rounded-full bg-gray-200 px-2 py-0.5 text-[12px] font-medium text-gray-500">
                    {jobs.length}
                  </span>
                </div>

                {/* Job cards grid */}
                <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                  {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── FOOTER CTA ─────────────────────────────────────────────── */}
        <div className="relative mt-16 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl p-10 sm:flex-row sm:items-center bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800">
          {/* Decorative circle */}
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full"
            style={{ background: "rgba(255,255,255,0.04)" }}
          />
          <div>
            <h3 className="mb-1.5 text-xl font-extrabold text-white">
              Don&apos;t see the right fit?
            </h3>
            <p className="text-sm font-light text-white/55">
              We&apos;re always looking for exceptional talent. Send us your CV
              and we&apos;ll be in touch.
            </p>
          </div>
          <button
            className="flex shrink-0 items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white transition-all duration-150 hover:opacity-90 hover:shadow-lg"
            style={{ background: C.red }}
          >
            Submit General Application
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2.5 7h9M8.5 3.5l3.5 3.5-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
