import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
export function CTASection() {
  return (
    <section className="bg-[#D97706] px-5 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-370">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-white/60">
              Have a project in mind?
            </p>
            <h2 className="mt-4 max-w-4xl text-balance text-5xl font-black tracking-tighter sm:text-6xl">
              Let's work out the timber.
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2C1D11] px-6 py-3.5 text-sm font-bold"
            >
              Get a Quote <ArrowUpRight size={16} />
            </Link>
            <a
              href="tel:+263775091885"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-bold"
            >
              <Phone size={15} /> Call Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
