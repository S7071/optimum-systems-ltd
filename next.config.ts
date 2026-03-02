// next.config.ts
import type { NextConfig } from "next";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data:;
  connect-src 'self';
  font-src 'self' data:;
  frame-ancestors 'none';
`;

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "no-referrer" },
  { key: "Permissions-Policy", value: "geolocation=(), microphone=()" },
  { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }, // staging only
  { key: "Content-Security-Policy", value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim() },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false, // keep source maps off for staging
  // additional security headers for all routes
  // async headers() {
  //   return [
  //     {
  //       source: "/:path*",
  //       headers: securityHeaders,
  //     },
  //   ];
  // },
};

export default nextConfig;