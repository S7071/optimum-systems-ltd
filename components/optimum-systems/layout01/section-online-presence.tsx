/* eslint-disable @next/next/no-img-element */
"use client";

import BadgePill from "@/components/ui/badge-pill";
import { useMemo, useRef, useState } from "react";


type Feature = {
  id: string;
  label: string;
  title: string;
  description: string;
  accent: string;
  eyebrow: string;
  outcomes: string[];
};

const FEATURES: Feature[] = [
  {
    id: "staff-portal",
    label: "Staff Portal",
    title: "Staff Portal",
    eyebrow: "Academic Delivery Workspace",
    description:
      "A dedicated portal for lecturers to manage class delivery, academic workflows, attendance, evaluations, and scheduling from one secure interface.",
    outcomes: [
      "Faster academic coordination",
      "Reduced manual scheduling work",
      "Improved teaching visibility",
    ],
    accent: "from-primary-cbe-700 via-primary-cbe-600 to-sky-500",
  },
  {
    id: "student-portal",
    label: "Student Portal",
    title: "Student Portal",
    eyebrow: "Self-Service Student Experience",
    description:
      "A modern self-service portal that gives students direct access to academic records, fee management, applications, and institutional updates on any device.",
    outcomes: [
      "Better student convenience",
      "Lower admin workload",
      "Clearer fee visibility",
    ],
    accent: "from-primary-cta via-rose-500 to-orange-400",
  },
  {
    id: "management-portal",
    label: "Management Portal",
    title: "Management Portal",
    eyebrow: "Institutional Oversight & Control",
    description:
      "A centralized control layer for operations, finance, users, reporting, workflows, and executive decision-making across the institution.",
    outcomes: [
      "Stronger operational control",
      "Board-ready reporting",
      "Audit-ready processes",
    ],
    accent: "from-slate-900 via-slate-700 to-slate-500",
  },
];

function PortalPreview({ feature }: { feature: Feature }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_1.2fr] lg:gap-8">
      <div className="flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
        <div
          className={`mb-5 inline-flex w-fit items-center rounded-full bg-gradient-to-r px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm ${feature.accent}`}
        >
          {feature.eyebrow}
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-primary-cbe-500 sm:text-[30px]">
          {feature.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
          {feature.description}
        </p>

        <div className="mt-6 grid gap-3">
          {feature.outcomes.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
            >
              <div
                className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${feature.accent}`}
              />
              <p className="text-sm font-medium text-slate-700">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {["Secure", "Realtime", "Responsive"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-center text-[11px] font-semibold uppercase tracking-wide text-slate-600"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
        <div className={`h-24 w-full bg-gradient-to-r ${feature.accent}`} />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />

        <div className="relative -mt-24 p-4 sm:p-6">
          <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-3 shadow-inner sm:p-4">
            <div className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-white">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:30px_30px]" />
              <img
                src="/portals/laptop.png"
                alt={feature.title}
                className="relative h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OnlinePresenceSection() {
  const [activeId, setActiveId] = useState(FEATURES[0].id);
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);

  const activeFeature = useMemo(
    () => FEATURES.find((feature) => feature.id === activeId) ?? FEATURES[0],
    [activeId],
  );

  const activeIndex = FEATURES.findIndex((feature) => feature.id === activeId);

  const handleTabKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;

    e.preventDefault();

    const nextIndex =
      e.key === "ArrowRight"
        ? (index + 1) % FEATURES.length
        : (index - 1 + FEATURES.length) % FEATURES.length;

    setActiveId(FEATURES[nextIndex].id);
    tabsRef.current[nextIndex]?.focus();
  };

  return (
    <section className="w-full overflow-hidden bg-background py-18 sm:py-24 px-6 sm:px-16 lg:px-30">
      <div className="relative">
        <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-primary-cbe-100/50 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-primary-cta/10 blur-3xl" />

        <div className="mx-auto max-w-3xl text-center flex flex-col gap-3 items-center">
          <BadgePill label="Online Platforms" centered={true} />

          <h3 className="text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500 mb-4">
            Our <span className="text-primary-cta">Online</span> Presence
          </h3>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Experience UltimateERP through purpose-built portals designed for
            every stakeholder. From lecturers managing assessments to students
            tracking fees and administrators overseeing institutional
            operations, each portal delivers secure access, automation, and
            control across the institution.
          </p>
        </div>

        <div className="relative mt-14">
          <div
            role="tablist"
            aria-label="Feature categories"
            className="mx-auto flex max-w-5xl gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {FEATURES.map((feature, index) => {
              const isActive = feature.id === activeId;

              return (
                <button
                  key={feature.id}
                  ref={(el) => {
                    tabsRef.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${feature.id}`}
                  id={`tab-${feature.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveId(feature.id)}
                  onKeyDown={(e) => handleTabKeyDown(e, index)}
                  className={[
                    "group min-w-[260px] flex-1 rounded-[24px] border p-4 text-left transition-all duration-300 ease-out sm:min-w-0 sm:p-5",
                    isActive
                      ? "border-primary-cbe-200 bg-white shadow-sm"
                      : "border-slate-200 bg-white/60 hover:translate-y-0.5 hover:border-slate-300 hover:bg-white",
                  ].join(" ")}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={[
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-all duration-300",
                        isActive
                          ? `bg-gradient-to-r text-white ${feature.accent}`
                          : "bg-slate-100 text-slate-700 group-hover:bg-slate-200",
                      ].join(" ")}
                    >
                      {`0${index + 1}`}
                    </div>

                    <div className="min-w-0">
                      <p
                        className={[
                          "text-sm font-semibold",
                          isActive ? "text-primary-cbe-500" : "text-slate-700",
                        ].join(" ")}
                      >
                        {feature.label}
                      </p>
                      <p
                        className={[
                          "mt-1 text-xs",
                          isActive ? "text-slate-600" : "text-slate-500",
                        ].join(" ")}
                      >
                        {feature.eyebrow}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={[
                        "h-1 rounded-full transition-all duration-300",
                        isActive
                          ? `w-full bg-gradient-to-r ${feature.accent}`
                          : "w-0 bg-transparent",
                      ].join(" ")}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8">
            <div
              role="tabpanel"
              aria-labelledby={`tab-${activeFeature.id}`}
              id={`panel-${activeFeature.id}`}
              className="outline-none"
            >
              <PortalPreview feature={activeFeature} />
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 sm:hidden">
            {FEATURES.map((feature, index) => {
              const isActive = feature.id === activeId;
              return (
                <button
                  key={feature.id}
                  type="button"
                  aria-label={feature.label}
                  aria-pressed={isActive}
                  onClick={() => setActiveId(feature.id)}
                  className={[
                    "h-2.5 rounded-full transition-all duration-300",
                    isActive
                      ? "w-8 bg-primary-cbe-700"
                      : index === activeIndex
                        ? "w-2.5 bg-primary-cbe-300"
                        : "w-2.5 bg-slate-300",
                  ].join(" ")}
                />
              );
            })}
          </div>
        </div>

        <div className="sr-only">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              role="tabpanel"
              aria-labelledby={`tab-${feature.id}`}
              id={`panel-hidden-${feature.id}`}
            >
              {feature.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
