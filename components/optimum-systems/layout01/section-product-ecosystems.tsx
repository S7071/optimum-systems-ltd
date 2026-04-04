import {
  ArrowRight,
  Blocks,
  Briefcase,
  Building2,
  CheckCircle2,
  CircleGauge,
  Cloud,
  Database,
  FileBarChart2,
  Fingerprint,
  GraduationCap,
  HandCoins,
  LayoutGrid,
  Layers3,
  Link2,
  Network,
  ReceiptText,
  School,
  ShieldCheck,
  ShoppingCart,
  Users,
  Warehouse,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type EcosystemCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
};

type PillarCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type FlowStep = {
  step: string;
  title: string;
  description: string;
};

const ecosystemProducts: EcosystemCard[] = [
  {
    title: "ERP Core Platform",
    description:
      "The operational backbone that unifies finance, procurement, payroll, inventory, approvals, and reporting into one controlled environment.",
    icon: LayoutGrid,
    tags: ["Finance", "Procurement", "Payroll", "Inventory"],
  },
  {
    title: "School Management",
    description:
      "A connected ecosystem for admissions, academics, fees, exams, communication, and administration across education institutions.",
    icon: School,
    tags: ["Admissions", "Academics", "Fees", "Exams"],
  },
  {
    title: "TVET & Higher Education",
    description:
      "Structured tools for colleges, polytechnics, and universities managing complex departments, student operations, and institutional workflows.",
    icon: GraduationCap,
    tags: ["Departments", "Hostels", "Timetables", "Institutional Reporting"],
  },
  {
    title: "SACCO & Microfinance",
    description:
      "Digital support for member management, savings, loans, collections, servicing, approvals, and financial visibility.",
    icon: HandCoins,
    tags: ["Members", "Loans", "Collections", "Approvals"],
  },
  {
    title: "Retail & Distribution",
    description:
      "A product ecosystem for stock movement, procurement, branches, sales operations, and commercial reporting at scale.",
    icon: ShoppingCart,
    tags: ["Branches", "Sales", "Stock Control", "Commercial Reporting"],
  },
  {
    title: "Manufacturing & Projects",
    description:
      "Connect warehousing, materials, purchasing, production support, project oversight, and cost visibility in one operational layer.",
    icon: Wrench,
    tags: ["Warehousing", "Materials", "Projects", "Cost Tracking"],
  },
];

const pillars: PillarCard[] = [
  {
    title: "Single Source of Truth",
    description:
      "Every product in the ecosystem feeds into a centralized operating model, reducing fragmented data and improving accountability.",
    icon: Database,
  },
  {
    title: "Modular by Design",
    description:
      "Organizations can deploy the modules they need now and expand later without rebuilding the entire digital foundation.",
    icon: Blocks,
  },
  {
    title: "Workflow-Driven Operations",
    description:
      "Approvals, records, transactions, and reporting are structured around real organizational processes, not disconnected screens.",
    icon: Workflow,
  },
  {
    title: "Secure Role-Based Access",
    description:
      "Granular permissions and structured access controls help maintain governance across departments, branches, and institutions.",
    icon: ShieldCheck,
  },
  {
    title: "Cross-Department Visibility",
    description:
      "Leadership teams gain a clearer operational picture through shared dashboards, reports, and synchronized data flows.",
    icon: CircleGauge,
  },
  {
    title: "Ready for Scale",
    description:
      "The architecture supports growing institutions and enterprises with multiple teams, units, campuses, or branch operations.",
    icon: Layers3,
  },
];

const flowSteps: FlowStep[] = [
  {
    step: "01",
    title: "Capture operational activity",
    description:
      "Transactions, records, approvals, service events, and department actions are created at the source within each product layer.",
  },
  {
    step: "02",
    title: "Sync across connected modules",
    description:
      "Data moves across finance, inventory, HR, academic, member, and reporting contexts so teams work from aligned information.",
  },
  {
    step: "03",
    title: "Control through workflows",
    description:
      "Approvals, permissions, auditability, and routing logic ensure every process follows accountable operational paths.",
  },
  {
    step: "04",
    title: "Turn data into decisions",
    description:
      "Dashboards, summaries, and reports transform operational data into insight for management, administrators, and executives.",
  },
];

const integrationPoints = [
  {
    label: "Finance & Accounting",
    icon: ReceiptText,
  },
  {
    label: "HR & Payroll",
    icon: Users,
  },
  {
    label: "Inventory & Warehousing",
    icon: Warehouse,
  },
  {
    label: "Institutional Operations",
    icon: Building2,
  },
  {
    label: "Member & Customer Services",
    icon: Fingerprint,
  },
  {
    label: "Analytics & Reporting",
    icon: FileBarChart2,
  },
];

