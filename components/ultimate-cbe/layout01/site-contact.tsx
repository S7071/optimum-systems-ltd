"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Mail,
  MapPin,
  MessagesSquareIcon,
  Phone,
  ArrowRight,
  Lock,
  CheckCircle2,
} from "lucide-react";

const SUBJECT_CHIPS = [
  "Demo Request",
  "Pricing",
  "Technical Support",
  "Partnership",
  "Other",
];

export default function SiteContact() {
  const [activeChips, setActiveChips] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleChip = (chip: string) => {
    setActiveChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );
  };

  return (
    <>
      {/* Scoped styles for animations & hover effects not expressible in Tailwind */}
      <style>{`
        .contact-card::after {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: #0A2463;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.22s ease;
          border-radius: 0 2px 2px 0;
        }
        .contact-card:hover::after { transform: scaleY(1); }
        .contact-card:hover { transform: translateX(4px); }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-dot {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.5; transform:scale(1.4); }
        }
        .hero-animate   { animation: fadeDown 0.5s ease both; }
        .hero-animate-1 { animation: fadeDown 0.5s 0.1s ease both; }
        .hero-animate-2 { animation: fadeDown 0.5s 0.2s ease both; }
        .card-animate-1 { animation: slideUp 0.5s 0.15s ease both; }
        .card-animate-2 { animation: slideUp 0.5s 0.22s ease both; }
        .card-animate-3 { animation: slideUp 0.5s 0.29s ease both; }
        .card-animate-4 { animation: slideUp 0.5s 0.36s ease both; }
        .avail-animate  { animation: slideUp 0.5s 0.42s ease both; }
        .form-animate   { animation: slideUp 0.5s 0.12s ease both; }
        .pulse-dot      { animation: pulse-dot 2s ease infinite; }
        .btn-submit-arrow { transition: transform 0.2s; }
        .btn-submit:hover .btn-submit-arrow { transform: translateX(3px); }
      `}</style>

      <section className="w-full bg-[#F8F9FA]">

        {/* ── HERO ── */}
        <div
          className="relative overflow-hidden px-6 pb-20 pt-[72px] text-center"
          style={{
            background: "linear-gradient(135deg, #080817 0%, #201e5c 60%, #3e3ab1 100%)",
          }}
        >
          {/* Decorative radial overlays */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 60% 50% at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 70%),
                radial-gradient(ellipse 40% 40% at 20% 80%, rgba(211,47,47,0.18) 0%, transparent 70%)
              `,
            }}
          />

          {/* Badge */}
          <div className="hero-animate relative mx-auto mb-[22px] inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5">
            <span
              className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#D32F2F]"
            />
            <span className="text-xs font-medium uppercase tracking-widest text-white/90">
              Get in Touch
            </span>
          </div>

          <h1
            className="hero-animate-1 relative font-bold tracking-tight text-white"
            style={{ fontSize: "clamp(36px, 5vw, 52px)", lineHeight: 1.1, fontFamily: "inherit" }}
          >
            Let&apos;s talk about your<br />
            <span className="text-[#FF6B6B]">school&apos;s CBC needs</span>
          </h1>

          <p className="hero-animate-2 relative mx-auto mt-4 max-w-[480px] text-base font-light leading-[1.7] text-white/70">
            Ready to transform assessment management? Our team is here to guide
            you every step of the way.
          </p>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="relative z-10 mx-auto -mt-8 grid max-w-5xl grid-cols-1 gap-6 px-6 pb-20 lg:grid-cols-[320px_1fr]">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-3">

            {/* Contact Cards */}
            {[
              {
                animClass: "card-animate-1",
                icon: <Mail size={18} className="stroke-[#0A2463]" />,
                label: "Email",
                sub: "Response within 24 hours",
                value: "hello@company.com",
                href: "mailto:hello@company.com",
              },
              {
                animClass: "card-animate-2",
                icon: <MessagesSquareIcon size={18} className="stroke-[#0A2463]" />,
                label: "Live Chat",
                sub: "Instant support available now",
                action: "Start chatting",
                href: "#",
              },
              {
                animClass: "card-animate-3",
                icon: <Phone size={18} className="stroke-[#0A2463]" />,
                label: "Phone",
                sub: "Mon–Fri, 9AM–6PM EST",
                value: "+254 (723) 550-664",
                href: "tel:+254723550664",
              },
              {
                animClass: "card-animate-4",
                icon: <MapPin size={18} className="stroke-[#0A2463]" />,
                label: "Office",
                sub: "Schedule an in-person meeting",
                value: "1610 – 00200, City Square Nairobi",
                href: "#",
              },
            ].map((card) => (
              <div
                key={card.label}
                className={`contact-card ${card.animClass} relative flex cursor-pointer items-start gap-4 overflow-hidden rounded-[14px] border border-[#E0E4EC] bg-white p-5 transition-all duration-[220ms] hover:border-[#E8EDF8] hover:shadow-md`}
              >
                {/* Left accent bar rendered via ::after pseudo (see CSS above) */}
                <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[#F0F4FC] transition-colors group-hover:bg-[#E8EDF8]">
                  {card.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-bold tracking-wide text-[#2D3344]">
                    {card.label}
                  </p>
                  <p className="mt-0.5 text-xs font-light text-[#9AA3B2]">{card.sub}</p>
                  {card.value && (
                    <a
                      href={card.href}
                      className="mt-1.5 block text-[13.5px] font-medium text-[#0A2463] hover:underline"
                    >
                      {card.value}
                    </a>
                  )}
                  {card.action && (
                    <a
                      href={card.href}
                      className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-[#D32F2F] hover:underline"
                    >
                      {card.action}
                      <ArrowRight size={12} />
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Office Hours box */}
            <div
              className="avail-animate rounded-[14px] px-5 py-[22px]"
              style={{
                background: "linear-gradient(135deg, #0A2463 0%, #1B3F8B 100%)",
              }}
            >
              <h3 className="mb-3.5 text-[11px] font-bold uppercase tracking-[0.06em] text-white/60">
                Office Hours
              </h3>
              {[
                { day: "Monday – Friday", time: "9:00 AM – 6:00 PM", closed: false },
                { day: "Saturday",        time: "10:00 AM – 4:00 PM", closed: false },
                { day: "Sunday",          time: "Closed",              closed: true },
              ].map(({ day, time, closed }) => (
                <div
                  key={day}
                  className="flex items-center justify-between border-b border-white/10 py-2 text-sm last:border-b-0"
                >
                  <span className="font-light text-white/70">{day}</span>
                  <span className={closed ? "text-red-400" : "font-medium text-white"}>
                    {time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── FORM CARD ── */}
          <div className="form-animate rounded-[14px] border border-[#E0E4EC] bg-white shadow-md">
            {!submitted ? (
              <div className="px-9 py-9">
                <div className="mb-7">
                  <h2 className="text-[22px] font-bold text-[#0A2463]">
                    Send us a message
                  </h2>
                  <p className="mt-1.5 text-sm font-light leading-relaxed text-[#5A6478]">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                </div>

                <form
                  className="space-y-4"
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                >
                  {/* Name row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[12.5px] font-medium tracking-wide text-[#5A6478]">
                        First Name <span className="text-[#D32F2F]">*</span>
                      </label>
                      <Input placeholder="John" required className="bg-[#F8F9FA] focus-visible:border-[#0A2463]" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[12.5px] font-medium tracking-wide text-[#5A6478]">
                        Last Name <span className="text-[#D32F2F]">*</span>
                      </label>
                      <Input placeholder="Doe" required className="bg-[#F8F9FA] focus-visible:border-[#0A2463]" />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[12.5px] font-medium tracking-wide text-[#5A6478]">
                      Email Address <span className="text-[#D32F2F]">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      required
                      className="bg-[#F8F9FA] focus-visible:border-[#0A2463]"
                    />
                  </div>

                  {/* School */}
                  <div className="space-y-1.5">
                    <label className="text-[12.5px] font-medium tracking-wide text-[#5A6478]">
                      School / Institution
                    </label>
                    <Input
                      placeholder="Your School or Company"
                      className="bg-[#F8F9FA] focus-visible:border-[#0A2463]"
                    />
                  </div>

                  {/* Subject chips */}
                  <div className="space-y-2">
                    <label className="text-[12.5px] font-medium tracking-wide text-[#5A6478]">
                      What can we help you with?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SUBJECT_CHIPS.map((chip) => (
                        <button
                          key={chip}
                          type="button"
                          onClick={() => toggleChip(chip)}
                          className={`rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition-all duration-150
                            ${
                              activeChips.includes(chip)
                                ? "border-[#0A2463] bg-[#0A2463] text-white"
                                : "border-[#E0E4EC] bg-[#F8F9FA] text-[#5A6478] hover:border-[#0A2463] hover:bg-[#F0F4FC] hover:text-[#0A2463]"
                            }`}
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-[12.5px] font-medium tracking-wide text-[#5A6478]">
                      Message <span className="text-[#D32F2F]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your institution, how many students, or how we can help…"
                      className="w-full resize-y rounded-md border border-[#E0E4EC] bg-[#F8F9FA] px-3 py-2 text-sm text-[#2D3344] placeholder:font-light placeholder:text-[#9AA3B2] outline-none transition-all focus:border-[#0A2463] focus:bg-white focus:ring-2 focus:ring-[#0A2463]/10"
                    />
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-2.5">
                    <input
                      id="terms"
                      type="checkbox"
                      required
                      className="mt-0.5 h-4 w-4 cursor-pointer accent-[#0A2463]"
                    />
                    <label
                      htmlFor="terms"
                      className="cursor-pointer text-sm leading-relaxed text-[#5A6478]"
                    >
                      I agree to the{" "}
                      <a href="#" className="font-medium text-[#0A2463] hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="font-medium text-[#0A2463] hover:underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  {/* Submit row */}
                  <div className="flex items-center justify-between gap-4 border-t border-[#F1F3F6] pt-5">
                    <div className="flex items-center gap-1.5 text-xs text-[#9AA3B2]">
                      <Lock size={13} className="stroke-[#9AA3B2]" />
                      Your data is secure &amp; encrypted
                    </div>
                    <Button
                      type="submit"
                      className="btn-submit flex items-center gap-2 rounded-full px-7 py-2.5 text-sm font-bold tracking-wide"
                      style={{
                        background: "#D32F2F",
                        boxShadow: "0 4px 14px rgba(211,47,47,0.32)",
                      }}
                    >
                      Send Message
                      <ArrowRight size={15} className="btn-submit-arrow" />
                    </Button>
                  </div>
                </form>
              </div>
            ) : (
              /* Success state */
              <div className="flex flex-col items-center justify-center gap-4 px-8 py-16 text-center">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ background: "linear-gradient(135deg, #0A2463, #1B3F8B)" }}
                >
                  <CheckCircle2 size={28} className="stroke-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-[22px] font-bold text-[#0A2463]">Message Sent!</h3>
                <p className="max-w-xs text-sm leading-[1.7] text-[#5A6478]">
                  Thanks for reaching out. Our team will get back to you within 24 hours.
                </p>
                <Button
                  onClick={() => { setSubmitted(false); setActiveChips([]); }}
                  className="mt-2 flex items-center gap-2 rounded-full px-7 py-2.5 text-sm font-bold"
                  style={{ background: "#D32F2F", boxShadow: "0 4px 14px rgba(211,47,47,0.32)" }}
                >
                  Send Another
                  <ArrowRight size={15} />
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* ── FOOTER INFO STRIP ── */}
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-2">

          {/* Office Hours */}
          <div className="rounded-[14px] border border-[#E0E4EC] bg-white p-7">
            <h3 className="mb-4 text-[13px] font-bold uppercase tracking-[0.06em] text-[#0A2463]">
              Office Hours
            </h3>
            {[
              { day: "Monday – Friday", time: "9:00 AM – 6:00 PM EST", closed: false },
              { day: "Saturday",        time: "10:00 AM – 4:00 PM EST", closed: false },
              { day: "Sunday",          time: "Closed",                  closed: true },
            ].map(({ day, time, closed }) => (
              <div
                key={day}
                className="flex items-center justify-between border-b border-[#F1F3F6] py-2 text-sm last:border-b-0"
              >
                <span className="text-[#5A6478]">{day}</span>
                <span className={closed ? "text-[#D32F2F]" : "font-medium text-[#2D3344]"}>
                  {time}
                </span>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="rounded-[14px] border border-[#E0E4EC] bg-white p-7">
            <h3 className="mb-4 text-[13px] font-bold uppercase tracking-[0.06em] text-[#0A2463]">
              Contact Information
            </h3>
            {[
              { icon: <Mail size={14} className="stroke-[#0A2463]" />,  label: "Email",   value: "hello@company.com" },
              { icon: <Phone size={14} className="stroke-[#0A2463]" />, label: "Phone",   value: "+254 (723) 550-664" },
              { icon: <MapPin size={14} className="stroke-[#0A2463]" />,label: "Address", value: "1610 – 00200, City Square Nairobi" },
            ].map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-3 border-b border-[#F1F3F6] py-2.5 text-sm last:border-b-0"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#F0F4FC]">
                  {icon}
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#9AA3B2]">{label}</p>
                  <p className="font-medium text-[#2D3344]">{value}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}