"use client";

import { useCallback, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Lock,
  MapPin,
  MonitorPlay,
  Phone,
  Video,
  type LucideIcon,
} from "lucide-react";

const DEMO_OPTIONS = [
  "Online Demo",
  "On-site Demo",
  "ERP Consultation",
  "Product Pricing",
  "Implementation Plan",
] as const;

type DemoOption = (typeof DEMO_OPTIONS)[number];

type DemoCardAction = "product-demo" | "virtual-session" | "office-demo";

interface DemoActionConfig {
  intent: string;
  options: DemoOption[];
  message: string;
}

const DEMO_ACTION_CONFIG: Record<DemoCardAction, DemoActionConfig> = {
  "product-demo": {
    intent: "Product Demo",
    options: ["Online Demo"],
    message:
      "Product demo selected. Complete your details below and we’ll confirm your slot.",
  },
  "virtual-session": {
    intent: "Virtual Session - Google Meet or Zoom",
    options: ["Online Demo"],
    message:
      "Virtual session selected. We’ll share a Google Meet or Zoom link after confirmation.",
  },
  "office-demo": {
    intent: "Office Demo",
    options: ["On-site Demo"],
    message:
      "Office demo selected. Complete your details and we’ll coordinate an in-person meeting.",
  },
};

interface DemoCard {
  icon: LucideIcon;
  label: string;
  sub: string;
  value?: string;
  action?: string;
  href: string;
  ctaAction?: DemoCardAction;
}

interface AvailabilitySlot {
  day: string;
  time: string;
  closed: boolean;
}

const DEMO_CARDS: DemoCard[] = [
  {
    icon: MonitorPlay,
    label: "Product Demo",
    sub: "Personalized walkthrough",
    action: "Book your slot",
    href: "#demo-form",
    ctaAction: "product-demo",
  },
  {
    icon: Video,
    label: "Virtual Session",
    sub: "Guided online presentation",
    value: "Google Meet or Zoom",
    href: "#demo-form",
    ctaAction: "virtual-session",
  },
  {
    icon: Phone,
    label: "Phone",
    sub: "Talk to a product consultant",
    value: "0118 859 686 | 0118 859 685 ",
    href: "tel:0118 859 686",
  },
  {
    icon: MapPin,
    label: "Office Demo",
    sub: "Schedule an in-person meeting",
    value:
      "Crown Z Towers, 3rd Floor, Office B3, Eastern Bypass, near KCB Kamakis",
    href: "#demo-form",
    ctaAction: "office-demo",
  },
];

const COMPACT_DEMO_AVAILABILITY: AvailabilitySlot[] = [
  { day: "Monday – Friday", time: "9:00 AM – 6:00 PM", closed: false },
  { day: "Saturday", time: "10:00 AM – 4:00 PM", closed: false },
  { day: "Sunday", time: "Closed", closed: true },
];

