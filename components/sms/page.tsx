"use client";

import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileBarChart2,
  Landmark,
  Layers3,
  Lock,
  Phone,
  Mail,
  Globe,
  MapPin,
  Network,
  ShieldCheck,
  Users,
  Workflow,
  BarChart3,
  ArrowRight,
  Play,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { BadgePill } from "../ui/badge-pill";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

type CardItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const complianceItems: CardItem[] = [
  {
    title: "Security Governance",
    description:
      "Supports structured security workflows, layered controls, and accountable operations across facilities.",
    icon: BadgeCheck,
  },
  {
    title: "Information Security Standards",
    description:
      "Reflects Optimum’s Category 1 information security expertise with controlled, audit-ready protection practices.",
    icon: Landmark,
  },
  {
    title: "Access Control Policies",
    description:
      "Enables biometric authentication, role-based permissions, and controlled entry across secure zones.",
    icon: ClipboardCheck,
  },
  {
    title: "ERP & HR Integration",
    description:
      "Connects security operations with institutional records, staffing workflows, and access eligibility rules.",
    icon: Network,
  },
  {
    title: "Data Protection",
    description:
      "Supports secure data handling, incident traceability, and alignment with Kenya’s Data Protection requirements.",
    icon: ShieldCheck,
  },
];

const featureItems: CardItem[] = [
  {
    title: "Biometric Access Control",
    description:
      "Manage secure entry using fingerprint or biometric authentication with role, time, and zone-based permissions.",
    icon: Layers3,
  },
  {
    title: "Digital Visitor Management",
    description:
      "Register, screen, and track visitors digitally for faster approvals, better visibility, and cleaner audit trails.",
    icon: ClipboardCheck,
  },
  {
    title: "CCTV & Surveillance Integration",
    description:
      "Connect surveillance visibility with access events and incidents for faster monitoring and coordinated response.",
    icon: BarChart3,
  },
  {
    title: "Incident & Case Management",
    description:
      "Capture incidents, investigations, actions, and evidence in one structured security workflow.",
    icon: FileBarChart2,
  },
  {
    title: "Gate & Vehicle Control",
    description:
      "Coordinate vehicle entry, gate operations, and perimeter checkpoints from one connected control layer.",
    icon: Building2,
  },
  {
    title: "Guard Patrol Tracking",
    description:
      "Monitor patrol activity, assigned rounds, and accountability for field security teams in real time.",
    icon: Lock,
  },
  {
    title: "ERP & HR Integration",
    description:
      "Integrate with ERP and HR records to enforce eligibility rules and streamline enterprise security governance.",
    icon: Database,
  },
  {
    title: "Executive Dashboards & Analytics",
    description:
      "Give leadership live visibility into incidents, access trends, patrol status, and overall risk exposure.",
    icon: Users,
  },
];

const PLATFORM_FEATURES = [
  "Biometric Access Control",
  "Visitor Management",
  "CCTV Integration",
  "Incident Tracking",
  "Executive Dashboards",
];

const viewport = { once: true, amount: 0.2 };

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.04,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 18 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function FeatureCard({ item }: { item: CardItem }) {
  const Icon = item.icon;

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-primary-cbe-300 hover:shadow-md"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a1b55] to-[#1f3f98] text-white transition duration-300 group-hover:scale-105">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-md font-semibold text-primary-cbe-500">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        {item.description}
      </p>
    </motion.div>
  );
}

function ComplianceCard({ item }: { item: CardItem }) {
  const Icon = item.icon;

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:border-[#1f3f98]/20 hover:shadow-md"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 transition duration-300 group-hover:bg-red-600 group-hover:text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-md font-semibold text-primary-cbe-500">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        {item.description}
      </p>
    </motion.div>
  );
}

interface CardProp {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  featured: boolean;
}

