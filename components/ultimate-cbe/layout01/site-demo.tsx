"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Play, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface tagProp {
  label: string;
};

interface  statProp {
  label: string;
  value: string;
};

interface prop {
  title: React.ReactElement;
  description: string;
  tags: tagProp[];
  videoSrc: string;
  videoTitle: string;
  cards: React.ReactElement[];
  stats: statProp[];
  mockupSrc: string;
};

export default function SiteDemo(prop: prop) {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-16 md:py-24 w-full overflow-hidden px-6 sm:px-30">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left column: copy ── */}
          <div className="flex flex-col gap-6">
            {/* Heading */}
            {prop.title}
            {/* Body copy */}
            <p className="max-w-md text-base leading-relaxed text-white/65 line-clamp-4">
              {prop.description}
            </p>
            {/* Feature pills */}
            <div className="flex flex-wrap gap-2">
              {prop.tags.map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-sm text-white/80 line-clamp-1"
                >
                  <Check className="h-3.5 w-3.5 flex-shrink-0 text-green-400" />
                  {tag.label}
                </span>
              ))}
            </div>
            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary red action button */}
              <Button variant="default" size="lg">
                Request A Demo
                <ArrowRight className="h-4 w-4" />
              </Button>

              {/* Secondary — opens video dialog */}
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent text-white/90 hover:bg-background/5 hover:text-white"
                  >
                    Watch a Walkthrough
                    <Play className="h-3.5 w-3.5 fill-white" />
                  </Button>
                </DialogTrigger>
                <DialogTitle className="sr-only">
                  {prop.videoTitle}
                </DialogTitle>
                <DialogContent className="max-w-4xl overflow-hidden p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      className="h-full w-full"
                      src={prop.videoSrc}
                      title={prop.videoTitle}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            {/* Social proof stats */}
            <div className="flex gap-8 border-t border-white/10 pt-8">
              {prop.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-white line-clamp-1">
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/50 line-clamp-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* ── Right column: mockup + floating cards ── */}
          <div className="relative">
            <Image
              src={prop.mockupSrc}
              alt={prop.videoTitle}
              width={1200}
              height={700}
              priority
              className="h-auto w-full rounded-xl"
            />

            {/* Floating card — Monthly Revenue (top-right) */}
            {prop.cards.map((card) => card)}
          </div>
        </div>
      </div>
    </section>
  );
}
