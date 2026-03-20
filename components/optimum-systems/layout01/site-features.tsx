"use client";

import { useState, useMemo, MouseEventHandler, ReactNode } from "react";
import { Star, GitPullRequest, Search } from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────

const CATEGORIES = [
  "All",
  "Finance Management",
  "Project Management",
  "Inventory Management",
  "Customer Relationship Management",
  "Human Resource & Payrol Management",
  "Transport Management",
  "Feedback Management Systems",
  "Event Management",
  "Member Management",
  "Real-time Reporting Tools",
  "Appointment Scheduling System",
  "Electronic Health Record Systems",
];

const INDUSTRY = [
  "All",
  "Education",
  "Corporate",
  "SACCOs",
  "Government & Parastatals",
  "Manufacturing",
  "NGOs",
  "Hospitality & Travel",
  "Construction",
  "Retail",
  "Restaurants & Food Service",
  "Healthcare",
  "Service-based Businesses",
  "Entertainment",
  "Transport & Logistics",
];

const INDUSTRY_BADGE_STYLES: Record<string, string> = {
  Education:
    "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-900",
  Healthcare:
    "bg-green-50 text-green-700 border-green-100 dark:bg-green-950 dark:text-green-300 dark:border-green-900",
  Retail:
    "bg-purple-50 text-purple-700 border-purple-100 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-900",
  "Government & Parastatals":
    "bg-orange-50 text-orange-700 border-orange-100 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-900",
  Manufacturing:
    "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
  Corporate:
    "bg-sky-50 text-sky-700 border-sky-100 dark:bg-sky-950 dark:text-sky-300 dark:border-sky-900",
  SACCOs:
    "bg-teal-50 text-teal-700 border-teal-100 dark:bg-teal-950 dark:text-teal-300 dark:border-teal-900",
};

const DEFAULT_BADGE =
  "bg-muted text-muted-foreground border-border";

type SortMode = "stars" | "pulls" | "alpha";

interface ProjectType {
  id: number;
  name: string;
  description: string;
  stars: number;
  pulls: number;
  industry: string;
  tags: string[];
}

