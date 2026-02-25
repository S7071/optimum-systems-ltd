"use client";

import {
    ChartBarBigIcon,
  ChevronRight,
  ClipboardClock,
  GraduationCap,
  HelpCircle,
  Search,
  ShoppingBag,
  User,
  Users,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface HelpCategory {
  icon: React.ReactNode;
  title: string;
  description: string;
  articles: number;
}

interface PopularTopic {
  title: string;
  href: string;
}

interface HelpProps {
  title?: string;
  categories?: HelpCategory[];
  popularTopics?: PopularTopic[];
  className?: string;
}

const DEFAULT_CATEGORIES: HelpCategory[] = [
  {
    icon: <GraduationCap className="size-6" />,
    title: "Student Management",
    description: "Enroll manage, and track student records",
    articles: 14,
  },
  {
    icon: <ChartBarBigIcon className="size-6" />,
    title: "Assessment & Grading",
    description: "Setting up assessments, rubrics, and report cards",
    articles: 11,
  },
  {
    icon: <ClipboardClock className="size-6" />,
    title: "Competency & Pathways",
    description: "CBE pathway setup, KNEC alignment, and mapping",
    articles: 13,
  },
  {
    icon: <Users className="size-6" />,
    title: "Parent & Student Portal",
    description: "Accessing dashboards, profiles, and notifications",
    articles: 10,
  },
  {
    icon: <User className="size-6" />,
    title: "Account & Settings",
    description: "User roles, permissions, profile, and system setup",
    articles: 7,
  },
  {
    icon: <ShoppingBag className="size-6" />,
    title: "Integrations",
    description: "NEMIS, e-learning tools, and third-party connections",
    articles: 10,
  },
];

const DEFAULT_TOPICS: PopularTopic[] = [
  { title: "How do I enroll a new student?", href: "#" },
  { title: "How to generate a student report card", href: "#" },
  { title: "Setting up learning pathways for Grade 10", href: "#" },
  { title: "How to reset my password", href: "#" },
  { title: "How do I add a new teacher account?", href: "#" },
  { title: "How to track student competency levels", href: "#" },
];

const SiteHelpCenter = ({
  title = "Help Center",
  categories = DEFAULT_CATEGORIES,
  popularTopics = DEFAULT_TOPICS,
}: HelpProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section
      className="py-16 md:py-32 flex items-center justify-center items-center w-full px-6 sm:px-30"
    >
      <div className="container max-w-5xl">
        {/* Header with Search */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            How can we help you today?
          </p>

          <div className="mx-auto mt-6 max-w-lg">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search for help articles, guides, and tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 pl-12 text-base"
              />
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group cursor-pointer gap-0 p-0 transition-shadow hover:shadow-md"
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{category.title}</h3>
                      <ChevronRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {category.description}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {category.articles} articles
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Topics */}
        <div className="rounded-lg border bg-muted/30 p-6">
          <h2 className="mb-4 flex items-center gap-2 font-semibold">
            <HelpCircle className="size-5" />
            Popular Topics
          </h2>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {popularTopics.map((topic, index) => (
              <a
                key={index}
                href={topic.href}
                className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors hover:bg-background"
              >
                <ChevronRight className="size-4 text-muted-foreground" />
                {topic.title}
              </a>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <Button className="mt-3">
            <a href="/ultimate-cbe/contact-us">Contact Support</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { SiteHelpCenter };
