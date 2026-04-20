import BadgePill from "@/components/ui/badge-pill";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock3,
  FileText,
  GraduationCap,
  LayoutDashboard,
  ShieldCheck,
  Users,
} from "lucide-react";
import Link from "next/link";

type SummaryMetric = {
  label: string;
  value: string;
  detail: string;
};

type EngagementStep = {
  phase: string;
  title: string;
  description: string;
};

type Deliverable = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

type CaseStudySummary = {
  slug: string;
  sector: string;
  client: string;
  title: string;
  summary: string;
  engagementOverview: string;
  businessContext: string;
  challenge: string;
  objective: string;
  solution: string;
  executionNotes: string;
  quote: {
    text: string;
    author: string;
    role: string;
  };
  metrics: SummaryMetric[];
  modules: string[];
  deliverables: Deliverable[];
  timeline: EngagementStep[];
};

const engagementSummary: CaseStudySummary = {
  slug: "tvet-digital-transformation",
  sector: "Education / TVET",
  client: "National TVET Institution",
  title: "Unifying Admissions, Finance, Hostel, and Academic Operations",
  summary:
    "A fragmented campus ecosystem was consolidated into one ERP environment with centralized reporting, fee control, and end-to-end student lifecycle visibility.",
  engagementOverview:
    "This engagement focused on replacing disconnected campus workflows with a structured, role-based ERP environment that improved visibility for leadership, reduced administrative overhead, and strengthened accountability across key academic and operational functions.",
  businessContext:
    "The institution was operating with multiple disconnected tools and manual processes across admissions, billing, hostel allocation, records administration, and examination management. This created duplicated work, delayed reporting cycles, inconsistent records, and limited decision-making visibility for management.",
  challenge:
    "Operational teams were reconciling information manually across departments, which slowed down onboarding, finance processing, and reporting. Leadership lacked a single trusted view of institutional operations, while staff had to manage critical workflows through fragmented processes.",
  objective:
    "Design and implement a centralized ERP environment that could streamline student administration, improve fee and finance visibility, tighten internal process control, and provide management with real-time operational insight.",
  solution:
    "Optimum configured and deployed an integrated ERP implementation covering admissions, student records, finance workflows, hostel management, approvals, and executive dashboards. The platform was structured with role-based access, process accountability, and centralized reporting to support both daily execution and management oversight.",
  executionNotes:
    "The implementation was delivered through a phased rollout model that prioritized process mapping, data structure alignment, operational training, and controlled departmental adoption. This reduced change friction while ensuring the institution could transition into the new environment with minimal disruption.",
  quote: {
    text: "The new environment gave us a far clearer view of operations and significantly reduced the time spent reconciling information across departments.",
    author: "Project Sponsor",
    role: "Institutional Operations Lead",
  },
  metrics: [
    {
      label: "Student onboarding speed",
      value: "65%",
      detail: "Faster admission-to-registration processing across departments.",
    },
    {
      label: "Manual reporting reduction",
      value: "72%",
      detail:
        "Fewer spreadsheet consolidations and repetitive back-office tasks.",
    },
    {
      label: "Finance visibility",
      value: "Real-time",
      detail:
        "Management gained direct access to current financial activity and status.",
    },
    {
      label: "Operational accountability",
      value: "Improved",
      detail: "Approval ownership and audit visibility became more structured.",
    },
  ],
  modules: [
    "Admissions Management",
    "Student Records",
    "Finance & Billing",
    "Hostel Management",
    "Approvals Workflow",
    "Executive Reporting Dashboards",
  ],
  deliverables: [
    {
      title: "Process discovery and workflow mapping",
      description:
        "Documented and aligned cross-department workflows before implementation to reduce fragmentation and improve transition quality.",
      icon: FileText,
    },
    {
      title: "Integrated ERP module rollout",
      description:
        "Implemented connected modules for admissions, finance, hostels, student records, and approvals within one structured environment.",
      icon: LayoutDashboard,
    },
    {
      title: "Role-based access and governance controls",
      description:
        "Applied permissions, approval boundaries, and accountability mechanisms to strengthen operational control and audit readiness.",
      icon: ShieldCheck,
    },
    {
      title: "Training and adoption support",
      description:
        "Supported teams with guided onboarding and phased adoption to improve usability, consistency, and confidence after rollout.",
      icon: Users,
    },
  ],
  timeline: [
    {
      phase: "Phase 01",
      title: "Discovery and operating model assessment",
      description:
        "Reviewed current workflows, data handling, pain points, and reporting gaps across key institutional departments.",
    },
    {
      phase: "Phase 02",
      title: "Configuration and process alignment",
      description:
        "Structured the ERP environment around approved workflows, reporting needs, user roles, and departmental responsibilities.",
    },
    {
      phase: "Phase 03",
      title: "Rollout, training, and controlled adoption",
      description:
        "Introduced the solution in a phased manner to reduce disruption while enabling staff readiness and operational continuity.",
    },
    {
      phase: "Phase 04",
      title: "Optimization and management visibility",
      description:
        "Refined reporting outputs, strengthened oversight workflows, and improved executive visibility into institutional performance.",
    },
  ],
};

