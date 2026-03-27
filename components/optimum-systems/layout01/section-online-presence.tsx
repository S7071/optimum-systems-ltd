/* eslint-disable @next/next/no-img-element */
"use client";

import BadgePill from "@/components/ui/badge-pill";
import { useMemo, useState } from "react";

interface bulletProp {
  title: string;
  description: string;
}

type Feature = {
  id: string;
  label: string;
  title: string;
  description: string;
  bullets: bulletProp[];
  accent: string;
};

const FEATURES: Feature[] = [
  {
    id: "lecture-portal",
    label: "Lecture Portal",
    title: "Lecture Portal",
    description:
      "Ullamco proident nisi ut pariatur eu exercitation magna commodo voluptate reprehenderit qui est.",
    bullets: [
      {
        title: "Custom event triggers",
        description:
          "Consequat do nulla fugiat ad commodo pariatur pariatur non veniam sint culpa consectetur ex. Cillum occaecat et anim et voluptate labore ex. Anim anim in anim adipisicing dolor enim anim adipisicing ea elit magna ipsum. Exercitation minim sit ullamco mollit consequat reprehenderit cillum minim laborum id qui. Eiusmod incididunt mollit nisi laborum laborum ullamco ex dolore incididunt.",
      },
      {
        title: "Reusable automation flows",
        description:
          "Sint do Lorem elit occaecat dolore ad pariatur esse culpa ullamco tempor ex. Minim sunt magna amet ex eiusmod et mollit pariatur dolore nulla. Commodo labore proident in officia consectetur anim excepteur occaecat qui nisi pariatur ea eiusmod quis. Sit duis sit veniam officia eiusmod qui tempor aliquip ipsum. Laborum et qui fugiat aute sint commodo labore adipisicing tempor proident veniam qui irure anim. Reprehenderit dolor sunt esse ullamco. Aliqua fugiat do nostrud tempor voluptate dolor.",
      },
      {
        title: "Reduce manual effort",
        description:
          "Ullamco veniam cupidatat in excepteur amet. Quis commodo proident sint aliquip consequat exercitation nostrud. Ex non duis qui anim culpa ad in ad reprehenderit. Do consectetur exercitation veniam cupidatat ut labore consequat amet nulla commodo. Mollit pariatur incididunt esse enim excepteur pariatur consequat mollit voluptate tempor aliquip cupidatat enim laboris.",
      },
    ],
    accent: "from-slate-900 via-slate-700 to-slate-500",
  },
  {
    id: "student-portal",
    label: "Student Portal",
    title: "Student Portal",
    description: "Aute cillum ad exercitation ea.",
    bullets: [
      {
        title: "Custom event triggers",
        description:
          "Consequat do nulla fugiat ad commodo pariatur pariatur non veniam sint culpa consectetur ex. Cillum occaecat et anim et voluptate labore ex. Anim anim in anim adipisicing dolor enim anim adipisicing ea elit magna ipsum. Exercitation minim sit ullamco mollit consequat reprehenderit cillum minim laborum id qui. Eiusmod incididunt mollit nisi laborum laborum ullamco ex dolore incididunt.",
      },
      {
        title: "Reusable automation flows",
        description:
          "Sint do Lorem elit occaecat dolore ad pariatur esse culpa ullamco tempor ex. Minim sunt magna amet ex eiusmod et mollit pariatur dolore nulla. Commodo labore proident in officia consectetur anim excepteur occaecat qui nisi pariatur ea eiusmod quis. Sit duis sit veniam officia eiusmod qui tempor aliquip ipsum. Laborum et qui fugiat aute sint commodo labore adipisicing tempor proident veniam qui irure anim. Reprehenderit dolor sunt esse ullamco. Aliqua fugiat do nostrud tempor voluptate dolor.",
      },
      {
        title: "Reduce manual effort",
        description:
          "Ullamco veniam cupidatat in excepteur amet. Quis commodo proident sint aliquip consequat exercitation nostrud. Ex non duis qui anim culpa ad in ad reprehenderit. Do consectetur exercitation veniam cupidatat ut labore consequat amet nulla commodo. Mollit pariatur incididunt esse enim excepteur pariatur consequat mollit voluptate tempor aliquip cupidatat enim laboris.",
      },
    ],
    accent: "from-zinc-900 via-zinc-700 to-zinc-500",
  },
  {
    id: "admin-portal",
    label: "Admin Portal",
    title: "Admin Portal",
    description: "Sint commodo voluptate cillum excepteur.",
    bullets: [
      {
        title: "Custom event triggers",
        description:
          "Consequat do nulla fugiat ad commodo pariatur pariatur non veniam sint culpa consectetur ex. Cillum occaecat et anim et voluptate labore ex. Anim anim in anim adipisicing dolor enim anim adipisicing ea elit magna ipsum. Exercitation minim sit ullamco mollit consequat reprehenderit cillum minim laborum id qui. Eiusmod incididunt mollit nisi laborum laborum ullamco ex dolore incididunt.",
      },
      {
        title: "Reusable automation flows",
        description:
          "Sint do Lorem elit occaecat dolore ad pariatur esse culpa ullamco tempor ex. Minim sunt magna amet ex eiusmod et mollit pariatur dolore nulla. Commodo labore proident in officia consectetur anim excepteur occaecat qui nisi pariatur ea eiusmod quis. Sit duis sit veniam officia eiusmod qui tempor aliquip ipsum. Laborum et qui fugiat aute sint commodo labore adipisicing tempor proident veniam qui irure anim. Reprehenderit dolor sunt esse ullamco. Aliqua fugiat do nostrud tempor voluptate dolor.",
      },
      {
        title: "Reduce manual effort",
        description:
          "Ullamco veniam cupidatat in excepteur amet. Quis commodo proident sint aliquip consequat exercitation nostrud. Ex non duis qui anim culpa ad in ad reprehenderit. Do consectetur exercitation veniam cupidatat ut labore consequat amet nulla commodo. Mollit pariatur incididunt esse enim excepteur pariatur consequat mollit voluptate tempor aliquip cupidatat enim laboris.",
      },
    ],
    accent: "from-black via-neutral-800 to-neutral-500",
  },
];

