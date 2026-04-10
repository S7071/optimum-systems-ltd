import BadgePill from "@/components/ui/badge-pill";
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
    title: "UltimateERP",
    description:
      "A comprehensive higher education ERP with over 30 modules covering student lifecycle management, finance, HR, procurement, timetabling, examinations, and institutional reporting.",
    icon: LayoutGrid,
    tags: ["30+ Modules", "Student Lifecycle", "Finance & HR", "Reporting"],
  },
  {
    title: "UltimateCBE AssessmentERP",
    description:
      "A competency-based education platform built for senior secondary schools and training institutions, supporting continuous assessments, competency tracking, and learner progress analytics.",
    icon: School,
    tags: ["CBE", "Assessments", "Competency Tracking", "Learner Analytics"],
  },
  {
    title: "Academic Governance Platforms",
    description:
      "Includes the Qualification Award Board System and Curriculum Management System for results validation, moderation workflows, grading standards, certification, and curriculum alignment.",
    icon: GraduationCap,
    tags: ["Validation", "Moderation", "Certification", "Curriculum"],
  },
  {
    title: "Campus Experience Systems",
    description:
      "An integrated layer of UltimateBio, Turnstile Gate Control, SmartDine, and Referral tools for attendance, access control, digital meal payments, and enrollment growth.",
    icon: HandCoins,
    tags: ["Biometrics", "Access Control", "SmartDine", "Referrals"],
  },
  {
    title: "Business & Enterprise ERPs",
    description:
      "A portfolio of operational systems including UltimateManufacturingERP, UltimateSupplyChainERP, UltimateHotelERP, and UltimateConferenceERP for industry and enterprise execution.",
    icon: ShoppingCart,
    tags: ["Manufacturing", "Supply Chain", "Hospitality", "Conference"],
  },
  {
    title: "Sector-Specific Solutions",
    description:
      "Purpose-built platforms such as Lend360, MedFlow, Dairy Management, Real Estate Management, WelfareTrack, NexusTrade, Poultry Farm, and ShopNearMe for specialized sectors.",
    icon: Wrench,
    tags: ["Microfinance", "Healthcare", "Real Estate", "Agribusiness"],
  },
];

const pillars: PillarCard[] = [
  {
    title: "Proven Institutional Impact",
    description:
      "Over 200 institutions rely on Optimum systems to power daily operations, especially across universities, national polytechnics, TVET institutions, and colleges.",
    icon: Database,
  },
  {
    title: "Deep Sector Expertise",
    description:
      "Optimum brings strong expertise in enterprise systems development, software engineering, and digital transformation across education and multiple industry sectors.",
    icon: Blocks,
  },
  {
    title: "Custom Enterprise Solutions",
    description:
      "Every deployment is aligned to the client's operational realities, ensuring practical, scalable, and effective systems built around institution-specific processes.",
    icon: Workflow,
  },
  {
    title: "Commitment to Excellence",
    description:
      "Integrity, accountability, professionalism, and excellence shape every engagement, with delivery focused on exceeding expectations and sustaining long-term value.",
    icon: ShieldCheck,
  },
  {
    title: "Strong Technical Capability",
    description:
      "A multidisciplinary team of experienced technical professionals combines project management, systems development, and enterprise technology expertise.",
    icon: CircleGauge,
  },
  {
    title: "Hybrid Architecture",
    description:
      "Optimum combines on-premise security with cloud accessibility, giving organizations protected data environments while enabling secure access from anywhere.",
    icon: Layers3,
  },
];

const flowSteps: FlowStep[] = [
  {
    step: "01",
    title: "Deploy the operational core",
    description:
      "Start with core ERP capabilities such as student lifecycle, finance, HR, procurement, timetabling, examinations, and institutional reporting within one connected foundation.",
  },
  {
    step: "02",
    title: "Extend with specialized platforms",
    description:
      "Add AssessmentERP, Curriculum Management, Qualification Award Board, biometric attendance, SmartDine, gate control, and referral modules as needs evolve.",
  },
  {
    step: "03",
    title: "Integrate control and compliance",
    description:
      "Connect bank workflows, E-Citizen processes, access controls, audit trails, and secure role-based permissions to support accountable and compliant operations.",
  },
  {
    step: "04",
    title: "Turn operations into insight",
    description:
      "Use dashboards, analytics, and institutional reporting to strengthen decision-making, improve transparency, and optimize returns on technology investment.",
  },
];

