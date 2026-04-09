"use client";

import BadgePill from "@/components/ui/badge-pill";
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
  type LucideIcon,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const iconMap: Record<string, LucideIcon> = {
  Settings,
  Users,
  GraduationCap,
  CreditCard,
  DollarSign,
  Globe,
  CalendarDays,
  ClipboardList,
  CheckSquare,
  FilePlus,
  CheckCircle,
  Briefcase,
  BookOpen,
  UtensilsCrossed,
  HeartPulse,
  Home,
  UserCheck,
  ShoppingCart,
  ShieldCheck,
  Clock,
  Landmark,
  LayoutDashboard,
  Network,
  Star,
  MessageSquare,
  Monitor,
  MapPin,
  Truck,
  Tag,
  ShieldAlert,
};

interface CardProp {
  icon: string;
  title: string;
  description: string;
  cta: string;
  featured?: boolean;
}

interface Props {
  eyebrow: string;
  title: string;
  titleSuffix: string;
  description: string;
  card: CardProp[];
}

function OfferCard({
  icon,
  title,
  description,
  cta,
  featured = false,
}: CardProp) {
  const Icon = iconMap[icon] ?? LayoutDashboard;

  return (
    <article
      className={[
        "group relative flex min-h-[320px] w-[310px] sm:w-[340px] lg:w-[360px] snap-start flex-col overflow-hidden rounded-[28px] border p-7 sm:p-6",
        "transition-all duration-300 ease-out hover:translate-y-1",
        featured
          ? "border-primary-cbe-500 bg-[linear-gradient(135deg,rgba(15,49,110,1)_0%,rgba(24,95,165,1)_62%,rgba(220,38,38,0.96)_140%)] shadow-sm"
          : "border-primary-cbe-100/80 bg-white/95 shadow-sm hover:border-primary-cbe-200 hover:shadow-md",
      ].join(" ")}
    >
      <div
        className={[
          "pointer-events-none absolute inset-x-0 top-0 h-1",
          featured
            ? "bg-white/25"
            : "bg-gradient-to-r from-primary-cbe-500 via-primary-cbe-300 to-primary-cta/90",
        ].join(" ")}
      />

      <div className="relative z-10 mb-6 flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 bg-gradient-to-br from-primary-cbe-500 to-primary-cbe-800 text-white shadow-sm ring-1 ring-white/40">
          <Icon className="h-6 w-6" />
        </div>

        <div
          className={[
            "rounded-full border px-3 py-1 text-[10px] font-bold uppercase",
            featured
              ? "border-white/15 bg-white/10 text-white/80"
              : "border-primary-cbe-100 bg-white text-primary-cbe-500/80",
          ].join(" ")}
        >
          Module
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-between">
        <h3 className="max-w-full font-semibold text-lg text-primary-cbe-800">
          {title}
        </h3>

        <p className="flex-1 text-[14px] leading-7 text-slate-600">
          {description}
        </p>

        <div className="flex items-center justify-between gap-4">
          <span
            className={[
              "inline-flex items-center gap-2 text-xs font-bold uppercase",
              featured ? "text-white/90" : "text-primary-cta",
            ].join(" ")}
          >
            {cta}
          </span>

          <span
            className={[
              "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 group-hover:translate-x-1",
              featured
                ? "border-white/15 bg-white/10 text-white"
                : "border-primary-cbe-100 bg-primary-cbe-50 text-primary-cbe-500",
            ].join(" ")}
          >
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </article>
  );
}

export default function WhatWeOfferSection({
  eyebrow,
  title,
  titleSuffix,
  description,
  card,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const SCROLL_AMOUNT = 380;

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 6);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 6);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();

    el.addEventListener("scroll", updateScrollState, { passive: true });

    const resizeObserver = new ResizeObserver(() => {
      updateScrollState();
    });

    resizeObserver.observe(el);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      resizeObserver.disconnect();
    };
  }, [updateScrollState]);

  const handleScroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28 w-full">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-[-10%] h-64 w-64 rounded-full bg-primary-cbe-100/50 blur-3xl" />
        <div className="absolute right-[-8%] top-30 h-72 w-72 rounded-full bg-primary-cta/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-full z-10">
        <div className="px-6 md:px-16 xl:px-30">
          <div className="mx-auto max-w-3xl text-center flex flex-col gap-3 items-center">
            <BadgePill label={eyebrow} centered={true} />

            <h3 className="text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500 mb-4">
              {title} <span className="text-primary-cta">{titleSuffix}</span>
            </h3>

            <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              {description}
            </p>
          </div>

          <div className="mt-12 flex items-center justify-between gap-4 sm:mt-14">
            <div className="hidden sm:flex items-center gap-3 text-sm text-slate-500">
              <span className="h-px w-12 bg-primary-cbe-200" />
              Explore core platform capabilities
            </div>

            <div className="ml-auto inline-flex items-center gap-2 rounded-full border border-primary-cbe-100 bg-white/90 p-1.5 shadow-sm backdrop-blur">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className={[
                  "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200",
                  canScrollLeft
                    ? "border-primary-cbe-100 bg-white text-primary-cbe-600 hover:-translate-x-0.5 hover:border-primary-cbe-200 hover:bg-primary-cbe-50"
                    : "cursor-not-allowed border-primary-cbe-100 bg-slate-50 text-slate-300",
                ].join(" ")}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className={[
                  "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200",
                  canScrollRight
                    ? "border-primary-cbe-100 bg-white text-primary-cbe-600 hover:translate-x-0.5 hover:border-primary-cbe-200 hover:bg-primary-cbe-50"
                    : "cursor-not-allowed border-primary-cbe-100 bg-slate-50 text-slate-300",
                ].join(" ")}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative mt-8 sm:mt-10">
          <div
            ref={scrollRef}
            className="overflow-x-auto scroll-smooth px-6 md:px-16 xl:px-30 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex w-max gap-5 sm:gap-6">
              {card.map((item, index) => (
                <OfferCard key={`${item.title}-${index}`} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
