/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @next/next/no-img-element */
"use client";

import BadgePill from "@/components/ui/badge-pill";
import { ChevronRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type FeatureCard = {
  badge: string;
  title: string;
  description: string;
  delayClass: string;
  logo: string;
};

type ConnectorPath = {
  id: string;
  d: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  delay: number;
  showStartDot: boolean;
};

function FeatureCardBlock({
  badge,
  title,
  description,
  mounted,
  logo,
  delayClass,
}: FeatureCard & { mounted: boolean }) {
  return (
    <div
      data-feature-card
      className={[
        "group relative overflow-hidden rounded-[28px] border border-primary-cbe-100 bg-background/95 p-6 backdrop-blur-sm",
        "shadow-sm",
        "transition-all duration-700 ease-out",
        "hover:-translate-y-1.5 hover:border-primary-cbe-200 hover:shadow-lg",
        delayClass,
        mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
      ].join(" ")}
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary-cta/35 to-transparent" />
      <div className="absolute bottom-0 left-0 h-20 w-20 rounded-tr-[36px] bg-primary-cta/[0.045]" />

      <div className="relative flex items-start gap-4">
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-primary-cbe-50 bg-background shadow-sm">
          <div className="absolute inset-1 rounded-xl bg-background" />
          <img src={logo} alt="" className="relative h-8 w-8 object-contain" />
        </div>

        <div className="min-w-0 flex-1 flex flex-col gap-2">
          <span className="inline-flex rounded-full border border-primary-cbe-200 bg-primary-cbe-100 px-2.5 py-1 text-[10px] font-semibold uppercase text-primary-cbe-500 w-fit">
            {badge}
          </span>

          <h3 className="text-xs font-semibold leading-6 text-primary-cbe-500 sm:text-sm">
            {title}
          </h3>
        </div>

        <div className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary-cbe-100 bg-background text-primary-cbe-500 transition-all duration-300 group-hover:border-primary-cbe-50 group-hover:bg-white group-hover:shadow-sm">
          <ChevronRight className="h-4 w-4" />
        </div>
      </div>

      <p className="relative mt-5 text-[13.5px] leading-7 text-[#586A8E]">
        {description}
      </p>

      <div className="relative mt-5 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#8A9CC0]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ED1C24]" />
        Connected module
      </div>
    </div>
  );
}

export default function IntegrationsSection() {
  const [mounted, setMounted] = useState(false);
  const [paths, setPaths] = useState<ConnectorPath[]>([]);

  const gridRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const leftCards = useMemo<FeatureCard[]>(
    () => [
      {
        badge: "Oversight",
        title: "Management Dashboard",
        description:
          "Real-time executive visibility across enrollment, finance, operations, and institutional performance from one unified control layer.",
        delayClass: "delay-[80ms]",
        logo: "/logos/ultimate-icon.svg",
      },
      {
        badge: "Governance",
        title: "Qualification Award Board",
        description:
          "Structured academic approval workflows that strengthen moderation, compliance, and qualification governance across the institution.",
        delayClass: "delay-[180ms]",
        logo: "/logos/qabs.svg",
      },
      {
        badge: "Curriculum",
        title: "Curriculum Management (CBET)",
        description:
          "Streamline modular curriculum planning, competency delivery, and TVETA/CDACC-aligned academic administration with greater consistency.",
        delayClass: "delay-[280ms]",
        logo: "/logos/carriculum.svg",
      },
    ],
    [],
  );

  const rightCards = useMemo<FeatureCard[]>(
    () => [
      {
        badge: "Attendance",
        title: "Ultimate Biometric Attendance",
        description:
          "Accurate biometric attendance validation for students and staff with automated session capture and stronger accountability.",
        delayClass: "delay-[120ms]",
        logo: "/logos/ultimate-bio.svg",
      },
      {
        badge: "Security",
        title: "Turnstile Biometric Gate Control",
        description:
          "Secure campus access with anti-tailgating turnstiles, biometric authentication, and fee-linked eligibility enforcement.",
        delayClass: "delay-[220ms]",
        logo: "/logos/turnstile-bio.svg",
      },
      {
        badge: "Dining",
        title: "SmartDine Pay-As-You-Eat",
        description:
          "Cashless dining operations powered by M-Pesa integration, biometric validation, and real-time meal transaction insights.",
        delayClass: "delay-[320ms]",
        logo: "/logos/smart-dine.svg",
      },
    ],
    [],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let raf1 = 0;
    let raf2 = 0;

    const computePaths = () => {
      if (typeof window === "undefined") return;

      const grid = gridRef.current;
      const logo = logoRef.current;

      if (!grid || !logo) return;

      if (window.innerWidth < 1024) {
        setPaths([]);
        return;
      }

      const gridRect = grid.getBoundingClientRect();
      const logoRect = logo.getBoundingClientRect();

      if (!logoRect.width || !logoRect.height) return;

      const logoLeft = logoRect.left - gridRect.left;
      const logoRight = logoRect.right - gridRect.left;
      const logoCenterX = logoRect.left + logoRect.width / 2 - gridRect.left;
      const logoCenterY = logoRect.top + logoRect.height / 2 - gridRect.top;

      const sourceOffsets = [-72, 0, 72, -72, 0, 72];
      const durations = [3.1, 2.7, 3.3, 2.9, 3.2, 2.8];
      const delays = [0, 0.25, 0.5, 0.15, 0.4, 0.65];

      const hiddenStartInset = 54;
      const outerElbowOffset = 16;

      const nextPaths: ConnectorPath[] = [];

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const cardRect = card.getBoundingClientRect();
        const isLeft = index < 3;
        const isMiddle = index === 1 || index === 4;

        const cardEdgeX = isLeft
          ? cardRect.right - gridRect.left
          : cardRect.left - gridRect.left;

        const cardCenterY = cardRect.top + cardRect.height / 2 - gridRect.top;

        const startY = logoCenterY + sourceOffsets[index];
        const endY = isMiddle ? startY : cardCenterY;

        const startX = isMiddle
          ? isLeft
            ? logoLeft
            : logoRight
          : isLeft
            ? logoCenterX - hiddenStartInset
            : logoCenterX + hiddenStartInset;

        const elbowX = isMiddle
          ? cardEdgeX
          : isLeft
            ? logoLeft - outerElbowOffset
            : logoRight + outerElbowOffset;

        const d = isMiddle
          ? `M ${startX} ${startY} L ${cardEdgeX} ${endY}`
          : `M ${startX} ${startY} L ${elbowX} ${startY} L ${elbowX} ${endY} L ${cardEdgeX} ${endY}`;

        nextPaths.push({
          id: `connector-path-${index}`,
          d,
          startX,
          startY,
          endX: cardEdgeX,
          endY,
          duration: durations[index],
          delay: delays[index],
          showStartDot: isMiddle,
        });
      });

      setPaths(nextPaths);
    };

    const scheduleCompute = () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);

      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(computePaths);
      });
    };

    scheduleCompute();

    const observer = new ResizeObserver(() => {
      scheduleCompute();
    });

    if (gridRef.current) observer.observe(gridRef.current);
    if (logoRef.current) observer.observe(logoRef.current);
    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    window.addEventListener("resize", scheduleCompute);

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      observer.disconnect();
      window.removeEventListener("resize", scheduleCompute);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-background px-6 py-20 sm:px-10 lg:px-20 lg:py-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-[-120px] left-0 h-[300px] w-[300px] rounded-full bg-primary-cta/5 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[260px] w-[260px] rounded-full bg-primary-cbe-500/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.5),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-3 items-center">
          <BadgePill label="Integrated Solutions" centered={true} />

          <h3 className="text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500 mb-4">
            Extend Your Workflow{" "}
            <span className="text-primary-cta">Potential</span>
          </h3>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Extend Ultimate ERP with tightly integrated modules for oversight,
            governance, biometric access, attendance, and student services — all
            connected through one institutional ecosystem.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-[#E3EAF6] bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7D90B7] shadow-sm lg:hidden">
            Ultimate ERP System
          </div>
        </div>

        <div
          ref={gridRef}
          className="relative grid items-center gap-6 lg:grid-cols-[1fr_300px_1fr] lg:gap-10 mt-14"
        >
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible lg:block"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="connectorStroke"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#ED1C24" stopOpacity="0.12" />
                <stop offset="50%" stopColor="#ED1C24" stopOpacity="0.34" />
                <stop offset="100%" stopColor="#1C4AB5" stopOpacity="0.16" />
              </linearGradient>

              {paths.map((path) => (
                <path key={path.id} id={path.id} d={path.d} fill="none" />
              ))}
            </defs>

            {paths.map((path) => (
              <g key={`${path.id}-visual`}>
                <path
                  d={path.d}
                  fill="none"
                  stroke="rgba(237,28,36,0.08)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d={path.d}
                  fill="none"
                  stroke="url(#connectorStroke)"
                  strokeWidth="1.5"
                  strokeDasharray="6 9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="84"
                    to="0"
                    dur={`${path.duration}s`}
                    begin={`${path.delay}s`}
                    repeatCount="indefinite"
                  />
                </path>

                {path.showStartDot && (
                  <circle
                    cx={path.startX}
                    cy={path.startY}
                    r="3.5"
                    fill="#ED1C24"
                    opacity="0.5"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.35;0.85;0.35"
                      dur="2.2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}

                <circle
                  cx={path.endX}
                  cy={path.endY}
                  r="5.5"
                  fill="white"
                  stroke="#ED1C24"
                  strokeWidth="1.4"
                  opacity="0.96"
                />

                <circle cx={path.endX} cy={path.endY} r="2.5" fill="#ED1C24">
                  <animate
                    attributeName="opacity"
                    values="0.45;1;0.45"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>

                <circle
                  cx={path.endX}
                  cy={path.endY}
                  r="5"
                  fill="none"
                  stroke="rgba(237,28,36,0.28)"
                  strokeWidth="1"
                >
                  <animate
                    attributeName="r"
                    values="5;11;5"
                    dur="2.4s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.55;0;0.55"
                    dur="2.4s"
                    repeatCount="indefinite"
                  />
                </circle>

                <circle r="4" fill="#ED1C24" opacity="0.95">
                  <animateMotion
                    dur={`${path.duration}s`}
                    begin={`${path.delay}s`}
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath href={`#${path.id}`} />
                  </animateMotion>
                </circle>

                <circle r="2.6" fill="#ED1C24" opacity="0.4">
                  <animateMotion
                    dur={`${path.duration}s`}
                    begin={`${path.delay + 0.18}s`}
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath href={`#${path.id}`} />
                  </animateMotion>
                </circle>
              </g>
            ))}
          </svg>

          <div className="relative z-10 flex flex-col gap-5">
            {leftCards.map((card, index) => (
              <div
                key={card.title}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
              >
                <FeatureCardBlock {...card} mounted={mounted} />
              </div>
            ))}
          </div>

          <div className="relative z-10 hidden items-center justify-center lg:flex">
            <div
              ref={logoRef}
              className={[
                "relative flex h-[240px] w-[240px] items-center justify-center transition-all duration-700",
                mounted ? "scale-100 opacity-100" : "scale-95 opacity-0",
              ].join(" ")}
            >
              <div className="absolute inset-0 rounded-full border border-primary-cta/80 bg-background" />
              <div className="absolute inset-[4%] rounded-full border border-primary-cbe-500/80" />
              <div className="absolute inset-[2%] rounded-full border border-dashed border-primary-cbe-500/60 animate-[spin_18s_linear_infinite]" />
              <div className="absolute inset-[18%] rounded-full border border-white/20 animate-pulse" />

              <div className="relative z-10 flex h-[192px] w-[192px] items-center justify-center rounded-full bg-white">
                <img
                  src="/logos/icon.svg"
                  alt="Optimum integrated solutions"
                  className="h-30 w-30 object-contain"
                />
              </div>

              <div className="absolute -bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full border border-[#E5EBF7] bg-background px-4 py-2 text-center text-[10px] font-bold uppercase tracking-[0.24em] text-primary-cbe-500 shadow-md">
                Ultimate ERP System
              </div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-5">
            {rightCards.map((card, index) => (
              <div
                key={card.title}
                ref={(el) => {
                  cardRefs.current[index + 3] = el;
                }}
              >
                <FeatureCardBlock {...card} mounted={mounted} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
