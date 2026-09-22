import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/constants";
export function FeaturedProducts() {
  return (
    <section className="min-h-screen bg-[#F5F5F4] py-24 sm:py-28">
      <div className="mx-auto max-w-370 px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#B45309]">
              Featured range
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black tracking-[-.045em] sm:text-5xl">
              Built for the structure.
              <br />
              Finished for the space.
            </h2>
          </div>
          <Link
            href="/explore-timber"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#B45309]"
          >
            Explore all timber <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {products
            .filter((p) =>
              ["brandering", "mouldings", "doors", "decking"].includes(p.id),
            )
            .map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-3xl border border-[#2C1D11]/8 bg-white"
              >
                <div className="relative aspect-4/3 bg-[#F5F5F4]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width:768px) 100vw,50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#B45309]">
                    {product.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">{product.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#2C1D11]/55">
                    {product.description}
                  </p>
                  <Link
                    href={`/get-a-quote?product=${encodeURIComponent(product.name)}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#2C1D11] px-4 py-3 text-xs font-bold text-white"
                  >
                    Add to Quote <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
