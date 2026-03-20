/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface HelpOption {
  icon: React.ReactNode;
  label: string;
  description: string;
  action: () => void;
  color: string;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.07 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
  </svg>
);

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.847L.057 23.985l6.306-1.648A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.031-1.384l-.36-.214-3.742.978.999-3.645-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
  </svg>
);

const HeadsetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
    <path d="M3 18v-6a9 9 0 0118 0v6" />
    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" width={18} height={18}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// ─── Component ────────────────────────────────────────────────────────────────

export default function HelpDeskButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasUnread, setHasUnread] = useState(true);
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
        panelRef.current && !panelRef.current.contains(e.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(e.target as Node)
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

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
    if (hasUnread) setHasUnread(false);
  };

  const helpOptions: HelpOption[] = [
    {
      icon: <PhoneIcon />,
      label: "Call Us",
      description: "+254 723 550 664",
      action: () => { window.location.href = "tel:+254723550664"; },
      color: "#1a237e",
    },
    {
      icon: <WhatsAppIcon />,
      label: "WhatsApp",
      description: "Chat with support",
      action: () => { window.open("https://wa.me/254723550664", "_blank"); },
      color: "#25D366",
    },
    {
      icon: <ChatIcon />,
      label: "Live Chat",
      description: "Avg. response ~2 min",
      action: () => { console.log("Open live chat"); },
      color: "#e53935",
    },
    {
      icon: <EmailIcon />,
      label: "Email Us",
      description: "info@optimumsystems.co.ke",
      action: () => { window.location.href = "mailto:info@optimumsystems.co.ke"; },
      color: "#1a237e",
    },
  ];

  const shouldRender = mounted && isVisible;

  return (
    <>
      <style>{`
        @keyframes hdb-pulse {
          0%, 100% { box-shadow: 0 0 0 2px rgba(74,222,128,0.3); }
          50%       { box-shadow: 0 0 0 5px rgba(74,222,128,0.1); }
        }
        .hdb-pulse-dot { animation: hdb-pulse 2s ease-in-out infinite; }
      `}</style>

      {/*
        ── Root: fixed, sized exactly to the FAB (56×56 = w-14 h-14).
           This is the ONLY element that occupies space on the page.
           The panel floats outside this box via absolute positioning,
           so it can NEVER block clicks on underlying page elements.
      */}
      <div className="fixed bottom-7 right-7 z-[9999] w-14 h-14">

        {/*
          ── Panel: absolutely positioned above the FAB.
             `bottom-[calc(100%+12px)]` places it 12px above the FAB top edge.
             `right-0` aligns it to the right edge of the FAB.
             Because it's `absolute` it has zero effect on page layout.
             `pointer-events-none` + `invisible` when closed = zero hit-testing.
        */}
        <div
          ref={panelRef}
          className={[
            "absolute bottom-[calc(100%+12px)] right-0",
            "w-[300px] bg-white rounded-[20px] overflow-hidden origin-bottom-right",
            "shadow-[0_24px_64px_rgba(0,0,0,0.14),0_4px_16px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)]",
            "transition-[opacity,transform,visibility]",
            isOpen
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto visible"
              : "opacity-0 scale-[0.88] translate-y-3 pointer-events-none invisible",
          ].join(" ")}
          style={{
            transitionDuration: "220ms, 260ms, 0ms",
            transitionTimingFunction:
              "cubic-bezier(0.4,0,0.2,1), cubic-bezier(0.34,1.56,0.64,1), linear",
          }}
          role="dialog"
          aria-modal="false"
          aria-label="Contact support options"
        >
          {/* Header */}
          <div className="relative px-5 pt-5 pb-6 bg-gradient-to-br from-[#1a237e] to-[#283593]">
            <div className="inline-flex items-center gap-1.5 bg-white/15 border border-white/20 rounded-full py-[3px] pr-[10px] pl-[6px] mb-3">
              <span className="hdb-pulse-dot w-[7px] h-[7px] bg-[#4ade80] rounded-full" />
              <span className="text-white/90 text-[11px] font-medium tracking-[0.3px]">
                Support team online
              </span>
            </div>
            <h3 className="text-white text-[17px] font-semibold mb-1 leading-[1.3] m-0">
              How can we help you?
            </h3>
            <p className="text-white/65 text-[12.5px] m-0 leading-[1.5]">
              Our team typically responds within minutes.
            </p>
            <div className="absolute -bottom-px left-0 right-0 h-5 bg-white [clip-path:ellipse(55%_100%_at_50%_100%)]" />
          </div>

          {/* Options */}
          <div className="px-3 pt-2 pb-3 flex flex-col gap-1" role="list">
            {helpOptions.map((opt) => (
              <button
                key={opt.label}
                className={[
                  "group flex items-center gap-3 px-3 py-2.5 rounded-xl",
                  "border-0 bg-transparent cursor-pointer w-full text-left",
                  "transition-all duration-150 ease-in-out",
                  "hover:bg-[#f5f6fa] hover:translate-x-0.5",
                  "active:translate-x-0.5 active:scale-[0.98]",
                ].join(" ")}
                onClick={opt.action}
                role="listitem"
                aria-label={`${opt.label}: ${opt.description}`}
              >
                <div
                  className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center shrink-0 transition-transform duration-150 group-hover:scale-[1.08]"
                  style={{ background: `${opt.color}18`, color: opt.color }}
                >
                  {opt.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[13.5px] font-semibold text-[#1a1a2e] mb-[1px]">
                    {opt.label}
                  </span>
                  <span className="block text-[11.5px] text-[#8892a4] whitespace-nowrap overflow-hidden text-ellipsis">
                    {opt.description}
                  </span>
                </div>
                <svg
                  className="shrink-0 text-[#c8cdd8] transition-all duration-150 group-hover:text-[#8892a4] group-hover:translate-x-0.5"
                  width={14} height={14} viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="px-4 pt-2.5 pb-3.5 text-center border-t border-[#f0f1f5]">
            <span className="text-[11px] text-[#b0b7c3] tracking-[0.2px]">
              Powered by{" "}
              <a
                href="https://optimumsystems.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a237e] no-underline font-semibold hover:underline"
              >
                Optimum Systems Ltd
              </a>
            </span>
          </div>
        </div>

        {/*
          ── FAB: fills the 56×56 root exactly. Always the only interactive
             element at this position. Scroll hide/show via opacity + scale
             on the button itself — no wrapper needed.
        */}
        <button
          ref={buttonRef}
          className={[
            "w-14 h-14 rounded-[18px] border-0 cursor-pointer",
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
          onClick={handleOpen}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close help desk" : "Open help desk"}
        >
          {/* Headset icon — shown when closed */}
          <span
            className={[
              "absolute transition-all duration-200",
              isOpen ? "opacity-0 scale-[0.7] -rotate-45" : "opacity-100 scale-100 rotate-0",
            ].join(" ")}
            aria-hidden
          >
            <HeadsetIcon />
          </span>

          {/* Close icon — shown when open */}
          <span
            className={[
              "absolute transition-all duration-200",
              isOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-[0.7] rotate-45",
            ].join(" ")}
            aria-hidden
          >
            <CloseIcon />
          </span>

          {/* Unread badge */}
          <span
            className={[
              "absolute -top-[5px] -right-[5px]",
              "w-[18px] h-[18px] bg-[#4ade80] rounded-full",
              "border-[2.5px] border-white",
              "flex items-center justify-center",
              "text-[9px] font-bold text-[#166534]",
              "transition-all duration-200",
              hasUnread ? "scale-100 opacity-100" : "scale-0 opacity-0",
            ].join(" ")}
            style={{ transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)" }}
            aria-label="1 new message"
          >
            1
          </span>
        </button>

      </div>
    </>
  );
}