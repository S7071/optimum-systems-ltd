"use client";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "@/lib/utils";
import {
  Activity,
  Calendar,
  DollarSign,
  Home,
  Play,
  Users,
} from "lucide-react";
import Image from "next/image";

const METRICS = [
  {
    label: "Occupancy",
    value: "84%",
    valueColor: "text-primary-cbe-500",
    delta: "+6% vs yesterday",
    deltaColor: "text-green-600",
  },
  {
    label: "Available",
    value: "18",
    valueColor: "text-[#0D1B2A]",
    delta: "Rooms free",
    deltaColor: "text-[#8a97a8]",
  },
  {
    label: "Pending",
    value: "5",
    valueColor: "text-[#C0392B]",
    delta: "Housekeeping",
    deltaColor: "text-orange-500",
  },
];

const ROOM_BARS = [
  { name: "Deluxe", pct: 92, color: "bg-primary-cbe-500" },
  { name: "Standard", pct: 78, color: "bg-[#2e86d4]" },
  { name: "Suite", pct: 66, color: "bg-[#C0392B]" },
  { name: "Budget", pct: 89, color: "bg-primary-cbe-400" },
];

const EVENTS = [
  {
    dot: "bg-primary-cbe-500",
    text: "Group booking confirmed — Acacia Corp",
    time: "08:14",
  },
  {
    dot: "bg-green-500",
    text: "Payment received — Room 304, M-PESA",
    time: "09:52",
  },
  {
    dot: "bg-[#C0392B]",
    text: "Maintenance request — Room 118 (AC)",
    time: "11:07",
  },
];

interface featureProp {
  label: string;
  sub: string;
  icon: LucideIcon;
}

const FEATURES: featureProp[] = [
  {
    label: "Reservations & Front Desk",
    sub: "Real-time availability",
    icon: Calendar,
  },
  {
    label: "Billing & M-PESA",
    sub: "Automated invoicing",
    icon: DollarSign,
  },
  {
    label: "Housekeeping",
    sub: "Task & status tracking",
    icon: Home,
  },
  {
    label: "CEO Analytics Dashboard",
    sub: "Live executive insights",
    icon: Activity,
  },
];

const TRUST_AVATARS = [
  { initials: "SK", bg: "bg-primary-cbe-500" },
  { initials: "JM", bg: "bg-[#2e86d4]" },
  { initials: "AW", bg: "bg-primary-cbe-400" },
  { initials: "BN", bg: "bg-[#C0392B]" },
];

/* ─── Component ─────────────────────────────────────────────────────────── */

