import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { routes, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${siteUrl}/${routing.defaultLocale}${path}`,
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(routing.locales.map((l) => [l, `${siteUrl}/${l}${path}`])),
    },
  }));
}
