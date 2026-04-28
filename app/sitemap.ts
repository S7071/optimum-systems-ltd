import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://optimumsystems.co.ke",
      lastModified: new Date(),
    },
    {
      url: "https://optimumsystems.co.ke/products",
      lastModified: new Date(),
    },
  ];
}