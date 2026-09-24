import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { QuoteSummary } from "@/components/quote/QuoteSummary";

// This server page reads the selected product from the URL and passes it into both quote components.
export const metadata: Metadata = buildMetadata(
  "Get a Quote",
  "Request a timber quote from Reeldon Timbers. Submit your product, dimensions, quantities and project requirements.",
  "/get-a-quote",
);
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await searchParams;
  // Door and product links encode the label so spaces and special characters survive the query string.
  const selected = product ? decodeURIComponent(product) : "";
  return (
    <main className="min-h-screen bg-[#FAFAF9] pt-28">
      <div className="mx-auto max-w-370 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#B45309]">
          Project enquiry
        </p>
        <h1 className="mt-4 text-balance text-5xl font-black tracking-tighter sm:text-6xl">
          Let&apos;s price the timber.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#2C1D11]/60">
          Tell us what you need. The more detail you provide, the easier it is
          for the sales team to prepare an accurate response.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-[.65fr_1.35fr]">
          <div className="space-y-5">
            <QuoteSummary product={selected} />
            <div className="rounded-3xl border bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[.16em] text-[#B45309]">
                Direct sales
              </p>
              <p className="mt-3 text-sm font-semibold">+263 775 091 885</p>
              <p className="mt-1 text-sm text-[#2C1D11]/55">
                sales@reeldon.co.zw
              </p>
            </div>
          </div>
          <QuoteForm initialProduct={selected} />
        </div>
      </div>
    </main>
  );
}
