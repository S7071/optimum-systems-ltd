/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";

// ─── Component ────────────────────────────────────────────────────────────────

export default function HelpCenterButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(t);
  }, []);

  const handleScroll = useCallback(() => {
    const scrolledFromTop = window.scrollY + window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;
    setIsVisible(totalHeight - scrolledFromTop > 200);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const shouldRender = mounted && isVisible;

  return (
    <div className="fixed top-[50%] bottom-[50%] -right-8 z-[9999] w-fit h-14 rotate-270">
      <button
        ref={buttonRef}
        className={[
          "w-28 h-full rounded-sm border-0 cursor-pointer",
          "flex items-center justify-center text-white relative",
          "bg-[linear-gradient(145deg,#e53935,#c62828)]",
          "transition-[transform,box-shadow,opacity] duration-300",
          "hover:scale-[1.08] hover:-translate-y-px",
          "hover:shadow-[0_12px_32px_rgba(229,57,53,0.45),0_4px_12px_rgba(0,0,0,0.15)]",
          "active:scale-[0.96]",
          shouldRender
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-90 pointer-events-none",
        ].join(" ")}
        style={{ transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)" }}
        onClick={() => {
          router.push("https://support.optimumsystems.co.ke/");
        }}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close help desk" : "Open help desk"}
      >
        {/* Headset icon — shown when closed */}
        <span
          className={[
            "absolute transition-all duration-200 w-fit line-clamp",
            isOpen
              ? "opacity-0 scale-[0.7] -rotate-45"
              : "opacity-100 scale-100 rotate-0",
          ].join(" ")}
          aria-hidden
        >
          Help Desk
        </span>
      </button>
    </div>
  );
}
