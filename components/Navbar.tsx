"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6%] h-[70px] transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(10,8,4,0.92)] backdrop-blur-xl border-b border-[rgba(255,220,140,0.08)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 font-serif text-xl font-black text-[#f5efe6] no-underline">
        <div className="w-7 h-7 rounded-full bg-[#d4a843] flex items-center justify-center text-sm flex-shrink-0">
          ☕
        </div>
        Roastoria
      </Link>

      {/* Links */}
      <ul className="hidden md:flex gap-9 list-none">
        {["Why Us", "Process", "Stories", "Invest"].map((item) => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase().replace(" us", "")}`}
              className="text-[#8a7d6b] text-sm font-normal no-underline hover:text-[#f5efe6] transition-colors duration-200"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTAs */}
      <div className="flex items-center gap-3">
        <Link
          href="#stories"
          className="hidden sm:block border border-[rgba(255,220,140,0.18)] text-[#f5efe6] px-5 py-2.5 rounded-md text-sm font-medium no-underline hover:border-[#d4a843] hover:text-[#d4a843] transition-all duration-200"
        >
          Franchise stories
        </Link>
        <Link
          href="#cta"
          className="bg-[#d4a843] text-[#0a0804] px-5 py-2.5 rounded-md text-sm font-semibold no-underline hover:bg-[#f0c96a] hover:-translate-y-0.5 transition-all duration-200"
        >
          Apply now →
        </Link>
      </div>
    </nav>
  );
}
