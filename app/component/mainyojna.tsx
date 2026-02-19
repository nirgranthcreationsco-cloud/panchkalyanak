"use client";

import React from "react";
import { Yojana } from "../types/yojana";

interface Props {
  setSelectedYojana: React.Dispatch<React.SetStateAction<Yojana | null>>;
}

export default function MainYojnaSection({ setSelectedYojana }: Props) {
  const yojanas: Yojana[] = [
    {
      id: "general",
      name: "सामान्य इन्द्र–इन्द्राणी",
      amount: "₹ 3,100 (प्रत्येक)",
      seatsTotal: 24,
      icon: null,
    },
    {
      id: "laukantik",
      name: "लौकान्तिक देव",
      amount: "₹ 21,000 (प्रत्येक)",
      seatsTotal: 24,
      icon: null,
    },
    {
      id: "dhwajarohan",
      name: "24 ध्वजारोहण कर्ता",
      amount: "₹ 1,11,000 (प्रत्येक)",
      seatsTotal: 24,
      icon: null,
    },
    {
      id: "vedhi",
      name: "मुख्य वेदी",
      amount: "₹ 5,11,000 (प्रत्येक)",
      seatsTotal: 24,
      icon: null,
    },
  ];

  return (
    <section
      className="relative py-16 px-6 bg-gradient-to-b from-[#8B0048] via-[#C04878] to-[#8B0048] text-white"
      aria-label="पंचकल्याणक मुख्य योजनाएं – बुकिंग"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD76A] via-[#FAD2C1] to-[#FFD76A] pb-1"
            style={{ 
              lineHeight: '1.4', 
              paddingTop: '0.2em', 
              paddingBottom: '0.2em',
              overflow: 'visible'
            }}
          >
            पंचकल्याणक मुख्य योजनाएं
          </h2>
          <p 
            className="text-lg text-[#FAD2C1]/90 mt-3"
            style={{ 
              lineHeight: '1.6', 
              paddingTop: '0.15em', 
              paddingBottom: '0.15em',
              overflow: 'visible'
            }}
          >
            प्रत्येक योजना — सीमित स्थान उपलब्ध ✨
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {yojanas.map((y) => {
            return (
              <div
                key={y.id}
                className="bg-white/10 border border-[#FFD76A]/40 rounded-3xl p-6 backdrop-blur-lg transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 
                  className="text-xl font-bold text-center text-[#FFD76A]"
                  style={{ 
                    lineHeight: '1.5', 
                    paddingTop: '0.15em', 
                    paddingBottom: '0.15em',
                    overflow: 'visible'
                  }}
                >
                  {y.name}
                </h3>

                <p 
                  className="text-center text-2xl font-extrabold bg-gradient-to-r from-[#FFD76A] to-[#FAD2C1] bg-clip-text text-transparent mt-2"
                  style={{ 
                    lineHeight: '1.5', 
                    paddingTop: '0.15em', 
                    paddingBottom: '0.15em',
                    overflow: 'visible'
                  }}
                >
                  {y.amount}
                </p>

                <div className="text-center mt-4">
                  <p 
                    className="text-[#FAD2C1]/80 text-sm"
                    style={{ 
                      lineHeight: '1.6', 
                      paddingTop: '0.15em', 
                      paddingBottom: '0.15em',
                      overflow: 'visible'
                    }}
                  >
                    कुल स्थान: {y.seatsTotal}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedYojana(y)}
                  className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-[#FFD76A] to-[#FAD2C1] text-[#8B0048] font-bold shadow-lg hover:scale-105 transition-transform"
                  style={{ lineHeight: '1.5', paddingTop: '0.2em', paddingBottom: '0.2em', overflow: 'visible' }}
                  aria-label={`${y.name} – पुण्यार्जक बनें`}
                >
                  पुण्यार्जक बनें
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