export default function SiteHero() {
  return (
    <section className="w-full bg-primary-cbe-50">
      <div className="grid lg:grid-cols-2 items-stretch w-full">
        {/* Left column */}
        <div className="flex items-center px-6 sm:px-30 py-14">
          <div className="flex flex-col gap-7 max-w-full shrink-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 w-fit">
              <div className="size-10 rounded-lg bg-background flex items-center justify-center flex-shrink-0 p-1.5 border border-primary-cbe-100">
                <Image
                  src="/logos/approved/cms-dark-icon.svg"
                  alt="UltimateCMS"
                  width={10}
                  height={10}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-cbe-800">
                Ultimate CMS ERP
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.18] text-primary-cbe-800 tracking-[-1px]">
              One Platform to
              <br />
              Run Your Entire
              <br />
              <span className="text-primary-cbe-500 font-bold">Conference Operations</span>
            </h1>

            {/* Subtext */}
            <p className="text-primary-cbe-800 text-base leading-relaxed max-w-[340px] sm:max-w-[440px]">
              Ultimate HMS centralizes reservations, front desk, housekeeping,
              billing, and guest services — giving your team real-time
              visibility and your guests a seamless experience.
            </p>

            {/* Action buttons */}
            <div className="flex items-center gap-3">
              <Button variant="default" size="lg">
                Request a Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-primary-cbe-800"
              >
                <Play className="size-3.5 fill-current text-primary-cbe-800 hidden sm:block" />
                Watch Overview
              </Button>
            </div>

            {/* Trust row */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <div className="flex">
                {TRUST_AVATARS.map(({ initials, bg }, i) => (
                  <div
                    key={initials}
                    className={`w-[30px] h-[30px] rounded-full border-2 border-white ${bg} flex items-center justify-center text-[11px] font-bold text-white ${i !== 0 ? "-ml-2" : ""}`}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-[12.5px] text-gray-500 leading-snug">
                Trusted by{" "}
                <strong className="text-[#0D1B2A] font-semibold">
                  150+ institutions
                </strong>{" "}
                across East Africa
                <br />
                with Category 1 ICT Authority accreditation
              </p>
            </div>
          </div>
        </div>
        {/* Right column — blue dashboard panel */}
        <div className="relative bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 flex items-center justify-center px-8 py-10 overflow-hidden min-h-[492px]">
          {/* Decorative circles */}
          <div className="absolute -top-[60px] -right-[60px] w-[220px] h-[220px] rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -bottom-[80px] -left-[40px] w-[260px] h-[260px] rounded-full bg-white/[0.04] pointer-events-none" />

          {/* Floating chip — top right */}
          <div className="absolute top-9 right-7 bg-background rounded-sm p-2 shadow-xl flex items-center gap-4 z-10">
            <div className="w-10 h-10 rounded-sm bg-primary-cbe-100 flex items-center justify-center">
              <Users
                size={4.5}
                className="size-4.5 fill-current text-primary-cbe-300"
              />
            </div>
            <div className="pr-5">
              <div className="text-sm font-bold text-primary-cbe-800 leading-tight">
                47 Check-Ins
              </div>
              <div className="text-xs text-primary-cbe-800/40">
                Today&apos;s arrivals
              </div>
            </div>
          </div>

          {/* Floating chip — bottom left */}
          <div className="absolute bottom-12 left-[18px] bg-white rounded-sm p-2 shadow-xl flex items-center gap-4 z-10">
            <div className="w-10 h-10 rounded-sm bg-primary-cta/10 flex items-center justify-center">
              <DollarSign size={4.5} className="size-4.5 text-primary-cta" />
            </div>
            <div className="pr-5">
              <div className="text-sm font-bold text-primary-cbe-800 leading-tight">
                KSh 2.4M
              </div>
              <div className="text-xs text-primary-cbe-800/40">
                Revenue today
              </div>
            </div>
          </div>

          {/* ── Dashboard card ── */}
          <div className="bg-white rounded-[14px] p-5 w-full max-w-[360px] shadow-2xl relative z-[1]">
            {/* Card header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[13px] font-bold text-[#0D1B2A]">
                Hotel Dashboard
              </span>
              <span className="text-[11px] text-[#8a97a8]">
                Mon, 17 Mar 2026
              </span>
            </div>

            {/* Metric boxes */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {METRICS.map(
                ({ label, value, valueColor, delta, deltaColor }) => (
                  <div key={label} className="bg-[#f4f7fb] rounded-sm p-2">
                    <div className="text-[10px] text-[#8a97a8] font-medium mb-1">
                      {label}
                    </div>
                    <div className={`text-[17px] font-bold ${valueColor}`}>
                      {value}
                    </div>
                    <div
                      className={`text-[9px] font-medium mt-0.5 ${deltaColor}`}
                    >
                      {delta}
                    </div>
                  </div>
                ),
              )}
            </div>

            {/* Bar chart */}
            <div className="text-[11px] font-semibold text-gray-600 mb-2">
              Room type occupancy
            </div>
            {ROOM_BARS.map(({ name, pct, color }) => (
              <div key={name} className="flex items-center gap-2 mb-1.5">
                <span className="text-[10.5px] text-gray-500 min-w-[54px]">
                  {name}
                </span>
                <div className="flex-1 h-2 bg-[#edf0f5] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${color}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-[10px] font-semibold text-gray-600 min-w-[28px] text-right">
                  {pct}%
                </span>
              </div>
            ))}

            {/* Divider */}
            <div className="h-px bg-[#edf0f5] my-3.5" />

            {/* Activity feed */}
            <div className="text-[11px] font-semibold text-gray-600 mb-2.5">
              Today&apos;s activity
            </div>
            <div className="flex flex-col gap-1.5">
              {EVENTS.map(({ dot, text, time }) => (
                <div key={time} className="flex items-center gap-2.5">
                  <div
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${dot}`}
                  />
                  <span className="text-[11px] text-gray-600 flex-1">
                    {text}
                  </span>
                  <span className="text-[10.5px] text-[#8a97a8]">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-t border-b border-gray-200 hidden sm:flex flex-wrap px-10 w-full">
        {FEATURES.map((feat, i) => (
          <div
            key={feat.label}
            className={[
              "flex items-center justify-center gap-4 py-4 px-6 flex-1",
              i < FEATURES.length - 1 ? "border-r border-gray-200" : "",
              i === 0 ? "pl-0" : "",
            ].join(" ")}
          >
            <div className="w-8 h-8 bg-primary-cbe-100 rounded-sm flex items-center justify-center flex-shrink-0">
              <feat.icon size={4} className="size-4 text-primary-cbe-800" />
            </div>
            <div>
              <div className="text-[12.5px] font-semibold text-gray-700 leading-snug">
                {feat.label}
              </div>
              <div className="text-[11px] text-[#8a97a8] mt-0.5">
                {feat.sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
