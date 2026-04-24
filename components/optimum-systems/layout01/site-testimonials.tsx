/* eslint-disable @next/next/no-img-element */
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BadgePill from "@/components/ui/badge-pill";
import { Quote } from "lucide-react";

type Testimony = {
  statement: string;
  avatar: string;
  name: string;
  position: string;
  logo: string;
};

const testimonies: Testimony[] = [
  {
    statement:
      "The audit has never been this fast and seamless—when auditors ask for a report, I simply click and it is ready instantly. Asante sana, Optimum.",
    avatar: "",
    name: "Charity",
    position: "Accountant, Meru Teachers",
    logo: "/clients/TTC/11.jpeg",
  },
  {
    statement:
      "The system is working very well for us. Whenever we have any issue, your team is always there for us, and when we request support, an engineer is sent promptly. We sincerely appreciate Optimum.",
    avatar: "",
    name: "Madam Hellen",
    position: "C.P Kwale TTC",
    logo: "/clients/TTC/12.png",
  },
];

export default function SiteTestimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-background w-full">
      {/* Background layers */}
      {/* <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(15,31,92,0.10),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(232,36,92,0.10),_transparent_28%)]" /> */}
      <div className="mx-auto flex w-full flex-col gap-14 px-6 py-16 sm:px-16 lg:px-30 lg:py-24">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-3 items-center">
          <BadgePill label="Client Testimonies" centered={true} />

          <h3 className="text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500">
            What Our <span className="text-primary-cta">Clients</span> Say
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Trusted by over{" "}
            <span className="font-semibold text-primary-cbe-900">
              200 institutions
            </span>{" "}
            across Kenya, our work continues to improve operational efficiency,
            compliance, and service delivery at scale.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-600 sm:text-sm">
            <div className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm">
              200+ Institutions
            </div>
            <div className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm">
              Kenya-wide Deployments
            </div>
            <div className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm">
              Proven Institutional Impact
            </div>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {testimonies.map((item) => (
            <article
              key={item.name}
              className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/95 p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-md sm:p-7"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-cbe-700 via-primary-cbe-500 to-primary-cta" />
              <div className="absolute right-5 top-5 rounded-2xl bg-primary-cbe-50 p-3 text-primary-cbe-300 transition-transform duration-500 group-hover:scale-110 group-hover:text-primary-cbe-400">
                <Quote className="h-5 w-5" strokeWidth={2.2} />
              </div>

              <div className="relative flex h-full min-h-[240px] flex-col justify-between gap-8">
                <div className="max-w-[92%]">
                  <p className="text-[15px] leading-8 text-slate-700 sm:text-base">
                    “{item.statement}”
                  </p>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary-cta/20 ring-4 ring-primary-cbe-50">
                      <Avatar className="h-full w-full border-2 border-white shadow-sm ring-1 ring-slate-200">
                        <AvatarImage
                          src={item.avatar}
                          alt={item.name}
                        />
                        <AvatarFallback className="bg-primary-cbe-100 text-sm font-semibold text-primary-cbe-700">
                          {item.name
                            .split(" ")
                            .map((part) => part[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary-cbe-900">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {item.position}
                      </p>
                    </div>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <img
                      src={item.logo}
                      alt={`${item.name} institution logo`}
                      className="max-h-10 max-w-10 object-contain"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
