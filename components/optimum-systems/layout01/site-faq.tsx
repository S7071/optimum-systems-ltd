"use client";

import { useMemo, useState } from "react";
import { ArrowRight, ChevronDown, HelpCircle, Search } from "lucide-react";
import BadgePill from "@/components/ui/badge-pill";
import Link from "next/link";

type Category = "all" | "general" | "platform" | "billing" | "support";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: Exclude<Category, "all">;
}

const FAQS: FaqItem[] = [
  {
    id: 1,
    question: "What is a FAQ and why is it important?",
    answer:
      "FAQ stands for Frequently Asked Questions. It is a curated list that provides clear, instant answers to common questions people may have about a specific product, service, or topic — reducing friction and improving the overall user experience.",
    category: "general",
  },
  {
    id: 2,
    question: "Why should I use a FAQ on my website or app?",
    answer:
      "A FAQ section is a practical way to offer instant assistance to your users or customers. Instead of waiting for customer support responses, they can find quick answers to commonly asked questions — saving time and reducing your support load.",
    category: "platform",
  },
  {
    id: 3,
    question: "How do I effectively create a FAQ section?",
    answer:
      "Start by gathering the most frequent questions you receive from your users or customers. Once you have a list, write clear, detailed, and helpful answers to each question. Review and update regularly as your product evolves.",
    category: "platform",
  },
  {
    id: 4,
    question: "What are the benefits of having a well-maintained FAQ section?",
    answer:
      "There are numerous advantages to maintaining a robust FAQ section. It provides immediate answers to common queries, improves the user experience, reduces support ticket volume, and builds trust by demonstrating transparency about your product or service.",
    category: "general",
  },
  {
    id: 5,
    question: "How should I organize my FAQ for optimal usability?",
    answer:
      'An organized FAQ is critical for user-friendliness. Start by grouping similar questions into categories, such as "Billing," "Account Setup," or "Technical Support." This way, users can quickly find the section that addresses their specific concerns.',
    category: "support",
  },
  {
    id: 6,
    question: "How often should I update my FAQ, and why is it necessary?",
    answer:
      "Regular updates to your FAQ are essential to keeping the information accurate and relevant. As your product or service evolves, so will the types of questions your users ask. A quarterly review cycle is a good baseline practice.",
    category: "support",
  },
  {
    id: 7,
    question: "What payment methods does Optimum Systems Ltd accept?",
    answer:
      "We accept major credit and debit cards, bank transfers, and select digital wallets. Enterprise clients may also request invoice-based billing with agreed commercial terms. Contact our billing team for account-specific guidance.",
    category: "billing",
  },
];

const TABS: { label: string; value: Category }[] = [
  { label: "All Topics", value: "all" },
  { label: "General", value: "general" },
  { label: "Platform", value: "platform" },
  { label: "Billing", value: "billing" },
  { label: "Support", value: "support" },
];

const CATEGORY_DESCRIPTIONS: Record<Exclude<Category, "all">, string> = {
  general: "Core information and common overview questions.",
  platform: "Product capabilities, workflows, and platform usage.",
  billing: "Payments, invoicing, and commercial terms.",
  support: "Help, maintenance, updates, and assistance.",
};

