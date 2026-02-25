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
    name: "Calvin Carlo",
    role: "Manager",
    image: "/images/clients/01.jpg",
    content:
      "Since implementing Optimum ERP, our inventory management has become seamless. Real-time tracking and automated reordering have reduced our stock discrepancies by 85% and saved countless hours of manual work.",
    rating: 5,
  },
  {
    id: 2,
    name: "Christa Smith",
    role: "Manager",
    image: "/images/clients/02.jpg",
    content:
      "The financial reporting module has revolutionized how we handle month-end closings. What used to take us 5 days now takes less than 24 hours, and the accuracy has improved dramatically.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jemina Clone",
    role: "Manager",
    image: "/images/clients/03.jpg",
    content:
      "Integration across departments was our biggest challenge. Optimum ERP connected our sales, procurement, and accounting teams on one platform, eliminating data silos and improving collaboration significantly.",
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
            What Our Clients Say
          </h3>
          <p className="mt-4 text-muted-foreground">
            See how Optimum ERP Systems has transformed operations for
            businesses across industries, streamlining processes, improving
            efficiency, and driving growth.
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
