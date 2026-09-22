import type { Metadata } from "next";
export const siteConfig = {
  name: "Reeldon Timbers",
  url: "https://reeldon.co.zw",
  description:
    "Reeldon Timbers is a Mutare-based timber manufacturer and supplier providing structural timber, mouldings, doors, decking and flooring products across Zimbabwe and the region.",
  phone: "+263 775 091 885",
  email: "sales@reeldon.co.zw",
  address:
    "Stand No. 11428, 18 Edison Sithole Road, Paulington Industrial Sites, Mutare, Zimbabwe",
} as const;

// Keep page descriptions flexible while preserving the shared site defaults.
export function buildMetadata(
  title: string,
  description: string = siteConfig.description,
  path = "",
): Metadata {
  const url = `${siteConfig.url}${path || "/"}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_ZW",
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.svg"],
    },
    robots: { index: true, follow: true },
  };
}
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Stand No. 11428, 18 Edison Sithole Road",
    addressLocality: "Mutare",
    addressRegion: "Manicaland",
    addressCountry: "ZW",
  },
};
