"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import BadgePill from "@/components/ui/badge-pill";
import { Button } from "@/components/ui/button";

const PLANS = [
  {
    name: "Pro",
    desc: "For small businesses with all the features and support",
    monthlyPrice: 29,
    annualPrice: 23,
    annualBilled: 276,
    annualSaving: 72,
    cta: "Contact Sales",
    ctaVariant: "primary" as const,
    featured: false,
    enterprise: false,
    featuresHeading: "Features:",
    features: [
      "2 Team Members",
      "10 GB Storage",
      "10 Projects",
      "Priority Support",
      "Full Customization",
      "Full Integration",
      "Full API Access",
    ],
  },
  {
    name: "Premium",
    desc: "For teams and organizations with advanced features and support",
    monthlyPrice: 79,
    annualPrice: 63,
    annualBilled: 756,
    annualSaving: 192,
    cta: "Contact Sales",
    ctaVariant: "primary" as const,
    featured: true,
    enterprise: false,
    featuresHeading: "Everything in Pro, and:",
    features: [
      "5 Team Members",
      "50 GB Storage",
      "50 Projects",
      "Dedicated Support",
      "Advanced Customization",
      "Analytics",
      "Reports",
    ],
  },
  {
    name: "Enterprise",
    desc: "For large companies with custom features, dedicated support and a dedicated account manager",
    monthlyPrice: null,
    annualPrice: null,
    annualBilled: null,
    annualSaving: null,
    cta: "Contact Sales",
    ctaVariant: "outline-blue" as const,
    featured: false,
    enterprise: true,
    featuresHeading: "Everything in Premium, and:",
    features: [
      "10+ Team Members",
      "100+ GB Storage",
      "100+ Projects",
      "Dedicated Account Manager",
      "Custom Features",
      "Custom Support",
      "Custom Integration",
    ],
  },
];

