// "use client";

// import Link from "next/link";

// const AVATARS = [
//   { letter: "R", bg: "#c8922a" },
//   { letter: "S", bg: "#6b4c2a" },
//   { letter: "P", bg: "#a07040" },
//   { letter: "A", bg: "#8b6030" },
//   { letter: "M", bg: "#d4a843" },
// ];

// export default function Hero() {
//   return (
//     <section className="min-h-screen relative flex items-center justify-center overflow-hidden text-center">

//       {/* FULL WIDTH BACKGROUND IMAGE */}
//       <div className="absolute inset-0 z-0">
//         {/* eslint-disable-next-line @next/next/no-img-element */}
//         <img
//           src="/coffee-hero.png"
//           alt=""
//           className="absolute inset-0 w-full h-full object-cover"
//           style={{ objectPosition: "50% 60%" }}
//         />
//         <div className="absolute inset-0" style={{ background: "rgba(8,6,2,0.68)" }} />
//         <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0a0804 0%, transparent 45%)" }} />
//         <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0a0804 0%, transparent 18%)" }} />
//         <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 65%, rgba(180,100,20,0.2) 0%, transparent 70%)" }} />
//       </div>

//       {/* CENTERED CONTENT */}
//       <div className="relative z-10 px-6 py-32 flex flex-col items-center max-w-4xl mx-auto">

//         <div
//           className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-8 rounded-sm text-xs font-medium tracking-widest uppercase text-[#d4a843] border"
//           style={{ background: "rgba(212,168,67,0.08)", borderColor: "rgba(212,168,67,0.2)", animation: "fadeUp 0.6s ease both" }}
//         >
//           <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843]" style={{ animation: "pulseDot 2s infinite" }} />
//           Franchise Opportunity · Est. 2011
//         </div>

//         <h1
//           className="font-serif font-black leading-none tracking-tight text-[#f5efe6]"
//           style={{ fontSize: "clamp(52px, 7vw, 96px)", animation: "fadeUp 0.7s 0.08s ease both" }}
//         >
//           <span className="block">Own a</span>
//           <span className="block italic text-[#d4a843]">Coffee Empire.</span>
//           <span className="block">Start with one</span>
//           <span className="block">perfect cup.</span>
//         </h1>

//         <p
//           className="mt-7 text-[#8a7d6b] text-lg font-light leading-relaxed max-w-xl"
//           style={{ animation: "fadeUp 0.7s 0.16s ease both" }}
//         >
//           Roastoria is India&apos;s fastest-growing premium coffee franchise. Join 480+
//           franchisees who turned a passion for coffee into a thriving, scalable business
//           — with our full support, every step.
//         </p>

//         <div
//           className="flex gap-3.5 mt-10 flex-wrap justify-center"
//           style={{ animation: "fadeUp 0.7s 0.24s ease both" }}
//         >
//           <Link
//             href="#cta"
//             className="inline-flex items-center gap-2 bg-[#d4a843] text-[#0a0804] font-semibold text-[15px] px-9 py-4 rounded-lg no-underline hover:bg-[#f0c96a] hover:-translate-y-0.5 transition-all duration-200"
//             style={{ boxShadow: "0 0 50px rgba(212,168,67,.35)" }}
//           >
//             Apply for a franchise →
//           </Link>
//           <Link
//             href="#why"
//             className="inline-flex items-center gap-2 border text-[#f5efe6] text-[15px] px-9 py-4 rounded-lg no-underline hover:border-[#d4a843] hover:text-[#d4a843] transition-all duration-200"
//             style={{ borderColor: "rgba(255,220,140,0.25)", background: "rgba(0,0,0,0.2)" }}
//           >
//             ▶ Watch our story
//           </Link>
//         </div>

//         <div
//           className="flex items-center gap-4 mt-12"
//           style={{ animation: "fadeUp 0.7s 0.32s ease both" }}
//         >
//           <div className="flex">
//             {AVATARS.map((av, i) => (
//               <div
//                 key={i}
//                 className="w-9 h-9 rounded-full border-2 border-[#0a0804] flex items-center justify-center text-sm font-bold text-[#0a0804] flex-shrink-0"
//                 style={{ background: av.bg, marginLeft: i === 0 ? 0 : -10 }}
//               >
//                 {av.letter}
//               </div>
//             ))}
//           </div>
//           <p className="text-sm text-[#8a7d6b]">
//             <strong className="text-[#f5efe6] font-medium">480+ franchisees</strong>{" "}
//             already brewing success
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }










