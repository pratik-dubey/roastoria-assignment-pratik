"use client";

import { useState } from "react";
import Link from "next/link";

const FOOTER_LINKS = {
  Franchise: ["Why Roastoria", "Packages & pricing", "How it works", "Franchisee stories", "Franchise FAQ"],
  Company: ["About us", "Our story", "Careers", "Press & media", "Blog"],
  Contact: ["franchise@roastoria.in", "+91 98765 43210", "Visit HQ — Bengaluru", "Privacy policy", "Terms of service"],
};

const SOCIALS = ["𝕏", "in", "f", "📸"];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer
      className="border-t px-[6%] pt-16 pb-10"
      style={{ background: "#0f0c08", borderColor: "rgba(255,220,140,0.08)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
        {/* Brand */}
        <div>
          <Link
            href="/"
            className="flex items-center gap-2.5 font-serif text-xl font-black text-[#f5efe6] no-underline mb-3.5"
          >
            <div className="w-7 h-7 rounded-full bg-[#d4a843] flex items-center justify-center text-sm">☕</div>
            Roastoria
          </Link>
          <p className="text-sm text-[#8a7d6b] font-light leading-relaxed max-w-[280px]">
            India&apos;s most loved premium coffee franchise. Empowering passionate entrepreneurs to build thriving café businesses since 2011.
          </p>
          {/* Newsletter */}
          <div className="flex gap-2 mt-6">
            <input
              type="email"
              placeholder="Your email for updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-lg px-3.5 py-2.5 text-sm text-[#f5efe6] placeholder-[#5a5046] border outline-none focus:border-[#d4a843] transition-colors font-sans"
              style={{ background: "#161109", borderColor: "rgba(255,220,140,0.08)" }}
            />
            <button
              onClick={() => { if (email) alert("Subscribed!"); }}
              className="bg-[#d4a843] border-none text-[#0a0804] px-4 py-2.5 rounded-lg text-sm font-semibold cursor-pointer font-sans hover:bg-[#f0c96a] transition-colors"
            >
              →
            </button>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="text-xs font-semibold tracking-[0.1em] uppercase text-[#f5efe6] mb-4">{heading}</h4>
            <ul className="list-none flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-[#8a7d6b] font-light no-underline hover:text-[#d4a843] transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        className="border-t pt-7 flex flex-wrap items-center justify-between gap-4"
        style={{ borderColor: "rgba(255,220,140,0.08)" }}
      >
        <p className="text-xs text-[#5a5046]">
          © 2025 Roastoria Franchise Pvt. Ltd. All rights reserved. FSSAI Lic. No. 10019022000234
        </p>
        <div className="flex gap-3">
          {SOCIALS.map((s, i) => (
            <Link
              key={i}
              href="#"
              className="w-9 h-9 rounded-full border flex items-center justify-center text-sm text-[#8a7d6b] no-underline hover:border-[#d4a843] hover:text-[#d4a843] transition-all duration-200"
              style={{ borderColor: "rgba(255,220,140,0.08)" }}
            >
              {s}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
