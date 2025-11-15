'use client';
import { Yojana } from "@/app/types/yojana";
import React from 'react';

interface YojanaSectionProps {
  setSelectedYojana: React.Dispatch<React.SetStateAction<Yojana | null>>;
}

const YojanaSection: React.FC<YojanaSectionProps> = ({ setSelectedYojana }) => {
  const yojanas: Yojana[] = [
    { icon: '🕉️', name: 'Moorti Pratishtha', amount: '₹31,000', description: 'Sacred idol consecration ceremony', features: ['Complete Pratishtha Vidhi', 'Prasad & Aarti', 'Digital Certificate'] },
    { icon: '🪔', name: 'Mahapatra Seva', amount: '₹21,000', description: 'Grand ceremonial service', features: ['Complete Puja Arrangement', 'Devotional Services', 'Recognition Certificate'] },
    { icon: '💫', name: 'Bhaktamar Sponsorship', amount: '₹11,000', description: 'Sacred mantra recitation support', features: ['Bhaktamar Path', 'Group Chanting', 'Blessing Certificate'] },
    { icon: '💖', name: 'Deep Daan / Aarti / Puja', amount: '₹5,100', description: 'Daily lamp offering & worship', features: ['Deep Daan', 'Aarti Seva', 'Puja Sponsorship'] },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-[#8B0048] via-[#C04878] to-[#8B0048] text-white">
      
      {/* ✨ Divine Aura Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[25rem] h-[25rem] bg-[#FFD76A]/25 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-[#C04878]/25 rounded-full blur-[130px] animate-pulse delay-500" />
      </div>

      {/* 🌺 Section Header */}
      <div className="relative z-10 text-center mb-20">
        <div className="text-6xl mb-4 animate-pulse">🙏</div>
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#FFD76A] via-[#FAD2C1] to-[#C04878] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,215,106,0.6)]">
          पंचकल्याणक योजनाएं
        </h2>
        <p className="text-lg md:text-2xl text-[#FAD2C1] mt-4 italic font-light tracking-wide max-w-2xl mx-auto">
          Be a part of this divine celebration and earn eternal blessings ✨
        </p>

        {/* Ornamental Divider */}
        <div className="mt-8 flex justify-center items-center">
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#FFD76A] to-transparent"></div>
          <div className="mx-3 w-5 h-5 rotate-45 bg-gradient-to-br from-[#FFD76A] via-[#FAD2C1] to-[#C04878] shadow-[0_0_15px_rgba(255,215,106,0.6)] rounded-sm"></div>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#FFD76A] to-transparent"></div>
        </div>
      </div>

      {/* 🌸 Yojana Cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {yojanas.map((yojana, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-[#C04878]/20 via-[#8B0048]/30 to-[#FFD76A]/10 border border-[#FFD76A]/40 rounded-3xl p-8 backdrop-blur-lg shadow-[0_0_25px_rgba(255,215,106,0.25)] hover:shadow-[0_0_50px_rgba(255,215,106,0.45)] transition-all duration-700 hover:-translate-y-3"
          >
            {/* Top Glow Bar */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-[#FFD76A] to-transparent"></div>

            {/* Icon */}
            <div className="text-6xl mb-6 text-center drop-shadow-[0_0_15px_rgba(255,215,106,0.7)] group-hover:scale-110 transition-transform duration-500">
              {yojana.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-[#FFD76A] mb-2 text-center tracking-wide group-hover:text-[#FAD2C1] transition-colors">
              {yojana.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#FAD2C1]/90 mb-6 text-center italic">
              {yojana.description}
            </p>

            {/* Amount */}
            <div className="text-4xl font-extrabold text-center bg-gradient-to-r from-[#FFD76A] via-[#FAD2C1] to-[#C04878] bg-clip-text text-transparent mb-8 drop-shadow-[0_0_20px_rgba(255,215,106,0.5)]">
              {yojana.amount}
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8 text-sm text-[#FFFFFF]/85 font-medium">
              {yojana.features.map((f, i) => (
                <li key={i} className="flex items-center justify-center gap-2">
                  <span className="text-[#FFD76A] text-lg">✦</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              onClick={() => setSelectedYojana(yojana)}
              className="w-full py-3 bg-gradient-to-r from-[#C04878] to-[#FFD76A] text-[#8B0048] font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,106,0.6)] transition-all duration-300"
            >
              Become a Yajman
            </button>

            {/* Radiant Halo */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#FFD76A]/10 via-[#C04878]/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>
          </div>
        ))}
      </div>

      {/* Subtle Bottom Divider */}
      <div className="mt-20 flex justify-center">
        <div className="w-64 h-[1px] bg-gradient-to-r from-transparent via-[#FFD76A]/70 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default YojanaSection;
