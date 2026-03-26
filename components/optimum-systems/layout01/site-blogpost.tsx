"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

const BRAND = {
  blue: "#0A3D8F",
  blueMid: "#1557C0",
  blueLight: "#E8F0FC",
  red: "#D42B2B",
  redHover: "#B71C1C",
} as const;

// ── Sub-components ──────────────────────────────────────────────────────────

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      setProgress((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-50 h-[3px] transition-[width] duration-100"
      style={{ width: `${progress}%`, background: BRAND.red }}
    />
  );
}

function CategoryTag() {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[11px] font-bold tracking-widest uppercase"
      style={{ background: BRAND.blueLight, color: BRAND.blueMid }}
    >
      <span
        className="size-1.5 rounded-full"
        style={{ background: BRAND.blueMid }}
      />
      Engineering · Components
    </span>
  );
}

function AuthorRow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 border-t border-b border-border py-5">
      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
          style={{
            background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.blueMid})`,
          }}
        >
          CT
        </div>
        <div className="flex flex-col items-start">
          <p className="text-sm font-semibold leading-none text-foreground">
            Citizen Reporter
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Citizen Media Group
          </p>
        </div>
      </div>

      <span className="text-border">·</span>

      {/* Date */}
      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <svg
          className="size-3.5 opacity-50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        May 18, 2025
      </div>

      <span className="text-border">·</span>

      {/* Read time */}
      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <svg
          className="size-3.5 opacity-50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        10 min read
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="mx-auto w-full max-w-[56rem] px-4 sm:px-6">
      <div
        className="relative mt-12 flex h-[260px] w-full items-center justify-center overflow-hidden rounded-2xl sm:h-[360px]"
        style={{
          background: `linear-gradient(135deg, ${BRAND.blue} 0%, #1a2e5a 50%, #0d1f3c 100%)`,
        }}
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('https://assets.citizen.digital/131897/conversions/WhatsApp-Image-2024-08-20-at-13.31.54-og_image.webp')]" />
      </div>
    </div>
  );
}

function ShareButton({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      title={title}
      className="flex size-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-[#1557C0] hover:bg-[#E8F0FC] hover:text-[#0A3D8F]"
    >
      {children}
    </a>
  );
}

