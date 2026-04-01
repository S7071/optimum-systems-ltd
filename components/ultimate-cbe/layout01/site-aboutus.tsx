import BadgePill from "@/components/ui/badge-pill";
import { Button } from "@/components/ui/button";

type SectionLink = {
  label: string;
  href: string;
};

type Stat = {
  value: string;
  label: string;
  note: string;
};

type Pillar = {
  title: string;
  description: string;
};

type FocusArea = {
  title: string;
  description: string;
  items: string[];
};

type DeliveryModel = {
  title: string;
  description: string;
};

type Commitment = {
  title: string;
  description: string;
};

const sectionLinks: SectionLink[] = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Our Direction", href: "#our-direction" },
  { label: "Our Focus", href: "#our-focus" },
  { label: "How We Deliver", href: "#how-we-deliver" },
  { label: "Our Commitment", href: "#our-commitment" },
];

const stats: Stat[] = [
  {
    value: "15+",
    label: "Years of practical ERP experience",
    note: "Built around real operational demands across Kenyan institutions.",
  },
  {
    value: "160+",
    label: "Academic institutions served",
    note: "Supporting colleges, universities, TVETs, and other learning environments.",
  },
  {
    value: "11+",
    label: "Financial and retail organizations",
    note: "Serving financial institutions, distributors, and retailers nationwide.",
  },
  {
    value: "100%",
    label: "Tailored implementation approach",
    note: "Solutions aligned to real workflows, reporting needs, and compliance realities.",
  },
];

const pillars: Pillar[] = [
  {
    title: "Vision",
    description:
      "To be a world-class provider of client-centric software solutions that help organizations operate with greater clarity, control, and confidence.",
  },
  {
    title: "Mission",
    description:
      "To provide innovative software solutions that enhance service delivery through strong user experience, modern technology, and a focused delivery team.",
  },
  {
    title: "Goal",
    description:
      "To deliver tailored software solutions that help clients optimize their return on investment while building efficient and sustainable operations.",
  },
];

const focusAreas: FocusArea[] = [
  {
    title: "Education ERP Systems",
    description:
      "Purpose-built platforms for universities, colleges, polytechnics, TVETs, and schools that unify administration, finance, academics, and reporting.",
    items: [
      "Admissions & registration",
      "Academic records",
      "Fees & finance",
      "Exams & reporting",
    ],
  },
  {
    title: "Financial Institution Solutions",
    description:
      "Structured ERP implementations for SACCOs, microfinance institutions, and building societies with controls that support growth, compliance, and visibility.",
    items: [
      "Member lifecycle",
      "Loans & savings",
      "Audit-ready reporting",
      "Operational controls",
    ],
  },
  {
    title: "Business Operations Platforms",
    description:
      "Operational systems for distributors, retailers, manufacturers, and service-oriented businesses that need connected workflows across departments.",
    items: [
      "Inventory workflows",
      "Procurement",
      "Payroll & HR",
      "Management dashboards",
    ],
  },
  {
    title: "Custom & Hybrid Delivery",
    description:
      "We combine tailored implementation, extensible modules, and hybrid deployment models so each solution fits the organization it serves.",
    items: [
      "Cloud + on-premise",
      "Custom modules",
      "Integrations",
      "Phased rollout support",
    ],
  },
];

const deliveryModels: DeliveryModel[] = [
  {
    title: "Discover",
    description:
      "We begin with exploratory engagement to understand what slows delivery, where inefficiencies exist, and what stakeholders need from the system.",
  },
  {
    title: "Design",
    description:
      "We translate business processes into practical system architecture, aligning modules, permissions, reports, and approval flows to actual operations.",
  },
  {
    title: "Deploy",
    description:
      "Our delivery model supports tailored implementations, hybrid environments, staff onboarding, and structured rollout to minimize disruption.",
  },
  {
    title: "Support",
    description:
      "We reinforce long-term success through training, simulation, support, and ongoing refinement so clients keep extracting value after go-live.",
  },
];

