"use client";

import Image from "next/image";
import { useState } from "react";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function SiteCTA() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-16 md:py-24 md:pt-0 w-full bg-background">
      {/* Main Container */}
      <div className="container relative mx-auto px-4">
        <div className="relative z-10 grid grid-cols-1 justify-center">
          {/* Hero Image + Play Button */}
          <div className="relative text-center md:text-left">
            <div className="relative">
              <Image
                src="/images/cta.png"
                alt="SaaS Dashboard Preview"
                width={1200}
                height={700}
                priority
                className="mx-auto h-auto w-full max-w-5xl"
              />

              {/* Video Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="icon"
                      className="h-20 w-20 rounded-full shadow-xl bg-white text-primary hover:bg-gray-100 dark:bg-slate-900 dark:text-white"
                      aria-label="Play video"
                    >
                      <Play className="h-8 w-8" />
                    </Button>
                  </DialogTrigger>

                  <DialogTitle></DialogTitle>
                  <DialogContent className="max-w-4xl p-0 overflow-hidden">
                    <div className="aspect-video w-full">
                      <iframe
                        className="h-full w-full"
                        src="https://www.youtube.com/watch?v=Da1hUqzoiAo"
                        title="Optimum ERP System Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="mt-12 md:mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 justify-center text-center md:text-left">
              <div className="lg:col-start-2 lg:col-span-10">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                  {/* Left Column */}
                  <div>
                    <p className="text-lg font-semibold text-white/70">
                      Book A Demo
                    </p>

                    <h2 className="mt-2 text-2xl md:text-3xl font-semibold leading-snug text-white">
                      Get A Powerful Start
                      <br />
                      With UltimateCBE ERP Today
                    </h2>
                  </div>

                  {/* Right Column */}
                  <div>
                    <p className="mb-4 max-w-xl text-white/70 md:mx-0 mx-auto">
                      Start transforming your school&apos;s assessment
                      management with UltimateCBE - built specifically for
                      Kenya&apos;s CBC curriculum. Track student competencies,
                      generate instant report cards, engage parents in real
                      time, and give your teachers the tools they need to focus
                      on what matters most: teaching.
                    </p>

                    <Button
                      variant="link"
                      className="p-0 text-white hover:text-gray-200"
                    >
                      Request A Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Background Layer */}
      <div className="absolute bottom-0 left-0 right-0 h-4/5 sm:h-2/3 bg-gradient-to-b from-[#201e82] to-primary" />
    </section>
  );
}
