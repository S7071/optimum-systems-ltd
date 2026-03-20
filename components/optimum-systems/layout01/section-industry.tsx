/* eslint-disable @next/next/no-img-element */
"use client";

import BadgePill from "@/components/ui/badge-pill";
import { Separator } from "@/components/ui/separator";
import { LucideIcon } from "@/lib/utils";
import type { Easing } from "framer-motion";
import { motion } from "framer-motion";
import {
  Plus,
  MoveRight,
  Medal,
  HouseHeart,
  Factory,
  BriefcaseBusiness,
  Ambulance,
  GraduationCap,
} from "lucide-react";

const ease: Easing = [0.25, 0.1, 0.25, 1];

interface Industry {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image: string;
  products: string[];
  icon: LucideIcon;
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
  },
];

function IndustryCard({ industry }: { industry: Industry; index: number }) {
  return (
    <motion.div
      className="group relative overflow-hidden cursor-pointer bg-white hover:bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 border-t-[3px] border-primary-cbe-500 hover:border-primary-cta transition-[background-color,border-color] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] rounded-sm shadow-sm"
      whileHover="hover"
      initial="initial"
    >
      {/* ── Front face ── */}
      <motion.div
        variants={{
          initial: { opacity: 1, y: 0, pointerEvents: "auto" },
          hover: { opacity: 0, y: -16, pointerEvents: "none" },
        }}
        transition={{ duration: 0.28, ease }}
        className="flex flex-col justify-end min-h-[400px]"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={industry.image}
            alt=""
            aria-hidden="true"
            className="w-full h-[80%] object-cover object-top brightness-80"
          />
        </div>

        {/* Tagline + Name */}
        <div className="z-2 bg-background p-6 flex flex-col gap-4 items-start w-full">
          <div className="bg-background flex flex-row gap-3 items-center">
            <div className="size-11 flex items-center justify-center rounded-sm bg-background border shadow-sm">
              <industry.icon size={20} className="text-primary-cbe-500" />
            </div>
            <div>
              <p className="text-[10px] font-semibold text-pretty uppercase text-primary-cta line-clamp-1">
                {industry.tagline}
              </p>
              <h3 className="text-sm sm:text-base font-semibold text-primary-cbe-800 line-clamp-1">
                {industry.name}
              </h3>
            </div>
          </div>
          <Separator />
          {/* Description */}
          <div className="line-clamp-2 text-sm leading-relaxed text-gray-500">
            Pariatur culpa dolore culpa et sit proident reprehenderit excepteur
            pariatur aute mollit aliqua. Tempor ipsum sunt nulla fugiat
            reprehenderit mollit commodo dolore nisi eu minim do laborum. Irure
            ea occaecat deserunt occaecat enim qui in culpa. Sunt nisi irure
            dolore ex nulla laboris proident aliquip amet. Id esse officia ad
            eiusmod magna fugiat non officia consequat veniam aliquip qui dolor
            laboris.
          </div>
        </div>
      </motion.div>

      {/* ── Back face ── */}
      <motion.div
        variants={{
          initial: { opacity: 0, y: 22, pointerEvents: "none" },
          hover: { opacity: 1, y: 0, pointerEvents: "auto" },
        }}
        transition={{ duration: 0.32, ease, delay: 0.07 }}
        className="absolute inset-0 flex flex-col justify-between p-7 lg:p-8"
      >
        {/* Overview */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="block w-4 h-px bg-primary-cta shrink-0" />
            <p className="text-[0.6rem] font-bold tracking-[0.22em] uppercase text-primary-cta">
              Overview
            </p>
          </div>
          <p className="text-[0.84rem] leading-[1.72] text-white/80">
            {industry.description}
          </p>
        </div>

        {/* Products + CTA */}
        <div className="space-y-4">
          <div className="w-full h-px bg-white/[0.09]" />

          <div>
            <p className="text-[0.58rem] font-bold tracking-[0.18em] uppercase text-white/30 mb-2.5">
              Solutions included
            </p>
            <div className="flex flex-wrap gap-1.5">
              {industry.products.map((p) => (
                <span
                  key={p}
                  className="text-[0.65rem] tracking-wide px-2.5 py-[5px] rounded-sm whitespace-nowrap bg-white/[0.06] text-white/60 border border-white/[0.10] leading-none"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 text-white text-[0.78rem] font-semibold border-b border-primary-cta/50 pb-px">
            Explore solutions
            <MoveRight size={13} />
          </span>
        </div>
      </motion.div>

      {/* ── Plus / close button ── */}
      <motion.div
        className="absolute top-[18px] right-[18px] z-10"
        variants={{
          initial: { rotate: 0 },
          hover: { rotate: 45 },
        }}
        transition={{ duration: 0.32, ease }}
      >
        <div className="w-7 h-7 rounded-full flex items-center justify-center bg-primary-cbe-500/10 text-primary-cbe-500 group-hover:bg-primary-cta group-hover:text-white transition-colors duration-300">
          <Plus size={14} strokeWidth={2.5} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function IndustrySection() {
  return (
    <section id="industries" className="px-6 sm:px-30 py-16 md:py-24 bg-primary-cbe-50 w-full">
      <div className="space-y-8">
        {/* ── Header ── */}
        <div className="flex flex-col items-center gap-3 text-center mb-12">
          <BadgePill label="Sectors" centered={true} />
          <h3 className="text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-900 mb-4">
            Industries We {" "}
            <span className="text-primary-cta">Serve</span>
          </h3>
          <p className="max-w-xl text-muted-foreground leading-relaxed line-clamp-3">
            Nulla eu proident incididunt amet consectetur excepteur mollit
            tempor incididunt eu qui tempor magna. Dolore elit non fugiat nulla
            magna esse cupidatat pariatur consectetur qui et.
          </p>
        </div>

        {/* ── Cards grid ──
            gap-px + bg-[#D1D9EE] = 1px hairline separators between all cards
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, i) => (
            <IndustryCard key={industry.id} industry={industry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
