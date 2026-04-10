import BadgePill from "@/components/ui/badge-pill";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Blocks,
  BookOpen,
  Building2,
  Factory,
  GraduationCap,
  Handshake,
  Landmark,
  Layers3,
  LineChart,
  School,
  ShieldCheck,
  ShoppingCart,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type Industry = {
  title: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
  accentClass: string;
};

type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Segment = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

const industries: Industry[] = [
  {
    title: "Universities",
    description:
      "Support complex academic structures, student finance, examinations, approvals, and executive reporting through one modular institutional platform.",
    highlights: [
      "Multi-department workflows",
      "Finance & academics",
      "Executive visibility",
    ],
    icon: GraduationCap,
    accentClass: "from-blue-700/15 to-red-600/10",
  },
  {
    title: "National Polytechnics",
    description:
      "Digitize admissions, CBET-aligned assessments, fee management, timetabling, and campus-wide administration with a system built for scale.",
    highlights: ["CBET-CDACC ready", "Timetabling", "Student lifecycle"],
    icon: BookOpen,
    accentClass: "from-sky-700/15 to-blue-600/10",
  },
  {
    title: "Technical & Vocational Colleges",
    description:
      "Streamline applications, registration, attendance, finance, examinations, and day-to-day institutional workflows in one connected environment.",
    highlights: [
      "Online applications",
      "Attendance control",
      "Operational reporting",
    ],
    icon: Users,
    accentClass: "from-red-600/15 to-blue-700/10",
  },
  {
    title: "Teachers' Colleges",
    description:
      "Modernize academic administration, fee billing, staff operations, and student communication with intuitive tools that reduce manual workload.",
    highlights: ["Academic records", "Fee billing", "SMS communication"],
    icon: Banknote,
    accentClass: "from-blue-800/15 to-cyan-500/10",
  },
  {
    title: "Student Lifecycle Management",
    description:
      "Manage enrollment, demographic records, attendance, sponsorship details, notifications, and student engagement from application to graduation.",
    highlights: ["Admissions", "Student records", "Communication tools"],
    icon: Landmark,
    accentClass: "from-rose-600/15 to-blue-700/10",
  },
  {
    title: "Academic & Examination Management",
    description:
      "Automate course registration, grading, transcripts, result computation, exam scheduling, and lecturer evaluation with institution-ready workflows.",
    highlights: [
      "Results & transcripts",
      "Exam scheduling",
      "Lecturer evaluation",
    ],
    icon: ShoppingCart,
    accentClass: "from-blue-700/15 to-red-500/10",
  },
  {
    title: "Finance, Payroll & Procurement",
    description:
      "Unify student finance, IPSAS-compliant accounting, payroll, budgeting, bank reconciliation, procurement, and stores oversight.",
    highlights: [
      "IPSAS-ready finance",
      "Payroll automation",
      "Bank integration",
    ],
    icon: Factory,
    accentClass: "from-slate-700/15 to-blue-700/10",
  },
  {
    title: "Campus Operations & Student Services",
    description:
      "Coordinate hostels, library, catering, clinic, student affairs, transport, and support services through digitally connected workflows.",
    highlights: ["Hostels & library", "Clinic & catering", "Student affairs"],
    icon: School,
    accentClass: "from-blue-600/15 to-red-600/10",
  },
  {
    title: "Security, Access & Governance",
    description:
      "Strengthen accountability with biometrics, audit trails, gate control, risk management, executive dashboards, and institutional oversight tools.",
    highlights: ["Biometric control", "Audit & risk", "CEO dashboard"],
    icon: Wrench,
    accentClass: "from-red-500/15 to-blue-800/10",
  },
];

const capabilities: Capability[] = [
  {
    title: "Modular Architecture & Flexible Rollout",
    description:
      "Implement only the modules your institution needs today, then expand progressively as priorities, budgets, and operational demands evolve.",
    icon: Blocks,
  },
  {
    title: "Hybrid Deployment Model",
    description:
      "Combine on-premise security with web accessibility so institutions maintain control of their data while enabling convenient remote access.",
    icon: Building2,
  },
  {
    title: "Compliance-Ready Reporting",
    description:
      "Support CBET-CDACC workflows, IPSAS-aligned finance reporting, and institutional reporting requirements through structured, decision-ready outputs.",
    icon: LineChart,
  },
  {
    title: "Security, Audit Trails & Biometrics",
    description:
      "Use role-based access, encryption, indelible audit records, and biometric integrations to strengthen accountability and institutional control.",
    icon: ShieldCheck,
  },
  {
    title: "Integration, Migration & Multi-Platform Access",
    description:
      "Connect with banks, E-Citizen, SMS, email, and existing systems while supporting secure access across Windows, Linux, Mac, and mobile devices.",
    icon: Handshake,
  },
  {
    title: "Proven Delivery, Training & Support",
    description:
      "Back implementation with experienced technical teams, onboarding, process alignment, and long-term support that encourages sustained adoption.",
    icon: Layers3,
  },
];

