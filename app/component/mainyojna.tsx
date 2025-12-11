"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Yojana } from "../types/yojana";

interface Props {
  setSelectedYojana: React.Dispatch<React.SetStateAction<Yojana | null>>;
}

export default function MainYojnaSection({ setSelectedYojana }: Props) {
  /* --------------------------------------------
     STATIC YOJNA LIST — SSR SAFE
  -------------------------------------------- */
  const yojanas = useMemo<Yojana[]>(
    () => [
      {
        id: "general",
        name: "सामान्य इन्द्र–इन्द्राणी",
        amount: "₹ 3,100 (प्रत्येक)",
        icon: null,
        seatsTotal: 24,
      },
      {
        id: "laukantik",
        name: "लौकान्तिक देव",
        amount: "₹ 21,000 (प्रत्येक)",
        icon: null,
        seatsTotal: 24,
      },
      {
        id: "dhwajarohan",
        name: "24 ध्वजारोहण कर्ता",
        amount: "₹ 1,11,000 (प्रत्येक)",
        icon: null,
        seatsTotal: 24,
      },
      {
        id: "vedhi",
        name: "मुख्य वेदी",
        amount: "₹ 5,11,000 (प्रत्येक)",
        icon: null,
        seatsTotal: 24,
      },
    ],
    []
  );

  /* --------------------------------------------
     SEATS LEFT (Client Side Only)
  -------------------------------------------- */
  const [seatsLeft, setSeatsLeft] = useState<Record<string, number>>({});

  useEffect(() => {
    // initialize only on client
    const init = Object.fromEntries(yojanas.map((y) => [y.id, y.seatsTotal]));
    setSeatsLeft(init);
  }, [yojanas]);

  /* --------------------------------------------
     RANDOM DROP FOMO (Client Side)
  -------------------------------------------- */
  useEffect(() => {
    if (Object.keys(seatsLeft).length === 0) return;

    const iv = setInterval(() => {
      setSeatsLeft((prev) => {
        const keys = Object.keys(prev);
        const pick = keys[Math.floor(Math.random() * keys.length)];
        const cur = prev[pick];

        if (cur <= 2) return prev;

        if (Math.random() < 0.35) {
          return { ...prev, [pick]: cur - 1 };
        }

        return prev;
      });
    }, 6000);

    return () => clearInterval(iv);
  }, [seatsLeft]);

  /* --------------------------------------------
     UI
  -------------------------------------------- */
  return (
    <section className="relative py-16 px-6 bg-gradient-to-b from-[#8B0048] via-[#C04878] to-[#8B0048] text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD76A] via-[#FAD2C1] to-[#FFD76A] pb-1">
            पंचकल्याणक मुख्य योजनाएं
          </h2>
          <p className="text-lg text-[#FAD2C1]/90 mt-3">
            प्रत्येक योजना में केवल 24 स्थान — पावन अवसर सीमित ✨
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {yojanas.map((y) => {
            const left = seatsLeft[y.id] ?? y.seatsTotal;
            const width = Math.max(6, (left / y.seatsTotal) * 100);

            return (
              <div
                key={y.id}
                className="bg-white/10 border border-[#FFD76A]/40 rounded-3xl p-6 backdrop-blur-lg transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-center text-[#FFD76A]">
                  {y.name}
                </h3>

                <p className="text-center text-2xl font-extrabold bg-gradient-to-r from-[#FFD76A] to-[#FAD2C1] bg-clip-text text-transparent mt-2">
                  {y.amount}
                </p>

                <div className="text-center mt-4">
                  <p className="text-[#FAD2C1]/80 text-sm">कुल : 24</p>
                  <p className="text-[#FFD76A] font-bold text-lg">शेष: {left}</p>
                </div>

                {/* Progress bar */}
                <div className="mt-3 bg-white/20 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${width}%`,
                      background:
                        "linear-gradient(90deg, #FFD76A, #FAD2C1)",
                    }}
                  />
                </div>

                <button
                  onClick={() => setSelectedYojana(y)}
                  className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-[#FFD76A] to-[#FAD2C1] text-[#8B0048] font-bold shadow-lg hover:scale-105 transition-transform"
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
