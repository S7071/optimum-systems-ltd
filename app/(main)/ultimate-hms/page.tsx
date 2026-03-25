import SiteHero from "@/components/ultimate-ch/layout01/site-hero";
import SiteDemo from "@/components/ultimate-cbe/layout01/site-demo";
import SiteFooter from "@/components/optimum-systems/layout01/site-footer";
import SiteNavbar from "@/components/optimum-systems/layout01/site-navbar";
import SiteTestimonials from "@/components/ultimate-cbe/layout01/site-testimonials";
import SiteBanner from "@/components/optimum-systems/layout01/site-banner";
import SiteFaq from "@/components/optimum-systems/layout01/site-faq";
import SiteCta from "@/components/ultimate-cbe/layout02/site-cta";
import SitePricing from "@/components/ultimate-cbe/layout01/site-pricing";
import SiteCaseStudies from "@/components/ultimate-cbe/layout01/site-casestudies";
import HelpDeskButton from "@/components/optimum-systems/layout01/site-help-banner";
import WhatWeOfferSection from "@/components/ultimate-ch/layout01/section-whatweoffer";
import FeatureSplitSection from "@/components/ultimate-ch/layout01/section-featuresplit";
import StatsSection from "@/components/ultimate-ch/layout01/section-stats";
import {
  Calendar,
  ChartBarBigIcon,
  Target,
  FileEdit,
  Users2,
  TimerReset,
  Users,
  ShieldCheck,
  Clock,
  BarChart3,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <HelpDeskButton />
      <SiteBanner />
      <SiteNavbar />
      <SiteHero />
      <WhatWeOfferSection
        eyebrow="PLATFORM CAPABILITIES"
        title="What"
        titleSuffix="We Offer"
        description="Unify your hotel's every operation with UltimateHotelERP — Kenya's all-in-one cloud platform purpose-built to maximise occupancy, delight guests, and deliver real-time command over every revenue stream and department."
        card={[
          {
            title: "Accommodation & Front Desk",
            description:
              "Full-cycle room operations — dynamic pricing, real-time availability, seamless check-ins/check-outs, instant housekeeping status updates, and personalised guest profiles synced with global booking platforms like Booking.com and Airbnb.",
            icon: Calendar,
            cta: "Live Availability",
            featured: false,
          },
          {
            title: "CEO Analytics Dashboard",
            description:
              "Real-time occupancy rates, revenue per room, cross-department performance, billing summaries, and staff analytics — all consolidated into one executive command centre, accessible from any device, anywhere, at any time.",
            icon: ChartBarBigIcon,
            cta: "Live Insights",
            featured: true,
          },
          {
            title: "Billing & M-PESA Integration",
            description:
              "Automated invoicing, multi-payment processing (cash, card, M-PESA), split billing, and seamless bank integrations — every transaction reconciled instantly to eliminate revenue leakage and accelerate guest checkouts.",
            icon: Target,
            cta: "M-Pesa Ready",
            featured: false,
          },
          {
            title: "Restaurant, Pub & Bar",
            description:
              "Smart menu management, POS-integrated order taking, real-time kitchen tracking, automated inventory deductions, bottle-level pub monitoring, and performance analytics — turning dining and bar operations into data-driven profit centres.",
            icon: FileEdit,
            cta: "F&B Operations",
            featured: false,
          },
          {
            title: "Guest Management & CRM",
            description:
              "Complete guest profiles, stay histories, preferences, and loyalty tracking — paired with a self-service portal for online bookings, room requests, and payments — building long-term relationships that drive repeat visits and positive reviews.",
            icon: Users2,
            cta: "Guest Profiles",
            featured: false,
          },
          {
            title: "Conference, Events & Procurement",
            description:
              "Configure event spaces by capacity and layout, manage bookings via an interactive calendar, coordinate catering packages, and run end-to-end procurement for all hotel departments — from F&B supplies to housekeeping amenities — all in one system.",
            icon: TimerReset,
            cta: "All Departments",
            featured: false,
          },
        ]}
      />
      <FeatureSplitSection
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
        titlePrefix=""
        title="One System - Every Stay"
        titleSuffix="Ultimate Control"
        description="UltimateHotelERP replaces fragmented tools with a single cloud-based powerhouse — unifying reservations, housekeeping, restaurant POS, conference management, billing, and guest services into one intelligent system designed to maximise occupancy and profitability for Kenyan hospitality businesses."
        eyebrow="ALL-IN-ONE SOLUTION"
        badge="HMS ERP PLATFORM"
        bulletPoints={[
          {
            label:
              "Manage reservations, check-ins, and room availability in real time — from walk-ins to online bookings on Booking.com and Airbnb",
          },
          {
            label:
              "Drive revenue with CEO-level analytics covering occupancy rates, billing summaries, and cross-department performance",
          },
          {
            label:
              "Seamlessly process payments via M-PESA, card, and bank integrations with zero revenue leakage",
          },
        ]}
        cta={{
          cta: "Book a Demo",
          ctaLink: "/contact-us",
          action: "See Case Studies",
          actionLink: "ultimate-hms/case-studies",
        }}
        card={{
          title: "Today's Assessment Overview",
          stats: [
            {
              label: "Deluxe",
              value: 92,
              color: "bg-primary-cbe-500",
            },
            {
              label: "Standard",
              value: 78,
              color: "bg-[#2e86d4]",
            },
            {
              label: "Suite",
              value: 66,
              color: "bg-[#C0392B]",
            },
          ],
          overview: [
            {
              label: "Check-ins",
              value: 47,
              color: "bg-primary-cbe-500",
            },
            {
              label: "Check-outs",
              value: 12,
              color: "bg-[#2e86d4]",
            },
            {
              label: "Pending",
              value: 5,
              color: "bg-[#C0392B]",
            },
          ],
        }}
      />
      <StatsSection
        description="Never let a revenue opportunity slip through the cracks. UltimateHotelERP monitors occupancy, billing, restaurant sales, staff attendance, and procurement across every department — automatically alerting your team when action is needed, from any device, anywhere."
        title={
          <h3 className="text-2xl sm:text-4xl text-pretty leading-tight tracking-tight font-extrabold text-white">
            Run Smarter With{" "}
            <span className="text-primary-cta">Real-Time</span> Hotel Intelligence
          </h3>
        }
        eyebrow="INTELLIGENT OPERATIONS"
        bulletPoints={[
          {
            label: "Comprehensive Occupancy & Revenue Analytics",
            description:
              "Live dashboards showing room performance, revenue per department, billing summaries, and collection status — all in one executive view",
          },
          {
            label: "Seamless Payments via M-PESA & Bank Integration",
            description:
              "Fully automated invoicing, split billing, and reconciliation across M-PESA, card, and direct bank transfers with zero revenue leakage",
          },
          {
            label: "Configurable Access for Every Role — Receptionist to CEO",
            description:
              "Role-based permissions ensure every team member — from front desk to procurement — sees exactly what they need and nothing they shouldn't",
          },
        ]}
        statCards={[
          {
            value: "150+",
            description: "Institutions successfully deployed across Kenya and East Africa",
            icon: Users,
            accent: false,
          },
          {
            value: "12",
            description: "Fully integrated modules covering every hotel department in one system",
            icon: ShieldCheck,
            accent: true,
          },
          {
            value: "50%",
            description:
              "Reduction in administrative workload reported by Optimum clients",
            icon: Clock,
            accent: false,
          },
          {
            value: "24/7",
            description: "Cloud-hosted access with dedicated local Kenyan support always available",
            icon: BarChart3,
            accent: false,
          },
        ]}
      />
      <SiteTestimonials
        description="See how UltimateHotelERP has transformed hospitality management for properties across Kenya — streamlining operations, eliminating revenue leakage, and delivering outstanding guest experiences from a single unified platform."
        stats={[
          {
            value: "150+",
            label: "Properties successfully deployed",
          },
          {
            value: "50%",
            label: "Reduction in admin workload",
          },
          {
            value: "12",
            label: "Integrated modules per deployment",
          },
        ]}
        testimonies={[
          {
            name: "Samuel Otieno",
            position: "Front Office Manager",
            insitution: "Lake Naivasha Resort",
            avator: "/images/clients/01.jpg",
            rating: 4,
            testimony:
              "Since going live with UltimateHotelERP, our front desk and housekeeping teams finally speak the same language. Room status updates in real time, check-ins take seconds, and our billing errors have dropped to almost zero.",
            featured: false,
          },
          {
            name: "Patricia Wanjiku",
            position: "General Manager",
            insitution: "Serene Gardens Hotel",
            avator: "/images/clients/02.jpg",
            rating: 5,
            testimony:
              "The CEO dashboard alone was worth the switch. I can see today's occupancy, revenue per room type, and outstanding payments from my phone before I even arrive at the property. It has completely changed how I make decisions.",
            featured: true,
          },
          {
            name: "Brian Kamau",
            position: "Operations Director",
            insitution: "Acacia Conference & Leisure Centre",
            avator: "/images/clients/03.jpg",
            rating: 3,
            testimony:
              "Managing our restaurant, pub, and conference facilities used to mean juggling three different systems. UltimateHotelERP brought everything under one roof — billing, inventory, staffing — and our end-of-day reconciliation now takes minutes, not hours.",
            featured: false,
          },
        ]}
      />
      <SiteDemo
        title={
          <h2 className="font-extrabold text-2xl sm:text-4xl text-pretty leading-tight tracking-tight text-white">
            Get A Powerful Start
            <br />
            With <span className="text-primary-cta">UltimateHMS</span>
            <br />
            ERP Today
          </h2>
        }
        cards={[
          <div
            key="1"
            className="absolute -right-4 -top-4 hidden min-w-[168px] items-center gap-3 rounded-sm bg-white p-2 shadow-lg md:flex"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-blue-50">
              <TrendingUp
                size={4.5}
                className="size-4.5 text-primary-cbe-700"
              />
            </div>
            <div className="pr-5 flex flex-col gap-1">
              <p className="text-xs text-primary-cbe-800/40">Monthly Revenue</p>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-primary-cbe-800 leading-tight">
                  KES 248,575
                </span>
                <span className="rounded-full bg-green-50 px-1.5 py-0.5 text-[9px] text-green-600">
                  +6.84%
                </span>
              </div>
            </div>
          </div>,
          <div
            key="2"
            className="absolute -bottom-4 -left-4 hidden min-w-[188px] items-center gap-3 rounded-sm bg-white p-2 shadow-xl md:flex"
          >
            {/* Stacked avatars */}
            <div className="flex flex-shrink-0 -space-x-2">
              {(
                [
                  { initials: "AN", bg: "bg-primary-cbe-700" },
                  { initials: "BK", bg: "bg-red-500" },
                  { initials: "CM", bg: "bg-violet-600" },
                ] as const
              ).map(({ initials, bg }) => (
                <span
                  key={initials}
                  className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[9px] font-semibold text-white ${bg}`}
                >
                  {initials}
                </span>
              ))}
            </div>
            <div className="pr-5 flex flex-col gap-1">
              <p className="text-sm font-bold text-primary-cbe-800 leading-tight">
                Staff active now
              </p>
              <p className="text-xs text-primary-cbe-800/40">
                16 of 16 online today
              </p>
            </div>
          </div>,
        ]}
        videoSrc="https://www.youtube.com/embed/Da1hUqzoiAo?autoplay=1"
        videoTitle="Optimum ERP System – Product Walkthrough"
        mockupSrc="/images/cta.png"
        description="Built specifically for Kenya's hospitality industry. Manage reservations, housekeeping, restaurant POS, conference facilities, and billing — all from one cloud-based system that keeps your property running at peak performance around the clock."
        tags={[
          { label: "Reservations & Front Desk" },
          { label: "M-PESA & Bank Billing" },
          { label: "Restaurant & Pub POS" },
          { label: "CEO Analytics Dashboard" },
        ]}
        stats={[
          { label: "Properties deployed", value: "150+" },
          { label: "Integrated modules", value: "12" },
          { label: "System uptime", value: "99.8%" },
        ]}
      />
      <SitePricing />
      <SiteFaq />
      <SiteCta />
      <SiteCaseStudies
        description="Discover how hotels, resorts, and hospitality businesses across Kenya have transformed their operations, boosted revenue, and elevated guest experiences with UltimateHotelERP."
        caseStudies={[
          {
            industry: "ACCOMMODATION",
            title: "Naivasha Resort's Reservation & Occupancy Overhaul",
            stat: "40%",
            statLabel: "Increase in room occupancy within 3 months",
            coverSrc:
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-5oYbG-sEImY-unsplash.jpg",
            href: "#",
          },
          {
            industry: "FOOD & BEVERAGE",
            title: "Sarova's Restaurant & Pub Revenue Transformation",
            stat: "30%",
            statLabel: "Reduction in food waste through smart inventory tracking",
            coverSrc:
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-o9F8dRoSucM-unsplash.jpg",
            href: "#",
          },
          {
            industry: "FINANCE",
            title: "Acacia Hotel's M-PESA Billing & Zero Leakage Journey",
            stat: "80%",
            statLabel: "Faster payment reconciliation with automated M-PESA integration",
            coverSrc:
              "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-K1W9OjEgacI-unsplash.jpg",
            href: "#",
          },
        ]}
      />
      <SiteFooter />
    </div>
  );
}
