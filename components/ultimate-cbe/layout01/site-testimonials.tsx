"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, Star } from "lucide-react";
import BadgePill from "@/components/ui/badge-pill";

interface StatProp {
  value: string;
  label: string;
}

interface TestimonyProp {
  name: string;
  position: string;
  insitution: string;
  avator: string;
  rating: number;
  testimony: string;
  featured: boolean;
}

interface Props {
  description: string;
  stats: StatProp[];
  testimonies: TestimonyProp[];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={[
            "h-4 w-4 transition-colors duration-300",
            index < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-transparent text-slate-300",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

export default function SiteTestimonials({
  description,
  stats,
  testimonies,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-background px-6 py-16 sm:px-8 md:py-24 lg:px-12 w-full">
      {/* Top accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-cbe-700 via-primary-cbe-500 to-[#CC0000]" />

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-8%] top-16 h-64 w-64 rounded-full bg-primary-cbe-100/60 blur-3xl" />
        <div className="absolute right-[-6%] top-24 h-72 w-72 rounded-full bg-red-50 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-3 items-center">
          <BadgePill label="Client Testimonies" centered={true} />

          <h3 className="text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500 mb-4">
            Trusted By Institutions <br />
            That Expect{" "}
            <span className="text-primary-cta">Reliability at Scale</span>
          </h3>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {description}
          </p>
        </div>

        {/* Stats */}
        <div className="max-w-5xl mx-auto mt-14 rounded-3xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={[
                  "relative flex flex-col items-center justify-center px-6 py-4 text-center",
                  index < stats.length - 1
                    ? "sm:after:absolute sm:after:right-0 sm:after:top-1/2 sm:after:h-12 sm:after:w-px sm:after:-translate-y-1/2 sm:after:bg-slate-200"
                    : "",
                ].join(" ")}
              >
                <p className="text-3xl font-bold tracking-tight text-primary-cbe-600 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonies.map((testimony) => (
            <div key={testimony.name} className="relative h-full">
              {testimony.featured && (
                <div className="absolute left-6 top-0 z-20 -translate-y-1/2">
                  <span className="inline-flex items-center rounded-full border border-primary-cbe-200 bg-primary-cbe-600 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-md">
                    Featured story
                  </span>
                </div>
              )}

              <Card
                className={[
                  "group relative h-full overflow-hidden rounded-[28px] border bg-white transition-all duration-300",
                  "hover:-translate-y-1 hover:shadow-md",
                  testimony.featured
                    ? "border-primary-cbe-300 shadow-sm"
                    : "border-slate-200 shadow-sm hover:border-primary-cbe-200",
                ].join(" ")}
              >
                {/* subtle top glow */}
                <div
                  className={[
                    "absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r",
                    testimony.featured
                      ? "from-primary-cbe-700 via-primary-cbe-500 to-[#CC0000]"
                      : "from-primary-cbe-100 via-primary-cbe-300 to-red-200",
                  ].join(" ")}
                />

                <CardContent className="flex h-full flex-col p-6 sm:p-7">
                  {/* Quote icon */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-cbe-50 ring-1 ring-primary-cbe-100 transition-transform duration-300 group-hover:scale-105">
                      <Quote className="h-5 w-5 text-primary-cbe-600" />
                    </div>

                    <StarRating rating={testimony.rating} />
                  </div>

                  {/* Content */}
                  <blockquote className="flex-1 text-sm leading-7 text-slate-600 sm:text-[15px]">
                    “{testimony.testimony}”
                  </blockquote>

                  {/* Footer */}
                  <div className="mt-8 border-t border-slate-200 pt-5">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border-2 border-white shadow-sm ring-1 ring-slate-200">
                        <AvatarImage
                          src={testimony.avator}
                          alt={testimony.name}
                        />
                        <AvatarFallback className="bg-primary-cbe-100 text-sm font-semibold text-primary-cbe-700">
                          {testimony.name
                            .split(" ")
                            .map((part) => part[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-900">
                          {testimony.name}
                        </p>

                        <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#CC0000]" />
                          <span className="truncate">{testimony.position}</span>
                        </div>

                        <p className="mt-1 truncate text-xs font-medium text-primary-cbe-700">
                          {testimony.insitution}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-2">
          <Button
            size="lg"
            className="group rounded-full px-6 shadow-sm"
          >
            View All Our Clients
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
