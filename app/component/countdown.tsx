"use client";

import { useEffect, useState } from "react";

const EVENT_START = new Date("2026-02-19T00:00:00+05:30");
const EVENT_END   = new Date("2026-02-24T23:59:59+05:30");
const TOTAL_DAYS  = 6;

function getEventDay(): number {
  const diffMs = Date.now() - EVENT_START.getTime();
  const day = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
  return Math.min(Math.max(day, 1), TOTAL_DAYS);
}

const DAY_NAMES: Record<number, string> = {
  1: "शिलान्यास एवं प्रारंभ",
  2: "गर्भ कल्याणक",
  3: "जन्म कल्याणक",
  4: "दीक्षा कल्याणक",
  5: "केवलज्ञान कल्याणक",
  6: "मोक्ष कल्याणक · समापन",
};

export default function LiveEventBadge() {
  // lazy init avoids calling impure Date.now() during render
  const [day, setDay]         = useState<number>(() => getEventDay());
  const [visible, setVisible] = useState(false);
  const [isAfter]             = useState<boolean>(() => Date.now() > EVENT_END.getTime());

  useEffect(() => {
    const fadeIn  = setTimeout(() => setVisible(true), 100);
    const recalc  = setInterval(() => setDay(getEventDay()), 60_000);
    return () => { clearTimeout(fadeIn); clearInterval(recalc); };
  }, []);

  return (
    <div
      className={`mt-8 flex flex-col items-center gap-3 transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      {/* ── LIVE pill ─────────────────────────────── */}
      {!isAfter && (
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full
          bg-red-600/90 backdrop-blur-sm border border-red-400/60
          shadow-[0_0_18px_rgba(239,68,68,0.6)]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
          </span>
          <span className="text-white font-bold text-xs tracking-[0.18em] uppercase">
            Live Now
          </span>
        </div>
      )}

      {/* ── Main status card ──────────────────────── */}
      <div className="relative px-5 py-4 rounded-2xl overflow-hidden
        bg-white/10 backdrop-blur-md border border-[#FFD76A]/40
        shadow-[0_4px_30px_rgba(0,0,0,0.25)] text-center min-w-[280px]">

        {/* shimmer sweep */}
        <div className="pointer-events-none absolute inset-0 -skew-x-12
          bg-gradient-to-r from-transparent via-white/8 to-transparent
          animate-[shimmer_2.5s_ease-in-out_infinite]" aria-hidden="true" />

        {!isAfter ? (
          <>
            <p className="text-[#FAD2C1]/80 text-xs tracking-widest uppercase mb-1">
              आज का दिन
            </p>
            <div className="flex items-baseline justify-center gap-1 mb-1">
              <span className="text-4xl md:text-5xl font-extrabold
                text-transparent bg-clip-text
                bg-gradient-to-br from-[#FFD76A] via-[#FAD2C1] to-[#FFD76A]
                drop-shadow-[0_0_12px_rgba(255,215,106,0.6)]">
                {day}
              </span>
              <span className="text-[#FAD2C1]/70 text-lg font-semibold">/ {TOTAL_DAYS}</span>
            </div>
            <p className="text-[#FFD76A] text-sm font-semibold leading-snug">
              {DAY_NAMES[day]}
            </p>
          </>
        ) : (
          <>
            <p className="text-[#FFD76A] text-sm font-bold tracking-wide mb-1">
              ✨ महोत्सव सफलतापूर्वक संपन्न
            </p>
            <p className="text-[#FAD2C1]/80 text-xs">
              धन्यवाद – सभी भक्तजनों का हार्दिक आभार
            </p>
          </>
        )}

        {/* date strip */}
        <div className="mt-3 pt-3 border-t border-[#FFD76A]/20
          flex items-center justify-center gap-2
          text-[#FAD2C1]/70 text-xs tracking-wide">
          <span>📅</span>
          <span>19 – 24 फरवरी 2026 · बांसवाड़ा, राजस्थान</span>
        </div>
      </div>

      {/* ── Spiritual tagline ──────────────────────── */}
      <p className="text-[#FAD2C1]/60 text-[11px] tracking-widest italic">
        जय जिनेन्द्र 🙏
      </p>

      <style>{`
        @keyframes shimmer {
          0%   { transform: translateX(-120%) skewX(-12deg); }
          60%  { transform: translateX(220%)  skewX(-12deg); }
          100% { transform: translateX(220%)  skewX(-12deg); }
        }
      `}</style>
    </div>
  );
}
