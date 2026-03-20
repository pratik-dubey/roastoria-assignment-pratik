"use client";

import { useScrollReveal } from "@/lib/hooks";
import { REVIEWS, type Review } from "@/lib/data";

function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      className="w-[310px] flex-shrink-0 rounded-2xl p-6 border hover:border-[rgba(255,220,140,0.18)] transition-colors duration-200"
      style={{ background: "#1a1510", borderColor: "rgba(255,220,140,0.08)" }}
    >
      <div className="text-[#d4a843] text-sm tracking-[3px] mb-3">★★★★★</div>
      <p className="text-sm text-[#8a7d6b] font-light leading-relaxed mb-4 italic">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-2.5">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-[#0a0804] flex-shrink-0"
          style={{ background: review.color }}
        >
          {review.name[0]}
        </div>
        <div>
          <div className="text-sm font-semibold text-[#f5efe6]">{review.name}</div>
          <div className="text-xs text-[#8a7d6b]">{review.location}</div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ reviews, reverse = false }: { reviews: Review[]; reverse?: boolean }) {
  const doubled = [...reviews, ...reviews];
  return (
    <div className="marquee-wrap flex gap-5 overflow-hidden mb-4">
      <div className={reverse ? "marquee-track-rev" : "marquee-track"}>
        {doubled.map((r, i) => (
          <ReviewCard key={i} review={r} />
        ))}
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  useScrollReveal();

  return (
    <section id="stories" className="py-24 overflow-hidden">
      <div className="px-[6%]">
        <p className="reveal text-xs font-semibold tracking-[0.12em] uppercase text-[#d4a843] mb-3 text-center">
          Franchisee stories
        </p>
        <h2 className="reveal font-serif text-[clamp(34px,4vw,56px)] font-black leading-tight tracking-tight text-center max-w-2xl mx-auto mb-4">
          Real people,{" "}
          <em className="italic text-[#d4a843]">real businesses</em>
        </h2>
        <p className="reveal text-center text-[#8a7d6b] font-light text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Hear from Roastoria franchisees across India — from first-time entrepreneurs to seasoned restaurateurs.
        </p>
      </div>

      <MarqueeRow reviews={REVIEWS.slice(0, 5)} />
      <MarqueeRow reviews={REVIEWS.slice(3)} reverse />
    </section>
  );
}
