/* eslint-disable @next/next/no-img-element */
"use client";

import BadgePill from "@/components/ui/badge-pill";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  Dribbble,
  Sparkles,
} from "lucide-react";
import { JSX, useMemo, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

const DEPARTMENTS = [
  "All",
  "Leadership",
  "Engineering",
  "Design",
  "Marketing",
  "Sales",
] as const;

type Department = (typeof DEPARTMENTS)[number];
type SocialType = "linkedin" | "email" | "github" | "dribbble";

interface TeamMember {
  name: string;
  role: string;
  department: Exclude<Department, "All">;
  initials: string;
  avatarSrc: string;
  avatarGradient: string;
  badgeVariant: "leadership" | "engineering" | "design" | "marketing" | "sales";
  expertise: string[];
  online?: boolean;
  socials: { type: SocialType; href: string }[];
}

// ─── Badge Config ─────────────────────────────────────────────────────────────

const BADGE_CONFIG: Record<
  TeamMember["badgeVariant"],
  {
    bg: string;
    text: string;
    dot: string;
    ring: string;
    soft: string;
  }
> = {
  leadership: {
    bg: "bg-rose-50",
    text: "text-rose-700",
    dot: "bg-rose-500",
    ring: "ring-rose-100",
    soft: "from-rose-500/5 to-transparent",
  },
  engineering: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    dot: "bg-blue-500",
    ring: "ring-blue-100",
    soft: "from-blue-500/5 to-transparent",
  },
  design: {
    bg: "bg-indigo-50",
    text: "text-indigo-700",
    dot: "bg-indigo-500",
    ring: "ring-indigo-100",
    soft: "from-indigo-500/5 to-transparent",
  },
  marketing: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
    ring: "ring-emerald-100",
    soft: "from-emerald-500/5 to-transparent",
  },
  sales: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    dot: "bg-amber-500",
    ring: "ring-amber-100",
    soft: "from-amber-500/5 to-transparent",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const TEAM: TeamMember[] = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    department: "Leadership",
    initials: "SC",
    avatarSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    avatarGradient: "from-primary-cbe-800 to-primary-cbe-500",
    badgeVariant: "leadership",
    expertise: ["Strategy", "Vision", "Growth"],
    online: true,
    socials: [
      { type: "linkedin", href: "#" },
      { type: "email", href: "#" },
    ],
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-founder",
    department: "Engineering",
    initials: "MR",
    avatarSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    avatarGradient: "from-[#1A3A6B] to-[#2B6CB0]",
    badgeVariant: "engineering",
    expertise: ["Architecture", "Cloud", "Security"],
    online: true,
    socials: [
      { type: "linkedin", href: "#" },
      { type: "github", href: "#" },
    ],
  },
  {
    name: "Priya Patel",
    role: "Head of Design",
    department: "Design",
    initials: "PP",
    avatarSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    avatarGradient: "from-[#3B5498] to-[#4460C2]",
    badgeVariant: "design",
    expertise: ["UX/UI", "Systems", "Research"],
    socials: [
      { type: "linkedin", href: "#" },
      { type: "dribbble", href: "#" },
    ],
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    department: "Engineering",
    initials: "DK",
    avatarSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    avatarGradient: "from-primary-cbe-800 to-[#1A3A6B]",
    badgeVariant: "engineering",
    expertise: ["DevOps", "APIs", "Biometrics"],
    online: true,
    socials: [
      { type: "linkedin", href: "#" },
      { type: "github", href: "#" },
    ],
  },
  {
    name: "Emma Thompson",
    role: "Head of Marketing",
    department: "Marketing",
    initials: "ET",
    avatarSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    avatarGradient: "from-[#217A4B] to-[#2EA55F]",
    badgeVariant: "marketing",
    expertise: ["Brand", "Campaigns", "Growth"],
    socials: [
      { type: "linkedin", href: "#" },
      { type: "email", href: "#" },
    ],
  },
  {
    name: "Alex Johnson",
    role: "Head of Sales",
    department: "Sales",
    initials: "AJ",
    avatarSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    avatarGradient: "from-[#B06500] to-[#D4880A]",
    badgeVariant: "sales",
    expertise: ["Enterprise", "Partnerships", "B2B"],
    online: true,
    socials: [
      { type: "linkedin", href: "#" },
      { type: "email", href: "#" },
    ],
  },
  {
    name: "Sophia Turner",
    role: "Product Design Lead",
    department: "Design",
    initials: "ST",
    avatarSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-7.webp",
    avatarGradient: "from-[#4460C2] to-[#6278D9]",
    badgeVariant: "design",
    expertise: ["Prototyping", "Figma", "Motion"],
    socials: [
      { type: "linkedin", href: "#" },
      { type: "dribbble", href: "#" },
    ],
  },
  {
    name: "Daniel Moore",
    role: "Growth Marketing Lead",
    department: "Marketing",
    initials: "DM",
    avatarSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-8.webp",
    avatarGradient: "from-[#6B217A] to-[#9B35AD]",
    badgeVariant: "marketing",
    expertise: ["Content", "Analytics", "SEO"],
    socials: [
      { type: "linkedin", href: "#" },
      { type: "email", href: "#" },
    ],
  },
];

const STATS = [
  { value: "50+", label: "ICT Experts" },
  { value: "150+", label: "Institutions Served" },
  { value: "Cat. 1", label: "ICT Authority Certified" },
];

