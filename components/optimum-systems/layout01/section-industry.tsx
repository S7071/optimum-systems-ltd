/* eslint-disable @next/next/no-img-element */
"use client";

import { BadgePill } from "@/components/ui/badge-pill";
import {
  Ambulance,
  ArrowRight,
  BriefcaseBusiness,
  Factory,
  GraduationCap,
  HouseHeart,
  Medal,
  Plus,
  type LucideIcon,
} from "lucide-react";

interface Industry {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image: string;
  products: string[];
  icon: LucideIcon;
  overview: string;
}

const industries: Industry[] = [
  {
    id: 1,
    name: "Higher Education",
    tagline: "TVETs, Universities & Polytechnics",
    description:
      "UltimateERP powers 186+ institutions with 30+ modules — from admissions to alumni, finance to biometric gate control.",
    products: ["UltimateERP", "BAMS", "QAB System", "Turnstile Gate Control"],
    image: "/industries/higher-edu.jpg",
    icon: GraduationCap,
    overview:
      "Purpose-built ERP for universities, TVETs, and colleges, covering the full student lifecycle, finance, HR, compliance, attendance, and executive reporting.",
  },
  {
    id: 2,
    name: "Healthcare",
    tagline: "Hospitals, Clinics & County Health",
    description:
      "HMS and MedFlow digitize patient care and pharmaceutical supply chains — from KEMSA to bedside, with full accountability.",
    products: ["Hospital Management System", "MedFlow Drug Tracking"],
    image: "/industries/healthcare.jpg",
    icon: Ambulance,
    overview:
      "From hospital operations to county pharmaceutical tracking, our healthcare solutions improve accountability, reduce delays, and strengthen service delivery.",
  },
  {
    id: 3,
    name: "Finance & Retail",
    tagline: "MFIs, Wholesalers & Distributors",
    description:
      "Lend360 and the Retail Suite handle full-cycle lending, multi-branch POS, van sales, ETIMS compliance and supply chain intelligence.",
    products: ["Lend360", "Retail & Distribution Suite", "NexusTrade"],
    image: "/industries/finre.jpg",
    icon: BriefcaseBusiness,
    overview:
      "Built for high-volume, transaction-heavy environments requiring branch visibility, lending controls, distribution workflows, compliance, and operational intelligence.",
  },
  {
    id: 4,
    name: "Manufacturing & Agriculture",
    tagline: "Processors, Farms & Cooperatives",
    description:
      "End-to-end ERP for manufacturers, dairy cooperatives, and poultry farms — BOM, production costing, milk intake and IoT-ready analytics.",
    products: [
      "Manufacturing ERP",
      "Dairy Management",
      "Poultry Farm Management",
    ],
    image: "/industries/mangri.jpg",
    icon: Factory,
    overview:
      "Integrated systems for production planning, farmer payments, intake, costing, inventory, and financial control across agricultural and manufacturing operations.",
  },
  {
    id: 5,
    name: "Real Estate & Security",
    tagline: "Developers, Estates & Multi-Site Facilities",
    description:
      "REMS and SMS give property managers and security teams full-stack control — from lease automation to biometric perimeter defense.",
    products: ["Real Estate Management", "Security Management System"],
    image: "/industries/realestate.jpg",
    icon: HouseHeart,
    overview:
      "Manage leasing, billing, collections, access control, incident monitoring, and multi-site security from one connected enterprise environment.",
  },
  {
    id: 6,
    name: "Government & CBE",
    tagline: "County Systems & Senior Secondary",
    description:
      "UltimateCBE and MedFlow support Kenya's CBC rollout and county drug supply — NEMIS-integrated and fully CDACC/TVETA compliant.",
    products: ["UltimateCBE Assessment ERP", "MedFlow", "FinderApp"],
    image: "/industries/gov.jpg",
    icon: Medal,
    overview:
      "Digital infrastructure for public institutions that need transparency, compliance, system integration, and real-time operational visibility at scale.",
  },
];

