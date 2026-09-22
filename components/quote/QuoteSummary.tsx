import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
export function QuoteSummary({ product }: { product?: string }) {
  return product ? (
    <div className="rounded-3xl bg-[#2C1D11] p-6 text-white">
      <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#D97706]">
        Quote item
      </p>
      <h2 className="mt-2 text-2xl font-black">{product}</h2>
      <p className="mt-2 text-sm leading-6 text-white/55">
        This product was pre-selected from the catalogue.
      </p>
    </div>
  ) : (
    <div className="rounded-3xl border border-[#2C1D11]/8 bg-[#F5F5F4] p-6">
      <div className="flex items-center gap-3">
        <ShoppingBag size={18} className="text-[#D97706]" />
        <p className="text-sm font-bold">No product pre-selected</p>
      </div>
      <p className="mt-2 text-sm leading-6 text-[#2C1D11]/55">
        Choose a product in the form or add one from the catalogue.
      </p>
      <Link
        href="/explore-timber"
        className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#B45309]"
      >
        <ArrowLeft size={15} /> Explore timber
      </Link>
    </div>
  );
}
