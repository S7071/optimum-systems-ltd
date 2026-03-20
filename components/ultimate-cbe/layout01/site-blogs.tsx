/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const CATEGORIES = ["All", "Architecture", "DevOps", "Security", "Mobile", "AI / ML"];

const posts = [
  {
    id: 1,
    title: "The Future of Web Development: What's Next in 2024",
    excerpt:
      "Explore the latest trends in web development, from AI-powered tools to new frameworks that are reshaping how we build the web.",
    author: "Sarah Chen",
    initials: "SC",
    date: "15 Jan 2024",
    readTime: "8 min read",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080",
    featured: true,
  },
  {
    id: 2,
    title: "Building Scalable APIs with Modern Architecture Patterns",
    excerpt:
      "Learn about microservices, GraphQL, and event-driven architectures that are powering today's most successful applications.",
    author: "Marcus Rodriguez",
    initials: "MR",
    date: "12 Jan 2024",
    readTime: "6 min read",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    title: "Design Systems: Creating Consistency at Scale",
    excerpt:
      "How leading companies are implementing design systems to maintain visual consistency across products while enabling rapid development.",
    author: "Emma Thompson",
    initials: "ET",
    date: "10 Jan 2024",
    readTime: "5 min read",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1563952532949-3d1a874ad614?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 4,
    title: "Machine Learning in Production: Best Practices for Deployment",
    excerpt:
      "From model versioning to monitoring and scaling, learn the essential practices for deploying machine learning models in production.",
    author: "Alex Kim",
    initials: "AK",
    date: "8 Jan 2024",
    readTime: "7 min read",
    category: "AI / ML",
    image:
      "https://images.unsplash.com/photo-1563952532949-3d1a874ad614?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 5,
    title: "The Rise of Edge Computing: Transforming Application Architecture",
    excerpt:
      "Discover how edge computing is revolutionizing application performance and user experience, and learn strategies for implementing edge-first architectures.",
    author: "David Park",
    initials: "DP",
    date: "5 Jan 2024",
    readTime: "6 min read",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 6,
    title: "Cybersecurity Essentials for Modern Applications",
    excerpt:
      "Essential security practices every developer should implement, from authentication and authorization to data encryption.",
    author: "Lisa Wang",
    initials: "LW",
    date: "3 Jan 2024",
    readTime: "9 min read",
    category: "Security",
    image:
      "https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 7,
    title: "Performance Optimization: Techniques for Faster Web Applications",
    excerpt:
      "Advanced techniques for optimizing web application performance, including code splitting, lazy loading, and modern caching strategies.",
    author: "James Wilson",
    initials: "JW",
    date: "1 Jan 2024",
    readTime: "5 min read",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 8,
    title: "DevOps Culture: Building Better Software Delivery Pipelines",
    excerpt:
      "How to foster a DevOps culture in your organization and implement CI/CD pipelines that accelerate development while maintaining quality.",
    author: "Maria Garcia",
    initials: "MG",
    date: "29 Dec 2023",
    readTime: "6 min read",
    category: "DevOps",
    image:
      "https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 9,
    title: "Mobile App Development: Native vs Cross-Platform Solutions",
    excerpt:
      "Compare native and cross-platform development approaches, exploring the trade-offs between performance, development speed, and user experience.",
    author: "Ryan Johnson",
    initials: "RJ",
    date: "27 Dec 2023",
    readTime: "7 min read",
    category: "Mobile",
    image:
      "https://images.unsplash.com/photo-1563952532949-3d1a874ad614?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3",
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
          <h1 className="mb-4 w-full text-4xl font-medium md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl">
            Blog
          </h1>
          <p className="text-muted-foreground">
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
              className="w-full rounded-lg border border-border bg-background py-2 pl-9 pr-4 text-sm outline-none transition-colors focus:border-[#185FA5] placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? "border-[#185FA5] bg-[#185FA5] text-white"
                    : "border-border bg-background text-muted-foreground hover:border-[#185FA5] hover:text-[#185FA5]"
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
            href="#"
            className="group mb-12 grid overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-lg hover:shadow-[#185FA5]/10 md:grid-cols-2"
          >
            {/* Image side */}
            <div className="relative min-h-64 overflow-hidden bg-[#0C447C]">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="h-full w-full object-cover object-center opacity-70 transition-opacity duration-300 group-hover:opacity-60"
              />
              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
                  backgroundSize: "12px 12px",
                }}
              />
              <span className="absolute bottom-4 left-4 rounded bg-[#E24B4A] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                Featured
              </span>
            </div>

            {/* Content side */}
            <div className="flex flex-col justify-center p-8">
              <span className="mb-4 inline-block rounded bg-[#E6F1FB] px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0C447C]">
                {featuredPost.category}
              </span>
              <h2 className="mb-3 text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
                {featuredPost.title}
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                {featuredPost.excerpt}
              </p>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#185FA5] text-xs font-semibold text-white">
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
                <span className="inline-flex items-center gap-1.5 rounded-md bg-[#E24B4A] px-4 py-2 text-sm font-semibold text-white transition-colors group-hover:bg-[#A32D2D]">
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
                </span>
              </div>
            </div>
          </a>
        )}

        {/* ── Section label ── */}
        <div className="mb-6 flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#185FA5]">
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
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#185FA5]/10"
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
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#185FA5] text-[10px] font-semibold text-white">
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
          <button className="inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-[#185FA5] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#0C447C] sm:w-fit">
            View all posts
          </button>
        </div>

      </div>
    </section>
  );
}