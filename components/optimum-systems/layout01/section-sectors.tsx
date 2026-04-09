import BadgePill from "@/components/ui/badge-pill";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  Factory,
  GraduationCap,
  HandCoins,
  Landmark,
  LayoutGrid,
  LineChart,
  School,
  ShieldCheck,
  ShoppingCart,
  Stethoscope,
  Truck,
  University,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type Sector = {
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
};

type ValueCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const sectors: Sector[] = [
  {
    title: "Education",
    description:
      "Support schools, colleges, TVETs, and universities with connected workflows for admissions, academics, finance, communication, and administration.",
    icon: GraduationCap,
    highlights: ["Admissions", "Academics", "Fees & billing", "Institutional reporting"],
  },
  {
    title: "SACCOs",
    description:
      "Digitize member management, savings, loans, approvals, collections, and servicing with structured workflows built for SACCO operations.",
    icon: HandCoins,
    highlights: ["Members", "Loans", "Collections", "Approvals"],
  },
  {
    title: "Microfinance",
    description:
      "Improve operational discipline across branch activity, customer servicing, collections, and reporting with a unified digital platform.",
    icon: Banknote,
    highlights: ["Customer records", "Collections", "Branch workflows", "Risk visibility"],
  },
  {
    title: "Retail & Distribution",
    description:
      "Connect stock movement, procurement, sales, warehousing, and branch oversight to reduce friction and improve commercial visibility.",
    icon: ShoppingCart,
    highlights: ["Stock control", "Sales operations", "Branches", "Procurement"],
  },
  {
    title: "Manufacturing",
    description:
      "Bring purchasing, inventory, production support, warehousing, and cost visibility into one structured operational environment.",
    icon: Factory,
    highlights: ["Materials", "Production support", "Warehousing", "Cost tracking"],
  },
  {
    title: "Construction",
    description:
      "Coordinate project workflows, procurement, field operations, budget controls, and reporting with better cross-team visibility.",
    icon: Wrench,
    highlights: ["Projects", "Procurement", "Cost visibility", "Approvals"],
  },
  {
    title: "Healthcare",
    description:
      "Streamline patient-facing administration, billing workflows, records coordination, and operational reporting for healthcare environments.",
    icon: Stethoscope,
    highlights: ["Billing", "Records", "Administration", "Reporting"],
  },
  {
    title: "Government & Institutions",
    description:
      "Support structured service delivery, approvals, finance, records, and accountability with secure role-based workflows and reporting.",
    icon: Landmark,
    highlights: ["Governance", "Approvals", "Records", "Accountability"],
  },
  {
    title: "Professional Services",
    description:
      "Unify finance, payroll, project coordination, client operations, and internal reporting across growing service-driven teams.",
    icon: Building2,
    highlights: ["Projects", "Payroll", "Client ops", "Internal controls"],
  },
];

const valueCards: ValueCard[] = [
  {
    title: "Sector-aware implementations",
    description:
      "Each deployment is positioned around the actual workflow realities of the sector rather than a one-size-fits-all software rollout.",
    icon: LayoutGrid,
  },
  {
    title: "Stronger operational control",
    description:
      "Structured permissions, approvals, and centralized data flows help reduce fragmentation while improving accountability.",
    icon: ShieldCheck,
  },
  {
    title: "Decision-ready visibility",
    description:
      "Dashboards and reports translate daily operational activity into meaningful insight for management and executive teams.",
    icon: LineChart,
  },
  {
    title: "Scalable digital foundations",
    description:
      "Organizations can start with the modules they need now and extend the platform cleanly as their operations expand.",
    icon: University,
  },
];

const featuredSectors = [
  {
    title: "Education",
    subtitle: "For institutions managing scale, compliance, and service delivery.",
    points: [
      "Admissions and academic operations",
      "Student finance and fee workflows",
      "Departmental and institutional reporting",
    ],
  },
  {
    title: "Financial Services",
    subtitle: "For SACCOs and MFIs requiring structure, control, and visibility.",
    points: [
      "Member and customer lifecycle support",
      "Loans, servicing, and collections workflows",
      "Branch and management-level reporting",
    ],
  },
  {
    title: "Enterprise Operations",
    subtitle: "For retailers, manufacturers, contractors, and institutions.",
    points: [
      "Inventory, procurement, and finance alignment",
      "Cross-team coordination and approvals",
      "Operational visibility at scale",
    ],
  },
];

