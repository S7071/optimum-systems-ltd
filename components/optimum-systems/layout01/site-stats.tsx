/* eslint-disable @next/next/no-img-element */
import BadgePill from "@/components/ui/badge-pill";
import { LucideIcon } from "@/lib/utils";
import {
  Award,
  Building2,
  Cpu,
  Handshake,
  Network,
  ServerCog,
  Settings2,
  Sparkles,
} from "lucide-react";

interface DifferentiatorCard {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const cards: DifferentiatorCard[] = [
  {
    id: 1,
    number: "01",
    title: "Proven Institutional Impact",
    description:
      "Over 150 institutions, especially in education, rely on Optimum ERP to run daily operations, streamline workflows, and support critical institutional processes.",
    icon: Building2,
  },
  {
    id: 2,
    number: "02",
    title: "Deep Sector Expertise",
    description:
      "Our team combines enterprise systems, software engineering, and digital transformation expertise with hands-on experience in solving real institutional challenges.",
    icon: Network,
  },
  {
    id: 3,
    number: "03",
    title: "Custom Enterprise Solutions",
    description:
      "We design tailored enterprise solutions around each client’s workflows, processes, and goals—delivering systems that are practical, scalable, and effective.",
    icon: Settings2,
  },
  {
    id: 4,
    number: "04",
    title: "Commitment to Excellence",
    description:
      "Integrity, accountability, professionalism, and excellence shape every engagement, helping us deliver solutions that consistently meet and exceed client expectations.",
    icon: Award,
  },
  {
    id: 5,
    number: "05",
    title: "Strong Technical Capability",
    description:
      "With 40+ technical professionals, Optimum delivers strong project management, systems development, and enterprise expertise for demanding environments.",
    icon: Cpu,
  },
  {
    id: 6,
    number: "06",
    title: "Customer-Centric Approach",
    description:
      "We work closely with clients to ensure every solution improves efficiency, productivity, and long-term growth—keeping customer success at the center.",
    icon: Handshake,
  },
  {
    id: 7,
    number: "07",
    title: "Continuous Innovation",
    description:
      "We continuously refine our platforms, delivery methods, and capabilities to provide modern, future-ready solutions that keep clients ahead.",
    icon: Sparkles,
  },
  {
    id: 8,
    number: "08",
    title: "Hybrid Architecture",
    description:
      "Hybrid deployment combines on-premise security with cloud accessibility, keeping data protected while enabling secure access for authorized teams anywhere.",
    icon: ServerCog,
  },
];

const highlights = [
  {
    value: "150+",
    label: "Institutions supported",
  },
  {
    value: "40+",
    label: "Technical professionals",
  },
  {
    value: "Enterprise",
    label: "Sector-focused execution",
  },
  {
    value: "Hybrid",
    label: "Cloud + on-premise ready",
  },
];

export default function SiteStats() {
  return (
    <section className="relative isolate overflow-hidden bg-background w-full">
      {/* Background layers */}
      
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-primary-cbe-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-primary-cta/10 blur-3xl" />

      <div className="relative z-10 px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center flex flex-col gap-3 items-center">
            <BadgePill label="What sets us apart" centered={true} />

            <h3 className="text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500 mb-4">
              Why Institutions <br />
              Choose{" "}
              <span className="text-primary-cta">Optimum ERP Systems Ltd</span>
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Key strengths that define Optimum ERP Systems Ltd as a trusted
              enterprise technology partner—delivering secure, scalable, and
              institution-aligned systems that support real operational
              outcomes.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {cards.map((card) => (
              <article
                key={card.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-primary-cbe-500/10 bg-white/90 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-cbe-500/20 hover:shadow-lg"
              >
                {/* Accent line */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-primary-cbe-500" />

                {/* Decorative dots */}
                <div className="pointer-events-none absolute right-4 top-4 opacity-[0.06]">
                  <img
                    src="/patterns/dots.svg"
                    alt=""
                    className="h-16 w-16 object-contain"
                  />
                </div>

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-cbe-500 to-primary-cbe-800 text-white shadow-lg shadow-primary-cbe-500/20 ring-1 ring-white/40">
                      <card.icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-1 flex-col">
                    <h3 className="pr-10 text-base font-bold leading-snug text-primary-cbe-500">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-primary-cta transition-all duration-300 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
