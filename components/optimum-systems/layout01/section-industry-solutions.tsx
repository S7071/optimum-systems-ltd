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
    title: "TVETs, Colleges & Polytechnics",
    description:
      "Digitize admissions, student finance, examinations, timetables, hostel workflows, and institutional reporting in one connected experience.",
    highlights: ["Academic ERP", "Fee management", "Operational reporting"],
    icon: GraduationCap,
    accentClass: "from-blue-700/15 to-red-600/10",
  },
  {
    title: "Universities",
    description:
      "Support complex academic structures, finance, departmental approvals, and multi-campus coordination with enterprise-grade workflows.",
    highlights: ["Multi-campus ready", "Workflow approvals", "Faculty operations"],
    icon: BookOpen,
    accentClass: "from-sky-700/15 to-blue-600/10",
  },
  {
    title: "SACCOs",
    description:
      "Streamline member records, loan cycles, deposits, compliance processes, and decision-making through centralized SACCO operations.",
    highlights: ["Member lifecycle", "Loan processing", "Financial visibility"],
    icon: Users,
    accentClass: "from-red-600/15 to-blue-700/10",
  },
  {
    title: "Microfinance Institutions",
    description:
      "Modernize collections, customer servicing, branch operations, and reporting with tools built for structured financial workflows.",
    highlights: ["Branch operations", "Collections support", "Risk visibility"],
    icon: Banknote,
    accentClass: "from-blue-800/15 to-cyan-500/10",
  },
  {
    title: "Building Societies",
    description:
      "Coordinate member servicing, payment processes, records, and performance reporting through a consistent digital operating model.",
    highlights: ["Member servicing", "Payment workflows", "Performance tracking"],
    icon: Landmark,
    accentClass: "from-rose-600/15 to-blue-700/10",
  },
  {
    title: "Distributors & Retailers",
    description:
      "Connect inventory, procurement, sales, fulfillment, and branch visibility so teams can move faster with fewer operational blind spots.",
    highlights: ["Inventory control", "Sales operations", "Branch visibility"],
    icon: ShoppingCart,
    accentClass: "from-blue-700/15 to-red-500/10",
  },
  {
    title: "Manufacturers",
    description:
      "Bring purchasing, stock movement, production planning, warehousing, and reporting together for more reliable execution.",
    highlights: ["Production support", "Warehouse visibility", "Cost tracking"],
    icon: Factory,
    accentClass: "from-slate-700/15 to-blue-700/10",
  },
  {
    title: "Secondary Schools",
    description:
      "Simplify finance, student administration, communication, and day-to-day institutional workflows with a structured school system.",
    highlights: ["Student administration", "Finance workflows", "Operational control"],
    icon: School,
    accentClass: "from-blue-600/15 to-red-600/10",
  },
  {
    title: "Construction Firms",
    description:
      "Improve project oversight, purchasing, field coordination, and financial control with connected workflows across teams.",
    highlights: ["Project oversight", "Procurement workflows", "Cost visibility"],
    icon: Wrench,
    accentClass: "from-red-500/15 to-blue-800/10",
  },
];

const capabilities: Capability[] = [
  {
    title: "Modular ERP Architecture",
    description:
      "Deploy only what each industry needs today, then expand cleanly as operational scope, teams, and reporting demands grow.",
    icon: Blocks,
  },
  {
    title: "Kenya-Focused Operational Fit",
    description:
      "Position the platform around real institutional and business workflows instead of forcing organizations into generic templates.",
    icon: Building2,
  },
  {
    title: "Decision-Ready Reporting",
    description:
      "Turn day-to-day operational activity into dashboards, summaries, and actionable visibility for leadership and finance teams.",
    icon: LineChart,
  },
  {
    title: "Security, Control & Accountability",
    description:
      "Use structured permissions, traceable workflows, and centralized controls to reduce operational friction and strengthen governance.",
    icon: ShieldCheck,
  },
  {
    title: "Implementation & Training Support",
    description:
      "Back the software with onboarding, process alignment, and continuous support so adoption is practical, not theoretical.",
    icon: Handshake,
  },
  {
    title: "Scalable Multi-Team Operations",
    description:
      "Support growth across campuses, branches, departments, and operating units without fragmenting the core platform experience.",
    icon: Layers3,
  },
];

