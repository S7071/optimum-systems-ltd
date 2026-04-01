/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Camera,
  Users,
  X,
  Zap,
} from "lucide-react";
import BadgePill from "@/components/ui/badge-pill";
import { Button } from "@/components/ui/button";

type GalleryCategory =
  | "All"
  | "Product UI"
  | "Training"
  | "Deployments"
  | "Support"
  | "Events";

type GalleryItem = {
  id: number;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  sector: string;
  description: string;
  image: string;
  location: string;
  year: string;
  highlight: string;
  layout: string;
};

const categories: GalleryCategory[] = [
  "All",
  "Product UI",
  "Training",
  "Deployments",
  "Support",
  "Events",
];

const galleryItems: GalleryItem[] = [
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
    layout: "md:col-span-2",
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
    layout: "",
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
    layout: "",
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
    layout: "md:row-span-2",
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
    layout: "",
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
    layout: "md:col-span-2",
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
    layout: "",
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
    layout: "",
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
    layout: "",
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function GalleryPageBody() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedItem(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!selectedItem) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedItem]);

  return (
    <>
      <main className="relative overflow-hidden bg-primary-cbe-50 text-white w-full">
        {/* hero */}
        <section className="relative bg-[radial-gradient(circle_at_top_left,rgba(29,78,216,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(220,38,38,0.14),transparent_28%),linear-gradient(to_bottom,rgba(15,23,42,1),rgba(2,6,23,1))]">
          <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />
          <div className="absolute bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
            <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              {/* left */}
              <div className="max-w-3xl">
                <BadgePill label="Optimum Gallery" centered={false} />

                <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                  A modern gallery page built for enterprise product visibility.
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Showcase product interfaces, client engagements, deployment
                  moments, training sessions, and brand events through a clean,
                  premium, and fully responsive visual experience.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    // href="#gallery-grid"
                    variant="default"
                    size="lg"
                  >
                    Explore Gallery
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              {/* right */}
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-blue-500/15 p-3 text-blue-300">
                      <Camera className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-400">
                        Visual storytelling
                      </p>
                      <p className="text-lg font-semibold text-white">
                        Product, people & delivery
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-red-500/15 p-3 text-red-300">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-400">
                        Multi-purpose gallery
                      </p>
                      <p className="text-lg font-semibold text-white">
                        Teams, clients & events
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-blue-500/15 p-3 text-blue-300">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-400">
                        Interactions
                      </p>
                      <p className="text-lg font-semibold text-white">
                        Filters, hover states, preview
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="gallery-grid"
          className="relative w-full px-6 py-16 sm:px-8 lg:px-30 lg:py-24"
        >
          <div className="rounded-[32px] border border-white/10 bg-white/[0.635] p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6">
            <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <BadgePill label="Browse the gallery" centered={false} />
                <h2 className="mt-2 text-2xl font-semibold text-primary-cbe-800 sm:text-3xl">
                  Filter visuals by use case
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const active = activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={cn(
                        "rounded-2xl px-4 py-2 text-sm font-medium transition duration-300",
                        active
                          ? "bg-gradient-to-r from-primary-cbe-600 to-primary-cta text-white shadow-lg shadow-primary-cbe-50/20"
                          : "border border-white/10 bg-white/5 text-primary-cbe-800 hover:border-primary-cbe-400/30 hover:bg-white/10 hover:text-primary-cbe-900",
                      )}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid auto-rows-[280px] gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className={cn(
                    "group relative overflow-hidden rounded-[28px] border border-white/10 text-left shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30",
                    item.layout,
                  )}
                >
                  <div className="absolute inset-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/10" />
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-blue-950/30 to-transparent" />

                  <div className="relative flex h-full min-h-[280px] flex-col justify-between p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                        {item.category}
                      </span>

                      <span className="rounded-full bg-red-500/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-md shadow-red-950/40">
                        {item.year}
                      </span>
                    </div>

                    <div>
                      <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-blue-200/90">
                        {item.sector} • {item.location}
                      </p>
                      <h3 className="max-w-lg text-xl font-semibold text-white sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200/85">
                        {item.description}
                      </p>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <span className="text-sm font-medium text-red-200">
                          {item.highlight}
                        </span>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                          View
                          <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary-cbe-800/80 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-modal-title"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-primary-cbe-50 shadow-2xl shadow-black/40"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-cbe-500/10 bg-primary-cbe-50/70 text-primary-cbe-800 backdrop-blur transition hover:bg-primary-cbe-50/10"
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative min-h-[320px] lg:min-h-[620px]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-slate-950/20" />
              </div>

              <div className="relative flex flex-col justify-between border-t border-white/10 bg-primary-cbe-50 p-6 sm:p-8 lg:border-l lg:border-t-0">
                <div>
                  <div className="mb-5 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-primary-cbe-400/25 bg-primary-cbe-500/10 px-3 py-1 text-xs font-semibold text-primary-cbe-500">
                      {selectedItem.category}
                    </span>
                    <span className="rounded-full border border-primary-cta/25 bg-primary-cta/10 px-3 py-1 text-xs font-normal text-primary-cta">
                      {selectedItem.sector}
                    </span>
                  </div>

                  <h3
                    id="gallery-modal-title"
                    className="text-3xl font-semibold text-primary-cbe-800"
                  >
                    {selectedItem.title}
                  </h3>

                  <p className="mt-4 text-base leading-8 text-primary-cbe-800/60">
                    {selectedItem.description}
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-primary-cbe-500/10 bg-primary-cbe-500/[0.04] p-4">
                      <p className="text-xs font-semibold text-primary-cbe-800/60">
                        Location
                      </p>
                      <p className="mt-2 text-base font-medium text-primary-cbe-800">
                        {selectedItem.location}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-primary-cbe-500/10 bg-primary-cbe-500/[0.04] p-4">
                      <p className="text-xs font-semibold text-primary-cbe-800/60">
                        Highlight
                      </p>
                      <p className="mt-2 text-base font-medium text-primary-cbe-800">
                        {selectedItem.highlight}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-row gap-3 justify-end">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setSelectedItem(null)}
                  >
                    Close Preview
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
