import { Award, BadgeCheck, ShieldCheck, Star } from "lucide-react";
const items = [
  [
    BadgeCheck,
    "SAZ approved",
    "Finger joinery approval is referenced by Reeldon.",
  ],
  [
    Award,
    "Established 1999",
    "Family business heritage in timber manufacturing.",
  ],
  [
    ShieldCheck,
    "People first",
    "Safety, integrity and transparency are stated values.",
  ],
  [
    Star,
    "Regional reach",
    "Reeldon states that it exports to South Africa, Zambia and the region.",
  ],
] as const;
export function AwardsSection() {
  return (
    <section
      id="awards"
      className="border-y border-white/10 bg-[#2C1D11] text-white"
    >
      <div className="mx-auto max-w-[1480px] px-5 py-7 sm:px-8 lg:px-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map(([Icon, title, body]) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D97706]">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-sm font-bold">{title}</p>
                <p className="mt-1 text-xs leading-5 text-white/50">{body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-[10px] text-white/30">
          Verify current certificates, awards and dates against official Reeldon
          documentation before publishing formal claims.
        </p>
      </div>
    </section>
  );
}