function CubeIllustration() {
  return (
    <div className="relative mx-auto flex aspect-[1.6] w-full w-fit items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white/70">
      <img src="/portals/laptop.png" alt="" className="w-full h-full" />
    </div>
  );
}

export default function OnlinePresenceSection() {
  const [activeId, setActiveId] = useState(FEATURES[2].id);

  const activeFeature = useMemo(
    () => FEATURES.find((feature) => feature.id === activeId) ?? FEATURES[2],
    [activeId],
  );

  return (
    <section className="w-full bg-primary-cbe-50 px-6 sm:px-30 pt-16 sm:pt-32">
      <div className="w-full flex flex-col gap-3 items-center px-4 sm:px-6 lg:px-8">
        <BadgePill label="Online Platforms" centered={true} />

        <h2 className="mb-4 text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500">
          Our <span className="text-primary-cta">Online</span> Presence
        </h2>
        <p className="mx-auto max-w-[600px] text-[15px] leading-[1.7] text-primary-cbe-800/60 line-clamp-3 text-center">
          Ut nisi in deserunt fugiat reprehenderit in anim eiusmod labore
          labore. Reprehenderit deserunt exercitation dolor voluptate aliqua.
          Labore ad ipsum est consectetur sint. Officia velit officia irure esse
          consequat exercitation sunt. Anim eu nisi elit commodo ullamco
          excepteur pariatur consectetur excepteur.
        </p>
        <div className="mt-8 w-full">
          <div className="flex items-center justify-center">
            <div
              role="tablist"
              aria-label="Feature categories"
              className="hidden flex-wrap justify-center gap-2 rounded-full bg-primary-cbe-100 p-1 sm:inline-flex"
            >
              {FEATURES.map((feature) => {
                const isActive = feature.id === activeId;

                return (
                  <button
                    key={feature.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${feature.id}`}
                    id={`tab-${feature.id}`}
                    onClick={() => setActiveId(feature.id)}
                    className={[
                      "rounded-full px-4 py-2 text-sm font-medium transition-all",
                      "focus:outline-none focus:ring-2 focus:ring-slate-950/10",
                      isActive
                        ? "bg-white text-primary-cbe-800 shadow-sm ring-1 ring-slate-200"
                        : "text-primary-cbe-800/60 hover:text-slate-950",
                    ].join(" ")}
                  >
                    {feature.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 sm:hidden">
            {FEATURES.map((feature) => {
              const isActive = feature.id === activeId;
              return (
                <button
                  key={feature.id}
                  type="button"
                  aria-label={feature.label}
                  aria-pressed={isActive}
                  onClick={() => setActiveId(feature.id)}
                  className={[
                    "h-2.5 rounded-full transition-all",
                    isActive ? "w-8 bg-slate-950" : "w-2.5 bg-slate-300",
                  ].join(" ")}
                />
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-6">
            <div
              role="tabpanel"
              aria-labelledby={`tab-${activeFeature.id}`}
              id={`panel-${activeFeature.id}`}
              className="outline-none"
            >
              <CubeIllustration />
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {activeFeature.bullets.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="mb-3 flex items-center gap-3">
                  <p className="text-sm font-semibold text-slate-950">
                    {item.title}
                  </p>
                </div>
                <p className="text-sm leading-6 text-slate-600 line-clamp-3">
                  {item.description}
                </p>
              </div>
            ))}
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
