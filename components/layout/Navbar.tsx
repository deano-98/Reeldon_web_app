"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, LogIn, Menu, ShoppingBag, X } from "lucide-react";
import { primaryNav, utilityNav } from "@/lib/constants";
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

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-370 px-4 pt-4 sm:px-6 lg:px-8">
        <nav
          className="glass rounded-2xl border border-black/5 px-4 py-3 shadow-[0_10px_40px_rgba(44,29,17,.08)]"
          aria-label="Primary navigation"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
            <Link
              href="/"
              className="focus-ring flex shrink-0 items-center gap-2.5 rounded-md py-1 transition-opacity hover:opacity-90"
              aria-label="Reeldon Timbers home"
            >
              {/* Downscaled image bounds for a compact profile */}
              <Image
                src="/images/logo.png"
                alt="Reeldon Timbers logo"
                width={34}
                height={34}
                className="h-7 w-7 object-contain sm:h-10 sm:w-10"
                priority
              />

              {/* Stacked typographic mark with tight line-heights */}
              <div className="flex flex-col justify-center leading-none">
                <span className="text-[11px] font-black tracking-tight text-neutral-900 sm:text-[12px]">
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
                aria-label="Quote basket"
                className="relative rounded-xl p-2.5"
              >
                <ShoppingBag size={18} />
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#D97706] px-1 text-[9px] font-bold text-white">
                  0
                </span>
              </Link>
              <Link
                href="/login"
                aria-label="Login"
                className="rounded-xl p-2.5"
              >
                <LogIn size={18} />
              </Link>
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-[#D97706] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#B45309]"
              >
                Get a Quote
              </Link>
            </div>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="rounded-xl p-2 lg:hidden"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
          {open && (
            <div className="border-t border-black/5 pt-3 lg:hidden">
              {[...primaryNav, ...utilityNav].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block border-b-2 py-3.5 text-sm font-semibold ${isActive(href) ? "border-[#2C1D11]" : "border-black/5"}`}
                >
                  {label}
                </Link>
              ))}
              <div className="flex gap-2 pt-4">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border py-3 text-sm font-semibold"
                >
                  <LogIn size={16} /> Login
                </Link>
                <Link
                  href="/get-a-quote"
                  onClick={() => setOpen(false)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#D97706] py-3 text-sm font-semibold text-white"
                >
                  <ShoppingBag size={16} /> Get a Quote
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
