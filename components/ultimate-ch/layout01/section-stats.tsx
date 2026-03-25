// components/HMSStatsSection.tsx
import BadgePill from "@/components/ui/badge-pill";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "@/lib/utils";
import * as React from "react";

// type StatItem = {
//   value: string;
//   description: string;
//   icon: React.ElementType;
//   accent?: boolean;
// };

// type InsightItem = {
//   title: string;
//   subtitle: string;
// };

// const stats: StatItem[] = [
//   {
//     value: "150+",
//     description: "Institutions successfully deployed across East Africa",
//     icon: Users,
//   },
//   {
//     value: "98%",
//     description: "Uptime guarantee on cloud-hosted deployments",
//     icon: ShieldCheck,
//     accent: true,
//   },
//   {
//     value: "50%",
//     description: "Reduction in admin workload reported by clients",
//     icon: Clock,
//   },
//   {
//     value: "24/7",
//     description: "Local Kenyan support team always available",
//     icon: BarChart3,
//   },
// ];

// const insightItems: InsightItem[] = [
//   {
//     title: "Comprehensive Occupancy & Revenue Analytics",
//     subtitle:
//       "Live dashboards showing occupancy rates, ADR, RevPAR, and collection status",
//   },
//   {
//     title: "Seamless Solutions Backed by M-PESA & Bank Standards",
//     subtitle:
//       "Fully compliant billing with integrated M-PESA, card, and bank transfer reconciliation",
//   },
//   {
//     title: "Configurable Workflows for Admins, Receptionists & Porters",
//     subtitle:
//       "Role-based access ensures every team member only sees exactly what they need",
//   },
// ];

function InsightPill({ label, description }: bulletPointProp) {
  return (
    <div className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 transition-colors hover:border-blue-400/30 hover:bg-white/[0.08]">
      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#E01E37]" />
      <div>
        <p className="text-[13.5px] font-semibold text-white line-clamp-1">{label}</p>
        <p className="mt-0.5 text-[12px] text-white/45 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}

interface bulletPointProp {
  label: string;
  description: string;
}

interface statCardProp {
  value: string;
  description: string;
  icon: LucideIcon;
  accent: boolean;
};

interface prop {
  eyebrow: string;
  title: React.ReactElement;
  description: string;
  bulletPoints: bulletPointProp[],
  statCards: statCardProp[];
};

export default function StatsSection(prop: prop) {
  return (
    <section
      className="relative overflow-hidden px-6 py-24 sm:px-30 md:py-32 w-full bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(30,79,189,0.30) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-100px] left-[30%] h-[400px] w-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(200,21,43,0.12) 0%, transparent 65%)",
        }}
      />
      <div className="container relative z-10 mx-auto w-full px-4">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <BadgePill label={prop.eyebrow} centered={false} />

            {prop.title}

            <p className="mt-4 text-[16px] font-light leading-relaxed text-white/65 line-clamp-3">
              {prop.description}
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {prop.bulletPoints.map((item, i) => (
                <InsightPill key={i} {...item} />
              ))}
            </div>

            <div className="mt-10">
              <Button variant="default" size="lg">
                Find Out More
              </Button>
            </div>
          </div>

          {/* Stat cards grid */}
          <div className="grid grid-cols-2 gap-4">
            {prop.statCards.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className={`
                          group rounded-lg border p-6 transition-all duration-300 hover:-translate-y-1
                          ${
                            stat.accent
                              ? "border-primary-cta bg-[#E01E37] hover:bg-primary-cta"
                              : "border-white/10 bg-white/5 hover:bg-white/[0.09]"
                          }
                        `}
                >
                  <Icon
                    className={`mb-4 h-7 w-7 ${
                      stat.accent ? "text-white/80" : "text-white/45"
                    }`}
                  />
                  <p className="text-[32px] font-extrabold leading-none tracking-tight text-white line-clamp-1">
                    {stat.value}
                  </p>
                  <p
                    className={`mt-2 text-[12.5px] leading-snug line-clamp-2 ${
                      stat.accent ? "text-white/75" : "text-white/50"
                    }`}
                  >
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