const PROJECTS: ProjectType[] = [
  {
    id: 1,
    name: "UltimateERP",
    description:
      "Comprehensive ERP for higher learning institutions with 30+ modules covering student lifecycle, finance, HR/payroll, procurement, timetabling, and more.",
    stars: 186,
    pulls: 120,
    industry: "Education",
    tags: [
      "Finance Management",
      "Human Resource & Payrol Management",
      "Inventory Management",
      "Appointment Scheduling System",
      "Real-time Reporting Tools",
    ],
  },
  {
    id: 2,
    name: "UltimateCBE Assessment ERP",
    description:
      "Competency-Based Education platform for Grades 10–12 with pathway-based learning, continuous assessments, NEMIS integration, and real-time learner insights.",
    stars: 74,
    pulls: 38,
    industry: "Education",
    tags: ["Feedback Management Systems", "Real-time Reporting Tools"],
  },
  {
    id: 3,
    name: "MedFlow",
    description:
      "Cloud-based pharmaceutical supply chain system tracking drugs from KEMSA to patient level, with automated requisitions, real-time stock visibility, and biometric transfers.",
    stars: 92,
    pulls: 55,
    industry: "Government & Parastatals",
    tags: [
      "Inventory Management",
      "Transport Management",
      "Real-time Reporting Tools",
    ],
  },
  {
    id: 4,
    name: "Biometric Attendance Management System (BAMS)",
    description:
      "Fingerprint-based attendance solution for staff and students with trainer-initiated sessions, auto-percentage calculation, and real-time reporting.",
    stars: 63,
    pulls: 29,
    industry: "Education",
    tags: ["Real-time Reporting Tools", "Human Resource & Payrol Management"],
  },
  {
    id: 5,
    name: "Hospital Management System (HMS)",
    description:
      "Comprehensive cloud-based platform for patient care, appointments, staff management, billing, inventory, and Electronic Health Records with SMS reminders and insurance integration.",
    stars: 108,
    pulls: 67,
    industry: "Healthcare",
    tags: [
      "Appointment Scheduling System",
      "Electronic Health Record Systems",
      "Finance Management",
      "Human Resource & Payrol Management",
      "Inventory Management",
      "Real-time Reporting Tools",
    ],
  },
  {
    id: 6,
    name: "Ultimate Retail, Wholesale & Distribution Suite",
    description:
      "Modular ERP for agrisupplies, wholesalers, Retail chains, and food businesses. Includes SmartPOS/van sales, supply chain optimization, ETIMS/MPESA compliance, and executive dashboards.",
    stars: 143,
    pulls: 88,
    industry: "Retail",
    tags: [
      "Finance Management",
      "Inventory Management",
      "Human Resource & Payrol Management",
      "Real-time Reporting Tools",
      "Transport Management",
    ],
  },
  {
    id: 7,
    name: "Lend360 Management System",
    description:
      "Full-cycle lending ERP for microfinance covering KYC, configurable loan products, automated appraisal/disbursement/repayment, MPESA/SMS integration, and advanced analytics.",
    stars: 87,
    pulls: 42,
    industry: "SACCOs",
    tags: [
      "Finance Management",
      "Customer Relationship Management",
      "Human Resource & Payrol Management",
      "Member Management",
      "Real-time Reporting Tools",
    ],
  },
  {
    id: 8,
    name: "Ultimate Manufacturing ERP",
    description:
      "Integrated platform for production-heavy operations with production planning, BOM/WIP/costing, sales, finance, procurement, inventory, HR, and multi-plant scalability.",
    stars: 119,
    pulls: 73,
    industry: "Manufacturing",
    tags: [
      "Finance Management",
      "Inventory Management",
      "Human Resource & Payrol Management",
      "Real-time Reporting Tools",
      "Project Management",
    ],
  },
  {
    id: 9,
    name: "Conference Management System",
    description:
      "All-in-one platform centralizing conference operations with self-service package configuration, real-time equipment/inventory tracking, meals & accommodation coordination, and automated financials.",
    stars: 56,
    pulls: 31,
    industry: "Hospitality & Travel",
    tags: [
      "Event Management",
      "Finance Management",
      "Inventory Management",
      "Real-time Reporting Tools",
    ],
  },
  {
    id: 10,
    name: "Dairy Management System",
    description:
      "Complete ERP for dairy cooperatives and processors unifying the milk value chain from farm to distribution, with quality-linked farmer payments, cold chain tracking, and executive dashboards.",
    stars: 77,
    pulls: 44,
    industry: "Manufacturing",
    tags: [
      "Finance Management",
      "Inventory Management",
      "Human Resource & Payrol Management",
      "Transport Management",
      "Real-time Reporting Tools",
    ],
  },
  {
    id: 11,
    name: "Real Estate Management System (REMS)",
    description:
      "Comprehensive property enterprise platform managing portfolios end-to-end with tenant lifecycle, automated lease handling, rent billing, maintenance requests, and portfolio analytics dashboards.",
    stars: 134,
    pulls: 81,
    industry: "Corporate",
    tags: [
      "Finance Management",
      "Customer Relationship Management",
      "Human Resource & Payrol Management",
      "Real-time Reporting Tools",
    ],
  },
  {
    id: 12,
    name: "Security Management System (SMS)",
    description:
      "Enterprise-grade security intelligence platform with biometric access control, digital visitor management, CCTV integration, guard patrol tracking, incident management, and real-time dashboards.",
    stars: 98,
    pulls: 57,
    industry: "Corporate",
    tags: ["Real-time Reporting Tools", "Member Management"],
  },
  {
    id: 13,
    name: "UltimateERP Management Dashboard",
    description:
      "Executive intelligence layer embedded in UltimateERP aggregating live data into mobile-accessible dashboards for enrollment trends, revenue, budgets, staffing, and multi-campus comparisons.",
    stars: 161,
    pulls: 95,
    industry: "Education",
    tags: ["Finance Management", "Real-time Reporting Tools"],
  },
  {
    id: 14,
    name: "Qualification Award Board (QAB) System",
    description:
      "Centralized academic governance and quality assurance platform managing marks entry/validation, moderation workflows, results ratification, and audit-ready traceability.",
    stars: 52,
    pulls: 27,
    industry: "Education",
    tags: ["Feedback Management Systems", "Real-time Reporting Tools"],
  },
  {
    id: 15,
    name: "Turnstile Biometric Gate Control System",
    description:
      "Integrated physical and digital access governance with anti-tailgating turnstiles, biometric authentication, role/time/zone-based permissions, attendance synchronization, and entry/exit analytics.",
    stars: 69,
    pulls: 35,
    industry: "Education",
    tags: ["Real-time Reporting Tools", "Member Management"],
  },
  {
    id: 16,
    name: "Poultry Farm Management System (PFMS)",
    description:
      "Cloud-based farm intelligence platform for poultry operations covering feed procurement, egg production logging, flock health tracking, expense automation, and optional IoT sensor integration.",
    stars: 83,
    pulls: 46,
    industry: "Manufacturing",
    tags: [
      "Finance Management",
      "Inventory Management",
      "Real-time Reporting Tools",
    ],
  },
  {
    id: 17,
    name: "Referral Management Module",
    description:
      "Enrollment growth engine that structures word-of-mouth referrals, automates tiered rewards upon verified enrollment, and delivers conversion/ROI analytics for Education providers.",
    stars: 47,
    pulls: 22,
    industry: "Education",
    tags: [
      "Customer Relationship Management",
      "Member Management",
      "Real-time Reporting Tools",
    ],
  },
  {
    id: 18,
    name: "CBET Curriculum Management Module",
    description:
      "Comprehensive digital system automating CBET curricula management in TVET institutions with competency mapping, learner progress tracking, compliance reporting, and ERP integration.",
    stars: 66,
    pulls: 33,
    industry: "Education",
    tags: [
      "Feedback Management Systems",
      "Real-time Reporting Tools",
      "Project Management",
    ],
  },
  {
    id: 19,
    name: "FinderApp",
    description:
      "Location-driven mobile/web platform connecting consumers with verified local vendors using dual-parameter search (keyword + geographic area), structured vendor profiles, and budget-based filtering.",
    stars: 91,
    pulls: 53,
    industry: "Retail",
    tags: ["Customer Relationship Management", "Real-time Reporting Tools"],
  },
  {
    id: 20,
    name: "NexusTrade",
    description:
      "AI-powered marketplace matching buyers and sellers via interest profiling and algorithmic intelligence, with real-time chat/video negotiation, secure in-app payments, and seller commerce dashboards.",
    stars: 117,
    pulls: 68,
    industry: "Retail",
    tags: [
      "Customer Relationship Management",
      "Finance Management",
      "Real-time Reporting Tools",
    ],
  },
];

