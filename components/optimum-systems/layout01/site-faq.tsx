"use client";

import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    question: "What payment methods does Optimum System Ltd accept?",
    answer:
      "We accept all major credit and debit cards, bank transfers, and select digital wallets. Enterprise clients may also request invoice-based billing with net-30 payment terms. Contact our billing team for details.",
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

const STATS = [
  { value: "24", label: "Total FAQs" },
  { value: "6", label: "Categories" },
  { value: "<2 min", label: "Avg. Read Time" },
];

export default function SiteFaq() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return FAQS.filter((faq) => {
      const matchCat =
        activeCategory === "all" || faq.category === activeCategory;
      const matchSearch =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full">
      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-primary-cbe-600 px-6 py-16 text-center sm:py-24">
        {/* Decorative radial overlays */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary-cbe-500 opacity-30 blur-3xl" />
          <div className="absolute right-[10%] top-0 h-72 w-72 rounded-full bg-red-500 opacity-10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl">
          <Badge className="mb-5 bg-white/10 text-white border-white/20 hover:bg-white/10">
            FAQs
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Common Questions & <span className="text-red-500">Answers</span>
          </h1>

          <p className="mt-4 text-base text-white/65 sm:text-lg">
            Find out all the essential details about our platform and how it can
            serve your needs.
          </p>

          {/* Search */}
          <div className="mt-8 flex overflow-hidden rounded-xl shadow-xl">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search a question…"
                className="h-full w-full bg-white py-4 pl-11 pr-4 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />
            </div>
            <button
              onClick={() => {}}
              className="bg-red-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-red-700 active:bg-red-800"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="flex justify-center gap-12 border-b border-border bg-background px-6 py-5">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-xl font-bold text-primary-cbe-800 sm:text-2xl">
              {stat.value}
            </p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="bg-muted px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-3xl">
          {/* Category tabs */}
          <div className="mb-8 flex flex-wrap gap-2">
            {TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveCategory(tab.value)}
                className={[
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                  activeCategory === tab.value
                    ? "border-primary-cbe-800 bg-primary-cbe-800 text-white"
                    : "border-border bg-background text-muted-foreground hover:border-primary-cbe-400 hover:text-primary-cbe-700",
                ].join(" ")}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Accordion list */}
          {filteredFaqs.length > 0 ? (
            <div className="flex flex-col gap-3">
              {filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={[
                      "overflow-hidden rounded-2xl border bg-background transition-all duration-200",
                      isOpen
                        ? "border-primary-cbe-400 shadow-md shadow-primary-cbe-100"
                        : "border-border hover:border-primary-cbe-200 hover:shadow-sm",
                    ].join(" ")}
                  >
                    {/* Header */}
                    <button
                      onClick={() => handleToggle(faq.id)}
                      className="flex w-full items-center gap-4 px-5 py-5 text-left"
                    >
                      {/* Number badge */}
                      <span
                        className={[
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors",
                          isOpen
                            ? "bg-primary-cbe-800 text-white"
                            : "bg-primary-cbe-100 text-primary-cbe-800",
                        ].join(" ")}
                      >
                        {faq.id}
                      </span>

                      {/* Question */}
                      <span className="flex-1 text-sm font-semibold text-foreground sm:text-base">
                        {faq.question}
                      </span>

                      {/* Chevron */}
                      <span
                        className={[
                          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                          isOpen
                            ? "border-red-600 bg-red-600 text-white"
                            : "border-border text-muted-foreground",
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

                    {/* Collapsible answer */}
                    <div
                      className={[
                        "grid transition-all duration-300 ease-in-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <p className="border-t border-border px-5 pb-5 pt-4 pl-[68px] text-sm leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* No results */
            <div className="py-16 text-center text-muted-foreground">
              <Search className="mx-auto mb-3 h-10 w-10 opacity-30" />
              <p className="text-sm">
                No questions match your search. Try a different term.
              </p>
            </div>
          )}

          {/* ── CTA Banner ── */}
          <div className="relative mt-14 overflow-hidden rounded-2xl bg-primary-cbe-600 px-8 py-10 sm:flex sm:items-center sm:justify-between">
            {/* Decorative circle */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" />

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white">
                Still have questions?
              </h3>
              <p className="mt-1 text-sm text-white/60">
                Our support team is ready to help you with anything you need.
              </p>
            </div>

            <Button variant="default" size="lg">
              Contact Support <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
