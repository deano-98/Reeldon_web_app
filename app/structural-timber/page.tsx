import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { ProductGrid } from "@/components/products/ProductGrid";

// This route is the parent section for structural products and their size references.
export const metadata: Metadata = buildMetadata(
  "Structural Timber",
  "Structural timber for roofs and structures: brandering, rafters, wall plates, fascia boards, purlins and beams.",
  "/structural-timber",
);
export default function Page() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] pt-28">
      <div className="mx-auto max-w-370 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#B45309]">
          For roofs & structures
        </p>
        <h1 className="mt-4 max-w-5xl text-balance text-5xl font-black tracking-[-.055em] sm:text-6xl lg:text-7xl">
          Structural timber that carries the build.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#2C1D11]/60">
          Though often hidden from view, structural timber provides the core
          strength that holds up residential and commercial builds. Used in
          roofs, ceilings, lintels, and framework, it is the backbone of safe
          construction. We supply strength-graded timber rated to handle
          demanding structural loads with total reliability.
          <br />
          <br />
          Speak with our sales representative to check available sizes and
          specs.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/structural-timber/size-conversions"
            className="inline-flex items-center gap-2 rounded-xl border bg-white px-5 py-3 text-sm font-bold"
          >
            Size conversions <ArrowUpRight size={15} />
          </Link>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 rounded-xl bg-[#D97706] px-5 py-3 text-sm font-bold text-white"
          >
            Get a Quote <ArrowUpRight size={15} />
          </Link>
        </div>
        <ProductGrid category="structural" />
      </div>
    </main>
  );
}
