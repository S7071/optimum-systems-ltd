"use client";

/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import BadgePill from "@/components/ui/badge-pill";

interface FeatureCard {
  id: number;
  banner: string;
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
    banner: "/product-banners/P-01.webp",
    name: "Ultimate CBE Assessment ERP",
    alias: "UltimateCBE",
    description:
      "A complete Competency-Based Education management system for TVETs and polytechnics — covering student registration, unit tracking, assessments, and KNQA-compliant reporting.",
    icon: "/logos/approved/cbe-dark-icon.svg",
    href: "/ultimate-cbe",
    tag: "Education",
    category: "CBE",
  },
  {
    id: 1,
    banner: "/product-banners/P-02.webp",
    name: "Ultimate Supply Chain ERP",
    alias: "UltimateSCM",
    description:
      "End-to-end procurement, inventory, and logistics management. Track suppliers, purchase orders, stock movement, and deliveries in real time across all your branches.",
    icon: "/logos/approved/sc-dark-icon.svg",
    href: "/ultimate-scm",
    tag: "Logistics",
    category: "SCM",
  },
  {
    id: 2,
    banner: "/product-banners/P-03.webp",
    name: "Ultimate Manufacturing ERP",
    alias: "UltimateMFG",
    description:
      "Streamline your entire production cycle — from raw material planning and work-in-progress tracking to finished goods management and quality control.",
    icon: "/logos/approved/mfg-dark-icon.svg",
    href: "/ultimate-mfg",
    tag: "Manufacturing",
    category: "MFG",
  },
  {
    id: 3,
    banner: "/product-banners/P-04.png",
    name: "Ultimate Hotel ERP",
    alias: "UltimateHMS",
    description:
      "A fully integrated hospitality management system covering reservations, front desk, housekeeping, restaurant POS, billing, and guest experience management.",
    icon: "/logos/approved/hms-dark-icon.svg",
    href: "/ultimate-hms",
    tag: "Hospitality",
    category: "HMS",
  },
  {
    id: 4,
    banner: "/product-banners/P-05.png",
    name: "Ultimate POS",
    alias: "UltimatePOS",
    description:
      "A fast, reliable point-of-sale system for retail and service businesses. Manage sales, stock, receipts, and daily reports from a single, easy-to-use interface.",
    icon: "/logos/approved/pos-dark-icon.svg",
    href: "/ultimate-pos",
    tag: "Retail",
    category: "POS",
  },
  {
    id: 5,
    banner: "/product-banners/P-06.webp",
    name: "Ultimate Conference",
    alias: "UltimateCMS",
    description:
      "Seamlessly manage venue bookings, event scheduling, attendee registration, billing, and post-event reporting for conference centres and event facilities.",
    icon: "/logos/approved/cms-dark-icon.svg",
    href: "/ultimate-cms",
    tag: "Events",
    category: "CMS",
  },
];

export default function SiteFeatures() {
  const router = useRouter();

  return (
    <section className="w-full">
      {/* ── Hero Header ─────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden px-6 py-16 sm:py-24 text-center bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800"
      >
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 900 240"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <circle cx="100" cy="60" r="140" fill="#fff" />
            <circle cx="780" cy="180" r="160" fill="#fff" />
            <circle cx="450" cy="20" r="90" fill="#e63329" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto flex max-w-[47.5rem] flex-col items-center gap-3">
          {/* Brand pill */}
          <BadgePill label="Optimum System Ltd" centered={true} />

          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-white mb-4">
            Purpose-Built ERP Products for{" "}
            <span className="text-primary-cta">Every Industry</span>
          </h2>

          {/* Sub-copy */}
          <p className="text-sm leading-relaxed sm:text-base text-[#ffffff99]">
            From hospitality and manufacturing to retail and conferencing —
            every Optimum product is built specifically for its industry, fully
            integrated, and tested across real Kenyan businesses.
          </p>
        </div>
      </div>

      {/* ── Cards Grid ──────────────────────────────────────────────── */}
      <div className="bg-primary-cbe-50 px-6 py-14 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((card) => (
              <Card
                key={card.id}
                className="group overflow-hidden border border-[#e8edf5] py-0 shadow-none transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#1a3a6b] hover:shadow-[0_20px_48px_rgba(26,58,107,0.02)]"
              >
                <CardContent className="px-0 pb-0">
                  {/* ── Banner ── */}
                  <div className="relative w-full pb-[56.25%]">
                    {/* Category badge — sits over the banner */}
                    <span
                      className="absolute right-3 top-3 z-10 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white"
                      style={{ background: "#1a3a6b" }}
                    >
                      {card.category}
                    </span>

                    {/* Industry tag — bottom-left of banner */}
                    <span
                      className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        background: "rgba(255,255,255,0.92)",
                        color: "#1a3a6b",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {card.tag}
                    </span>

                    <div className="absolute inset-0 overflow-hidden rounded-tl-md rounded-tr-md">
                      <img
                        src={card.banner}
                        alt={card.name}
                        className="block size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] brightness-98"
                      />
                    </div>
                  </div>

                  {/* ── Body ── */}
                  <div className="flex flex-col gap-3 p-5">
                    {/* Icon + Name + Alias */}
                    <CardTitle className="flex items-center justify-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border bg-white shadow-sm">
                        <img
                          alt={card.alias}
                          className="h-7 w-7"
                          src={card.icon}
                        />
                      </div>
                      <div className="flex min-w-0 flex-col gap-0.5">
                        <span className="line-clamp-1 text-[15px] font-bold leading-snug text-gray-900">
                          {card.name}
                        </span>
                        <span
                          className="text-xs font-semibold leading-none"
                          style={{ color: "#e63329" }}
                        >
                          {card.alias}
                        </span>
                      </div>
                    </CardTitle>

                    {/* Divider */}
                    <hr className="border-[#f0f2f6]" />

                    {/* Description */}
                    <CardDescription className="line-clamp-2 text-sm leading-relaxed text-gray-500">
                      {card.description}
                    </CardDescription>

                    {/* Actions */}
                    <div className="flex w-full flex-row items-center justify-end gap-2 pt-2">
                      <a href={card.href}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-1.5 font-semibold text-[#1a3a6b] hover:bg-[#eef3fb] hover:text-[#1a3a6b]"
                        >
                          Explore
                          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Button>
                      </a>
                      <a href={`${card.href}/schedule-demo`}>
                        <Button
                          size="sm"
                          className="bg-[#e63329] font-semibold text-white shadow-none hover:bg-[#c8251b] active:scale-95"
                        >
                          Book a Demo
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ── Bottom CTA ───────────────────────────────────────── */}
          <div className="mt-16 flex flex-col items-center gap-10">
            <Button size="lg" onClick={() => router.push("/products")}>
              Explore All Our Products
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <p className="text-xs text-gray-400">
              Need a custom solution?{" "}
              <a
                href="/contact"
                className="font-semibold text-[#1a3a6b] underline-offset-2 hover:underline"
              >
                Talk to our team
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
