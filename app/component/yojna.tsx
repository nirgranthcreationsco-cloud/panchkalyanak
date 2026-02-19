"use client";

import { Yojana } from "@/app/types/yojana";
import { Crown, Flame, Gem, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface YojanaSectionProps {
  setSelectedYojana: React.Dispatch<React.SetStateAction<Yojana | null>>;
}

const YojanaSection: React.FC<YojanaSectionProps> = ({ setSelectedYojana }) => {
  const router = useRouter();

  const yojanas: Yojana[] = [
    {
      icon: <Sparkles className="w-10 h-10 text-[#1a1918]" />,
      name: "सामान्य इन्द्र–इन्द्राणी",
      amount: "₹ 3,100",
      description: "",
      features: [],
    },
    {
      icon: <Gem className="w-10 h-10 text-[#FFD76A]" />,
      name: "लौकान्तिक देव",
      amount: "₹ 21,000 (प्रत्येक)",
      description: "",
      features: [],
    },
    {
      icon: <Crown className="w-10 h-10 text-[#FFD76A]" />,
      name: "24 ध्वजारोहण कर्ता",
      amount: "₹ 1,11,000 (प्रत्येक)",
      description: "",
      features: [],
    },
    {
      icon: <Flame className="w-10 h-10 text-[#FFD76A]" />,
      name: "मुख्य वेदी",
      amount: "₹ 5,11,000",
      description: "",
      features: [],
    },
  ];

  return (
    <section
      className="relative py-20 px-6 bg-gradient-to-b from-[#8B0048] via-[#C04878] to-[#8B0048] text-white"
      aria-label="पंचकल्याणक योजनाएं – दिव्य अवसर के यजमान बनें"
    >

      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-0 w-[18rem] h-[18rem] bg-[#FFD76A]/20 blur-[120px]" />
        <div className="absolute bottom-10 right-0 w-[18rem] h-[18rem] bg-[#C04878]/25 blur-[130px]" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-14">
        <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#FFD76A] via-[#FAD2C1] to-[#FFD76A] bg-clip-text text-transparent drop-shadow-xl leading-[1.2]">
          पंचकल्याणक योजनाएं
        </h2>

        <p className="text-lg md:text-xl text-[#FAD2C1]/90 mt-3">
          दिव्य अवसर के यजमान बनें – अनंत पुण्य अर्जित करें ✨
        </p>

        <div className="mt-5 flex justify-center items-center">
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#FFD76A] to-transparent"></div>
          <div className="mx-3 w-4 h-4 rotate-45 bg-[#FFD76A] rounded-sm shadow-[0_0_10px_rgba(255,215,106,0.8)]" />
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#FFD76A] to-transparent"></div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {yojanas.map((yojana, index) => (
          <div
            key={index}
            className="group relative bg-white/10 backdrop-blur-xl border border-[#FFD76A]/40 rounded-3xl p-8 
                       hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(255,215,106,0.45)]
                       transition-all duration-500"
          >
            {/* Icon */}
            {/* <div className="flex justify-center mb-4">{yojana.icon}</div> */}

            {/* Name */}
            <h3 className="text-xl font-bold text-center text-[#FFD76A] leading-tight mb-2">
              {yojana.name}
            </h3>

            {/* Amount */}
            <p className="text-2xl font-extrabold text-center bg-gradient-to-r from-[#FFD76A] to-[#FAD2C1] bg-clip-text text-transparent drop-shadow-lg">
              {yojana.amount}
            </p>

            {/* CTA */}
            <button
              onClick={() => setSelectedYojana(yojana)}
              aria-label={`${yojana.name} – पुण्यार्जक बनें, राशि: ${yojana.amount}`}
              className="mt-6 w-full py-3 bg-gradient-to-r from-[#FFD76A] to-[#FAD2C1] 
                         text-[#8B0048] font-semibold rounded-xl shadow-lg 
                         hover:scale-[1.05] transition-all"
            >
             पुण्यार्जक बनें
            </button>
          </div>
        ))}
      </div>

      {/* More Yojna Button */}
    {/* More Yojna Button */}
<div className="mt-14 flex justify-center relative z-[50]">
  <button
    onClick={() => router.push("/moreyojnas")}
    aria-label="सभी पंचकल्याणक योजनाएँ देखें"
    className="
      px-10 py-4 
      bg-gradient-to-r from-[#FFD76A] to-[#FAD2C1] 
      text-[#8B0048] font-bold text-xl 
      rounded-2xl shadow-lg 
      hover:scale-105 transition-all
      relative z-[100]
      pointer-events-auto
    "
  >
    और योजनाएँ देखें →
  </button>
</div>


    </section>
  );
};

export default YojanaSection;
