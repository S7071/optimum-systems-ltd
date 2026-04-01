"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AVATARS = [
  { label: "KE", bg: "#1240a0", color: "white" },
  { label: "TZ", bg: "#2a5abf", color: "white" },
  { label: "UG", bg: "#4a7ad0", color: "white" },
  { label: "+", bg: "#e8ecf5", color: "#526280" },
] as const;

export default function SiteHero() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <section className="w-full bg-primary-cbe-50">
      <div className="grid lg:grid-cols-2 items-stretch w-full">
        {/* ── Left panel ── */}
        <div className="px-6 sm:px-30 py-14 flex flex-col justify-center gap-7 max-w-full shrink-0">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-3 w-fit">
            <div className="size-10 rounded-lg bg-background flex items-center justify-center flex-shrink-0 p-1.5 border border-primary-cbe-100">
              <Image
                src="/logos/ultimate-icon.svg"
                alt="UltimateSCM"
                width={10}
                height={10}
                className="w-full h-full object-contain size-10"
              />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-cbe-800">
              <span className="text-primary-cta font-extrabold">Ultimate</span>{" "}
              Supply Chain ERP
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.18] text-primary-cbe-800 tracking-[-1px]">
            Ultimate
            <br />
            <span className="text-primary-cbe-500 font-bold">
              Supply Chain
            </span>{" "}
            ERP
            <br />
            Built for scale
          </h1>

          {/* Subtext */}
          <p className="text-primary-cbe-800 text-base leading-relaxed max-w-[340px] sm:max-w-[440px]">
            Automate procurement, unify warehouse operations, and gain real-time
            visibility across every node — from raw material sourcing to
            last-mile delivery.
          </p>

          {/* CTAs */}
          <div className="flex gap-2.5 items-center flex-wrap">
            <Button
              variant="default"
              size="lg"
              onClick={() => {
                router.push("/ultimate-scm/schedule-demo");
              }}
            >
              Book a Demo
              <ArrowRight size={4} />
            </Button>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="lg">
                  <span className="size-7 rounded-full bg-primary-cbe-800 flex items-center justify-center flex-shrink-0">
                    <Play
                      size={10}
                      fill="white"
                      color="white"
                      className="ml-px"
                    />
                  </span>
                  Watch Overview
                </Button>
              </DialogTrigger>
              <DialogTitle className="sr-only">
                Product Overview Demo
              </DialogTitle>
              <DialogContent className="max-w-4xl overflow-hidden p-0">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/Da1hUqzoiAo?autoplay=1"
                    title="Product Overview Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Social proof avatars */}
          <div className="flex items-center">
            {AVATARS.map((av, i) => (
              <div
                key={i}
                className={[
                  "w-8 h-8 rounded-full flex items-center justify-center",
                  "text-xs font-bold flex-shrink-0 border-2 border-white relative",
                  i > 0 ? "-ml-2" : "",
                ].join(" ")}
                style={{ background: av.bg, color: av.color, zIndex: 5 - i }}
              >
                {av.label}
              </div>
            ))}
            <span className="ml-3 text-xs text-[#6a7b9a]">
              Trusted by{" "}
              <strong className="text-[#0a1938] font-bold">
                2,400+ enterprises
              </strong>{" "}
              across Africa
            </span>
          </div>
        </div>

        {/* ── Right panel ── */}
        <div className="relative overflow-hidden hidden md:block">
          {/* Hero photo */}
          <Image
            src="/heros/ultimateSCM.jpg"
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
      </div>
    </section>
  );
}