const PAGE_SIZE = 6;

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Category filter chip */
function CategoryChip({
  children,
  active,
  onClick,
}: {
  children: ReactNode;
  active: boolean;
  onClick: MouseEventHandler;
}) {
  return (
    <span
      onClick={onClick}
      className={[
        "inline-flex items-center justify-center h-9 px-4 text-xs font-medium",
        "rounded-full border transition-all cursor-pointer whitespace-nowrap shrink-0 select-none",
        "focus-visible:ring-2 focus-visible:ring-ring/50",
        active
          ? "bg-primary-cbe-800 text-white border-transparent"
          : "bg-background border-border text-foreground hover:border-[#1B3FA0] hover:text-[#1B3FA0] hover:bg-blue-50 dark:hover:bg-blue-950",
      ].join(" ")}
    >
      {children}
    </span>
  );
}

/** Industry inline chip (smaller, below categories) */
function IndustryChip({
  children,
  active,
  onClick,
}: {
  children: ReactNode;
  active: boolean;
  onClick: MouseEventHandler;
}) {
  return (
    <span
      onClick={onClick}
      className={[
        "inline-flex items-center justify-center h-7 px-3 text-xs font-medium",
        "rounded-full border transition-all cursor-pointer whitespace-nowrap shrink-0 select-none",
        active
          ? "bg-blue-50 border-blue-200 text-[#1B3FA0] font-semibold dark:bg-blue-950 dark:border-blue-800 dark:text-blue-300"
          : "bg-muted border-border text-muted-foreground hover:border-[#1B3FA0] hover:text-[#1B3FA0]",
      ].join(" ")}
    >
      {children}
    </span>
  );
}

