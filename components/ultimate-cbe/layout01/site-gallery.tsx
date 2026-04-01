/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import {
  ArrowRight,
  ImageIcon,
  Users,
  Zap,
  X,
  MapPin,
  Calendar,
  Tag,
  ChevronRight,
  LayoutGrid,
} from "lucide-react";
import BadgePill from "@/components/ui/badge-pill";

// ─── Types ────────────────────────────────────────────────────────────────────

type GalleryCategory =
  | "All"
  | "Product UI"
  | "Training"
  | "Deployments"
  | "Support"
  | "Events";

interface GalleryItem {
  id: number;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  sector: string;
  description: string;
  image: string;
  location: string;
  year: string;
  highlight: string;
  span?: "wide" | "tall" | "default";
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const CATEGORIES: GalleryCategory[] = [
  "All",
  "Product UI",
  "Training",
  "Deployments",
  "Support",
  "Events",
];

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Academic ERP Dashboard Walkthrough",
    category: "Product UI",
    sector: "Education",
    description:
      "A clean overview of enrollment, billing, reporting, and operational controls presented in a modern enterprise interface.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    location: "Nairobi",
    year: "2026",
    highlight: "Unified student and finance workflows",
    span: "wide",
  },
  {
    id: 2,
    title: "Client Training Session",
    category: "Training",
    sector: "Operations",
    description:
      "Hands-on onboarding sessions focused on user adoption, reporting confidence, and team readiness across departments.",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
    location: "Thika Road",
    year: "2026",
    highlight: "Structured knowledge transfer",
    span: "default",
  },
  {
    id: 3,
    title: "Financial Module Presentation",
    category: "Product UI",
    sector: "Finance",
    description:
      "Showcasing a reporting-first interface for approvals, reconciliation, analytics, and management visibility.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    location: "Kenya",
    year: "2026",
    highlight: "Insight-led financial visibility",
    span: "default",
  },
  {
    id: 4,
    title: "Enterprise Deployment Rollout",
    category: "Deployments",
    sector: "Implementation",
    description:
      "A rollout environment capturing configuration, environment preparation, and coordinated go-live execution.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    location: "Regional",
    year: "2026",
    highlight: "Deployment discipline at scale",
    span: "tall",
  },
  {
    id: 5,
    title: "Customer Support Operations",
    category: "Support",
    sector: "Service",
    description:
      "A visual look into responsive support, issue handling, and operational continuity for active clients.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    location: "Nairobi HQ",
    year: "2026",
    highlight: "Fast, structured support delivery",
    span: "default",
  },
  {
    id: 6,
    title: "Product Showcase Event",
    category: "Events",
    sector: "Brand",
    description:
      "A branded presentation environment used to demonstrate system capabilities and engage prospective clients.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    location: "Client Venue",
    year: "2026",
    highlight: "High-impact product storytelling",
    span: "wide",
  },
  {
    id: 7,
    title: "Operations Monitoring Workspace",
    category: "Support",
    sector: "Performance",
    description:
      "A high-visibility workspace oriented around service continuity, monitoring, escalation, and response.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    location: "Operations Center",
    year: "2026",
    highlight: "Reliable operational oversight",
    span: "default",
  },
  {
    id: 8,
    title: "Implementation Review Session",
    category: "Deployments",
    sector: "Consulting",
    description:
      "Post-implementation review moments focused on alignment, change control, and continuous optimization.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    location: "Client Boardroom",
    year: "2026",
    highlight: "Governed rollout refinement",
    span: "default",
  },
  {
    id: 9,
    title: "Reporting & Analytics Interface",
    category: "Product UI",
    sector: "Insights",
    description:
      "A polished analytics layer designed to help teams translate operational data into better decisions.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    location: "Web Platform",
    year: "2026",
    highlight: "Actionable performance insights",
    span: "default",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

const CATEGORY_COLOR_MAP: Record<
  Exclude<GalleryCategory, "All">,
  { badge: string; dot: string }
> = {
  "Product UI": {
    badge: "bg-primary-cbe-500/15 text-primary-cbe-500 border-primary-cbe-500/20",
    dot: "bg-primary-cbe-500",
  },
  Training: {
    badge: "bg-emerald-500/15 text-emerald-600 border-emerald-500/20",
    dot: "bg-emerald-500",
  },
  Deployments: {
    badge: "bg-amber-500/15 text-amber-600 border-amber-500/20",
    dot: "bg-amber-500",
  },
  Support: {
    badge: "bg-violet-500/15 text-violet-600 border-violet-500/20",
    dot: "bg-violet-500",
  },
  Events: {
    badge: "bg-primary-cta/15 text-primary-cta border-primary-cta/20",
    dot: "bg-primary-cta",
  },
};

// ─── Sub-components ────────────────────────────────────────────────────────────

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent: string;
}

