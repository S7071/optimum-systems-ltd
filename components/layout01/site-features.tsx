"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Hexagon,
  Workflow,
  TrendingUp,
  Award,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

type FeatureItem = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const features: FeatureItem[] = [
  {
    title: "Competency-Based Assessment",
    description:
      "Auto-aligned to CBE goals & KNEC standards with precision competency tracking.",
    icon: Workflow,
  },
  {
    title: "Live Dashboards & Insights",
    description:
      "Real-time insights for students, parents & teachers with interactive visuals.",
    icon: TrendingUp,
  },
  {
    title: "Secure & Seamless Integration",
    description:
      "Works seamlessly with NEMIS & existing school systems for unified operations.",
    icon: Award,
  },
];

export default function SiteFeatures() {
  return (
    <section
      id="features"
      className="relative bg-background py-16 md:py-24 sm:px-30 px-6"
    >
      {/* ---------------- HEADER ---------------- */}
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center pb-12">
          <h3 className="text-2xl font-semibold md:text-3xl">What We Offer</h3>
          <p className="mt-4 text-muted-foreground">
            Streamline your business operations with powerful ERP solutions
            designed to enhance efficiency, drive growth, and deliver real-time
            insights across your organization.
          </p>
        </div>

        {/* ---------------- FEATURE GRID ---------------- */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-none bg-background shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="relative flex items-center justify-center">
                    <Hexagon className="h-24 w-24 text-primary/10" />
                    <Icon className="absolute h-8 w-8 text-primary" />
                  </div>

                  <h4 className="mt-6 text-xl font-medium">{feature.title}</h4>

                  <p className="mt-3 text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* ---------------- SECTION 2 ---------------- */}
      <div className="container mx-auto mt-16 px-4 md:mt-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image + Floating Card */}
          <div className="relative">
            <Image
              src="/images/saas/about.jpg"
              alt="SaaS dashboard preview"
              width={600}
              height={450}
              className="rounded-xl shadow-md"
              priority
            />

            <Card className="absolute -bottom-10 right-0 w-60 shadow-lg md:w-80">
              <CardContent className="p-6">
                <h5 className="text-lg font-semibold">Helpcenter Software</h5>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your digital transformation journey with dedicated support at
                  every stage.
                </p>

                <div className="mt-4 flex justify-between text-sm text-muted-foreground">
                  <span>Project Status</span>
                  <span>84%</span>
                </div>

                <Progress value={84} className="mt-2 h-2" />
              </CardContent>
            </Card>
          </div>

          {/* Text Content */}
          <div>
            <h4 className="text-2xl font-semibold md:text-3xl">
              Manage all your business <br /> operations on one integrated
              platform
            </h4>
            <p className="mt-4 text-muted-foreground">
              Optimum ERP brings together finance, inventory, procurement,
              sales, and reporting into a unified system. Streamline your
              workflows, gain real-time insights, and make data-driven decisions
              with our comprehensive enterprise resource planning solution
              designed for growing businesses.
            </p>

            <div className="mt-6">
              <Button asChild variant="link" className="p-0 text-primary">
                <Link href="#">
                  Find Out More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- SECTION 3 ---------------- */}
      <div className="container mx-auto mt-16 px-4 md:mt-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="order-1 md:order-2">
            <Image
              src="/images/saas/laptop.png"
              alt="Email notification dashboard"
              width={600}
              height={450}
              className="rounded-xl shadow-md"
            />
          </div>

          {/* Text */}
          <div className="order-2 md:order-1">
            <h4 className="text-2xl font-medium">
              Stay Informed With Real-Time Notifications
            </h4>

            <p className="mt-4 text-muted-foreground">
              Never miss critical business updates with intelligent alerts and
              notifications. Our ERP system monitors your key processes and
              automatically notifies stakeholders about important events,
              approvals needed, inventory levels, and financial
              thresholds—keeping your team aligned and responsive.
            </p>

            <ul className="mt-6 space-y-3 text-muted-foreground">
              {[
                "Comprehensive Business Intelligence & Analytics",
                "Scalable Solutions Backed by Expert Support",
                "Customizable Dashboards to Match Your Workflow",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="mr-3 h-5 w-5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Button asChild variant="link" className="p-0 text-primary">
                <Link href="/">
                  Find Out More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
