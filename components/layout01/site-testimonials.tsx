"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "James Mwangi",
    role: "Dean of studies",
    image: "/images/clients/01.jpg",
    content:
      "Since implementing UltimateCBE, managing student assessments across all three pathways has become effortless. Competency tracking and automated report card generation have eliminated hours of manual paperwork every term.",
    rating: 5,
  },
  {
    id: 2,
    name: "Grace Achieng",
    role: "Principal",
    image: "/images/clients/02.jpg",
    content:
      "The live dashboards have completely transformed how we monitor student progress. What used to take our team weeks to compile now updates in real time, and the accuracy of our CBE reports has improved dramatically.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Kariuki",
    role: "School administrator",
    image: "/images/clients/03.jpg",
    content:
      "Coordinating between teachers, parents, and administrators was our biggest challenge. UltimateCBE connected everyone on one platform, eliminating data gaps and bringing our entire school community closer to each student's learning journey.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center justify-center gap-1 mt-3 text-amber-500">
      {Array.from({ length: rating }).map((_, index) => (
        <Star key={index} className="w-4 h-4 fill-current" />
      ))}
    </div>
  );
}

export default function SiteTestimonials() {
  return (
    <section className="relative py-16 md:py-24 bg-background px-6 sm:px-30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
            What Our Schools Say
          </h3>
          <p className="mt-4 text-muted-foreground">
            See how UltimateCBE Assessment ERP has transformed education
            management for schools across Kenya — streamlining assessments,
            empowering teachers, and driving student excellence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col items-center">
              <Card className="relative w-full rounded-2xl shadow-sm">
                <CardContent className="p-6 text-center">
                  <Quote className="w-10 h-10 mx-auto text-primary mb-4" />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    “{testimonial.content}”
                  </p>
                  <StarRating rating={testimonial.rating} />
                </CardContent>
              </Card>

              {/* User Info */}
              <div className="mt-6 flex flex-col items-center">
                <Avatar className="w-14 h-14 shadow-md">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <h6 className="mt-3 font-semibold text-sm">
                  {testimonial.name}
                </h6>
                <span className="text-xs text-muted-foreground">
                  {testimonial.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