function StatCard({ icon, label, value, accent }: StatCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm transition-colors duration-200 hover:bg-white/8">
      <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl", accent)}>
        {icon}
      </div>
      <div className="min-w-0">
        <p className="truncate text-xs font-medium tracking-wide text-slate-400 uppercase">{label}</p>
        <p className="mt-0.5 text-sm font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}

interface CategoryBadgeProps {
  category: Exclude<GalleryCategory, "All">;
  size?: "sm" | "md";
}

function CategoryBadge({ category, size = "sm" }: CategoryBadgeProps) {
  const colors = CATEGORY_COLOR_MAP[category];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium",
        colors.badge,
        size === "sm" ? "px-2.5 py-1 text-[10px] tracking-wide uppercase" : "px-3 py-1.5 text-xs"
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", colors.dot)} />
      {category}
    </span>
  );
}

interface GalleryCardProps {
  item: GalleryItem;
  onClick: (item: GalleryItem) => void;
}

function GalleryCard({ item, onClick }: GalleryCardProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(item)}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white text-left shadow-sm",
        "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80 hover:border-primary-cbe-200",
        item.span === "wide" && "md:col-span-2",
        item.span === "tall" && "row-span-2",
      )}
    >
      {/* Image */}
      <div
        className={cn(
          "relative w-full overflow-hidden",
          item.span === "tall" ? "h-80" : "h-52",
          item.span === "wide" && "h-64",
        )}
      >
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Year badge top-right */}
        <div className="absolute right-3 top-3">
          <span className="inline-flex items-center gap-1 rounded-lg bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-700 shadow-sm backdrop-blur-sm">
            <Calendar className="h-3 w-3 text-slate-400" />
            {item.year}
          </span>
        </div>

        {/* Category badge top-left */}
        <div className="absolute left-3 top-3">
          <CategoryBadge category={item.category} />
        </div>

        {/* Hover arrow */}
        <div className="absolute bottom-3 right-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md">
            <ArrowRight className="h-4 w-4 text-primary-cbe-600" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400 uppercase tracking-wider">
          <MapPin className="h-3 w-3" />
          <span>{item.location}</span>
          <span className="text-slate-300">·</span>
          <span>{item.sector}</span>
        </div>

        <h3 className="text-base font-semibold leading-snug text-primary-cbe-800 group-hover:text-primary-cbe-600 transition-colors duration-200">
          {item.title}
        </h3>

        <p className="text-sm leading-6 text-slate-500 line-clamp-2">{item.description}</p>

        <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-medium text-primary-cbe-500">
            <Tag className="h-3 w-3" />
            <span>{item.highlight}</span>
          </div>
          <ChevronRight className="h-4 w-4 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-primary-cbe-400" />
        </div>
      </div>
    </button>
  );
}

interface GalleryModalProps {
  item: GalleryItem;
  onClose: () => void;
}

