import type { MetadataRoute } from "next";
import { site, navigation } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return navigation.map(([, path]) => ({
    url: `${site.domain}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
