"use client";

import {
  ChartBarBigIcon,
  ChevronRight,
  ClipboardClock,
  GraduationCap,
  MessageCircle,
  BookOpen,
  Flame,
  Search,
  ShoppingBag,
  User,
  Users,
} from "lucide-react";
import { useState } from "react";

interface HelpCategory {
  icon: React.ReactNode;
  title: string;
  description: string;
  articles: number;
}

interface PopularTopic {
  title: string;
  href: string;
}

interface SearchHint {
  label: string;
}

interface HelpProps {
  title?: string;
  subtitle?: string;
  categories?: HelpCategory[];
  popularTopics?: PopularTopic[];
  searchHints?: SearchHint[];
  contactHref?: string;
  docsHref?: string;
  className?: string;
}

const DEFAULT_CATEGORIES: HelpCategory[] = [
  {
    icon: <GraduationCap className="size-5" />,
    title: "Student Management",
    description: "Enroll, manage, and track student records across all classes.",
    articles: 14,
  },
  {
    icon: <ChartBarBigIcon className="size-5" />,
    title: "Assessment & Grading",
    description: "Set up assessments, rubrics, and generate report cards.",
    articles: 11,
  },
  {
    icon: <ClipboardClock className="size-5" />,
    title: "Competency & Pathways",
    description: "CBE pathway setup, KNEC alignment, and curriculum mapping.",
    articles: 13,
  },
  {
    icon: <Users className="size-5" />,
    title: "Parent & Student Portal",
    description: "Accessing dashboards, profiles, and managing notifications.",
    articles: 10,
  },
  {
    icon: <User className="size-5" />,
    title: "Account & Settings",
    description: "User roles, permissions, profile, and system configuration.",
    articles: 7,
  },
  {
    icon: <ShoppingBag className="size-5" />,
    title: "Integrations",
    description: "NEMIS, e-learning tools, and third-party service connections.",
    articles: 10,
  },
];

const DEFAULT_TOPICS: PopularTopic[] = [
  { title: "How do I enroll a new student?", href: "#" },
  { title: "How to generate a student report card", href: "#" },
  { title: "Setting up learning pathways for Grade 10", href: "#" },
  { title: "How to reset my password", href: "#" },
  { title: "How do I add a new teacher account?", href: "#" },
  { title: "How to track student competency levels", href: "#" },
];

const DEFAULT_HINTS: SearchHint[] = [
  { label: "Enrol a student" },
  { label: "Reset password" },
  { label: "Report card" },
  { label: "KNEC alignment" },
];

