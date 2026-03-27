/* eslint-disable @next/next/no-img-element */
"use client";

import BadgePill from "@/components/ui/badge-pill";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin, Github, Dribbble } from "lucide-react";
import { JSX, useState } from "react";

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
  { bg: string; text: string; dot: string }
> = {
  leadership:  { bg: "bg-rose-50",    text: "text-rose-600",    dot: "bg-rose-400"    },
  engineering: { bg: "bg-blue-50",    text: "text-blue-600",    dot: "bg-blue-400"    },
  design:      { bg: "bg-indigo-50",  text: "text-indigo-600",  dot: "bg-indigo-400"  },
  marketing:   { bg: "bg-emerald-50", text: "text-emerald-600", dot: "bg-emerald-400" },
  sales:       { bg: "bg-amber-50",   text: "text-amber-600",   dot: "bg-amber-400"   },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const TEAM: TeamMember[] = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    department: "Leadership",
    initials: "SC",
    avatarSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    avatarGradient: "from-primary-cbe-800 to-primary-cbe-500",
    badgeVariant: "leadership",
    expertise: ["Strategy", "Vision", "Growth"],
    online: true,
    socials: [{ type: "linkedin", href: "#" }, { type: "email", href: "#" }],
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-founder",
    department: "Engineering",
    initials: "MR",
    avatarSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    avatarGradient: "from-[#1A3A6B] to-[#2B6CB0]",
    badgeVariant: "engineering",
    expertise: ["Architecture", "Cloud", "Security"],
    online: true,
    socials: [{ type: "linkedin", href: "#" }, { type: "github", href: "#" }],
  },
  {
    name: "Priya Patel",
    role: "Head of Design",
    department: "Design",
    initials: "PP",
    avatarSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    avatarGradient: "from-[#3B5498] to-[#4460C2]",
    badgeVariant: "design",
    expertise: ["UX/UI", "Systems", "Research"],
    socials: [{ type: "linkedin", href: "#" }, { type: "dribbble", href: "#" }],
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    department: "Engineering",
    initials: "DK",
    avatarSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    avatarGradient: "from-primary-cbe-800 to-[#1A3A6B]",
    badgeVariant: "engineering",
    expertise: ["DevOps", "APIs", "Biometrics"],
    online: true,
    socials: [{ type: "linkedin", href: "#" }, { type: "github", href: "#" }],
  },
  {
    name: "Emma Thompson",
    role: "Head of Marketing",
    department: "Marketing",
    initials: "ET",
    avatarSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    avatarGradient: "from-[#217A4B] to-[#2EA55F]",
    badgeVariant: "marketing",
    expertise: ["Brand", "Campaigns", "Growth"],
    socials: [{ type: "linkedin", href: "#" }, { type: "email", href: "#" }],
  },
  {
    name: "Alex Johnson",
    role: "Head of Sales",
    department: "Sales",
    initials: "AJ",
    avatarSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    avatarGradient: "from-[#B06500] to-[#D4880A]",
    badgeVariant: "sales",
    expertise: ["Enterprise", "Partnerships", "B2B"],
    online: true,
    socials: [{ type: "linkedin", href: "#" }, { type: "email", href: "#" }],
  },
  {
    name: "Priya Patel",
    role: "Head of Design",
    department: "Design",
    initials: "PP",
    avatarSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-7.webp",
    avatarGradient: "from-[#4460C2] to-[#6278D9]",
    badgeVariant: "design",
    expertise: ["Prototyping", "Figma", "Motion"],
    socials: [{ type: "linkedin", href: "#" }, { type: "dribbble", href: "#" }],
  },
  {
    name: "Emma Thompson",
    role: "Head of Marketing",
    department: "Marketing",
    initials: "ET",
    avatarSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-8.webp",
    avatarGradient: "from-[#6B217A] to-[#9B35AD]",
    badgeVariant: "marketing",
    expertise: ["Content", "Analytics", "SEO"],
    socials: [{ type: "linkedin", href: "#" }, { type: "email", href: "#" }],
  },
];

const STATS = [
  { value: "50+",    label: "ICT Experts"   },
  { value: "150+",   label: "Institutions"  },
  { value: "Cat. 1", label: "ICT Authority" },
];

// ─── Social Icons ─────────────────────────────────────────────────────────────

const SOCIAL_ICONS: Record<SocialType, JSX.Element> = {
  linkedin: <Linkedin className="w-3.5 h-3.5" />,
  email:    <Mail     className="w-3.5 h-3.5" />,
  github:   <Github   className="w-3.5 h-3.5" />,
  dribbble: <Dribbble className="w-3.5 h-3.5" />,
};

