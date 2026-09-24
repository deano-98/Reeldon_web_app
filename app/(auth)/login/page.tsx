import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

// Authentication is currently a presentational placeholder until the customer portal is connected.
export const metadata: Metadata = buildMetadata(
  "Login",
  "Future Reeldon customer portal login.",
  "/login",
);
export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F5F4] px-5 pt-36 pb-24">
      <div className="mx-auto max-w-md rounded-3xl bg-white p-8">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-[#B45309]">
          Customer portal
        </p>
        <h1 className="mt-3 text-3xl font-black">Welcome back.</h1>
        {/* Replace this prevented submit with the portal sign-in action when authentication is available. */}
        <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
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
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-xs">
          No account?{" "}
          <Link href="/register" className="font-bold text-[#B45309]">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}