/** Coloured industry badge on each card */
function IndustryBadge({ industry }: { industry: string }) {
  const styles = INDUSTRY_BADGE_STYLES[industry] ?? DEFAULT_BADGE;
  return (
    <span
      className={`inline-flex items-center h-5 px-2 text-[11px] font-semibold rounded-full border ${styles}`}
    >
      {industry}
    </span>
  );
}

/** Star rating pill */
function StarRating({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center gap-1 bg-amber-50 dark:bg-amber-950 px-2 py-0.5 rounded-full shrink-0">
      <Star
        className="size-3 fill-amber-500 text-amber-500"
        aria-hidden="true"
      />
      <span className="text-xs font-bold text-amber-800 dark:text-amber-300">
        {value}
      </span>
    </span>
  );
}

/** Product card */
function ProjectCard({ name, description, tags, industry, stars, pulls }: ProjectType) {
  const visibleTags = tags.slice(0, 3);
  const overflowCount = tags.length - visibleTags.length;

  return (
    <a
      href="#"
      className="flex flex-col justify-between gap-6 rounded-xl border border-border bg-background p-5 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-muted/40 transition-all"
    >
      {/* Top */}
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold leading-snug">{name}</h3>
          <StarRating value={stars} />
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>
        {/* Tags — capped at 3 + overflow badge */}
        <div className="flex flex-wrap gap-1">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center h-5 px-2 text-[10px] font-medium rounded-md bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 text-[#1B3FA0] dark:text-blue-300"
            >
              {tag}
            </span>
          ))}
          {overflowCount > 0 && (
            <span className="inline-flex items-center h-5 px-2 text-[10px] font-medium rounded-md bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 text-[#1B3FA0] dark:text-blue-300">
              +{overflowCount}
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-2 pt-3 border-t border-border">
        <IndustryBadge industry={industry} />
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <GitPullRequest className="size-3.5" aria-hidden="true" />
          {pulls}
        </span>
      </div>
    </a>
  );
}