// ─── Team Card ────────────────────────────────────────────────────────────────

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const badge = BADGE_CONFIG[member.badgeVariant];

  return (
    <div
      style={{ animationDelay: `${index * 0.06}s` }}
      className="animate-fade-up group relative flex flex-col bg-white rounded-2xl border border-slate-100 shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(10,31,68,0.1)] hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden"
    >
      {/* Top hover accent */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#D0232A] to-primary-cbe-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* ── Card body ── */}
      <div className="flex flex-col items-center text-center px-6 pt-8 pb-5 gap-4 flex-1">

        {/* Avatar */}
        <div className="relative shrink-0">
          <div
            className={`w-full h-full aspect-square rounded-full ring-[3px] ring-slate-100 bg-gradient-to-br ${member.avatarGradient} overflow-hidden`}
          >
            <img
              src={member.avatarSrc}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          {member.online && (
            <span className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white" />
          )}
        </div>

        {/* Name & role */}
        <div className="flex flex-col gap-0.5">
          <p className="text-[0.93rem] font-semibold text-slate-800 leading-snug tracking-[-0.01em]">
            {member.name}
          </p>
          <p className="text-[0.75rem] text-slate-400 font-normal">
            {member.role}
          </p>
        </div>

        {/* Department badge — coloured dot + label */}
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.65rem] font-semibold tracking-wide uppercase ${badge.bg} ${badge.text}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${badge.dot} shrink-0`} />
          {member.department}
        </span>

        {/* Expertise pills */}
        <div className="flex flex-wrap justify-center gap-1.5">
          {member.expertise.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-[0.65rem] font-medium bg-slate-50 text-slate-500 border border-slate-100 tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-5 h-px bg-slate-100" />

      {/* Social footer */}
      <div className="flex items-center justify-center gap-2 px-6 py-3.5">
        {member.socials.map(({ type, href }) => (
          <a
            key={type}
            href={href}
            title={type}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 border border-slate-100 hover:text-primary-cbe-500 hover:border-blue-200 hover:bg-blue-50 transition-all duration-150"
          >
            {SOCIAL_ICONS[type]}
          </a>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SiteTeam() {
  const [activeFilter, setActiveFilter] = useState<Department>("All");

  const filtered =
    activeFilter === "All"
      ? TEAM
      : TEAM.filter((m) => m.department === activeFilter);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 0.45s ease both; }
      `}</style>

      <section className="bg-[#F5F7FC] py-24 w-full px-6 sm:px-12 lg:px-16">
        <div className="max-w-[1240px] mx-auto flex flex-col gap-12">

          {/* ── HEADER ── */}
          <div className="flex flex-col items-center text-center gap-4">
            <BadgePill label="Our People" centered />
            <h2 className="text-primary-cbe-500 text-2xl sm:text-4xl font-extrabold leading-tight tracking-tight">
              Meet the <span className="text-primary-cbe-500">Minds Behind</span>
              <br />Optimum ERP
            </h2>
            <p className="max-w-[500px] text-[15px] leading-relaxed text-slate-500">
              A team of 50+ ICT professionals united by a commitment to integrity,
              excellence, and client-centric solutions that drive real ROI.
            </p>
          </div>

          {/* ── FILTER TABS ── */}
          <div className="flex justify-center gap-2 flex-wrap">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveFilter(dept)}
                className={[
                  "px-4 py-1.5 rounded-full border text-[0.78rem] font-medium transition-all duration-200 cursor-pointer",
                  activeFilter === dept
                    ? "bg-primary-cbe-800 border-primary-cbe-800 text-white shadow-sm"
                    : "border-slate-200 text-slate-500 hover:border-blue-300 hover:text-primary-cbe-500 hover:bg-blue-50/60",
                ].join(" ")}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* ── TEAM GRID ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filtered.map((member, i) => (
              <TeamCard key={`${member.name}-${i}`} member={member} index={i} />
            ))}
          </div>

          {/* ── CTA BANNER ── */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 px-10 py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            {/* Glows */}
            <div className="absolute top-[-60px] right-[-60px] w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(34,86,168,0.45)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute bottom-[-70px] left-[18%] w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(208,35,42,0.14)_0%,transparent_70%)] pointer-events-none" />

            {/* Text */}
            <div className="relative z-10 flex flex-col gap-3 flex-1">
              <BadgePill label="Join Our Team" centered={false} />
              <h3 className="text-white text-[clamp(1.4rem,3vw,2rem)] font-extrabold leading-tight tracking-tight">
                Ready to Build the Future<br />with Us?
              </h3>
              <p className="text-white/55 text-sm leading-relaxed max-w-[400px]">
                We&apos;re always looking for talented ICT professionals who share our
                passion for innovation, integrity, and delivering solutions that
                change how institutions operate.
              </p>
              {/* Stats */}
              <div className="flex items-center gap-6 mt-2">
                {STATS.map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-6">
                    {i > 0 && <div className="h-7 w-px bg-white/15" />}
                    <div className="flex flex-col">
                      <span className="text-xl font-extrabold text-white leading-none">
                        {stat.value}
                      </span>
                      <span className="text-[0.65rem] text-white/45 uppercase tracking-widest mt-0.5">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-3 shrink-0">
              <Button variant="default" size="lg" className="gap-2">
                Explore Careers
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white/20 text-white/85 hover:bg-white/10 hover:border-white/40 hover:text-white"
              >
                Contact Us
              </Button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}