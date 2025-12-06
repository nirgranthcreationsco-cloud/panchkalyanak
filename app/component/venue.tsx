"use client";

import {
  Bus,
  ExternalLink,
  MapPin,
  Navigation,
  Plane,
  Train,
} from "lucide-react";
import React, { useEffect, useState } from "react";

type Particle = {
  top: number;
  left: number;
  delay: string;
  duration: string;
};

const VenueConnectivity: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const arr: Particle[] = Array.from({ length: 15 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: (Math.random() * 4).toFixed(2),
      duration: (3 + Math.random() * 4).toFixed(2),
    }));

    // Schedule state update after layout
    Promise.resolve().then(() => setParticles(arr));
  }, []);

  /* ------------------------------ CONNECTIVITY ------------------------------ */

  const connectivityData = [
    {
      icon: Train,
      title: "निकटतम रेलवे स्टेशन",
      name: "Ratlam Junction (मध्य प्रदेश)",
      distance: "⌁ लगभग 130 किमी",
      time: "⌁ 2.5 – 3 घंटे",
      details:
        "रतलाम जंक्शन – दिल्ली, मुंबई, अहमदाबाद, इंदौर आदि से सीधी रेल सेवा",
      color: "from-[#E0679F] to-[#F0B86C]",
    },
    {
      icon: Bus,
      title: "निकटतम बस स्टैंड",
      name: "Banswara Bus Stand",
      distance: "⌁ 8–10 किमी",
      time: "⌁ 15–20 मिनट",
      details: "RSRTC एवं प्राइवेट बस सुविधा उपलब्ध",
      color: "from-[#F0B86C] to-[#E0679F]",
    },
    {
      icon: Plane,
      title: "निकटतम हवाई अड्डा",
      name: "Maharana Pratap Airport, Udaipur",
      distance: "⌁ 160–180 किमी",
      time: "⌁ 3–4 घंटे",
      details: "उदयपुर हवाई अड्डा – देश के प्रमुख महानगरों से जुड़ा",
      color: "from-[#E0679F] to-[#F0B86C]",
    },
  ];

  /* ------------------------------ UI ------------------------------ */

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#FFF1F5] via-[#FFE4EC] to-[#FFE7C7]/40 overflow-hidden py-12 px-3 sm:px-4 md:px-6">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E0679F' fill-opacity='0.8'%3E%3Ccircle cx='30' cy='30' r='1.4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Rose–Gold particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#E0679F] rounded-full opacity-30 animate-float"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="h-1 w-14 bg-gradient-to-r from-transparent to-[#E0679F]" />
            <MapPin className="w-8 h-8 text-[#E0679F]" />
            <div className="h-1 w-14 bg-gradient-to-l from-transparent to-[#E0679F]" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#7A1433]">
            स्थान एवं संपर्क सूत्र
          </h2>

          <p className="mt-3 text-lg text-[#7A1433]/80">
            आपकी सुविधा के लिए संपूर्ण यात्रा जानकारी
          </p>
        </div>

        {/* ================= ENHANCED VENUE SECTION — PINK-GOLD ================= */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl border-4 border-[#F0B86C]/40 shadow-pink-500/20 p-10 mb-16 relative overflow-hidden group">

          {/* Glow */}
          <div className="absolute -inset-32 bg-gradient-to-br from-[#E0679F]/20 to-[#F0B86C]/20 opacity-0 group-hover:opacity-100 duration-700 blur-[110px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#E0679F] to-[#F0B86C] rounded-xl shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-[#7A1433] leading-tight">
                    ह्रींकार तीर्थ पंचकल्याणक स्थल
                  </h3>

                  <p className="text-[#7A1433]/80 leading-relaxed mt-2 text-sm sm:text-base">
                    बाँसवाड़ा–उदयपुर रोड, मोरडी मिल के पास<br />
                    टिम्बा गामड़ी, विद्या श्री ग्रेनाइट से आगे 400 मीटर<br />
                    <span className="font-semibold">बांसवाड़ा, राजस्थान – 327001</span>
                  </p>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap gap-4 pt-2">

                {/* GOOGLE MAPS EXACT COORDS */}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=23.643444,74.365083"
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 bg-[#7A1433] text-white rounded-full font-semibold shadow-md hover:scale-105 border-2 border-[#F0B86C] transition-all"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </a>

                {/* OPEN FULL MAP */}
                <a
                  href="https://www.google.com/maps?q=23.643444,74.365083"
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 bg-white/80 text-[#7A1433] rounded-full font-semibold shadow-md hover:scale-105 border-2 border-[#E0679F]/40 transition-all"
                >
                  <ExternalLink className="w-5 h-5" />
                  Open Full Map
                </a>

               
              </div>
            </div>

            {/* MAP */}
            <div className="relative rounded-3xl shadow-[0_20px_40px_rgba(224,103,159,0.25)] overflow-hidden">

              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=74.360083%2C23.640444%2C74.370083%2C23.646444&layer=mapnik&marker=23.643444%2C74.365083"
                className="w-full h-64 sm:h-80 md:h-[22rem]"
                style={{ border: "none" }}
                loading="lazy"
              ></iframe>

              {/* LOGO */}
              <div className="absolute top-3 right-3 bg-white/70 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-[#F0B86C]/60 flex items-center gap-2">
                <img src="/logo.png" className="w-8 h-8 animate-pulse" alt="Hrimkar" />
                <span className="text-[#7A1433] font-bold text-sm">Hrimkar Tirth</span>
              </div>

            </div>
          </div>
        </div>

        {/* ================= CONNECTIVITY CARDS (PINK-GOLD) ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-14">
          {connectivityData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative bg-white/65 backdrop-blur-md rounded-2xl border border-[#E0679F]/30 shadow-md p-8 transition-all duration-500 group ${
                  hoveredCard === index ? "scale-105 -translate-y-2" : ""
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-[0.07] group-hover:opacity-[0.15] duration-500`}
                />

                <div className="relative">
                  <div className="flex justify-between items-start mb-6">
                    <div
                      className={`p-3 bg-gradient-to-br ${item.color} rounded-xl shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="text-right">
                      <p className="text-xl font-bold text-[#7A1433]">
                        {item.name}
                      </p>
                      <p className="text-sm text-[#7A1433]/60">{item.time}</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#7A1433]">{item.title}</h3>

                  <p className="text-base font-semibold text-[#F0B86C] mt-1">
                    {item.distance}
                  </p>

                  <p className="text-sm text-[#7A1433]/70 mt-2">{item.details}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* FLOAT ANIMATION */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default VenueConnectivity;
