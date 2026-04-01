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
        title: "AI-Driven Timetable Scheduling",
        description:
          "Automatically resolve room, lecturer, and course conflicts with intelligent scheduling. Generate printable timetables synced to calendars, supporting both online and offline hybrid learning modes without manual intervention.",
      },
      {
        title: "Anonymous Lecturer Evaluation",
        description:
          "Collect honest student feedback through secure online surveys with customizable questionnaires. Access real-time analytics on teaching effectiveness scores, term-over-term trends, and low-rating alerts linked to HR development tracking.",
      },
      {
        title: "Biometric Attendance Sessions",
        description:
          "Initiate attendance sessions with a fingerprint scan before class begins. Students log presence biometrically, with the system auto-calculating per-course attendance percentages and generating real-time reports for academic compliance.",
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
        title: "Self-Service Academic Access",
        description:
          "Access transcripts, register for courses, book exams, and view results from a mobile-responsive portal. Receive push notifications for deadlines, announcements, and academic updates — reducing dependence on administrative offices entirely.",
      },
      {
        title: "Fee Payments & Finance Statements",
        description:
          "View outstanding fee invoices, make partial or full payments via MPESA, and download personalized fee statements instantly. Receive automated SMS and email alerts for overdue balances, sponsorship updates, and payment confirmations.",
      },
      {
        title: "Online Application & Clearance",
        description:
          "Apply for admission with document uploads and automated eligibility checks. Track multi-department clearance status — finance, library, hostels, and exams — through a transparent digital dashboard from application to graduation exit.",
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
        title: "Centralized System Control",
        description:
          "Manage user roles with granular permissions, configure custom workflows, and monitor system health in real time. Enforce multi-factor authentication, schedule automated backups, and maintain an indelible audit log of every system action.",
      },
      {
        title: "Real-Time Executive Dashboard",
        description:
          "Access live KPIs covering enrollment trends, revenue, debtors, creditors, cashbook balances, gender distribution, and staffing counts. Drill down into predictive analytics and generate board-ready reports from any device, anywhere.",
      },
      {
        title: "Automated Procurement & Compliance",
        description:
          "Streamline requisitions, supplier tendering, and purchase order workflows with full finance integration. Track inventory reorder levels, analyze spend patterns, and maintain IPSAS-compliant, audit-ready financial and procurement records.",
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
  const [activeId, setActiveId] = useState(FEATURES[0].id);

  const activeFeature = useMemo(
    () => FEATURES.find((feature) => feature.id === activeId) ?? FEATURES[0],
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
          Experience UltimateERP through purpose-built portals designed for
          every stakeholder. From lecturers managing assessments to students
          tracking fees and administrators overseeing institutional operations —
          each portal delivers real-time access, automation, and control from
          any device, anywhere.
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
