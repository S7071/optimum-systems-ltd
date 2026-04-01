"use client";

import { useState, useMemo, ReactNode } from "react";
import { Search, ChevronRight, ArrowRight, SlidersHorizontal, X } from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────

const CATEGORIES = [
  "All",
  "Finance Management",
  "Project Management",
  "Inventory Management",
  "Customer Relationship Management",
  "Human Resource & Payroll Management",
  "Transport Management",
  "Feedback Management Systems",
  "Event Management",
  "Member Management",
  "Real-time Reporting Tools",
  "Appointment Scheduling System",
  "Electronic Health Record Systems",
];

const INDUSTRY_CONFIG: Record<string, { color: string; dot: string }> = {
  Education:     { color: "text-sky-700 bg-sky-50 border-sky-200",     dot: "bg-sky-500" },
  Healthcare:    { color: "text-emerald-700 bg-emerald-50 border-emerald-200", dot: "bg-emerald-500" },
  Retail:        { color: "text-violet-700 bg-violet-50 border-violet-200", dot: "bg-violet-500" },
  "Government & Parastatals": { color: "text-amber-700 bg-amber-50 border-amber-200", dot: "bg-amber-500" },
  Manufacturing: { color: "text-slate-700 bg-slate-100 border-slate-300", dot: "bg-slate-500" },
  Corporate:     { color: "text-blue-700 bg-blue-50 border-blue-200",   dot: "bg-blue-500" },
  SACCOs:        { color: "text-teal-700 bg-teal-50 border-teal-200",   dot: "bg-teal-500" },
  "Hospitality & Travel": { color: "text-rose-700 bg-rose-50 border-rose-200", dot: "bg-rose-500" },
};

const DEFAULT_IND = { color: "text-gray-600 bg-gray-100 border-gray-200", dot: "bg-gray-400" };