const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeDownVariants: Variants = {
  hidden: { opacity: 0, y: -14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const formTransitionVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.985,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const inputClassName =
  "border-[#E0E4EC] bg-[#F8F9FA] text-[#2D3344] placeholder:font-light placeholder:text-[#9AA3B2] transition-all duration-200 focus-visible:border-[#0A2463] focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-[#0A2463]/10";

const selectClassName =
  "h-10 w-full rounded-md border border-[#E0E4EC] bg-[#F8F9FA] px-3 py-2 text-sm text-[#2D3344] outline-none transition-all duration-200 focus:border-[#0A2463] focus:bg-white focus:ring-2 focus:ring-[#0A2463]/10";

export default function ScheduleDemoPage() {
  const demoFormRef = useRef<HTMLDivElement>(null);
  const firstNameInputRef = useRef<HTMLInputElement>(null);

  const [activeDemoOptions, setActiveDemoOptions] = useState<DemoOption[]>([]);
  const [selectedDemoIntent, setSelectedDemoIntent] = useState("");
  const [ctaStatusMessage, setCtaStatusMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleDemoOption = (option: DemoOption) => {
    setActiveDemoOptions((currentOptions) =>
      currentOptions.includes(option)
        ? currentOptions.filter((currentOption) => currentOption !== option)
        : [...currentOptions, option]
    );
  };

  const scrollToDemoForm = useCallback(() => {
    window.requestAnimationFrame(() => {
      demoFormRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.setTimeout(() => {
        firstNameInputRef.current?.focus({ preventScroll: true });
      }, 650);
    });
  }, []);

  const handleDemoCardAction = useCallback(
    (action: DemoCardAction) => {
      const config = DEMO_ACTION_CONFIG[action];

      setSubmitted(false);
      setSelectedDemoIntent(config.intent);
      setCtaStatusMessage(config.message);
      setActiveDemoOptions((currentOptions) => {
        const mergedOptions = new Set<DemoOption>([
          ...currentOptions,
          ...config.options,
        ]);

        return Array.from(mergedOptions);
      });

      scrollToDemoForm();
    },
    [scrollToDemoForm]
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const resetFormState = () => {
    setSubmitted(false);
    setActiveDemoOptions([]);
    setSelectedDemoIntent("");
    setCtaStatusMessage("");
  };

  return (
    <section className="w-full bg-primary-cbe-50">
      {/* ── HERO ── */}
      <div className="relative overflow-hidden bg-[linear-gradient(135deg,_#080817_0%,_#201e5c_60%,_#3e3ab1_100%)] px-6 sm:px-16 md:px-30 pb-20 pt-[72px] text-center">
        {/* Decorative radial overlays */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(255,255,255,0.06)_0%,transparent_70%),radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(211,47,47,0.18)_0%,transparent_70%)]" />

        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="relative flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            variants={fadeDownVariants}
            className="mb-[22px] inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm"
          >
            <motion.span
              aria-hidden="true"
              animate={{ opacity: [1, 0.5, 1], scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-primary-cta"
            />
            <span className="text-xs font-medium uppercase tracking-widest text-white/90">
              Schedule a Demo
            </span>
          </motion.div>

          <motion.h1
            variants={fadeDownVariants}
            className="text-[clamp(36px,_5vw,_52px)] font-bold leading-[1.1] tracking-tight text-white"
          >
            Book a personalized <span className="text-primary-cta">product walkthrough</span>
          </motion.h1>

          <motion.p
            variants={fadeDownVariants}
            className="mt-8 max-w-[620px] text-base font-normal leading-[1.7] text-slate-200"
          >
            See how Optimum ERP Systems can support your organization with a guided
            demo tailored to your workflows, users, and operational goals.
          </motion.p>
        </motion.div>
      </div>

      {/* ── MAIN GRID ── */}
      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="relative z-10 -mt-8 grid grid-cols-1 gap-6 px-6 sm:px-16 lg:px-30 pb-20 lg:grid-cols-[320px_1fr]"
      >
        {/* ── LEFT COLUMN ── */}
        <motion.div variants={staggerContainerVariants} className="flex flex-col gap-3">
          {/* Demo Cards */}
          {DEMO_CARDS.map(({ icon: Icon, label, sub, value, action, href, ctaAction }) => (
            <motion.article
              key={label}
              variants={cardVariants}
              whileHover={{ x: 4 }}
              className="group relative flex cursor-pointer items-start gap-4 overflow-hidden rounded-[14px] border border-[#E0E4EC] bg-white p-5 transition-colors duration-200 hover:border-[#E8EDF8] hover:shadow-sm"
            >
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 top-0 w-[3px] origin-bottom scale-y-0 rounded-r-sm bg-[#0A2463] transition-transform duration-200 group-hover:scale-y-100"
              />

              <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[#F0F4FC] transition-colors duration-200 group-hover:bg-[#E8EDF8]">
                <Icon size={18} className="stroke-[#0A2463]" aria-hidden="true" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-bold tracking-wide text-[#2D3344]">
                  {label}
                </p>
                <p className="mt-0.5 text-xs font-light text-[#9AA3B2]">{sub}</p>

                {value && !ctaAction ? (
                  <a
                    href={href}
                    className="mt-1.5 block text-[13.5px] font-medium text-[#0A2463] hover:underline"
                  >
                    {value}
                  </a>
                ) : null}

                {ctaAction ? (
                  <button
                    type="button"
                    onClick={() => handleDemoCardAction(ctaAction)}
                    className={[
                      "mt-1 inline-flex items-center gap-1 text-left font-medium underline-offset-4 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2463]/20 focus-visible:ring-offset-2",
                      action
                        ? "text-xs text-primary-cta hover:text-[#bf2929] hover:underline"
                        : "text-[13.5px] text-[#0A2463] hover:text-primary-cta hover:underline",
                    ].join(" ")}
                    aria-label={`${action ?? value} for ${label}`}
                  >
                    {action ?? value}
                    <ArrowRight
                      size={12}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>
                ) : null}

                {action && !ctaAction ? (
                  <a
                    href={href}
                    className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-primary-cta hover:underline"
                  >
                    {action}
                    <ArrowRight size={12} aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}

          {/* Demo Availability box */}
          <motion.div
            variants={cardVariants}
            className="rounded-[14px] bg-gradient-to-br from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 px-5 py-[22px]"
          >
            <h3 className="mb-3.5 text-xs font-bold uppercase tracking-widest text-primary-cbe-200">
              Demo Availability
            </h3>

            {COMPACT_DEMO_AVAILABILITY.map(({ day, time, closed }) => (
              <div
                key={day}
                className="flex items-center justify-between border-b border-white/10 py-2 text-sm last:border-b-0"
              >
                <span className="font-light text-white/70">{day}</span>
                <span className={closed ? "text-primary-cta" : "font-medium text-white"}>
                  {time}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── FORM CARD ── */}
        <motion.div
          ref={demoFormRef}
          id="demo-form"
          tabIndex={-1}
          variants={fadeUpVariants}
          className="scroll-mt-24 rounded-[14px] border border-[#E0E4EC] bg-white shadow-md"
        >
          <AnimatePresence mode="wait" initial={false}>
            {!submitted ? (
              <motion.div
                key="demo-form-content"
                variants={formTransitionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="px-9 py-9"
              >
                <div className="mb-7">
                  <h2 className="text-[22px] font-bold text-[#0A2463]">
                    Schedule your demo
                  </h2>
                  <p className="mt-1.5 text-sm font-light leading-relaxed text-[#5A6478]">
                    Fill out the form below and we&apos;ll confirm the best demo slot
                    within 24 hours.
                  </p>

                  <AnimatePresence initial={false}>
                    {ctaStatusMessage ? (
                      <motion.div
                        key="demo-cta-status"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        role="status"
                        className="mt-4 flex items-start gap-2.5 rounded-xl border border-[#E0E4EC] bg-[#F8F9FA] px-4 py-3 text-sm leading-relaxed text-[#5A6478]"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 flex-shrink-0 stroke-[#0A2463]"
                          aria-hidden="true"
                        />
                        <span>{ctaStatusMessage}</span>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input type="hidden" name="demoIntent" value={selectedDemoIntent} />
                  {/* Name row */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="first-name"
                        className="text-[12.5px] font-medium tracking-wide text-[#5A6478]"
                      >
                        First Name <span className="text-primary-cta">*</span>
                      </label>
                      <Input
                        ref={firstNameInputRef}
                        id="first-name"
                        name="firstName"
                        placeholder="John"
                        required
                        className={inputClassName}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="last-name"
                        className="text-[12.5px] font-medium tracking-wide text-[#5A6478]"
                      >
                        Last Name <span className="text-primary-cta">*</span>
                      </label>
                      <Input
                        id="last-name"
                        name="lastName"
                        placeholder="Doe"
                        required
                        className={inputClassName}
                      />
                    </div>
                  </div>

                  {/* Contact row */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-[12.5px] font-medium tracking-wide text-[#5A6478]"
                      >
                        Work Email <span className="text-primary-cta">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                        className={inputClassName}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="text-[12.5px] font-medium tracking-wide text-[#5A6478]"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+254 700 000 000"
                        className={inputClassName}
                      />
                    </div>
                  </div>

                  {/* Organization */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="organization"
                      className="text-[12.5px] font-medium tracking-wide text-[#5A6478]"
                    >
                      Organization / Institution
                    </label>
                    <div className="relative">
                      <Building2
                        size={16}
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 stroke-[#9AA3B2]"
                        aria-hidden="true"
                      />
                      <Input
                        id="organization"
                        name="organization"
                        placeholder="Your School, Company, or Institution"
                        className={`${inputClassName} pl-9`}
                      />
                    </div>
                  </div>

                  {/* Demo options */}
                  <fieldset className="space-y-2">
                    <legend className="text-[12.5px] font-medium tracking-wide text-[#5A6478]">
                      What type of demo would you like?
                    </legend>
                    <input
                      type="hidden"
                      name="demoOptions"
                      value={activeDemoOptions.join(", ")}
                    />
                    <div className="flex flex-wrap gap-2">
                      {DEMO_OPTIONS.map((option) => {
                        const isActive = activeDemoOptions.includes(option);

                        return (
                          <button
                            key={option}
                            type="button"
                            aria-pressed={isActive}
                            onClick={() => toggleDemoOption(option)}
                            className={[
                              "rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2463]/20 focus-visible:ring-offset-2",
                              isActive
                                ? "border-[#0A2463] bg-[#0A2463] text-white"
                                : "border-[#E0E4EC] bg-[#F8F9FA] text-[#5A6478] hover:border-[#0A2463] hover:bg-[#F0F4FC] hover:text-[#0A2463]",
                            ].join(" ")}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  {/* Preferred schedule row */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="preferred-date"
                        className="text-[12.5px] font-medium tracking-wide text-[#5A6478]"
                      >
                        Preferred Date
                      </label>
                      <div className="relative">
                        <CalendarDays
                          size={16}
                          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 stroke-[#9AA3B2]"
                          aria-hidden="true"
                        />
                        <Input
                          id="preferred-date"
                          name="preferredDate"
                          type="date"
                          className={`${inputClassName} pl-9`}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="preferred-time"
                        className="text-[12.5px] font-medium tracking-wide text-[#5A6478]"
                      >
                        Preferred Time
                      </label>
                      <div className="relative">
                        <Clock3
                          size={16}
                          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 stroke-[#9AA3B2]"
                          aria-hidden="true"
                        />
                        <select
                          id="preferred-time"
                          name="preferredTime"
                          className={`${selectClassName} pl-9`}
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select a time
                          </option>
                          <option value="morning">Morning: 9:00 AM – 12:00 PM</option>
                          <option value="afternoon">Afternoon: 12:00 PM – 3:00 PM</option>
                          <option value="evening">Evening: 3:00 PM – 6:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="requirements"
                      className="text-[12.5px] font-medium tracking-wide text-[#5A6478]"
                    >
                      Demo Requirements <span className="text-primary-cta">*</span>
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      rows={4}
                      required
                      placeholder="Tell us which product you want to see, your team size, current challenges, or workflows you would like covered…"
                      className="w-full resize-y rounded-md border border-[#E0E4EC] bg-[#F8F9FA] px-3 py-2 text-sm text-[#2D3344] placeholder:font-light placeholder:text-[#9AA3B2] outline-none transition-all duration-200 focus:border-[#0A2463] focus:bg-white focus:ring-2 focus:ring-[#0A2463]/10"
                    />
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-2.5">
                    <input
                      id="terms"
                      name="terms"
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
                  <div className="flex flex-col gap-4 border-t border-[#F1F3F6] pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-[#9AA3B2]">
                      <Lock size={13} className="stroke-[#9AA3B2]" aria-hidden="true" />
                      Your data is secure &amp; encrypted
                    </div>
                    <Button
                      type="submit"
                      variant="default"
                      size="lg"
                      className="py-6"
                    >
                      Schedule Demo
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Button>
                  </div>
                </form>
              </motion.div>
            ) : (
              /* Success state */
              <motion.div
                key="demo-success-state"
                variants={formTransitionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col items-center justify-center gap-4 px-8 py-16 text-center"
              >
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,_#0A2463,_#1B3F8B)]"
                >
                  <CheckCircle2
                    size={28}
                    className="stroke-white"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </motion.div>
                <h3 className="text-[22px] font-bold text-[#0A2463]">
                  Demo Request Received!
                </h3>
                <p className="max-w-xs text-sm leading-[1.7] text-[#5A6478]">
                  Thanks for scheduling a demo. Our team will confirm your preferred
                  slot and share the meeting details within 24 hours.
                </p>
                <Button
                  type="button"
                  onClick={resetFormState}
                  className="group mt-2 flex items-center gap-2 rounded-full bg-primary-cta px-7 py-2.5 text-sm font-bold shadow-[0_4px_14px_rgba(211,47,47,0.32)] transition-all duration-200 hover:bg-[#bf2929] hover:shadow-[0_6px_18px_rgba(211,47,47,0.38)]"
                >
                  Schedule Another
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