// ─── Social Icons ─────────────────────────────────────────────────────────────

const SOCIAL_ICONS: Record<SocialType, JSX.Element> = {
  linkedin: <Linkedin className="h-4 w-4" />,
  email: <Mail className="h-4 w-4" />,
  github: <Github className="h-4 w-4" />,
  dribbble: <Dribbble className="h-4 w-4" />,
};

// ─── Team Card ────────────────────────────────────────────────────────────────

function TeamCard({ member }: { member: TeamMember }) {
  const badge = BADGE_CONFIG[member.badgeVariant];

  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-md">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#D0232A] via-primary-cbe-500 to-primary-cbe-800" />
      <div
        className={`absolute inset-0 bg-gradient-to-br ${badge.soft} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative flex h-full flex-col p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="relative">
            <div
              className={`relative h-20 w-20 overflow-hidden rounded-2xl bg-gradient-to-br ${member.avatarGradient} p-[2px] shadow-sm`}
            >
              <div className="h-full w-full overflow-hidden rounded-[14px] bg-white">
                <img
                  src={member.avatarSrc}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {member.online && (
              <span className="absolute -bottom-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-emerald-500">
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            <span className={`h-2 w-2 rounded-full ${badge.dot}`} />
            {member.department}
          </div>
        </div>

        <div className="space-y-2">
          <div>
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-900">
              {member.name}
            </h3>
            <p className="text-sm font-medium text-slate-500">{member.role}</p>
          </div>

          <p className="text-sm leading-6 text-slate-600">
            Experienced in{" "}
            <span className="font-semibold text-slate-800">
              {member.expertise.slice(0, 2).join(" and ")}
            </span>
            , supporting secure and scalable institutional technology delivery.
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {member.expertise.map((tag) => (
            <span
              key={tag}
              className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide ${badge.bg} ${badge.text} ring-1 ${badge.ring}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            {member.socials.map(({ type, href }) => (
              <a
                key={type}
                href={href}
                aria-label={`${member.name} ${type}`}
                title={type}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-cbe-200 hover:bg-primary-cbe-50 hover:text-primary-cbe-600"
              >
                {SOCIAL_ICONS[type]}
              </a>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 transition-colors duration-300 group-hover:text-primary-cbe-600">
            Profile
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </article>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SiteTeam() {
  const [activeFilter, setActiveFilter] = useState<Department>("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return TEAM;
    return TEAM.filter((member) => member.department === activeFilter);
  }, [activeFilter]);

  return (
    <section className="relative isolate overflow-hidden bg-slate-50 px-6 py-24 sm:px-10 lg:px-16 lg:py-28 w-full">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(25,84,166,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(208,35,42,0.06),transparent_28%),linear-gradient(to_bottom,#f8fafc,#f8fafc)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-3xl">
            <BadgePill label="Our People" centered={false} />

            <div className="mt-5 space-y-4">
              <h2 className="max-w-3xl text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
                Meet the team shaping{" "}
                <span className="bg-gradient-to-r from-primary-cbe-700 via-primary-cbe-500 to-[#D0232A] bg-clip-text text-transparent">
                  enterprise transformation
                </span>
              </h2>

              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-[17px]">
                Our multidisciplinary team combines institutional insight,
                engineering depth, and product execution to build dependable ERP
                systems that improve operational performance at scale.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-[0_8px_24px_rgba(2,6,23,0.04)] backdrop-blur"
              >
                <p className="text-2xl font-extrabold tracking-[-0.03em] text-slate-900">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="rounded-[24px] border border-slate-200 bg-white/90 p-3 shadow-[0_10px_30px_rgba(2,6,23,0.04)] backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary-cbe-50 text-primary-cbe-600">
                <Sparkles className="h-4 w-4" />
              </div>
              Explore teams across leadership, product, growth, and engineering
            </div>

            <div className="flex flex-wrap gap-2">
              {DEPARTMENTS.map((dept) => {
                const active = activeFilter === dept;

                return (
                  <button
                    key={dept}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveFilter(dept)}
                    className={[
                      "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300",
                      active
                        ? "bg-primary-cbe-800 text-white shadow-sm"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-primary-cbe-200 hover:bg-primary-cbe-50 hover:text-primary-cbe-700",
                    ].join(" ")}
                  >
                    {dept}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {filtered.map((member, index) => (
            <TeamCard key={`${member.name}-${index}`} member={member} />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 px-6 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,transparent_70%)]" />
          <div className="absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(208,35,42,0.22)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:34px_34px] opacity-[0.08]" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <BadgePill label="Join Our Team" centered={false} />

              <h3 className="mt-5 text-2xl font-extrabold tracking-[-0.03em] text-white sm:text-3xl">
                Build Technology that Powers Institutions with Confidence
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                We are always open to exceptional professionals in software
                engineering, enterprise delivery, product design, and growth.
                Join a team focused on building resilient digital systems with
                measurable impact.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Enterprise Delivery",
                  "Security & Reliability",
                  "Design Excellence",
                  "Institutional Impact",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-white/90 backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button
                variant="default"
                size="lg"
                className="gap-2 border-0 bg-primary-cta text-primary-cbe-50 shadow-sm hover:bg-primary-cta-800"
              >
                Explore Careers
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 text-white hover:border-white/35 hover:bg-white/10 hover:text-white"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
