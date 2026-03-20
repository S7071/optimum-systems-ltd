// components/WhatWeOffer.tsx

import BadgePill from "@/components/ui/badge-pill";
import * as React from "react";

/* ─── Types ─────────────────────────────────────────────────────────────── */

interface FeatureCard {
  title: string;
  description: string;
  linkLabel: string;
  featured?: boolean;
  icon: React.ReactNode;
}

/* ─── Data ──────────────────────────────────────────────────────────────── */

const CARDS: FeatureCard[] = [
  {
    title: "Reservations & Front Desk",
    description:
      "Full-cycle booking management — walk-ins, online reservations, group bookings, and real-time room availability across all room types with instant confirmation.",
    linkLabel: "Live Availability →",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#185FA5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[22px] h-[22px]"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: "CEO Analytics Dashboard",
    description:
      "Real-time occupancy rates, revenue per room, billing summaries, and staff performance — all in one executive view accessible from any device, anywhere.",
    linkLabel: "Live Insights →",
    featured: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[22px] h-[22px]"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Billing & M-PESA Integration",
    description:
      "Automated invoicing, split billing, insurance claim processing, and seamless M-PESA & bank integration ensuring zero revenue leakage and faster checkouts.",
    linkLabel: "M-PESA Ready →",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#185FA5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[22px] h-[22px]"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Housekeeping & Maintenance",
    description:
      "Digital task assignment, room status tracking, maintenance request workflows, and real-time updates between front desk and housekeeping teams — no more paper logs.",
    linkLabel: "Room Operations →",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#185FA5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[22px] h-[22px]"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Guest Management & CRM",
    description:
      "Complete guest profiles, stay history, preferences, loyalty tracking, and automated SMS/email reminders — building long-term relationships that drive repeat bookings.",
    linkLabel: "Guest Profiles →",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#185FA5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[22px] h-[22px]"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "POS, Restaurant & Conference",
    description:
      "Integrated point-of-sale for restaurant, bar, and conference facilities — all charges consolidated to guest rooms and tracked against revenue centres automatically.",
    linkLabel: "All Departments →",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#185FA5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[22px] h-[22px]"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

function Card({
  title,
  description,
  linkLabel,
  icon,
  featured = false,
}: FeatureCard) {
  return (
    <div
      className={[
        "relative flex flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-200",
        featured
          ? "bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 border-primary-cbe-500"
          : "bg-white border-primary-cbe-50 hover:border-primary-cbe-100 hover:shadow-[0_8px_32px_rgba(24,95,165,0.05)]",
      ].join(" ")}
    >
      {/* Corner accent */}
      <div
        className={[
          "pointer-events-none absolute top-0 right-0 w-20 h-20 rounded-bl-full",
          featured ? "bg-white/10" : "bg-[#EBF1FA]",
        ].join(" ")}
      />

      {/* Icon */}
      <div
        className={[
          "relative z-10 mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[13px] flex-shrink-0",
          featured ? "bg-white/20" : "bg-[#EBF1FA]",
        ].join(" ")}
      >
        {icon}
      </div>

      {/* Text */}
      <h3
        className={[
          "mb-2.5 text-base font-bold leading-snug",
          featured ? "text-white" : "text-primary-cbe-800",
        ].join(" ")}
      >
        {title}
      </h3>
      <p
        className={[
          "flex-1 text-[13.5px] leading-relaxed mb-[22px]",
          featured ? "text-white/75" : "text-[#5a6a7e]",
        ].join(" ")}
      >
        {description}
      </p>

      {/* Link */}
      <span
        className={[
          "text-[11px] font-bold uppercase tracking-[1px] inline-flex items-center gap-1.5 cursor-pointer",
          featured
            ? "text-white/90 hover:text-white"
            : "text-primary-cta/90 hover:text-primary-cta",
        ].join(" ")}
      >
        {linkLabel}
      </span>
    </div>
  );
}

/* ─── Main Section ───────────────────────────────────────────────────────── */

export default function WhatWeOfferSection() {
  return (
    <section className="w-full bg-background bg-[url('/patterns/content-pattern.png')] bg-cover-top bg-no-repeat overflow-hidden">
      <div className="text-center flex flex-col gap-3 items-center px-6 sm:px-30 pt-16 sm:pt-32">
        <BadgePill label="Platform Capabilities" centered={true} />
        <h2 className="mb-4 text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-800">
          What <span className="text-primary-cta">We Offer</span>
        </h2>
        <p className="mx-auto max-w-[600px] text-[15px] leading-[1.7] text-primary-cbe-800/60">
          Transform hotel operations with Kenya&apos;s leading HMS —
          purpose-built to maximize occupancy, streamline guest experiences, and
          deliver real-time control across every department.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 bg-gradient-to-t from-background to-transparent via-background px-6 sm:px-30 w-full py-10 sm:py-16">
        {CARDS.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}
