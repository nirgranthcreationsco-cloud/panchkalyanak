"use client";

import { Timer } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { Yojana } from "../types/yojana";

interface Props {
  setSelectedYojana: React.Dispatch<React.SetStateAction<Yojana | null>>;
}

export default function MainYojnaSection({ setSelectedYojana }: Props) {
  /* -------------------------------------------
     SSR-SAFE BASE YOJANA LIST (STATIC)
  -------------------------------------------- */
  const yojanas = useMemo<Yojana[]>(
    () => [
      { id: "general", name: "सामान्य इन्द्र–इन्द्राणी", amount: "₹ 3,100 (प्रत्येक)", seatsTotal: 24 },
      { id: "laukantik", name: "लौकान्तिक देव", amount: "₹ 21,000 (प्रत्येक)", seatsTotal: 24 },
      { id: "dhwajarohan", name: "24 ध्वजारोहण कर्ता", amount: "₹ 1,11,000 (प्रत्येक)", seatsTotal: 24 },
      { id: "vedhi", name: "मुख्य वेदी", amount: "₹ 5,11,000 (प्रत्येक)", seatsTotal: 24 }
    ],
    []
  );

  /* -------------------------------------------
     CLIENT–ONLY STATE (initialized AFTER mount)
  -------------------------------------------- */
  const [mounted, setMounted] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState<Record<string, number>>({});
  const [expiry, setExpiry] = useState<Record<string, number>>({});
  const [now, setNow] = useState(0);

  /* -------------------------------------------
     ON MOUNT → initialize timers & seats
  -------------------------------------------- */
  useEffect(() => {
    setMounted(true);

    const initialSeats = Object.fromEntries(
      yojanas.map((y) => [y.id, y.seatsTotal])
    );

    const initialExpiry = Object.fromEntries(
      yojanas.map((y) => [
        y.id,
        // random future timeout (client-only!)
        Date.now() + (2 + Math.floor(Math.random() * 5)) * 60000
      ])
    );

    setSeatsLeft(initialSeats);
    setExpiry(initialExpiry);
    setNow(Date.now());
  }, [yojanas]);

  /* -------------------------------------------
     TICK TIMER (client-only)
  -------------------------------------------- */
  useEffect(() => {
    if (!mounted) return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [mounted]);

  /* -------------------------------------------
     HANDLE EXPIRY → drop seats (client-only)
  -------------------------------------------- */
  useEffect(() => {
    if (!mounted) return;
    if (!now) return;

    let changed = false;
    const newSeats = { ...seatsLeft };
    const newExpiry = { ...expiry };

    yojanas.forEach((y) => {
      if (expiry[y.id] && expiry[y.id] <= now) {
        const drop = 1 + Math.floor(Math.random() * 2); // drop 1–2 seats
        newSeats[y.id] = Math.max(1, newSeats[y.id] - drop);

        // reset next timer
        newExpiry[y.id] =
          Date.now() + (2 + Math.floor(Math.random() * 5)) * 60000;

        changed = true;
      }
    });

    if (changed) {
      setSeatsLeft(newSeats);
      setExpiry(newExpiry);
    }
  }, [now, mounted, expiry, seatsLeft, yojanas]);

  /* -------------------------------------------
     CALCULATE REMAINING TIME
  -------------------------------------------- */
  const formatTime = (id: string) => {
    if (!mounted || !expiry[id] || !now) return "00:00";
    const diff = Math.max(0, Math.floor((expiry[id] - now) / 1000));
    const mm = String(Math.floor(diff / 60)).padStart(2, "0");
    const ss = String(diff % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  };

  if (!mounted) {
    // SSR-safe placeholder (hydration guaranteed)
    return (
      <section className="py-16 px-6 text-white text-center">
        <h2 className="text-4xl font-bold">पंचकल्याणक मुख्य योजनाएं</h2>
        <p className="opacity-80 text-lg mt-3">लोड हो रहा है…</p>
      </section>
    );
  }

  /* -------------------------------------------
     UI
  -------------------------------------------- */
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#8B0048] via-[#C04878] to-[#8B0048] text-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD76A] via-[#FAD2C1] to-[#FFD76A] mb-12">
          पंचकल्याणक मुख्य योजनाएं
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {yojanas.map((y) => {
            const left = seatsLeft[y.id] ?? y.seatsTotal;
            const time = formatTime(y.id);
            const width = Math.max(6, (left / y.seatsTotal) * 100);

            return (
              <div
                key={y.id}
                className="bg-white/10 backdrop-blur-lg border border-[#FFD76A]/40 rounded-3xl p-6 hover:-translate-y-2 transition-all shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#FFD76A] text-center">
                  {y.name}
                </h3>

                <p className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD76A] to-[#FAD2C1] text-center mt-2">
                  {y.amount}
                </p>

                <div className="text-center mt-4">
                  <p className="text-sm text-[#FAD2C1]/80">कुल सीटें: 24</p>
                  <p className="text-[#FFD76A] text-xl font-bold">शेष: {left}</p>
                </div>

                <div className="mt-3 bg-white/20 rounded-full h-2 overflow-hidden">
                  <div
                    style={{
                      width: `${width}%`,
                      background: "linear-gradient(90deg, #FFD76A, #FAD2C1)"
                    }}
                    className="h-2 rounded-full"
                  />
                </div>

                <div className="flex justify-between mt-4 text-sm text-[#FAD2C1]/90">
                  <div className="flex items-center gap-1">
                    <Timer className="w-4 h-4 text-[#FFD76A]" />
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

                <button
                  onClick={() => setSelectedYojana(y)}
                  className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-[#FFD76A] to-[#FAD2C1] text-[#8B0048] font-bold shadow-lg hover:scale-105 transition"
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
