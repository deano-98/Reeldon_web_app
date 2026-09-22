import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { ProductGrid } from "@/components/products/ProductGrid";
export const metadata: Metadata = buildMetadata(
  "Projects & Aesthetic Timber",
  "Explore Reeldon mouldings, decking and flooring applications.",
  "/projects",
);
export default function Page() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] pt-28">
      <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#B45309]">
          Aesthetic timber
        </p>
        <h1 className="mt-4 max-w-5xl text-balance text-5xl font-black tracking-[-.055em] sm:text-6xl lg:text-7xl">
          Details that change the room.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#2C1D11]/60">
          Mouldings, decking and flooring for spaces where timber is part of the
          visual experience as well as the build.
        </p>
        <Link
          href="/projects/doors"
          className="mt-7 inline-flex items-center gap-2 rounded-xl border bg-white px-5 py-3 text-sm font-bold"
        >
          Explore doors <ArrowUpRight size={15} />
        </Link>
        <ProductGrid category="aesthetic" />
      </div>
    </main>
  );
}
