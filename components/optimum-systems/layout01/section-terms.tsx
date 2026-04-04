import {
  FileText,
  Scale,
  ShieldCheck,
  BadgeCheck,
  Ban,
  AlertTriangle,
  Lock,
  RefreshCw,
  Phone,
  ChevronRight,
  CheckCircle2,
  Gavel,
} from "lucide-react";

type TermsSection = {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
  bullets?: string[];
};

const iconClass = "h-5 w-5";

const termsSections: TermsSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    icon: <BadgeCheck className={iconClass} />,
    content: [
      "By accessing, browsing, or using the Optimum Systems Ltd website, platforms, products, or related services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you should not use the website or services.",
      "These terms apply to all visitors, prospective clients, customers, partners, and any other users who interact with our digital platforms or business services.",
    ],
  },
  {
    id: "scope-of-services",
    title: "Scope of Services",
    icon: <FileText className={iconClass} />,
    content: [
      "Optimum Systems Ltd provides technology solutions, enterprise software, business systems, implementation services, consulting, support, and related digital services. Any service engagement may also be subject to a separate proposal, statement of work, quotation, service contract, or implementation agreement.",
      "Where a separate signed agreement exists, that agreement will prevail in relation to the specific commercial or project relationship.",
    ],
    bullets: [
      "ERP implementation and customization services",
      "Software licensing and subscription-based solutions",
      "Technical support, maintenance, and advisory services",
      "Website, system integration, and digital transformation services",
    ],
  },
  {
    id: "use-of-website",
    title: "Use of Website and Platforms",
    icon: <ShieldCheck className={iconClass} />,
    content: [
      "You agree to use this website and any associated platforms lawfully, responsibly, and only for legitimate business or informational purposes. You must not misuse, disrupt, reverse-engineer, probe, or interfere with the normal operation, security, or availability of our systems.",
      "We reserve the right to suspend, restrict, or terminate access where misuse, abuse, unauthorized access attempts, or harmful activity is detected.",
    ],
    bullets: [
      "Do not upload malicious code, scripts, or harmful content",
      "Do not attempt unauthorized access to restricted systems or data",
      "Do not misuse forms, contact channels, or automated scraping tools",
      "Do not impersonate Optimum Systems Ltd or any third party",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    icon: <Scale className={iconClass} />,
    content: [
      "All website content, product descriptions, source materials, branding elements, designs, documentation, software components, and related intellectual property made available by Optimum Systems Ltd remain the property of Optimum Systems Ltd or its licensors unless expressly stated otherwise.",
      "No part of this website or its materials may be copied, reproduced, republished, distributed, modified, or exploited for commercial purposes without prior written permission.",
    ],
  },
  {
    id: "client-obligations",
    title: "Client Responsibilities",
    icon: <CheckCircle2 className={iconClass} />,
    content: [
      "Where you engage Optimum Systems Ltd for services, you are responsible for providing accurate information, timely approvals, required business inputs, lawful use of delivered systems, and cooperation necessary for successful delivery, onboarding, and support.",
      "Project timelines, deliverables, and support outcomes may be affected where required information, approvals, infrastructure access, or dependencies are delayed by the client or third parties.",
    ],
    bullets: [
      "Provide correct and complete business and technical information",
      "Review submissions, milestones, and approvals within agreed timelines",
      "Ensure lawful and authorized use of deployed systems",
      "Maintain confidentiality of credentials and administrative access",
    ],
  },
  {
    id: "payments-commercials",
    title: "Payments and Commercial Terms",
    icon: <Gavel className={iconClass} />,
    content: [
      "Fees, payment schedules, taxes, renewals, support charges, and commercial obligations are governed by the applicable quotation, invoice, proposal, contract, or service agreement issued by Optimum Systems Ltd.",
      "Unless otherwise stated in writing, all fees due for services, subscriptions, implementations, or licensing must be paid in accordance with the agreed commercial terms. Delayed payment may affect service continuity, support eligibility, or renewal status.",
    ],
  },
  {
    id: "third-party-services",
    title: "Third-Party Services and Integrations",
    icon: <AlertTriangle className={iconClass} />,
    content: [
      "Our solutions or website may integrate with, connect to, or reference third-party platforms, vendors, hosting providers, payment services, APIs, or external systems. Optimum Systems Ltd is not responsible for the availability, performance, pricing, policies, or operational changes of third-party services outside our direct control.",
      "Use of third-party platforms may also be governed by separate third-party terms, privacy policies, and licensing conditions.",
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    icon: <Lock className={iconClass} />,
    content: [
      "Both Optimum Systems Ltd and its clients may exchange confidential information during inquiries, demonstrations, implementation, support, and commercial engagement. Each party is expected to protect such information and use it only for legitimate business purposes related to the service relationship.",
      "Confidential information does not include information already public, lawfully obtained from another source, or independently developed without reliance on protected disclosures.",
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    icon: <Ban className={iconClass} />,
    content: [
      "The website and general informational content are provided on an 'as is' and 'as available' basis without warranties of any kind, except where expressly stated in a separate contractual agreement. While we aim to keep information accurate, current, and reliable, we do not guarantee that the website will always be uninterrupted, error-free, or free from technical defects.",
      "Nothing on this website constitutes binding legal, financial, regulatory, or implementation advice unless expressly included within a formal professional engagement.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    icon: <ShieldCheck className={iconClass} />,
    content: [
      "To the maximum extent permitted by applicable law, Optimum Systems Ltd shall not be liable for indirect, incidental, consequential, special, or punitive damages arising from use of the website, reliance on website content, service interruptions, third-party failures, or unauthorized access events beyond our reasonable control.",
      "Where liability cannot be excluded, it will be limited in accordance with the applicable contract, quotation, or governing law.",
    ],
  },
  {
    id: "termination",
    title: "Suspension or Termination",
    icon: <Ban className={iconClass} />,
    content: [
      "We reserve the right to suspend or terminate access to any website area, portal, support channel, or service where there is a breach of these terms, unlawful activity, misuse of systems, non-payment, security risk, or conduct that may harm Optimum Systems Ltd, its clients, infrastructure, or reputation.",
      "Termination of access does not waive any accrued rights, payment obligations, confidentiality duties, or surviving contractual provisions.",
    ],
  },
  {
    id: "changes-to-terms",
    title: "Changes to These Terms",
    icon: <RefreshCw className={iconClass} />,
    content: [
      "Optimum Systems Ltd may update these Terms & Conditions from time to time to reflect operational, legal, service, or policy changes. Updated versions will be published on this page together with the revised effective date.",
      "Continued use of the website or services after updated terms are published constitutes acceptance of the revised terms, unless otherwise prohibited by law.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    icon: <Scale className={iconClass} />,
    content: [
      "These Terms & Conditions shall be governed by and interpreted in accordance with the laws applicable in Kenya, unless otherwise stated in a separate binding agreement between the parties.",
      "Any disputes arising in connection with these terms or use of our services shall be addressed in accordance with the dispute-resolution framework, jurisdiction, or forum agreed between the parties where applicable.",
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    icon: <Phone className={iconClass} />,
    content: [
      "If you have any questions about these Terms & Conditions, commercial engagements, licensing, or service obligations, please contact Optimum Systems Ltd through the official contact channels below.",
    ],
    bullets: [
      "Company: Optimum Systems Ltd",
      "Email: info@optimumsystems.co.ke",
      "Phone: +254 723 653 910",
      "Website: www.optimumsystems.co.ke",
    ],
  },
];

const quickLinks = termsSections.map((section) => ({
  id: section.id,
  label: section.title,
  icon: section.icon,
}));

const highlights = [
  "Clear use, access, and conduct expectations",
  "Defined service, payment, and legal boundaries",
  "Protection of IP, confidentiality, and business interests",
  "Structured framework for liability and updates",
];

const contactDetails = [
  { label: "Email", value: "info@optimumsystems.co.ke" },
  { label: "Phone", value: "+254 723 653 910" },
  { label: "Website", value: "www.optimumsystems.co.ke" },
];

export default function TermsConditionsPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-50 font-sans text-slate-800">
      {/* Ambient layers */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute -right-32 top-32 h-96 w-96 rounded-full bg-red-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-blue-400/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Hero */}
      <section className="relative z-10 border-b border-slate-200/80 bg-white/70 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 sm:px-10 lg:px-16 lg:pb-20 lg:pt-28">
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.45)]" />
            Legal &amp; Commercial
          </div>

          <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div>
              <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                Terms &amp;
                <span className="block bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent">
                  Conditions
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                These terms govern access to the Optimum Systems Ltd website,
                digital platforms, products, and related services, including
                the rights, responsibilities, and obligations of all users and
                clients.
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
                <Scale className="mb-3 h-6 w-6 text-blue-700" />
                <p className="text-xs font-semibold text-slate-800">
                  Questions about these terms?
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
                These Terms &amp; Conditions are intended to provide a clear and
                commercially sound framework for the use of Optimum Systems Ltd
                digital platforms and services.{" "}
                <span className="text-slate-500">
                  Final legal review is recommended before publishing live,
                  especially where subscriptions, licensing, implementation
                  agreements, or sector-specific compliance obligations apply.
                </span>
              </p>
            </div>

            {termsSections.map((section, index) => (
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
                      about legal and service terms
                    </span>
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">
                    For questions about these terms, commercial engagement,
                    licensing, subscriptions, or service obligations, contact
                    our team through the official channels below.
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