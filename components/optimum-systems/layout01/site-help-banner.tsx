/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface HelpOption {
  icon: React.ReactNode;
  label: string;
  description: string;
  action: () => void;
  color: string;
}

// ─── Icons (inline SVG – zero external deps) ──────────────────────────────────

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

  // Mount animation
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(t);
  }, []);

  // Scroll visibility logic
  const handleScroll = useCallback(() => {
    const scrolledFromTop = window.scrollY + window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;
    const distanceFromBottom = totalHeight - scrolledFromTop;
    setIsVisible(distanceFromBottom > 200);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close on outside click
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

  // Close on Escape
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
      description: "+254 722 844 862",
      action: () => { window.location.href = "tel:+254722844862"; },
      color: "#1a237e",
    },
    {
      icon: <WhatsAppIcon />,
      label: "WhatsApp",
      description: "Chat with support",
      action: () => { window.open("https://wa.me/254722844862", "_blank"); },
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
      {/* ── Styles ─────────────────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');

        .hdb-root {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          font-family: 'DM Sans', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
        }

        /* ── Panel ── */
        .hdb-panel {
          width: 300px;
          background: #fff;
          border-radius: 20px;
          box-shadow:
            0 24px 64px rgba(0,0,0,0.14),
            0 4px 16px rgba(0,0,0,0.08),
            0 0 0 1px rgba(0,0,0,0.04);
          overflow: hidden;
          transform-origin: bottom right;
          transition:
            opacity 220ms cubic-bezier(0.4,0,0.2,1),
            transform 260ms cubic-bezier(0.34,1.56,0.64,1);
        }
        .hdb-panel[data-open="false"] {
          opacity: 0;
          transform: scale(0.88) translateY(12px);
          pointer-events: none;
        }
        .hdb-panel[data-open="true"] {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        /* ── Panel header ── */
        .hdb-header {
          background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
          padding: 20px 20px 24px;
          position: relative;
        }
        .hdb-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 100px;
          padding: 3px 10px 3px 6px;
          margin-bottom: 12px;
        }
        .hdb-header-dot {
          width: 7px; height: 7px;
          background: #4ade80;
          border-radius: 50%;
          box-shadow: 0 0 0 2px rgba(74,222,128,0.3);
          animation: hdb-pulse 2s ease-in-out infinite;
        }
        @keyframes hdb-pulse {
          0%, 100% { box-shadow: 0 0 0 2px rgba(74,222,128,0.3); }
          50% { box-shadow: 0 0 0 5px rgba(74,222,128,0.1); }
        }
        .hdb-header-badge span {
          color: rgba(255,255,255,0.9);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.3px;
        }
        .hdb-header h3 {
          color: #fff;
          font-size: 17px;
          font-weight: 600;
          margin: 0 0 4px;
          line-height: 1.3;
        }
        .hdb-header p {
          color: rgba(255,255,255,0.65);
          font-size: 12.5px;
          margin: 0;
          line-height: 1.5;
        }
        .hdb-wave {
          position: absolute;
          bottom: -1px; left: 0; right: 0;
          height: 20px;
          background: #fff;
          clip-path: ellipse(55% 100% at 50% 100%);
        }

        /* ── Options list ── */
        .hdb-options {
          padding: 8px 12px 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .hdb-option {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 12px;
          border: none;
          background: transparent;
          cursor: pointer;
          width: 100%;
          text-align: left;
          transition: background 150ms ease, transform 150ms ease;
        }
        .hdb-option:hover {
          background: #f5f6fa;
          transform: translateX(2px);
        }
        .hdb-option:active { transform: translateX(2px) scale(0.98); }

        .hdb-option-icon {
          width: 38px; height: 38px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: transform 150ms ease;
        }
        .hdb-option:hover .hdb-option-icon { transform: scale(1.08); }

        .hdb-option-text { flex: 1; min-width: 0; }
        .hdb-option-label {
          font-size: 13.5px;
          font-weight: 600;
          color: #1a1a2e;
          display: block;
          margin-bottom: 1px;
        }
        .hdb-option-desc {
          font-size: 11.5px;
          color: #8892a4;
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .hdb-option-arrow {
          color: #c8cdd8;
          flex-shrink: 0;
          transition: transform 150ms ease, color 150ms ease;
        }
        .hdb-option:hover .hdb-option-arrow {
          color: #8892a4;
          transform: translateX(2px);
        }

        /* ── Panel footer ── */
        .hdb-footer {
          padding: 10px 16px 14px;
          text-align: center;
          border-top: 1px solid #f0f1f5;
        }
        .hdb-footer span {
          font-size: 11px;
          color: #b0b7c3;
          letter-spacing: 0.2px;
        }
        .hdb-footer a {
          color: #1a237e;
          text-decoration: none;
          font-weight: 600;
        }
        .hdb-footer a:hover { text-decoration: underline; }

        /* ── FAB button ── */
        .hdb-fab {
          width: 56px; height: 56px;
          border-radius: 18px;
          background: linear-gradient(145deg, #e53935 0%, #c62828 100%);
          border: none;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: #fff;
          position: relative;
          transition:
            transform 200ms cubic-bezier(0.34,1.56,0.64,1),
            box-shadow 200ms ease;
        }
        .hdb-fab:hover {
          transform: scale(1.08) translateY(-1px);
          box-shadow:
            0 12px 32px rgba(229,57,53,0.1),
            0 4px 12px rgba(0,0,0,0.01);
        }
        .hdb-fab:active { transform: scale(0.96); }

        .hdb-fab-icon {
          position: absolute;
          transition: opacity 200ms ease, transform 200ms ease;
        }
        .hdb-fab-icon-open { opacity: 0; transform: rotate(-45deg) scale(0.7); }
        .hdb-fab-icon-close { opacity: 0; transform: rotate(45deg) scale(0.7); }
        .hdb-fab[data-open="false"] .hdb-fab-icon-open { opacity: 1; transform: rotate(0) scale(1); }
        .hdb-fab[data-open="true"] .hdb-fab-icon-close { opacity: 1; transform: rotate(0) scale(1); }

        /* ── Notification badge ── */
        .hdb-badge {
          position: absolute;
          top: -5px; right: -5px;
          width: 18px; height: 18px;
          background: #4ade80;
          border-radius: 50%;
          border: 2.5px solid #fff;
          display: flex; align-items: center; justify-content: center;
          font-size: 9px;
          font-weight: 700;
          color: #166534;
          transition: transform 200ms cubic-bezier(0.34,1.56,0.64,1), opacity 200ms;
        }
        .hdb-badge[data-hidden="true"] {
          transform: scale(0);
          opacity: 0;
        }

        /* ── Wrapper visibility transition ── */
        .hdb-wrapper {
          transition: opacity 300ms ease, transform 300ms cubic-bezier(0.34,1.56,0.64,1);
        }
        .hdb-wrapper[data-visible="false"] {
          opacity: 0;
          transform: translateY(16px) scale(0.9);
          pointer-events: none;
        }
        .hdb-wrapper[data-visible="true"] {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>

      {/* ── Markup ──────────────────────────────────────────────────────────── */}
      <div
        className="hdb-root"
        role="complementary"
        aria-label="Help desk"
      >
        <div
          className="hdb-wrapper"
          data-visible={shouldRender ? "true" : "false"}
        >
          <div className="hdb-root" style={{ position: "relative", bottom: "auto", right: "auto" }}>
            {/* Panel */}
            <div
              ref={panelRef}
              className="hdb-panel"
              data-open={isOpen ? "true" : "false"}
              role="dialog"
              aria-modal="false"
              aria-label="Contact support options"
            >
              {/* Header */}
              <div className="hdb-header">
                <div className="hdb-header-badge">
                  <span className="hdb-header-dot" />
                  <span>Support team online</span>
                </div>
                <h3>How can we help you?</h3>
                <p>Our team typically responds within minutes.</p>
                <div className="hdb-wave" />
              </div>

              {/* Options */}
              <div className="hdb-options" role="list">
                {helpOptions.map((opt) => (
                  <button
                    key={opt.label}
                    className="hdb-option"
                    onClick={opt.action}
                    role="listitem"
                    aria-label={`${opt.label}: ${opt.description}`}
                  >
                    <div
                      className="hdb-option-icon"
                      style={{ background: `${opt.color}18`, color: opt.color }}
                    >
                      {opt.icon}
                    </div>
                    <div className="hdb-option-text">
                      <span className="hdb-option-label">{opt.label}</span>
                      <span className="hdb-option-desc">{opt.description}</span>
                    </div>
                    <svg className="hdb-option-arrow" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                ))}
              </div>

              {/* Footer */}
              <div className="hdb-footer">
                <span>
                  Powered by{" "}
                  <a href="https://optimumsystems.co.ke" target="_blank" rel="noopener noreferrer">
                    Optimum ERP
                  </a>
                </span>
              </div>
            </div>

            {/* FAB */}
            <button
              ref={buttonRef}
              className="hdb-fab"
              data-open={isOpen ? "true" : "false"}
              onClick={handleOpen}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close help desk" : "Open help desk"}
            >
              <span className="hdb-fab-icon hdb-fab-icon-open" aria-hidden>
                <HeadsetIcon />
              </span>
              <span className="hdb-fab-icon hdb-fab-icon-close" aria-hidden>
                <CloseIcon />
              </span>

              {/* Unread dot */}
              <span
                className="hdb-badge"
                data-hidden={!hasUnread ? "true" : "false"}
                aria-label="1 new message"
              >
                1
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}