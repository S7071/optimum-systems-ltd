import {
  Shield,
  Database,
  Eye,
  Lock,
  Share2,
  Clock,
  Cookie,
  UserCheck,
  ExternalLink,
  RefreshCw,
  Mail,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

type PolicySection = {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
  bullets?: string[];
};

const iconClass = "h-5 w-5";

const policySections: PolicySection[] = [
  {
    id: "overview",
    title: "Overview",
    icon: <Eye className={iconClass} />,
    content: [
      "At Optimum Systems Ltd, we respect your privacy and are committed to protecting the personal information you share with us through our website, forms, communication channels, and business platforms.",
      "This Privacy Policy explains what information we collect, how we use it, how we protect it, and the choices available to you when interacting with our services.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    icon: <Database className={iconClass} />,
    content: [
      "We may collect personal information that you voluntarily provide when you contact us, request a demo, submit an inquiry, apply for a role, subscribe to updates, or engage with our products and services.",
      "We may also automatically collect certain technical information when you browse our website or interact with digital platforms operated by Optimum Systems Ltd.",
    ],
    bullets: [
      "Full name, company name, job title, email address, and phone number",
      "Business details relevant to product inquiries, proposals, and onboarding",
      "Messages, support requests, and other communication records",
      "Device type, browser type, IP address, pages visited, and usage metadata",
      "Cookies and analytics data used to improve site performance and user experience",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    icon: <UserCheck className={iconClass} />,
    content: [
      "We use the information we collect to operate our website, respond to inquiries, provide product information, deliver services, improve user experience, and maintain the security and integrity of our platforms.",
      "Where permitted by law, we may also use your information to send relevant business updates, product announcements, or service communications.",
    ],
    bullets: [
      "Respond to contact requests, quotations, and demo inquiries",
      "Deliver, support, and improve our products and services",
      "Manage customer relationships and project delivery workflows",
      "Monitor platform security, availability, and fraud prevention",
      "Comply with legal, regulatory, and contractual obligations",
    ],
  },
  {
    id: "legal-basis",
    title: "Legal Basis for Processing",
    icon: <CheckCircle2 className={iconClass} />,
    content: [
      "We process personal information only where there is a valid legal basis to do so. Depending on the context, this may include your consent, the need to perform a contract, compliance with a legal obligation, or our legitimate business interests in operating and improving our services.",
    ],
  },
  {
    id: "sharing-disclosure",
    title: "Sharing and Disclosure",
    icon: <Share2 className={iconClass} />,
    content: [
      "We do not sell your personal information. We may share information with trusted service providers, partners, or advisers where necessary to operate our business, deliver services, maintain infrastructure, or comply with the law.",
      "Any third party handling information on our behalf is expected to apply appropriate confidentiality and security safeguards.",
    ],
    bullets: [
      "Cloud hosting, analytics, email, and support platform providers",
      "Professional advisers such as legal, compliance, or audit partners",
      "Authorities or regulators where disclosure is legally required",
      "Business partners directly involved in solution delivery or implementation",
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    icon: <Clock className={iconClass} />,
    content: [
      "We retain personal information only for as long as necessary to fulfill the purpose for which it was collected, including operational, legal, accounting, security, and reporting requirements.",
      "Where information is no longer required, we take reasonable steps to delete, anonymize, or securely archive it in accordance with applicable obligations.",
    ],
  },
  {
    id: "security",
    title: "Data Security",
    icon: <Lock className={iconClass} />,
    content: [
      "We implement appropriate technical and organizational measures designed to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.",
      "While no internet-based service can be guaranteed as completely secure, we continuously work to maintain strong security controls across our systems, infrastructure, and internal processes.",
    ],
    bullets: [
      "Access controls and least-privilege practices",
      "Secure hosting and infrastructure management",
      "Monitoring, logging, and vulnerability management",
      "Reasonable administrative and operational safeguards",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and Analytics",
    icon: <Cookie className={iconClass} />,
    content: [
      "Our website may use cookies and similar technologies to enhance functionality, understand usage trends, measure performance, and improve content relevance.",
      "You can manage cookie preferences through your browser settings. Disabling certain cookies may affect how parts of the website function.",
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    icon: <Shield className={iconClass} />,
    content: [
      "Subject to applicable law, you may have the right to request access to your personal information, request correction or deletion, object to certain processing, withdraw consent where processing is based on consent, or request restriction of use in specific circumstances.",
      "To exercise any of these rights, please contact us using the details provided below.",
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    icon: <ExternalLink className={iconClass} />,
    content: [
      "Our website may contain links to external websites or third-party platforms. We are not responsible for the privacy practices, security, or content of third-party services and encourage you to review their policies separately.",
    ],
  },
  {
    id: "policy-updates",
    title: "Changes to This Policy",
    icon: <RefreshCw className={iconClass} />,
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our services, legal obligations, or operational practices. Any updates will be published on this page together with the revised effective date.",
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    icon: <Mail className={iconClass} />,
    content: [
      "If you have any questions about this Privacy Policy or how your information is handled, please contact Optimum Systems Ltd through your official business email, phone number, or website contact channels.",
    ],
    bullets: [
      "Company: Optimum Systems Ltd",
      "Email: info@optimumsystems.co.ke",
      "Phone: +254 723 653 910",
      "Website: www.optimumsystems.co.ke",
    ],
  },
];

const quickLinks = policySections.map((section) => ({
  id: section.id,
  label: section.title,
  icon: section.icon,
}));

const highlights = [
  "Transparent data handling practices",
  "Clear explanation of usage and retention",
  "Security-focused operational approach",
  "Defined rights and contact pathways",
];

const contactDetails = [
  { label: "Email", value: "info@optimumsystems.co.ke" },
  { label: "Phone", value: "+254 723 653 910" },
  { label: "Website", value: "www.optimumsystems.co.ke" },
];

export default function PrivacyPolicyPage() {
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
            Legal &amp; Privacy
          </div>

          <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div>
              <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                Privacy
                <span className="block bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                This policy explains how Optimum Systems Ltd collects, uses,
                stores, and protects personal information across its website,
                digital platforms, customer interactions, and service delivery
                processes.
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

            <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm">
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
                <Shield className="mb-3 h-6 w-6 text-blue-700" />
                <p className="text-xs font-semibold text-slate-800">
                  Questions about your data?
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
                We are committed to responsible data handling and to maintaining
                transparency in how information is processed across our business
                operations. This page is structured to help visitors, customers,
                partners, and stakeholders understand our approach in a clear
                and accessible format.{" "}
                <span className="text-slate-500">
                  Final legal review is recommended before publishing live,
                  especially for jurisdiction-specific obligations.
                </span>
              </p>
            </div>

            {policySections.map((section, index) => (
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

            {/* CTA / Contact block */}
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
                      about data privacy
                    </span>
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">
                    For questions about this policy, personal data handling, or
                    service-specific privacy requirements, contact our team
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

            <p className="pb-6 text-center text-xs text-slate-500">
              © 2026 Optimum Computer Systems Ltd · All Rights Reserved · Crown
              Z Towers, 3rd Floor, Eastern Bypass, Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}