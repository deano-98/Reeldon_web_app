import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/about",
    "/csr",
    // "/explore-timber",
    "/get-a-quote",
    "/asthetic-timber",
    "/asthetic-timber/doors",
    "/structural-timber",
    "/structural-timber/size-conversions",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));
}
