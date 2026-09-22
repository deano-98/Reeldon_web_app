"use client";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
export function QuoteForm({
  initialProduct = "",
}: {
  initialProduct?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // Replace this delay with the production CRM or email service request.
    await new Promise((r) => setTimeout(r, 650));
    setLoading(false);
    setSubmitted(true);
  }
  if (submitted)
    return (
      <div className="flex min-h-125 flex-col items-center justify-center rounded-3xl bg-white p-8 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#285943] text-white">
          <CheckCircle2 />
        </div>
        <h2 className="mt-6 text-2xl font-black">Quote request received.</h2>
        <p className="mt-3 max-w-md text-sm leading-6 text-[#2C1D11]/55">
          This starter simulates submission. Connect the form to your database,
          CRM or email service before production.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-7 rounded-xl border px-5 py-3 text-sm font-bold"
        >
          Send another request
        </button>
      </div>
    );
  return (
    <form
      onSubmit={submit}
      className="rounded-3xl bg-white p-5 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {[
          ["Name", "name", "text", "Your name", true],
          ["Company", "company", "text", "Company / organisation", false],
          ["Phone", "phone", "tel", "+263...", true],
          ["Email", "email", "email", "you@company.com", false],
        ].map(([label, name, type, placeholder, required]) => (
          <label
            key={name as string}
            className="text-xs font-bold text-[#2C1D11]/65"
          >
            {label as string}
            <input
              name={name as string}
              type={type as string}
              placeholder={placeholder as string}
              required={required as boolean}
              className="mt-2 w-full rounded-xl border border-[#2C1D11]/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#D97706]"
            />
          </label>
        ))}
        <label className="text-xs font-bold text-[#2C1D11]/65">
          Product
          <select
            name="product"
            defaultValue={initialProduct}
            className="mt-2 w-full rounded-xl border border-[#2C1D11]/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#D97706]"
          >
            <option value="">Select a product</option>
            {[
              "Structural Timber",
              "Brandering",
              "Rafters",
              "Wall Plates",
              "Fascia Boards",
              "Purlins",
              "Beams",
              "Mouldings",
              "Doors",
              "Decking",
              "Flooring",
            ].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <label className="text-xs font-bold text-[#2C1D11]/65">
          Quantity
          <input
            name="quantity"
            placeholder="e.g. 100 pieces"
            className="mt-2 w-full rounded-xl border border-[#2C1D11]/10 bg-white px-4 py-3 text-sm"
          />
        </label>
        <label className="sm:col-span-2 text-xs font-bold text-[#2C1D11]/65">
          Specifications
          <input
            name="specification"
            placeholder="Dimensions, length, grade, treatment, etc."
            className="mt-2 w-full rounded-xl border border-[#2C1D11]/10 bg-white px-4 py-3 text-sm"
          />
        </label>
        <label className="sm:col-span-2 text-xs font-bold text-[#2C1D11]/65">
          Project details
          <textarea
            required
            name="message"
            rows={6}
            placeholder="Tell us what you are building and what you need..."
            className="mt-2 w-full resize-none rounded-xl border border-[#2C1D11]/10 bg-white px-4 py-3 text-sm"
          />
        </label>
      </div>
      <button
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#D97706] px-5 py-3.5 text-sm font-bold text-white disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            Request a Quote <ArrowUpRight size={16} />
          </>
        )}
      </button>
    </form>
  );
}