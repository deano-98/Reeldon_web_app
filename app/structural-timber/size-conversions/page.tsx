import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { conversionRows } from "@/lib/constants";
import { ConversionTable } from "@/components/products/ConversionTable";

// Keep the displayed reference data in lib/constants.ts so other product views can reuse it.
export const metadata: Metadata = buildMetadata(
  "Structural Timber Size Conversions",
  "Reference Reeldon Timbers published timber size and quantity conversion data.",
  "/structural-timber/size-conversions",
);
export default function Page() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] pt-28">
      <div className="mx-auto max-w-370 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#B45309]">
          Builder reference
        </p>
        <h1 className="mt-4 text-5xl font-black tracking-tighter sm:text-6xl">
          Size conversions.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#2C1D11]/60">
          Use this as a reference. Confirm current commercial values with
          Reeldon before ordering.
        </p>
        <ConversionTable rows={conversionRows} />
      </div>
    </main>
  );
}
