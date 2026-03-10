"use client";

/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export default function SiteFeatures() {
  const router = useRouter();
  interface featureCard {
    id: number;
    banner: string;
    name: string;
    alias: string;
    description: string;
    icon: string;
    href: string;
  }
  const featureCards: featureCard[] = [
    {
      id: 0,
      banner: "/placeholder-aspect-video-1.svg",
      name: "Ultimate CBE Assessment ERP",
      alias: "UltimateCBE",
      description:
        "A complete Competency-Based Education management system for TVETs and polytechnics — covering student registration, unit tracking, assessments, and KNQA-compliant reporting.",
      icon: "/logos/pre-approved/cbe-dark-icon.svg",
      href: "/ultimate-cbe",
    },
    {
      id: 1,
      banner: "/placeholder-aspect-video-1.svg",
      name: "Ultimate Supply Chain ERP",
      alias: "UltimateSCM",
      description:
        "End-to-end procurement, inventory, and logistics management. Track suppliers, purchase orders, stock movement, and deliveries in real time across all your branches.",
      icon: "/logos/pre-approved/sc-dark-icon.svg",
      href: "/ultimate-scm",
    },
    {
      id: 2,
      banner: "/placeholder-aspect-video-1.svg",
      name: "Ultimate Manufacturing ERP",
      alias: "UltimateMFG",
      description:
        "Streamline your entire production cycle — from raw material planning and work-in-progress tracking to finished goods management and quality control.",
      icon: "/logos/pre-approved/mfg-dark-icon.svg",
      href: "/ultimate-mfg",
    },
    {
      id: 3,
      banner: "/placeholder-aspect-video-1.svg",
      name: "Ultimate Hotel ERP",
      alias: "UltimateHMS",
      description:
        "A fully integrated hospitality management system covering reservations, front desk, housekeeping, restaurant POS, billing, and guest experience management.",
      icon: "/logos/pre-approved/hms-dark-icon.svg",
      href: "/ultimate-hms",
    },
    {
      id: 4,
      banner: "/placeholder-aspect-video-1.svg",
      name: "Ultimate POS",
      alias: "UltimatePOS",
      description:
        "A fast, reliable point-of-sale system for retail and service businesses. Manage sales, stock, receipts, and daily reports from a single, easy-to-use interface.",
      icon: "/logos/pre-approved/pos-dark-icon.svg",
      href: "/ultimate-pos",
    },
    {
      id: 5,
      banner: "/placeholder-aspect-video-1.svg",
      name: "Ultimate Conference",
      alias: "UltimateCMS",
      description:
        "Seamlessly manage venue bookings, event scheduling, attendee registration, billing, and post-event reporting for conference centres and event facilities.",
      icon: "/logos/pre-approved/cms-dark-icon.svg",
      href: "/ultimate-cms",
    },
  ];

  return (
    <section className="py-16 sm:py-32 w-full px-6 sm:px-30 bg-primary-cbe-500 text-white">
      <div className="container">
        <div className="mx-auto mb-16 flex max-w-[47.5rem] flex-col gap-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-semibold text-pretty">
            Purpose-Built ERP Products for Every Industry
          </h2>
          <p className="text-secondary/60">
            From hospitality and manufacturing to retail and conferencing —
            every Optimum product is built specifically for its industry, fully
            integrated, and tested across real Kenyan businesses.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card) => {
            return (
              <Card key={card.id} className="py-0">
                <CardContent className="px-0">
                  <div className="relative">
                    <div className="relative w-[100%] pb-[56.25%]">
                      <div
                        data-slot="aspect-ratio"
                        className="overflow-hidden rounded-tl-md rounded-tr-md absolute inset-0"
                      >
                        <img
                          src={card.banner}
                          alt="card-image"
                          className="block size-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 p-4 sm:p-6">
                    <CardTitle className="flex items-center justify-start gap-4">
                      <div className="rounded-sm w-12 h-12 flex items-center justify-center bg-muted border">
                        <img
                          alt={card.alias}
                          className="h-8 w-8"
                          src={card.icon}
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start gap-0.5">
                        <span className="line-clamp-1 leading-relaxed">{card.name}</span>
                        <span className="text-sm leading-relaxed line-clamp-1 text-muted-foreground">
                          {card.alias}
                        </span>
                      </div>
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed line-clamp-3">
                      {card.description}
                    </CardDescription>
                    <div className="w-full flex flex-row justify-end items-center mt-6 gap-2">
                      <Button
                        variant="default"
                        onClick={() => {
                          router.push(`${card.href}/schedule-demo`);
                        }}
                      >
                        Book a Demo
                      </Button>
                      <Button
                        variant="outline"
                        className="gap-2"
                        onClick={() => {
                          router.push(card.href);
                        }}
                      >
                        Explore
                        <ArrowRightIcon />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="flex flex-col mt-20 items-center">
          <Button
            variant="default"
            size="lg"
            onClick={() => {
              router.push("/products");
            }}
          >
            Explore All Our Products
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