type SortMode = "alpha" | "industry" | "tags";

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
    tags: ["Finance Management", "Human Resource & Payroll Management", "Inventory Management", "Appointment Scheduling System", "Real-time Reporting Tools"],
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
    tags: ["Inventory Management", "Transport Management", "Real-time Reporting Tools"],
  },
  {
    id: 4,
    name: "Biometric Attendance System (BAMS)",
    description:
      "Fingerprint-based attendance solution for staff and students with trainer-initiated sessions, auto-percentage calculation, and real-time reporting.",
    stars: 63,
    pulls: 29,
    industry: "Education",
    tags: ["Real-time Reporting Tools", "Human Resource & Payroll Management"],
  },
  {
    id: 5,
    name: "Hospital Management System (HMS)",
    description:
      "Comprehensive cloud-based platform for patient care, appointments, staff management, billing, inventory, and Electronic Health Records with SMS reminders.",
    stars: 108,
    pulls: 67,
    industry: "Healthcare",
    tags: ["Appointment Scheduling System", "Electronic Health Record Systems", "Finance Management", "Human Resource & Payroll Management", "Inventory Management", "Real-time Reporting Tools"],
  },
  {
    id: 6,
    name: "Retail, Wholesale & Distribution Suite",
    description:
      "Modular ERP for agrisupplies, wholesalers, retail chains, and food businesses. Includes SmartPOS/van sales, supply chain optimization, and executive dashboards.",
    stars: 143,
    pulls: 88,
    industry: "Retail",
    tags: ["Finance Management", "Inventory Management", "Human Resource & Payroll Management", "Real-time Reporting Tools", "Transport Management"],
  },
  {
    id: 7,
    name: "Lend360 Management System",
    description:
      "Full-cycle lending ERP for microfinance covering KYC, configurable loan products, automated appraisal/disbursement/repayment, MPESA/SMS integration, and advanced analytics.",
    stars: 87,
    pulls: 42,
    industry: "SACCOs",
    tags: ["Finance Management", "Customer Relationship Management", "Human Resource & Payroll Management", "Member Management", "Real-time Reporting Tools"],
  },
  {
    id: 8,
    name: "Ultimate Manufacturing ERP",
    description:
      "Integrated platform for production-heavy operations with production planning, BOM/WIP/costing, sales, finance, procurement, inventory, HR, and multi-plant scalability.",
    stars: 119,
    pulls: 73,
    industry: "Manufacturing",
    tags: ["Finance Management", "Inventory Management", "Human Resource & Payroll Management", "Real-time Reporting Tools", "Project Management"],
  },
  {
    id: 9,
    name: "Conference Management System",
    description:
      "All-in-one platform centralizing conference operations with self-service package configuration, real-time equipment/inventory tracking, and automated financials.",
    stars: 56,
    pulls: 31,
    industry: "Hospitality & Travel",
    tags: ["Event Management", "Finance Management", "Inventory Management", "Real-time Reporting Tools"],
  },
  {
    id: 10,
    name: "Dairy Management System",
    description:
      "Complete ERP for dairy cooperatives and processors unifying the milk value chain from farm to distribution, with quality-linked farmer payments and cold chain tracking.",
    stars: 77,
    pulls: 44,
    industry: "Manufacturing",
    tags: ["Finance Management", "Inventory Management", "Human Resource & Payroll Management", "Transport Management", "Real-time Reporting Tools"],
  },
  {
    id: 11,
    name: "Real Estate Management System (REMS)",
    description:
      "Comprehensive property enterprise platform managing portfolios end-to-end with tenant lifecycle, automated lease handling, rent billing, and portfolio analytics.",
    stars: 134,
    pulls: 81,
    industry: "Corporate",
    tags: ["Finance Management", "Customer Relationship Management", "Human Resource & Payroll Management", "Real-time Reporting Tools"],
  },
  {
    id: 12,
    name: "Security Management System (SMS)",
    description:
      "Enterprise-grade security intelligence platform with biometric access control, digital visitor management, CCTV integration, guard patrol tracking, and real-time dashboards.",
    stars: 98,
    pulls: 57,
    industry: "Corporate",
    tags: ["Real-time Reporting Tools", "Member Management"],
  },
  {
    id: 13,
    name: "UltimateERP Management Dashboard",
    description:
      "Executive intelligence layer embedded in UltimateERP aggregating live data into mobile-accessible dashboards for enrollment trends, revenue, budgets, and multi-campus comparisons.",
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
    name: "Turnstile Biometric Gate Control",
    description:
      "Integrated physical and digital access governance with anti-tailgating turnstiles, biometric authentication, role/time/zone-based permissions, and entry/exit analytics.",
    stars: 69,
    pulls: 35,
    industry: "Education",
    tags: ["Real-time Reporting Tools", "Member Management"],
  },
  {
    id: 16,
    name: "Poultry Farm Management System",
    description:
      "Cloud-based farm intelligence platform for poultry operations covering feed procurement, egg production logging, flock health tracking, and optional IoT sensor integration.",
    stars: 83,
    pulls: 46,
    industry: "Manufacturing",
    tags: ["Finance Management", "Inventory Management", "Real-time Reporting Tools"],
  },
  {
    id: 17,
    name: "Referral Management Module",
    description:
      "Enrollment growth engine that structures word-of-mouth referrals, automates tiered rewards upon verified enrollment, and delivers conversion/ROI analytics.",
    stars: 47,
    pulls: 22,
    industry: "Education",
    tags: ["Customer Relationship Management", "Member Management", "Real-time Reporting Tools"],
  },
  {
    id: 18,
    name: "CBET Curriculum Management Module",
    description:
      "Comprehensive digital system automating CBET curricula management in TVET institutions with competency mapping, learner progress tracking, and compliance reporting.",
    stars: 66,
    pulls: 33,
    industry: "Education",
    tags: ["Feedback Management Systems", "Real-time Reporting Tools", "Project Management"],
  },
  {
    id: 19,
    name: "FinderApp",
    description:
      "Location-driven mobile/web platform connecting consumers with verified local vendors using dual-parameter search, structured vendor profiles, and budget-based filtering.",
    stars: 91,
    pulls: 53,
    industry: "Retail",
    tags: ["Customer Relationship Management", "Real-time Reporting Tools"],
  },
  {
    id: 20,
    name: "NexusTrade",
    description:
      "AI-powered marketplace matching buyers and sellers via interest profiling and algorithmic intelligence, with real-time negotiation, secure in-app payments, and seller dashboards.",
    stars: 117,
    pulls: 68,
    industry: "Retail",
    tags: ["Customer Relationship Management", "Finance Management", "Real-time Reporting Tools"],
  },
];

