/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import BadgePill from "@/components/ui/badge-pill";
import Link from "next/link";

interface FeatureCard {
  id: number;
  name: string;
  alias: string;
  description: string;
  icon: string;
  href: string;
  tag: string;
  category: string;
}

const featureCards: FeatureCard[] = [
  {
    id: 0,
    name: "Ultimate CBE Assessment ERP",
    alias: "UltimateCBE",
    description:
      "A complete Competency-Based Education management system for TVETs and polytechnics — covering student registration, unit tracking, assessments, and KNQA-compliant reporting.",
    icon: "/logos/ultimate-cbe.svg",
    href: "/ultimate-cbe",
    tag: "Education",
    category: "CBE",
  },
  {
    id: 1,
    name: "Ultimate Supply Chain ERP",
    alias: "UltimateSCM",
    description:
      "End-to-end procurement, inventory, and logistics management. Track suppliers, purchase orders, stock movement, and deliveries in real time across all your branches.",
    icon: "/logos/ultimate-supply-chain.svg",
    href: "/ultimate-scm",
    tag: "Logistics",
    category: "SCM",
  },
  {
    id: 2,
    name: "Ultimate Manufacturing ERP",
    alias: "UltimateMFG",
    description:
      "Streamline your entire production cycle — from raw material planning and work-in-progress tracking to finished goods management and quality control.",
    icon: "/logos/ultimate-manufacturing.svg",
    href: "/ultimate-mfg",
    tag: "Manufacturing",
    category: "MFG",
  },
  {
    id: 3,
    name: "Ultimate Hotel ERP",
    alias: "UltimateHMS",
    description:
      "A fully integrated hospitality management system covering reservations, front desk, housekeeping, restaurant POS, billing, and guest experience management.",
    icon: "/logos/ultimate-hotel.svg",
    href: "/ultimate-hms",
    tag: "Hospitality",
    category: "HMS",
  },
  {
    id: 4,
    name: "Ultimate POS",
    alias: "UltimatePOS",
    description:
      "A fast, reliable point-of-sale system for retail and service businesses. Manage sales, stock, receipts, and daily reports from a single, easy-to-use interface.",
    icon: "/logos/ultimate-pos.svg",
    href: "/ultimate-pos",
    tag: "Retail",
    category: "POS",
  },
  {
    id: 5,
    name: "Ultimate Conference ERP",
    alias: "UltimateCMS",
    description:
      "Seamlessly manage venue bookings, event scheduling, attendee registration, billing, and post-event reporting for conference centres and event facilities.",
    icon: "/logos/ultimate-conference.svg",
    href: "/ultimate-cms",
    tag: "Events",
    category: "CMS",
  },
];

function ProductName({ name }: { name: string }) {
  const [first, ...rest] = name.split(" ");

  return (
    <h3 className="text-lg font-semibold leading-tight tracking-[-0.02em] text-slate-950">
      <span className="text-primary-cta">{first}</span>{" "}
      <span className="text-primary-cbe-700">{rest.join(" ")}</span>
    </h3>
  );
}

export default function SiteFeatures() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="w-full px-0 sm:px-16 lg:px-30">
        {/* Header */}
        <div className="relative overflow-hidden sm:rounded-[2rem] sm:border border-white/10 bg-gradient-to-br from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 px-6 py-14 sm:shadow-sm sm:px-10 sm:py-16 lg:px-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(230,51,41,0.16),transparent_22%)]" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="mx-auto max-w-3xl text-center flex flex-col gap-3 items-center">
              <BadgePill label="Optimum ERP Systems Ltd" centered={true} />

              <h3 className="text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-50 mb-4">
                Other Purpose-Built ERP <br />
                Products for{" "}
                <span className="text-primary-cta">Every Industry</span>
              </h3>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
                From hospitality and manufacturing to retail and conferencing,
                every Optimum product is designed for sector-specific workflows,
                operational efficiency, and long-term scale.
              </p>
            </div>

            <div className="mt-8 hidden sm:flex flex-wrap items-center justify-center gap-3">
              {[
                "Industry-specific design",
                "Operationally integrated",
                "Built for real deployments",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="px-6 sm:px-0 mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((card) => (
            <Card
              key={card.id}
              className="group h-full overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white py-0 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary-cbe-200 hover:shadow-md"
            >
              <CardContent className="flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <img
                        alt={card.alias}
                        className="h-7 w-7 object-contain"
                        src={card.icon}
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <ProductName name={card.name} />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                        {card.alias}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="my-5 h-px w-full bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />

                <div className="flex flex-1 flex-col">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-primary-cbe-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-cbe-700">
                      {card.tag}
                    </span>
                    <span className="rounded-full bg-primary-cta/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-cta">
                      {card.category}
                    </span>
                  </div>

                  <CardDescription className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                    {card.description}
                  </CardDescription>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a href={card.href} className="block">
                    <Button
                      variant="ghost"
                      className="h-11 w-full rounded-full border border-primary-cbe-100 bg-primary-cbe-50/70 font-semibold text-primary-cbe-700 transition-all duration-300 hover:bg-primary-cbe-100 hover:text-primary-cbe-800"
                    >
                      Explore
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Button>
                  </a>

                  <a href={`${card.href}/schedule-demo`} className="block">
                    <Button className="h-11 w-full rounded-full bg-primary-cta font-semibold text-white shadow-none transition-all duration-300 hover:bg-[#c8251b]">
                      Book Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="px-6 sm:px-0">
          <div className="relative overflow-hidden mt-8 rounded-[1.75rem] border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-8">
            <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,_rgba(29,78,216,0.12),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(239,68,68,0.12),_transparent_40%)] lg:block" />
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between relative">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary-cbe-400">
                  Product Ecosystem
                </p>
                <h3 className="mt-2 text-2xl font-bold text-pretty leading-tight tracking-tight text-primary-cbe-500">
                  Explore the Full Optimum ERP Portfolio
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Discover additional product lines, modules, and enterprise
                  solutions tailored for institutions and growing organizations.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full bg-primary-cta px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary-cta-800"
                >
                  Explore All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:border-slate-400 hover:bg-slate-50"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