function GalleryModal({ item, onClose }: GalleryModalProps) {
  const colors = CATEGORY_COLOR_MAP[item.category];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-900/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close preview"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-500 shadow-md backdrop-blur-sm transition-colors duration-150 hover:bg-slate-100 hover:text-slate-800"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid lg:grid-cols-[1.4fr_1fr]">
          {/* Image panel */}
          <div className="relative min-h-[280px] lg:min-h-[540px]">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            {/* Bottom overlay on image */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-sm",
                  "bg-white/15 border-white/25 text-white"
                )}
              >
                <span className={cn("h-1.5 w-1.5 rounded-full", colors.dot)} />
                {item.sector}
              </div>
            </div>
          </div>

          {/* Detail panel */}
          <div className="flex flex-col justify-between p-7 sm:p-8">
            <div>
              {/* Header badges */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <CategoryBadge category={item.category} size="md" />
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
                  <Calendar className="h-3 w-3 text-slate-400" />
                  {item.year}
                </span>
              </div>

              <h2
                id="gallery-modal-title"
                className="text-2xl font-bold leading-tight text-primary-cbe-800 sm:text-3xl"
              >
                {item.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">{item.description}</p>

              {/* Meta grid */}
              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-4">
                  <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    <MapPin className="h-3 w-3" />
                    Location
                  </p>
                  <p className="mt-2 text-sm font-semibold text-primary-cbe-800">{item.location}</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-4">
                  <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    <LayoutGrid className="h-3 w-3" />
                    Sector
                  </p>
                  <p className="mt-2 text-sm font-semibold text-primary-cbe-800">{item.sector}</p>
                </div>
                <div className="col-span-2 rounded-xl border border-primary-cbe-100 bg-primary-cbe-50/60 p-4">
                  <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary-cbe-400">
                    <Tag className="h-3 w-3" />
                    Key Highlight
                  </p>
                  <p className="mt-2 text-sm font-semibold text-primary-cbe-700">{item.highlight}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
              <p className="text-xs text-slate-400">Optimum ERP Systems · {item.year}</p>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-150 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function GalleryPageBody() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo<GalleryItem[]>(() => {
    if (activeCategory === "All") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleClose = useCallback(() => setSelectedItem(null), []);

  // Keyboard escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleClose]);

  // Body scroll lock
  useEffect(() => {
    if (!selectedItem) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selectedItem]);

  const totalCount = filteredItems.length;

  return (
    <>
      <main className="w-full bg-slate-50">
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-cbe-900 via-primary-cbe-800 to-primary-cbe-900">
          {/* Decorative background elements */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-cbe-600/20 blur-3xl" />
            <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-primary-cta/15 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-primary-cbe-500/10 blur-2xl" />
            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
              {/* Left: text */}
              <div className="max-w-2xl">
                {/* Eyebrow */}
                <BadgePill label="Optimum ERP Systems" centered={false} />

                <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Our Work,{" "}
                  <span className="relative">
                    <span className="relative z-10 text-primary-cta">
                      In Focus
                    </span>
                    <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-primary-cta/40" />
                  </span>
                </h1>

                <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
                  Explore product interfaces, live deployments, client engagements,
                  and institutional outcomes across Kenya&apos;s leading ERP ecosystem.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#gallery-grid"
                    className="inline-flex items-center gap-2 rounded-full bg-primary-cta px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-cta/30 transition-all duration-200 hover:bg-primary-cta/90 hover:shadow-primary-cta/40 hover:-translate-y-0.5"
                  >
                    Browse Gallery
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#gallery-grid"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/15"
                  >
                    {GALLERY_ITEMS.length}+ Visuals
                  </a>
                </div>
              </div>

              {/* Right: stat cards */}
              <div className="flex flex-row gap-3 lg:flex-col">
                <StatCard
                  icon={<ImageIcon className="h-5 w-5 text-primary-cbe-300" />}
                  label="Visual Storytelling"
                  value="Product, People & Delivery"
                  accent="bg-primary-cbe-700/60"
                />
                <StatCard
                  icon={<Users className="h-5 w-5 text-rose-300" />}
                  label="Multi-Purpose"
                  value="Teams, Clients & Events"
                  accent="bg-primary-cta/20"
                />
                <StatCard
                  icon={<Zap className="h-5 w-5 text-amber-300" />}
                  label="Interactions"
                  value="Filters, Hover & Preview"
                  accent="bg-amber-500/15"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery Grid ──────────────────────────────────────────────────── */}
        <section id="gallery-grid" className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-20">
          {/* Section header + filters */}
          <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-cbe-500">
                Media Library
              </p>
              <h2 className="mt-2 text-2xl font-bold text-primary-cbe-800 sm:text-3xl">
                Filter by category
              </h2>
              <p className="mt-1.5 text-sm text-slate-500">
                Showing{" "}
                <span className="font-semibold text-primary-cbe-700">{totalCount}</span>{" "}
                {totalCount === 1 ? "item" : "items"}
                {activeCategory !== "All" && (
                  <> in <span className="font-semibold text-primary-cbe-700">{activeCategory}</span></>
                )}
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-primary-cbe-600 text-white shadow-md shadow-primary-cbe-200"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-primary-cbe-200 hover:bg-primary-cbe-50 hover:text-primary-cbe-700",
                    )}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          {filteredItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white py-20 text-center">
              <ImageIcon className="h-10 w-10 text-slate-300" />
              <p className="mt-4 text-sm font-medium text-slate-500">
                No items in this category yet.
              </p>
            </div>
          ) : (
            <div className="grid auto-rows-auto gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredItems.map((item) => (
                <GalleryCard key={item.id} item={item} onClick={setSelectedItem} />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* ── Modal ─────────────────────────────────────────────────────────── */}
      {selectedItem && (
        <GalleryModal item={selectedItem} onClose={handleClose} />
      )}
    </>
  );
}