const featuredSegments: Segment[] = [
  {
    id: "universities",
    eyebrow: "Universities",
    title:
      "Built for institutions managing complex academic, financial, and multi-department operations.",
    description:
      "UltimateERP gives universities a modular academic management platform for admissions, examinations, finance, approvals, reporting, and executive oversight.",
    bullets: [
      "Supports institution-wide academic and administrative workflows",
      "Helps leadership gain visibility through dashboards and reports",
      "Scales across departments, campuses, and operational units",
    ],
  },
  {
    id: "polytechnics",
    eyebrow: "National Polytechnics & TVETs",
    title:
      "Designed for institutions that need CBET-ready workflows and disciplined operational control.",
    description:
      "From online applications and student finance to examinations, timetabling, placement, and clearance, the platform aligns with the realities of TVET administration.",
    bullets: [
      "CBET-CDACC compliant academic process support",
      "Strong workflow coverage for finance, exams, and timetabling",
      "Modular deployment that fits institutional budgets and priorities",
    ],
  },
  {
    id: "teachers-colleges",
    eyebrow: "Teachers' Colleges & Learning Institutions",
    title:
      "Tailored for institutions that want reliable digital administration without unnecessary complexity.",
    description:
      "Optimum positions UltimateERP as a practical long-term partner for institutions seeking efficiency, accountability, and better service delivery.",
    bullets: [
      "Intuitive workflows for students, staff, and administrators",
      "Connected operations across finance, academics, and services",
      "Trusted implementation partner with strong local institutional experience",
    ],
  },
];