const quickStats = [
  {
    label: "Sector",
    value: engagementSummary.sector,
    icon: GraduationCap,
  },
  {
    label: "Client Type",
    value: engagementSummary.client,
    icon: Building2,
  },
  {
    label: "Engagement Focus",
    value: "ERP Transformation",
    icon: Briefcase,
  },
  {
    label: "Outcome",
    value: "Operational Visibility",
    icon: BarChart3,
  },
] as const;

function SectionTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <h3 className="mt-5 text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
        {description}
      </p>
    </div>
  );
}

export default function CaseStudyEngagementSummaryPage() {
  return (
    <main className="relative isolate overflow-hidden bg-white text-slate-900 w-full">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(29,78,216,0.14),_transparent_48%),radial-gradient(circle_at_top_right,_rgba(220,38,38,0.10),_transparent_30%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.45),rgba(255,255,255,1))]" />

      <section
        className="w-full px-6 sm:px-15 lg:px-30 pb-12 pt-16 sm:pt-20"
        id="cs-hero"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/resources/case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-primarycbe-800 shadow-sm transition-all duration-300 hover:border-slate-400 hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>

          <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700">
            <BadgeCheck className="h-4 w-4" />
            Engagement Summary
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-4 rounded-full border border-primary-cbe-100 bg-primary-cbe-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-cbe-400">
              <GraduationCap className="h-5 w-5" />
              {engagementSummary.sector}
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.18] text-primary-cbe-500 tracking-[-1px]">
              {engagementSummary.title}
            </h1>
            <p className="mt-6 max-w-2xl text-slate-600 text-base leading-relaxed">
              {engagementSummary.summary}
            </p>

            <div className="mt-8 hidden sm:flex flex-wrap gap-3">
              {[
                "ERP Modernization",
                "Structured Rollout",
                "Operational Visibility",
                "Governance & Control",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary-cbe-100 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-slate-200/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 shadow-sm p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(239,68,68,0.28),_transparent_30%)]" />
            <div className="relative">
              <div className="flex items-center gap-3 text-sm font-medium text-primary-cbe-200">
                <Clock3 className="h-6 w-6" />
                At-a-glance engagement profile
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {quickStats.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                    >
                      <Icon className="h-5 w-5 text-white/90" />
                      <div className="mt-4 text-xl font-bold tracking-tight text-white">
                        {item.value}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-slate-300">
                        {item.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-0 sm:px-15 lg:px-30 py-8" id="cs-overview">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-none sm:rounded-[2rem] sm:border border-primary-cbe-100 bg-white p-8 sm:shadow-sm">
            <BadgePill label="Overview" centered={false} />
            <SectionTitle
              title="What this engagement was designed to achieve"
              description={engagementSummary.engagementOverview}
            />

            <div className="mt-8 grid gap-4">
              {[
                ["Business context", engagementSummary.businessContext],
                ["Core challenge", engagementSummary.challenge],
                ["Strategic objective", engagementSummary.objective],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-primary-cbe-100 bg-slate-50/80 p-5"
                >
                  <div className="text-xs font-semibold uppercase tracking-widest text-primary-cbe-400">
                    {label}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-[15px]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-primary-cbe-500 shadow-sm w-full">
            <div className="relative overflow-hidden rounded-none sm:rounded-[calc(2rem-4px)] bg-primary-cbe-500 px-6 py-16 sm:p-10 w-full h-full">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(29,78,216,0.20),rgba(2,6,23,0.92),rgba(220,38,38,0.16))]" />
              <div className="relative flex flex-col items-center gap-8 h-full w-full">
                <div className="flex-1 flex flex-col items-start">
                  <BadgePill label="Solution Summary" centered={false} />
                  <h2 className="mt-5 text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-white">
                    How the Optimum implementation was structured
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
                    {engagementSummary.solution}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-slate-200 sm:text-[15px]">
                    {engagementSummary.executionNotes}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl border border-white/10 bg-white/10 p-3 text-primary-cbe-200 hidden sm:block">
                      <BookOpenCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-base leading-8 text-white">
                        “{engagementSummary.quote.text}”
                      </p>
                      <div className="mt-4 text-sm font-semibold text-white">
                        {engagementSummary.quote.author}
                      </div>
                      <div className="text-sm text-primary-cbe-200">
                        {engagementSummary.quote.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 sm:px-15 lg:px-30 py-16" id="cs-impact">
        <BadgePill label="Measured Impact" centered={false} />
        <SectionTitle
          title="Business outcomes created by the engagement"
          description="The engagement was structured around improving workflow speed, institutional visibility, and control across the most operationally critical departments."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {engagementSummary.metrics.map((metric) => (
            <article
              key={metric.label}
              className="group rounded-[1.75rem] border border-primary-cbe-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="inline-flex rounded-xl border border-primary-cbe-100 bg-primary-cbe-50 p-3 text-blue-700 transition-colors duration-300 group-hover:bg-primary-cbe-100">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div className="mt-6 text-2xl sm:text-4xl font-bold tracking-tight text-primary-cbe-500">
                {metric.value}
              </div>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-primary-cbe-500">
                {metric.label}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {metric.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="w-full px-0 sm:px-15 lg:px-30 py-8"
        id="cs-deliverables"
      >
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="sm:rounded-[2rem] sm:border border-primary-cbe-100 bg-primary-cbe-50 px-6 py-16 sm:p-8">
            <BadgePill label="Modules Delivered" centered={false} />
            <SectionTitle
              title="Core modules implemented in the engagement"
              description="The delivery was centered on the operational areas with the highest need for structure, speed, and management visibility."
            />

            <div className="mt-8 grid gap-3">
              {engagementSummary.modules.map((module) => (
                <div
                  key={module}
                  className="flex items-start gap-3 rounded-2xl border border-primary-cbe-100 bg-white px-4 py-4 text-sm font-medium text-slate-700 shadow-sm shadow-slate-200/50"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                  <span>{module}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sm:rounded-[2rem] sm:border border-primary-cbe-100 bg-white px-6 py-16 sm:p-8 sm:shadow-sm">
            <BadgePill label="Key Deliverables" centered={false} />
            <SectionTitle
              title="What Optimum delivered beyond the software itself"
              description="The engagement combined platform implementation with workflow alignment, governance structure, and adoption support to ensure durable operational results."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {engagementSummary.deliverables.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[1.6rem] border border-primary-cbe-100 bg-slate-50/80 p-5 transition-all duration-300 hover:border-blue-200 hover:bg-white"
                  >
                    <div className="inline-flex rounded-xl border border-primary-cbe-100 bg-primary-cbe-50 p-3 text-primary-cbe-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold tracking-tight text-primary-cbe-500">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 sm:px-15 lg:px-30 py-16" id="cs-timeline">
        <BadgePill label="Implementation Timeline" centered={false} />
        <SectionTitle
          title="How the engagement progressed from assessment to measurable impact"
          description="A phased rollout reduced operational risk, improved team readiness, and ensured the implementation could mature into a stable institution-wide operating environment."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {engagementSummary.timeline.map((step) => (
            <article
              key={step.phase}
              className="relative rounded-[1.75rem] border border-primary-cbe-100 bg-white p-6 shadow-sm overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 rounded-b-full bg-gradient-to-r from-primary-cbe-400 to-primary-cta" />
              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary-cbe-400">
                  {step.phase}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-primary-cbe-500">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full px-6 sm:px-15 lg:px-30 pb-24 pt-8" id="cs-cta">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary-cbe-500 p-8 shadow-sm sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.28),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(239,68,68,0.22),_transparent_32%)]" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-cbe-200">
                Next Action
              </p>
              <h3 className="mt-5 text-2xl font-bold text-pretty leading-tight tracking-tight text-primary-cbe-50">
                Want to build a similar transformation journey for your
                organization?
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
                Engage Optimum to design and implement a structured solution
                that improves visibility, strengthens control, and delivers
                measurable operational performance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-primary-cta px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary-cta-800"
              >
                Start a Similar Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/resources/case-studies"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:border-slate-400 hover:bg-slate-50"
              >
                Explore More Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
