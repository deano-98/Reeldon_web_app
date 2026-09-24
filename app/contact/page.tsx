import type { Metadata } from "next";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { QuoteForm } from "@/components/quote/QuoteForm";

// Keep contact details sourced from siteConfig where possible so updates stay consistent across the site.
export const metadata: Metadata = buildMetadata(
  "Contact Reeldon Timbers",
  "Contact Reeldon Timbers in Mutare for timber enquiries and project quotations.",
  "/contact",
);
export default function Page() {
  return (
    <main className="min-h-screen bg-[#2C1D11] pt-28 text-white">
      <div className="mx-auto max-w-370 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#D97706]">
          Contact
        </p>
        <h1 className="mt-4 text-balance text-5xl font-black tracking-[-.055em] sm:text-6xl lg:text-7xl">
          Have a project in mind?
        </h1>
        <div className="mt-12 grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="text-[#D97706]" />
              <p className="text-sm leading-6 text-white/70">
                {siteConfig.address}
              </p>
            </div>
            <a href="tel:+263775091885" className="flex gap-4">
              <Phone className="text-[#D97706]" />
              <span className="text-sm text-white/70">{siteConfig.phone}</span>
            </a>
            <a href="mailto:sales@reeldon.co.zw" className="flex gap-4">
              <Mail className="text-[#D97706]" />
              <span className="text-sm text-white/70">{siteConfig.email}</span>
            </a>
            <a
              href="https://wa.me/263775091885"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#285943] px-5 py-3 text-sm font-bold"
            >
              <MessageCircle size={17} /> WhatsApp Sales
            </a>
          </div>
          <QuoteForm />
        </div>
      </div>
    </main>
  );
}