export default function IndustrySolutionsPageBody() {
  return (
    <main className="bg-white text-slate-900 w-full">
      <section
        className="relative isolate overflow-hidden bg-slate-950"
        id="is-hero"
      >
        <div className="absolute inset-0">
          <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-blue-700/25 blur-3xl" />
          <div className="absolute right-[-6rem] top-20 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
          <div className="absolute bottom-[-8rem] left-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative w-full px-6 py-20 sm:px-16 lg:px-30 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-cbe-200">
                UltimateERP Solutions
              </span>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                UltimateERP for learning institutions that need control,
                compliance, and operational excellence.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Position Optimum as a trusted institutional technology partner
                with a modular academic management system used by institutions
                of higher learning to automate administration, improve
                visibility, and strengthen accountability across operations.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#is-all-industries"
                  className="inline-flex items-center justify-center rounded-full bg-primary-cta px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-950/30 transition duration-300 hover:bg-primary-cta-800"
                >
                  Explore solution areas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <a
                  href="#is-capabilities"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-blue-300/40 hover:bg-white/10"
                >
                  View platform strengths
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "Universities",
                  "National Polytechnics",
                  "TVET Colleges",
                  "Teachers' Colleges",
                  "CBET-CDACC",
                  "Hybrid ERP",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-200">
                    Platform coverage
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold text-white">
                    What UltimateERP covers
                  </h2>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
                  <Building2 className="h-6 w-6 text-red-400" />
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Admissions & applications",
                  "Student management",
                  "Academics & examinations",
                  "Student finance",
                  "Core finance & accounting",
                  "HR & payroll",
                  "Timetabling",
                  "Library & hostels",
                  "Biometrics & security",
                  "Executive dashboards",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-slate-200 transition duration-300 hover:border-blue-300/30 hover:bg-white/10"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
                <p className="text-sm leading-7 text-slate-200">
                  From admissions and examinations to IPSAS-ready finance,
                  payroll, biometrics, and executive reporting, UltimateERP
                  gives institutions one connected operating environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full px-6 py-20 sm:px-16 lg:px-30"
        id="is-featured-section"
      >
        <div className="max-w-3xl">
          <BadgePill label="Core institution segments" centered={false} />
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-primary-cbe-500 sm:text-4xl">
            Purpose-built for the learning institutions Optimum serves best.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Instead of using generic ERP language, this page should immediately
            reflect the institutions highlighted in the brochure and show where
            UltimateERP delivers the strongest operational fit.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredSegments.map((segment) => (
            <article
              key={segment.id}
              id={segment.id}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-cbe-400">
                {segment.eyebrow}
              </span>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-primary-cbe-500">
                {segment.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {segment.description}
              </p>

              <ul className="mt-6 space-y-3">
                {segment.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <BadgeCheck className="mt-0.5 h-4 w-4 flex-none text-red-600" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        id="is-all-industries"
        className="border-y border-slate-200 bg-slate-50/80"
      >
        <div className="px-6 py-20 sm:px-16 lg:px-30">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <BadgePill label="Core solution areas" centered={false} />
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-primary-cbe-500 sm:text-4xl">
                UltimateERP modules mapped to the realities of institutional
                operations.
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              These cards translate brochure content into focused messaging for
              the modules and operational areas that matter most to learning
              institutions.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  key={industry.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${industry.accentClass}`}
                  />

                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 transition duration-300 group-hover:border-blue-200 group-hover:bg-blue-50">
                      <Icon className="h-6 w-6 text-blue-700" />
                    </div>

                    <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-500">
                      Module area
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-primary-cbe-500">
                    {industry.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {industry.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {industry.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 inline-flex items-center text-sm font-semibold text-red-600 transition duration-300 group-hover:translate-x-1">
                    Explore this solution area
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="is-capabilities" className="px-6 py-20 sm:px-16 lg:px-30">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <BadgePill label="Platform strengths" centered={false} />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-primary-cbe-500 sm:text-4xl">
              Why institutions choose Optimum and UltimateERP.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              This section should reinforce the brochure’s core differentiators:
              modular deployment, hybrid architecture, strong security,
              compliance readiness, integration capability, and long-term
              institutional value.
            </p>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm leading-7 text-slate-700">
                Keep the tone confident and institutional. The goal is to show
                Optimum as a proven enterprise technology partner for learning
                institutions, not just a software vendor.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-red-200 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 transition duration-300 group-hover:border-red-200 group-hover:bg-red-50">
                    <Icon className="h-5 w-5 text-blue-700" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-primary-cbe-500">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {capability.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="bg-gradient-to-br from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800"
        id="is-works"
      >
        <div className="w-full px-6 py-20 sm:px-16 lg:px-30">
          <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:grid-cols-[1fr_0.9fr] lg:p-10">
            <div>
              <BadgePill label="Why UltimateERP stands out" centered={false} />

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                A single platform that connects institutional operations without
                sacrificing control.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                The brochure positions UltimateERP as a modular hybrid system
                built for reliability, customization, accountability, and
                long-term institutional value. It gives institutions a practical
                path to automate processes across departments while maintaining
                security and governance.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Trusted by institutions of higher learning across Kenya",
                  "Hybrid deployment with strong security and accessibility",
                  "No per-user licensing and modular growth without budget strain",
                  "Supports audit trails, biometrics, compliance, and reporting",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-4 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6">
              <h3 className="text-xl font-semibold text-white">
                What decision-makers can evaluate
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  "Book a personalized demonstration of the modules relevant to your institution",
                  "Discuss rollout, training, support, and data migration requirements",
                  "Request a quotation aligned to your scope, priorities, and budget",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <BadgeCheck className="mt-0.5 h-4 w-4 flex-none text-red-400" />
                    <p className="text-sm leading-7 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary-cta px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-primary-cta-800"
              >
                Request a demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-20 sm:px-16 lg:px-30" id="is-cta">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 shadow-sm">
          <div className="grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-14">
            <div className="max-w-2xl">
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-primary-cbe-200">
                Final call to action
              </span>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                See how UltimateERP can modernize academic, financial, and
                institutional operations.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-200">
                Use this closing section to move institutions from interest to
                action with a stronger invitation to explore a personalized
                demonstration, consultation, or implementation discussion.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:flex-col">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary-cta px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-primary-cta-800"
              >
                Request a consultation
              </a>

              <a
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/15"
              >
                Explore UltimateERP
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