export default function ProductEcosystemsPageBody() {
  return (
    <main className="bg-white text-slate-900 w-full">
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute left-[-6rem] top-[-5rem] h-72 w-72 rounded-full bg-blue-700/25 blur-3xl" />
          <div className="absolute right-[-4rem] top-20 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
          <div className="absolute bottom-[-8rem] left-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
                Product Ecosystems
              </span>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Connected product ecosystems built for real operational environments.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Position Optimum as more than a collection of software products.
                This page presents a unified ecosystem where ERP, education,
                financial, retail, and institutional solutions work together as one
                scalable digital operating model.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#ecosystem-map"
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-950/30 transition duration-300 hover:bg-red-500"
                >
                  Explore the ecosystem
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <a
                  href="#ecosystem-pillars"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-blue-300/40 hover:bg-white/10"
                >
                  View platform strengths
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "Unified Architecture",
                  "Modular Products",
                  "Cross-Functional Workflows",
                  "Enterprise Reporting",
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

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-blue-200">
                    Ecosystem summary
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold text-white">
                    One platform, multiple product layers
                  </h2>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
                  <Network className="h-6 w-6 text-red-400" />
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {integrationPoints.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 transition duration-300 hover:border-blue-300/30 hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                        <Icon className="h-4 w-4 text-blue-300" />
                      </div>
                      <span className="text-sm text-slate-200">{label}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
                <p className="text-sm leading-7 text-slate-200">
                  The product ecosystem message should show that Optimum solutions
                  are interoperable, scalable, and structured around end-to-end
                  organizational workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="ecosystem-map"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12"
      >
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-red-700">
            Ecosystem map
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            A structured portfolio, not a disconnected product catalog.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            This section visually frames Optimum’s products as integrated solution
            clusters. Each one serves a different operational context, but all of
            them reinforce the same ecosystem foundation.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {ecosystemProducts.map((product) => {
            const Icon = product.icon;

            return (
              <article
                key={product.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-700 via-blue-500 to-red-600" />

                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 transition duration-300 group-hover:border-blue-200 group-hover:bg-blue-50">
                    <Icon className="h-6 w-6 text-blue-700" />
                  </div>

                  <span className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Product Layer
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950">
                  {product.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {product.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 inline-flex items-center text-sm font-semibold text-red-600 transition duration-300 group-hover:translate-x-1">
                  See how it connects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
                How the ecosystem works
              </span>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Designed to move from isolated operations to connected execution.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                This section helps explain the product strategy in operational
                terms. It shows how different products plug into one another,
                support process continuity, and feed the same reporting and control
                layer.
              </p>

              <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-blue-50 p-3">
                    <Link2 className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">
                      Connected by design
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      Each product can stand on its own, but the strongest value is
                      created when modules and solution layers operate together.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {flowSteps.map((item) => (
                <article
                  key={item.step}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-red-200 hover:shadow-lg hover:shadow-red-950/5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                      {item.step}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="ecosystem-pillars"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-red-700">
              Core strengths
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              The architectural principles behind the ecosystem.
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            These pillars give the page enterprise weight. They show that Optimum’s
            ecosystem is not just broad, but intentionally engineered for control,
            visibility, modularity, and scale.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 transition duration-300 group-hover:border-blue-200 group-hover:bg-blue-50">
                  <Icon className="h-5 w-5 text-blue-700" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-950">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
                Ecosystem outcomes
              </span>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                What organizations gain from a connected Optimum deployment.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                The value proposition should move beyond “features” and focus on
                outcomes: better coordination, clearer reporting, fewer silos,
                stronger control, and a scalable foundation for long-term digital
                growth.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: CheckCircle2,
                    text: "Reduced fragmentation across departments and products",
                  },
                  {
                    icon: Cloud,
                    text: "A cleaner digital foundation for scaling operations",
                  },
                  {
                    icon: Briefcase,
                    text: "More consistent execution across branches, campuses, and teams",
                  },
                  {
                    icon: FileBarChart2,
                    text: "Leadership visibility through centralized reporting and insight",
                  },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4"
                  >
                    <Icon className="mt-0.5 h-4 w-4 flex-none text-red-400" />
                    <p className="text-sm leading-7 text-slate-200">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6">
              <h3 className="text-xl font-semibold text-white">
                Suggested ecosystem clusters
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  {
                    icon: School,
                    label: "Education Stack",
                    text: "School, college, and university operations linked to finance, reporting, and administration.",
                  },
                  {
                    icon: HandCoins,
                    label: "Financial Services Stack",
                    text: "SACCO and microfinance workflows connected to servicing, approvals, and operational visibility.",
                  },
                  {
                    icon: Building2,
                    label: "Enterprise Operations Stack",
                    text: "ERP, inventory, procurement, payroll, projects, and reporting under one controlled environment.",
                  },
                ].map(({ icon: Icon, label, text }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                        <Icon className="h-4 w-4 text-blue-300" />
                      </div>
                      <h4 className="text-sm font-semibold text-white">{label}</h4>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-blue-600"
              >
                Discuss your ecosystem
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-blue-700 via-blue-800 to-slate-950 shadow-xl shadow-blue-950/10">
          <div className="grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-14">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
                Final call to action
              </span>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Build a product ecosystem that grows with your operations.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-200">
                Close the page by inviting visitors into a more consultative
                conversation around modules, workflows, implementation scope, and
                how Optimum products should be combined for their environment.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:flex-col">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-red-500"
              >
                Request a consultation
              </a>

              <a
                href="/products"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/15"
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