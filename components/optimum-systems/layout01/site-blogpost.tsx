"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Globe2,
  Layers3,
  Megaphone,
  Palette,
  Rocket,
  Share2,
  Sparkles,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const BRAND = {
  blue: "#0A3D8F",
  blueMid: "#1557C0",
  blueLight: "#E8F0FC",
  red: "#D42B2B",
  redLight: "#FEF2F2",
} as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrollableHeight = el.scrollHeight - el.clientHeight;
      setProgress(scrollableHeight > 0 ? (el.scrollTop / scrollableHeight) * 100 : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-50 h-[3px] transition-[width] duration-100"
      style={{ width: `${progress}%`, background: BRAND.red }}
    />
  );
}

function CategoryTag() {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.22em]"
      style={{ background: BRAND.blueLight, color: BRAND.blueMid }}
    >
      <Sparkles className="size-3.5" />
      Company Update
    </span>
  );
}

function AuthorRow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 border-y border-slate-200 py-5">
      <div className="flex items-center gap-3">
        <div
          className="flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
          style={{
            background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.blueMid})`,
          }}
        >
          OS
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold text-slate-950">Optimum ERP Systems</p>
          <p className="text-xs text-slate-500">Corporate Communications</p>
        </div>
      </div>

      <span className="hidden text-slate-300 sm:block">·</span>

      <div className="flex items-center gap-2 text-sm text-slate-500">
        <CalendarDays className="size-4" />
        April 24, 2026
      </div>

      <span className="hidden text-slate-300 sm:block">·</span>

      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Clock3 className="size-4" />4 min read
      </div>
    </div>
  );
}

function TableOfContents({ activeId }: { activeId: string }) {
  const links = [
    { href: "#section-intro", label: "A new chapter" },
    { href: "#section-why", label: "Why we rebranded" },
    { href: "#section-changed", label: "What has changed" },
    { href: "#section-same", label: "What remains the same" },
    { href: "#section-forward", label: "Looking ahead" },
  ];

  return (
    <aside className="top-24 lg:sticky">
      <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-slate-500">
        In this article
      </p>

      <ul className="flex flex-col gap-1">
        {links.map(({ href, label }) => {
          const id = href.replace("#", "");
          const isActive = activeId === id;

          return (
            <li key={href}>
              <a
                href={href}
                className="block rounded-r-lg border-l-2 py-2 pl-4 text-sm transition-all"
                style={
                  isActive
                    ? {
                        borderLeftColor: BRAND.blue,
                        color: BRAND.blue,
                        background: BRAND.blueLight,
                        fontWeight: 700,
                      }
                    : {
                        borderLeftColor: "#E2E8F0",
                        color: "#64748B",
                      }
                }
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div
          className="mb-3 flex size-10 items-center justify-center rounded-xl"
          style={{ background: BRAND.redLight, color: BRAND.red }}
        >
          <Share2 className="size-5" />
        </div>
        <p className="text-sm font-semibold text-slate-950">Share the update</p>
        <p className="mt-1 text-xs leading-relaxed text-slate-500">
          Help us introduce the refreshed Optimum ERP Systems brand.
        </p>
      </div>
    </aside>
  );
}

function KeyTakeaways() {
  const points = [
    "Optimum ERP Systems has refreshed its website and visual identity.",
    "The rebrand reflects growth, clarity, innovation, and a sharper digital experience.",
    "Our mission remains unchanged: delivering dependable ERP solutions and excellent support.",
  ];

  return (
    <motion.div
      variants={fadeUp}
      className="mb-12 rounded-2xl px-7 py-7"
      style={{
        background: BRAND.blueLight,
        borderLeft: `5px solid ${BRAND.blue}`,
      }}
    >
      <h3 className="mb-4 text-sm font-bold uppercase tracking-widest" style={{ color: BRAND.blue }}>
        Key Takeaways
      </h3>

      <ul className="grid gap-3">
        {points.map((point) => (
          <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-slate-600">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0" style={{ color: BRAND.blue }} />
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 mb-5 pt-14 text-3xl font-semibold tracking-tight text-slate-950"
    >
      <span className="mb-5 block h-1 w-10 rounded-full" style={{ background: BRAND.red }} />
      {children}
    </h2>
  );
}

function Pullquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="my-10 rounded-r-2xl px-8 py-7"
      style={{
        borderLeft: `5px solid ${BRAND.red}`,
        background: BRAND.redLight,
      }}
    >
      <p className="text-xl font-medium leading-relaxed text-slate-950">{children}</p>
    </blockquote>
  );
}

function RebrandHighlights() {
  const cards = [
    {
      icon: Palette,
      title: "A refined identity",
      desc: "A cleaner visual language that reflects the professionalism, trust, and scale behind Optimum ERP Systems.",
    },
    {
      icon: Globe2,
      title: "A better website experience",
      desc: "Clearer navigation, improved product storytelling, and a more polished digital presence for customers and partners.",
    },
    {
      icon: Layers3,
      title: "Stronger product clarity",
      desc: "A sharper way to present our ERP platforms, sector solutions, implementation support, and long-term value.",
    },
    {
      icon: Rocket,
      title: "Built for the next phase",
      desc: "A refreshed brand foundation prepared for growth, innovation, and deeper customer engagement.",
    },
  ];

  return (
    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="my-8 grid gap-4 sm:grid-cols-2">
      {cards.map(({ icon: Icon, title, desc }) => (
        <motion.div
          key={title}
          variants={fadeUp}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            className="mb-4 flex size-11 items-center justify-center rounded-xl"
            style={{ background: BRAND.blueLight, color: BRAND.blue }}
          >
            <Icon className="size-5" />
          </div>
          <h4 className="mb-2 text-base font-semibold text-slate-950">{title}</h4>
          <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

function CtaBand() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative mt-16 overflow-hidden rounded-3xl p-8 sm:p-10"
      style={{ background: `linear-gradient(135deg, ${BRAND.blue}, #071E46)` }}
    >
      <div className="absolute -right-20 -top-20 size-64 rounded-full bg-white/10" />
      <div className="absolute -bottom-24 right-28 size-56 rounded-full bg-red-500/20" />

      <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-white/60">
            Explore the refreshed brand
          </p>
          <h3 className="max-w-xl text-2xl font-semibold leading-tight text-white">
            A new look for the same trusted ERP partner.
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
            Discover how Optimum ERP Systems is presenting its products, services, and customer promise with renewed clarity.
          </p>
        </div>

        <a
          href="#"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          style={{ background: BRAND.red }}
        >
          Visit Website <ArrowRight className="size-4" />
        </a>
      </div>
    </motion.div>
  );
}