function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = industry.icon;

  return (
    <article className="group relative min-h-[440px] overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-primary-cbe-200 hover:shadow-lg">
      {/* Accent line */}
      <div className="absolute inset-x-0 top-0 z-20 h-[3px] bg-gradient-to-r from-primary-cbe-500 via-primary-cbe-700 to-primary-cta" />

      {/* Front */}
      <div className="relative z-10 flex h-full flex-col transition-all duration-500 group-hover:scale-[0.985] group-hover:opacity-0">
        {/* Image */}
        <div className="relative h-[230px] overflow-hidden">
          <img
            src={industry.image}
            alt={industry.name}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/20 to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,79,158,0.14),transparent_45%,rgba(220,38,38,0.10))]" />

          <div className="absolute left-5 bottom-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-cbe-500 to-primary-cbe-800 text-white shadow-lg shadow-primary-cbe-500/20 ring-1 ring-primary-cbe-500/40">
              <Icon className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <p className="mb-1 text-[10px] font-semibold uppercase text-white/80">
                {industry.tagline}
              </p>
              <h3 className="truncate text-xl font-semibold tracking-tight text-white">
                {industry.name}
              </h3>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <p className="text-[15px] leading-7 text-slate-600 line-clamp-4">
              {industry.overview}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-cbe-700 transition-colors duration-300 group-hover:text-primary-cta">
              View sector solutions
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-primary-cbe-700 transition-all duration-300 group-hover:border-primary-cta/20 group-hover:bg-primary-cta group-hover:text-white">
              <Plus className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </div>
          </div>
        </div>
      </div>

      {/* Hover panel */}
      <div className="pointer-events-none absolute inset-0 z-30 flex translate-y-6 flex-col justify-between bg-[linear-gradient(180deg,rgba(11,16,64,0.985)_0%,rgba(7,11,45,0.985)_100%)] p-8 opacity-0 transition-all duration-500 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_35%)]" />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-5 bg-primary-cta" />
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary-cta">
                Overview
              </span>
            </div>

            <h4 className="mb-4 text-lg font-semibold tracking-tight text-white">
              {industry.name}
            </h4>

            <p className="max-w-[32ch] text-sm leading-7 text-white/82 line-clamp-3">
              {industry.description}
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-8">
          <div className="mb-6 h-px w-full bg-white/10" />

          <p className="mb-3 text-[8px] font-bold uppercase tracking-[0.22em] text-white/35">
            Solutions Included
          </p>

          <div className="mb-8 flex flex-wrap gap-2">
            {industry.products.map((product) => (
              <span
                key={product}
                className="rounded-xl border border-white/10 bg-white/6 px-3 py-1.5 text-[12px] font-medium text-white/80 backdrop-blur-sm"
              >
                {product}
              </span>
            ))}
          </div>

          <span className="inline-flex items-center gap-2 border-b border-primary-cta/60 pb-1 text-sm font-semibold text-white">
            Explore solutions
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>

      {/* Top-right control */}
      <div className="absolute right-5 top-5 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-white/88 text-primary-cbe-700 shadow-md ring-1 ring-slate-200/70 backdrop-blur-sm transition-all duration-300 group-hover:bg-primary-cta group-hover:text-white group-hover:ring-primary-cta">
        <Plus className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
      </div>
    </article>
  );
}

export default function IndustrySection() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden px-6 py-18 sm:px-8 md:px-12 lg:px-16 xl:px-24 w-full bg-background"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary-cta/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-3 items-center mb-14">
          <BadgePill label="Sectors We Serve" centered={true} />

          <h3 className="text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500">
            Industries We {" "}<span className="text-primary-cta">Serve</span>
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            From higher education to healthcare, retail to real estate, Optimum
            delivers purpose-built enterprise systems trusted by institutions
            across Kenya’s most dynamic sectors.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
}
