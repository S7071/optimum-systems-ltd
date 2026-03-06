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
      href: "#",
      alt: "Chesta Teachers Training College",
      src: "/images/clients/chesta-teachers-training-college.png",
    },
    {
      href: "#",
      alt: "Gatanga Technical And Vocational College",
      src: "/images/clients/gatanga-technical-and-vocational-college.png",
    },
    {
      href: "#",
      alt: "Gatundu South Technical And Vocational College",
      src: "/images/clients/gatundu-south-technical-and-vocational-college.png",
    },
    {
      href: "#",
      alt: "Kaiboi National Polytechnic",
      src: "/images/clients/kaiboi-national-polytechnic.png",
    },
    {
      href: "#",
      alt: "Kandara Technical And Vocational College",
      src: "/images/clients/kandara-technical-and-vocational-college.png",
    },
    {
      href: "#",
      alt: "Kiharu Technical And Vocational College",
      src: "/images/clients/kiharu-technical-and-vocational-college.png",
    },
    {
      href: "#",
      alt: "Michuki National Polytechnic",
      src: "/images/clients/michuki-national-polytechnic.png",
    },
    {
      href: "#",
      alt: "Thika Technical Training Institute",
      src: "/images/clients/thika-technical-training-institute.png",
    },
    {
      href: "#",
      alt: "Thogoto Teachers Training College",
      src: "/images/clients/thogoto-teachers-training-college.png",
    },
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
                    className="min-w-0 shrink-0 grow-0 basis-full pl-4 max-w-50"
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
