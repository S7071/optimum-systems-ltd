import BadgePill from "@/components/ui/badge-pill";
import { Button } from "@/components/ui/button";
import {
  BadgeCheck,
  Briefcase,
  CloudCog,
  FileCheck2,
  Fingerprint,
  RefreshCw,
  ServerCog,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

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
    value: "8+",
    label: "Years of practical ERP experience",
    note: "Built around real operational demands across Kenyan institutions.",
  },
  {
    value: "200+",
    label: "Institutions Served",
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

              <h1 className="mt-6 max-w-full text-4xl font-extrabold tracking-tight text-primary-cbe-500 sm:text-5xl lg:text-5xl lg:leading-[1.06]">
                Driving business evolution through technology that boosts
                <span className="bg-gradient-to-r from-primary-cbe-500 via-primary-cbe-500 to-primary-cta bg-clip-text text-transparent">
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
                className="group rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-3xl font-semibold tracking-tight text-primary-cbe-500 sm:text-4xl">
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
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-primary-cbe-500 sm:text-4xl">
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
                Today, over 200 institutions of higher learning rely on our ERP
                system to power their operations — experiencing transformative
                outcomes that position them for long-term success. We hold
                Category 1 ICT Authority accreditations, the highest level
                awarded in Kenya, and are registered as both Data Controller and
                Data Processor under Kenya&apos;s Data Protection laws.
              </p>
            </div>
          </div>

          <div className="grid gap-5 self-start">
            <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 p-8 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-cbe-200">
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
                Optimum Systems Ltd leadership
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="text-xs font-semibold uppercase tracking-widest text-red-600">
                  What makes us effective
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  <li>• Hybrid on-premise + cloud system</li>
                  <li>• No per-user license fees</li>
                  <li>• Category 1 ICT Authority accredited</li>
                  <li>• Advanced security — zero breaches reported</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
                  What clients gain
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  <li>• Up to 90% admin workload reduction</li>
                  <li>• Bank reconciliations under 5 minutes</li>
                  <li>• Full IPSAS & CBET compliance</li>
                  <li>• Long-term partnerships and proven ROI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="accreditations" className="relative py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute left-0 top-30 h-64 w-64 rounded-full bg-primary-cbe-500/10 blur-3xl" />
          <div className="absolute right-0 bottom-30 h-64 w-64 rounded-full bg-primary-cta/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <BadgePill label="Accreditations" centered={false} />
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-primary-cbe-500 sm:text-4xl">
                Recognized for compliance, security, and trusted technology
                delivery.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-600">
              Optimum holds top-tier ICT Authority accreditations and data
              protection registrations that reinforce our capability to build,
              secure, host, and manage enterprise systems with confidence.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-primary-cbe-100 bg-white shadow-sm">
            <div className="grid gap-px bg-slate-200 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="bg-white p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-cbe-500/10 text-primary-cbe-500">
                    <BadgeCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-red-600">
                      ICT Authority
                    </p>
                    <h3 className="text-2xl font-semibold text-primary-cbe-500">
                      Category 1 Accreditations
                    </h3>
                  </div>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                  Optimum holds four ICT Authority Category 1 accreditations
                  covering systems and applications, information security, cloud
                  computing, and data centre capability.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {[
                    {
                      icon: BadgeCheck,
                      title: "Systems & Applications",
                      code: "ICTA 1",
                      description:
                        "Validates expertise in developing and deploying robust software solutions.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Information Security",
                      code: "ICTA 1",
                      description:
                        "Confirms commitment to safeguarding data with top-tier security protocols.",
                    },
                    {
                      icon: CloudCog,
                      title: "Cloud Computing",
                      code: "ICTA 1",
                      description:
                        "Affirms capability to deliver reliable, scalable, and efficient cloud services.",
                    },
                    {
                      icon: ServerCog,
                      title: "Data Centre",
                      code: "ICTA 1",
                      description:
                        "Demonstrates secure, high-availability infrastructure for hosting and recovery.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <article
                        key={item.title}
                        className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-cbe-200 hover:bg-white hover:shadow-md"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-cbe-500/10 text-primary-cbe-500 transition-transform duration-300 group-hover:scale-105">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-red-600">
                            {item.code}
                          </span>
                        </div>

                        <h4 className="mt-5 text-lg font-semibold text-primary-cbe-500">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </div>

              <div className="bg-slate-50 p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-600">
                    <Fingerprint className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
                      Data Protection
                    </p>
                    <h3 className="text-2xl font-semibold text-primary-cbe-500">
                      Compliance Registrations
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                  Optimum is also registered under Kenya’s data protection
                  framework as both a Data Controller and a Data Processor,
                  reinforcing formal accountability in the handling of client
                  and institutional data.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    {
                      title: "Data Controller",
                      description:
                        "Authorizes determination of the purposes and means of processing personal data.",
                    },
                    {
                      title: "Data Processor",
                      description:
                        "Enables processing of data on behalf of clients with stringent safeguards.",
                    },
                  ].map((item) => (
                    <article
                      key={item.title}
                      className="group rounded-3xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-cbe-200 hover:shadow-md"
                    >
                      <div className="flex items-start gap-4">
                        <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-cbe-500/10 text-primary-cbe-500 transition-transform duration-300 group-hover:scale-105">
                          <FileCheck2 className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-primary-cbe-500">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-sm leading-7 text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl border border-primary-cbe-100 bg-gradient-to-br from-primary-cbe-500 to-primary-cbe-800 p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-cbe-100">
                    Trust Signal
                  </p>
                  <p className="mt-3 text-base leading-8 text-white/90">
                    These accreditations strengthen Optimum’s positioning across
                    secure software development, enterprise hosting, cloud
                    delivery, and compliant data handling.
                  </p>
                </div>
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
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-primary-cbe-500 sm:text-4xl">
              The principles that guide how Optimum builds, deploys, and
              sustains software solutions for our clients.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-md"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-blue-100/60 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-cbe-500 text-sm font-semibold text-white">
                      0{index + 1}
                    </span>
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-primary-cbe-500">
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

      <section id="core-values" className="relative py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute left-[-4rem] top-16 h-56 w-56 rounded-full bg-primary-cbe-500/10 blur-3xl" />
          <div className="absolute right-[-4rem] bottom-20 h-56 w-56 rounded-full bg-primary-cta/10 blur-3xl" />
        </div>

        <div className="relative w-full px-6 sm:px-15 lg:px-30">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <BadgePill label="Our Core Values" centered={false} />
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-primary-cbe-500 sm:text-4xl">
                The principles that shape how we think, build, and serve.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-600">
              Optimum’s culture is grounded in client focus, trust, discipline,
              excellence, continuous improvement, and accountability across
              every engagement.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Client Centric",
                description:
                  "We focus on what our customers need and how they want to interact with our business. Our company is designed from the customer’s perspective.",
              },
              {
                icon: ShieldCheck,
                title: "Integrity",
                description:
                  "Our team is trustworthy, dependable, and passionate about what we do, especially in how we handle client information.",
              },
              {
                icon: Briefcase,
                title: "Professionalism",
                description:
                  "We are reliable, organized, and hold ourselves accountable for our thoughts, words, and actions. We care about every aspect of our work.",
              },
              {
                icon: Star,
                title: "Excellence",
                description:
                  "Whatever is worth doing is worth doing right. We are committed to completing tasks to perfection.",
              },
              {
                icon: RefreshCw,
                title: "Continuous Improvement",
                description:
                  "We stay responsive to the dynamism of technology and continually improve our processes, tools, products, services, and relationships.",
              },
              {
                icon: BadgeCheck,
                title: "Accountability",
                description:
                  "Our commitment is above board, and we take responsibility for our actions, behaviors, performance, and decisions as a company.",
              },
            ].map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-cbe-200 hover:shadow-md"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-cbe-500 via-primary-cbe-400 to-primary-cta" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-cbe-500/10 text-primary-cbe-500 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-red-600">
                      Value
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-primary-cbe-500">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-[2rem] border border-primary-cbe-100 bg-gradient-to-r from-primary-cbe-50 via-white to-red-50 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-600">
              What this means in practice
            </p>
            <p className="mt-3 max-w-4xl text-base leading-8 text-slate-700">
              These values define how Optimum approaches delivery, partnerships,
              security, and service quality—ensuring every solution is built
              with discipline, trust, and long-term client success in mind.
            </p>
          </div>
        </div>
      </section>

      <section id="what-sets-optimum-apart" className="relative py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute left-[-5rem] top-20 h-64 w-64 rounded-full bg-primary-cbe-500/10 blur-3xl" />
          <div className="absolute right-[-4rem] bottom-0 h-64 w-64 rounded-full bg-primary-cta/10 blur-3xl" />
        </div>

        <div className="relative w-full px-6 sm:px-15 lg:px-30">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-2xl">
              <BadgePill label="What Sets Optimum Apart" centered={false} />
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-primary-cbe-500 sm:text-4xl">
                Why institutions and enterprises trust Optimum as a long-term
                technology partner.
              </h2>
            </div>

            <div className="overflow-hidden">
              <p className="mt-6 text-base leading-8 text-slate-600">
                Optimum combines proven implementation depth, tailored
                enterprise delivery, strong technical capability, and a
                hybrid-first architecture to solve real operational challenges
                at scale.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                number: "01",
                icon: BadgeCheck,
                title: "Proven Institutional Impact",
                description:
                  "Optimum has successfully implemented enterprise systems across numerous institutions, with over 180 in education relying on our ERP for daily operations.",
              },
              {
                number: "02",
                icon: Briefcase,
                title: "Deep Sector Expertise",
                description:
                  "Our team brings extensive expertise in enterprise systems development, software engineering, and digital transformation shaped by years of implementation experience.",
              },
              {
                number: "03",
                icon: FileCheck2,
                title: "Custom Enterprise Solutions",
                description:
                  "We work closely with clients to analyze operational challenges and design solutions aligned to their specific institutional processes and realities.",
              },
              {
                number: "04",
                icon: Star,
                title: "Commitment to Excellence",
                description:
                  "Integrity, accountability, professionalism, and excellence guide every engagement, with a clear focus on exceeding client expectations.",
              },
              {
                number: "05",
                icon: ServerCog,
                title: "Strong Technical Capability",
                description:
                  "Our team of over 60 experienced technical professionals combines project management, systems development, and enterprise technology expertise.",
              },
              {
                number: "06",
                icon: Users,
                title: "Customer-Centric Approach",
                description:
                  "We partner closely with clients to ensure every system delivered contributes directly to efficiency, productivity, and long-term organizational growth.",
              },
              {
                number: "07",
                icon: RefreshCw,
                title: "Continuous Innovation",
                description:
                  "We continually refine our platforms and delivery approach to respond to evolving operational needs, sector demands, and enterprise expectations.",
              },
              {
                number: "08",
                icon: CloudCog,
                title: "Hybrid Architecture",
                description:
                  "On-premise security combined with cloud accessibility keeps critical data protected while enabling staff and stakeholders to access services from anywhere.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-cbe-200 hover:shadow-md"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-cbe-500 via-primary-cbe-400 to-primary-cta" />
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary-cbe-500/5 blur-2xl transition-transform duration-500 group-hover:scale-125" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-cbe-500/10 text-primary-cbe-500 transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-primary-cbe-500">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-[2rem] border border-primary-cbe-100 bg-gradient-to-r from-primary-cbe-50 via-white to-red-50 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-600">
              Enterprise positioning
            </p>
            <p className="mt-3 max-w-4xl text-base leading-8 text-slate-700">
              Together, these strengths position Optimum as a trusted enterprise
              technology partner for institutions and organizations that require
              reliable systems, practical implementation depth, and long-term
              operational value.
            </p>
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
        <div className="relative w-full px-6 sm:px-15 lg:px-30">
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
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-primary-cbe-500">
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
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
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
              <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
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
        <div className="w-full px-6 sm:px-15 lg:px-30">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <BadgePill label="Our Commitment" centered={false} />
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-primary-cbe-500 sm:text-4xl">
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
                  className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary-cbe-500 text-sm font-semibold text-white transition-transform duration-300 group-hover:scale-105">
                      ✓
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-cbe-500">
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
        </div>
      </section>
    </main>
  );
}
