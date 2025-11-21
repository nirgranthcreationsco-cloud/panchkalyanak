"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";

const FooterAll = () => {
  return (
    <footer className="relative w-full bg-gradient-to-b from-[#8B0048] via-[#C04878] to-[#5A0030] text-white pt-20 pb-12 px-6">

      {/* Subtle Gold Glow */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-[#FFD76A]/20 blur-[140px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Title */}
        <h3
          className="text-3xl md:text-4xl font-extrabold tracking-wide mb-4
          bg-gradient-to-r from-[#FFD76A] via-[#FAD2C1] to-[#FFD76A] bg-clip-text text-transparent leading-[1.3]"
        >
          ह्रींकार तीर्थ पंचकल्याणक समिति
        </h3>

        <p className="text-[#FAD2C1]/90 text-lg mb-10 leading-[1.5]">
          19 फरवरी 2026
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 md:gap-10 mb-12">
          {[
            { icon: Instagram, link: "https://www.instagram.com/vikamya_vachanam/" },
            { icon: Facebook, link: "https://www.facebook.com/profile.php?id=100041789236278" },
            { icon: Youtube, link: "https://www.youtube.com/@vikamya_vachanam" },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={i}
                href={s.link}
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="p-4 rounded-full border border-[#FFD76A]/40 
                  bg-gradient-to-br from-[#FFD76A] to-[#FAD2C1]
                  text-[#8B0048]
                  shadow-[0_0_20px_rgba(255,215,106,0.4)]
                  transition-all duration-300 transform group-hover:scale-110"
                >
                  <Icon className="w-7 h-7" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#FFD76A]/60 to-transparent mb-6"></div>

        {/* Credits */}
        <p className="text-sm text-[#FAD2C1]/85 leading-[1.5]">
          Designed & Developed by{" "}
          <span className="font-semibold text-[#FFD76A]">
            Nirgranth Creation
          </span>
        </p>
      </div>
    </footer>
  );
};

export default FooterAll;
