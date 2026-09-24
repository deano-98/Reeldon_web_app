import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

// Checkout remains a reserved route while Reeldon uses a sales-led quotation process.
export const metadata: Metadata = buildMetadata(
  "Checkout",
  "Future checkout placeholder.",
  "/checkout",
);
export default function Page() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] pt-28">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="text-5xl font-black">
          Checkout is reserved for a future phase.
        </h1>
        <p className="mt-5 text-sm leading-7 text-[#2C1D11]/55">
          Reeldon&apos;s current flow is quote-led rather than e-commerce-led.
        </p>
      </div>
    </main>
  );
}