const SiteHelpCenter = ({
  title = "Help Center",
  subtitle = "Browse articles, guides, and answers across all Optimum System modules.",
  categories = DEFAULT_CATEGORIES,
  popularTopics = DEFAULT_TOPICS,
  searchHints = DEFAULT_HINTS,
  contactHref = "/ultimate-cbe/contact-us",
  docsHref = "#",
}: HelpProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="w-full bg-[#f3f6fb]">

      {/* ── HERO ── */}
      <div className="relative overflow-hidden bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 px-6 pb-20 pt-14 text-center">
        {/* Bottom curve */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-[#f3f6fb]"
          style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}
        />

        {/* Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-300 backdrop-blur-sm">
          <span className="size-1.5 rounded-full bg-blue-400 inline-block" />
          Support Center
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          How can we{" "}
          <em className="not-italic text-[#ff5555]">help</em>{" "}
          you today?
        </h1>
        <p className="mt-2 text-base text-white/60">{subtitle}</p>

        {/* Search */}
        <div className="relative mx-auto mt-8 max-w-xl">
          <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-white/50 pointer-events-none" />
          <input
            type="text"
            placeholder="Search articles, guides, and tutorials…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-12 w-full rounded-2xl border border-white/20 bg-white/15 pl-11 pr-28 text-sm text-white placeholder-white/45 backdrop-blur-md outline-none transition focus:border-white/40 focus:bg-white/20"
          />
          <button className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-xl bg-[#e53535] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#c42b2b] hover:shadow-lg hover:shadow-red-900/30 active:scale-95">
            Search
          </button>
        </div>

        {/* Hint tags */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-white/40 font-medium">Popular:</span>
          {searchHints.map((hint, i) => (
            <button
              key={i}
              onClick={() => setSearchQuery(hint.label)}
              className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/70 transition hover:bg-white/18 hover:text-white"
            >
              {hint.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── MAIN ── */}
      <div className="mx-auto max-w-5xl px-6 py-10">

        {/* Section label */}
        <div className="mb-5 flex items-center justify-between">
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2556b8]">
            <span className="inline-block h-0.5 w-4 rounded bg-[#e53535]" />
            Browse by category
          </span>
          <a
            href="#"
            className="flex items-center gap-1 text-xs font-semibold text-[#2556b8] transition hover:text-[#e53535]"
          >
            All categories <ChevronRight className="size-3.5" />
          </a>
        </div>

        {/* Category cards */}
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className="group relative flex cursor-pointer flex-col gap-3 overflow-hidden rounded-2xl border border-[#e4e9f2] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_10px_40px_rgba(13,34,72,0.14)] no-underline"
            >
              {/* Top accent bar on hover */}
              <span className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#2556b8] to-[#7eaaf5] transition-transform duration-300 group-hover:scale-x-100 rounded-t-2xl" />

              {/* Icon */}
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f0fd] text-[#2556b8] transition duration-200 group-hover:bg-[#2556b8] group-hover:text-white">
                {category.icon}
              </div>

              {/* Body */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-[#141820]">
                    {category.title}
                  </h3>
                  <ChevronRight className="size-3.5 shrink-0 text-[#9aa5b8] transition duration-200 group-hover:translate-x-0.5 group-hover:text-[#2556b8]" />
                </div>
                <p className="mt-1 text-xs leading-relaxed text-[#4a5568]">
                  {category.description}
                </p>
              </div>

              {/* Footer */}
              <div className="border-t border-[#e4e9f2] pt-3">
                <span className="rounded-full bg-[#f2f6fe] px-2.5 py-0.5 text-[11px] font-semibold text-[#2556b8]">
                  {category.articles} articles
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Popular topics */}
        <div className="mb-5 flex items-center gap-2">
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2556b8]">
            <span className="inline-block h-0.5 w-4 rounded bg-[#e53535]" />
            Popular topics
          </span>
        </div>

        <div className="mb-10 rounded-2xl border border-[#e4e9f2] bg-white p-6">
          <div className="mb-5 flex items-center gap-2">
            <Flame className="size-4 text-[#e53535]" />
            <h2 className="text-sm font-bold text-[#141820]">Frequently Asked</h2>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {popularTopics.map((topic, index) => (
              <a
                key={index}
                href={topic.href}
                className="flex items-center gap-2 rounded-lg border border-transparent bg-[#f3f6fb] px-3 py-2.5 text-xs font-medium text-[#4a5568] transition hover:border-blue-200 hover:bg-[#e8f0fd] hover:text-[#1a3a7c] no-underline"
              >
                <ChevronRight className="size-3 shrink-0 text-[#2556b8]" />
                {topic.title}
              </a>
            ))}
          </div>
        </div>

        {/* Contact strip */}
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 px-8 py-8">
          <div>
            <h3 className="font-serif text-xl font-semibold text-white">
              Still can&apos;t find what you need?
            </h3>
            <p className="mt-1 text-sm text-white/55">
              Our support team is here Monday – Friday, 8 AM to 6 PM EAT.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={contactHref}
              className="inline-flex items-center gap-2 rounded-lg bg-[#e53535] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-900/30 transition hover:-translate-y-0.5 hover:bg-[#c42b2b] hover:shadow-red-900/40 no-underline"
            >
              <MessageCircle className="size-4" />
              Contact Support
            </a>
            <a
              href={docsHref}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/18 no-underline"
            >
              <BookOpen className="size-4" />
              Browse All Docs
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export { SiteHelpCenter };