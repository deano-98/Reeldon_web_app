import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import type { Product } from "@/types";
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[#2C1D11]/8 bg-white">
      <div className="relative aspect-4/3 bg-[#F5F5F4]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width:768px) 100vw,33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#B45309]">
          {product.category}
        </p>
        <h2 className="mt-2 text-xl font-black">{product.name}</h2>
        <p className="mt-2 text-sm leading-6 text-[#2C1D11]/55">
          {product.description}
        </p>
        {product.sizes && (
          <p className="mt-4 text-xs font-semibold text-[#2C1D11]/60">
            Sizes: {product.sizes.join(" · ")} mm
          </p>
        )}
        <Link
          href={`/get-a-quote?product=${encodeURIComponent(product.name)}`}
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#2C1D11] px-4 py-3 text-xs font-bold text-white"
        >
          <ShoppingBag size={14} /> Add to Quote <ArrowUpRight size={14} />
        </Link>
      </div>
    </article>
  );
}
