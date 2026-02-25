"use client";
/* eslint-disable @next/next/no-img-element */
// components/SiteHero.tsx

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const IMAGES = [
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
];

export default function SiteHero() {
  const autoScrollVerticalUp = React.useRef(
    AutoScroll({ speed: 1, direction: "forward", stopOnInteraction: false }),
  );

  const autoScrollVerticalDown = React.useRef(
    AutoScroll({ speed: 1, direction: "backward", stopOnInteraction: false }),
  );

  const autoScrollLeft = React.useRef(
    AutoScroll({ speed: 1, direction: "forward", stopOnInteraction: false }),
  );

  const autoScrollRight = React.useRef(
    AutoScroll({ speed: 1, direction: "backward", stopOnInteraction: false }),
  );

  return (
    <section className="py-16 sm:py-0 w-full">
      <div className="mx-auto px-6 sm:px-30">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content column */}
          <div className="mx-auto">
            <div className="flex w-fit items-center gap-2 rounded-full border px-2.5 py-1.5 text-xs font-medium">
              <Badge>AI-powered</Badge>
              <span>Solutions for new businesses</span>
            </div>

            <h1 className="mt-10 mb-4 text-3xl font-semibold lg:text-5xl">
              Revolutionizing Client Collaboration for Modern Services
            </h1>

            <p className="mx-auto text-muted-foreground lg:text-lg max-w-xl">
              Elevate your service-based business with customizable client
              portals and advanced back-office management
            </p>

            <div className="mt-10 flex flex-col gap-2 sm:flex-row">
              <Button variant="default">Start for Free</Button>
              <Button variant="outline">Schedule a Demo</Button>
            </div>
          </div>

          {/* ── Mobile carousels (horizontal, hidden on lg+) ── */}
          <div className="flex flex-col gap-8 lg:hidden">
            {/* Row 1 — scrolls left */}
            <Carousel
              orientation="horizontal"
              opts={{ loop: true }}
              plugins={[autoScrollLeft.current]}
              className="relative -mx-7 overflow-hidden"
            >
              <CarouselContent className="-ml-4 max-h-[100px] flex items-center">
                {IMAGES.map((src, i) => (
                  <CarouselItem
                    key={i}
                    className="min-w-0 shrink-0 grow-0 basis-full pl-4 max-w-50"
                  >
                    <img
                      alt={`placeholder ${i + 1}`}
                      src={src}
                      className="w-full h-auto"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Row 2 — scrolls right */}
            <Carousel
              orientation="horizontal"
              opts={{ loop: true }}
              plugins={[autoScrollRight.current]}
              className="relative -mx-7 overflow-hidden"
            >
              <CarouselContent className="-ml-4 max-h-[100px] flex items-center">
                {IMAGES.map((src, i) => (
                  <CarouselItem
                    key={i}
                    className="min-w-0 shrink-0 grow-0 basis-full pl-4 max-w-50"
                  >
                    <img
                      alt={`placeholder ${i + 1}`}
                      src={src}
                      className="w-full h-auto"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* ── Desktop carousels (vertical, hidden below lg) ── */}
          <div className="grid-cols-2 gap-4 hidden lg:grid">
            {/* Column 1 — scrolls down */}
            <Carousel
              orientation="vertical"
              opts={{ loop: true }}
              plugins={[autoScrollVerticalUp.current]}
              className="relative overflow-hidden"
            >
              <CarouselContent className="-mt-4 flex flex-col max-h-screen">
                {IMAGES.map((src, i) => (
                  <CarouselItem
                    key={i}
                    className="min-w-0 shrink-0 grow-0 basis-full pt-4"
                  >
                    <img
                      alt={`placeholder ${i + 1}`}
                      src={src}
                      className="w-full h-auto"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Column 2 — scrolls up */}
            <Carousel
              orientation="vertical"
              opts={{ loop: true }}
              plugins={[autoScrollVerticalDown.current]}
              className="relative overflow-hidden"
            >
              <CarouselContent className="-mt-4 flex flex-col max-h-screen">
                {IMAGES.map((src, i) => (
                  <CarouselItem
                    key={i}
                    className="min-w-0 shrink-0 grow-0 basis-full pt-4"
                  >
                    <img
                      alt={`placeholder ${i + 1}`}
                      src={src}
                      className="w-full h-auto"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
