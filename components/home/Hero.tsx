import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Leaf, ShieldCheck, Sparkles } from "lucide-react";
export function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#F5F5F4]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-white/90 via-white/35 to-transparent" />
      <Image
        src="/images/hero.jpg"
        alt="Timber and sawmill inspired background"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="relative z-10 mx-auto w-full max-w-370 px-5 py-36 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#2C1D11]">
            <Image
              src="/images/logo.png"
              alt="Reeldon Timbers logo"
              width={34}
              height={34}
              /* brightness-0 invert turns dark pixels into crisp white */
              className="h-10 w-10 object-contain brightness-0 invert sm:h-12 sm:w-12"
              priority
            />
          </div>
          <p className="mt-5 text-sm font-black uppercase tracking-[.25em] text-[#B45309]">
            Reeldon Timbers
          </p>
          <h1 className="text-balance my-7 text-5xl font-black leading-[.92] tracking-[-.06em] sm:text-7xl lg:text-[92px]">
            Reimagine Timber.
            <br />
            <span className=" italic text-white">
              Reimagine Your World.
            </span>
          </h1>

          {/* <div className="mt-9 flex flex-row flex-wrap items-center justify-center gap-3">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D97706] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#B45309] sm:px-6 sm:py-3.5 sm:text-sm"
            >
              Get a Quote <ArrowUpRight size={14} className="sm:h-4 sm:w-4" />
            </Link>
            <Link
              href="/explore-timber"
              className="inline-flex items-center justify-center rounded-xl border border-[#2C1D11]/15 bg-white/70 px-4 py-2.5 text-xs font-bold text-[#2C1D11] transition-colors hover:bg-white/90 sm:px-6 sm:py-3.5 sm:text-sm"
            >
              Explore Timber
            </Link>
          </div> */}

          {/* <div className="mx-auto mt-10 grid grid-cols-3 max-w-lg gap-2 sm:gap-3">
            {[
              [ShieldCheck, "Honesty"],
              [Leaf, "Fair"],
              [Sparkles, "Reliable"],
            ].map(([Icon, label]) => (
              <div
                key={label as string}
                className="rounded-xl border border-[#2C1D11]/8 bg-white/55 p-2.5 text-center backdrop-blur-md sm:rounded-2xl sm:p-4"
              >
                <Icon className="mx-auto h-4 w-4 text-[#B45309] sm:h-5 sm:w-5" />
                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#2C1D11]/70 sm:mt-2 sm:text-xs sm:tracking-[.15em]">
                  {label as string}
                </p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
