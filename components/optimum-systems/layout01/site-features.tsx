"use client";

import { useState, useMemo, MouseEventHandler, ReactNode } from "react";
import { Star, GitPullRequest, ChevronDown } from "lucide-react";

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
interface projectType {
  id: number;
  name: string;
  description: string;
  stars: number;
  pulls: number;
  industry: string;
  tags: string[];
}
const PROJECTS: projectType[] = [
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
function Badge({
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
        "inline-flex items-center justify-center h-9 px-5 py-0.5 text-xs font-medium",
        "rounded-full border transition-all cursor-pointer whitespace-nowrap shrink-0",
        "focus-visible:ring-2 focus-visible:ring-ring/50 select-none",
        active
          ? "bg-primary text-primary-foreground border-transparent"
          : "bg-background border-border text-foreground hover:bg-muted",
      ].join(" ")}
    >
      {children}
    </span>
  );
}

function RoleBadge({ role }: { role: ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center h-5 px-2 py-0.5 text-xs font-medium rounded-full border border-border text-foreground bg-background">
      {role}
    </span>
  );
}

function ProjectCard({
  description,
  tags,
  industry,
  pulls,
  name,
  stars,
}: projectType) {
  return (
    <a
      href="#"
      className="flex flex-col justify-between gap-8 rounded-lg border border-border bg-background p-5 hover:border-primary/50 hover:shadow-sm transition-all"
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-medium truncate">{name}</h3>
          <span className="flex items-center gap-1 text-sm shrink-0">
            <Star
              className="size-4 fill-yellow-500 text-yellow-500"
              aria-hidden="true"
            />
            {stars}
          </span>
        </div>
        <p className="mt-2 text-muted-foreground text-sm">{description}</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center h-4 px-1.5 text-[10px] font-medium rounded-sm bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <RoleBadge role={industry} />
        <span className="flex items-center gap-1 text-sm text-muted-foreground">
          <GitPullRequest className="size-4" aria-hidden="true" />
          {pulls}
        </span>
      </div>
    </a>
  );
}

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
        {category !== "All" ? ` containing ${category}` : ""}
        {industry !== "All" ? ` in ${industry} industry` : ""}.
      </p>
      <p className="text-muted-foreground/60 text-xs">
        Try selecting a different filter.
      </p>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SiteFeatures() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndustry, setActiveRole] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Reset pagination whenever filters change
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setShowAll(false);
  };

  const handleRoleChange = (role: string) => {
    setActiveRole(role);
    setDropdownOpen(false);
    setShowAll(false);
  };

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const categoryMatch =
        activeCategory === "All" || p.tags.includes(activeCategory);
      const roleMatch =
        activeIndustry === "All" || p.industry === activeIndustry;
      return categoryMatch && roleMatch;
    });
  }, [activeCategory, activeIndustry]);

  const displayed = showAll ? filtered : filtered.slice(0, PAGE_SIZE);
  const hasMore = filtered.length > PAGE_SIZE;

  return (
    <section className="bg-muted py-16 sm:py-32 w-full px-6 sm:px-30">
      <div className="container">
        <h1 className="text-center text-2xl font-semibold sm:text-4xl text-pretty">
          Explore Products Based on your needs
        </h1>
        <div className="w-full flex items-center justify-center mt-6">

        <p className="max-w-l text-center text-muted-foreground">
          Esse nostrud ullamco occaecat labore ut deserunt voluptate velit enim
          excepteur aliqua eiusmod ex pariatur. Sunt nulla nostrud quis
          cupidatat eu commodo sunt cupidatat veniam. Laborum adipisicing
          commodo adipisicing eu quis esse. Eiusmod aute excepteur reprehenderit
          non aliqua excepteur nostrud nisi nulla in quis.
        </p>
        </div>
        <div className="mt-10">
          {/* ── Filter bar ─────────────────────────────────────────────── */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Category badge strip */}
            <div className="-mx-8 flex items-center gap-2 flex-wrap px-8 [scrollbar-width:none]">
              {CATEGORIES.map((cat) => (
                <Badge
                  key={cat}
                  active={activeCategory === cat}
                  onClick={() => handleCategoryChange(cat)}
                >
                  {cat}
                </Badge>
              ))}
            </div>

            {/* Role dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen((v) => !v)}
                aria-haspopup="listbox"
                aria-expanded={dropdownOpen}
                className="hidden sm:flex border-input dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 gap-1.5 rounded-md border py-2 pr-2 pl-2.5 text-sm shadow-xs transition-[color,box-shadow] focus-visible:ring-3 h-9 flex w-fit items-center justify-between whitespace-nowrap outline-none bg-background md:min-w-32"
              >
                <span>
                  {activeIndustry === "All" ? "All Industries" : activeIndustry}
                </span>
                <ChevronDown
                  className={`text-muted-foreground size-4 pointer-events-none transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {dropdownOpen && (
                <>
                  {/* Backdrop to close on outside click */}
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setDropdownOpen(false)}
                    aria-hidden="true"
                  />
                  <ul
                    role="listbox"
                    className="absolute right-0 z-20 mt-1 min-w-full overflow-hidden rounded-md border border-border bg-background shadow-md"
                  >
                    {INDUSTRY.map((industry) => (
                      <li
                        key={industry}
                        role="option"
                        aria-selected={activeIndustry === industry}
                        onClick={() => handleRoleChange(industry)}
                        className={`px-3 py-2 text-sm cursor-pointer transition-colors ${
                          activeIndustry === industry
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted text-foreground"
                        }`}
                      >
                        {industry === "All" ? "All Industries" : industry}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* ── Result count ───────────────────────────────────────────── */}
          <p className="mt-4 text-xs text-muted-foreground">
            {filtered.length === 0
              ? "No results"
              : `Showing ${displayed.length} of ${filtered.length} project${filtered.length !== 1 ? "s" : ""}`}
          </p>

          {/* ── Project grid ───────────────────────────────────────────── */}
          <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayed.length === 0 ? (
              <EmptyState category={activeCategory} industry={activeIndustry} />
            ) : (
              displayed.map((project) => (
                <ProjectCard
                  key={project.id}
                  description={project.description}
                  pulls={project.pulls}
                  name={project.name}
                  stars={project.stars}
                  industry={project.industry}
                  tags={project.tags}
                  id={project.id}
                />
              ))
            )}
          </div>

          {/* ── Show more / less ───────────────────────────────────────── */}
          {hasMore && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="focus-visible:border-ring focus-visible:ring-ring/50 rounded-md border bg-clip-padding text-sm font-medium focus-visible:ring-3 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 outline-none border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 shadow-xs h-9 gap-1.5 px-4"
              >
                {showAll ? "Show Less" : `Show All (${filtered.length})`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
