"use client";

// components/WhatWeOffer.tsx

import BadgePill from "@/components/ui/badge-pill";
import { LucideIcon } from "@/lib/utils";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CalendarDays,
  CheckCircle,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Clock,
  CreditCard,
  DollarSign,
  FilePlus,
  Globe,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  LayoutDashboard,
  MapPin,
  MessageSquare,
  Monitor,
  Network,
  Settings,
  ShieldAlert,
  ShieldCheck,
  ShoppingCart,
  Star,
  Tag,
  Truck,
  UserCheck,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import { useRef, useState, useCallback, useEffect } from "react";


const iconMap: Record<string, LucideIcon> = {
  Settings: Settings,
  Users: Users,
  GraduationCap: GraduationCap,
  CreditCard: CreditCard,
  DollarSign: DollarSign,
  Globe: Globe,
  CalendarDays: CalendarDays,
  ClipboardList: ClipboardList,
  CheckSquare: CheckSquare,
  FilePlus: FilePlus,
  CheckCircle: CheckCircle,
  Briefcase: Briefcase,
  BookOpen: BookOpen,
  UtensilsCrossed: UtensilsCrossed,
  HeartPulse: HeartPulse,
  Home: Home,
  UserCheck: UserCheck,
  ShoppingCart: ShoppingCart,
  ShieldCheck: ShieldCheck,
  Clock: Clock,
  Landmark: Landmark,
  LayoutDashboard: LayoutDashboard,
  Network: Network,
  Star: Star,
  MessageSquare: MessageSquare,
  Monitor: Monitor,
  MapPin: MapPin,
  Truck: Truck,
  Tag: Tag,
  ShieldAlert: ShieldAlert,
};

function Card(prop: CardProp) {
    const Ic: LucideIcon = iconMap[prop.icon as string];
  return (
    <div
      className={[
        "relative flex flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-200 flex-shrink-0 w-[320px] sm:w-[360px]",
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
        <Ic size={24} className={prop.featured ? "text-white" : "text-primary-cbe-400"}
        />
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
  icon: string;
  title: string;
  description: string;
  cta: string;
  featured?: boolean;
}

interface prop {
  eyebrow: string;
  title: string;
  titleSuffix: string;
  description: string;
  card: CardProp[];
}

/* ─── Main Section ───────────────────────────────────────────────────────── */

export default function WhatWeOfferSection(prop: prop) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const SCROLL_AMOUNT = 380;

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      ro.disconnect();
    };
  }, [updateScrollState]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-primary-cbe-50 bg-[url('/patterns/content-pattern.png')] bg-cover-top bg-no-repeat overflow-hidden">
      {/* Header */}
      <div className="text-center flex flex-col gap-3 items-center px-6 md:px-30 pt-16 sm:pt-32">
        <BadgePill label={prop.eyebrow} centered={true} />
        <h2 className="mb-4 text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500">
          {prop.title}{" "}
          <span className="text-primary-cta">{prop.titleSuffix}</span>
        </h2>
        <p className="mx-auto max-w-[600px] text-[15px] leading-[1.7] text-primary-cbe-800/60 line-clamp-3">
          {prop.description}
        </p>
      </div>

      {/* Cards area with nav row */}
      <div className="py-10 sm:py-16">
        {/* Nav buttons row — top-right */}
        <div className="flex items-center justify-end gap-2 mb-5 px-6 md:px-30">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={[
              "flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-150",
              canScrollLeft
                ? "border-primary-cbe-200 text-primary-cbe-600 hover:bg-primary-cbe-50 hover:border-primary-cbe-300 cursor-pointer"
                : "border-primary-cbe-100 text-primary-cbe-200 cursor-not-allowed",
            ].join(" ")}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={[
              "flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-150",
              canScrollRight
                ? "border-primary-cbe-200 text-primary-cbe-600 hover:bg-primary-cbe-50 hover:border-primary-cbe-300 cursor-pointer"
                : "border-primary-cbe-100 text-primary-cbe-200 cursor-not-allowed",
            ].join(" ")}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Scrollable cards track — 2 rows, columns flow horizontally */}
        <div
          ref={scrollRef}
          className="w-screen overflow-x-auto scroll-smooth pb-2 px-6 md:px-30 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="grid grid-rows-1 grid-flow-col gap-5 w-max">
            {prop.card.map((card, idx) => (
              <Card key={idx} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
