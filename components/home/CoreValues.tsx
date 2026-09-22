import { HeartHandshake, Scale, ShieldCheck, Sparkles } from "lucide-react";
const values = [
  [
    "Honesty",
    "Conduct ourselves with fairness and straightforwardness.",
    Scale,
  ],
  [
    "Truth & Transparency",
    "Lead with the truth and be forthright in dealing with issues.",
    Sparkles,
  ],
  [
    "Life & Safety",
    "Value people and act accordingly in daily functional processes.",
    ShieldCheck,
  ],
  [
    "Integrity",
    "Maintain strong moral principles for the benefit of customers.",
    HeartHandshake,
  ],
] as const;
export function CoreValues() {
  return (
    <section className="min-h-[80vh] bg-[#FAFAF9] py-24 sm:py-28">
      <div className="mx-auto max-w-370 px-5 sm:px-8 lg:px-12">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#B45309]">
          Our culture
        </p>
        <h2 className="mt-4 text-balance text-4xl font-black tracking-[-.045em] sm:text-5xl">
          People, principles and timber.
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {values.map(([title, body, Icon]) => (
            <article
              key={title}
              className="rounded-3xl border border-[#2C1D11]/8 bg-white p-7"
            >
              <Icon size={22} className="text-[#D97706]" />
              <h3 className="mt-12 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#2C1D11]/55">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
