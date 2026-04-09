"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Laptop2,
  MapPin,
  Search,
  Send,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import BadgePill from "@/components/ui/badge-pill";

type WorkType = "Remote" | "Onsite" | "Hybrid";
type SortMode = "featured" | "az";

type Job = {
  id: string;
  title: string;
  location: string;
  department: string;
  workType?: WorkType;
  isNew?: boolean;
  href?: string;
};

const JOBS: Job[] = [
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
  {
    id: "ux-1",
    title: "Product Designer (UX/UI)",
    location: "Kenya, Nairobi",
    department: "Design & User Experience",
    workType: "Remote",
    isNew: true,
    href: "#",
  },
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

function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: LucideIcon;
  value: string | number;
  label: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />
      <div className="relative">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <div className="text-3xl font-semibold tracking-tight text-white">
          {value}
        </div>
        <div className="mt-1 text-sm text-white/70">{label}</div>
      </div>
    </div>
  );
}

function WorkTypeBadge({ type }: { type?: WorkType }) {
  if (!type) return null;

  const badgeStyles: Record<WorkType, string> = {
    Remote: "border-emerald-200 bg-emerald-50 text-emerald-700",
    Onsite: "border-indigo-200 bg-indigo-50 text-indigo-700",
    Hybrid: "border-amber-200 bg-amber-50 text-amber-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
        badgeStyles[type],
      )}
    >
      {type}
    </span>
  );
}

