"use client";

import { useState, useEffect } from "react";
import { BadgeCheck, Play, Star } from "lucide-react";
import { Button } from "../../ui/button";
import Image from "next/image";

function StarRating({ rating }: { rating: number }) {
  return (
    <span
      className="inline-flex items-center gap-px"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4].map((i) => (
        <Star key={i} size={12} fill="#f5c518" color="#f5c518" />
      ))}
      <span className="relative inline-flex">
        <Star size={12} fill="none" color="#f5c518" />
        <span className="absolute top-0 left-0 overflow-hidden w-1/2">
          <Star size={12} fill="#f5c518" color="#f5c518" />
        </span>
      </span>
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function SiteHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero-root w-full bg-black min-h-screen relative overflow-hidden py-8 sm:py-20">
      <Image
        src="/images/cbe/bg-lines.webp"
        alt=""
        fill
        className="object-cover opacity-[0.48] pointer-events-none z-0"
        aria-hidden="true"
      />
      <Image
        src="/images/cbe/hero.jpg"
        alt=""
        fill
        className="object-cover opacity-[0.38] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* ── Body grid ── */}
      <div className="max-[900px]:grid-cols-1 items-center gap-10 px-12 max-[900px]:px-6 pt-8 sm:pt-30 pb-20 max-[900px]:pb-[60px] relative z-[1] max-w-[1400px] mx-auto">
        <div
          className={`text-white transition-[opacity,transform] duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.15)] rounded-full py-[5px] pr-[14px] pl-2 mb-6 text-[13px] font-medium">
            <BadgeCheck size={12} color="#3b82f6" fill="#3b82f6" />
            <span className="text-[12px] font-bold leading-none text-white">
              #1
            </span>
            <span className="text-[10px] leading-[1.2] text-[rgba(255,255,255,0.7)] uppercase tracking-[.04em]">
              Kenyan Certified CBE Assessment ERP
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[clamp(40px,5vw,68px)] leading-[1.04] font-light tracking-[-0.02em] mb-5">
            Competency-Based Assessment{" "}
            <strong className="font-bold">ERP</strong> for{" "}
            <strong className="font-bold">Senior Schools</strong>
          </h1>

          {/* Subtext */}
          <p className="text-base font-normal leading-[1.6] text-[rgba(255,255,255,0.75)] max-w-[760px] mb-10">
            Manage Grades 10–12 seamlessly with UltimateCBE — Kenya&apos;s most
            advanced CBE-aligned platform with real-time insights, automated
            grading, and KNEC syllabus integration. Completely built for your
            school.
          </p>

          {/* CTA row */}
          <div className="flex items-center flex-wrap gap-4">
            <Button className="inline-flex items-center gap-2 py-[28px] px-9">
              Get Started,&nbsp;
              <span className="font-light">Book a demo</span>
            </Button>

            <button
              type="button"
              aria-label="Watch demo video"
              className="w-14 h-14 rounded-full [border:2px_solid_rgba(255,255,255,0.5)] bg-transparent flex items-center justify-center text-white flex-shrink-0 cursor-pointer transition-all duration-200 hover:border-white hover:bg-[rgba(255,255,255,0.1)] hover:scale-[1.06]"
            >
              <Play size={20} fill="white" />
            </button>

            <div className="text-[13px] leading-[1.55] text-[rgba(255,255,255,0.8)]">
              Trusted by <strong className="text-white font-bold">500+</strong>{" "}
              kenyan schools
              <div className="flex items-center gap-1 mt-[3px] text-[13px] text-white font-semibold">
                Rated 4.6&nbsp;
                <StarRating rating={4.6} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
