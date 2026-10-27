import type { Metadata } from "next";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { QuoteSummary } from "@/components/quote/QuoteSummary";

export const metadata: Metadata = buildMetadata(
  "Contact & Get a Quote",
  "Contact Reeldon Timbers in Mutare or request a timber quote for your project.",
  "/get-a-quote",
);

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product = "" } = await searchParams;

  return (
    <main className="min-h-screen bg-[#2C1D11] pt-28 text-white">
      <div className="mx-auto max-w-370 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#D97706]">
          Contact &amp; project enquiries
        </p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <h1 className="text-balance text-5xl font-black tracking-[-.055em] sm:text-6xl lg:text-7xl">
            Have a project in mind?
          </h1>
          <p className="max-w-xl text-base leading-8 text-white/65 lg:justify-self-end">
            Tell us what you are building and the timber you need. Our team can
            help with product enquiries and prepare a quote for your project.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-10">
          <aside className="space-y-5">
            <QuoteSummary product={product} />

            <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xs font-bold uppercase tracking-[.16em] text-[#D97706]">
                Contact Reeldon
              </h2>
              <div className="mt-5 space-y-5">
                <a
                  href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}
                  className="flex items-start gap-3 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <Phone
                    size={18}
                    className="mt-0.5 shrink-0 text-[#D97706]"
                    aria-hidden="true"
                  />
                  <span>{siteConfig.phone}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <Mail
                    size={18}
                    className="mt-0.5 shrink-0 text-[#D97706]"
                    aria-hidden="true"
                  />
                  <span>{siteConfig.email}</span>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <MessageCircle
                    size={18}
                    className="mt-0.5 shrink-0 text-[#D97706]"
                    aria-hidden="true"
                  />
                  <span>Message Sales on WhatsApp</span>
                </a>
                <div className="flex items-start gap-3 text-sm leading-6 text-white/75">
                  <MapPin
                    size={18}
                    className="mt-0.5 shrink-0 text-[#D97706]"
                    aria-hidden="true"
                  />
                  <span>{siteConfig.address}</span>
                </div>
              </div>
            </section>

            <p className="px-1 text-xs leading-5 text-white/45">
              Prefer to talk? Call or message Sales directly. For a detailed
              quote, include product, quantity, dimensions and delivery
              requirements in the form.
            </p>
          </aside>

          <section aria-label="Request a timber quote">
            <h2 className="sr-only">Request a timber quote</h2>
            <QuoteForm initialProduct={product} />
          </section>
        </div>
      </div>
    </main>
  );
}
