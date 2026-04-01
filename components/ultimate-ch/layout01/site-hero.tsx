"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LucideIcon } from "@/lib/utils";
import {
  Activity,
  BanknoteArrowDown,
  Calendar,
  Clock,
  DollarSign,
  Home,
  Play,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface featureProp {
  label: string;
  sub: string;
  icon: LucideIcon;
}

const FEATURES: featureProp[] = [
  {
    label: "Reservations & Front Desk",
    sub: "Real-time availability",
    icon: Calendar,
  },
  {
    label: "Billing & M-PESA",
    sub: "Automated invoicing",
    icon: DollarSign,
  },
  {
    label: "Housekeeping",
    sub: "Task & status tracking",
    icon: Home,
  },
  {
    label: "CEO Analytics Dashboard",
    sub: "Live executive insights",
    icon: Activity,
  },
];

const TRUST_AVATARS = [
  { initials: "SK", bg: "bg-primary-cbe-500" },
  { initials: "JM", bg: "bg-[#2e86d4]" },
  { initials: "AW", bg: "bg-primary-cbe-400" },
  { initials: "BN", bg: "bg-[#C0392B]" },
];

/* ─── Component ─────────────────────────────────────────────────────────── */

export default function SiteHero() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <section className="w-full bg-primary-cbe-50">
      <div className="grid lg:grid-cols-2 items-stretch w-full">
        {/* Left column */}
        <div className="flex items-center px-6 sm:px-30 py-14">
          <div className="flex flex-col gap-7 max-w-full shrink-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 w-fit">
              <div className="size-10 rounded-lg bg-background flex items-center justify-center flex-shrink-0 p-1.5 border border-primary-cbe-100">
                <Image
                  src="/logos/ultimate-icon.svg"
                  alt="UltimateHMS"
                  width={10}
                  height={10}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-cbe-800">
                <span className="text-primary-cta font-extrabold">
                  Ultimate
                </span>{" "}
                Hotel ERP
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.18] text-primary-cbe-800 tracking-[-1px]">
              One Platform to
              <br />
              Run Your Entire
              <br />
              <span className="text-primary-cbe-500 font-bold">
                Hotel Operation
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-primary-cbe-800 text-base leading-relaxed max-w-[340px] sm:max-w-[440px]">
              Ultimate HMS centralizes reservations, front desk, housekeeping,
              billing, and guest services — giving your team real-time
              visibility and your guests a seamless experience.
            </p>

            {/* Action buttons */}
            <div className="flex items-center gap-3">
              <Button
                variant="default"
                size="lg"
                onClick={() => {
                  router.push("/ultimate-hms/schedule-demo");
                }}
              >
                Request a Demo
              </Button>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="lg">
                    <span className="size-7 rounded-full bg-primary-cbe-800 flex items-center justify-center flex-shrink-0">
                      <Play
                        size={10}
                        fill="white"
                        color="white"
                        className="ml-px"
                      />
                    </span>
                    Watch Overview
                  </Button>
                </DialogTrigger>
                <DialogTitle className="sr-only">
                  Product Overview Demo
                </DialogTitle>
                <DialogContent className="max-w-4xl overflow-hidden p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      className="h-full w-full"
                      src="https://www.youtube.com/embed/Da1hUqzoiAo?autoplay=1"
                      title="Product Overview Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Trust row */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <div className="flex">
                {TRUST_AVATARS.map(({ initials, bg }, i) => (
                  <div
                    key={initials}
                    className={`w-[30px] h-[30px] rounded-full border-2 border-white ${bg} flex items-center justify-center text-[11px] font-bold text-white ${i !== 0 ? "-ml-2" : ""}`}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-[12.5px] text-gray-500 leading-snug">
                Trusted by{" "}
                <strong className="text-[#0D1B2A] font-semibold">
                  150+ institutions
                </strong>{" "}
                across East Africa
                <br />
                with Category 1 ICT Authority accreditation
              </p>
            </div>
          </div>
        </div>
        {/* Right column — blue dashboard panel */}
        <div className="relative overflow-hidden hidden md:block">
          {/* Hero photo */}
          <Image
            src="/heros/ultimateHMS.jpg"
            alt="Teacher working with students on CBE curriculum"
            fill
            className="object-cover object-center z-[1]"
            priority
          />
          {/* Floating activity badge — bottom-left */}
          <div
            className="absolute top-8 right-8 z-10  bg-white rounded-xl px-4 py-3 flex items-center gap-3 min-w-[230px]"
            style={{
              boxShadow:
                "0 8px 32px rgba(11,61,145,0.15), 0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <div className="size-10 rounded-lg bg-[#E8F0FC] flex items-center justify-center flex-shrink-0">
              <Clock className="size-5 text-primary-cbe-800" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-slate-800 leading-tight">
                Real-time sync enabled
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                12 departments connected today
              </p>
            </div>
          </div>
          <div
            className="absolute bottom-10 left-6 z-10 bg-white rounded-xl px-4 py-3 flex items-center gap-3 min-w-[230px]"
            style={{
              boxShadow:
                "0 8px 32px rgba(11,61,145,0.15), 0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <div className="size-10 rounded-lg bg-[#E8F0FC] flex items-center justify-center flex-shrink-0">
              <BanknoteArrowDown className="size-5 text-primary-cbe-800" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-slate-800 leading-tight">
                Revenue reconciled
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                KES 284,750 processed today
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-t border-b border-gray-200 hidden sm:flex flex-wrap px-10 w-full">
        {FEATURES.map((feat, i) => (
          <div
            key={feat.label}
            className={[
              "flex flex-row justify-center items-center gap-4 py-4 px-6 flex-1",
              i < FEATURES.length - 1 ? "border-r border-gray-200" : "",
              i === 0 ? "pl-0" : "",
            ].join(" ")}
          >
            <div className="w-8 h-8 bg-primary-cbe-100 rounded-sm flex items-center justify-center flex-shrink-0">
              <feat.icon size={4} className="size-4 text-primary-cbe-800" />
            </div>
            <div>
              <div className="text-[12.5px] font-semibold text-gray-700 leading-snug">
                {feat.label}
              </div>
              <div className="text-[11px] text-[#8a97a8] mt-0.5">
                {feat.sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