const commitments: Commitment[] = [
  {
    title: "Tailored Around Real Workflows",
    description:
      "Every implementation is shaped around how the client actually operates, not forced into a rigid off-the-shelf model.",
  },
  {
    title: "Built for Scale and Continuity",
    description:
      "Our systems are designed to support both growing institutions and mature organizations with complex reporting and operational demands.",
  },
  {
    title: "Grounded in Service Delivery",
    description:
      "We prioritize practical outcomes: faster processing, clearer reporting, stronger accountability, and better stakeholder experiences.",
  },
];

function GridPattern() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.08]"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(15,23,42,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.08) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
      }}
    />
  );
}

export default function SiteAboutUs() {
  return (
    <main className="relative overflow-hidden bg-white text-slate-900 w-full">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[-8rem] top-[-5rem] h-72 w-72 rounded-full bg-blue-600/15 blur-3xl animate-pulse" />
        <div className="absolute right-[-7rem] top-40 h-80 w-80 rounded-full bg-red-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-8rem] left-1/3 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl animate-pulse" />
      </div>

      <section className="relative isolate border-b border-slate-200/70 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_35%),linear-gradient(180deg,#f8fbff_0%,#ffffff_52%,#f8fafc_100%)]">
        <GridPattern />
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="max-w-3xl">
              <BadgePill label="About Optimum" centered={false} />

              <h1 className="mt-6 max-w-full text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-5xl lg:leading-[1.06]">
                Driving business evolution through technology that boosts
                <span className="bg-gradient-to-r from-primary-cbe-700 via-primary-cbe-400 to-primary-cta bg-clip-text text-transparent">
                  {" "}
                  efficiency, productivity, and workflow optimization.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Optimum Computer Systems Ltd is a Kenyan software company
                headquartered in Nairobi, specializing in innovative, tailored
                ERP and management information systems. With a team of 50+ ICT
                professionals, we deliver client-centric solutions that generate
                high ROI at optimal cost.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" variant="default" className="h-14">
                  Explore Our Story
                </Button>
                <a
                  href="#our-focus"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-primary-cbe-800"
                >
                  See What We Deliver
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                      {stat.value}
                    </div>
                    <p className="mt-2 text-sm font-semibold text-blue-700">
                      {stat.label}
                    </p>
                  </div>
                  <span className="mt-1 h-3 w-3 rounded-full bg-red-500 transition-transform duration-300 group-hover:scale-125" />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {stat.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="no-scrollbar flex gap-3 overflow-x-auto py-4">
            {sectionLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="who-we-are" className="relative py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div>
            <BadgePill label="Who We Are" centered={false} />
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              A Kenyan software company specializing in innovative, tailored ERP
              and management information systems.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Optimum Computer Systems Ltd delivers innovative software
                solutions that dramatically enhance operational efficiency,
                boost productivity, and streamline processes across diverse
                industries. Our contributions stem from deep, collaborative
                engagements with clients — meticulously analyzing pain points,
                inefficiencies, and growth barriers to craft tailored,
                cost-effective solutions that deliver measurable results.
              </p>
              <p>
                With a customer-centric approach at our core, our team of
                dedicated experts stands ready to align your business processes
                with cutting-edge technologies, ensuring sustained growth and
                competitive advantage. We prioritize customer satisfaction above
                all, backed by a proven track record of quality service
                delivery.
              </p>
              <p>
                Today, over 150 institutions of higher learning rely on our ERP
                system to power their operations — experiencing transformative
                outcomes that position them for long-term success. We hold
                Category 1 ICT Authority accreditations, the highest level
                awarded in Kenya, and are registered as both Data Controller and
                Data Processor under Kenya&apos;s Data Protection laws.
              </p>
            </div>
          </div>

          <div className="grid gap-5 self-start">
            <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 p-8 text-white shadow-2xl shadow-blue-900/10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                Leadership Perspective
              </p>
              <p className="mt-6 text-xl font-medium leading-9 text-white/95 sm:text-2xl">
                &quot;Our team of dedicated experts stands ready to align your
                business processes with cutting-edge technologies, ensuring
                sustained growth, competitive advantage, and solutions that
                exceed expectations.&quot;
              </p>
              <div className="mt-8 h-px w-full bg-white/15" />
              <p className="mt-5 text-sm text-blue-100">
                Optimum Computer Systems Ltd leadership
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-600">
                  What makes us effective
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  <li>• Hybrid on-premise + cloud system</li>
                  <li>• No per-user license fees</li>
                  <li>• Category 1 ICT Authority accredited</li>
                  <li>• Advanced security — zero breaches reported</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                  What clients gain
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  <li>• Up to 50% admin workload reduction</li>
                  <li>• Bank reconciliations under 5 minutes</li>
                  <li>• Full IPSAS & CBET compliance</li>
                  <li>• Long-term partnerships and proven ROI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="our-direction"
        className="relative border-y border-slate-200/80 bg-slate-50 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <BadgePill label="Our Direction" centered={false} />
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              The principles that guide how Optimum builds, deploys, and
              sustains software solutions for our clients.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-blue-100/60 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                      0{index + 1}
                    </span>
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-slate-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {pillar.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="our-focus" className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <BadgePill label="Our Focus" centered={false} />
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Modular, scalable solutions for sectors where efficiency,
                compliance, and data security matter most.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-600">
              We deliver hybrid, cross-platform software with strong emphasis on
              regulatory compliance, security features, seamless integrations,
              and real-time analytics — reducing manual work and enhancing
              decision-making across diverse industries.
            </p>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {focusAreas.map((area) => (
              <article
                key={area.title}
                className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-slate-950">
                    {area.title}
                  </h3>
                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                    Optimum
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  {area.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {area.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors duration-300 group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-blue-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-we-deliver"
        className="relative border-y border-slate-200/80 bg-[linear-gradient(180deg,#0f172a_0%,#081224_100%)] py-20 text-white sm:py-24"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800"
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <BadgePill label="How We Deliver" centered={false} />
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A client-centric delivery model designed for operational fit,
              strong adoption, and long-term measurable value.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {deliveryModels.map((model, index) => (
              <article
                key={model.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-slate-950">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {model.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {model.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                Why this matters
              </p>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
                Enterprise software only delivers value when it reflects real
                operational workflows, supports user adoption, integrates with
                existing systems, and evolves with the client. Our delivery
                model is designed to protect each of those dimensions — from
                initial engagement through to long-term support.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600/20 to-red-500/10 p-8 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-200">
                Deployment readiness
              </p>
              <div className="mt-5 grid grid-cols-2 gap-4 text-sm text-slate-200">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Hybrid on-premise + cloud deployment
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  MPESA & multi-bank integration
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  IPSAS & CBET-CDACC compliance
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Biometric & advanced security layers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our-commitment" className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <BadgePill label="Our Commitment" centered={false} />
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                We build for institutions and organizations that need
                reliability, transparency, and room to scale.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                Our commitment extends beyond software delivery — to how systems
                are adopted, how teams are supported, and how organizations
                continue gaining value long after go-live.
              </p>
            </div>

            <div className="grid gap-5">
              {commitments.map((commitment) => (
                <article
                  key={commitment.title}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-blue-600 text-sm font-semibold text-white transition-transform duration-300 group-hover:scale-105">
                      ✓
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-950">
                        {commitment.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                        {commitment.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-2xl shadow-slate-900/10">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative p-8 sm:p-10 lg:p-12">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800" />
                <div className="relative">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                    Ready to transform your operations
                  </p>
                  <h3 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Partner with Optimum to modernize the systems your
                    institution relies on every day.
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                    From higher education and healthcare to retail and
                    manufacturing, we design ERP solutions that improve
                    visibility, streamline service delivery, and deliver
                    measurable returns on investment across every department.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
                    >
                      Talk to Sales
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                    >
                      Request a Demonstration
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  [
                    "No per-user fees",
                    "Unlimited deployment post-installation with one-off, affordable pricing and flexible terms.",
                  ],
                  [
                    "Hybrid-ready",
                    "Secure on-premise deployment combined with cloud accessibility across all platforms and devices.",
                  ],
                  [
                    "Support-led",
                    "Staff training, guided onboarding, simulation, and ongoing technical support built into every delivery.",
                  ],
                ].map(([title, description]) => (
                  <div key={title} className="bg-white/5 p-8 sm:p-10">
                    <p className="text-lg font-semibold text-white">{title}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