const integrationPoints = [
  {
    label: "Student Lifecycle",
    icon: ReceiptText,
  },
  {
    label: "Finance & Accounting",
    icon: Users,
  },
  {
    label: "Procurement & Inventory",
    icon: Warehouse,
  },
  {
    label: "Academic & Institutional Operations",
    icon: Building2,
  },
  {
    label: "Biometric Access & Attendance",
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
      <section
        className="relative isolate overflow-hidden bg-slate-950"
        id="pes-hero"
      >
        <div className="absolute inset-0">
          <div className="absolute left-[-6rem] top-[-5rem] h-72 w-72 rounded-full bg-blue-700/25 blur-3xl" />
          <div className="absolute right-[-4rem] top-20 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
          <div className="absolute bottom-[-8rem] left-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="relative w-full px-6 py-20 sm:px-16 lg:px-30 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-cbe-200">
                Optimum Digital Platform Ecosystem
              </span>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Connected platforms built for institutions, enterprises, and
                sector-specific operations.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Optimum delivers a unified ecosystem of education,
                institutional, and enterprise platforms designed to improve
                productivity, strengthen compliance, and drive sustainable
                operational growth.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#pes-ecosystem-map"
                  className="inline-flex items-center justify-center rounded-full bg-primary-cta px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-950/30 transition duration-300 hover:bg-primary-cta-800"
                >
                  Explore the ecosystem
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <a
                  href="#pes-ecosystem-pillars"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-blue-300/40 hover:bg-white/10"
                >
                  View Optimum strengths
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "180+ Institutions Powered",
                  "200+ Trusted Clients",
                  "11+ Years of Excellence",
                  "Hybrid Architecture",
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
                    Education platforms and enterprise solutions
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
                  From UltimateERP and UltimateCBE to MedFlow, Lend360, Real
                  Estate, Dairy, Hotel, Manufacturing, and Supply Chain
                  platforms, Optimum delivers a scalable ecosystem built for
                  end-to-end operational performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="pes-ecosystem-map"
        className="w-full px-6 py-20 sm:px-16 lg:px-30"
      >
        <div className="max-w-3xl">
          <BadgePill label="Ecosystem map" centered={false} />
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-primary-cbe-500 sm:text-4xl">
            A structured ecosystem spanning education, institutions, and
            enterprise operations.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Optimum&apos;s platform portfolio brings together flagship education
            systems, institutional extensions, and sector-focused enterprise
            products that work together as one modular digital foundation.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {ecosystemProducts.map((product) => {
            const Icon = product.icon;

            return (
              <article
                key={product.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-700 via-blue-500 to-red-600" />

                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 transition duration-300 group-hover:border-blue-200 group-hover:bg-blue-50">
                    <Icon className="h-6 w-6 text-blue-700" />
                  </div>

                  <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-cbe-400">
                    Solution Cluster
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-primary-cbe-500">
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
                  Explore the platform layer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section
        className="border-y border-slate-200 bg-slate-50/80"
        id="pes-how-it-works"
      >
        <div className="w-full px-6 py-20 sm:px-16 lg:px-30">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <BadgePill label="How the ecosystem works" centered={false} />

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-primary-cbe-500 sm:text-4xl">
                A modular ecosystem designed for progressive implementation.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Optimum supports phased deployment, allowing organizations to
                start with core ERP functions and extend into specialized
                digital systems while keeping operations synchronized across
                departments, campuses, and business units.
              </p>

              <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-blue-50 p-3">
                    <Link2 className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-cbe-500">
                      Connected by design
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      Optimum&apos;s modular architecture lets institutions and
                      enterprises implement the capabilities they need now, then
                      expand later without rebuilding the digital foundation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {flowSteps.map((item) => (
                <article
                  key={item.step}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-red-200 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-primary-cbe-500 text-sm font-semibold text-white">
                      {item.step}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-primary-cbe-500">
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
        id="pes-ecosystem-pillars"
        className="w-full px-6 py-20 sm:px-16 lg:px-30"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <BadgePill label="Core strengths" centered={false} />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-primary-cbe-500 sm:text-4xl">
              Why organizations trust the Optimum ecosystem.
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            These strengths reflect Optimum&apos;s company profile: proven
            institutional reach, deep implementation experience, tailored
            enterprise delivery, and a secure hybrid architecture designed for
            scale.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 transition duration-300 group-hover:border-blue-200 group-hover:bg-blue-50">
                  <Icon className="h-5 w-5 text-blue-700" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-primary-cbe-500">
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

      <section
        className="bg-gradient-to-br from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800"
        id="pes-ecosystems-outcomes"
      >
        <div className="w-full px-6 py-20 sm:px-16 lg:px-30">
          <div className="grid gap-8 rounded-[2rem] sm:border sm:border-white/10 sm:bg-white/5 p-none sm:p-8 backdrop-blur-sm lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div>
              <BadgePill label="Ecosystem outcomes" centered={false} />

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Outcomes delivered by a connected Optimum deployment.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                The Optimum ecosystem is designed to reduce administrative
                workload, strengthen compliance, centralize operational
                visibility, and create a scalable digital foundation for
                long-term institutional and enterprise growth.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: CheckCircle2,
                    text: "Reduced manual workload through integrated and automated operations",
                  },
                  {
                    icon: Cloud,
                    text: "Secure hybrid access with protected data and anywhere accessibility",
                  },
                  {
                    icon: Briefcase,
                    text: "Better control across departments, campuses, branches, and service units",
                  },
                  {
                    icon: FileBarChart2,
                    text: "Stronger leadership insight through dashboards, reports, and analytics",
                  },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4"
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
                    label: "Education & Institutional Platforms",
                    text: "Flagship education systems including UltimateERP, UltimateCBE, Curriculum Management, and Qualification Award Board.",
                  },
                  {
                    icon: HandCoins,
                    label: "Campus Operations Stack",
                    text: "Biometric attendance, gate control, SmartDine, and referral tools that strengthen service delivery and student experience.",
                  },
                  {
                    icon: Building2,
                    label: "Business & Sector Solutions",
                    text: "Enterprise platforms for manufacturing, supply chain, hospitality, lending, healthcare, real estate, dairy, and community organizations.",
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
                      <h4 className="text-sm font-semibold text-white">
                        {label}
                      </h4>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary-cta px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-primary-cta-800"
              >
                Discuss your ecosystem
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-20 sm:px-16 lg:px-30" id="pes-cta">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 shadow-sm">
          <div className="grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-14">
            <div className="max-w-2xl">
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-primary-cbe-200">
                Final call to action
              </span>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Build the right Optimum platform ecosystem for your
                organization.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-200">
                Bring together flagship ERP, sector-specific platforms,
                integrations, and analytics in a deployment scope tailored to
                your workflows, compliance requirements, and long-term growth
                plans.
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
                Explore Optimum products
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
