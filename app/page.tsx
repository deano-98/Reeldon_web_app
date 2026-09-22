import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/home/Hero";
import { AwardsSection } from "@/components/home/AwardsSection";
import { CoreValues } from "@/components/home/CoreValues";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CTASection } from "@/components/home/CTASection";
export const metadata: Metadata = buildMetadata(
  "Reimagine Timber. Reimagine Your World.",
  "Reeldon Timbers manufactures and supplies timber products from Mutare, Zimbabwe, with a focus on quality, service, integrity and continuous improvement.",
  "/",
);
export default function HomePage() {
  return (
    <main>
      <Hero />
      <AwardsSection />
      <CoreValues />
      <FeaturedProducts />
      <CTASection />
    </main>
  );
}
