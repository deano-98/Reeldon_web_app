import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/metadata";
export function Footer() {
  return (
    <footer className="bg-[#2C1D11] text-white">
      <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#D97706]">
                Quality recognition
              </p>
              <p className="mt-2 text-lg font-semibold">
                Standards Association approved in finger joinery.
              </p>
              <p className="mt-1 text-sm text-white/50">
                Verify current certification documentation before publication.
              </p>
            </div>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D97706] px-5 py-3 text-sm font-bold"
            >
              Start a project <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-xl font-black tracking-[-.04em]">
              REELDON
            </Link>
            <div className="mt-1 text-[9px] font-bold tracking-[.28em] text-[#D97706]">
              TIMBERS
            </div>
            <p className="mt-6 max-w-xs text-sm leading-6 text-white/50">
              {siteConfig.description}
            </p>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[.18em] text-white/35">
              Explore
            </h2>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
              <Link href="/structural-timber">Structural Timber</Link>
              <Link href="/explore-timber">Explore Timber</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/about">About Us</Link>
              <Link href="/csr">CSR</Link>
            </div>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[.18em] text-white/35">
              Contact
            </h2>
            <div className="mt-5 space-y-4 text-sm text-white/65">
              <a href="tel:+263775091885" className="flex gap-3">
                <Phone size={16} className="text-[#D97706]" />{" "}
                {siteConfig.phone}
              </a>
              <a href="mailto:sales@reeldon.co.zw" className="flex gap-3">
                <Mail size={16} className="text-[#D97706]" /> {siteConfig.email}
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[.18em] text-white/35">
              Mutare Plant
            </h2>
            <a
              href="https://maps.google.com/?q=18+Edison+Sithole+Road+Mutare+Zimbabwe"
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex gap-3 text-sm leading-6 text-white/65"
            >
              <MapPin size={16} className="mt-1 shrink-0 text-[#D97706]" />
              <span>{siteConfig.address}</span>
            </a>
          </div>
        </div>
        <div className="pt-7 text-xs text-white/35">
          © {new Date().getFullYear()} Reeldon Timbers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
