import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { ArrowUpRight, Leaf, Recycle, Users } from "lucide-react";

// Review this content against the latest approved CSR and sustainability information.
export const metadata: Metadata = buildMetadata(
  "CSR & Sustainability",
  "Reeldon environmental awareness, sustainable production and community support initiatives.",
  "/csr",
);

const items = [
  {
    icon: Leaf,
    title: "Environmental awareness",
    description:
      "Timber connects our work to the natural environment. Reeldon's published CSR material recognises environmental awareness and sustainable timber production as important priorities.",
  },
  {
    icon: Recycle,
    title: "Giving materials another use",
    description:
      "Sawdust, strips and other production offcuts can still be useful. Reeldon has described supplying these materials to nearby communities for practical uses.",
  },
  {
    icon: Users,
    title: "Practical community support",
    description:
      "Local support can take many forms. Making useful production by-products available to nearby communities is one example shared in Reeldon's CSR material.",
  },
] as const;

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] pt-28">
      <div className="mx-auto max-w-370 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <section>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#B45309]">
            Corporate Social Responsibility
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <h1 className="text-balance text-5xl font-black tracking-[-.055em] sm:text-6xl lg:text-7xl">
              Responsible timber starts beyond the product.
            </h1>
            <p className="max-w-xl text-base leading-8 text-[#2C1D11]/60 lg:justify-self-end">
              The way we work matters: to the natural resources behind our
              products, to the materials left over from production, and to the
              communities around us.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-[#2C1D11]/10 pt-5 text-sm text-[#2C1D11]/55">
            <span className="font-semibold text-[#2C1D11]">Our focus</span>
            <span aria-hidden="true">/</span>
            <span>Environmental awareness</span>
            <span aria-hidden="true">/</span>
            <span>Useful materials</span>
            <span aria-hidden="true">/</span>
            <span>Community support</span>
          </div>
        </section>

        <section
          className="mt-16 grid gap-5 md:grid-cols-3"
          aria-label="CSR priorities"
        >
          {items.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="flex min-h-70 flex-col rounded-3xl border border-[#2C1D11]/8 bg-white p-7 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <Icon size={23} className="text-[#285943]" aria-hidden="true" />
                <span className="text-xs font-bold tracking-[.16em] text-[#2C1D11]/30">
                  0{index + 1}
                </span>
              </div>
              <h2 className="mt-10 text-2xl font-black tracking-tight">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#2C1D11]/60">
                {description}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-5 grid gap-8 overflow-hidden rounded-3xl bg-[#2C1D11] p-7 text-white sm:p-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#D97706]">
              A practical approach
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-black tracking-tight sm:text-4xl">
              Make more of the materials we work with.
            </h2>
          </div>
          <div className="border-t border-white/15 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="text-sm leading-7 text-white/65">
              Timber processing creates useful by-products as well as finished
              products. Reeldon has highlighted supplying sawdust, strips and
              other offcuts to nearby communities for practical uses. It is a
              straightforward way to help keep those materials useful beyond the
              production floor.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/65">
              This is one part of a broader responsibility: staying aware of our
              environmental impact and working towards sustainable timber
              production.
            </p>
          </div>
        </section>

        <section className="mt-5 flex flex-col gap-6 rounded-3xl bg-[#F1EDE7] p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#B45309]">
              Start a conversation
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
              Want to learn more about our approach?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#2C1D11]/60">
              Get in touch with the Reeldon team for more information about our
              work, products and community initiatives.
            </p>
          </div>
          <Link
            href="/get-a-quote"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#2C1D11] px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#285943] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C1D11]"
          >
            Contact Reeldon <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </section>
      </div>
    </main>
  );
}
