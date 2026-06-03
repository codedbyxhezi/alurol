import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/seo";

const routes = [
  "",
  "/produktet",
  "/sherbimet",
  "/rreth-nesh",
  "/projektet",
  "/kontakt",
  "/impressum",
  "/datenschutz",
  "/agb",
];

const locales = ["sq", "mk"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority:
        route === ""
          ? 1
          : route === "/produktet" || route === "/kontakt"
            ? 0.9
            : 0.75,
      alternates: {
        languages: {
          sq: `${siteUrl}/sq${route}`,
          mk: `${siteUrl}/mk${route}`,
          "x-default": `${siteUrl}/sq${route}`,
        },
      },
    }))
  );
}