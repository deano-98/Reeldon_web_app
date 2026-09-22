import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Leaf, Ruler, TreePine } from "lucide-react";
export const metadata: Metadata = buildMetadata(
  "Explore Timber",
  "Explore timber applications, species and practical considerations with Reeldon Timbers.",
  "/explore-timber",
);
export default function Page() {
  const items = [
    [
      Ruler,
      "Pine",
      "Light, versatile softwood commonly used across construction and interior applications.",
    ],
    [
      TreePine,
      "Saligna / Eucalyptus",
      "Hardwood option used for selected mouldings, doors and other applications.",
    ],
    [
      Leaf,
      "Treated hardwood",
      "Used by Reeldon for decking and flooring applications requiring durability.",
    ],
  ] as const;
  return (
    <main className="min-h-screen bg-[#F5F5F4] pt-28">
      <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#B45309]">
          Timber explorer
        </p>
        <h1 className="mt-4 text-5xl font-black tracking-[-.055em] sm:text-6xl lg:text-7xl">
          Know the material. Design the result.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#2C1D11]/60">
          Timber combines strength, warmth and natural character. Start with the
          application, then choose the appropriate material and treatment with
          the Reeldon team.
        </p>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map(([Icon, title, body]) => (
            <article key={title} className="rounded-3xl bg-white p-7">
              <Icon size={22} className="text-[#D97706]" />
              <h2 className="mt-10 text-2xl font-black">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#2C1D11]/55">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
