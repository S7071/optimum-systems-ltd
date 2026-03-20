"use client";

import Image from "next/image";
import { useState } from "react";
import { Play, ArrowRight, Check, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const FEATURES = [
  "CBC Competency Tracking",
  "Instant Report Cards",
  "Parent Engagement",
  "Admin Analytics",
] as const;

const STATS = [
  { value: "200+", label: "Schools onboarded" },
  { value: "50k+", label: "Students managed" },
  { value: "99.8%", label: "System uptime" },
] as const;

export default function SiteDemo() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-16 md:py-24 w-full overflow-hidden px-6 sm:px-30">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left column: copy ── */}
          <div className="flex flex-col gap-6">
            {/* Heading */}
            <h2 className="font-extrabold text-2xl sm:text-4xl text-pretty leading-tight tracking-tight text-white">
              Get A Powerful Start
              <br />
              With <span className="text-primary-cta">UltimateCBE</span>
              <br />
              ERP Today
            </h2>
            {/* Body copy */}
            <p className="max-w-md text-base leading-relaxed text-white/65">
              Built specifically for Kenya&apos;s CBC curriculum. Track student
              competencies, generate instant report cards, engage parents in
              real time, and give teachers the tools they need to focus on what
              matters most: teaching.
            </p>
            {/* Feature pills */}
            <div className="flex flex-wrap gap-2">
              {FEATURES.map((feat) => (
                <span
                  key={feat}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-sm text-white/80"
                >
                  <Check className="h-3.5 w-3.5 flex-shrink-0 text-green-400" />
                  {feat}
                </span>
              ))}
            </div>
            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary red action button */}
              <Button variant="default" size="lg">
                Request A Demo
                <ArrowRight className="h-4 w-4" />
              </Button>

              {/* Secondary — opens video dialog */}
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent text-white/90 hover:bg-background/5 hover:text-white"
                  >
                    Watch a Walkthrough
                    <Play className="h-3.5 w-3.5 fill-white" />
                  </Button>
                </DialogTrigger>
                <DialogTitle className="sr-only">
                  Optimum ERP System – Product Walkthrough
                </DialogTitle>
                <DialogContent className="max-w-4xl overflow-hidden p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      className="h-full w-full"
                      src="https://www.youtube.com/embed/Da1hUqzoiAo?autoplay=1"
                      title="Optimum ERP System Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            {/* Social proof stats */}
            <div className="flex gap-8 border-t border-white/10 pt-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/50">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* ── Right column: mockup + floating cards ── */}
          <div className="relative">
            <Image
              src="/images/cta.png"
              alt="UltimateCBE Admin Dashboard Preview"
              width={1200}
              height={700}
              priority
              className="h-auto w-full rounded-xl"
            />

            {/* Floating card — Monthly Revenue (top-right) */}
            <div className="absolute -right-4 -top-4 hidden min-w-[168px] items-center gap-3 rounded-sm bg-white p-2 shadow-lg md:flex">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-blue-50">
                <TrendingUp size={4.5} className="size-4.5 text-primary-cbe-700" />
              </div>
              <div className="pr-5 flex flex-col gap-1">
                <p className="text-xs text-primary-cbe-800/40">
                  Monthly Revenue
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-primary-cbe-800 leading-tight">
                    KES 48,575
                  </span>
                  <span className="rounded-full bg-green-50 px-1.5 py-0.5 text-[9px] text-green-600">
                    +3.84%
                  </span>
                </div>
              </div>
            </div>

            {/* Floating card — Active Teachers (bottom-left) */}
            <div className="absolute -bottom-4 -left-4 hidden min-w-[188px] items-center gap-3 rounded-sm bg-white p-2 shadow-xl md:flex">
              {/* Stacked avatars */}
              <div className="flex flex-shrink-0 -space-x-2">
                {(
                  [
                    { initials: "AN", bg: "bg-primary-cbe-700" },
                    { initials: "BK", bg: "bg-red-500" },
                    { initials: "CM", bg: "bg-violet-600" },
                  ] as const
                ).map(({ initials, bg }) => (
                  <span
                    key={initials}
                    className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[9px] font-semibold text-white ${bg}`}
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <div className="pr-5 flex flex-col gap-1">
                <p className="text-sm font-bold text-primary-cbe-800 leading-tight">
                  Teachers active now
                </p>
                <p className="text-xs text-primary-cbe-800/40">
                  16 of 16 online today
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
