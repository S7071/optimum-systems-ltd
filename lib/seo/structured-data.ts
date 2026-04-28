// lib/seo/structured-data.ts

const SITE_URL = "https://optimumsystems.co.ke";

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Optimum ERP Systems Ltd",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icon.png`,
    },
    sameAs: [
      "https://www.linkedin.com/company/optimumsystems",
      "https://x.com/Optimumcsystems",
      "https://web.facebook.com/optimumcomputersystems",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+254722846462",
      contactType: "customer support",
      areaServed: "KE",
      availableLanguage: ["English", "Swahili"],
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Optimum ERP Systems Ltd",
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function breadcrumbSchema(
  items: Array<{
    name: string;
    url: string;
  }>
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function productSchema(product: {
  name: string;
  slug: string;
  description: string;
  image?: string;
  category?: string;
  audience?: string;
}) {
  return {
    "@type": "Product",
    "@id": `${SITE_URL}/${product.slug}`,
    name: product.name,
    description: product.description,
    image: product.image
      ? `${SITE_URL}${product.image}`
      : `${SITE_URL}/og-image.png`,
    brand: {
      "@id": `${SITE_URL}/`,
    },
    category: product.category ?? "Enterprise Resource Planning Software",
    audience: {
      "@type": "Audience",
      audienceType: product.audience ?? "Businesses and institutions",
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5
      },
      author: {
        "@type": "Person",
        "name": "Sammy Chemoiwa"
      }
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.5,
      reviewCount: 200
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/${product.slug}`,
      priceCurrency: "KES",
      availability: "https://schema.org/InStock",
      price: "",
      seller: {
        "@id": `${SITE_URL}/`,
      },
    },
  };
}

export function faqPageSchema(
  faqs: Array<{
    question: string;
    answer: string;
  }>
) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function blogPostingSchema(post: {
  title: string;
  slug: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}) {
  return {
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${post.slug}#blogposting`,
    headline: post.title,
    description: post.description,
    image: post.image ? `${SITE_URL}${post.image}` : `${SITE_URL}/og-image.png`,
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    author: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: post.authorName ?? "Optimum ERP Systems Ltd",
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export function webPageSchema(page: {
  title: string;
  path: string;
  description: string;
}) {
  return {
    "@type": "WebPage",
    "@id": `${SITE_URL}${page.path}#webpage`,
    url: `${SITE_URL}${page.path}`,
    name: page.title,
    description: page.description,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function createJsonLdGraph(items: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), websiteSchema(), ...items],
  };
}