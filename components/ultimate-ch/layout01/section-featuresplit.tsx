"use client";
// components/HMSFeatureSplit.tsx
import BadgePill from "@/components/ui/badge-pill";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useRouter } from "next/navigation";

// const CHECK_ITEMS = [
//   "Streamline your front desk and save hours of admin time daily",
//   "Make data-driven decisions with real-time revenue and occupancy analytics",
//   "Deliver outstanding housekeeping support and guest care at every stage of their stay",
// ];

// const BARS = [
//   { label: "Deluxe", pct: 92, color: "bg-primary-cbe-500" },
//   { label: "Standard", pct: 78, color: "bg-[#2e86d4]" },
//   { label: "Suite", pct: 66, color: "bg-[#C0392B]" },
// ];

// const FOOTER_STATS = [
//   { val: "47", lbl: "Check-ins" },
//   { val: "12", lbl: "Check-outs" },
//   { val: "5", lbl: "Pending" },
// ];

function CheckIcon() {
  return (
    <div className="mt-[2px] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-cbe-500">
      <Check size={3} className="size-3 text-white" />
    </div>
  );
}

interface bulletPointProp {
  label: string;
}

interface ctaProp {
  cta: string;
  ctaLink: string;
  action: string;
  actionLink: string;
}

interface statsProp {
  label: string;
  value: number;
  color: string;
}

interface cardProp {
  title: string;
  stats: statsProp[];
  overview: statsProp[];
}

interface prop {
  eyebrow: string;
  titlePrefix: string;
  title: string;
  titleSuffix: string;
  description: string;
  badge: string;
  bulletPoints: bulletPointProp[];
  cta: ctaProp;
  card: cardProp;
  image: string;
}

export default function FeatureSplitSection(prop: prop) {
  const router = useRouter();
  return (
    <section className="grid min-h-[calc(100dvh-60px)] lg:grid-cols-2 w-full">
      {/* ── Left — image + floating card ── */}
      <div className="relative overflow-hidden bg-primary-cbe-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={prop.image}
          alt={prop.title}
          className="absolute inset-0 h-full w-full object-cover opacity-[0.38]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-cbe-800/12 to-primary-cbe-500/5" />

        {/* Badge pill */}
        <div className="absolute top-7 left-6 flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3.5 py-[5px]">
          <div className="h-1.5 w-1.5 rounded-full bg-white" />
          <span className="text-[11px] font-bold uppercase tracking-[0.8px] text-white/90">
            {prop.badge}
          </span>
        </div>

        {/* Floating dashboard card */}
        <div className="absolute bottom-8 right-7 w-[300px] rounded-xl bg-background p-4 shadow-2xl">
          <div className="mb-3 text-[11px] font-bold tracking-[0.2px] text-[#0D1B2A]">
            {prop.card.title}
          </div>

          {prop.card.stats.map(({ label, value, color }) => (
            <div key={label} className="mb-1.5 flex items-center gap-2">
              <span className="min-w-[80px] w-[80px] text-[10px] text-[#8a97a8]">
                {label}
              </span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#edf0f5] flex-1">
                <div
                  className={`h-full rounded-full ${color}`}
                  style={{ width: `${value}%` }}
                />
              </div>
              <span className="min-w-[26px] text-right text-[10px] font-semibold text-gray-600">
                {value}%
              </span>
            </div>
          ))}

          <div className="mt-3 flex justify-between border-t border-[#edf0f5] pt-2.5">
            {prop.card.overview.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-[14px] font-bold text-primary-cbe-500">
                  {value}
                </div>
                <div className="mt-px text-[9px] text-[#8a97a8]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right — content ── */}
      <div className="flex flex-col justify-center px-6 sm:px-30 py-16 gap-3 w-full bg-primary-cbe-50">
        <BadgePill label={prop.eyebrow} centered={false} />

        {/* Headline */}
        <h2 className="mb-4 font-extrabold text-2xl sm:text-4xl text-pretty leading-tight tracking-tight text-primary-cbe-800">
          {prop.titlePrefix === "" ? null : prop.titlePrefix}
          {prop.titlePrefix === "" ? null : <br />}
          {prop.title}
          <br />
          <span className="text-primary-cbe-500">{prop.titleSuffix}</span>
        </h2>

        {/* Body copy */}
        <p className="mb-7 max-w-full sm:max-w-[420px] text-sm leading-relaxed text-[#5a6a7e] line-clamp-3">
          {prop.description}
        </p>

        {/* Checklist */}
        <ul className="mb-9 flex flex-col gap-2.5">
          {prop.bulletPoints.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-center sm:items-start gap-2.5 text-[13.5px] leading-snug text-gray-700"
            >
              <CheckIcon />
              <span className="line-clamp-2 sm:line-clamp-1">{item.label}</span>
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <Button
            variant="default"
            size="lg"
            onClick={() => {
              router.push(prop.cta.ctaLink);
            }}
          >
            {prop.cta.cta}
          </Button>
          <Button
            variant="link"
            size="lg"
            onClick={() => {
              router.push(prop.cta.actionLink);
            }}
          >
            {prop.cta.action} <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
