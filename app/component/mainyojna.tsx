"use client";

import { Timer } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { Yojana } from "../types/yojana";

interface Props {
  setSelectedYojana: React.Dispatch<React.SetStateAction<Yojana | null>>;
}

export default function MainYojnaSection({ setSelectedYojana }: Props) {
  /* -------------------------------------------
     STATIC DEFINITION (Safe for SSR)
  ------------------------------------------- */
  const yojanas = useMemo(
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

  /* -------------------------------------------
     HYDRATION-SAFE STATES
  ------------------------------------------- */
  const [seatsLeft, setSeatsLeft] = useState<Record<string, number>>({});
  const [expiry, setExpiry] = useState<Record<string, number>>({});
  const [now, setNow] = useState<number>(0);

  /* -------------------------------------------
     INITIALIZE ONLY AFTER HYDRATION
  ------------------------------------------- */
  useEffect(() => {
    const initialSeats = Object.fromEntries(
      yojanas.map((y) => [y.id, y.seatsTotal])
    );

    const initialExpiry = Object.fromEntries(
      yojanas.map((y) => [
        y.id,
        Date.now() + (2 + Math.floor(Math.random() * 5)) * 60000,
      ])
    );

    setSeatsLeft(initialSeats);
    setExpiry(initialExpiry);
    setNow(Date.now());
  }, [yojanas]);

  /* -------------------------------------------
     UPDATE TIME EACH SECOND (Safe)
  ------------------------------------------- */
  useEffect(() => {
    const t = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(t);
  }, []);

  /* -------------------------------------------
     COUNTDOWN EXPIRY HANDLER
  ------------------------------------------- */
  useEffect(() => {
    if (!now) return;

    const newSeats = { ...seatsLeft };
    const newExpiry = { ...expiry };
    let changed = false;

    yojanas.forEach((y) => {
      if (!expiry[y.id]) return;

      if (expiry[y.id] <= now) {
        newSeats[y.id] = Math.max(1, newSeats[y.id] - 1);
        newExpiry[y.id] = Date.now() + (2 + Math.floor(Math.random() * 5)) * 60000;
        changed = true;
      }
    });

    if (changed) {
      setSeatsLeft(newSeats);
      setExpiry(newExpiry);
    }
  }, [now]);

  /* -------------------------------------------
     FORMAT TIME (No Date.now inside render)
  ------------------------------------------- */
  const formatTime = (end: number) => {
    const diff = Math.max(0, Math.floor((end - now) / 1000));
    const mm = String(Math.floor(diff / 60)).padStart(2, "0");
    const ss = String(diff % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  };

  if (!now) return null; // Prevent SSR mismatch

  /* -------------------------------------------
     UI
  ------------------------------------------- */
  return (
    <section className="relative py-16 px-6 bg-gradient-to-b from-[#8B0048] via-[#C04878] to-[#8B0048] text-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD76A] via-[#FAD2C1] to-[#FFD76A] mb-10 pt-2">
          पंचकल्याणक मुख्य योजनाएं
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {yojanas.map((y) => {
            const left = seatsLeft[y.id];
            const timeLeft = expiry[y.id] ? formatTime(expiry[y.id]) : "--:--";
            const width = y.seatsTotal ? (left / y.seatsTotal) * 100 : 100;

            return (
              <div
                key={y.id}
                className="bg-white/10 border border-[#FFD76A]/40 rounded-2xl p-6 backdrop-blur-lg hover:-translate-y-2 transition-all"
              >
                <h3 className="text-lg font-bold text-[#FFD76A] text-center">
                  {y.name}
                </h3>

                <p className="text-center text-xl font-extrabold bg-gradient-to-r from-[#FFD76A] to-[#FAD2C1] text-transparent bg-clip-text mt-2">
                  {y.amount}
                </p>

                <p className="mt-3 text-center text-sm text-[#FAD2C1]/90">
                  कुल सीटें: {y.seatsTotal}
                </p>

                <p className="text-center text-[#FFD76A] font-bold text-lg">
                  शेष: {left}
                </p>

                <div className="mt-3 bg-white/20 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${Math.max(6, width)}%`,
                      background: "linear-gradient(90deg, #FFD76A, #FAD2C1)"
                    }}
                  />
                </div>

                <div className="mt-4 flex justify-between text-sm text-[#FAD2C1]/90">
                  <div className="flex items-center gap-1">
                    <Timer className="w-4 h-4 text-[#FFD76A]" />
                    <span>{timeLeft}</span>
                  </div>
                  {left <= 6 ? (
                    <span className="text-red-300 animate-pulse font-semibold">
                      बहुत कम स्थान!
                    </span>
                  ) : (
                    <span>अवसर सीमित…</span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedYojana(y)}
                  className="mt-6 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#FFD76A] to-[#FAD2C1] text-[#8B0048] font-bold hover:scale-105 transition"
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
