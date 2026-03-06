/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function SiteFeatures() {
  return (
    <section className="py-16 sm:py-32 w-full px-6 sm:px-30">
      <div className="container">
        <div className="mx-auto mb-16 flex max-w-[47.5rem] flex-col gap-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-semibold text-pretty">
            Purpose-Built ERP Solutions for Every Industry
          </h2>
          <p className="text-muted-foreground">
            From hospitality and manufacturing to retail and conferencing —
            every Optimum product is built specifically for its industry, fully
            integrated, and tested across real Kenyan businesses.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <a href="#" className="group block">
            <div
              data-slot="card"
              data-size="default"
              className="ring-foreground/10 text-card-foreground group/card flex flex-col gap-6 overflow-hidden rounded-xl py-6 text-sm shadow-xs ring-1 has-[&gt;img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl h-full bg-muted transition-all duration-200 hover:shadow-lg"
            >
              <div
                data-slot="card-content"
                className="px-6 group-data-[size=sm]/card:px-4"
              >
                <div className="relative mb-4">
                  <div className="relative w-[100%] pb-[56.25%]">
                    <div
                      data-slot="aspect-ratio"
                      className="overflow-hidden rounded-md absolute inset-0"
                    >
                      <img
                        src="/placeholder-aspect-video-1.svg"
                        alt="card-image"
                        className="block size-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div
                    data-slot="card-title"
                    className="group-data-[size=sm]/card:text-sm flex gap-2 text-lg font-medium text-foreground flex items-center justify-start"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xs font-bold text-white bg-blue-600">
                      CBE
                    </span>
                    Ultimate CBE ERP
                  </div>
                  <div
                    data-slot="card-description"
                    className="text-muted-foreground text-sm leading-relaxed"
                  >
                    A complete Competency-Based Education management system for
                    TVETs and polytechnics — covering student registration, unit
                    tracking, assessments, and KNQA-compliant reporting.
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="group block">
            <div
              data-slot="card"
              data-size="default"
              className="ring-foreground/10 text-card-foreground group/card flex flex-col gap-6 overflow-hidden rounded-xl py-6 text-sm shadow-xs ring-1 has-[&gt;img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl h-full bg-muted transition-all duration-200 hover:shadow-lg"
            >
              <div
                data-slot="card-content"
                className="px-6 group-data-[size=sm]/card:px-4"
              >
                <div className="relative mb-4">
                  <div className="relative w-[100%] pb-[56.25%]">
                    <div
                      data-slot="aspect-ratio"
                      className="overflow-hidden rounded-md absolute inset-0"
                    >
                      <img
                        src="/placeholder-aspect-video-1.svg"
                        alt="card-image"
                        className="block size-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div
                    data-slot="card-title"
                    className="group-data-[size=sm]/card:text-sm flex gap-2 text-lg font-medium text-foreground flex items-center justify-start"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xs font-bold text-white bg-amber-500">
                      SC
                    </span>
                    Ultimate Supply Chain ERP
                  </div>
                  <div
                    data-slot="card-description"
                    className="text-muted-foreground text-sm leading-relaxed"
                  >
                    End-to-end procurement, inventory, and logistics management.
                    Track suppliers, purchase orders, stock movement, and
                    deliveries in real time across all your branches.
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="group block">
            <div
              data-slot="card"
              data-size="default"
              className="ring-foreground/10 text-card-foreground group/card flex flex-col gap-6 overflow-hidden rounded-xl py-6 text-sm shadow-xs ring-1 has-[&gt;img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl h-full bg-muted transition-all duration-200 hover:shadow-lg"
            >
              <div
                data-slot="card-content"
                className="px-6 group-data-[size=sm]/card:px-4"
              >
                <div className="relative mb-4">
                  <div className="relative w-[100%] pb-[56.25%]">
                    <div
                      data-slot="aspect-ratio"
                      className="overflow-hidden rounded-md absolute inset-0"
                    >
                      <img
                        src="/placeholder-aspect-video-1.svg"
                        alt="card-image"
                        className="block size-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div
                    data-slot="card-title"
                    className="group-data-[size=sm]/card:text-sm flex gap-2 text-lg font-medium text-foreground flex items-center justify-start"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xs font-bold text-white bg-rose-600">
                      Man
                    </span>
                    Ultimate Manufacturing ERP
                  </div>
                  <div
                    data-slot="card-description"
                    className="text-muted-foreground text-sm leading-relaxed"
                  >
                    Streamline your entire production cycle — from raw material
                    planning and work-in-progress tracking to finished goods
                    management and quality control.
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="group block">
            <div
              data-slot="card"
              data-size="default"
              className="ring-foreground/10 text-card-foreground group/card flex flex-col gap-6 overflow-hidden rounded-xl py-6 text-sm shadow-xs ring-1 has-[&gt;img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl h-full bg-muted transition-all duration-200 hover:shadow-lg"
            >
              <div
                data-slot="card-content"
                className="px-6 group-data-[size=sm]/card:px-4"
              >
                <div className="relative mb-4">
                  <div className="relative w-[100%] pb-[56.25%]">
                    <div
                      data-slot="aspect-ratio"
                      className="overflow-hidden rounded-md absolute inset-0"
                    >
                      <img
                        src="/placeholder-aspect-video-1.svg"
                        alt="card-image"
                        className="block size-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div
                    data-slot="card-title"
                    className="group-data-[size=sm]/card:text-sm flex gap-2 text-lg font-medium text-foreground flex items-center justify-start"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xs font-bold text-white bg-violet-600">
                      Htl
                    </span>
                    Ultimate Hotel ERP
                  </div>
                  <div
                    data-slot="card-description"
                    className="text-muted-foreground text-sm leading-relaxed"
                  >
                    A fully integrated hospitality management system covering
                    reservations, front desk, housekeeping, restaurant POS,
                    billing, and guest experience management.
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="group block">
            <div
              data-slot="card"
              data-size="default"
              className="ring-foreground/10 text-card-foreground group/card flex flex-col gap-6 overflow-hidden rounded-xl py-6 text-sm shadow-xs ring-1 has-[&gt;img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl h-full bg-muted transition-all duration-200 hover:shadow-lg"
            >
              <div
                data-slot="card-content"
                className="px-6 group-data-[size=sm]/card:px-4"
              >
                <div className="relative mb-4">
                  <div
                    data-radix-aspect-ratio-wrapper=""
                    className="relative w-[100%] pb-[56.25%]"
                  >
                    <div
                      data-slot="aspect-ratio"
                      className="overflow-hidden rounded-md absolute inset-0"
                    >
                      <img
                        src="/placeholder-aspect-video-1.svg"
                        alt="card-image"
                        className="block size-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div
                    data-slot="card-title"
                    className="group-data-[size=sm]/card:text-sm flex gap-2 text-lg font-medium text-foreground flex items-center justify-start"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xs font-bold text-white bg-rose-400">
                      POS
                    </span>
                    Ultimate POS
                  </div>
                  <div
                    data-slot="card-description"
                    className="text-muted-foreground text-sm leading-relaxed"
                  >
                    A fast, reliable point-of-sale system for retail and service
                    businesses. Manage sales, stock, receipts, and daily reports
                    from a single, easy-to-use interface.
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="group block">
            <div
              data-slot="card"
              data-size="default"
              className="ring-foreground/10 text-card-foreground group/card flex flex-col gap-6 overflow-hidden rounded-xl py-6 text-sm shadow-xs ring-1 has-[&gt;img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl h-full bg-muted transition-all duration-200 hover:shadow-lg"
            >
              <div
                data-slot="card-content"
                className="px-6 group-data-[size=sm]/card:px-4"
              >
                <div className="relative mb-4">
                  <div className="relative w-[100%] pb-[56.25%]">
                    <div
                      data-slot="aspect-ratio"
                      className="overflow-hidden rounded-md absolute inset-0"
                    >
                      <img
                        src="/placeholder-aspect-video-1.svg"
                        alt="card-image"
                        className="block size-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div
                    data-slot="card-title"
                    className="group-data-[size=sm]/card:text-sm flex gap-2 text-lg font-medium text-foreground flex items-center justify-start"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xs font-bold text-white bg-violet-400">
                      Con
                    </span>
                    Ultimate Conference
                  </div>
                  <div
                    data-slot="card-description"
                    className="text-muted-foreground text-sm leading-relaxed"
                  >
                    Seamlessly manage venue bookings, event scheduling, attendee
                    registration, billing, and post-event reporting for
                    conference centres and event facilities.
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="flex flex-col mt-20 items-center">
          <Button variant="default" size="lg">
            Explore All Our Solutions
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
