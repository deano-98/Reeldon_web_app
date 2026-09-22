import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/about",
    "/csr",
    "/contact",
    "/explore-timber",
    "/get-a-quote",
    "/projects",
    "/projects/doors",
    "/structural-timber",
    "/structural-timber/size-conversions",
    "/login",
    "/register",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));
}
