"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/hooks";
import { PRICING_PLANS } from "@/lib/data";

type Currency = "INR" | "USD";

export default function PricingSection() {
  const [currency, setCurrency] = useState<Currency>("INR");
  useScrollReveal();

  return (
    <section id="invest" className="py-28 px-[6%]">
      <p className="reveal text-xs font-semibold tracking-[0.12em] uppercase text-[#d4a843] mb-3 text-center">
        Franchise packages
      </p>
      <h2 className="reveal font-serif text-[clamp(34px,4vw,56px)] font-black leading-tight tracking-tight text-center max-w-2xl mx-auto mb-4">
        Find your{" "}
        <em className="italic text-[#d4a843]">investment level</em>
      </h2>
      <p className="reveal text-center text-[#8a7d6b] font-light text-lg max-w-xl mx-auto mb-8 leading-relaxed">
        All packages include training, supply chain access, brand license, and a dedicated franchise partner. No hidden fees.
      </p>

      {/* Currency toggle */}
      <div className="reveal flex items-center justify-center gap-3 mb-14">
        <span className="text-sm text-[#8a7d6b]">Show prices in:</span>
        <div
          className="flex items-center rounded-full p-1 gap-1 border"
          style={{ background: "#0f0c08", borderColor: "rgba(255,220,140,0.18)" }}
        >
          {(["INR", "USD"] as Currency[]).map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border-none cursor-pointer font-sans ${
                currency === c
                  ? "bg-[#d4a843] text-[#0a0804] font-semibold"
                  : "bg-transparent text-[#8a7d6b] hover:text-[#f5efe6]"
              }`}
            >
              {c === "INR" ? "₹ INR" : "$ USD"}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.tier}
            data-hoverable
            className={`reveal relative rounded-2xl p-9 border transition-all duration-200 hover:-translate-y-1 ${
              plan.featured ? "border-[#d4a843]" : ""
            }`}
            style={{
              background: plan.featured
                ? "linear-gradient(150deg, rgba(212,168,67,0.07) 0%, #1a1510 60%)"
                : "#1a1510",
              borderColor: plan.featured ? "#d4a843" : "rgba(255,220,140,0.08)",
              boxShadow: plan.featured ? "0 0 80px rgba(212,168,67,0.1)" : "none",
            }}
          >
            {plan.featured && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#d4a843] text-[#0a0804] text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap tracking-wide">
                ⭐ Most popular
              </div>
            )}

            <div className="text-xs font-semibold tracking-[0.1em] uppercase text-[#8a7d6b] mb-3.5">
              {plan.tier}
            </div>
            <div className="font-serif text-5xl font-black text-[#f5efe6] leading-none mb-1.5">
              <sup className="text-xl align-super text-[#d4a843]">
                {currency === "INR" ? "₹" : "$"}
              </sup>
              {currency === "INR" ? plan.priceINR.replace("₹", "") : plan.priceUSD.replace("$", "")}
            </div>
            <div className="text-sm text-[#8a7d6b] font-light mb-7 leading-relaxed">{plan.desc}</div>
            <div className="h-px mb-6" style={{ background: "rgba(255,220,140,0.08)" }} />

            <ul className="list-none flex flex-col gap-3 mb-8">
              {plan.features.map((f) => (
                <li
                  key={f.text}
                  className={`flex items-start gap-2.5 text-sm font-light ${
                    f.included ? "text-[#8a7d6b]" : "opacity-30 text-[#8a7d6b]"
                  }`}
                >
                  <span className={`text-xs mt-0.5 flex-shrink-0 ${f.included ? "text-[#d4a843]" : "text-[#5a5046]"}`}>
                    {f.included ? "✦" : "×"}
                  </span>
                  {f.text}
                </li>
              ))}
            </ul>

            <button
              onClick={() => alert(`Applying for ${plan.tier}…`)}
              className={`w-full py-3 rounded-xl text-[15px] font-medium cursor-pointer font-sans transition-all duration-200 border ${
                plan.featured
                  ? "bg-[#d4a843] border-[#d4a843] text-[#0a0804] font-bold hover:bg-[#f0c96a] hover:shadow-[0_0_30px_rgba(212,168,67,0.3)]"
                  : "bg-transparent text-[#f5efe6] border-[rgba(255,220,140,0.18)] hover:border-[#d4a843] hover:text-[#d4a843]"
              }`}
            >
              {plan.btnLabel}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
