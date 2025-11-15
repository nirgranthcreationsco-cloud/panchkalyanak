'use client';

import { Yojana } from "@/app/types/yojana";
import React from "react";

interface BookingModalProps {
  selectedYojana: Yojana;
  setSelectedYojana: React.Dispatch<React.SetStateAction<Yojana | null>>;
  setDonorName: React.Dispatch<React.SetStateAction<string>>;
  setShowCertificate: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookingModal: React.FC<BookingModalProps> = ({
  selectedYojana,
  setSelectedYojana,
  setDonorName,
  setShowCertificate,
}) => {
  const handleBooking = (name: string) => {
    setDonorName(name);
    setShowCertificate(true);
    setSelectedYojana(null);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#8B0048]/60 backdrop-blur-md p-4">
      {/* Divine Glow Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B0048]/70 via-[#C04878]/50 to-[#FFD76A]/30 opacity-40 animate-pulse"></div>

      <div className="relative z-10 max-w-md w-full rounded-[2rem] p-10 bg-gradient-to-br from-[#FAD2C1]/95 via-[#FFF9F5]/95 to-[#FFEFD8]/95 border-4 border-[#FFD76A]/50 shadow-[0_0_60px_rgba(255,215,106,0.4)]">
        {/* ✨ Top Glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-tr from-[#FFD76A]/40 to-[#C04878]/20 rounded-full blur-3xl animate-pulse"></div>

        {/* 🪔 Header */}
        <div className="text-center mb-8">
          <div className="text-7xl mb-4 animate-pulse">{selectedYojana.icon}</div>
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-[#C04878] via-[#8B0048] to-[#FFD76A] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(192,72,120,0.3)] mb-3">
            {selectedYojana.name}
          </h3>
          <p className="text-2xl font-bold text-[#C04878] bg-gradient-to-r from-[#FFD76A] to-[#C04878] bg-clip-text text-transparent">
            {selectedYojana.amount}
          </p>
        </div>

        {/* 💐 Input */}
        <div className="mb-8 relative">
          <input
            id="donor-name"
            type="text"
            placeholder="Enter Your Name"
            className="w-full px-5 py-3 rounded-xl border-2 border-[#FFD76A]/50 focus:border-[#C04878] outline-none text-[#8B0048] bg-[#FFF9F5]/70 placeholder-[#C04878]/50 font-medium shadow-inner"
          />
        </div>

        {/* 🌟 Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => {
              const input = document.getElementById("donor-name") as HTMLInputElement | null;
              const name = input?.value?.trim();
              if (name) handleBooking(name);
            }}
            className="flex-1 py-3 rounded-xl font-semibold text-white shadow-[0_0_20px_rgba(255,215,106,0.6)] bg-gradient-to-r from-[#C04878] via-[#8B0048] to-[#FFD76A] hover:scale-105 hover:shadow-[0_0_40px_rgba(255,215,106,0.7)] transition-all duration-500"
          >
            Confirm Booking
          </button>

          <button
            onClick={() => setSelectedYojana(null)}
            className="flex-1 py-3 rounded-xl font-semibold text-[#8B0048] bg-gradient-to-r from-[#FFF9F5] to-[#FAD2C1] border-2 border-[#FFD76A]/50 hover:bg-[#FFD76A]/30 transition-all duration-300"
          >
            Cancel
          </button>
        </div>

        {/* ✨ Decorative Divider */}
        <div className="mt-10 flex justify-center items-center">
          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#FFD76A] to-transparent" />
          <div className="mx-3 w-5 h-5 rotate-45 bg-gradient-to-br from-[#FFD76A] via-[#FAD2C1] to-[#C04878] shadow-[0_0_20px_rgba(255,215,106,0.6)] rounded-sm" />
          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#FFD76A] to-transparent" />
        </div>

        <p className="mt-4 text-center text-[#8B0048]/80 font-medium italic">
          आपकी सहभागिता इस आयोजन को और दिव्य बनाएगी 🌸
        </p>
      </div>
    </div>
  );
};

export default BookingModal;
