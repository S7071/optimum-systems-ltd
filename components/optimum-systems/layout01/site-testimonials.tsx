"use client";

import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import BadgePill from "@/components/ui/badge-pill";

/* eslint-disable @next/next/no-img-element */

// ─── Count-up hook (triggers when section scrolls into view) ──────────────────
function useCountUp(target: string, duration = 1800, start = false): string {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const num = parseFloat(target);
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * num));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(num);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  const suffix = target.includes("%")
    ? "%"
    : target.toLowerCase().includes("x")
      ? "x"
      : "";
  return `${count}${suffix}`;
}

// ─── Individual stat card ─────────────────────────────────────────────────────
interface StatCardProps {
  stat: number;
  suffix: string;
  label: string;
  caseTitle: string;
  href: string;
  bgImage: string;
  inView: boolean;
  delay: number;
}

function StatCard({
  stat,
  suffix,
  label,
  caseTitle,
  href,
  bgImage,
  inView,
  delay,
}: StatCardProps) {
  const rawTarget = `${stat}${suffix}`;
  const display = useCountUp(rawTarget, 1600 + delay, inView);
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "group relative flex aspect-square flex-col justify-between gap-8 overflow-hidden rounded-xl p-8 transition-all duration-300 hover:shadow-xl",
        "transition-[transform,box-shadow,background] duration-300 ease-in-out",
        "bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800",
        "hover:-translate-y-[6px]",
        "hover:shadow-primary-cbe-100",
      )}
    >
      {/* Background image — subtle watermark */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500 group-hover:scale-105"
        style={{
          backgroundImage: `url('${bgImage}')`,
          opacity: hovered ? 0.06 : 0.1,
        }}
      />

      {/* Decorative circle overlays */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          top: -40,
          right: -40,
          width: 160,
          height: 160,
          background: "rgba(255,255,255,0.04)",
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          bottom: -20,
          right: 30,
          width: 80,
          height: 80,
          background: "rgba(232,36,92,0.12)",
        }}
      />

      {/* Stat + label */}
      <div className="relative flex flex-col gap-3">
        <div
          className="font-bold tracking-tight text-white transition-colors duration-300"
          style={{
            fontSize: "clamp(48px, 5vw, 64px)",
            lineHeight: 1,
            letterSpacing: "-2px",
          }}
        >
          {display}
        </div>
        <p className="text-sm font-medium text-white/60 transition-colors duration-300">
          {label}
        </p>
      </div>

      {/* Case title + red arrow */}
      <div
        className="relative flex flex-col gap-4"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.12)",
          paddingTop: "20px",
        }}
      >
        <div className="flex items-end justify-between gap-3">
          <p className="text-sm font-semibold leading-tight text-white/80 transition-colors duration-300 flex-1">
            {caseTitle}
          </p>
          <div
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:translate-x-1"
            style={{ background: "#e8245c" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 7h8M7 3l4 4-4 4"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function SiteTestimonials() {
  interface Testimony {
    statement: string;
    avatar: string;
    name: string;
    position: string;
    logo: string;
  }

  const testimonies: Testimony[] = [
    {
      statement:
        "Optimum's ERP has completely transformed how we manage fees, payroll, and student records. Everything is now in one place — it's simplified our operations tenfold and the support team is always responsive.",
      avatar: "/images/clients/01.jpg",
      name: "Dr. Jane Mutua",
      position: "Principal, Trukana University College",
      logo: "/images/clients/tuc.png",
    },
    {
      statement:
        "Since deploying the Optimum system, we've eliminated manual errors in our financial reporting and our audit processes are now seamless. It integrates perfectly across all our departments.",
      avatar: "/images/clients/02.jpg",
      name: "Mr. Peter Omondi",
      position:
        "Finance Officer, Gatundu South Technical and Vocational College",
      logo: "/images/clients/gatundu-south-technical-and-vocational-college.png",
    },
  ];

  const statCards = [
    {
      stat: 90,
      suffix: "%",
      label: "Reduction in Manual Reporting Errors",
      caseTitle: "How Rift Valley National Polytechnic Eliminated Paperwork",
      href: "#",
      bgImage:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-hqnUYXsN5oY-unsplash.jpg",
    },
    {
      stat: 3,
      suffix: "x",
      label: "Faster Fee Collection & Reconciliation",
      caseTitle: "How Baringo National Polytechnic Streamlined Finance",
      href: "#",
      bgImage:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jeremy-bishop-iEjCQtcsVPY-unsplash.jpg",
    },
    {
      stat: 100,
      suffix: "%",
      label: "On-Time Payroll Processing",
      caseTitle: "How Meru Teachers College Achieved Zero Payroll Delays",
      href: "#",
      bgImage:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/kevin-charit-1fL2Q1JcbNc-unsplash.jpg",
    },
  ];

  // ── Active testimonial (click + auto-rotate every 5 s) ──────────────────────
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActiveIdx((prev) => (prev + 1) % testimonies.length),
      5000,
    );
    return () => clearInterval(timer);
  }, [testimonies.length]);

  // ── Trigger count-up when stats scroll into view ────────────────────────────
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsInView(true);
      },
      { threshold: 0.2 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-background bg-[url('/patterns/content-pattern.png')] bg-cover-top bg-no-repeat">
      <div className="container flex flex-col gap-6 px-6 sm:px-30 w-full bg-gradient-to-t from-muted/40 to-transparent via-background/85 py-16 sm:py-32">
        {/* ── Section header ──────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center gap-3 text-center mb-12">
          <BadgePill label="Client Stories" centered={true} />
          <h3 className="text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-900 mb-4">
            What Our <span className="text-primary-cta">Clients</span> Think
          </h3>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            Trusted by over{" "}
            <strong className="text-foreground">160 institutions</strong> across
            Kenya — here&apos;s what they have to say about working with
            Optimum.
          </p>
        </div>

        {/* ── Testimonial cards ───────────────────────────────────────────────── */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {testimonies.map((card, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={cn(
                  "relative flex h-full cursor-pointer flex-col justify-between gap-8 overflow-hidden rounded-2xl p-4 sm:p-6 transition-all duration-400",
                  isActive
                    ? "bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800"
                    : "bg-white",
                  isActive
                    ? "shadow-[0_20px_60px_rgba(15,31,92,0.02)]"
                    : "shadow-[0_2px_12px_rgba(0,0,0,0.04)]",
                  isActive
                    ? "none"
                    : "border-[1.5px] bolder-solid border-[#e5e7eb]",
                )}
                style={{
                  transition: "all 0.4s ease",
                }}
              >
                {/* Decorative watermark quote mark */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-2 select-none font-serif text-[120px] font-bold leading-none"
                  style={{
                    color: isActive
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(15,31,92,0.04)",
                  }}
                >
                  &ldquo;
                </span>

                {/* Animated red accent bar */}
                <div
                  className="rounded-full"
                  style={{
                    width: isActive ? "48px" : "0px",
                    height: "3px",
                    background: "#e8245c",
                    marginBottom: "4px",
                    transition: "width 0.5s ease",
                  }}
                />

                <div className="flex flex-col gap-6">
                  <p
                    className="text-sm leading-relaxed font-normal"
                    style={{
                      color: isActive ? "rgba(255,255,255,0.85)" : "#374151",
                      transition: "color 0.4s",
                    }}
                  >
                    {card.statement}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar
                      size="default"
                      style={{
                        border: isActive
                          ? "2px solid rgba(232,36,92,0.4)"
                          : "none",
                        transition: "border 0.4s",
                      }}
                    >
                      <AvatarImage
                        className="rounded-full aspect-square size-full object-cover"
                        alt={card.name}
                        src={card.avatar}
                      />
                    </Avatar>
                    <div className="flex flex-col gap-0.5">
                      <div
                        className="text-sm font-medium transition-colors duration-300"
                        style={{ color: isActive ? "#ffffff" : "#0f1f5c" }}
                      >
                        {card.name}
                      </div>
                      <div
                        className="text-sm transition-colors duration-300"
                        style={{
                          color: isActive
                            ? "rgba(255,255,255,0.55)"
                            : "#9ca3af",
                        }}
                      >
                        {card.position}
                      </div>
                    </div>
                  </div>
                  <div className="w-14 h-14">
                    <img
                      className="h-full object-contain object-center"
                      style={{
                        opacity: isActive ? 0.7 : 0.5,
                        transition: "opacity 0.4s",
                      }}
                      alt={card.name}
                      src={card.logo}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Divider ─────────────────────────────────────────────────────────── */}
        <div className="flex items-center gap-5 py-2">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground whitespace-nowrap">
            Proven Results
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* ── Stat cards (count-up on scroll) ─────────────────────────────────── */}
        <div
          ref={statsRef}
          className="grid w-full grid-cols-1 gap-6 md:grid-cols-3"
        >
          {statCards.map((card, idx) => (
            <StatCard
              key={idx}
              stat={card.stat}
              suffix={card.suffix}
              label={card.label}
              caseTitle={card.caseTitle}
              href={card.href}
              bgImage={card.bgImage}
              inView={statsInView}
              delay={idx * 200}
            />
          ))}
        </div>

        {/* ── CTA footer ──────────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center gap-10 pt-10">
          <p className="text-sm text-muted-foreground">
            Join 160+ Kenyan institutions already transforming their operations
          </p>
          <Button variant="default" size="lg">
            Read All Client Stories
            <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </section>
  );
}
