"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface props {
  title?: string;
  highlight?: string;
  description?: string;
  primaryCtaHref?: string;
  videoUrl?: string;
  imageSrc?: string;
}

export default function SiteHeroEnhanced({
  title = "The Ultimate ERP ",
  highlight = "Solution",
  description = "We use a blend of expertise, technology, and strategy to help our clients solve their toughest challenges",
  primaryCtaHref = "#",
  videoUrl = "https://www.youtube.com/watch?v=Da1hUqzoiAo",
  imageSrc = "/images/laptop.png",
}: props) {
  return (
    <section className="relative w-full overflow-hidden py-12 lg:py-18 bg-background">
      {/* Decorative Elements */}
      {/* Additional Small Decorative Element - Alternative Position */}
      <div className="absolute top-32 left-32 lg:top-40 lg:left-48 z-1 opacity-50 hidden lg:block">
        <div className="h-16 w-16 lg:h-20 lg:w-20 rounded-xl bg-primary/10 animate-[spin_15s_linear_infinite_reverse]"></div>
      </div>

      {/* Large Background Gradient Blob - Behind Laptop */}
      {/* <div className="absolute -top-20 -right-20 lg:-top-32 lg:-right-32 z-1">
        <div className="h-[500px] w-[500px] lg:h-[800px] lg:w-[800px] rounded-full bg-gradient-to-br from-primary/40 via-primary/25 to-transparent blur-[100px] opacity-70" />
      </div> */}
      <div className="absolute -top-20 -right-20 lg:-top-32 lg:-right-32 z-1 hidden lg:block">
        <div className="h-[500px] w-[500px] lg:h-[800px] lg:w-[800px] rounded-[16rem] bg-primary shadow-2xl rotate-[25deg] blur-[2px] opacity-95" />
      </div>

      {/* Additional Accent Blob */}
      <div className="absolute top-1/2 right-1/4 z-1 hidden lg:block">
        <div className="h-64 w-64 rounded-full bg-primary/10 blur-3xl opacity-60" />
      </div>

      <div className="container relative mx-auto px-6 lg:px-48">
        <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-12 lg:gap-16">
          {/* Left Content */}
          <div className="md:col-span-7">
            <div className="md:pr-6 lg:pr-12">
              <h1 className="relative mb-6 text-4xl font-bold leading-tight text-slate-900 dark:text-white lg:text-5xl xl:text-6xl lg:leading-tight">
                {title}
                <br />
                <span className="relative inline-block text-primary">
                  {highlight}
                  <span className="absolute inset-x-0 bottom-2 h-2 w-full rounded-md bg-primary/30 lg:bottom-3 lg:h-3" />
                </span>{" "}
                for All
              </h1>

              <p className="max-w-xl text-base lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                {description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 lg:gap-6">
                <Button size="lg" className="font-semibold" asChild>
                  <Link href={primaryCtaHref}>Get Started</Link>
                </Button>

                <div className="flex items-center gap-3">
                  <Button
                    size="icon"
                    variant="default"
                    className="h-12 w-12 rounded-full shadow-lg hover:scale-105 transition-transform"
                    asChild
                  >
                    <Link
                      href={videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Watch introduction video"
                    >
                      <Play className="h-5 w-5 fill-current" />
                    </Link>
                  </Button>
                  <span className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                    Explore Our Solutions
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative md:col-span-5">
            <div className="relative z-10">
              <Image
                src={imageSrc}
                alt="SaaS Dashboard Preview"
                width={1200}
                height={800}
                className="mx-auto drop-shadow-2xl md:max-w-md lg:max-w-lg xl:max-w-none"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
