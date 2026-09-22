import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
export const metadata: Metadata = buildMetadata(
  "Timber Doors",
  "Reeldon timber doors and framing, including batten, flush and panel designs in Pine and Saligna.",
  "/projects/doors",
);
const doors = [
  "Batten Door",
  "Ukuome Flush Door",
  "2 Panel Flush",
  "4 Panel White Flush",
  "6 Panel White Flush",
  "6 Panel Pine",
  "Manzarek Panel",
  "6 Panel Saligna",
  "8 Panel Saligna",
  "FLB Saligna",
];
export default function Page() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] pt-28">
      <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#B45309]">
          Doors & framing
        </p>
        <h1 className="mt-4 text-5xl font-black tracking-[-.055em] sm:text-6xl lg:text-7xl">
          A door is part of the architecture.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#2C1D11]/60">
          Reeldon&apos;s published doors are generally 2040mm × 815mm and
          include Pine and Saligna options. Confirm current availability with
          sales.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {doors.map((door) => (
            <article key={door} className="rounded-3xl border bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[.16em] text-[#B45309]">
                2040 × 815 mm
              </p>
              <h2 className="mt-3 text-xl font-black">{door}</h2>
              <Link
                href={`/get-a-quote?product=${encodeURIComponent(door)}`}
                className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#B45309]"
              >
                Inquire <ArrowUpRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
