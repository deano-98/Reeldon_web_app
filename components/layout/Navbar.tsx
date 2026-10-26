"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { mobileNavMotion, primaryNav, utilityNav } from "@/lib/constants";
import Image from "next/image";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Parent navigation remains active while a user visits one of its nested pages.
  const isActive = (href: string) =>
    href === "/"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    function closeMoreOnOutsideClick(event: PointerEvent) {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeMoreOnOutsideClick);
    return () =>
      document.removeEventListener("pointerdown", closeMoreOnOutsideClick);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-370 px-4 pt-4 sm:px-6 lg:px-8">
        <nav
          className={`${open ? "" : "glass"} relative rounded-2xl border px-4 py-3 shadow-[0_10px_40px_rgba(44,29,17,.08)] ${
            open
              ? "border-transparent bg-transparent shadow-none"
              : "border-black/5"
          }`}
          aria-label="Primary navigation"
        >
          <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="focus-ring flex shrink-0 items-center gap-2.5 rounded-md py-1 transition-opacity hover:opacity-90"
              aria-label="Reeldon Timbers home"
            >
              {/* Downscaled image bounds for a compact profile */}
              <Image
                src="/images/logo.png"
                alt="Reeldon Timbers logo"
                width={34}
                height={34}
                className={`h-7 w-7 object-contain transition-[filter] duration-300 sm:h-10 sm:w-10 ${
                  open ? "brightness-0 invert" : ""
                }`}
                priority
              />

              {/* Stacked typographic mark with tight line-heights */}
              <div className="flex flex-col justify-center leading-none">
                <span
                  className={`text-[11px] font-black tracking-tight sm:text-[12px] ${
                    open ? "text-white" : "text-neutral-900"
                  }`}
                >
                  REELDON
                </span>
                <span className="text-[7.5px] font-bold tracking-[0.2em] text-[#B45309] sm:text-[8px]">
                  TIMBERS
                </span>
              </div>
            </Link>
            <div className="hidden items-center gap-6 lg:flex">
              {primaryNav.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className={`focus-ring border-b-2 px-1 py-2 text-[12px] font-semibold text-[#2C1D11]/70 hover:text-[#2C1D11] ${isActive(href) ? "border-[#2C1D11] text-[#2C1D11]" : "border-transparent"}`}
                >
                  {label}
                </Link>
              ))}
              <div ref={moreRef} className="relative">
                <button
                  type="button"
                  onClick={() => setMoreOpen((current) => !current)}
                  aria-expanded={moreOpen}
                  className={`focus-ring flex items-center gap-1 border-b-2 px-1 py-2 text-[12px] font-semibold text-[#2C1D11]/70 ${utilityNav.some(([, href]) => isActive(href)) ? "border-[#2C1D11] text-[#2C1D11]" : "border-transparent"}`}
                >
                  More <ChevronDown size={13} />
                </button>
                <div
                  className={`absolute right-0 top-full mt-2 w-52 rounded-2xl border bg-white p-2 shadow-xl transition ${
                    moreOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-1 opacity-0"
                  }`}
                >
                  {utilityNav.map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMoreOpen(false)}
                      className={`block rounded-xl border-b-2 px-3 py-2.5 text-sm hover:bg-[#F5F5F4] ${isActive(href) ? "border-[#2C1D11] font-semibold" : "border-transparent"}`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden items-center gap-2 lg:flex">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-[#D97706] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#B45309]"
              >
                Get a Quote
              </Link>
            </div>
            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className={`focus-ring relative z-10 grid h-11 w-11 place-items-center rounded-xl transition-colors lg:hidden ${
                open ? "text-white" : "text-[#2C1D11]"
              }`}
            >
              <span className="relative block h-6 w-6">
                <span
                  className={`absolute left-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-in-out ${
                    open ? "top-2.75 rotate-45" : "top-1.75"
                  }`}
                  style={{
                    transitionDuration: `${mobileNavMotion.iconDurationMs}ms`,
                  }}
                />
                <span
                  className={`absolute left-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-in-out ${
                    open ? "top-2.75 -rotate-45" : "top-4.25"
                  }`}
                  style={{
                    transitionDuration: `${mobileNavMotion.iconDurationMs}ms`,
                  }}
                />
              </span>
            </button>
          </div>
          <div
            id="mobile-navigation"
            aria-hidden={!open}
            inert={!open}
            className="fixed inset-0 z-0 flex flex-col overflow-y-auto bg-[#2C1D11] px-8 pb-8 pt-28 text-white lg:hidden"
            style={{
              clipPath: open
                ? "circle(150vmax at calc(100% - 46px) 42px)"
                : "circle(0vmax at calc(100% - 46px) 42px)",
              transition: `clip-path ${mobileNavMotion.clipDurationMs}ms cubic-bezier(0.22, 1, 0.36, 1)`,
            }}
          >
            <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center text-center">
              {[...primaryNav, ...utilityNav].map(([label, href], index) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block py-5 text-lg font-semibold transition-[opacity,transform,color] hover:text-[#FBBF24] ${
                    isActive(href) ? "text-[#FBBF24]" : "text-white"
                  } ${open ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"}`}
                  style={{
                    transitionDuration: `${mobileNavMotion.linkDurationMs}ms`,
                    transitionDelay: open
                      ? `${mobileNavMotion.linkOpenDelayMs + index * mobileNavMotion.linkStaggerMs}ms`
                      : `${(primaryNav.length + utilityNav.length - index) * 20}ms`,
                  }}
                >
                  {label}
                </Link>
              ))}
              <div
                className={`pt-6 transition-[opacity,transform] ${
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
                style={{
                  transitionDuration: `${mobileNavMotion.linkDurationMs}ms`,
                  transitionDelay: open
                    ? `${mobileNavMotion.linkOpenDelayMs + (primaryNav.length + utilityNav.length) * mobileNavMotion.linkStaggerMs}ms`
                    : "0ms",
                }}
              >
                <Link
                  href="/get-a-quote"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-xl bg-white py-3.5 text-sm font-bold text-[#2C1D11] transition-colors hover:bg-[#F5F5F4]"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
