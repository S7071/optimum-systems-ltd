import BadgePill from "@/components/ui/badge-pill";
import {
  ArrowRight,
  BadgeCheck,
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
      "Support universities, national polytechnics, TVET institutions, colleges, and training institutions with integrated platforms for academic, administrative, and operational management.",
    icon: GraduationCap,
    highlights: [
      "Student lifecycle",
      "Finance & HR",
      "Examinations",
      "Institutional reporting",
    ],
  },
  {
    title: "Manufacturing",
    description:
      "Help manufacturing organizations manage production planning, inventory control, procurement, and operational efficiency through an integrated ERP environment.",
    icon: Factory,
    highlights: [
      "Production planning",
      "Inventory control",
      "Procurement",
      "Operational efficiency",
    ],
  },
  {
    title: "Retail & Distribution",
    description:
      "Equip wholesalers, retailers, and distribution networks with modular systems for POS operations, inventory optimization, finance, and supply chain coordination.",
    icon: ShoppingCart,
    highlights: [
      "POS systems",
      "Inventory optimization",
      "Financial management",
      "Supply chain",
    ],
  },
  {
    title: "Hospitality",
    description:
      "Streamline reservations, restaurant operations, conference facilities, accounting, HR, and hospitality analytics within one connected management system.",
    icon: Building2,
    highlights: [
      "Reservations",
      "Restaurant operations",
      "Conference facilities",
      "Accounting & HR",
    ],
  },
  {
    title: "Financial Services",
    description:
      "Support microfinance and lending operations with platforms for loan products, customer profiles, repayment tracking, and financial reporting.",
    icon: HandCoins,
    highlights: [
      "Loan products",
      "Customer profiles",
      "Repayment tracking",
      "Financial reporting",
    ],
  },
  {
    title: "Healthcare",
    description:
      "Improve healthcare logistics and service support with pharmaceutical supply chain and healthcare-oriented systems built for visibility, control, and continuity.",
    icon: Stethoscope,
    highlights: [
      "Drug distribution",
      "Supply visibility",
      "Facility support",
      "Operational tracking",
    ],
  },
  {
    title: "Agriculture",
    description:
      "Digitize dairy and agri-enterprise workflows including intake, quality testing, farmer payments, production oversight, and distribution logistics.",
    icon: Truck,
    highlights: [
      "Milk intake",
      "Quality testing",
      "Farmer payments",
      "Distribution logistics",
    ],
  },
  {
    title: "Community Organizations",
    description:
      "Enable welfare groups and associations to manage contributions, financial transparency, and community support activities through structured digital governance.",
    icon: Users,
    highlights: [
      "Contributions",
      "Financial transparency",
      "Member welfare",
      "Activity tracking",
    ],
  },
  {
    title: "Real Estate",
    description:
      "Manage tenant lifecycle, lease agreements, rent billing, maintenance requests, and portfolio analytics with a property-focused enterprise platform.",
    icon: Landmark,
    highlights: [
      "Tenant lifecycle",
      "Lease management",
      "Rent billing",
      "Portfolio analytics",
    ],
  },
];

const valueCards: ValueCard[] = [
  {
    title: "Proven Institutional Impact",
    description:
      "Over 180 institutions rely on Optimum systems to power daily operations, reinforcing a strong record of delivery in demanding environments.",
    icon: University,
  },
  {
    title: "Deep Sector Expertise",
    description:
      "Our team brings extensive experience in enterprise systems development, software engineering, and digital transformation across multiple sectors.",
    icon: LayoutGrid,
  },
  {
    title: "Custom Enterprise Solutions",
    description:
      "We work closely with clients to analyze operational realities and design practical, scalable systems aligned to their exact institutional processes.",
    icon: LineChart,
  },
  {
    title: "Hybrid, Secure Delivery",
    description:
      "Optimum combines on-premise security with cloud accessibility, giving organizations protected data, broader access, and dependable continuity.",
    icon: ShieldCheck,
  },
];

const featuredSectors = [
  {
    title: "Education & Institutions",
    subtitle:
      "For universities, national polytechnics, TVETs, colleges, and training institutions.",
    points: [
      "Academic, administrative, and operational process management",
      "Comprehensive platforms for finance, HR, timetabling, exams, and reporting",
      "Extended tools for attendance, access control, catering, and referral growth",
    ],
  },
  {
    title: "Business & Enterprise",
    subtitle:
      "For manufacturers, retailers, distributors, hospitality teams, and commercial operators.",
    points: [
      "Production, inventory, procurement, and service delivery workflows",
      "POS, supply chain, reservations, restaurant, and conference operations",
      "Integrated financial oversight and operational analytics",
    ],
  },
  {
    title: "Specialized Sector Platforms",
    subtitle:
      "For financial services, healthcare, agriculture, real estate, and community organizations.",
    points: [
      "Loan management, repayment tracking, and customer profile workflows",
      "Healthcare and pharmaceutical supply chain coordination",
      "Property, welfare, dairy, and sector-specific operational management",
    ],
  },
];

