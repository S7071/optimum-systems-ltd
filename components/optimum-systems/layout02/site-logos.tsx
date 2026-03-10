"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import React from "react";

/* eslint-disable @next/next/no-img-element */
export default function SiteLogos() {
  const autoScrollLeft = React.useRef(
    AutoScroll({ speed: 1, direction: "forward", stopOnInteraction: false }),
  );

  interface logoType {
    href: string;
    alt: string;
    src: string;
  }

  const logos: logoType[] = [
    {
      href: "ultimate-cbe",
      alt: "UltimateCBE",
      src: "/logos/pre-approved/cbe-dark-logo.png",
    },
    {
      href: "ultimate-cms",
      alt: "UltimateCMS",
      src: "/logos/pre-approved/cms-dark-logo.png",
    },
    {
      href: "ultimate-erp",
      alt: "UltimateERP",
      src: "/logos/pre-approved/erp-dark-logo.png",
    },
    {
      href: "ultimate-hms",
      alt: "UltimateHMS",
      src: "/logos/pre-approved/hms-dark-logo.png",
    },
    {
      href: "ultimate-mfg",
      alt: "UltimateMFG",
      src: "/logos/pre-approved/mfg-dark-logo.png",
    },
    {
      href: "/ultimate-pos",
      alt: "UltimatePOS",
      src: "/logos/pre-approved/pos-dark-logo.png",
    },
    {
      href: "/ultimate-scm",
      alt: "UltimateSCM",
      src: "/logos/pre-approved/sc-dark-logo.png",
    }
  ];

  return (
    <section className="overflow-hidden bg-background pt-4 sm:pt-8 dark:bg-muted w-full">
      <div className="relative">
        <div className="flex w-full">
          {/* Animate marquee */}
          <div className="w-full">
            <Carousel
              orientation="horizontal"
              opts={{ loop: true }}
              plugins={[autoScrollLeft.current]}
              className="overflow-hidden w-full"
            >
              <CarouselContent className="-ml-4 max-h-[60px] flex items-center">
                {logos.map((logo, i) => (
                  <CarouselItem
                    key={i}
                    className="min-w-0 shrink-0 grow-0 basis-full pl-4 max-w-65"
                  >
                    <a href={logo.href}>
                      <img
                        alt={logo.alt}
                        src={logo.src}
                        className="w-100 h-15 object-contain"
                      />
                    </a>
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