"use client";

import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";

const AVATARS = [
  { letter: "R", bg: "#c8922a" },
  { letter: "S", bg: "#6b4c2a" },
  { letter: "P", bg: "#a07040" },
  { letter: "A", bg: "#8b6030" },
  { letter: "M", bg: "#d4a843" },
];

const FLIP_WORDS = ["perfect", "fabulous", "exceptional", "remarkable", "exquisite"];

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden text-center">

      {/* FULL WIDTH BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/coffee-hero.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "50% 60%" }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(8,6,2,0.68)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0a0804 0%, transparent 45%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0a0804 0%, transparent 18%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 65%, rgba(180,100,20,0.2) 0%, transparent 70%)" }} />
      </div>

      {/* CENTERED CONTENT */}
      <div className="relative z-10 px-6 py-32 flex flex-col items-center max-w-4xl mx-auto">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-8 rounded-sm text-xs font-medium tracking-widest uppercase text-[#d4a843] border"
          style={{ background: "rgba(212,168,67,0.08)", borderColor: "rgba(212,168,67,0.2)", animation: "fadeUp 0.6s ease both" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843]" style={{ animation: "pulseDot 2s infinite" }} />
          Franchise Opportunity · Est. 2011
        </div>

        {/* Headline */}
        <h1
          className="font-serif font-black leading-none tracking-tight text-[#f5efe6]"
          style={{ fontSize: "clamp(52px, 7vw, 96px)", animation: "fadeUp 0.7s 0.08s ease both" }}
        >
          <span className="block">Own a</span>
          <span className="block italic text-[#d4a843]">Coffee Empire.</span>
          <span className="block">Start with one</span>
          {/* FlipWords line */}
          <span className="flex items-center justify-center leading-none">
            <FlipWords
              words={FLIP_WORDS}
              duration={2500}
              className="font-serif font-black italic text-[#d4a843] px-0 [font-size:inherit]"
            />
            <span>cup.</span>
          </span>
        </h1>

        {/* Sub */}
        <p
          className="mt-7 text-[#8a7d6b] text-lg font-light leading-relaxed max-w-xl"
          style={{ animation: "fadeUp 0.7s 0.16s ease both" }}
        >
          Roastoria is India&apos;s fastest-growing premium coffee franchise. Join 480+
          franchisees who turned a passion for coffee into a thriving, scalable business
          — with our full support, every step.
        </p>

        {/* Actions */}
        <div
          className="flex gap-3.5 mt-10 flex-wrap justify-center"
          style={{ animation: "fadeUp 0.7s 0.24s ease both" }}
        >
          <Link
            href="#cta"
            className="inline-flex items-center gap-2 bg-[#d4a843] text-[#0a0804] font-semibold text-[15px] px-9 py-4 rounded-lg no-underline hover:bg-[#f0c96a] hover:-translate-y-0.5 transition-all duration-200"
            style={{ boxShadow: "0 0 50px rgba(212,168,67,.35)" }}
          >
            Apply for a franchise →
          </Link>
          <Link
            href="#why"
            className="inline-flex items-center gap-2 border text-[#f5efe6] text-[15px] px-9 py-4 rounded-lg no-underline hover:border-[#d4a843] hover:text-[#d4a843] transition-all duration-200"
            style={{ borderColor: "rgba(255,220,140,0.25)", background: "rgba(0,0,0,0.2)" }}
          >
            ▶ Watch our story
          </Link>
        </div>

        {/* Trust avatars */}
        <div
          className="flex items-center gap-4 mt-12"
          style={{ animation: "fadeUp 0.7s 0.32s ease both" }}
        >
          <div className="flex">
            {AVATARS.map((av, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border-2 border-[#0a0804] flex items-center justify-center text-sm font-bold text-[#0a0804] flex-shrink-0"
                style={{ background: av.bg, marginLeft: i === 0 ? 0 : -10 }}
              >
                {av.letter}
              </div>
            ))}
          </div>
          <p className="text-sm text-[#8a7d6b]">
            <strong className="text-[#f5efe6] font-medium">480+ franchisees</strong>{" "}
            already brewing success
          </p>
        </div>

      </div>
    </section>
  );
}