const featuredSegments: Segment[] = [
  {
    id: "education",
    eyebrow: "Education",
    title: "Built for academic institutions managing scale, structure, and service delivery.",
    description:
      "From admissions and student finance to examinations, departments, hostels, and reporting, the page positions Optimum as a serious long-term education technology partner.",
    bullets: [
      "Academic and administrative workflows in one ecosystem",
      "Clear support for institutional scale and process complexity",
      "Reporting layers designed for management visibility",
    ],
  },
  {
    id: "financial-services",
    eyebrow: "Financial Services",
    title: "Tailored for member-based and regulated financial operations.",
    description:
      "The layout gives SACCOs, MFIs, and building societies a dedicated message: operational efficiency, disciplined workflows, and stronger reporting without a fragmented toolset.",
    bullets: [
      "Member and customer lifecycle visibility",
      "Loan, servicing, and branch process support",
      "Structured control for finance-led environments",
    ],
  },
  {
    id: "enterprise-public",
    eyebrow: "Enterprise & Institutions",
    title: "Designed for retailers, manufacturers, construction firms, and operational institutions.",
    description:
      "This section frames Optimum as a flexible implementation partner able to adapt ERP capability to different operating models, teams, and reporting needs.",
    bullets: [
      "Inventory, procurement, and project-linked operations",
      "Cross-team coordination with centralized oversight",
      "Flexible deployment for evolving process demands",
    ],
  },
];

export default function IndustrySolutionsPageBody() {
  return (
    <main className="bg-white text-slate-900 w-full">
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-blue-700/25 blur-3xl" />
          <div className="absolute right-[-6rem] top-20 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
          <div className="absolute bottom-[-8rem] left-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative w-full px-6 py-20 sm:px-16 lg:px-30 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-cbe-200">
                Industry Solutions
              </span>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                ERP solutions shaped around how each industry actually operates.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Present Optimum as more than a software vendor. This page positions
                the company as a sector-aware implementation partner for education,
                financial services, retail, manufacturing, construction, and
                institutions that need structured digital operations.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#all-industries"
                  className="inline-flex items-center justify-center rounded-full bg-primary-cta px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-950/30 transition duration-300 hover:bg-primary-cta-800"
                >
                  Explore industries
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-blue-300/40 hover:bg-white/10"
                >
                  View shared capabilities
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {["Education", "Financial Services", "Retail & Distribution", "Manufacturing", "Construction", "Institutions"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-200">
                    Sector coverage
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold text-white">
                    Where Optimum fits
                  </h2>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
                  <Building2 className="h-6 w-6 text-red-400" />
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "TVETs & Colleges",
                  "Universities",
                  "SACCOs",
                  "Microfinance",
                  "Building Societies",
                  "Retail & Distribution",
                  "Manufacturing",
                  "Secondary Schools",
                  "Construction",
                  "Institutions",
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
                  Use this hero card to quickly communicate breadth, while the
                  sections below make the industry positioning feel specific,
                  credible, and enterprise-ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <BadgePill label="Featured sectors" centered={false} />
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-primary-cbe-500 sm:text-4xl">
            The page should speak differently to each buyer group.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Instead of listing solutions generically, break the narrative into
            high-value segments so visitors immediately recognize their operating
            environment and understand how Optimum can support it.
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
                  <li key={bullet} className="flex items-start gap-3 text-sm text-slate-700">
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
        id="all-industries"
        className="border-y border-slate-200 bg-slate-50/80"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <BadgePill label="Industries we serve" centered={false} />
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-primary-cbe-500 sm:text-4xl">
                Sector-specific messaging with a consistent premium structure.
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              These cards are designed to feel practical and commercial, with enough
              detail to establish relevance while keeping the page crisp and
              conversion-oriented.
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
                      Industry
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
                    Tailor modules for this industry
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="capabilities" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <BadgePill label="Shared capabilities" centered={false} />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-primary-cbe-500 sm:text-4xl">
              Common strengths that support every industry solution.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              This section reassures buyers that while the messaging is
              industry-specific, the core platform still delivers enterprise
              fundamentals: scalability, control, modularity, reporting, and
              implementation support.
            </p>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm leading-7 text-slate-700">
                Keep the tone consultative. The goal is to show Optimum as a partner
                that understands workflows, not just a vendor listing modules.
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

      <section className="bg-gradient-to-br from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:grid-cols-[1fr_0.9fr] lg:p-10">
            <div>
              <BadgePill label="Why this structure works" centered={false} />

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                A page architecture that balances breadth, clarity, and commercial trust.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                The content order moves from brand-level positioning into sector
                relevance, then into shared operational strengths. That sequence
                helps visitors understand both coverage and credibility without
                overwhelming them with feature noise too early.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Clear segmentation for different buyer types",
                  "Premium enterprise presentation without clutter",
                  "Expandable foundation for future case studies",
                  "Natural bridge into demos, quotations, and consultations",
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
                Suggested conversion panel
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  "Book an industry-specific product walkthrough",
                  "Request a tailored quotation based on your workflows",
                  "Talk to the team about modules, deployment, and support",
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
                Talk to Optimum
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 shadow-sm">
          <div className="grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-14">
            <div className="max-w-2xl">
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-primary-cbe-200">
                Final call to action
              </span>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Industry-fit software starts with understanding how your operations work.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-200">
                Use this closing section to move buyers from exploration into
                conversation with a stronger, more consultative message than a
                generic “contact us” block.
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
                Explore products
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}