export default function SectorsWeServePageBody() {
  return (
    <main className="bg-white text-slate-900 w-full">
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute left-[-7rem] top-[-6rem] h-72 w-72 rounded-full bg-blue-700/25 blur-3xl" />
          <div className="absolute right-[-5rem] top-20 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
          <div className="absolute bottom-[-8rem] left-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative w-full px-6 py-20 sm:px-16 lg:px-30 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-200">
                Sectors We Serve
              </span>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Digital solutions tailored for the sectors that keep operations moving.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Optimum supports institutions and businesses across education,
                financial services, retail, manufacturing, construction, healthcare,
                and public-sector environments with systems built around real
                operational workflows.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#sectors-grid"
                  className="inline-flex items-center justify-center rounded-full bg-primary-cta px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:translate-y-[-1px] hover:bg-primary-cta-800"
                >
                  Explore Sectors
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <a
                  href="#why-optimum"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-blue-300/40 hover:bg-white/10"
                >
                  Why Optimum
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "Education",
                  "SACCOs & Microfinance",
                  "Retail & Distribution",
                  "Manufacturing",
                  "Construction",
                  "Institutions",
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
                    Coverage overview
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold text-white">
                    Built for multi-sector execution
                  </h2>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
                  <Users className="h-6 w-6 text-red-400" />
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Schools & Universities", icon: School },
                  { label: "SACCOs & MFIs", icon: HandCoins },
                  { label: "Retailers & Distributors", icon: Truck },
                  { label: "Manufacturers", icon: Factory },
                  { label: "Construction Firms", icon: Wrench },
                  { label: "Government & Institutions", icon: Landmark },
                ].map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 transition-all duration-300 hover:border-blue-300/30 hover:bg-white/10"
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
                  The objective of this page is to help visitors quickly recognize
                  their sector and understand that Optimum can tailor solutions to
                  their operational environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <BadgePill label="Focus areas" centered={false} />
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-primary-cbe-500 sm:text-4xl">
            Speak to each sector with clearer commercial relevance.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Rather than presenting a generic software catalog, this section frames
            Optimum around the operating environments it understands best.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredSectors.map((sector) => (
            <article
              key={sector.title}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-cbe-400">
                {sector.title}
              </span>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-primary-cbe-500">
                {sector.subtitle}
              </h3>

              <ul className="mt-6 space-y-3">
                {sector.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                    <BadgeCheck className="mt-0.5 h-4 w-4 flex-none text-red-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        id="sectors-grid"
        className="border-y border-slate-200 bg-slate-50/80"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <BadgePill label="All sectors" centered={false} />
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-primary-cbe-500 sm:text-4xl">
                Sector-ready solutions with a consistent premium presentation.
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              Each card is built to feel credible and enterprise-ready while still
              keeping the page lightweight, readable, and conversion-focused.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sectors.map((sector) => {
              const Icon = sector.icon;

              return (
                <article
                  key={sector.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-cbe-800 via-primary-cbe-500 to-primary-cta" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-50">
                      <Icon className="h-6 w-6 text-blue-700" />
                    </div>

                    <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-500">
                      Sector
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-primary-cbe-500">
                    {sector.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {sector.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {sector.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 inline-flex items-center text-sm font-semibold text-red-600 transition-transform duration-300 group-hover:translate-x-1">
                    Explore this sector
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="why-optimum"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12"
      >
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-xl">
            <BadgePill label="Why Optimum" centered={false} />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-primary-cbe-500 sm:text-4xl">
              Common strengths that translate across every sector.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              This section reinforces that although the messaging is sector-specific,
              the underlying delivery model is still built on strong enterprise
              fundamentals: modularity, control, visibility, and scalability.
            </p>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm leading-7 text-slate-700">
                Position Optimum as a sector-aware implementation partner, not just a
                vendor listing software modules.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {valueCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-red-200 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 transition-all duration-300 group-hover:border-primary-cta/20 group-hover:bg-primary-cta/5">
                    <Icon className="h-5 w-5 text-blue-700" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-primary-cbe-500">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {card.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div>
              <BadgePill label="Delivery outcomes" centered={false} />

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Built to improve coordination, visibility, and long-term scalability.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                The goal is not only to digitize tasks, but to create a more
                structured operating environment across teams, branches,
                institutions, and departments.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Reduced operational silos across teams and functions",
                  "Stronger approval, reporting, and accountability structures",
                  "More reliable data for managers and executive teams",
                  "A scalable foundation for future digital expansion",
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
                  "Book a sector-specific product walkthrough",
                  "Request a tailored quotation for your organization",
                  "Discuss deployment scope, modules, and support",
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
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary-cta px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-cta-800"
              >
                Talk to Optimum Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 shadow-sm shadow-blue-950/10">
          <div className="grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-14">
            <div className="max-w-2xl">
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-primary-cbe-200">
                Final call to action
              </span>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Find the right solution stack for your sector.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-200">
                Use this closing section to move visitors from exploration into a
                more consultative conversation around their workflows, challenges,
                and implementation priorities.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:flex-col">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-500"
              >
                Request a Consultation
              </a>

              <a
                href="/products"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/15"
              >
                Explore Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}