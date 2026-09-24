import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Leaf, Recycle, Users } from "lucide-react";

// Review this content against the latest approved CSR and sustainability information.
export const metadata: Metadata = buildMetadata(
  "CSR & Sustainability",
  "Reeldon environmental awareness, sustainable production and community support initiatives.",
  "/csr",
);
export default function Page() {
  // Keeping icon, title, and body together makes CSR cards easy to add or update.
  const items = [
    [
      Leaf,
      "Environmental awareness",
      "Reeldon says it takes environmental impact seriously and aims to contribute towards sustainable timber production.",
    ],
    [
      Recycle,
      "Reuse & recycling",
      "Sawdust, strips and other offcuts are supplied to nearby communities for practical uses.",
    ],
    [
      Users,
      "Community support",
      "The published CSR material describes support for nearby communities through useful production offcuts.",
    ],
  ] as const;
  return (
    <main className="min-h-screen bg-[#F5F5F4] pt-28">
      <div className="mx-auto max-w-370 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#B45309]">
          Corporate Social Responsibility
        </p>
        <h1 className="mt-4 text-balance text-5xl font-black tracking-[-.055em] sm:text-6xl lg:text-7xl">
          Responsible timber starts beyond the product.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#2C1D11]/60">
          Reeldon&apos;s published CSR material highlights environmental
          awareness, sustainable production and practical community support.
        </p>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map(([Icon, title, body]) => (
            <article key={title} className="rounded-3xl bg-white p-7">
              <Icon size={23} className="text-[#285943]" />
              <h2 className="mt-10 text-2xl font-black">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#2C1D11]/55">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
