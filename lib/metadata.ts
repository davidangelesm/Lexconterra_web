import type { Metadata } from "next";
import { site } from "@/data/site";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${site.domain}${path}`,
      siteName: site.name,
      locale: "es_PE",
      type: "website",
    },
    twitter: { card: "summary", title, description },
  };
}