const PAGE_SIZE = 9;

// ─── Industry pill ────────────────────────────────────────────────────────────
function IndustryPill({ industry }: { industry: string }) {
  const cfg = INDUSTRY_CONFIG[industry] ?? DEFAULT_IND;
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${cfg.color}`}>
      <span className={`size-1.5 rounded-full shrink-0 ${cfg.dot}`} />
      {industry}
    </span>
  );
}

// ─── Tag chip ─────────────────────────────────────────────────────────────────
function TagChip({ label }: { label: string }) {
  return (
    <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 whitespace-nowrap">
      {label}
    </span>
  );
}

// ─── Filter button ────────────────────────────────────────────────────────────
function FilterBtn({
  children,
  active,
  onClick,
}: {
  children: ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "h-8 px-3.5 text-xs font-medium rounded-lg border transition-all duration-150 whitespace-nowrap",
        active
          ? "bg-[#0f2d6b] text-white border-[#0f2d6b] shadow-sm"
          : "bg-white text-slate-600 border-slate-200 hover:border-[#0f2d6b] hover:text-[#0f2d6b]",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

// ─── Product card ─────────────────────────────────────────────────────────────
function ProductCard({ project, index }: { project: ProjectType; index: number }) {
  const { name, description, tags, industry } = project;
  const visibleTags = tags.slice(0, 2);
  const overflow = tags.length - visibleTags.length;

  return (
    <div
      className="group relative flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden
        hover:border-[#0f2d6b]/30 hover:shadow-[0_8px_30px_rgba(15,45,107,0.10)] transition-all duration-300
        animate-fade-in"
      style={{ animationDelay: `${index * 40}ms`, animationFillMode: "both" }}
    >
      {/* Top colour bar — subtle per-industry accent */}
      <div
        className={`h-1 w-full shrink-0 ${
          industry === "Education" ? "bg-sky-400" :
          industry === "Healthcare" ? "bg-emerald-400" :
          industry === "Retail" ? "bg-violet-400" :
          industry === "Government & Parastatals" ? "bg-amber-400" :
          industry === "Manufacturing" ? "bg-slate-400" :
          industry === "Corporate" ? "bg-blue-400" :
          industry === "SACCOs" ? "bg-teal-400" :
          "bg-rose-400"
        }`}
      />

      <div className="flex flex-col flex-1 gap-4 p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-[#0f2d6b] transition-colors">
            {name}
          </h3>
          <ChevronRight
            className="size-4 text-slate-300 shrink-0 mt-0.5 group-hover:text-[#0f2d6b] group-hover:translate-x-0.5 transition-all"
          />
        </div>

        {/* Description */}
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {visibleTags.map((t) => <TagChip key={t} label={t} />)}
          {overflow > 0 && (
            <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-50 text-slate-400 border border-slate-200">
              +{overflow} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <IndustryPill industry={industry} />
          <a
            href="#"
            className="text-[11px] font-semibold text-[#0f2d6b] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Learn more <ArrowRight className="size-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Empty state ──────────────────────────────────────────────────────────────
function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 gap-3">
      <div className="size-12 rounded-full bg-slate-100 flex items-center justify-center mb-1">
        <Search className="size-5 text-slate-400" />
      </div>
      <p className="text-sm font-medium text-slate-700">No products found</p>
      <p className="text-xs text-slate-400">Try a different search or filter combination.</p>
      <button
        type="button"
        onClick={onReset}
        className="mt-2 text-xs font-semibold text-[#0f2d6b] hover:underline flex items-center gap-1"
      >
        <X className="size-3" /> Clear all filters
      </button>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function SiteFeatures() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndustry, setActiveIndustry] = useState("All");
  const [search, setSearch] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("alpha");
  const [showAll, setShowAll] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const uniqueIndustries = useMemo(
    () => Array.from(new Set(PROJECTS.map((p) => p.industry))).sort(),
    []
  );

  function reset() {
    setActiveCategory("All");
    setActiveIndustry("All");
    setSearch("");
    setShowAll(false);
  }

  const filtered = useMemo(() => {
    const results = PROJECTS.filter((p) => {
      const matchCat = activeCategory === "All" || p.tags.includes(activeCategory);
      const matchInd = activeIndustry === "All" || p.industry === activeIndustry;
      const q = search.toLowerCase();
      const matchSearch = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
      return matchCat && matchInd && matchSearch;
    });
    if (sortMode === "alpha") results.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortMode === "industry") results.sort((a, b) => a.industry.localeCompare(b.industry));
    else results.sort((a, b) => b.tags.length - a.tags.length);
    return results;
  }, [activeCategory, activeIndustry, search, sortMode]);

  const displayed = showAll ? filtered : filtered.slice(0, PAGE_SIZE);
  const hasMore = filtered.length > PAGE_SIZE;
  const activeFilterCount =
    (activeCategory !== "All" ? 1 : 0) + (activeIndustry !== "All" ? 1 : 0) + (search ? 1 : 0);

  return (
    <>
      {/* Inject keyframes */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.35s ease both; }
      `}</style>

      <section className="bg-[#f8f9fc] min-h-screen w-full">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <div className="bg-[#0f2d6b] text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300 mb-3">
                  Optimum ERP Systems
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
                  Enterprise Software for<br />
                  <span className="text-sky-300">Every Industry</span>
                </h1>
                <p className="text-sm text-blue-200 leading-relaxed max-w-md">
                  Modular, scalable ERP solutions built for Kenyan and East African organizations —
                  from higher education to manufacturing, healthcare, and beyond.
                </p>
              </div>

              {/* Stats row */}
              <div className="flex gap-8 shrink-0">
                {[
                  { value: `${PROJECTS.length}+`, label: "Products" },
                  { value: `${uniqueIndustries.length}`, label: "Industries" },
                  { value: "150+", label: "Institutions" },
                ].map(({ value, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1">
                    <span className="text-3xl font-bold text-white">{value}</span>
                    <span className="text-[11px] uppercase tracking-widest text-blue-300">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Sticky controls bar ───────────────────────────────────────────── */}
        <div className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 py-3 flex items-center gap-3">

            {/* Search */}
            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search products…"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setShowAll(false); }}
                className="w-full h-9 pl-8 pr-3 text-xs rounded-lg border border-slate-200 bg-slate-50 text-slate-800
                  placeholder:text-slate-400 outline-none focus:border-[#0f2d6b] focus:bg-white focus:ring-2
                  focus:ring-[#0f2d6b]/10 transition-all"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>

            {/* Sort */}
            <select
              value={sortMode}
              onChange={(e) => setSortMode(e.target.value as SortMode)}
              className="h-9 px-3 text-xs rounded-lg border border-slate-200 bg-slate-50 text-slate-700 outline-none
                focus:border-[#0f2d6b] cursor-pointer transition-all"
            >
              <option value="alpha">A – Z</option>
              <option value="industry">By Industry</option>
              <option value="tags">By Scope</option>
            </select>

            {/* Filter toggle */}
            <button
              type="button"
              onClick={() => setFiltersOpen((v) => !v)}
              className={[
                "h-9 px-3.5 rounded-lg border text-xs font-medium flex items-center gap-2 transition-all",
                filtersOpen
                  ? "bg-[#0f2d6b] text-white border-[#0f2d6b]"
                  : "bg-white text-slate-600 border-slate-200 hover:border-[#0f2d6b] hover:text-[#0f2d6b]",
              ].join(" ")}
            >
              <SlidersHorizontal className="size-3.5" />
              Filters
              {activeFilterCount > 0 && (
                <span className={`inline-flex items-center justify-center size-4 text-[10px] font-bold rounded-full
                  ${filtersOpen ? "bg-white text-[#0f2d6b]" : "bg-[#0f2d6b] text-white"}`}>
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Result count */}
            <span className="hidden sm:block text-xs text-slate-400 ml-auto">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            </span>

            {/* Clear */}
            {activeFilterCount > 0 && (
              <button
                type="button"
                onClick={reset}
                className="text-xs text-slate-400 hover:text-[#0f2d6b] flex items-center gap-1 transition-colors"
              >
                <X className="size-3" /> Clear
              </button>
            )}
          </div>
        </div>

        {/* ── Filter panel ─────────────────────────────────────────────────── */}
        <div className={`bg-white border-b border-slate-200 overflow-hidden transition-all duration-300 ${
          filtersOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 space-y-5">

            {/* Industry */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-2.5">Industry</p>
              <div className="flex flex-wrap gap-2">
                {["All", ...uniqueIndustries].map((ind) => (
                  <FilterBtn
                    key={ind}
                    active={activeIndustry === (ind === "All" ? "All" : ind)}
                    onClick={() => { setActiveIndustry(ind); setShowAll(false); }}
                  >
                    {ind === "All" ? "All Industries" : ind}
                  </FilterBtn>
                ))}
              </div>
            </div>

            {/* Category */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-2.5">Category / Function</p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <FilterBtn
                    key={cat}
                    active={activeCategory === cat}
                    onClick={() => { setActiveCategory(cat); setShowAll(false); }}
                  >
                    {cat}
                  </FilterBtn>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Active filter pills ───────────────────────────────────────────── */}
        {activeFilterCount > 0 && (
          <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-4 flex flex-wrap gap-2">
            {activeIndustry !== "All" && (
              <span className="inline-flex items-center gap-1.5 h-7 px-3 bg-[#0f2d6b]/8 text-[#0f2d6b] text-xs font-medium rounded-full border border-[#0f2d6b]/20">
                {activeIndustry}
                <button onClick={() => setActiveIndustry("All")}><X className="size-3" /></button>
              </span>
            )}
            {activeCategory !== "All" && (
              <span className="inline-flex items-center gap-1.5 h-7 px-3 bg-[#0f2d6b]/8 text-[#0f2d6b] text-xs font-medium rounded-full border border-[#0f2d6b]/20">
                {activeCategory}
                <button onClick={() => setActiveCategory("All")}><X className="size-3" /></button>
              </span>
            )}
            {search && (
              <span className="inline-flex items-center gap-1.5 h-7 px-3 bg-[#0f2d6b]/8 text-[#0f2d6b] text-xs font-medium rounded-full border border-[#0f2d6b]/20">
                &quot;{search}&quot;
                <button onClick={() => setSearch("")}><X className="size-3" /></button>
              </span>
            )}
          </div>
        )}

        {/* ── Grid ─────────────────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayed.length === 0 ? (
              <EmptyState onReset={reset} />
            ) : (
              displayed.map((project, i) => (
                <ProductCard key={project.id} project={project} index={i} />
              ))
            )}
          </div>

          {/* Show more */}
          {hasMore && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="h-10 px-8 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-700
                  hover:border-[#0f2d6b] hover:text-[#0f2d6b] transition-all shadow-sm"
              >
                {showAll ? "Show Less" : `Show all ${filtered.length} products`}
              </button>
            </div>
          )}
        </div>

        {/* ── CTA banner ───────────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 pb-16">
          <div className="rounded-2xl bg-[#0f2d6b] p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Ready to get started?</h2>
              <p className="text-sm text-blue-200">Book a personalized demo with our team — no commitment required.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a
                href="/about"
                className="h-10 px-5 rounded-xl border border-white/20 text-sm font-medium text-white hover:bg-white/10 transition-all inline-flex items-center"
              >
                About Us
              </a>
              <a
                href="/demo"
                className="h-10 px-6 rounded-xl bg-white text-sm font-bold text-[#0f2d6b] hover:bg-blue-50 transition-all inline-flex items-center gap-1.5"
              >
                Request a Demo <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}