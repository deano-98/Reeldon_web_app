import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
export const metadata: Metadata = buildMetadata(
  "Register",
  "Future Reeldon customer portal registration.",
  "/register",
);
export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F5F4] px-5 pt-36 pb-24">
      <div className="mx-auto max-w-md rounded-3xl bg-white p-8">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-[#B45309]">
          Customer portal
        </p>
        <h1 className="mt-3 text-3xl font-black">Create an account.</h1>
        <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          <label className="block text-xs font-bold">
            Name
            <input
              required
              className="mt-2 w-full rounded-xl border px-4 py-3"
            />
          </label>
          <label className="block text-xs font-bold">
            Email
            <input
              required
              type="email"
              className="mt-2 w-full rounded-xl border px-4 py-3"
            />
          </label>
          <label className="block text-xs font-bold">
            Password
            <input
              required
              type="password"
              className="mt-2 w-full rounded-xl border px-4 py-3"
            />
          </label>
          <button className="w-full rounded-xl bg-[#D97706] px-5 py-3 text-sm font-bold text-white">
            Create account
          </button>
        </form>
        <p className="mt-6 text-center text-xs">
          Already registered?{" "}
          <Link href="/login" className="font-bold text-[#B45309]">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