function Card(prop: CardProp) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={[
        "relative flex flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-200 shadow-sm",
        prop.featured
          ? "bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 border-primary-cbe-500"
          : "bg-white border-primary-cbe-50 hover:border-primary-cbe-100 hover:shadow-md",
      ].join(" ")}
    >
      <div
        className={[
          "pointer-events-none absolute top-0 right-0 h-20 w-20 rounded-bl-full",
          prop.featured ? "bg-white/10" : "bg-primary-cbe-50",
        ].join(" ")}
      />

      <div
        className={[
          "relative z-10 mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[13px] flex-shrink-0",
          prop.featured ? "bg-white/20" : "bg-primary-cbe-50",
        ].join(" ")}
      >
        <prop.icon
          size={24}
          className={prop.featured ? "text-white" : "text-primary-cbe-400"}
        />
      </div>

      <h3
        className={[
          "mb-2.5 text-base font-bold leading-snug",
          prop.featured ? "text-white" : "text-primary-cbe-500",
        ].join(" ")}
      >
        {prop.title}
      </h3>

      <p
        className={[
          "mb-[22px] flex-1 text-sm leading-relaxed",
          prop.featured ? "text-white/75" : "text-[#5a6a7e]",
        ].join(" ")}
      >
        {prop.description}
      </p>

      <span
        className={[
          "inline-flex cursor-pointer items-center gap-2 text-[11px] font-bold uppercase tracking-[1px]",
          prop.featured
            ? "text-white/90 hover:text-white"
            : "text-primary-cta/90 hover:text-primary-cta",
        ].join(" ")}
      >
        {prop.cta}
        <ArrowRight size={16} />
      </span>
    </motion.div>
  );
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const frac = rating - full;
  const empty = 5 - Math.ceil(rating);

  return (
    <span
      className="inline-flex items-center gap-px"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: full }).map((_, i) => (
        <svg
          key={`f${i}`}
          className="size-3"
          viewBox="0 0 10 10"
          fill="#F5A623"
        >
          <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.436.59 3.439L7 8.885l-3.09 1.625L4.5 7.07 2 4.635l3.455-.505L7 1z" />
        </svg>
      ))}
      {frac > 0 && (
        <span className="relative inline-flex">
          <svg className="size-3" viewBox="0 0 10 10" fill="#E0E0E0">
            <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.436.59 3.439L7 8.885l-3.09 1.625L4.5 7.07 2 4.635l3.455-.505L7 1z" />
          </svg>
          <span
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${frac * 100}%` }}
          >
            <svg className="size-3" viewBox="0 0 10 10" fill="#F5A623">
              <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.436.59 3.439L7 8.885l-3.09 1.625L4.5 7.07 2 4.635l3.455-.505L7 1z" />
            </svg>
          </span>
        </span>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <svg
          key={`e${i}`}
          className="size-3"
          viewBox="0 0 10 10"
          fill="#E0E0E0"
        >
          <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.436.59 3.439L7 8.885l-3.09 1.625L4.5 7.07 2 4.635l3.455-.505L7 1z" />
        </svg>
      ))}
    </span>
  );
}

export default function SecurityManagementSystemPage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <main className="w-full bg-white text-primary-cbe-500">
      <section
        className="relative flex w-full flex-col overflow-hidden bg-primary-cbe-50"
        id="sms-hero"
      >
        <div className="grid min-h-[calc(100vh-64px)] grid-cols-1 md:grid-cols-2 md:max-h-[760px]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="relative z-10 flex flex-col justify-center gap-7 px-6 py-16 lg:px-30"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-3"
            >
              <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-lg border border-primary-cbe-100 bg-background p-1.5">
                <Image
                  src="/logos/ultimate-icon.svg"
                  alt="Security Management System"
                  width={12}
                  height={12}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-cbe-800">
                <span className="font-extrabold text-primary-cta">
                  Ultimate
                </span>{" "}
                SECURITY MANAGEMENT SYSTEM
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold leading-[1.18] tracking-[-1px] text-primary-cbe-500 lg:text-5xl xl:text-6xl"
            >
              Unified Security for{" "}
              <span className="font-bold text-primary-cta">
                Safer Operations
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-[340px] text-base leading-relaxed text-slate-600 sm:max-w-[440px]"
            >
              Centralize physical and digital protection with SMS — an
              enterprise-grade platform for{" "}
              <strong className="font-semibold text-primary-cbe-500">
                biometric access control
              </strong>
              , visitor oversight, CCTV integration, and{" "}
              <strong className="font-semibold text-primary-cbe-500">
                incident response visibility
              </strong>
              . Built for modern, high-accountability environments.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3"
            >
              <Button
                variant="default"
                onClick={() => {
                  router.push("/security-management-system/schedule-demo");
                }}
              >
                Book a Demo
                <ArrowRight className="size-4" />
              </Button>

              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="hidden sm:inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:border-slate-400 hover:bg-slate-50"
                  >
                    <span className="flex size-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-cbe-800">
                      <Play size={4} fill="white" color="white" />
                    </span>
                    Watch Overview
                  </Button>
                </DialogTrigger>
                <DialogTitle className="sr-only">
                  SMS Product Overview Demo
                </DialogTitle>
                <DialogContent className="max-w-4xl overflow-hidden p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      className="h-full w-full"
                      src="https://www.youtube.com/embed/Da1hUqzoiAo?autoplay=1"
                      title="SMS Product Overview Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 pt-1"
            >
              <StarRating rating={4.6} />
              <span className="text-[13px] text-slate-600">
                <strong className="font-medium text-primary-cbe-500">
                  Enterprise-grade
                </strong>{" "}
                · built for campuses, plants, offices, estates, and other
                multi-site facilities
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeRight}
            className="relative hidden overflow-hidden md:block"
          >
            <Image
              src="/images/cbe/hero.jpg"
              alt="Security operations overview"
              fill
              className="z-[1] object-cover object-center"
              priority
            />

            <div
              className="pointer-events-none absolute inset-0 z-[2]"
              style={{
                background: `
                  linear-gradient(to right, rgba(0, 0, 0, 0.1) 0%, transparent 25%),
                  linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, transparent 55%)
                `,
              }}
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
              className="absolute right-8 top-8 z-10 flex items-center gap-2 rounded-full bg-primary-cbe-800 px-3.5 py-1.5 text-sm font-bold uppercase tracking-widest text-white"
            >
              <CheckCircle2 className="size-3" />
              Multi-Layer Security
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.55, ease: "easeOut" }}
              className="absolute bottom-10 left-6 z-10 flex min-w-[230px] items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-[0_8px_32px_rgba(11,61,145,0.15),0_2px_8px_rgba(0,0,0,0.06)]"
            >
              <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#E8F0FC]">
                <CheckCircle2 className="size-5 text-primary-cbe-800" />
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight text-slate-800">
                  Biometric control enabled
                </p>
                <p className="mt-0.5 text-sm text-slate-400">
                  Access, visitors, and incidents in one flow
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="relative z-20 flex flex-wrap items-center gap-6 bg-primary-cbe-500 px-6 py-4 sm:px-10 lg:px-16"
        >
          <motion.span
            variants={fadeUp}
            className="whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-white/80"
          >
            Platform includes:
          </motion.span>

          <div className="flex flex-wrap items-center gap-3">
            {PLATFORM_FEATURES.map((feature) => (
              <motion.span
                key={feature}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="flex whitespace-nowrap items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3.5 py-1 text-sm text-white/80"
              >
                <span className="size-1.5 flex-shrink-0 rounded-full bg-[#7AAFF5]" />
                {feature}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={staggerContainer}
        className="w-full px-6 py-20 sm:px-16 lg:px-30"
        id="product-overview"
      >
        <div className="grid items-start gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div variants={fadeLeft}>
            <div className="mx-auto max-w-3xl text-left">
              <motion.div variants={fadeUp}>
                <BadgePill label="Platform overview" centered={false} />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-primary-cbe-500 sm:text-4xl"
              >
                What is the <span className="text-primary-cta">Security</span>{" "}
                Management System?
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-4 text-base leading-7 text-slate-600 sm:text-lg"
              >
                An enterprise-grade security intelligence platform that
                centralizes physical access, visitor control, surveillance
                coordination, incidents, and emergency response across one
                organization.
              </motion.p>
            </div>

            <motion.div
              variants={staggerContainer}
              className="mt-8 space-y-5 text-md leading-8 text-slate-600"
            >
              <motion.p variants={fadeUp}>
                The platform is purpose-built for organizations that need
                tighter perimeter safety, faster incident response, stronger
                accountability, and better visibility across physical and
                digital security layers.
              </motion.p>
              <motion.p variants={fadeUp}>
                It replaces manual logs and isolated tools with one connected
                command layer for access governance, patrol tracking, visitor
                management, incidents, alerts, and executive oversight.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="mt-8 flex flex-wrap gap-3 text-xs font-medium text-slate-600 sm:text-sm"
            >
              {[
                "Universities",
                "Manufacturing Plants",
                "Corporate Offices",
              ].map((pathway) => (
                <motion.span
                  key={pathway}
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.18 }}
                  className="rounded-full border border-primary-cbe-100 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm"
                >
                  {pathway}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid gap-5 sm:grid-cols-2"
          >
            <motion.div
              variants={popIn}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.22 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a1b55] text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary-cbe-500">
                Centralized Security Operations
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Unifies access control, visitors, patrols, incidents, and alerts
                inside one operational view.
              </p>
            </motion.div>

            <motion.div
              variants={popIn}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.22 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white">
                <Layers3 className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary-cbe-500">
                Layered Protection & Intelligence
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Combines biometric access, CCTV visibility, gate control, and
                analytics for proactive risk management.
              </p>
            </motion.div>

            <motion.div
              variants={popIn}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.22 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-primary-cbe-500">
                    Built for high-accountability environments
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                    SMS helps replace fragmented security processes with a
                    single, accountable platform built for campuses, plants,
                    offices, hospitals, estates, and other multi-site
                    operations.
                  </p>
                </div>

                <div className="grid shrink-0 grid-cols-2 gap-3">
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.18 }}
                    className="rounded-xl bg-slate-50 px-4 py-3 text-center"
                  >
                    <div className="text-sm font-extrabold text-primary-cbe-500 uppercase">
                      Live
                    </div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary-cbe-400">
                      visibility
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.18 }}
                    className="rounded-xl bg-slate-50 px-4 py-3 text-center"
                  >
                    <div className="text-sm font-extrabold text-primary-cbe-500 uppercase">
                      ERP
                    </div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary-cbe-400">
                      connected
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={staggerContainer}
        className="w-full overflow-hidden bg-background bg-[url('/patterns/content-pattern.png')] bg-cover-top bg-no-repeat"
        id="why-sms"
      >
        <motion.div
          variants={staggerContainer}
          className="hidden sm:flex flex-col items-center gap-3 px-6 pt-16 text-center sm:px-30 sm:pt-32"
        >
          <motion.div variants={fadeUp}>
            <BadgePill label="Why SMS" centered={true} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-primary-cbe-500 sm:text-4xl"
          >
            A Platform Designed for Standards, <br />
            Structure, and <span className="text-primary-cta">Visibility.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-[600px] text-md leading-[1.7] text-primary-cbe-800/60 line-clamp-3"
          >
            SMS combines access governance, visitor oversight, incident
            response, and real-time executive visibility in one connected
            security platform.
          </motion.p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          className="sm:hidden flex flex-col items-start gap-3 px-6 pt-16 text-left sm:px-30 sm:pt-32"
        >
          <motion.div variants={fadeUp}>
            <BadgePill label="Why SMS" centered={false} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-primary-cbe-500 sm:text-4xl"
          >
            A Platform Designed for Standards, Structure, and{" "}
            <span className="text-primary-cta">Visibility.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-[600px] text-md leading-[1.7] text-primary-cbe-800/60 line-clamp-10"
          >
            SMS combines access governance, visitor oversight, incident
            response, and real-time executive visibility in one connected
            security platform.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid w-full grid-cols-1 gap-5 bg-gradient-to-t from-background via-background to-transparent px-6 py-10 sm:px-30 sm:py-16 md:grid-cols-2 lg:grid-cols-3"
        >
          {[
            {
              title: "Built for Enterprise Security",
              description:
                "Centralizes physical and digital protection across one organization instead of relying on disconnected tools and manual logs.",
              icon: ShieldCheck,
              cta: "Secure Sites",
              featured: false,
            },
            {
              title: "Biometric & Access Governance",
              description:
                "Strengthens perimeter safety with biometric control, role-based permissions, and more accountable access enforcement.",
              icon: CheckCircle2,
              cta: "Live Insights",
              featured: true,
            },
            {
              title: "Coordinated Incident Response",
              description:
                "Tracks incidents, cases, emergency alerts, and follow-up actions in one connected operational workflow.",
              icon: Workflow,
              cta: "View Response",
              featured: false,
            },
            {
              title: "Visitor, Gate & Vehicle Control",
              description:
                "Digitizes visitor approvals, gate operations, and vehicle movement for tighter checkpoint governance.",
              icon: Layers3,
              cta: "Manage Access",
              featured: false,
            },
            {
              title: "Reduced Risk & Liability",
              description:
                "Improves accountability, compliance, and evidence tracking to help reduce exposure across facilities.",
              icon: FileBarChart2,
              cta: "View Controls",
              featured: false,
            },
            {
              title: "Executive Security Visibility",
              description:
                "Provides leadership with real-time dashboards for access events, incidents, patrols, and emerging security trends.",
              icon: BarChart3,
              cta: "All Features",
              featured: false,
            },
          ].map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={staggerContainer}
        id="product-features"
        className="w-full px-6 py-20 sm:px-15 lg:px-30"
      >
        <motion.div
          variants={staggerContainer}
          className="hidden sm:flex flex-col items-center gap-3 px-6 pt-16 text-center sm:px-30 sm:pt-32"
        >
          <motion.div variants={fadeUp}>
            <BadgePill label="Key features" centered={true} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-primary-cbe-500 sm:text-4xl"
          >
            Everything Needed to Run Modern <br />
            <span className="text-primary-cta">Security Operations.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-[600px] text-md leading-[1.7] text-primary-cbe-800/60 line-clamp-3"
          >
            From biometric access and visitor control to patrols, incidents,
            emergency alerts, and executive dashboards, SMS centralizes the
            security operations stack.
          </motion.p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          className="sm:hidden flex flex-col items-start text-left gap-3 px-0 pt-12 sm:px-30 sm:pt-32"
        >
          <motion.div variants={fadeUp}>
            <BadgePill label="Key features" centered={false} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-primary-cbe-500 sm:text-4xl"
          >
            Everything Needed to Run Modern{" "}
            <span className="text-primary-cta">Security Operations.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-[600px] text-md leading-[1.7] text-primary-cbe-800/60 line-clamp-10"
          >
            From biometric access and visitor control to patrols, incidents,
            emergency alerts, and executive dashboards, SMS centralizes the
            security operations stack.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {featureItems.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={staggerContainer}
        className="bg-[#f8fafc]"
        id="product-accreditation"
      >
        <div className="w-full px-6 py-20 sm:px-15 lg:px-30">
          <div className="grid items-start gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <motion.div variants={fadeLeft}>
              <div className="flex items-start justify-start gap-3 text-left">
                <div className="flex flex-col items-start gap-3">
                  <motion.div variants={fadeUp}>
                    <BadgePill
                      label="Accreditation & compliance"
                      centered={false}
                    />
                  </motion.div>
                  <motion.h2
                    variants={fadeUp}
                    className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-primary-cbe-500 sm:text-4xl"
                  >
                    Designed for Secure, Accountable, and{" "}
                    <span className="text-primary-cta">
                      Audit-Ready Operations.
                    </span>
                  </motion.h2>
                  <motion.p
                    variants={fadeUp}
                    className="mx-auto max-w-[600px] text-md leading-[1.7] text-primary-cbe-800/60 line-clamp-10"
                  >
                    SMS reflects Optimum’s broader emphasis on controlled
                    access, audit trails, information security, and data
                    protection aligned to Kenyan operational requirements.
                  </motion.p>
                </div>
              </div>

              <motion.div
                variants={popIn}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22 }}
                className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.25)]"
              >
                <ul className="space-y-4 text-sm leading-6 text-slate-600">
                  {[
                    "ICT Authority Category 1 Systems & Applications expertise",
                    "ICT Authority Category 1 Information Security expertise",
                    "Data Protection Act (Kenya) alignment",
                    "Role-based access, audit trails, and secure logs",
                    "ERP, HR, and access control integration readiness",
                  ].map((item) => (
                    <motion.li
                      key={item}
                      variants={fadeUp}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3"
            >
              {complianceItems.map((item) => (
                <ComplianceCard key={item.title} item={item} />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={staggerContainer}
        id="product-demo"
        className="relative isolate w-full overflow-hidden px-6 py-20 sm:px-16 lg:px-30 lg:py-28"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-cbe-900 via-primary-cbe-700 to-primary-cbe-500" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.18),transparent_24%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <motion.div variants={fadeLeft} className="flex flex-col gap-6">
              <motion.div variants={fadeUp}>
                <BadgePill label="Demo Preview" centered={false} />
              </motion.div>

              <motion.div variants={staggerContainer} className="space-y-4">
                <motion.h2
                  variants={fadeUp}
                  className="text-xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl"
                >
                  Transform Security Operations
                  <br />
                  with <span className="text-primary-cta">SMS</span>
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  className="max-w-xl text-md leading-8 text-white/72"
                >
                  Centralize physical and digital protection with one enterprise
                  security platform built for biometric access control, visitor
                  management, CCTV coordination, incident response, patrol
                  oversight, and real-time executive visibility.
                </motion.p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid gap-3 sm:grid-cols-2"
              >
                {[
                  "Biometric Access Control",
                  "Incident & Case Management",
                  "Visitor & Gate Control",
                  "Real-Time Executive Dashboards",
                ].map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.18 }}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white/85 backdrop-blur-sm transition duration-300 hover:bg-white/12"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-cta/12 text-primary-cta">
                      <CheckCircle2 className="h-6 w-6" />
                    </span>
                    <span className="leading-6">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center sm:gap-4 gap-2 pt-2"
              >
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => {
                    router.push("/security-management-system/schedule-demo");
                  }}
                  className="shadow-sm"
                >
                  Request a Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/15 bg-white/8 text-white backdrop-blur-sm hover:bg-white/12 hover:text-white"
                    >
                      Watch Overview
                      <Play className="h-3.5 w-3.5 fill-white" />
                    </Button>
                  </DialogTrigger>
                  <DialogTitle className="sr-only">
                    SMS Product Overview
                  </DialogTitle>
                  <DialogContent className="max-w-4xl overflow-hidden p-0">
                    <div className="aspect-video w-full">
                      <iframe
                        className="h-full w-full"
                        src="https://www.youtube.com/embed/Da1hUqzoiAo?autoplay=1"
                        title="SMS Product Overview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="flex flex-wrap gap-3 pt-2"
              >
                {[
                  "Multi-Site Ready",
                  "ERP & HR Integrated",
                  "Audit-Trail Enabled",
                ].map((tag) => (
                  <motion.span
                    key={tag}
                    variants={fadeUp}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.18 }}
                    className="rounded-full border border-primary-cbe-100/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              className="relative mx-auto w-full max-w-[720px]"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-primary-cta/20 blur-3xl"
              />
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-8 bottom-8 h-36 w-36 rounded-full bg-white/12 blur-3xl"
              />

              <motion.div
                variants={popIn}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-3 shadow-[0_40px_120px_-40px_rgba(2,6,23,0.65)] backdrop-blur-md"
              >
                <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/30 p-3">
                  <div className="mb-3 flex items-center justify-between rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        SMS Dashboard Preview
                      </p>
                      <p className="mt-1 text-sm text-white/55">
                        Integrated security visibility for modern facilities
                      </p>
                    </div>
                    <div className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold text-emerald-300 sm:block">
                      Live Overview
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[1.4rem] bg-white">
                    <motion.div
                      initial={{ scale: 1.04 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                    >
                      <Image
                        src="/images/saas/original.png"
                        alt="Security Management System product preview"
                        width={1400}
                        height={900}
                        priority
                        className="h-auto w-full object-cover"
                      />
                    </motion.div>

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-cbe-900/18 via-transparent to-transparent" />
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.45, ease: "easeOut" }}
                  className="absolute bottom-4 left-4 hidden max-w-[280px] rounded-xl border border-white/10 bg-white p-3 shadow-xl lg:block"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-cbe-50 text-primary-cbe-600">
                      <Layers3 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-cbe-500">
                        Access Control
                      </p>
                      <p className="mt-1 text-sm leading-5 text-slate-500">
                        Manage biometric permissions, entry logs, and zone-based
                        approvals from one place.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.32, duration: 0.45, ease: "easeOut" }}
                  className="absolute bottom-4 right-4 hidden max-w-[280px] rounded-xl border border-white/10 bg-white p-3 shadow-xl lg:block"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-cbe-50 text-primary-cbe-600">
                      <ClipboardCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-cbe-500">
                        Incident Response
                      </p>
                      <p className="mt-1 text-sm leading-5 text-slate-500">
                        Track cases, alerts, patrols, and follow-up actions in
                        one coordinated workflow.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="mt-5 grid gap-3 sm:grid-cols-3"
              >
                {[
                  {
                    label: "Response",
                    value: "Faster",
                  },
                  {
                    label: "Control",
                    value: "Layered",
                  },
                  {
                    label: "Visibility",
                    value: "Real-Time",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.18 }}
                    className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-center backdrop-blur-sm"
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary-cbe-200">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={staggerContainer}
        id="contact-us"
        className="w-full px-6 py-20 sm:px-15 lg:px-30"
      >
        <motion.div
          variants={popIn}
          className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-sm"
        >
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              variants={fadeLeft}
              className="flex flex-col justify-between p-6 sm:p-8 lg:p-10"
            >
              <div className="flex flex-1 flex-col justify-start pt-10">
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-primary-cbe-400"
                >
                  Request a demo
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  className="mt-5 max-w-2xl text-xl font-extrabold tracking-tight text-primary-cbe-500 sm:text-4xl"
                >
                  Transform Security Operations with{" "}
                  <span className="text-primary-cta">SMS</span>.
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  className="mt-5 max-w-2xl text-md leading-7 text-slate-600"
                >
                  Replace manual logs and isolated systems with connected,
                  proactive security operations built for modern organizations.
                </motion.p>
              </div>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap sm:gap-4 gap-2"
              >
                <a
                  href="mailto:info@optimumsystems.co.ke"
                  className="inline-flex items-center justify-center rounded-full bg-primary-cta px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-primary-cta-800"
                >
                  Email Us
                </a>
                <a
                  href="tel:+254118859686"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
                >
                  Call for Demo
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              className="border-primary-cbe-500 border-t bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 p-6 text-white sm:p-8 lg:border-l lg:border-t-0 lg:p-10"
            >
              <motion.h3
                variants={fadeUp}
                className="text-md font-semibold sm:text-xl"
              >
                Optimum ERP Systems Ltd.
              </motion.h3>

              <motion.div
                variants={staggerContainer}
                className="mt-8 space-y-5 text-sm text-slate-200"
              >
                {[
                  {
                    icon: Phone,
                    text: "0118 859 686 | 0118 859 685",
                  },
                  {
                    icon: Mail,
                    text: "info@optimumsystems.co.ke",
                  },
                  {
                    icon: Globe,
                    text: "www.optimumsystems.co.ke",
                  },
                  {
                    icon: MapPin,
                    text: "Crown Z Towers, 3rd Floor, Office B3 Eastern Bypass, near KCB Kamakis",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.text}
                    variants={fadeUp}
                    className="flex items-center gap-3"
                  >
                    <div className="rounded-full border border-primary-cta/30 bg-primary-cta/20 p-2">
                      <item.icon className="mt-0.5 h-5 w-5 text-primary-cta" />
                    </div>
                    <span className="whitespace-pre-line line-clamp-2">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-col items-start gap-6 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-primary-cbe-200">
                  Product focus
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Access control",
                    "Incident response",
                    "Visitor management",
                    "Security analytics",
                  ].map((chip) => (
                    <motion.span
                      key={chip}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.18 }}
                      className="rounded-full border border-primary-cbe-100/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-sm"
                    >
                      {chip}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
