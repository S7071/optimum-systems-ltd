"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";
import BadgePill from "@/components/ui/badge-pill";

// type Testimonial = {
//   id: number;
//   name: string;
//   role: string;
//   school: string;
//   image: string;
//   content: string;
//   rating: number;
//   featured?: boolean;
// };

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: "James Mwangi",
//     role: "Dean of Studies",
//     school: "Nairobi Academy",
//     image: "/images/clients/01.jpg",
//     content:
//       "Since implementing UltimateCBE, managing student assessments across all three pathways has become effortless. Competency tracking and automated report card generation have eliminated hours of manual paperwork every term.",
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "Grace Achieng",
//     role: "Principal",
//     school: "St. Mary's Girls School",
//     image: "/images/clients/02.jpg",
//     content:
//       "The live dashboards have completely transformed how we monitor student progress. What used to take our team weeks to compile now updates in real time, and the accuracy of our CBE reports has improved dramatically.",
//     rating: 5,
//     featured: true,
//   },
//   {
//     id: 3,
//     name: "David Kariuki",
//     role: "School Administrator",
//     school: "Moi Forces Academy",
//     image: "/images/clients/03.jpg",
//     content:
//       "Coordinating between teachers, parents, and administrators was our biggest challenge. UltimateCBE connected everyone on one platform, eliminating data gaps and bringing our entire school community closer to each student's learning journey.",
//     rating: 5,
//   },
// ];

const stats = [
  { value: "200+", label: "Schools onboarded" },
  { value: "98%", label: "Satisfaction rate" },
  { value: "40hrs", label: "Saved per term" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 mt-4">
      {Array.from({ length: rating }).map((_, index) => (
        <Star key={index} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

interface statProp {
  value: string;
  label: string;
};

interface testimonyProp {
  name: string;
  position: string;
  insitution: string;
  avator: string;
  rating: number;
  testimony: string;
  featured: boolean;
};

interface prop {
  description: string;
  stats: statProp[];
  testimonies: testimonyProp[];
};

export default function SiteTestimonials(prop: prop) {
  return (
    <section className="w-full py-16 md:py-24 bg-primary-cbe-50 px-6 sm:px-30 overflow-hidden">
      {/* Top brand stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-cbe-800 via-primary-cbe-800 to-[#CC0000]" />

      <div className="container flex flex-col gap-10 items-center max-w-full">
        {/* Section Header */}
        <div className="w-full mx-auto text-center flex items-center flex-col gap-3">
          <BadgePill label="Client stories" centered={true} />
          <h3 className="font-extrabold text-2xl sm:text-4xl text-pretty leading-tight tracking-tight text-primary-cbe-500 mb-4">
            What Our <span className="text-primary-cta">Clients</span> Say
          </h3>
          <p className="text-primary-cbe-800/60 leading-relaxed max-w-2xl line-clamp-3">
            {prop.description}
          </p>
        </div>
        {/* Social proof stats */}
        <div className="flex justify-center items-stretch gap-10 mb-14 flex-wrap">
          {prop.stats.map((stat, i) => (
            <div key={stat.label}>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-primary-cbe-500 line-clamp-1">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-primary-cbe-800/60 line-clamp-1">
                  {stat.label}
                </p>
              </div>
              {i < stats.length - 1 && (
                <div
                  key={`sep-${i}`}
                  className="w-px self-stretch bg-[#d0dce9]"
                />
              )}
            </div>
          ))}
        </div>
        {/* Testimonials Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {prop.testimonies.map((testimony) => (
            <div key={testimony.name} className="relative flex flex-col">
              {/* Featured badge */}
              {testimony.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-primary-cbe-500 text-white text-[10px] font-semibold tracking-[1.5px] uppercase px-4 py-1 rounded-full whitespace-nowrap">
                    Most helpful
                  </span>
                </div>
              )}

              <Card
                className={[
                  "w-full rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg",
                  testimony.featured
                    ? "border-primary-cbe-500 border shadow-md"
                    : "border border-[#e0e8f4] shadow-sm hover:border-primary-cbe-500",
                ].join(" ")}
              >
                <CardContent className="p-7 flex flex-col h-full">
                  {/* Quote icon box */}
                  <div className="w-9 h-9 rounded-lg bg-primary-cbe-50 flex items-center justify-center mb-5 shrink-0">
                    <Quote className="w-4 h-4 text-primary-cbe-500" />
                  </div>

                  {/* Quote text */}
                  <p className="text-sm leading-relaxed text-foreground/75 italic flex-1 line-clamp-5">
                    &quot;{testimony.testimony}&quot;
                  </p>

                  <StarRating rating={testimony.rating} />

                  {/* Divider */}
                  <div className="my-5 border-t border-[#e0e8f4]" />

                  {/* Author — inside card */}
                  <div className="flex items-center gap-3">
                    <Avatar className="w-11 h-11 border-2 border-[#e0e8f4] shrink-0">
                      <AvatarImage
                        src={testimony.avator}
                        alt={testimony.name}
                      />
                      <AvatarFallback className="bg-[#c8d8ee] text-primary-cbe-800 text-sm font-semibold">
                        {testimony.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#1a2a45] truncate">
                        {testimony.name}
                      </p>
                      <p className="flex items-center gap-1.5 text-xs text-muted-foreground mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000] shrink-0" />
                        {testimony.position}
                      </p>
                      <p className="text-xs font-medium text-primary-cbe-800 mt-0.5 truncate">
                        {testimony.insitution}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Button variant="default" size="lg">
            Read more success stories
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
