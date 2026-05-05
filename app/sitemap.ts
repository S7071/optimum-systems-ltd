import type { MetadataRoute } from "next";

const SITE_URL = "https://optimumsystems.co.ke";

/**
 * Keep this honest.
 * Update this date only when page content, metadata, structured data,
 * internal links, or important page content has materially changed.
 */
const DEFAULT_LAST_MODIFIED = "2026-05-05";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

type SitemapPage = {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
  lastModified?: string;
};

function absoluteUrl(path: string) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

function toSitemapEntry(page: SitemapPage): MetadataRoute.Sitemap[number] {
  return {
    url: absoluteUrl(page.path),
    lastModified: page.lastModified ?? DEFAULT_LAST_MODIFIED,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: SitemapPage[] = [
    {
      path: "/",
      priority: 1,
      changeFrequency: "weekly",
    },
    {
      path: "/products",
      priority: 0.95,
      changeFrequency: "weekly",
    },
    {
      path: "/product-ecosystems",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/industry-solutions",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/sectors-we-serve",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/contact-us",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/help-center",
      priority: 0.75,
      changeFrequency: "monthly",
    },
    {
      path: "/changelog",
      priority: 0.65,
      changeFrequency: "weekly",
    },
  ];

  const productPages: SitemapPage[] = [
    {
      path: "/ultimate-erp",
      priority: 0.95,
      changeFrequency: "monthly",
    },
    {
      path: "/ultimate-cbe",
      priority: 0.95,
      changeFrequency: "monthly",
    },
    {
      path: "/ultimate-hms",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/ultimate-mfg",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/ultimate-pos",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/ultimate-scm",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/ultimate-cms",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/cbet",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/bams",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/hms",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/medflow",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/lend360",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/dairy-management-system",
      priority: 0.85,
      changeFrequency: "monthly",
    },
    {
      path: "/nexus-trade",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/pfms",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/qab",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/referral-management-module",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/rems",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/shopnearme",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/sms",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/turnstile-biometric-gate-control-system",
      priority: 0.8,
      changeFrequency: "monthly",
    },
  ];

  /**
   * Include these only if the schedule-demo pages have meaningful,
   * indexable content and self-referencing canonicals.
   *
   * If they are thin lead-capture pages, remove this array from the sitemap
   * and add noindex metadata to those routes instead.
   */
  const demoPages: SitemapPage[] = [
    "/ultimate-cbe/schedule-demo",
    "/ultimate-hms/schedule-demo",
    "/ultimate-mfg/schedule-demo",
    "/ultimate-pos/schedule-demo",
    "/ultimate-scm/schedule-demo",
    "/ultimate-cms/schedule-demo",
    "/bams/schedule-demo",
    "/cbet/schedule-demo",
    "/dairy-management-system/schedule-demo",
    "/hms/schedule-demo",
    "/lend360/schedule-demo",
    "/medflow/schedule-demo",
    "/nexus-trade/schedule-demo",
    "/pfms/schedule-demo",
    "/qab/schedule-demo",
    "/referral-management-module/schedule-demo",
    "/rems/schedule-demo",
    "/shopnearme/schedule-demo",
    "/turnstile-biometric-gate-control-system/schedule-demo",
  ].map((path) => ({
    path,
    priority: 0.45,
    changeFrequency: "monthly",
  }));

  const companyPages: SitemapPage[] = [
    {
      path: "/company",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/company/partners",
      priority: 0.75,
      changeFrequency: "monthly",
    },
    {
      path: "/company/gallery",
      priority: 0.65,
      changeFrequency: "monthly",
    },
    {
      path: "/company/team",
      priority: 0.65,
      changeFrequency: "monthly",
    },
    {
      path: "/company/careers",
      priority: 0.65,
      changeFrequency: "weekly",
    },
    {
      path: "/company/privacy-policy",
      priority: 0.25,
      changeFrequency: "yearly",
    },
    {
      path: "/company/cookie-policy",
      priority: 0.25,
      changeFrequency: "yearly",
    },
    {
      path: "/company/terms-of-service",
      priority: 0.25,
      changeFrequency: "yearly",
    },
  ];

  const resourcePages: SitemapPage[] = [
    {
      path: "/resources",
      priority: 0.7,
      changeFrequency: "weekly",
    },
    {
      path: "/resources/blogs",
      priority: 0.7,
      changeFrequency: "weekly",
    },
    {
      path: "/resources/blogs/company-website-rebrand",
      priority: 0.65,
      changeFrequency: "monthly",
    },
    {
      path: "/resources/case-studies",
      priority: 0.65,
      changeFrequency: "monthly",
    },
    {
      path: "/resources/documentations",
      priority: 0.55,
      changeFrequency: "monthly",
    },
  ];

  return [
    ...corePages,
    ...productPages,
    ...demoPages,
    ...companyPages,
    ...resourcePages,
  ].map(toSitemapEntry);
}