export default function SectorsWeServePageBody() {
  return (
    <main className="bg-white text-slate-900 w-full">
      <section
        className="relative isolate overflow-hidden bg-slate-950"
        id="sws-hero"
      >
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
                Sector-specific digital platforms for institutions and enterprises.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Optimum ERP Systems Ltd delivers tailored software solutions for
                education, manufacturing, retail & distribution, hospitality,
                financial services, healthcare, agriculture, community
                organizations, and real estate—helping organizations improve
                efficiency, productivity, and service delivery.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#sws-sectors"
                  className="inline-flex items-center justify-center rounded-full bg-primary-cta px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:translate-y-[-1px] hover:bg-primary-cta-800"
                >
                  Explore Sectors
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <a
                  href="#sws-why-optimum"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-blue-300/40 hover:bg-white/10"
                >
                  Why Optimum
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "Education",
                  "Manufacturing",
                  "Retail & Distribution",
                  "Hospitality",
                  "Financial Services",
                  "Healthcare",
                  "Agriculture",
                  "Real Estate",
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
                    Solutions across key sectors
                  </h2>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
                  <Users className="h-6 w-6 text-red-400" />
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Education & Training", icon: School },
                  { label: "Manufacturing", icon: Factory },
                  { label: "Retail & Distribution", icon: ShoppingCart },
                  { label: "Hospitality", icon: Building2 },
                  { label: "Financial Services", icon: HandCoins },
                  { label: "Healthcare & Real Estate", icon: Landmark },
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
                  From flagship education platforms to specialized enterprise
                  systems, Optimum designs solutions around the actual workflows,
                  controls, and reporting needs of each sector it serves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full px-6 py-20 sm:px-16 lg:px-30"
        id="sws-focus-areas"
      >
        <div className="max-w-3xl">
          <BadgePill label="Focus areas" centered={false} />
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-primary-cbe-500 sm:text-4xl">
            Priority sectors backed by proven product depth.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Optimum’s sector positioning is anchored in a broad digital platform
            ecosystem built for institutional management, enterprise operations,
            and specialized industry workflows.
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
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
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
        id="sws-sectors"
        className="border-y border-slate-200 bg-slate-50/80"
      >
        <div className="w-full px-6 py-20 sm:px-16 lg:px-30">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <BadgePill label="All sectors" centered={false} />
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-primary-cbe-500 sm:text-4xl">
                Tailored digital systems aligned to real sector operations.
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              Across every sector, Optimum delivers practical, scalable solutions
              designed to strengthen workflows, visibility, accountability, and
              long-term operational performance.
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
        id="sws-why-optimum"
        className="w-full px-6 py-20 sm:px-16 lg:px-30"
      >
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-xl">
            <BadgePill label="Why Optimum" centered={false} />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-primary-cbe-500 sm:text-4xl">
              What sets Optimum apart across the sectors it serves.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Optimum combines proven implementation experience, sector-specific
              understanding, tailored solution design, and dependable hybrid
              architecture to deliver enterprise systems that perform in real
              operational environments.
            </p>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm leading-7 text-slate-700">
                The focus is not just software delivery, but building practical
                systems that improve productivity, service delivery, and long-term
                organizational growth.
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

      <section
        className="bg-gradient-to-br from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800"
        id="sws-delivery-outcomes"
      >
        <div className="w-full px-6 py-20 sm:px-16 lg:px-30">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div>
              <BadgePill label="Delivery outcomes" centered={false} />

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Built to strengthen service delivery, control, and scalability.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                Optimum solutions are designed to reduce operational friction,
                improve reporting visibility, and create structured digital
                environments that support sustainable growth across sectors.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Improved productivity through automation of critical workflows",
                  "Stronger financial transparency, oversight, and accountability",
                  "Real-time reporting and analytics for better decision-making",
                  "Scalable systems aligned to evolving operational needs",
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
                Engage Optimum
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  "Book a sector-specific product demonstration",
                  "Request a solution consultation based on your workflows",
                  "Discuss modules, deployment model, and support requirements",
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
                Talk to Optimum Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-20 sm:px-16 lg:px-30" id="sws-cta">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 shadow-sm shadow-blue-950/10">
          <div className="grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-14">
            <div className="max-w-2xl">
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-primary-cbe-200">
                Final call to action
              </span>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Find the right Optimum platform for your sector.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-200">
                Whether you operate in education, enterprise, finance,
                healthcare, agriculture, real estate, or community service,
                Optimum can map the right solution to your operational priorities.
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