function JobCard({ job }: { job: Job }) {
  return (
    <Link href={job.href ?? "#"} className="group block h-full">
      <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#cdd6ff] hover:shadow-md">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#201e5c] via-[#3e3ab1] to-[#ed1c24] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Open Role
              </div>
              <h3 className="text-base font-semibold leading-6 text-slate-900 transition-colors duration-300 group-hover:text-[#201e5c]">
                {job.title}
              </h3>
            </div>

            {job.isNew && (
              <span className="shrink-0 rounded-full bg-[#ed1c24]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#ed1c24]">
                New
              </span>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1.5 text-xs text-slate-600">
              <MapPin className="h-3.5 w-3.5" />
              {job.location}
            </span>

            <WorkTypeBadge type={job.workType} />

            <span className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500">
              Full-time
            </span>
          </div>

          <div className="mt-6 border-t border-slate-100 pt-4">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm leading-6 text-slate-500">
                View full role details and submit your application.
              </p>

              <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#ed1c24] transition-transform duration-300 group-hover:translate-x-1">
                Apply
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function SiteCareer() {
  const [activeDept, setActiveDept] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("featured");

  const grouped = useMemo(() => {
    const map = new Map<string, Job[]>();

    for (const job of JOBS) {
      if (!map.has(job.department)) map.set(job.department, []);
      map.get(job.department)!.push(job);
    }

    return map;
  }, []);

  const visibleSections = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return Array.from(grouped.entries())
      .filter(([dept]) => activeDept === "all" || dept === activeDept)
      .map(([dept, jobs]) => {
        const filtered = jobs.filter((job) => {
          const haystack =
            `${job.title} ${job.department} ${job.location} ${job.workType ?? ""}`.toLowerCase();
          return haystack.includes(query);
        });

        const sorted = [...filtered].sort((a, b) => {
          if (sortMode === "az") return a.title.localeCompare(b.title);

          const byNew = Number(Boolean(b.isNew)) - Number(Boolean(a.isNew));
          if (byNew !== 0) return byNew;

          return a.title.localeCompare(b.title);
        });

        return { dept, jobs: sorted };
      })
      .filter((section) => section.jobs.length > 0);
  }, [activeDept, grouped, searchTerm, sortMode]);

  const allVisibleJobs = useMemo(
    () => visibleSections.flatMap((section) => section.jobs),
    [visibleSections],
  );

  const totalVisible = allVisibleJobs.length;
  const newRoles = allVisibleJobs.filter((job) => job.isNew).length;
  const flexibleRoles = allVisibleJobs.filter(
    (job) => job.workType === "Remote" || job.workType === "Hybrid",
  ).length;
  const flexiblePct =
    totalVisible > 0 ? Math.round((flexibleRoles / totalVisible) * 100) : 0;

  return (
    <section className="min-h-screen bg-background text-slate-950 w-full">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,#080817_0%,#15133d_38%,#201e5c_68%,#3e3ab1_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_28%)]" />
        <div className="absolute -left-16 top-12 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-[#ed1c24]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#ed1c24]" />
                We&apos;re Hiring
              </div>

              <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Build the next chapter of{" "}
                <span className="text-[#ff5b63]">enterprise security</span>.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Join a high-performance team across engineering, cyber security,
                product, operations, and customer-facing functions. Explore open
                roles designed for builders, operators, and leaders.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <StatCard
                icon={BriefcaseBusiness}
                value={totalVisible}
                label="Open roles"
              />
              <StatCard
                icon={Building2}
                value={grouped.size}
                label="Departments"
              />
              <StatCard
                icon={Laptop2}
                value={`${flexiblePct}%`}
                label="Flexible roles"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
        <div className="mx-auto max-w-7xl px-6 py-4 sm:px-10 lg:px-12">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative w-full lg:max-w-md">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search roles, departments, location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-[#3e3ab1]/40 focus:bg-white focus:ring-4 focus:ring-[#3e3ab1]/10"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setSortMode((prev) =>
                      prev === "featured" ? "az" : "featured",
                    )
                  }
                  className="inline-flex h-11 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition duration-200 hover:border-slate-300 hover:bg-slate-50"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  {sortMode === "featured" ? "Featured first" : "A–Z"}
                </button>

                <Link
                  href="#"
                  className="inline-flex h-11 items-center gap-2 rounded-2xl bg-[#ed1c24] px-4 text-sm font-semibold text-white transition duration-200 hover:bg-[#d81720] hover:shadow-[0_10px_25px_rgba(237,28,36,0.22)]"
                >
                  <Send className="h-4 w-4" />
                  Submit CV
                </Link>
              </div>
            </div>

            <div className="overflow-x-auto">
              <div className="flex min-w-max items-center gap-2 pb-1">
                {DEPT_FILTERS.map(({ label, value }) => {
                  const active = activeDept === value;

                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setActiveDept(value)}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
                        active
                          ? "border-[#201e5c] bg-[#201e5c] text-white shadow-[0_10px_24px_rgba(32,30,92,0.18)]"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50",
                      )}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-900">
              {totalVisible} position{totalVisible === 1 ? "" : "s"} available
            </p>
            <p className="mt-1 text-sm text-slate-500">
              {activeDept === "all"
                ? "Showing roles across all departments."
                : "Filtered to the selected department."}
            </p>
          </div>

          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
            {newRoles} new role{newRoles === 1 ? "" : "s"} in current view
          </div>
        </div>

        {visibleSections.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">
              No matching positions
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-500">
              Try adjusting your keyword or switching to another department
              filter.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {visibleSections.map(({ dept, jobs }) => (
              <div key={dept} className="space-y-5">
                <div className="flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-end sm:justify-between">
                  <div className="relative">
                    <span className="mb-2 block h-1 w-12 rounded-full bg-[#ed1c24]" />
                    <h2 className="text-2xl font-semibold tracking-tight text-[#080817]">
                      {dept}
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      {jobs.length} open role{jobs.length === 1 ? "" : "s"} in
                      this team
                    </p>
                  </div>

                  <div className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                    Hiring now
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer CTA */}
        <div className="relative mt-16 overflow-hidden rounded-[28px] border border-slate-200 bg-[linear-gradient(135deg,#091124_0%,#1a1f4f_45%,#2a2f7f_100%)] p-8 shadow-[0_18px_50px_rgba(9,17,36,0.18)] sm:p-10">
          <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#ed1c24]/10 blur-3xl" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl flex flex-col gap-3">
              <BadgePill label="Talent Network" centered={false} />

              <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Don&apos;t see the right fit yet?
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                Share your CV with us and we&apos;ll keep you in mind for future
                opportunities across engineering, product, cyber security, and
                enterprise operations.
              </p>
            </div>

            <Link
              href="#"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary-cta px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-primary-cta-800 hover:shadow-md"
            >
              Submit General Application
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
