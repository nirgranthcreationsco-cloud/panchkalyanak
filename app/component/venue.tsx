"use client";

import { Bus, ExternalLink, Hotel, MapPin, Navigation, Phone, Plane, Train } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const VenueConnectivity: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // ✅ Hydration-safe particles
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const arr = Array.from({ length: 15 }).map(() => ({
      top: Math.round(Math.random() * 10000) / 100,
      left: Math.round(Math.random() * 10000) / 100,
      delay: Math.round(Math.random() * 400) / 100,
      duration: Math.round((3 + Math.random() * 4) * 100) / 100,
    }));
    setParticles(arr);
  }, []);

  const connectivityData = [
    {
      icon: Train,
      title: "निकटतम रेलवे स्टेशन",
      name: "Ratlam Junction",
      distance: "80 किमी",
      time: "1.5 घंटे",
      details: "रतलाम जंक्शन - सभी प्रमुख शहरों से जुड़ा हुआ",
      color: "from-[#D9A441] to-[#F7B7A3]"
    },
    {
      icon: Bus,
      title: "निकटतम बस स्टैंड",
      name: "Banswara Bus Stand",
      distance: "8 किमी",
      time: "15 मिनट",
      details: "बांसवाड़ा बस स्टैंड - RSRTC & प्राइवेट बस सेवा",
      color: "from-[#F7B7A3] to-[#5E0B15]"
    },
    {
      icon: Plane,
      title: "निकटतम हवाई अड्डा",
      name: "Maharana Pratap Airport",
      distance: "160 किमी",
      time: "3 घंटे",
      details: "उदयपुर हवाई अड्डा - देश के सभी प्रमुख शहरों से जुड़ा",
      color: "from-[#5E0B15] to-[#D9A441]"
    }
  ];

  const accommodationData = [
    {
      name: "होटल श्री महावीर",
      type: "Deluxe Hotel",
      distance: "5 किमी",
      amenities: ["AC रूम", "रेस्टोरेंट", "पार्किंग"],
      contact: "+91 98765 43210"
    },
    {
      name: "तीर्थ धर्मशाला",
      type: "Dharamshala",
      distance: "3 किमी",
      amenities: ["शुद्ध शाकाहारी", "सुरक्षित", "किफायती"],
      contact: "+91 98765 43211"
    },
    {
      name: "पंचकल्याणक आवास",
      type: "Event Accommodation",
      distance: "1 किमी",
      amenities: ["विशेष सुविधा", "24x7 सेवा", "सामूहिक व्यवस्था"],
      contact: "+91 98765 43212"
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#FFF7F0] via-[#FAE7D6] to-[#F7B7A3]/20 overflow-hidden py-16 px-4">

      {/* Decorative Mandala Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D9A441' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      {/* ✅ Hydration-safe floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#D9A441] rounded-full opacity-20 animate-float"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-4 justify-center">
              <div className="h-1 w-16 bg-gradient-to-r from-transparent to-[#D9A441] rounded-full" />
              <MapPin className="w-8 h-8 text-[#D9A441]" />
              <div className="h-1 w-16 bg-gradient-to-l from-transparent to-[#D9A441] rounded-full" />
            </div>
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#5E0B15] mb-4"
            style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
          >
            स्थान एवं संपर्क सूत्र
          </h2>

          <p className="text-lg md:text-xl text-[#5E0B15]/80 max-w-2xl mx-auto">
            आपकी सुविधा के लिए संपूर्ण यात्रा जानकारी
          </p>
        </div>

        {/* Location Card */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl border-4 border-[#D9A441]/30 shadow-[0_25px_70px_rgba(217,164,65,0.2)] p-8 md:p-12 mb-12 relative overflow-hidden group">

          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-[#D9A441]/30 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-[#D9A441]/30 rounded-br-3xl" />

          {/* Glow */}
          <div className="absolute -inset-20 bg-gradient-to-br from-[#D9A441]/10 to-[#F7B7A3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">

            {/* Text Left */}
            <div className="space-y-6" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#D9A441] to-[#F7B7A3] rounded-xl shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#5E0B15] mb-2">
                    हीकार तीर्थ पंचकल्याणक स्थल
                  </h3>
                  <p className="text-[#5E0B15]/80 leading-relaxed text-sm md:text-base">
                    बाँसवाड़ा–उदयपुर रोड, मोरडी मिल के पास,<br />
                    टिम्बा गामड़ी, विद्या श्री ग्रेनाइट से आगे 400 मीटर अंदर<br />
                    <span className="font-semibold text-[#5E0B15]">बांसवाड़ा, राजस्थान - 327001</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 flex-wrap">
                <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#5E0B15] to-[#5E0B15]/90 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300 border-2 border-[#D9A441]">
                  <Navigation className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  <span>Get Directions</span>
                </button>

                <button className="flex items-center gap-2 px-6 py-3 bg-white/80 text-[#5E0B15] rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300 border-2 border-[#D9A441]/50">
                  <Phone className="w-5 h-5" />
                  <span>संपर्क करें</span>
                </button>
              </div>
            </div>

            {/* Map Right */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border-4 border-[#D9A441]/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F7B7A3]/40 to-[#5E0B15]/40 flex items-center justify-center">
                <MapPin className="w-16 h-16 text-white opacity-70 mb-4" />
                <p className="text-white text-lg font-semibold">Google Map Here</p>
              </div>
            </div>

          </div>
        </div>

        {/* Connectivity Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {connectivityData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-[#D9A441]/30 shadow-lg transition-all duration-500 overflow-hidden group cursor-pointer ${hoveredCard === index ? "scale-105 -translate-y-2" : ""}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-4 bg-gradient-to-br ${item.color} rounded-xl shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#5E0B15]">{item.distance}</p>
                      <p className="text-sm text-[#5E0B15]/60">{item.time}</p>
                    </div>
                  </div>

                  <h3
                    className="text-xl font-bold text-[#5E0B15] mb-2"
                    style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-lg font-semibold text-[#D9A441] mb-3">{item.name}</p>

                  <p className="text-sm text-[#5E0B15]/70">{item.details}</p>

                  <div
                    className={`absolute bottom-4 right-4 transition-all duration-300 ${hoveredCard === index ? "opacity-100" : "opacity-0 translate-x-4"}`}
                  >
                    <ExternalLink className="w-5 h-5 text-[#D9A441]" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D9A441] to-transparent" />
              </div>
            );
          })}
        </div>

        {/* Accommodation */}
        <div className="bg-gradient-to-br from-[#5E0B15] to-[#5E0B15]/90 rounded-3xl border-4 border-[#D9A441] shadow-[0_25px_70px_rgba(94,11,21,0.3)] p-8 md:p-12 relative overflow-hidden">

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <Hotel className="w-10 h-10 text-[#D9A441]" />
              <h3
                className="text-3xl md:text-4xl font-bold text-white"
                style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
              >
                आवास एवं ठहराव सुविधा
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {accommodationData.map((hotel, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#D9A441]/30 hover:border-[#D9A441]/50 transition-all"
                >
                  <div className="flex justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{hotel.name}</h4>
                      <p className="text-sm text-[#F7B7A3]">{hotel.type}</p>
                    </div>
                    <span className="text-[#D9A441] text-sm font-semibold bg-white/10 px-3 py-1 rounded-full">{hotel.distance}</span>
                  </div>

                  <div className="space-y-2 my-4">
                    {hotel.amenities.map((a, i) => (
                      <div key={i} className="flex items-center gap-2 text-white/80 text-sm">
                        <div className="w-1.5 h-1.5 bg-[#D9A441] rounded-full" />
                        <span>{a}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-[#D9A441] to-[#F7B7A3] text-[#5E0B15] rounded-lg font-semibold hover:scale-105 transition-all">
                    <Phone className="w-4 h-4" />
                    बुकिंग करें
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-white/80">
              अधिक जानकारी: <span className="text-[#D9A441] font-semibold">+91 98765 43200</span>
            </div>
          </div>
        </div>
      </div>

      {/* Float Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default VenueConnectivity;
