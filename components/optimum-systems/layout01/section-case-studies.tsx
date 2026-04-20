"use client";

import BadgePill from "@/components/ui/badge-pill";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock3,
  GraduationCap,
  Landmark,
  Layers3,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { useRouter } from "next/navigation";

type Metric = {
  label: string;
  value: string;
};

type CaseStudy = {
  id: string;
  sector: string;
  client: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: Metric[];
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
};

const stats = [
  {
    label: "Deployments Delivered",
    value: "120+",
    icon: Briefcase,
  },
  {
    label: "Average Process Efficiency Gain",
    value: "38%",
    icon: TrendingUp,
  },
  {
    label: "Support & Reliability Commitment",
    value: "99.9%",
    icon: ShieldCheck,
  },
  {
    label: "Industries Served",
    value: "10+",
    icon: Layers3,
  },
] as const;

const caseStudies: CaseStudy[] = [
  {
    id: "tvet-digital-transformation",
    sector: "Education / TVET",
    client: "National TVET Institution",
    title: "Unifying Admissions, Finance, Hostel, and Academic Operations",
    summary:
      "A fragmented campus ecosystem was consolidated into one ERP environment with centralized reporting, fee control, and student lifecycle visibility.",
    challenge:
      "The institution was operating across disconnected systems for admissions, billing, hostels, and examinations, leading to reporting delays, manual reconciliations, and poor visibility across departments.",
    solution:
      "Optimum implemented an integrated ERP stack covering admissions, finance, hostel management, student records, approvals, and executive dashboards with role-based access and audit controls.",
    outcome:
      "Leadership gained a single operational view of the institution, finance teams reduced reconciliation overhead, and administrators processed critical workflows faster with better accountability.",
    metrics: [
      { label: "Faster student onboarding", value: "65%" },
      { label: "Reduction in manual reporting", value: "72%" },
      { label: "Finance visibility improvement", value: "Real-time" },
    ],
    icon: GraduationCap,
    accent: "from-blue-600/20 via-blue-500/10 to-red-500/10",
  },
  {
    id: "county-operations-modernization",
    sector: "Public Sector",
    client: "County Operations Program",
    title: "Modernizing Multi-Department Service Delivery and Reporting",
    summary:
      "Disparate departmental workflows were standardized through a secure platform built for approvals, accountability, and management reporting.",
    challenge:
      "Departments were relying on paper-heavy approvals, spreadsheet-based reporting, and siloed records that made cross-functional execution slow and difficult to audit.",
    solution:
      "Optimum configured modular workflows for approvals, records handling, financial oversight, and executive reporting, supported by permissions, escalations, and centralized data governance.",
    outcome:
      "The organization improved service turnaround, strengthened internal controls, and established a more transparent operating model for leadership and stakeholders.",
    metrics: [
      { label: "Approval turnaround improvement", value: "54%" },
      { label: "Paper process reduction", value: "80%" },
      { label: "Audit readiness", value: "Improved" },
    ],
    icon: Landmark,
    accent: "from-red-600/20 via-red-500/10 to-blue-500/10",
  },
  {
    id: "manufacturing-control-suite",
    sector: "Manufacturing",
    client: "Regional Manufacturing Group",
    title: "Connecting Procurement, Inventory, Production, and Finance",
    summary:
      "Operational bottlenecks were reduced by creating a single source of truth across procurement, stores, production planning, and finance.",
    challenge:
      "Inventory movement, procurement planning, and finance approvals were loosely connected, causing stock inconsistencies, delayed decisions, and weak cost visibility.",
    solution:
      "Optimum deployed a coordinated ERP workflow with procurement controls, stock management, approvals, supplier oversight, and reporting dashboards aligned to operational KPIs.",
    outcome:
      "Teams achieved tighter inventory discipline, faster decision-making, and stronger financial control across the supply chain and production lifecycle.",
    metrics: [
      { label: "Stock variance reduction", value: "41%" },
      { label: "Procurement cycle improvement", value: "36%" },
      { label: "Reporting speed", value: "3x" },
    ],
    icon: Building2,
    accent: "from-slate-700/30 via-blue-600/15 to-red-600/10",
  },
  {
    id: "retail-branch-visibility",
    sector: "Retail & Distribution",
    client: "Multi-Branch Retail Business",
    title: "Building Real-Time Visibility Across Branches and Inventory",
    summary:
      "Branch operations and back-office reporting were aligned through centralized controls for stock, sales, finance, and management oversight.",
    challenge:
      "The business struggled with lagging branch reports, stock mismatches, and inconsistent visibility between operations and finance.",
    solution:
      "Optimum introduced a structured ERP environment for branch reporting, stock control, sales tracking, and management analytics designed to support distributed operations.",
    outcome:
      "Management gained better control across locations, reduced reporting lag, and improved commercial responsiveness through more reliable operational data.",
    metrics: [
      { label: "Branch reporting acceleration", value: "60%" },
      { label: "Inventory accuracy gain", value: "33%" },
      { label: "Decision visibility", value: "Centralized" },
    ],
    icon: BarChart3,
    accent: "from-blue-700/20 via-sky-500/10 to-red-500/10",
  },
];

