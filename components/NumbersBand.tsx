"use client";

import { useCounter } from "@/lib/hooks";
import { STATS } from "@/lib/data";

export default function NumbersBand() {
  useCounter();

  return (
    <div id="numbers-band" className="py-14 px-[6%] flex justify-center">
      <div
        className="inline-flex flex-wrap justify-center gap-0 rounded-2xl overflow-hidden border"
        style={{ borderColor: "rgba(255,220,140,0.12)", background: "#0f0c08" }}
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center px-10 py-8 text-center relative"
            style={{
              borderRight: i < STATS.length - 1 ? "1px solid rgba(255,220,140,0.08)" : "none",
            }}
          >
            <div className="font-serif text-4xl font-black text-[#d4a843] leading-none">
              {stat.prefix && <span>{stat.prefix}</span>}
              <span data-count={stat.target} data-float={stat.isFloat ? "true" : "false"}>0</span>
              <span className="text-2xl">{stat.suffix}</span>
            </div>
            <div className="text-xs text-[#8a7d6b] mt-2 font-light whitespace-nowrap">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