function TableOfContents({ activeId }: { activeId: string }) {
  const links = [
    { href: "#section-intro", label: "Introduction" },
    { href: "#section-role", label: "The Role of UI Components" },
    { href: "#section-types", label: "Core Types of Components" },
    { href: "#section-end", label: "End Paragraph" },
  ];

  return (
    <aside className="top-24 lg:sticky">
      <p className="mb-4 text-[10.5px] font-bold tracking-widest uppercase text-muted-foreground">
        In this article
      </p>
      <ul className="flex flex-col gap-0.5">
        {links.map(({ href, label }) => {
          const id = href.replace("#", "");
          const isActive = activeId === id;
          return (
            <li key={href}>
              <a
                href={href}
                className="block rounded-r-md border-l-2 py-1.5 pl-3.5 text-[13.5px] leading-snug transition-all duration-150"
                style={
                  isActive
                    ? {
                        borderLeftColor: BRAND.blue,
                        color: BRAND.blue,
                        background: BRAND.blueLight,
                        paddingLeft: "1.125rem",
                        fontWeight: 500,
                      }
                    : {
                        borderLeftColor: "hsl(var(--border))",
                        color: "hsl(var(--muted-foreground))",
                      }
                }
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Share */}
      <div className="mt-9">
        <p className="mb-3 text-[10.5px] font-bold tracking-widest uppercase text-muted-foreground">
          Share
        </p>
        <div className="flex gap-2">
          <ShareButton href="#" title="LinkedIn">
            <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </ShareButton>
          <ShareButton href="#" title="Twitter / X">
            <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </ShareButton>
          <ShareButton href="#" title="Copy link">
            <svg
              className="size-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
            </svg>
          </ShareButton>
        </div>
      </div>
    </aside>
  );
}

function KeyTakeaways() {
  const points = [
    "UI components are foundational, reusable elements in web development that encapsulate both design and behavior to promote consistency and efficiency.",
    "Leveraging component libraries and frameworks streamlines the development process and ensures accessibility and cross-device compatibility.",
    "Understanding different types of UI components enables developers to create structured, scalable, and maintainable user interfaces.",
  ];

  return (
    <div
      className="mb-12 rounded-r-xl py-7 pl-8 pr-7"
      style={{
        background: BRAND.blueLight,
        borderLeft: `4px solid ${BRAND.blue}`,
      }}
    >
      <h3
        className="mb-4 text-[13px] font-bold tracking-widest uppercase"
        style={{ color: BRAND.blue }}
      >
        Key Takeaways
      </h3>
      <ul className="flex flex-col gap-2.5">
        {points.map((point, i) => (
          <li
            key={i}
            className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
          >
            <span
              className="mt-2 size-1.5 shrink-0 rounded-full"
              style={{ background: BRAND.blue }}
            />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 mb-5 pt-14 font-serif text-[1.85rem] leading-[1.2] tracking-tight text-foreground"
      style={{ position: "relative" }}
    >
      <span
        className="absolute top-0 left-0 block h-[3px] w-9 rounded-full"
        style={{ background: BRAND.red }}
      />
      {children}
    </h2>
  );
}

function Pullquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="my-10 rounded-r-xl py-7 pl-8 pr-7"
      style={{
        borderLeft: `4px solid ${BRAND.red}`,
        background: "#fef2f2",
      }}
    >
      <p className="font-serif text-[1.15rem] italic leading-relaxed text-foreground">
        {children}
      </p>
    </blockquote>
  );
}

function TypeGrid() {
  const cards = [
    {
      accent: "red",
      icon: (
        <svg
          className="size-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke={BRAND.red}
          strokeWidth={2}
        >
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M9 12h6M12 9v6" />
        </svg>
      ),
      title: "Input Components",
      desc: "Interactive elements that handle user input, form data collection, and real-time validation feedback.",
    },
    {
      accent: "blue",
      icon: (
        <svg
          className="size-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke={BRAND.blue}
          strokeWidth={2}
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Navigation Components",
      desc: "Guide users through an application — top bars, side menus, breadcrumbs, tabs, and pagination.",
    },
    {
      accent: "red",
      icon: (
        <svg
          className="size-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke={BRAND.red}
          strokeWidth={2}
        >
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 2l-4 5-4-5" />
        </svg>
      ),
      title: "Display Components",
      desc: "Present information in structured, visually clear formats — cards, tables, and badges.",
    },
    {
      accent: "blue",
      icon: (
        <svg
          className="size-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke={BRAND.blue}
          strokeWidth={2}
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
        </svg>
      ),
      title: "Feedback Components",
      desc: "Alert users to events and outcomes — modals, toasts, progress bars, and tooltips.",
    },
  ];

  return (
    <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {cards.map(({ accent, icon, title, desc }) => (
        <div
          key={title}
          className="group rounded-xl border border-border p-5 transition-shadow duration-200 hover:shadow-lg"
          style={{
            ["--hover-border" as string]:
              accent === "red" ? BRAND.red : BRAND.blue,
          }}
        >
          <div
            className="mb-3 flex size-9 items-center justify-center rounded-lg"
            style={{
              background: accent === "red" ? "#fef2f2" : BRAND.blueLight,
            }}
          >
            {icon}
          </div>
          <h4 className="mb-1.5 text-sm font-semibold text-foreground">
            {title}
          </h4>
          <p className="text-[13.5px] leading-relaxed text-muted-foreground">
            {desc}
          </p>
        </div>
      ))}
    </div>
  );
}

function CtaBand() {
  return (
    <div
      className="relative mt-16 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl p-10 sm:flex-row sm:items-center sm:p-12"
      style={{ background: BRAND.blue }}
    >
      {/* Decorative circles */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 size-56 rounded-full"
        style={{ background: "rgba(255,255,255,0.05)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 right-24 size-40 rounded-full"
        style={{ background: "rgba(212,43,43,0.25)" }}
      />

      <div className="relative z-10">
        <h3 className="font-serif text-2xl leading-tight text-white">
          Start building with Optimum components
        </h3>
        <p className="mt-2 text-sm text-white/60">
          Access our full component library and design system documentation.
        </p>
      </div>

      <div className="relative z-10 flex shrink-0 gap-3">
        <a
          href="#"
          className="inline-flex items-center rounded-lg px-5 py-3 text-sm font-medium text-white transition-colors"
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          View Docs
        </a>
        <a
          href="#"
          className="inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold text-white transition-colors hover:opacity-90"
          style={{ background: BRAND.red }}
        >
          Get Access →
        </a>
      </div>
    </div>
  );
}

function RelatedPosts() {
  const posts = [
    {
      bg: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.blueMid})`,
      tag: "Design Systems",
      title: "Tokens & Theming: A Practical Guide",
      meta: "6 min read · Apr 2025",
      icon: (
        <svg
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth={1.5}
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      bg: "linear-gradient(135deg, #1f1f1f, #3a3a3a)",
      tag: "Engineering",
      title: "Accessibility-First Component Architecture",
      meta: "9 min read · Mar 2025",
      icon: (
        <svg
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth={1.5}
        >
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      bg: `linear-gradient(135deg, #7c0000, ${BRAND.red})`,
      tag: "Performance",
      title: "Optimising React Renders at Scale",
      meta: "11 min read · Feb 2025",
      icon: (
        <svg
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth={1.5}
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
  ];

  return (
    <div className="mt-20">
      <div className="mb-6 flex items-center gap-3">
        <span className="text-[11px] font-bold tracking-widest uppercase text-muted-foreground">
          More from the Blog
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {posts.map(({ bg, tag, title, meta, icon }) => (
          <a
            key={title}
            href="#"
            className="block overflow-hidden rounded-xl border border-border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              className="flex h-32 items-center justify-center"
              style={{ background: bg }}
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-white/15">
                {icon}
              </div>
            </div>
            <div className="p-4">
              <p
                className="mb-1.5 text-[10.5px] font-bold tracking-wide uppercase"
                style={{ color: BRAND.blueMid }}
              >
                {tag}
              </p>
              <p className="mb-2.5 text-sm font-semibold leading-snug text-foreground">
                {title}
              </p>
              <p className="text-xs text-muted-foreground">{meta}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function AuthorCard() {
  return (
    <div className="mt-10 rounded-xl bg-muted p-5">
      <div className="flex items-center gap-3">
        <span className="after:border-border group/avatar relative flex size-12 shrink-0 select-none rounded-full after:absolute after:inset-0 after:rounded-full after:border after:mix-blend-darken dark:after:mix-blend-lighten">
          <img
            className="aspect-square size-full rounded-full object-cover"
            alt="Jane Doe"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
          />
        </span>
        <div>
          <p className="text-sm font-semibold text-foreground">Jane Doe</p>
          <p className="text-xs text-muted-foreground">CEO &amp; Cofounder</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        An avid storyteller with a passion for crafting compelling narratives,
        love to explore the human experience through vivid characters and
        thought-provoking themes.
      </p>
      <div className="mt-4 flex items-center gap-2">
        <a
          href="#"
          className="flex size-9 items-center justify-center rounded-md text-primary-foreground transition-opacity hover:opacity-80"
          style={{ background: BRAND.blue }}
        >
          <svg className="size-4 fill-current" viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          href="#"
          className="flex size-9 items-center justify-center rounded-md text-primary-foreground transition-opacity hover:opacity-80"
          style={{ background: BRAND.blue }}
        >
          <svg className="size-4 fill-current" viewBox="0 0 24 24">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

// ── Main Export ──────────────────────────────────────────────────────────────

export default function SiteBlogPost() {
  const [activeId, setActiveId] = useState("section-intro");

  // IntersectionObserver for TOC active state
  const sectionIds = [
    "section-intro",
    "section-role",
    "section-types",
    "section-end",
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-20% 0px -60% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="w-full pb-32 bg-primary-cbe-50">
      {/* Reading progress */}
      <ProgressBar />

      {/* ── Hero header ─────────────────────────────────────── */}
      <div className="bg-muted bg-[url('https://assets.citizen.digital/131897/conversions/WhatsApp-Image-2024-08-20-at-13.31.54-og_image.webp')] bg-cover h-150 relative">
        <div className="absolute bg-[url('https://www.citizen.digital/logo.webp')] bg-cover bg-muted size-15 w-30 top-10 left-10 z-10 rounded-sm"></div>
      </div>
      <div className="container flex flex-col items-center py-10 text-center">
        {/* <CategoryTag /> */}

        <h1 className="mt-6 max-w-screen text-[2.4rem] font-semibold leading-[1.12] tracking-tight md:text-4xl max-w-[70%] line-clamp-2">
          <em className="not-italic" style={{ color: BRAND.blue }}>
            Optimum Computer Systems
          </em>{" "}
          launches AI tool to revolutionize financial reporting
        </h1>

        <div className="mt-8 w-full max-w-[36rem]">
          <AuthorRow />
        </div>
      </div>

      {/* ── Hero image ──────────────────────────────────────── */}
      {/* <HeroImage /> */}

      {/* ── Two-column layout ───────────────────────────────── */}
      <div className="container pt-16">
        <div className="relative mx-auto flex w-full max-w-5xl items-start gap-16 lg:gap-20">
          {/* Sidebar */}
          <div className="hidden w-52 shrink-0 lg:block">
            <TableOfContents activeId={activeId} />
          </div>

          {/* Article body */}
          <article className="min-w-0 flex-1">
            <KeyTakeaways />

            {/* Introduction */}
            <section id="section-intro">
              <p className="text-[17px] leading-[1.78] text-muted-foreground">
                In the evolving landscape of modern web development, UI
                components have emerged as indispensable tools for crafting
                user-friendly interfaces. These components, ranging from simple
                buttons to complex data tables, are the building blocks that
                help shape the overall user experience. By modularizing the
                interface into smaller, manageable pieces, UI components not
                only streamline the development process but also promote
                consistency across an application&apos;s design.
              </p>
            </section>

            {/* Section 1 */}
            <section id="section-role">
              <SectionHeading id="section-role-h">
                The Role of UI Components in Development
              </SectionHeading>

              <p className="text-[17px] leading-[1.78] text-muted-foreground">
                UI components serve as self-contained units of functionality and
                presentation, often designed to be reused across multiple parts
                of an application. By encapsulating both logic and styling,
                components reduce duplication and improve the maintainability of
                codebases. For example, a single button component can be reused
                with different props or styles, ensuring a{" "}
                <strong className="font-semibold text-foreground">
                  uniform look and feel throughout the application.
                </strong>
              </p>

              <Pullquote>
                &quot;The power of components is in their functionality and
                presentation, often designed to be reused across multiple parts
                of an application.&quot;
              </Pullquote>

              <p className="text-[17px] leading-[1.78] text-muted-foreground">
                Popular frameworks like React, Vue, and Angular are built around
                component-based architectures, encouraging developers to think
                in terms of reusable blocks rather than monolithic pages. This
                shift not only enhances scalability but also simplifies testing
                and debugging. Additionally, many UI libraries such as Material
                UI, Chakra UI, and Radix UI provide pre-built, accessible
                components that accelerate development.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section-types">
              <SectionHeading id="section-types-h">
                Core Types of UI Components
              </SectionHeading>

              <TypeGrid />

              <h3 className="mb-3 mt-10 text-xl font-semibold text-foreground">
                1. Input Components
              </h3>
              <p className="text-[17px] leading-[1.78] text-muted-foreground">
                Input components are interactive elements that allow users to
                provide information. These include text inputs, checkboxes,
                radio buttons, sliders, and file upload fields. A well-designed
                input component handles validation, displays feedback, and
                provides a seamless experience across different devices and
                screen readers.
              </p>
              <a
                href="#"
                className="mb-6 inline-block text-sm font-medium transition-opacity hover:opacity-75"
                style={{ color: BRAND.red }}
              >
                Explore more →
              </a>
              <div className="mb-10 w-full overflow-hidden rounded-xl">
                <img
                  alt="Input components illustration"
                  className="size-full object-cover object-center"
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                />
              </div>

              <h3 className="mb-3 mt-10 text-xl font-semibold text-foreground">
                2. Navigation Components
              </h3>
              <p className="text-[17px] leading-[1.78] text-muted-foreground">
                Navigation components guide users through an application&apos;s
                structure. These include elements like top bars, side menus,
                breadcrumbs, tabs, and pagination. Effective navigation improves
                discoverability and helps users find the content they need
                without friction. Good navigation design considers user flow,
                accessibility (such as keyboard navigation and ARIA labels), and
                responsiveness.
              </p>
              <div className="mb-10 w-full overflow-hidden rounded-xl">
                <img
                  alt="Navigation components illustration"
                  className="size-full object-cover object-center"
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                />
              </div>

              <h3 className="mb-3 mt-10 text-xl font-semibold text-foreground">
                3. Feedback Components
              </h3>
              <p className="text-[17px] leading-[1.78] text-muted-foreground">
                Feedback components provide users with visual or textual cues in
                response to their actions. Examples include modals, toast
                notifications, progress bars, and tooltips. These elements
                inform users about the success or failure of their operations or
                alert them to required actions.
              </p>
              <div className="mb-10 w-full overflow-hidden rounded-xl">
                <img
                  alt="Feedback components illustration"
                  className="size-full object-cover object-center"
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                />
              </div>

              <h3 className="mb-3 mt-10 text-xl font-semibold text-foreground">
                4. Layout Components
              </h3>
              <p className="text-[17px] leading-[1.78] text-muted-foreground">
                Layout components organize content visually on the page. Common
                examples include containers, rows, columns, and grid systems.
                These components help define the structure of a page and control
                the spacing, alignment, and responsiveness of child elements.
              </p>
              <div className="mb-10 w-full overflow-hidden rounded-xl">
                <img
                  alt="Layout components illustration"
                  className="size-full object-cover object-center"
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                />
              </div>
            </section>

            {/* Conclusion */}
            <section id="section-end">
              <SectionHeading id="section-end-h">End Paragraph</SectionHeading>
              <p className="text-[17px] leading-[1.78] text-muted-foreground">
                Mastering the use of UI components is a key step toward building
                reliable, scalable, and aesthetically consistent web
                applications. By breaking down interfaces into smaller parts,
                developers can achieve greater flexibility, encourage reuse, and
                reduce the likelihood of errors.
              </p>

              <div
                className="mt-8 rounded-xl p-6"
                style={{ background: "hsl(var(--muted))" }}
              >
                <h2 className="mb-3 font-serif text-2xl font-normal tracking-tight text-foreground">
                  Conclusion
                </h2>
                <p className="text-[16px] leading-relaxed text-muted-foreground">
                  UI components are more than just visual elements — they are
                  strategic assets in a modern developer&apos;s toolkit. When
                  designed thoughtfully and used effectively, they empower teams
                  to deliver high-quality interfaces with speed, consistency,
                  and confidence. As frontend development continues to evolve,
                  investing in reusable, accessible, and well-documented UI
                  components will remain essential.
                </p>
              </div>
            </section>

            {/* CTA band */}
            <CtaBand />

            {/* Author card */}
            <AuthorCard />

            {/* Related posts */}
            <RelatedPosts />
          </article>
        </div>
      </div>
    </section>
  );
}
