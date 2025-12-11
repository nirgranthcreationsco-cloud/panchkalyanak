"use client";

import {
  Bus,
  MapPin,
  Plane,
  Train
} from "lucide-react";
import React, { useEffect, useState } from "react";

// deterministic particle type
type Particle = {
  top: number;
  left: number;
  delay: number;
  duration: number;
};

const VenueConnectivity: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  /** Create particles on client only */
  useEffect(() => {
    // do not call setState synchronously inside effect
    const createParticles = () => {
      const arr: Particle[] = Array.from({ length: 15 }).map(() => ({
        top: Math.floor(Math.random() * 101), // integer safe
        left: Math.floor(Math.random() * 101),
        delay: Number((Math.random() * 4).toFixed(2)),
        duration: Number((3 + Math.random() * 4).toFixed(2)),
      }));
      setParticles(arr);
    };

    // microtask helps avoid purity warnings
    Promise.resolve().then(createParticles);
  }, []);

  /* ------------------------------ CONNECTIVITY DATA ------------------------------ */

  const connectivityData = [
    {
  icon: Plane,
  title: "निकटतम हवाई अड्डा",
  name: "Maharana Pratap Airport, Udaipur (UDR)",
  distance: "≈ 160-170 किमी",
  time: "लगभग 3–4 घंटे",
  details: "उदयपुर एयरपोर्ट – देश भर से जुड़ा"
},
{
  icon: Train,
  title: "निकटतम रेलवे स्टेशन",
  name: "Ratlam Junction (MP)",
  distance: "≈ 80-85 किमी",
  time: "लगभग 1.5-2 घंटे",
  details: "मुख्य रेल मार्ग एवं कई शहरों से संपर्क"
},

    {
      icon: Bus,
      title: "निकटतम बस स्टैंड",
      name: "Banswara Bus Stand",
      distance: "15-20 किमी",
      time: "⌁ 15–20 मिनट",
      details: "RSRTC एवं प्राइवेट बस सुविधा उपलब्ध",
      color: "from-[#F0B86C] to-[#E0679F]",
    },
    {
  icon: Bus,
  title: "निकटतम बस स्टैंड",
  name: "Dahod Bus Stand",
  distance: "100 किमी",
  time: "⌁ लगभग 2–2.5 घंटे",
  details: "दाहोद से बांसवाड़ा हेतु नियमित बस/टैक्सी सुविधा उपलब्ध",
  color: "from-[#F0B86C] to-[#E0679F]",
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
            key={i}
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
{/* ================= VENUE SECTION (PROFESSIONAL MOBILE FIRST) ================= */}
<div className="bg-gradient-to-br from-white via-[#FFF5F8] to-white rounded-3xl border border-[#E0679F]/30 shadow-2xl p-6 sm:p-8 space-y-6 sm:space-y-8 mb-16 md:mb-24">
  
  {/* HEADER */}
  <div className="text-center space-y-2">
    <div className="inline-block">
      <p className="text-xs sm:text-sm font-semibold text-[#E0679F] tracking-widest uppercase">आयोजन स्थल</p>
    </div>
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7A1433] to-[#E0679F]">
      आयोजन के स्थान
    </h3>
    <p className="text-sm sm:text-base text-[#7A1433]/70 max-w-2xl mx-auto">
      दिव्य पंचकल्याणक महोत्सव का आयोजन राजस्थान के सुंदर स्थलों पर हो रहा है
    </p>
  </div>

  {/* VENUE CARDS GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
    {[
      {
        id: 1,
        title: "ह्रींकार तीर्थ",
        subtitle: "पंचकल्याणक स्थल",
        address: "बाँसवाड़ा–उदयपुर रोड, टिम्बा गामड़ी",
        city: "राजस्थान – 327001",
        
        /* MAP: EMBED VIEW */
        embed: "https://www.openstreetmap.org/export/embed.html?bbox=74.360083%2C23.640444%2C74.370083%2C23.646444&layer=mapnik&marker=23.643444%2C74.365083",

        /* MAP: DIRECTIONS */
        directions: "https://www.google.com/maps/dir/?api=1&destination=23.643444,74.365083",

        icon: "📍"
      },
      {
        id: 2,
        title: "पंचकल्याणक स्थल",
        subtitle: "बाहुबली कॉलोनी",
        address: "संत भवन के पीछे, बांसवाड़ा",
        city: "राजस्थान",

        /* MAP: EMBED VIEW */
        embed: "https://maps.google.com/maps?q=बाहुबली%20कॉलोनी%20बांसवाड़ा&output=embed",

        /* MAP: DIRECTIONS */
        directions: "https://www.google.com/maps/search/?api=1&query=बाहुबली%20कॉलोनी%20बांसवाड़ा",

        icon: "📍"
      },
    ].map((venue) => (
      <div
        key={venue.id}
        className="group relative overflow-hidden rounded-2xl bg-white border border-[#E0679F]/20 shadow-md hover:shadow-xl hover:border-[#E0679F]/50 transition-all duration-300"
      >
        {/* CARD GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E0679F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative flex flex-col h-full">
          
          {/* MAP SECTION */}
          <div className="relative w-full h-40 sm:h-48 overflow-hidden bg-[#F5D6E2] flex items-center justify-center">
            <iframe
              src={venue.embed}
              loading="lazy"
              className="w-full h-full"
              title={venue.title}
            />
            {/* OVERLAY GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />
          </div>

          {/* CONTENT SECTION */}
          <div className="flex flex-col flex-1 p-4 sm:p-5 space-y-3">
            
            {/* TITLE & SUBTITLE */}
            <div className="space-y-1">
              <div className="flex items-start gap-2">
                <span className="text-xl flex-shrink-0">{venue.icon}</span>
                <div className="flex-1">
                  <p className="font-bold text-[#7A1433] text-base sm:text-lg leading-tight">
                    {venue.title}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-[#E0679F]">
                    {venue.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="space-y-1 border-t border-[#E0679F]/10 pt-3">
              <p className="text-xs sm:text-sm text-[#7A1433]/75 leading-relaxed">
                {venue.address}
              </p>
              <p className="text-xs font-semibold text-[#E0679F] tracking-wide">
                {venue.city}
              </p>
            </div>

            {/* CTA BUTTON */}
            <div className="pt-2">
              <a
                href={venue.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#E0679F] to-[#D8A24E] text-white text-xs sm:text-sm font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>गूगल मैप्स में खोलें</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    ))}
  </div>
{/* ================= BOTTOM INFO (SIMPLE + CLEAN) ================= */}
<div className="bg-gradient-to-r from-[#FFF5F8] to-[#FFE7F0] border border-[#E0679F]/20 rounded-2xl p-4 sm:p-5 space-y-2">

  {/* TEXT */}
  <div className="flex items-start gap-3">
    {/* Info Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 flex-shrink-0 text-[#E0679F]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="8" />
    </svg>

    <p className="text-xs sm:text-sm font-semibold text-[#7A1433] leading-relaxed">
     पंचकल्याणक प्रतिष्ठा स्थल एवं ह्रींकार तीर्थक्षेत्र दोनों भिन्न हैं, अतः आपके आगमन के पूर्व इसे सुनिश्चित करें।
     
    </p>
  </div>

  {/* PHONE NUMBER */}
  <div className="pt-1 border-t border-[#E0679F]/15">
    <p className="text-xs sm:text-sm font-semibold text-[#E0679F]">
      अधिक जानकारी हेतु सम्पर्क करें: +91 88390 17577
    </p>
  </div>
  
</div>


  </div>




      {/* ================= CONNECTIVITY CARDS (4 in ROW on large screens) ================= */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">

  {connectivityData.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index}
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
        className={`
          relative bg-white/70 backdrop-blur-md rounded-xl 
          border border-[#E0679F]/25 shadow-md p-6 
          transition-all duration-300 group 
          ${hoveredCard === index ? "scale-[1.04] -translate-y-1" : ""}
        `}
      >
        {/* Soft Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${
            item.color || "from-[#E0679F] to-[#F0B86C]"
          } opacity-[0.06] group-hover:opacity-[0.12] transition-all`}
        />

        <div className="relative">
          {/* TOP AREA */}
          <div className="flex justify-between items-start mb-4">
            
            {/* Icon with background */}
            <div
              className={`p-2.5 bg-gradient-to-br ${
                item.color || "from-[#E0679F] to-[#F0B86C]"
              } rounded-lg shadow-md`}
            >
              <Icon className="w-7 h-7 text-white" />
            </div>

            {/* Title Right Side */}
            <div className="text-right leading-tight">
              <p className="text-[17px] font-bold text-[#7A1433]">
                {item.name}
              </p>
              <p className="text-xs text-[#7A1433]/60">
                {item.time}
              </p>
            </div>
          </div>

          {/* MAIN TITLE */}
          <h3 className="text-[16px] font-semibold text-[#7A1433]">
            {item.title}
          </h3>

          {/* Distance */}
          <p className="text-[15px] font-semibold text-[#F0B86C] mt-1">
            {item.distance}
          </p>

          {/* Details */}
          <p className="text-sm text-[#7A1433]/70 mt-2 leading-relaxed">
            {item.details}
          </p>
        </div>
      </div>
    );
  })}

</div>

      </div>  

      {/* FLOAT ANIMATION */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
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