export default function SiteFaq() {
  const [openId, setOpenId] = useState<number | null>(1);
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categoryCounts = useMemo(() => {
    return FAQS.reduce<Record<Exclude<Category, "all">, number>>(
      (acc, faq) => {
        acc[faq.category] += 1;
        return acc;
      },
      {
        general: 0,
        platform: 0,
        billing: 0,
        support: 0,
      },
    );
  }, []);

  const filteredFaqs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return FAQS.filter((faq) => {
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;
      const matchesSearch =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const activeCategoryLabel =
    TABS.find((tab) => tab.value === activeCategory)?.label ?? "All Topics";

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 w-full">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-red-100 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-full px-0 md:px-30">
        {/* Hero */}
        <div className="relative overflow-hidden sm:rounded-[2rem] bg-gradient-to-br from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 shadow-sm">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
          </div>

          <div className="relative z-10 px-6 sm:px-10 lg:px-12 py-10 sm:py-12 lg:py-14">
            <div className="w-full flex flex-col items-center text-center gap-3">
              <BadgePill label="FAQ CENTER" centered={true} />

              <h3 className="text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-50">
                Clear Answers, Structured <br />
                <span className="text-primary-cta">Professionally.</span>
              </h3>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
                Browse common questions, filter by topic, and quickly find the
                information your users need without adding friction to the
                experience.
              </p>
            </div>

            <div className="mt-14 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md hidden sm:block">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                <div className="relative flex-1">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search questions, topics, or keywords..."
                    className="h-14 w-full rounded-xl border border-white/60 bg-white pl-11 pr-4 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-primary-cbe-400 focus:ring-4 focus:ring-primary-cbe-100"
                  />
                </div>

                <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-slate-950/15 px-4 py-3 text-sm text-white/80 lg:min-w-[220px]">
                  <span>
                    {filteredFaqs.length} result
                    {filteredFaqs.length === 1 ? "" : "s"}
                  </span>

                  {searchQuery ? (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="rounded-lg border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-white/15"
                    >
                      Clear
                    </button>
                  ) : (
                    <span className="text-xs text-white/60">Live search</span>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 hidden sm:grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-white">
                  {FAQS.length}
                </p>
                <p className="mt-1 text-sm text-white/70">Total questions</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-white">
                  {Object.keys(categoryCounts).length}
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Structured categories
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-white">
                  {filteredFaqs.length}
                </p>
                <p className="mt-1 text-sm text-white/70">Visible results</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start hidden sm:block">
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary-cbe-300">
                  Browse by Category
                </p>
                <h3 className="mt-2 text-lg font-semibold text-primary-cbe-500">
                  Refined Topic Navigation
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Switch between topic groups to help users scan the FAQ more
                  efficiently.
                </p>
              </div>

              <div className="p-4">
                <div className="space-y-2">
                  {TABS.map((tab) => {
                    const isActive = activeCategory === tab.value;
                    const count =
                      tab.value === "all"
                        ? FAQS.length
                        : categoryCounts[tab.value as Exclude<Category, "all">];

                    return (
                      <button
                        key={tab.value}
                        type="button"
                        onClick={() => setActiveCategory(tab.value)}
                        className={[
                          "group flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition-all duration-300",
                          isActive
                            ? "border-primary-cbe-200 bg-primary-cbe-50 shadow-sm"
                            : "border-transparent bg-white hover:border-slate-200 hover:bg-slate-50",
                        ].join(" ")}
                      >
                        <div>
                          <p
                            className={[
                              "text-sm font-semibold transition-colors",
                              isActive
                                ? "text-primary-cbe-500"
                                : "text-slate-900 group-hover:text-primary-cbe-800",
                            ].join(" ")}
                          >
                            {tab.label}
                          </p>

                          {tab.value !== "all" && (
                            <p className="mt-1 text-xs text-slate-500">
                              {
                                CATEGORY_DESCRIPTIONS[
                                  tab.value as Exclude<Category, "all">
                                ]
                              }
                            </p>
                          )}
                        </div>

                        <span
                          className={[
                            "ml-4 inline-flex min-w-8 items-center justify-center rounded-full px-2.5 py-1 text-xs font-semibold transition-all duration-300",
                            isActive
                              ? "bg-primary-cbe-500 text-white"
                              : "bg-slate-100 text-slate-600",
                          ].join(" ")}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-2xl bg-primary-cbe-500 px-5 py-5 text-white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <HelpCircle className="h-5 w-5" />
                  </div>

                  <h4 className="mt-4 text-base font-semibold">
                    Need Direct Assistance?
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Use this section for quick self-service, then route users to
                    your support team for more complex enquiries.
                  </p>

                  <button
                    type="button"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary-cta hover:bg-primary-cta-800 px-4 py-3 text-sm font-semibold text-primary-cbe-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Contact Support
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* FAQ Panel */}
          <div className="overflow-hidden sm:rounded-[1.75rem] sm:border border-slate-200 bg-white sm:shadow-sm">
            <div className="sm:border-b border-slate-200 px-6 py-5 sm:px-8 hidden sm:block">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="sm:w-[60%] w-full">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-cbe-300">
                    {activeCategoryLabel}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-primary-cbe-500">
                    Frequently Asked Questions
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    A cleaner, more structured accordion layout with improved
                    readability and better topic separation.
                  </p>
                </div>

                <div className="sm:rounded-2xl sm:border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 hidden sm:block">
                  Showing{" "}
                  <span className="font-semibold text-primary-cbe-500">
                    {filteredFaqs.length}
                  </span>{" "}
                  matched item{filteredFaqs.length === 1 ? "" : "s"}
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              {filteredFaqs.length > 0 ? (
                <div className="space-y-3">
                  {filteredFaqs.map((faq) => {
                    const isOpen = openId === faq.id;

                    return (
                      <div
                        key={faq.id}
                        className={[
                          "overflow-hidden rounded-[1.5rem] border transition-all duration-300",
                          isOpen
                            ? "border-primary-cbe-200 bg-primary-cbe-50/60 shadow-sm"
                            : "border-slate-200 bg-white hover:border-primary-cbe-100 hover:shadow-xs",
                        ].join(" ")}
                      >
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${faq.id}`}
                          onClick={() => handleToggle(faq.id)}
                          className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                        >
                          <div
                            className={[
                              "hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-all duration-300",
                              isOpen
                                ? "bg-primary-cbe-500 text-white"
                                : "bg-primary-cbe-100 text-primary-cbe-500",
                            ].join(" ")}
                          >
                            {String(faq.id).padStart(2, "0")}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                              <h4 className="pr-4 text-sm sm:text-base font-semibold leading-7 text-primary-cbe-500 sm:text-lg">
                                {faq.question}
                              </h4>

                              <span className="hidden sm:inline-flex w-fit rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium capitalize text-slate-600">
                                {faq.category}
                              </span>
                            </div>
                          </div>

                          <span
                            className={[
                              "mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                              isOpen
                                ? "border-red-600 bg-red-600 text-white"
                                : "border-slate-200 bg-white text-slate-500",
                            ].join(" ")}
                          >
                            <ChevronDown
                              className={[
                                "h-4 w-4 transition-transform duration-300",
                                isOpen ? "rotate-180" : "",
                              ].join(" ")}
                            />
                          </span>
                        </button>

                        <div
                          className={[
                            "grid transition-all duration-300 ease-in-out",
                            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                          ].join(" ")}
                        >
                          <div className="overflow-hidden">
                            <div
                              id={`faq-answer-${faq.id}`}
                              className="border-t border-slate-200/80 px-5 pb-5 pt-4 sm:px-6 sm:pb-6"
                            >
                              <div className="sm:pl-[3.65rem]">
                                <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-[15px]">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 px-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                    <Search className="h-6 w-6 text-slate-400" />
                  </div>
                  <h4 className="mt-5 text-lg font-semibold text-slate-900">
                    No matching questions found
                  </h4>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                    Try a broader keyword or switch to another topic category to
                    reveal more results.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("all");
                    }}
                    className="mt-5 rounded-xl bg-primary-cbe-800 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-cbe-700"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="px-6 sm:px-0">
          <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
            <div className="relative grid gap-6 overflow-hidden bg-primary-cbe-500 px-6 py-8 sm:px-8 lg:grid-cols-[1.35fr_auto] lg:items-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.28),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(239,68,68,0.22),_transparent_32%)]" />

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-cbe-200">
                    Next Action
                  </p>

                  <h3 className="mt-5 text-2xl font-bold text-pretty leading-tight tracking-tight text-primary-cbe-50">
                    Still Have Questions?
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
                    Pair the FAQ with a clear support escalation path so users
                    can move from self-service to direct assistance without
                    losing momentum.
                  </p>
                </div>

                <div className="flex flex-wrap">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center rounded-full bg-primary-cta px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary-cta-800"
                  >
                    Contact Support
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
