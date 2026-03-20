"use client";

import { useScrollReveal } from "@/lib/hooks";
import { WHY_CARDS } from "@/lib/data";

export default function WhySection() {
  useScrollReveal();

  return (
    <section id="why" className="py-28 px-[6%]">
      <p className="reveal text-xs font-semibold tracking-[0.12em] uppercase text-[#d4a843] mb-3 text-center">
        Why Roastoria
      </p>
      <h2 className="reveal font-serif text-[clamp(34px,4vw,56px)] font-black leading-tight tracking-tight text-center max-w-2xl mx-auto mb-4">
        Built for franchise success,{" "}
        <em className="italic text-[#d4a843]">not just coffee</em>
      </h2>
      <p className="reveal text-center text-[#8a7d6b] font-light text-lg max-w-xl mx-auto mb-16 leading-relaxed">
        Every system, every training module, every bean — designed so you can focus on running a great business, not learning one from scratch.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {WHY_CARDS.map((card) => (
          <div
            key={card.num}
            data-hoverable
            className="reveal relative overflow-hidden rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 group"
            style={{ background: "#1a1510", borderColor: "rgba(255,220,140,0.08)" }}
          >
            {/* Gold top line on hover */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
              style={{ background: "linear-gradient(90deg, transparent, #d4a843, transparent)" }}
            />
            {/* Ghost number */}
            <span
              className="absolute top-4 right-5 font-serif text-5xl font-black leading-none select-none pointer-events-none"
              style={{ color: "rgba(212,168,67,0.1)" }}
            >
              {card.num}
            </span>

            <div className="text-[28px] mb-5">{card.icon}</div>
            <h3 className="font-serif text-[20px] font-bold text-[#f5efe6] mb-2.5">{card.title}</h3>
            <p className="text-sm text-[#8a7d6b] font-light leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
