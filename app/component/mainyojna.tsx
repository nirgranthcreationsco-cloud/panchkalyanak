"use client";

import { Timer } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { Yojana } from "../types/yojana";

interface Props {
  setSelectedYojana: React.Dispatch<React.SetStateAction<Yojana | null>>;
}

export default function MainYojnaSection({ setSelectedYojana }: Props) {
  /* ---------------------------
     Seed Yojanas (All 24 seats)
  ---------------------------- */
  const yojanas = useMemo<Yojana[]>(
    () => [
      {
        id: "general",
        name: "सामान्य इन्द्र–इन्द्राणी",
        amount: "₹ 3,100 (प्रत्येक)",
        seatsTotal: 24,
      },
      {
        id: "laukantik",
        name: "लौकान्तिक देव",
        amount: "₹ 21,000 (प्रत्येक)",
        seatsTotal: 24,
      },
      {
        id: "dhwajarohan",
        name: "24 ध्वजारोहण कर्ता",
        amount: "₹ 1,11,000 (प्रत्येक)",
        seatsTotal: 24,
      },
      {
        id: "vedhi",
        name: "मुख्य वेदी",
        amount: "₹ 5,11,000 (प्रत्येक)",
        seatsTotal: 24,
      },
    ],
    []
  );

  /* ---------------------------
     Seats + Expiry Countdown
  ---------------------------- */
  const [seatsLeft, setSeatsLeft] = useState<Record<string, number>>(() =>
    Object.fromEntries(yojanas.map((y) => [y.id!, y.seatsTotal!]))
  );

  const [expiry, setExpiry] = useState<Record<string, number>>(() =>
    Object.fromEntries(
      yojanas.map((y) => [
        y.id!,
        Date.now() + (2 + Math.floor(Math.random() * 5)) * 60 * 1000,
      ])
    )
  );

  const [now, setNow] = useState(Date.now());

useEffect(() => {
  const t = setInterval(() => setNow(Date.now()), 1000);
  return () => clearInterval(t);
}, []);


  /* ---------------------------
     Expiry hit → reduce seats
  ---------------------------- */
  useEffect(() => {
    const iv = setInterval(() => {
      const now = Date.now();
      let changed = false;

      const newSeats = { ...seatsLeft };
      const newExp = { ...expiry };

      yojanas.forEach((y) => {
        if (expiry[y.id!] <= now) {
          const dec = 1 + Math.floor(Math.random() * 3);
          newSeats[y.id!] = Math.max(1, newSeats[y.id!] - dec);

          newExp[y.id!] =
            Date.now() + (2 + Math.floor(Math.random() * 5)) * 60 * 1000;

          changed = true;
        }
      });

      if (changed) {
        setSeatsLeft(newSeats);
        setExpiry(newExp);
      }
    }, 2000);

    return () => clearInterval(iv);
  }, [expiry, seatsLeft, yojanas]);

  /* ---------------------------
     Fake random FOMO seat drop
  ---------------------------- */
  useEffect(() => {
    const iv = setInterval(() => {
      setSeatsLeft((prev) => {
        const keys = Object.keys(prev);
        const pick = keys[Math.floor(Math.random() * keys.length)];
        const cur = prev[pick];

        if (cur <= 2) return prev;

        if (Math.random() < 0.45) {
          return { ...prev, [pick]: cur - 1 };
        }

        return prev;
      });
    }, 7000);

    return () => clearInterval(iv);
  }, []);

  const formatTime = (id: string) => {
  const remaining = expiry[id] - now;
  const diff = Math.max(0, Math.floor(remaining / 1000));
  const mm = String(Math.floor(diff / 60)).padStart(2, "0");
  const ss = String(diff % 60).padStart(2, "0");
  return `${mm}:${ss}`;
};


  /* ---------------------------
     UI SECTION
  ---------------------------- */
  return (
    <section className="relative py-12 px-4 sm:px-6 bg-gradient-to-b from-[#8B0048] via-[#C04878] to-[#8B0048] text-white leading-[1.55]">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header (NO EMOJIS) */}
        <div className="text-center mb-10">
          <h2
  className="
    inline-block
    text-3xl md:text-5xl 
    font-extrabold 
    tracking-wide
    leading-normal 
    py-2
    bg-clip-text text-transparent 
    bg-gradient-to-r from-[#FFD76A] via-[#FAD2C1] to-[#FFD76A]
  "
>
   मुख्य योजनाएं
</h2>

          <p className="text-base md:text-lg text-[#FAD2C1]/90 mt-2">
            प्रत्येक योजना में केवल 24 स्थान — पावन अवसर सीमित
          </p>

          <div className="flex items-center justify-center gap-2 text-[#FFD76A] mt-3">
            <Timer className="w-4 h-4" />
            <span className="font-medium">जल्दी करें — सीमित स्थान</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {yojanas.map((y) => {
            const left = seatsLeft[y.id!];
            const time = formatTime(y.id!);
            const width = Math.max(8, (left / y.seatsTotal!) * 100);

            return (
              <div
                key={y.id}
                className="bg-white/10 border border-[#FFD76A]/40 rounded-2xl p-6 backdrop-blur-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Name */}
                <h3 className="text-lg font-bold text-center text-[#FFD76A] mb-1">
                  {y.name}
                </h3>

                {/* Amount */}
                <p className="text-center text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD76A] to-[#FAD2C1]">
                  {y.amount}
                </p>

                {/* Seats */}
                <div className="text-center mt-3">
                  <p className="text-[#FAD2C1]/80 text-xs">कुल: 24</p>
                  <p className="text-[#FFD76A] font-bold text-lg">शेष: {left}</p>
                </div>

                {/* Progress Bar */}
                <div className="mt-3 bg-white/20 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${width}%`,
                      background:
                        "linear-gradient(90deg,#FFD76A,#FAD2C1)",
                    }}
                  />
                </div>

                {/* Countdown */}
                <div className="flex justify-between mt-3 text-xs text-[#FAD2C1]/90">
                  <div className="flex items-center gap-1">
                    <Timer className="w-3 h-3 text-[#FFD76A]" />
                    <span>{time}</span>
                  </div>

                  {left <= 6 ? (
                    <span className="text-red-300 font-semibold animate-pulse">
                      बहुत कम स्थान!
                    </span>
                  ) : (
                    <span>अवसर सीमित…</span>
                  )}
                </div>

                {/* CTA */}
                <button
                  onClick={() => setSelectedYojana(y)}
                  className="mt-5 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#FFD76A] to-[#FAD2C1] text-[#8B0048] font-semibold shadow-lg hover:scale-[1.03] transition-transform"
                >
                  यजमान बनें
                </button>
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}
