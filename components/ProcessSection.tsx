"use client";

import { useScrollReveal } from "@/lib/hooks";
import { PROCESS_STEPS } from "@/lib/data";

export default function ProcessSection() {
  useScrollReveal();

  return (
    <section
      id="process"
      className="py-28 px-[6%] border-t border-b"
      style={{ background: "#0f0c08", borderColor: "rgba(255,220,140,0.08)" }}
    >
      <p className="reveal text-xs font-semibold tracking-[0.12em] uppercase text-[#d4a843] mb-3 text-center">
        How it works
      </p>
      <h2 className="reveal font-serif text-[clamp(34px,4vw,56px)] font-black leading-tight tracking-tight text-center max-w-2xl mx-auto mb-4">
        From application to{" "}
        <em className="italic text-[#d4a843]">opening day</em>
      </h2>
      <p className="reveal text-center text-[#8a7d6b] font-light text-lg max-w-xl mx-auto mb-16 leading-relaxed">
        Our streamlined process gets most franchisees from application to launch in under 90 days.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
        {/* Connector line (desktop only) */}
        <div
          className="absolute top-9 left-[12.5%] right-[12.5%] h-px hidden lg:block"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,220,140,0.18), #d4a843, rgba(255,220,140,0.18), transparent)",
          }}
        />

        {PROCESS_STEPS.map((step, i) => (
          <div
            key={step.num}
            data-hoverable
            className="reveal text-center relative z-10 group"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div
              className="w-[72px] h-[72px] rounded-full border flex items-center justify-center font-serif text-2xl font-black text-[#d4a843] mx-auto mb-6 transition-all duration-200 group-hover:bg-[rgba(212,168,67,0.08)] group-hover:border-[#d4a843]"
              style={{ background: "#1a1510", borderColor: "rgba(255,220,140,0.18)" }}
            >
              {step.num}
            </div>
            <h3 className="font-serif text-[17px] font-bold text-[#f5efe6] mb-2">{step.title}</h3>
            <p className="text-sm text-[#8a7d6b] font-light leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
