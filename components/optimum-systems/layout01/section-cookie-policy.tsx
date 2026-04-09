import {
  Cookie,
  ShieldCheck,
  SlidersHorizontal,
  BarChart3,
  Lock,
  Globe,
  RefreshCw,
  Phone,
  ChevronRight,
  CheckCircle2,
  Settings2,
  Database,
} from "lucide-react";

type CookieSection = {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
  bullets?: string[];
};

const iconClass = "h-5 w-5";

const cookieSections: CookieSection[] = [
  {
    id: "overview",
    title: "Overview",
    icon: <Cookie className={iconClass} />,
    content: [
      "This Cookie Policy explains how Optimum Systems Ltd uses cookies and similar tracking technologies across its website, digital platforms, and related online services.",
      "It is intended to help visitors understand what cookies are, why they are used, how they affect the browsing experience, and the choices available for managing cookie preferences.",
    ],
  },
  {
    id: "what-are-cookies",
    title: "What Are Cookies?",
    icon: <Database className={iconClass} />,
    content: [
      "Cookies are small text files placed on your device when you visit a website. They help websites remember information about your visit, such as your preferences, session activity, and interactions, so that future visits can be more efficient and relevant.",
      "In addition to cookies, websites may also use similar technologies such as local storage, pixels, tags, and analytics scripts for related functional and performance purposes.",
    ],
  },
  {
    id: "why-we-use-cookies",
    title: "Why We Use Cookies",
    icon: <ShieldCheck className={iconClass} />,
    content: [
      "Optimum Systems Ltd uses cookies and similar technologies to improve website functionality, enhance user experience, understand site performance, support security controls, and help optimize content and services.",
      "Some cookies are essential for the proper operation of the website, while others help us measure traffic patterns, understand engagement, and improve usability.",
    ],
    bullets: [
      "Maintain secure and reliable website operation",
      "Remember user preferences and browsing choices",
      "Understand traffic, page performance, and engagement",
      "Improve usability, content structure, and service delivery",
    ],
  },
  {
    id: "types-of-cookies",
    title: "Types of Cookies We May Use",
    icon: <SlidersHorizontal className={iconClass} />,
    content: [
      "Depending on the configuration of the website and connected services, Optimum Systems Ltd may use several categories of cookies for different operational purposes.",
      "The exact set of cookies in use may vary over time based on website functionality, analytics tools, marketing integrations, and platform changes.",
    ],
    bullets: [
      "Strictly necessary cookies required for core website functionality",
      "Performance and analytics cookies used to understand traffic and usage trends",
      "Functionality cookies that remember settings and user preferences",
      "Third-party cookies connected to embedded tools, integrations, or external services",
    ],
  },
  {
    id: "strictly-necessary",
    title: "Strictly Necessary Cookies",
    icon: <Lock className={iconClass} />,
    content: [
      "These cookies are essential for the website to function properly and cannot usually be switched off in our systems. They may support page navigation, security controls, session handling, form submission, and other core operational features.",
      "Without these cookies, certain parts of the website or service experience may not function as intended.",
    ],
  },
  {
    id: "analytics-performance",
    title: "Analytics and Performance Cookies",
    icon: <BarChart3 className={iconClass} />,
    content: [
      "These cookies help us understand how visitors interact with the website by collecting information such as pages visited, session paths, traffic sources, loading behavior, and general engagement patterns.",
      "The information collected is generally used to improve website structure, optimize performance, and inform service and content improvements.",
    ],
  },
  {
    id: "functional-cookies",
    title: "Functional Cookies",
    icon: <Settings2 className={iconClass} />,
    content: [
      "Functional cookies help the website remember choices you make, such as language preferences, form inputs, or user-interface settings, so the browsing experience is more personalized and efficient.",
      "Disabling these cookies may reduce convenience or affect how certain personalized elements of the website behave.",
    ],
  },
  {
    id: "third-party-cookies",
    title: "Third-Party Cookies",
    icon: <Globe className={iconClass} />,
    content: [
      "Some website features may rely on third-party services such as analytics tools, maps, embedded media, CRM forms, chat widgets, or external integrations. These third parties may place cookies or use similar technologies subject to their own privacy and cookie policies.",
      "Optimum Systems Ltd does not control all third-party cookies directly and encourages users to review the policies of external providers where relevant.",
    ],
  },
  {
    id: "managing-cookies",
    title: "Managing Your Cookie Preferences",
    icon: <CheckCircle2 className={iconClass} />,
    content: [
      "You can manage or disable cookies through your browser settings, cookie consent tools, or device-level controls, depending on the technologies in use on the website.",
      "Please note that restricting certain cookies may affect website functionality, performance, personalization, or access to some features.",
    ],
    bullets: [
      "Update browser settings to block or delete cookies",
      "Use site consent controls where available",
      "Clear stored cookies from your browser history",
      "Review third-party opt-out tools where relevant",
    ],
  },
  {
    id: "data-protection",
    title: "Cookies and Data Protection",
    icon: <ShieldCheck className={iconClass} />,
    content: [
      "Where cookies are used in connection with personal data, that information is handled in line with our broader privacy and security practices. The use of cookies does not reduce our commitment to responsible data handling, transparency, and appropriate safeguards.",
      "For more information on how personal information is processed, users should also review the Optimum Systems Ltd Privacy Policy.",
    ],
  },
  {
    id: "updates",
    title: "Changes to This Cookie Policy",
    icon: <RefreshCw className={iconClass} />,
    content: [
      "Optimum Systems Ltd may update this Cookie Policy from time to time to reflect changes in website technologies, legal obligations, consent requirements, or operational practices.",
      "Any updated version will be published on this page together with the revised effective date.",
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    icon: <Phone className={iconClass} />,
    content: [
      "If you have any questions about this Cookie Policy, cookie technologies used on our website, or your data and consent preferences, please contact Optimum Systems Ltd through the official channels below.",
    ],
    bullets: [
      "Company: Optimum Systems Ltd",
      "Email: info@optimumsystems.co.ke",
      "Phone: +254 723 653 910",
      "Website: www.optimumsystems.co.ke",
    ],
  },
];

const quickLinks = cookieSections.map((section) => ({
  id: section.id,
  label: section.title,
  icon: section.icon,
}));

const highlights = [
  "Clear explanation of cookie categories and usage",
  "User-focused controls for managing preferences",
  "Transparent treatment of analytics and third-party tools",
  "Consistent with broader privacy and data protection practices",
];

const contactDetails = [
  { label: "Email", value: "info@optimumsystems.co.ke" },
  { label: "Phone", value: "+254 723 653 910" },
  { label: "Website", value: "www.optimumsystems.co.ke" },
];

export default function CookiePolicyPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-50 font-sans text-slate-800">
      {/* Ambient layers */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute -right-32 top-32 h-96 w-96 rounded-full bg-red-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-blue-400/10 blur-[100px]" />
      </div>

      {/* Hero */}
      <section className="relative z-10 border-b border-slate-200/80 bg-white/70 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 sm:px-10 lg:px-16 lg:pb-20 lg:pt-28">
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.45)]" />
            Legal &amp; Privacy
          </div>

          <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div>
              <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                Cookie
                <span className="block bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                This policy explains how Optimum Systems Ltd uses cookies and
                similar technologies across its website and digital platforms,
                including the purpose of those technologies and the choices
                available to users.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                  Effective: 01 April 2026
                </span>
                <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700 shadow-sm">
                  Last Reviewed: 01 April 2026
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(15,23,42,0.08)]">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                At a Glance
              </p>
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-red-500">
                      <svg
                        className="h-3 w-3 text-white"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-sm leading-6 text-slate-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Layout */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16">
        <div className="flex gap-10 lg:gap-14">
          {/* Sidebar */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <div className="sticky top-10 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-[0_10px_40px_rgba(15,23,42,0.05)] backdrop-blur-sm">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Sections
              </p>

              <nav className="space-y-0.5">
                {quickLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-600 transition-all duration-200 hover:bg-slate-50 hover:text-slate-900"
                  >
                    <span className="text-slate-400 transition-colors duration-200 group-hover:text-blue-600">
                      {link.icon}
                    </span>
                    <span className="flex-1 leading-snug">{link.label}</span>
                    <ChevronRight className="h-3.5 w-3.5 translate-x-0 text-slate-300 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-blue-600 group-hover:opacity-100" />
                  </a>
                ))}
              </nav>

              <div className="my-5 h-px bg-slate-200" />

              <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-red-50 p-4">
                <Cookie className="mb-3 h-6 w-6 text-blue-700" />
                <p className="text-xs font-semibold text-slate-800">
                  Questions about cookies?
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Contact our team directly at{" "}
                  <span className="text-blue-700">
                    info@optimumsystems.co.ke
                  </span>
                </p>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="min-w-0 flex-1 space-y-5">
            <div className="mb-8 rounded-2xl border border-blue-100 bg-blue-50/80 px-6 py-5 shadow-sm">
              <p className="text-sm leading-7 text-slate-700">
                This Cookie Policy is designed to clearly explain how website
                technologies are used to support functionality, analytics,
                performance, and user experience across Optimum Systems Ltd
                digital platforms.{" "}
                <span className="text-slate-500">
                  Final legal review is recommended before publishing live,
                  especially where consent banners, analytics tooling, and
                  jurisdiction-specific cookie requirements apply.
                </span>
              </p>
            </div>

            {cookieSections.map((section, index) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-10 rounded-2xl border border-slate-200 bg-white/90 p-7 shadow-[0_8px_30px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-all duration-300 hover:border-slate-300 hover:shadow-[0_14px_40px_rgba(15,23,42,0.06)] sm:p-8"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-100 to-red-100 opacity-80" />
                    <span className="relative text-blue-700">
                      {section.icon}
                    </span>
                    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-red-600 text-[10px] font-bold text-white shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                      {section.title}
                    </h2>
                    <div className="mt-1.5 h-0.5 w-12 rounded-full bg-gradient-to-r from-blue-600 to-red-500" />
                  </div>
                </div>

                <div className="space-y-4 pl-0 lg:pl-16">
                  {section.content.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-7 text-slate-600 sm:text-[15px]"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && (
                    <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 transition-all duration-200 hover:border-blue-200 hover:bg-white"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-red-100 ring-1 ring-slate-200 transition-all duration-200 group-hover:from-blue-200 group-hover:to-red-200">
                            <svg
                              className="h-2.5 w-2.5 text-blue-700"
                              viewBox="0 0 10 10"
                              fill="none"
                            >
                              <path
                                d="M1.5 5l2.5 2.5 4.5-4.5"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <p className="text-sm leading-6 text-slate-600 transition-colors duration-200 group-hover:text-slate-800">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}

            {/* CTA block */}
            <div className="relative mt-8 overflow-hidden rounded-2xl border border-slate-200 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)] sm:p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50" />
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-blue-400/10 blur-3xl" />
              <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-red-400/10 blur-3xl" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700">
                    Need Clarification?
                  </p>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Speak to the Optimum team
                    <br />
                    <span className="text-xl font-normal text-slate-600">
                      about cookies and consent
                    </span>
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">
                    For questions about this policy, cookie technologies,
                    analytics usage, or consent preferences, contact our team
                    through the official channels below.
                  </p>
                </div>

                <div className="min-w-[260px] divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-md">
                  {contactDetails.map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex items-center gap-4 px-5 py-4"
                    >
                      <div className="w-16 shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {label}
                      </div>
                      <p className="break-all text-sm text-slate-700">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
