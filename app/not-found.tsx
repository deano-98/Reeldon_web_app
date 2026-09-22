import Link from "next/link";
export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#FAFAF9] px-5 pt-24 text-center">
      <div>
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#B45309]">
          404
        </p>
        <h1 className="mt-4 text-5xl font-black">Timber trail not found.</h1>
        <p className="mt-4 text-sm text-[#2C1D11]/55">
          The page you&apos;re looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex rounded-xl bg-[#D97706] px-5 py-3 text-sm font-bold text-white"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