/** Empty state */
function EmptyState({
  category,
  industry,
}: {
  category: string;
  industry: string;
}) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-16 text-center gap-2">
      <p className="text-muted-foreground text-sm">
        No product found
        {category !== "All" ? ` in "${category}"` : ""}
        {industry !== "All" ? ` for the ${industry} industry` : ""}.
      </p>
      <p className="text-muted-foreground/60 text-xs">
        Try selecting a different filter or clearing your search.
      </p>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SiteFeatures() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndustry, setActiveIndustry] = useState("All");
  const [search, setSearch] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("stars");
  const [showAll, setShowAll] = useState(false);

  const uniqueIndustries = useMemo(
    () => Array.from(new Set(PROJECTS.map((p) => p.industry))),
    []
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setShowAll(false);
  };

  const handleIndustryChange = (ind: string) => {
    setActiveIndustry(ind);
    setShowAll(false);
  };

  const filtered = useMemo(() => {
    const results = PROJECTS.filter((p) => {
      const matchCat =
        activeCategory === "All" || p.tags.includes(activeCategory);
      const matchInd =
        activeIndustry === "All" || p.industry === activeIndustry;
      const matchSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchInd && matchSearch;
    });

    if (sortMode === "stars") results.sort((a, b) => b.stars - a.stars);
    else if (sortMode === "pulls") results.sort((a, b) => b.pulls - a.pulls);
    else results.sort((a, b) => a.name.localeCompare(b.name));

    return results;
  }, [activeCategory, activeIndustry, search, sortMode]);

  const displayed = showAll ? filtered : filtered.slice(0, PAGE_SIZE);
  const hasMore = filtered.length > PAGE_SIZE;

  return (
    <section className="bg-muted py-16 sm:py-24 w-full px-6 sm:px-12">
      <div className="container mx-auto max-w-7xl">

        {/* ── Hero banner ──────────────────────────────────────────────── */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 px-8 py-10 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Decorative circles */}
          <div className="absolute -right-10 -top-10 size-48 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute right-16 -bottom-14 size-36 rounded-full bg-white/5 pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            <h1 className="text-2xl sm:text-3xl font-semibold text-white leading-snug mb-2">
              Explore Products Based on Your Needs
            </h1>
            <p className="text-sm text-white/70 leading-relaxed">
              Browse Optimum System&apos;s full suite — from ERP and health records
              to biometrics and retail management.
            </p>
          </div>

          {/* Stats */}
          <div className="relative z-10 flex gap-8 shrink-0">
            {[
              { num: PROJECTS.length, label: "Products" },
              { num: uniqueIndustries.length, label: "Industries" },
              { num: CATEGORIES.length - 1, label: "Categories" },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-bold text-white">{num}</p>
                <p className="text-xs text-white/60 uppercase tracking-wider mt-0.5">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Controls ────────────────────────────────────────────────── */}
        <div className="mb-6 space-y-4">

          {/* Search + Sort row */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder="Search by name or keyword…"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowAll(false);
                }}
                className="w-full h-9 pl-9 pr-3 text-sm rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground outline-none focus:border-[#1B3FA0] focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 transition-all"
              />
            </div>

            {/* Sort */}
            <select
              value={sortMode}
              onChange={(e) => setSortMode(e.target.value as SortMode)}
              className="h-9 px-3 text-sm rounded-md border border-border bg-background text-foreground outline-none cursor-pointer focus:border-[#1B3FA0] transition-all"
            >
              <option value="stars">Top Rated</option>
              <option value="pulls">Most Forked</option>
              <option value="alpha">A – Z</option>
            </select>
          </div>

          {/* Category chips */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <CategoryChip
                key={cat}
                active={activeCategory === cat}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </CategoryChip>
            ))}
          </div>

          {/* Industry chips */}
          <div className="flex items-center flex-wrap gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mr-1">
              Industry
            </span>
            {["All", ...uniqueIndustries].map((ind) => (
              <IndustryChip
                key={ind}
                active={activeIndustry === ind}
                onClick={() => handleIndustryChange(ind)}
              >
                {ind === "All" ? "All Industries" : ind}
              </IndustryChip>
            ))}
          </div>
        </div>

        {/* ── Results count ───────────────────────────────────────────── */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
          <p className="text-xs text-muted-foreground">
            {filtered.length === 0
              ? "No results"
              : `Showing ${displayed.length} of ${filtered.length} product${filtered.length !== 1 ? "s" : ""}`}
          </p>
        </div>

        {/* ── Product grid ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {displayed.length === 0 ? (
            <EmptyState category={activeCategory} industry={activeIndustry} />
          ) : (
            displayed.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))
          )}
        </div>

        {/* ── Show more / less ────────────────────────────────────────── */}
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="h-10 px-8 rounded-md border border-border bg-background text-sm font-medium text-foreground hover:bg-muted transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              {showAll ? "Show Less" : `Show All (${filtered.length})`}
            </button>
          </div>
        )}

        {/* ── CTAs ────────────────────────────────────────────────────── */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/about"
            className="h-10 px-6 rounded-md border border-blue-200 dark:border-blue-800 text-sm font-medium text-[#1B3FA0] dark:text-blue-300 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all inline-flex items-center"
          >
            Learn About Optimum
          </a>
          <a
            href="/demo"
            className="h-10 px-6 rounded-md text-sm font-semibold text-white bg-[#C81E1E] hover:bg-[#A81717] active:scale-[0.98] transition-all inline-flex items-center gap-1.5"
          >
            Request a Demo
            <span aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}