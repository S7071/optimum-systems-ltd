// components/WhatWeOffer.tsx

import BadgePill from "@/components/ui/badge-pill";
import { LucideIcon } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

function Card(prop: CardProp) {
  return (
    <div
      className={[
        "relative flex flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-200",
        prop.featured
          ? "bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 border-primary-cbe-500"
          : "bg-white border-primary-cbe-50 hover:border-primary-cbe-100 hover:shadow-[0_8px_32px_rgba(24,95,165,0.03)]",
      ].join(" ")}
    >
      {/* Corner accent */}
      <div
        className={[
          "pointer-events-none absolute top-0 right-0 w-20 h-20 rounded-bl-full",
          prop.featured ? "bg-white/10" : "bg-[#EBF1FA]",
        ].join(" ")}
      />

      {/* Icon */}
      <div
        className={[
          "relative z-10 mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[13px] flex-shrink-0",
          prop.featured ? "bg-white/20" : "bg-[#EBF1FA]",
        ].join(" ")}
      >
        <prop.icon size={24} className={prop.featured ? "text-white" : "text-primary-cbe-400"} />
      </div>

      {/* Text */}
      <h3
        className={[
          "mb-2.5 text-base font-bold leading-snug",
          prop.featured ? "text-white" : "text-primary-cbe-800",
        ].join(" ")}
      >
        {prop.title}
      </h3>
      <p
        className={[
          "flex-1 text-[13.5px] leading-relaxed mb-[22px]",
          prop.featured ? "text-white/75" : "text-[#5a6a7e]",
        ].join(" ")}
      >
        {prop.description}
      </p>

      {/* Link */}
      <span
        className={[
          "text-[11px] font-bold uppercase tracking-[1px] inline-flex items-center gap-1.5 cursor-pointer flex flex-row gap-2 items-center",
          prop.featured
            ? "text-white/90 hover:text-white"
            : "text-primary-cta/90 hover:text-primary-cta",
        ].join(" ")}
      >
        {prop.cta}
        <ArrowRight size={16} />
      </span>
    </div>
  );
}

interface CardProp {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  featured: boolean;
};

interface prop {
  eyebrow: string;
  title: string;
  titleSuffix: string;
  description: string;
  card: CardProp[];
}

/* ─── Main Section ───────────────────────────────────────────────────────── */

export default function WhatWeOfferSection(prop: prop) {
  return (
    <section className="w-full bg-background bg-[url('/patterns/content-pattern.png')] bg-cover-top bg-no-repeat overflow-hidden">
      <div className="text-center flex flex-col gap-3 items-center px-6 sm:px-30 pt-16 sm:pt-32">
        <BadgePill label={prop.eyebrow} centered={true} />
        <h2 className="mb-4 text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500">
          {prop.title} <span className="text-primary-cta">{prop.titleSuffix}</span>
        </h2>
        <p className="mx-auto max-w-[600px] text-[15px] leading-[1.7] text-primary-cbe-800/60 line-clamp-3">
          {prop.description}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 bg-gradient-to-t from-background to-transparent via-background px-6 sm:px-30 w-full py-10 sm:py-16">
        {prop.card.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}