function AuthorCard() {
  return (
    <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div
          className="flex size-12 items-center justify-center rounded-2xl text-sm font-bold text-white"
          style={{ background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.red})` }}
        >
          OS
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-950">Optimum ERP Systems</p>
          <p className="text-xs text-slate-500">ERP solutions, digital transformation, and enterprise support.</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        Optimum ERP Systems builds dependable software solutions that help organizations streamline operations, improve visibility, and scale with confidence.
      </p>
    </div>
  );
}

export default function BlogPost() {
  const sectionIds = useMemo(
    () => [
      "section-intro",
      "section-why",
      "section-changed",
      "section-same",
      "section-forward",
    ],
    [],
  );

  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-20% 0px -60% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [sectionIds]);

  return (
    <section className="w-full bg-[#F7FAFF] pb-32">
      <ProgressBar />

      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at top left, ${BRAND.blueLight}, transparent 34%), linear-gradient(135deg, #FFFFFF 0%, #F7FAFF 48%, #EEF5FF 100%)`,
          }}
        />

        <div className="container relative z-10 flex flex-col items-center px-4 py-20 text-center sm:py-24">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <CategoryTag />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-7 max-w-5xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl"
          >
            We&apos;ve Rebranded:{" "}
            <span style={{ color: BRAND.blue }}>A New Look</span>, Same Commitment to Excellence
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600"
          >
            Optimum ERP Systems is evolving with a refreshed company website and brand experience designed to better reflect who we are, what we build, and the value we deliver.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-9 w-full max-w-2xl"
          >
            <AuthorRow />
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="container relative z-10 px-4 pb-16"
        >
          <div
            className="mx-auto grid min-h-[340px] max-w-6xl place-items-center overflow-hidden rounded-[2rem] border border-white/70 p-8 shadow-2xl"
            style={{
              background: `linear-gradient(135deg, ${BRAND.blue} 0%, #082B66 50%, #061B3F 100%)`,
            }}
          >
            <div className="absolute size-[420px] rounded-full bg-white/10 blur-3xl" />
            <div className="relative text-center">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-white/10 text-white">
                <Megaphone className="size-8" />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-white/60">
                Optimum ERP Systems
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Evolving our digital presence for the future of enterprise software.
              </h2>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container px-4 pt-14">
        <div className="relative mx-auto flex w-full max-w-6xl items-start gap-16 lg:gap-20">
          <div className="hidden w-56 shrink-0 lg:block">
            <TableOfContents activeId={activeId} />
          </div>

          <motion.article
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="min-w-0 flex-1"
          >
            <KeyTakeaways />

            <section id="section-intro">
              <motion.p variants={fadeUp} className="text-[17px] leading-[1.85] text-slate-600">
                We are excited to share a new chapter in our company journey: Optimum ERP Systems has rebranded. Our refreshed website and visual identity represent a more modern, confident, and customer-focused expression of the work we have always been committed to delivering.
              </motion.p>

              <Pullquote>
                “Our look has changed, but our commitment remains the same: dependable ERP solutions, excellent service, and long-term value for every customer we serve.”
              </Pullquote>
            </section>

            <section id="section-why">
              <SectionHeading id="section-why-heading">Why we rebranded</SectionHeading>

              <motion.p variants={fadeUp} className="text-[17px] leading-[1.85] text-slate-600">
                As our company continues to grow, our brand needed to grow with us. The rebrand gives Optimum ERP Systems a clearer and more polished digital presence, making it easier for customers, partners, and stakeholders to understand our solutions, our sectors, and our implementation approach.
              </motion.p>

              <motion.p variants={fadeUp} className="mt-5 text-[17px] leading-[1.85] text-slate-600">
                This update is not just about aesthetics. It is about communicating our value with more precision: reliable software, practical business transformation, responsive support, and ERP systems built around real operational needs.
              </motion.p>
            </section>

            <section id="section-changed">
              <SectionHeading id="section-changed-heading">What has changed</SectionHeading>

              <motion.p variants={fadeUp} className="text-[17px] leading-[1.85] text-slate-600">
                Our new website introduces a cleaner layout, stronger product positioning, improved content structure, and a more refined brand identity. The experience is designed to help visitors quickly explore our ERP platforms, understand our capabilities, and connect with the right solution for their organization.
              </motion.p>

              <RebrandHighlights />
            </section>

            <section id="section-same">
              <SectionHeading id="section-same-heading">What remains the same</SectionHeading>

              <motion.p variants={fadeUp} className="text-[17px] leading-[1.85] text-slate-600">
                While our brand has evolved, our core promise has not changed. We remain committed to excellence, customer success, innovation, and dependable delivery. Optimum ERP Systems will continue building solutions that help organizations improve efficiency, strengthen visibility, and make better operational decisions.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="mb-4 text-xl font-semibold text-slate-950">Our continued promise</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Reliable ERP implementation",
                    "Customer-first support",
                    "Practical digital transformation",
                    "Continuous product improvement",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <CheckCircle2 className="size-5 shrink-0" style={{ color: BRAND.red }} />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            <section id="section-forward">
              <SectionHeading id="section-forward-heading">Looking ahead</SectionHeading>

              <motion.p variants={fadeUp} className="text-[17px] leading-[1.85] text-slate-600">
                This rebrand marks an important step forward for Optimum ERP Systems. It gives us a stronger platform to communicate our story, showcase our solutions, and support the next phase of company growth.
              </motion.p>

              <motion.p variants={fadeUp} className="mt-5 text-[17px] leading-[1.85] text-slate-600">
                We are grateful to our customers, partners, and team members who continue to be part of this journey. The future is exciting, and we are ready to move forward with renewed energy, sharper clarity, and the same unwavering commitment to excellence.
              </motion.p>

              <motion.a
                variants={fadeUp}
                href="/"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold transition hover:opacity-75"
                style={{ color: BRAND.red }}
              >
                Visit the refreshed company website <ExternalLink className="size-4" />
              </motion.a>
            </section>

            <CtaBand />
            <AuthorCard />
          </motion.article>
        </div>
      </div>
    </section>
  );
}