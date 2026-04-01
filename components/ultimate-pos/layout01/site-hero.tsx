"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export default function SiteHero() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className="w-full overflow-hidden bg-primary-cbe-50">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-64px)] max-h-[760px]">
        {/* ── LEFT ──────────────────────────────────────── */}
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
                alt="UltimatePOS"
                width={10}
                height={10}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-cbe-800">
              <span className="text-primary-cta font-extrabold">Ultimate</span>
              POS
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.18] text-primary-cbe-800 tracking-[-1px]">
            The Ultimate
            <br />
            <span className="text-primary-cbe-500 font-bold">
              Point of Sale
            </span>
            <br />
            System
          </h1>

          <p className="text-primary-cbe-800 text-base leading-relaxed max-w-[340px] sm:max-w-[440px]">
            Built for Kenyan businesses. Manage inventory, process transactions,
            and track revenue — all from one intelligent platform.
          </p>

          <div className="flex flex-wrap gap-2.5 mb-11">
            <Button
              variant="default"
              size="lg"
              onClick={() => {
                router.push("/ultimate-pos/schedule-demo");
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
        </div>

        {/* Right */}
        <div className="relative overflow-hidden hidden md:block">
          {/* Hero photo */}
          <Image
            src="/heros/ultimatePOS.jpg"
            alt="Teacher working with students on CBE curriculum"
            fill
            className="object-cover object-center z-[1]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
