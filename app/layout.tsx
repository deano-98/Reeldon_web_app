import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/shared/LenisProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { organizationJsonLd, siteConfig } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Reeldon Timbers | Reimagine Timber. Reimagine Your World.",
    template: "%s | Reeldon Timbers",
  },
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Reeldon Timbers",
    description: siteConfig.description,
    images: [
      { url: "/og-image.svg", width: 1200, height: 630, alt: siteConfig.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reeldon Timbers",
    description: siteConfig.description,
    images: ["/og-image.svg"],
  },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2C1D11",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
