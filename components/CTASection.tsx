"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/hooks";

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
}

export default function CTASection() {
  useScrollReveal();
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", city: "" });

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name.trim() || !form.email.trim()) {
      alert("Please enter your name and email.");
      return;
    }
    alert(`Thank you, ${form.name}! 🎉\n\nYour application is received. Our franchise team will contact you at ${form.email} within 24 hours.`);
    setForm({ name: "", email: "", phone: "", city: "" });
  };

  const inputClass =
    "flex-1 min-w-[180px] rounded-xl px-4 py-3.5 text-[15px] text-[#f5efe6] placeholder-[#5a5046] border outline-none transition-colors duration-200 font-sans focus:border-[#d4a843]";
  const inputStyle = { background: "#1a1510", borderColor: "rgba(255,220,140,0.18)" };

  return (
    <section id="cta" className="py-32 px-[6%] text-center relative overflow-hidden">
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,168,67,0.10) 0%, transparent 65%)" }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        <p className="reveal text-xs font-semibold tracking-[0.12em] uppercase text-[#d4a843] mb-3">
          Your next chapter starts here
        </p>
        <h2 className="reveal font-serif text-[clamp(34px,4vw,52px)] font-black leading-tight tracking-tight mb-4">
          Ready to own your{" "}
          <em className="italic text-[#d4a843]">first Roastoria?</em>
        </h2>
        <p className="reveal text-[#8a7d6b] text-lg font-light leading-relaxed mb-10">
          Leave your details and a Roastoria franchise advisor will reach out within 24 hours — no pressure, just a real conversation about your goals.
        </p>

        {/* Form */}
        <div className="reveal flex flex-wrap gap-2.5 justify-center mb-2.5">
          <input
            className={inputClass}
            style={inputStyle}
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange("name")}
          />
          <input
            className={inputClass}
            style={inputStyle}
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange("email")}
          />
        </div>
        <div className="reveal flex flex-wrap gap-2.5 justify-center mb-4">
          <input
            className={inputClass}
            style={inputStyle}
            type="tel"
            placeholder="Phone number"
            value={form.phone}
            onChange={handleChange("phone")}
          />
          <input
            className={inputClass}
            style={inputStyle}
            type="text"
            placeholder="Preferred city"
            value={form.city}
            onChange={handleChange("city")}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="reveal inline-flex items-center gap-2 bg-[#d4a843] text-[#0a0804] font-bold text-[15px] px-8 py-4 rounded-xl border-none cursor-pointer font-sans hover:bg-[#f0c96a] hover:-translate-y-0.5 transition-all duration-200"
          style={{ boxShadow: "0 0 40px rgba(212,168,67,0.25)" }}
        >
          Submit my application →
        </button>
        <p className="mt-4 text-xs text-[#5a5046]">
          Your information is confidential · No spam · Response within 24 hours
        </p>

        {/* Press logos */}
        <div className="reveal flex items-center justify-center gap-8 flex-wrap mt-16">
          <span className="text-xs text-[#5a5046] tracking-widest uppercase">As featured in</span>
          {["Economic Times", "YourStory", "Forbes India", "Inc42", "CNBC-TV18"].map((b) => (
            <span key={b} className="font-serif text-sm font-bold text-[#5a5046] tracking-wide hover:text-[#8a7d6b] transition-colors cursor-default">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
