/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

type Partner = {
  name: string;
  abbr: string;
  bg: string;
  fg: string;
};

type Category = {
  id: string;
  label: string;
  partners: Partner[];
  category: string;
};

const CATEGORIES: Category[] = [
  {
    id: "education",
    label: "Universities",
    category: "education",
    partners: [
      { name: "", abbr: "/clients/UNI/1.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
    ],
  },
  {
    id: "education",
    label: "National Polytechnics",
    category: "education",
    partners: [
      { name: "", abbr: "/clients/POLY/1.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/POLY/2.png", bg: "#DBEAFE", fg: "#1E40AF" },
    ],
  },
  {
    id: "education",
    label: "Technical & Training Institutions",
    category: "education",
    partners: [
      { name: "", abbr: "/clients/TTI/1.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TTI/2.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TTI/3.png", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TTI/4.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TTI/5.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TTI/6.png", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TTI/7.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TTI/8.png", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TTI/9.jpeg", bg: "#DBEAFE", fg: "#1E40AF" },
    ],
  },
  {
    id: "education",
    label: "Technical & Vocational Colleges",
    category: "education",
    partners: [
      { name: "", abbr: "/clients/TVC/1.png", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/2.png", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/4.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/5.png", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/6.png", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/7.png", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/8.png", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/9.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/10.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/11.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/12.png", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/13.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/14.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/15.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/16.JPEG", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/17.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/18.png", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/19.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/20.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/21.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/22.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/23.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/24.jpeg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/25.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/26.jpeg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/27.png", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/28.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/29.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/30.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/30.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/31.png", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/32.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/33.png", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/34.JPEG", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/35.jpeg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/36.png", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/37.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/38.png", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/39.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/40.png", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TVC/41.png", bg: "#DBEAFE", fg: "#1E40AF" },
    ],
  },
  {
    id: "education",
    label: "Teachers Training Colleges",
    category: "education",
    partners: [
      { name: "", abbr: "/clients/TTC/1.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TTC/2.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TTC/3.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TTC/4.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TTC/5.png", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TTC/6.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TTC/7.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TTC/8.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TTC/9.jpeg", bg: "#DBEAFE", fg: "#1E40AF" },
      { name: "", abbr: "/clients/TTC/10.jpg", bg: "#DBEAFE", fg: "#1E40AF" },
    ],
  },
  // {
  //   id: "education",
  //   label: "Secondary Schools",
  //   category: "education",
  //   partners: [],
  // },
  // {
  //   id: "finance",
  //   label: "Financial Institutions",
  //   category: "finance",
  //   partners: [],
  // },
  // {
  //   id: "healthcare",
  //   label: "Medical Facilities",
  //   category: "healthcare",
  //   partners: [],
  // },
  // {
  //   id: "hospitality",
  //   label: "Hospitality",
  //   category: "hospitality",
  //   partners: [],
  // },
  // {
  //   id: "sme",
  //   label: "SME",
  //   category: "sme",
  //   partners: [],
  // },
];

const TABS = [
  { id: "all", label: "All Categories" },
  { id: "government", label: "Government" },
  { id: "education", label: "Education" },
  { id: "healthcare", label: "Health Care" },
  { id: "hospitality", label: "Hospitality" },
  { id: "finance", label: "Finance" },
  { id: "sme", label: "SME's" },
] as const;

function PartnerCard({ name, abbr, bg, fg }: Partner) {
  return (
    <div className="group flex min-h-[110px] flex-col items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3 py-5 text-center shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-[0_4px_16px_rgba(59,130,246,0.10)]">
      <div
        className="flex h-fit w-fit items-center justify-center rounded-[10px] font-bold tracking-[0.02em] transition-transform duration-200 group-hover:scale-105"
        style={{ backgroundColor: bg, color: fg }}
      >
        <img src={abbr} alt="client-logo" className="w-30 h-30 aspect-square" />
      </div>

      <p className="text-[11.5px] font-medium leading-[1.35] text-slate-700">
        {name}
      </p>
    </div>
  );
}

export default function PartnersGrid() {
  const [activeTab, setActiveTab] =
    useState<(typeof TABS)[number]["id"]>("all");

  const visibleCategories =
    activeTab === "all"
      ? CATEGORIES
      : CATEGORIES.filter((category) => category.id === activeTab);

  return (
    <div className="min-h-screen bg-primary-cbe-50 text-slate-900 flex flex-col items-center w-full">
      <div className="sticky top-0 z-10 border-b border-slate-200 bg-white shadow-sm w-full px-6 md:px-30">
        <div className="flex gap-1 overflow-x-auto justify-center">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={[
                  "whitespace-nowrap border-b-2 px-4 py-3.5 text-[13.5px] font-medium transition-colors duration-150",
                  isActive
                    ? "border-blue-600 text-primary-cbe-500"
                    : "border-transparent text-slate-500 hover:text-slate-700",
                ].join(" ")}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <main className="flex flex-col gap-12 py-16 md:py-24 w-full px-6 md:px-30">
        {visibleCategories.map((category, idx) => (
          <section key={idx}>
            <div
              className="relative flex items-baseline gap-3 border-b-2 pb-3.5 mb-5"
              style={{ borderColor: "#E4E8F2" }}
            >
              {/* Red underline accent */}
              <span className="absolute bottom-[-2px] left-0 h-[2px] w-10 rounded bg-primary-cta" />
              <h2 className="text-[17px] font-bold leading-none tracking-tight text-primary-cbe-800">
                {category.label}
              </h2>
              <span className="rounded-full bg-gray-200 px-2 py-0.5 text-[12px] font-medium text-gray-500">
                {category.partners.length}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {category.partners.map((partner, idx) => (
                <PartnerCard key={idx} {...partner} />
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-2xl bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 px-8 py-7 shadow-lg">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="mb-1 text-[12.5px] font-medium text-blue-200">
                Optimum Computer Systems Ltd
              </p>
              <p className="text-[17px] font-semibold text-white">
                Grow your business with our integrated ERP ecosystem
              </p>
            </div>

            <button
              type="button"
              className="rounded-full bg-white px-6 py-2.5 text-[13px] font-semibold text-primary-cbe-500 transition-colors duration-150 hover:bg-blue-50"
            >
              Request a Demo →
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
