"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Play } from "lucide-react";
import { useState, useEffect } from "react";

// ─────────────────────────────────────────────────────────────────────────────
export default function SiteHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className="w-full bg-primary-cbe-50 overflow-hidden text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-64px)] max-h-[760px]">
        {/* ── LEFT: Copy ── */}
        <div
          className={[
            "relative z-10 flex flex-col justify-center",
            "px-6 lg:px-30 py-16 gap-7",
            "transition-[opacity,transform] duration-700 ease-out",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7",
          ].join(" ")}
        >
          <div className="inline-flex items-center gap-3 w-fit">
            <div className="size-10 rounded-lg bg-background flex items-center justify-center flex-shrink-0 p-1.5 border border-primary-cbe-100">
              <Image
                src="/logos/ultimate-icon.svg"
                alt="Ultimate Manufacturing ERP"
                width={10}
                height={10}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-cbe-800">
              <span className="text-primary-cta font-extrabold">Ultimate</span>{" "}
              Manufacturing ERP
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.18] text-primary-cbe-800 tracking-[-1px]">
            One Platform for <br />
            All{" "}
            <span className="text-primary-cbe-500 font-bold">
              Manufacturing
            </span>
            <br />
            Operations
          </h1>

          <p className="text-primary-cbe-800 text-base leading-relaxed max-w-[340px] sm:max-w-[440px]">
            Complete real-time visibility across production, supply chain,
            quality, and finance — built for manufacturers who can&apos;t afford
            downtime or blind spots.
          </p>

          <div className="flex items-center gap-3">
            <Button variant="default" size="lg">
              Request a Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-primary-cbe-800"
            >
              <Play className="hidden size-3.5 fill-current text-primary-cbe-800 sm:block" />
              Watch Overview
            </Button>
          </div>
        </div>

        {/* ── RIGHT: Photo ── */}
        <div className="relative overflow-hidden hidden md:block">
          {/* Hero photo */}
          <Image
            src="/heros/ultimateMFG.jpg"
            alt="Teacher working with students on CBE curriculum"
            fill
            className="object-cover object-center z-[1]"
            priority
          />

          {/*
                        Left-edge bleed — softens the hard cut between
                        white left panel and photo.
                      */}
          <div
            className="absolute inset-0 z-[2] pointer-events-none"
            style={{
              background: `
                            linear-gradient(to right, rgba(255,255,255,0.15) 0%, transparent 25%),
                            linear-gradient(135deg, rgba(11,61,145,0.15) 0%, transparent 55%)
                          `,
            }}
            aria-hidden="true"
          />

          {/* KNEC tag — top-right */}
          <div className="absolute top-8 right-8 z-10 bg-primary-cbe-800 text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full flex items-center gap-2">
            <CheckCircle2 className="size-3" />
            KNEC Aligned
          </div>

          {/* Floating activity badge — bottom-left */}
          <div
            className="absolute bottom-10 left-6 z-10 bg-white rounded-xl px-4 py-3 flex items-center gap-3 min-w-[230px]"
            style={{
              boxShadow:
                "0 8px 32px rgba(11,61,145,0.15), 0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <div className="size-10 rounded-lg bg-[#E8F0FC] flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="size-5 text-primary-cbe-800" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-slate-800 leading-tight">
                Auto-grading enabled
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                47 assessments processed today
              </p>
            </div>
          </div>
        </div>
        {/* end RIGHT */}
      </div>
    </section>
  );
}
