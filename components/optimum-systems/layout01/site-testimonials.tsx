"use client";

import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import BadgePill from "@/components/ui/badge-pill";

/* eslint-disable @next/next/no-img-element */



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

  interface caseStudy {
    industry: string;
    title: string;
    stat: string;
    statLabel: string;
    coverSrc: string;
    href: string;
  }

  const statCards: caseStudy[] = [
    {
      industry: "FINANCE",
      title:
        "Optimum Computer Systems launches AI tool to revolutionize financial reporting",
      stat: "5mins",
      statLabel: "Average bank reconciliation time, down from 3 days",
      coverSrc:
        "https://assets.citizen.digital/131897/conversions/WhatsApp-Image-2024-08-20-at-13.31.54-og_image.webp",
      href: "/blog",
    },
    {
      industry: "ADMINISTRATION",
      title:
        "Kenya Technical Trainers College's Journey to Paperless Operations",
      stat: "50%",
      statLabel: "Reduction in administrative workload institution-wide",
      coverSrc:
        "https://www.kisiipoly.ac.ke/sites/default/files/inline-images/gate.png",
      href: "#",
    },
    {
      industry: "COMPLIANCE",
      title: "Meru University Achieves Full IPSAS & TVETA Compliance",
      stat: "100%",
      statLabel: "Regulatory audit pass rate since UltimateERP deployment",
      coverSrc:
        "https://tuc.ac.ke/wp-content/uploads/2021/10/university-photo-1.jpg",
      href: "#",
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
          <h3 className="text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500 mb-4">
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
          {statCards.map((card, idx) => {
            return (
              <a
                key={idx}
                href={card.href}
                style={{ backgroundImage: `url('${card.coverSrc}')` }}
                className="
                relative min-h-auto w-full overflow-hidden rounded-lg
                bg-cover bg-center bg-no-repeat p-5
                transition-all duration-300
                before:content-[''] before:absolute before:inset-0 before:z-10
                before:transition-all before:duration-300
                hover:before:bg-primary-cbe-800/20
                after:content-[''] after:absolute after:top-0 after:left-0
                after:z-20 after:w-1 after:h-full after:bg-[#D01F1F]
                sm:aspect-square md:aspect-auto md:min-h-[30rem] md:max-w-[30rem]
              "
              >
                <div className="relative z-30 flex size-full flex-col justify-between gap-20 md:gap-16">
                  {/* Top — industry tag + title */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-medium tracking-widest uppercase text-white line-clamp-1 bg-primary-cbe-500 w-fit p-2 rounded-xl">
                      {card.industry}
                    </span>
                  </div>

                  {/* Bottom — stat + CTA */}
                  <div className="flex w-full flex-col gap-5 bg-primary-cbe-500/50 text-primary-cbe-800 p-6 rounded-xl items-end">
                    <div className="flex flex-col gap-0.5">
                      <p className="text-white font-bold text-sm sm:text-xl text-pretty leading-tight tracking-tight line-clamp-2">
                        {card.title}
                      </p>
                      <span className="text-sm text-white/80 mt-1 line-clamp-3">
                        {card.statLabel}
                      </span>
                    </div>

                    <Button variant="default" size="sm" className="w-fit">
                      Read Story
                      <ArrowRight size={24} />
                    </Button>
                  </div>
                </div>
              </a>
            );
          })}
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