export default function SitePricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-16 md:py-24 w-full px-6 sm:px-30 bg-primary-cbe-50 flex flex-col items-center">
      {/* ── Hero header ── */}
      <div className="mb-10 w-full text-center gap-3 items-center flex flex-col">
        <BadgePill label="Pricing Plans" centered={true} />
        <h2 className="font-extrabold text-2xl sm:text-4xl text-pretty leading-tight tracking-tight text-primary-cbe-800 mb-4">
          Simple, transparent pricing
          <br className="hidden md:block" /> for <span className="text-primary-cta">every team</span>
        </h2>
        <p className="text-muted-foreground max-w-md leading-relaxed">
          Choose a plan that scales with your business. No hidden fees, no
          lock-ins — upgrade or cancel any time.
        </p>
      </div>
      {/* ── Billing toggle ── */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center gap-3 bg-background border border-primary-cbe-100 rounded-full px-4 py-1.5">
          <span
            className={cn(
              "text-sm transition-colors",
              !isAnnual ? "text-[#0B1D52] font-medium" : "text-[#6B6B78]",
            )}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual((v) => !v)}
            aria-label="Toggle billing period"
            className={cn(
              "relative w-10 h-6 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-[#CC2222] outline-none",
              isAnnual ? "bg-[#CC2222]" : "bg-[#CC2222]",
            )}
          >
            <span
              className={cn(
                "absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full bg-white transition-transform duration-200",
                isAnnual ? "translate-x-4" : "translate-x-0",
              )}
            />
          </button>
          <span
            className={cn(
              "text-sm transition-colors",
              isAnnual ? "text-[#0B1D52] font-medium" : "text-[#6B6B78]",
            )}
          >
            Annual
          </span>
          <span
            className={cn(
              "text-[11px] font-medium text-[#16A05A] bg-[rgba(22,160,90,0.1)] border border-[rgba(22,160,90,0.2)] px-2.5 py-1 rounded-full transition-opacity",
              isAnnual ? "opacity-100" : "opacity-40",
            )}
          >
            Save 20%
          </span>
        </div>
      </div>
      {/* ── Pricing grid ── */}
      <div className="w-full flex flex-col sm:flex-row gap-4 items-center px-0 sm:px-30">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative flex flex-col rounded-xl border overflow-hidden transition-transform duration-200 hover:-translate-y-1 flex-1",
              plan.featured
                ? "border-[#1A3196] shadow-[0_4px_32px_rgba(26,49,150,0.04)] bg-white"
                : "border-[#EBEBF0] bg-white",
            )}
          >
            {/* Popular ribbon */}
            {plan.featured && (
              <div className="absolute top-0 left-0 w-full bg-[#1A3196] text-white text-[10px] font-semibold tracking-[0.1em] uppercase text-center py-1.5">
                ✦ Most Popular
              </div>
            )}
            {/* Card top */}
            <div
              className={cn(
                "px-6 pb-5 pt-12 border-b border-[#F0F0F4]",
                plan.enterprise ? "bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800" : "bg-white",
              )}
            >
              <h3
                className={cn(
                  "text-xl font-bold mb-1",
                  plan.enterprise ? "text-white" : "text-primary-cbe-800",
                )}
              >
                {plan.name}
              </h3>
              <p
                className={cn(
                  "text-[12.5px] leading-relaxed min-h-[40px]",
                  plan.enterprise ? "text-white/55" : "text-muted-foreground",
                )}
              >
                {plan.desc}
              </p>

              {/* Price */}
              <div className="mt-5 mb-1">
                {plan.monthlyPrice !== null ? (
                  <div className="flex items-baseline gap-1">
                    <span
                      className={cn(
                        "text-base font-medium mt-1 self-start",
                        plan.enterprise ? "text-white" : "text-[#2D2D36]",
                      )}
                    >
                      $
                    </span>
                    <span
                      className={cn(
                        "text-5xl font-extrabold tracking-tight leading-none",
                        plan.enterprise ? "text-white" : "text-primary-cbe-800",
                      )}
                    >
                      {isAnnual && plan.annualPrice !== null
                        ? plan.annualPrice
                        : plan.monthlyPrice}
                    </span>
                    <span
                      className={cn(
                        "text-sm",
                        plan.enterprise
                          ? "text-white/55"
                          : "text-muted-foreground",
                      )}
                    >
                      /mo
                    </span>
                  </div>
                ) : (
                  <span
                    className={cn(
                      "text-3xl font-extrabold tracking-tight",
                      plan.enterprise ? "text-white" : "text-primary-cbe-800",
                    )}
                  >
                    Custom
                  </span>
                )}

                {/* Annual saving note */}
                <div
                  className={cn(
                    "mt-1 text-[11.5px] font-medium text-[#16A05A] transition-opacity h-4",
                    isAnnual && plan.annualBilled ? "opacity-100" : "opacity-0",
                  )}
                >
                  {plan.annualBilled
                    ? `Billed $${plan.annualBilled}/yr — save $${plan.annualSaving}`
                    : "\u00a0"}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="px-6 py-5">
              <Button
                variant={plan.ctaVariant === "primary" ? "default" : "outline"}
                className="w-full"
                // className={cn(
                //   "w-full rounded-lg text-sm font-medium py-3 border transition-all duration-150 active:scale-[0.98]",
                //   plan.ctaVariant === "primary" &&
                //     "bg-[#CC2222] hover:bg-[#B01C1C] text-white border-[#CC2222] hover:border-[#B01C1C]",
                //   plan.ctaVariant === "outline-blue" &&
                //     "bg-transparent text-[#1A3196] border-[#1A3196] hover:bg-[#F2F5FD]",
                // )}
              >
                {plan.cta}
              </Button>
            </div>

            {/* Features list */}
            <div className="px-6 pb-8 flex-1">
              <p className="text-[10.5px] font-semibold tracking-[0.1em] uppercase text-[#6B6B78] mb-4">
                {plan.featuresHeading}
              </p>
              <ul className="space-y-3">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-[#E8ECFA] flex items-center justify-center">
                      <Check
                        size={9}
                        strokeWidth={2.5}
                        className="text-[#1A3196]"
                      />
                    </span>
                    <span className="text-[13px] text-[#2D2D36] leading-snug">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      {/* ── Bottom strip ── */}
      <div className="mx-auto mt-10 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 px-1">
        <p className="text-sm text-muted-foreground">
          Need help choosing a plan?{" "}
          <a href="#" className="text-[#1A3196] font-medium hover:underline">
            Compare all features
          </a>{" "}
          or speak to our team.
        </p>
        <Button variant="default" size="lg">
          Talk to Sales
        </Button>
      </div>
    </section>
  );
}
