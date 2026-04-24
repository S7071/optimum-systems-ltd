/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const CATEGORIES = [
  "All",
  "Architecture",
  "DevOps",
  "Security",
  "Mobile",
  "AI / ML",
  "General",
  "Update",
];

const posts = [
  {
    id: 1,
    title: "A New Look, Same Commitment to Excellence",
    excerpt:
      "Optimum ERP Systems is evolving with a refreshed company website and brand experience designed to better reflect who we are, what we build, and the value we deliver.",
    author: "Optimum ERP Systems",
    initials: "OS",
    date: "24 Apr 2026",
    readTime: "4 min read",
    category: "Update",
    image: "/blogs/rebrand.png",
    featured: true,
    href: "/resources/blogs/company-website-rebrand",
  },
];

export default function SiteBlogs() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const featuredPost = posts.find((p) => p.featured)!;
  const regularPosts = posts.filter((p) => !p.featured);

  const filteredPosts = regularPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      search === "" ||
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 sm:py-32 w-full px-6 sm:px-30">
      <div className="container">
        {/* ── Header ── */}
        <div className="mb-8 md:mb-14 lg:mb-16">
          <div className="mb-3 h-1 w-11 rounded-full bg-[#E24B4A]" />
          <h1 className="mb-4 w-full text-4xl font-medium md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl text-primary-cbe-500">
            Blog
          </h1>
          <p className="text-slate-600">
            Insights, tutorials, and thoughts on modern software development
          </p>
        </div>

        {/* ── Search + Filter bar ── */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search articles…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-border bg-background py-2 pl-9 pr-4 text-sm outline-none transition-colors focus:border-primary-cbe-500 placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? "border-primary-cbe-500 bg-primary-cbe-500 text-white"
                    : "border-border bg-background text-muted-foreground hover:border-primary-cbe-500 hover:text-primary-cbe-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Featured hero post ── */}
        {activeCategory === "All" && search === "" && (
          <a
            href={featuredPost.href}
            className="group mb-12 grid overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-md md:grid-cols-2"
          >
            {/* Image side */}
            <div className="relative min-h-64 overflow-hidden bg-primary-cbe-500">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="h-full w-full object-cover object-center opacity-70 transition-opacity duration-300 group-hover:opacity-80"
              />
              <span className="absolute bottom-4 left-4 rounded bg-primary-cta px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                Featured
              </span>
            </div>

            {/* Content side */}
            <div className="flex flex-col justify-center p-8">
              <span className="w-fit mb-4 inline-block rounded bg-[#E6F1FB] px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary-cbe-500">
                {featuredPost.category}
              </span>
              <h2 className="mb-3 text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
                {featuredPost.title}
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                {featuredPost.excerpt}
              </p>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-cbe-500 text-xs font-semibold text-white">
                  {featuredPost.initials}
                </div>
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">
                    {featuredPost.author}
                  </span>
                  <span className="mx-1.5">·</span>
                  {featuredPost.date}
                  <span className="mx-1.5">·</span>
                  {featuredPost.readTime}
                </div>
              </div>
              <div>
                <Button size="lg" variant="default">
                  Read article
                  <svg
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>
          </a>
        )}

        {/* ── Section label ── */}
        <div className="mb-6 flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-cbe-500">
            Latest articles
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* ── Post grid ── */}
        <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3">
          {filteredPosts.map((post) => (
            <a
              key={post.id}
              href="#"
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary-cbe-500/10"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  alt={post.title}
                  className="aspect-[3/2] h-full w-full object-cover object-center transition-opacity duration-300 group-hover:opacity-85"
                  src={post.image}
                />
                <span className="absolute bottom-3 left-3 rounded bg-black/30 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  {post.category}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-4 md:p-5">
                <h2 className="mb-2 line-clamp-3 text-base font-medium leading-snug tracking-tight md:text-lg">
                  {post.title}
                </h2>
                <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-border pt-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-cbe-500 text-[10px] font-semibold text-white">
                      {post.initials}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">
                        {post.author}
                      </span>
                      <br />
                      {post.date} · {post.readTime}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-md bg-[#E24B4A] px-3 py-1.5 text-xs font-semibold text-white transition-colors group-hover:bg-[#A32D2D]">
                    Read
                    <svg
                      className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* ── Empty state ── */}
        {filteredPosts.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            <p className="text-lg font-medium">No articles found</p>
            <p className="mt-1 text-sm">Try a different search or category.</p>
          </div>
        )}

        {/* ── View all (mobile) ── */}
        <div className="mt-10 flex flex-col items-center py-2 md:hidden">
          <button className="inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-primary-cbe-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-cbe-500 sm:w-fit">
            View all posts
          </button>
        </div>
      </div>
    </section>
  );
}