const featuredStudy = caseStudies[0];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="mx-auto max-w-3xl text-center"
    >
      <BadgePill label={eyebrow} centered={true} />
      <h2 className="mt-5 text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
        {description}
      </p>
    </motion.div>
  );
}

function MetricPill({ metric }: { metric: Metric }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm shadow-slate-200/40">
      <div className="text-2xl font-bold tracking-tight text-primary-cbe-500">
        {metric.value}
      </div>
      <div className="mt-1 text-sm text-slate-600">{metric.label}</div>
    </div>
  );
}

export default function CaseStudiesPage() {
  const router = useRouter();
  return (
    <main className="relative isolate overflow-hidden bg-white text-slate-900 w-full">
      <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top,_rgba(29,78,216,0.14),_transparent_46%),radial-gradient(circle_at_top_right,_rgba(220,38,38,0.1),_transparent_30%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.4),rgba(255,255,255,1))]" />

      <section
        className="w-full px-6 sm:px-15 lg:px-30 py-8 sm:pt-24"
        id="csp-hero"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2.5 sm:py-1.5 text-sm font-medium text-red-700"
            >
              <CheckCircle2 className="h-4 w-4 hidden sm:block" />
              Proven transformation across education, public sector, and
              enterprise operations
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-4xl text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.18] text-primary-cbe-500 tracking-[-1px]"
            >
              Case Studies That Show How We Turn Complex Operations into
              Measurable Outcomes.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-slate-600 text-base leading-relaxed"
            >
              Explore selected implementation stories that highlight how we help
              organizations streamline workflows, improve visibility, strengthen
              controls, and scale with confidence.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 hidden sm:flex flex-wrap gap-3"
            >
              {[
                "ERP Transformation",
                "Operational Visibility",
                "Automation & Controls",
                "Sector-Specific Delivery",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-slate-200/50"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[2rem] bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 shadow-sm p-6 sm:p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(239,68,68,0.28),_transparent_28%)]" />
            <div className="relative">
              <div className="flex items-center gap-3 text-sm font-medium text-primary-cbe-200">
                <Clock3 className="h-6 w-6" />
                Delivery built for speed, clarity, and scale
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                    >
                      <Icon className="h-5 w-5 text-white/90" />
                      <div className="mt-4 text-3xl font-bold tracking-tight text-white">
                        {stat.value}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-slate-300">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section
        className="w-full px-0 sm:px-15 lg:px-30 py-8 sm:py-12"
        id="csp-featured"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="relative overflow-hidden sm:rounded-[2rem] sm:shadow-sm"
        >
          <div className="relative overflow-hidden sm:rounded-[calc(2rem-4px)] bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800">
            <div className="relative grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_0.95fr] lg:p-12">
              <div>
                <div className="hidden sm:flex flex-col">
                  <BadgePill label="Featured Case Study" centered={false} />
                  <div className="mt-6 w-fit flex items-center gap-4 rounded-full border border-primary-cbe-50/10 bg-primary-cbe-50/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-cbe-200">
                    <GraduationCap className="h-5 w-5" />
                    {featuredStudy.sector}
                  </div>
                  <h2 className="mt-4 max-w-2xl text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-white">
                    {featuredStudy.title}
                  </h2>
                </div>
                <div className="sm:hidden flex flex-col items-start">
                  <div className="w-full flex flex-col items-center">
                    <BadgePill label="Featured Case Study" centered={true} />
                  </div>
                  
                  <div className="mt-6 w-fit flex items-center gap-4 rounded-full border border-primary-cbe-50/10 bg-primary-cbe-50/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-cbe-200">
                    <GraduationCap className="h-5 w-5" />
                    {featuredStudy.sector}
                  </div>
                  <h2 className="mt-4 max-w-2xl text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-white">
                    {featuredStudy.title}
                  </h2>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
                  {featuredStudy.summary}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {featuredStudy.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm"
                    >
                      <div className="text-xl font-bold tracking-tight text-white">
                        {metric.value}
                      </div>
                      <div className="mt-1 text-sm text-slate-300">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  { label: "Client", value: featuredStudy.client },
                  { label: "Challenge", value: featuredStudy.challenge },
                  { label: "Solution", value: featuredStudy.solution },
                  { label: "Outcome", value: featuredStudy.outcome },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm"
                  >
                    <div className="text-xs font-semibold uppercase tracking-widest text-primary-cbe-200">
                      {item.label}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-200 sm:text-[15px]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        className="w-full px-6 sm:px-15 lg:px-30 py-8 sm:py-12"
        id="csp-success-stories"
      >
        <SectionHeading
          eyebrow="Success Stories"
          title="A Closer Look at How Transformation Gets Delivered"
          description="These case studies are structured to spotlight the operational challenge, the implementation approach, and the measurable business outcome created by Optimum’s delivery model."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-6 lg:grid-cols-2"
        >
          {caseStudies.map((study) => {
            const Icon = study.icon;

            return (
              <motion.article
                key={study.id}
                variants={fadeUp}
                className="flex flex-col justify-start items-start group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8"
              >
                <div className="w-full flex flex-col flex-1">
                  <div
                    className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${study.accent}`}
                  />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-600">
                        {study.sector}
                      </div>
                      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-primary-cbe-500">
                        {study.title}
                      </h3>
                    </div>
                    <div className="rounded-xl border border-blue-100 bg-blue-50 p-3 text-blue-700">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {study.summary}
                  </p>

                  <div className="mt-7 grid gap-4">
                    {[
                      ["Challenge", study.challenge],
                      ["Solution", study.solution],
                      ["Outcome", study.outcome],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4"
                      >
                        <div className="text-xs font-semibold uppercase tracking-widest text-primary-cbe-400">
                          {label}
                        </div>
                        <p className="mt-2 text-sm leading-7 text-slate-700">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {study.metrics.map((metric) => (
                      <MetricPill key={metric.label} metric={metric} />
                    ))}
                  </div>
                </div>

                <div
                  className="mt-7 flex items-center gap-2 text-sm font-semibold text-blue-700 cursor-pointer"
                  onClick={() => {
                    router.push(
                      "/resources/case-studies/engagement-summary-sample",
                    );
                  }}
                >
                  View engagement summary
                  <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <section className="w-full py-16" id="csp-delivery-approach">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="sm:rounded-[2rem] sm:border border-primary-cbe-100 sm:bg-primary-cbe-50 px-6 sm:p-8 lg:ml-30"
          >
            <div className="hidden sm:flex flex-col">
              <BadgePill label="Delivery Approach" centered={false} />
              <h3 className="mt-5 text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500">
                Why Our Implementations Create Durable Results
              </h3>
            </div>
            <div className="sm:hidden flex flex-col text-center items-center">
              <BadgePill label="Delivery Approach" centered={true} />
              <h3 className="mt-5 text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500">
                Why Our Implementations Create Durable Results
              </h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Beyond software deployment, the implementation model focuses on
              business alignment, process clarity, user adoption, security, and
              long-term operational continuity.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            className="grid gap-4 sm:grid-cols-2 px-6 lg:pr-30"
          >
            {[
              {
                title: "Sector-aware configuration",
                description:
                  "Solutions are adapted to the realities of the institution, enterprise, or public body rather than forcing generic process models.",
              },
              {
                title: "Integrated operational control",
                description:
                  "Finance, reporting, approvals, records, and business workflows are aligned so teams operate from one trusted system.",
              },
              {
                title: "Security and governance by design",
                description:
                  "Role-based access, auditability, and structured controls support accountability and reduce operational risk.",
              },
              {
                title: "Scalable delivery foundation",
                description:
                  "Implementations are designed to support future modules, new departments, and changing reporting requirements over time.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-[1.75rem] border border-primary-cbe-100 bg-white p-6 shadow-sm"
              >
                <h4 className="text-lg font-semibold tracking-tight text-primary-cbe-500">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        className="w-full px-6 sm:px-15 lg:px-30 pb-24 pt-10"
        id="csp-cta"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="relative overflow-hidden rounded-[2rem] border border-primary-cbe-100 bg-white p-8 shadow-sm sm:p-10"
        >
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,_rgba(29,78,216,0.12),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(239,68,68,0.12),_transparent_40%)] lg:block" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-cbe-400">
                Next Action
              </p>
              <h3 className="mt-5 text-2xl font-bold text-pretty leading-tight tracking-tight text-primary-cbe-500">
                Ready to Position your Next Implementation as a Measurable
                Success Story?
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Partner with Optimum ERP Systems Ltd to design, implement, and
                scale a solution that improves visibility, strengthens control,
                and drives operational performance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-primary-cta px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary-cta-800"
              >
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:border-slate-400 hover:bg-slate-50"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
