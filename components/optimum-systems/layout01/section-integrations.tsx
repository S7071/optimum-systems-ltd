/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import BadgePill from "@/components/ui/badge-pill";
import { useEffect, useMemo, useRef, useState } from "react";

type FeatureCard = {
  badge: string;
  title: string;
  description: string;
  delayClass: string;
};


function FeatureCardBlock({
  badge,
  title,
  description,
  mounted,
}: FeatureCard & { mounted: boolean }) {
  return (
    <div
      data-feature-card
      className={[
        "group rounded-2xl border border-[#E0E6F2] bg-white p-6 shadow-sm",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-1 hover:border-[#B5D4F4] hover:shadow-xl hover:shadow-[#1C4AB5]/10",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0 gap-4 flex flex-col",
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      ].join(" ")}
      style={{ transitionDelay: mounted ? undefined : undefined }}
    >
      <div className="flex flex-row gap-3 items-center">
        <img
          src="/logos/icon.svg"
          alt=""
          className="size-15 p-3 bg-primary-cbe-50 rounded-sm"
        />
        <div className="flex flex-col gap-0">
          <span className="mb-3 inline-block rounded bg-[#F0F4FB] px-[7px] py-[3px] text-[9px] font-semibold uppercase tracking-[.14em] text-[#8D9DC0] w-fit">
            {badge}
          </span>
          <h3 className="mb-[7px] text-[14px] font-bold tracking-tight text-[#08152A]">
            {title}
          </h3>
        </div>
      </div>

      <p className="text-[12.5px] font-light leading-relaxed text-[#4B5D80]">
        {description}
      </p>
    </div>
  );
}

export default function IntegrationsSection() {
  const [mounted, setMounted] = useState(false);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const leftCards = useMemo<FeatureCard[]>(
    () => [
      {
        badge: "Oversight",
        title: "Management Dashboard",
        description:
          "Real-time institutional intelligence for leadership — monitor KPIs, enrollment, and financial health from a unified executive view.",
        delayClass: "delay-[150ms]",
      },
      {
        badge: "Governance",
        title: "Qualification Award Board",
        description:
          "Centralized academic governance for qualification approvals, moderation workflows, and compliant award processing.",
        delayClass: "delay-[250ms]",
      },
      {
        badge: "Curriculum",
        title: "Curriculum Management (CBET)",
        description:
          "Automates competency-based education frameworks — managing modularized curricula and TVETA & CDACC compliance.",
        delayClass: "delay-[350ms]",
      },
    ],
    [],
  );

  const rightCards = useMemo<FeatureCard[]>(
    () => [
      {
        badge: "Attendance",
        title: "UltimateBio Biometric Attendance",
        description:
          "Eliminates proxy attendance through fingerprint verification — automating session tracking for students and staff.",
        delayClass: "delay-[150ms]",
      },
      {
        badge: "Security",
        title: "Turnstile Biometric Gate Control",
        description:
          "Full-height anti-tailgating turnstiles with biometric authentication and fee-linked eligibility enforcement.",
        delayClass: "delay-[250ms]",
      },
      {
        badge: "Dining",
        title: "SmartDine Pay-As-You-Eat",
        description:
          "Cashless campus dining powered by M-Pesa wallet integration, biometric authentication, and real-time analytics.",
        delayClass: "delay-[350ms]",
      },
    ],
    [],
  );

  const drawConnections = () => {
    const svg = svgRef.current;
    const grid = gridRef.current;
    const logo = logoRef.current;

    if (!svg || !grid || !logo) return;

    svg.replaceChildren();

    const ns = "http://www.w3.org/2000/svg";
    const defs = document.createElementNS(ns, "defs");

    const gridRect = grid.getBoundingClientRect();
    const logoRect = logo.getBoundingClientRect();

    const cards = Array.from(
      grid.querySelectorAll<HTMLElement>("[data-feature-card]"),
    );

    const logoLeft = logoRect.left - gridRect.left;
    const logoRight = logoRect.right - gridRect.left;
    const logoCenterY = logoRect.top + logoRect.height / 2 - gridRect.top;

    const dashDurations = [3.0, 2.6, 3.4, 2.8, 3.2, 2.5];
    const motionDurations = [3.0, 2.6, 3.4, 2.8, 3.2, 2.5];

    // Top / middle / bottom attachment points on the logo side

    const sourceYOffsets = [-28, 10, 38, -28, 10, 38];

    cards.forEach((card, i) => {
      const cardRect = card.getBoundingClientRect();
      const isLeft = i < 3;
      const isMiddleCard = i === 1 || i === 4;

      const sx = isLeft ? logoLeft : logoRight;
      const sy = logoCenterY + sourceYOffsets[i];

      const ex = isLeft
        ? cardRect.right - gridRect.left
        : cardRect.left - gridRect.left;

      const ey = cardRect.top + cardRect.height / 2 - gridRect.top;

      let d: string;

      if (isMiddleCard) {
        // Straight line for the middle cards
        d = `M ${sx} ${sy} L ${ex} ${ey}`;
      } else {
        // Sharp-corner elbow path for top and bottom cards
        // Bend point is pulled toward the center gap for the circuit-like look
        const bendX = isLeft ? sx + (ex - sx) * 0.08 : sx - (sx - ex) * 0.08;

        d = `M ${sx} ${sy}
           L ${bendX} ${sy}
           L ${bendX} ${ey}
           L ${ex} ${ey}`;
      }

      const pathId = `conn-path-${i}-${Date.now()}`;

      const defPath = document.createElementNS(ns, "path");
      defPath.setAttribute("id", pathId);
      defPath.setAttribute("d", d);
      defPath.setAttribute("fill", "none");
      defs.appendChild(defPath);

      const glow = document.createElementNS(ns, "path");
      glow.setAttribute("d", d);
      glow.setAttribute("fill", "none");
      glow.setAttribute("stroke", "rgba(237, 28, 35, 0.10)");
      glow.setAttribute("stroke-width", "8");
      glow.setAttribute("stroke-linecap", "butt");
      glow.setAttribute("stroke-linejoin", "miter");
      svg.appendChild(glow);

      const line = document.createElementNS(ns, "path");
      line.setAttribute("d", d);
      line.setAttribute("fill", "none");
      line.setAttribute("stroke", "#ed1c24");
      line.setAttribute("stroke-width", "1.2");
      line.setAttribute("stroke-opacity", "0.32");
      line.setAttribute("stroke-linecap", "butt");
      line.setAttribute("stroke-linejoin", "miter");
      line.setAttribute("stroke-dasharray", "5 10");

      const dashAnim = document.createElementNS(ns, "animate");
      dashAnim.setAttribute("attributeName", "stroke-dashoffset");
      dashAnim.setAttribute("from", "10");
      dashAnim.setAttribute("to", "-68");
      dashAnim.setAttribute("dur", `${dashDurations[i]}s`);
      dashAnim.setAttribute("repeatCount", "indefinite");
      line.appendChild(dashAnim);
      svg.appendChild(line);

      const dot = document.createElementNS(ns, "circle");
      dot.setAttribute("r", "4");
      dot.setAttribute("fill", "#ed1c24");
      dot.setAttribute("opacity", "0.92");

      const motion = document.createElementNS(ns, "animateMotion");
      motion.setAttribute("dur", `${motionDurations[i]}s`);
      motion.setAttribute("repeatCount", "indefinite");
      motion.setAttribute("begin", `${i * 0.62}s`);
      motion.setAttribute("calcMode", "spline");
      motion.setAttribute("keyTimes", "0;1");
      motion.setAttribute("keySplines", "0.42 0 0.58 1");

      const mpath = document.createElementNS(ns, "mpath");
      mpath.setAttribute("href", `#${pathId}`);
      mpath.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        `#${pathId}`,
      );

      motion.appendChild(mpath);
      dot.appendChild(motion);
      svg.appendChild(dot);

      const ghost = document.createElementNS(ns, "circle");
      ghost.setAttribute("r", "2.5");
      ghost.setAttribute("fill", "#ed1c24");
      ghost.setAttribute("opacity", "0.48");

      const ghostMotion = document.createElementNS(ns, "animateMotion");
      ghostMotion.setAttribute("dur", `${motionDurations[i]}s`);
      ghostMotion.setAttribute("repeatCount", "indefinite");
      ghostMotion.setAttribute("begin", `${i * 0.62 + 0.18}s`);
      ghostMotion.setAttribute("calcMode", "spline");
      ghostMotion.setAttribute("keyTimes", "0;1");
      ghostMotion.setAttribute("keySplines", "0.42 0 0.58 1");

      const ghostMpath = document.createElementNS(ns, "mpath");
      ghostMpath.setAttribute("href", `#${pathId}`);
      ghostMpath.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        `#${pathId}`,
      );

      ghostMotion.appendChild(ghostMpath);
      ghost.appendChild(ghostMotion);
      svg.appendChild(ghost);

      const ping = document.createElementNS(ns, "circle");
      ping.setAttribute("cx", `${ex}`);
      ping.setAttribute("cy", `${ey}`);
      ping.setAttribute("r", "5");
      ping.setAttribute("fill", "rgba(28,74,181,0.25)");
      ping.setAttribute("class", "animate-ping");
      ping.setAttribute("style", `transform-origin:${ex}px ${ey}px;`);
      svg.appendChild(ping);

      const outer = document.createElementNS(ns, "circle");
      outer.setAttribute("cx", `${ex}`);
      outer.setAttribute("cy", `${ey}`);
      outer.setAttribute("r", "5.5");
      outer.setAttribute("fill", "white");
      outer.setAttribute("stroke", "#ed1c24");
      outer.setAttribute("stroke-width", "1.4");
      outer.setAttribute("opacity", "0.92");
      svg.appendChild(outer);

      const inner = document.createElementNS(ns, "circle");
      inner.setAttribute("cx", `${ex}`);
      inner.setAttribute("cy", `${ey}`);
      inner.setAttribute("r", "2.5");
      inner.setAttribute("fill", "#ed1c24");
      svg.appendChild(inner);

      const origin = document.createElementNS(ns, "circle");
      origin.setAttribute("cx", `${sx}`);
      origin.setAttribute("cy", `${sy}`);
      origin.setAttribute("r", "3");
      origin.setAttribute("fill", "#ed1c24");
      origin.setAttribute("opacity", "0.55");
      svg.appendChild(origin);
    });

    svg.appendChild(defs);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const timeout = window.setTimeout(drawConnections, 80);

    const onResize = () => drawConnections();
    window.addEventListener("resize", onResize);

    const observer = new ResizeObserver(() => drawConnections());
    if (gridRef.current) observer.observe(gridRef.current);

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, [mounted]);

  return (
    <section className="w-full bg-primary-cbe-50 px-6 sm:px-30 py-16 sm:py-32">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="mx-auto mb-14 flex max-w-3xl flex-col items-center gap-4 text-center md:mb-16">
          <BadgePill label="Integrated Solutions" centered={true} />

          <h2 className="mb-4 text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500">
            Unlocking Your Workflow{" "}
            <span className="text-primary-cta">Potential</span>
          </h2>

          <p
            className={[
              "max-w-[500px] text-[14.5px] font-light leading-relaxed text-[#4B5D80] transition-all duration-700 ease-out line-clamp-3",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
          >
            Dolor in dolore duis duis mollit minim consequat officia esse culpa
            laboris amet. Proident pariatur cillum sit adipisicing aliqua. In
            magna pariatur reprehenderit ipsum excepteur id anim veniam labore
            enim voluptate consequat. Duis ea id elit labore dolore. Quis
            cupidatat nisi excepteur ex do commodo incididunt dolor ex excepteur
            dolore commodo occaecat. Irure esse labore est dolor.
          </p>
        </div>

        <div
          ref={gridRef}
          className="relative grid items-center gap-5 lg:grid-cols-[1fr_268px_1fr]"
        >
          <svg
            ref={svgRef}
            className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible lg:block"
            overflow="visible"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col gap-[14px]">
            {leftCards.map((card) => (
              <div key={card.title} className={card.delayClass}>
                <FeatureCardBlock {...card} mounted={mounted} />
              </div>
            ))}
          </div>

          <div className="relative z-10 flex items-center justify-center">
            <div
              ref={logoRef}
              className="relative flex aspect-square w-full max-w-[210px] flex-col items-center justify-center overflow-hidden rounded-full bg-background shadow-sm"
            >
              <img src="/logos/icon.svg" alt="" className="size-30" />
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-[14px]">
            {rightCards.map((card) => (
              <div key={card.title} className={card.delayClass}>
                <FeatureCardBlock {...card} mounted={mounted} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
