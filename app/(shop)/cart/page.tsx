import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
export const metadata: Metadata = buildMetadata(
  "Quote Basket",
  "Frontend-ready quote basket placeholder.",
  "/cart",
);
export default function Page() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] pt-28">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#B45309]">
          Future commerce layer
        </p>
        <h1 className="mt-4 text-5xl font-black">Your quote basket.</h1>
        <p className="mt-5 text-sm leading-7 text-[#2C1D11]/55">
          The current architecture is quote-led rather than payment-led.
        </p>
        <Link
          href="/get-a-quote"
          className="mt-8 inline-flex rounded-xl bg-[#D97706] px-5 py-3.5 text-sm font-bold text-white"
        >
          Build a Quote
        </Link>
      </div>
    </main>
  );
}
