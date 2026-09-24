import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/home/Hero";
import { AwardsSection } from "@/components/home/AwardsSection";
import { CoreValues } from "@/components/home/CoreValues";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CTASection } from "@/components/home/CTASection";

// Keep homepage metadata aligned with the brand message shown in the hero.
export const metadata: Metadata = buildMetadata(
  "Reimagine Timber. Reimagine Your World.",
  "Reeldon Timbers manufactures and supplies timber products from Mutare, Zimbabwe, with a focus on quality, service, integrity and continuous improvement.",
  "/",
);
export default function HomePage() {
  // These sections define the homepage reading order; update this sequence when the story changes.
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
