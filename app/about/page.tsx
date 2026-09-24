import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Users, ShieldCheck, HeartHandshake } from "lucide-react";

// Company claims and values shown here should be reviewed against approved brand copy.
export const metadata: Metadata = buildMetadata(
  "About Reeldon Timbers",
  "Learn about Reeldon Timbers, its family-business heritage, Mutare operation and people-first values.",
  "/about",
);
export default function Page() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] pt-28">
      <section className="min-h-screen px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-370">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#B45309]">
            About Reeldon
          </p>
          <h1 className="mt-5 max-w-5xl text-balance text-5xl font-black tracking-[-.055em] sm:text-6xl lg:text-8xl">
            A family business with timber at its core.
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-[#2C1D11]/60">
            Reeldon states that it was established in 1999, beginning as a
            one-person business and growing into a timber manufacturing company.
            It also states that it exports to South Africa, Zambia and the
            region.
          </p>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              [
                Users,
                "People first",
                "Reeldon describes a people-first approach and investment in its workforce.",
              ],
              [
                ShieldCheck,
                "Safety",
                "Value of life and safety is listed among the company&apos;s principles.",
              ],
              [
                HeartHandshake,
                "Integrity",
                "Honesty, truth, transparency and integrity are central stated values.",
              ],
            ].map(([Icon, title, body]) => (
              <article
                key={title as string}
                className="rounded-3xl bg-[#2C1D11] p-7 text-white"
              >
                <Icon size={22} className="text-[#D97706]" />
                <h2 className="mt-10 text-2xl font-black">{title as string}</h2>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  {body as string}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
