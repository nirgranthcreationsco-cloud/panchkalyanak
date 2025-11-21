'use client';
import React from 'react';

const DivineIntro: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#FFF7F0] via-[#FAE7D6] to-[#F7B7A3]/20 overflow-hidden py-12 px-4">
      
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #D9A441 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, #5E0B15 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#D9A441]/10 rounded-full blur-[120px]" />
      </div>

      {/* ⭐ TOP CORNER GURUS */}
      <div className="absolute top-4 left-2 sm:left-4 z-20">
        <GuruCorner img="/virag.png" title="आचार्य श्री" />
      </div>

      <div className="absolute top-4 right-2 sm:right-4 z-20">
        <GuruCorner img="/vishudh.png" title="आचार्य श्री" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto pt-28 md:pt-32">
        
        {/* Title */}
        <div className="text-center mb-10 px-4">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5E0B15] leading-tight"
            style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
          >
            श्री मज्जिनेन्द्र चतुर्विंशती तीर्थंकर
          </h1>
          
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#D9A441] via-[#F7B7A3] to-[#5E0B15] bg-clip-text text-transparent leading-tight mt-3"
            style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
          >
            पंचकल्याणक प्रतिष्ठा महा-महोत्सव
          </h2>

          <p className="text-sm sm:text-base md:text-xl text-[#5E0B15] italic opacity-90 mt-4 px-2">
            "जहाँ आत्मा का उत्थान ही महोत्सव बन जाता है"
          </p>
        </div>

        {/* DESCRIPTION BOX */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-[#D9A441]/30 shadow-xl p-6 sm:p-8 mb-16 relative">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 text-sm md:text-base"
            style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
          >
            <div className="space-y-4">
              <DescItem icon="✦" text="500+ जिनबिंब की प्रतिष्ठा का ऐतिहासिक पंचकल्याणक" />
              <DescEvent />
              <DescLocation />
            </div>

            <div className="space-y-4">
              <DescItem icon="💐" text="आप सपरिवार सादर आमंत्रित हैं" />
              <DescOrganisers />
              <DescTeam />
            </div>
          </div>
        </div>

        {/* ⭐ SANIDHYA GRID — IMAGES FROM PUBLIC */}
        <div className="mb-20">
          <h3
            className="text-2xl md:text-3xl font-bold text-[#5E0B15] text-center mb-6"
            style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
          >
            विशिष्ट सानिध्य
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            <SanidhyaCard name="आदित्य सागर जी महाराज" img="/aditya.jpg" />
<SanidhyaCard name="अप्रमित सागर जी महाराज" img="/apramit.jpg" />
<SanidhyaCard name="सहज सागर जी महाराज" img="/sahaj.jpg" />
<SanidhyaCard name="क्षुल्लक श्रेयस सागर जी" img="/chullak.png" />

          </div>
        </div>
      </div>

      {/* ⭐ BOTTOM CORNER GURUS */}
      <div className="absolute bottom-2 left-2 sm:left-6 z-20">
        <GuruBottom img="/mataji1.jpeg"  title="आर्यिका श्री 105 विकाम्याश्री माताजी"/>
      </div>

      <div className="absolute bottom-2 right-2 sm:right-6 z-20">
        <GuruBottom img="/mataji2.jpeg" title="आर्यिका श्री 105 विगुंजन माताजी" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#D9A441] to-transparent opacity-20" />
    </section>
  );
};

export default DivineIntro;

/* -----------------------------------------
   Sub Components
------------------------------------------ */

const GuruCorner = ({ img, title }: any) => {
  const isTallImage =
    img.includes("virag") ||
    img.includes("vishudh") 

  return (
    <div className="relative">
      {/* Circular Frame */}
      <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-[#D9A441] shadow-xl bg-white p-1">
        <img
          src={img}
          alt={title}
          className={`w-full h-full rounded-full bg-[#fff6e5]
            ${isTallImage ? "object-cover object-top" : "object-contain"}`}
        />
      </div>

      {/* Title Label */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#5E0B15] text-white text-[10px] sm:text-xs px-3 py-1 rounded-full border-2 border-[#D9A441] whitespace-nowrap">
        {title}
      </div>
    </div>
  );
};
const GuruBottom = ({ img, title }: any) => {
  const needsTopCrop =
    img.includes("mataji1") || img.includes("mataji2");

  return (
    <div className="relative flex flex-col items-center pb-10">
      
      <div className="w-28 h-28 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden 
        border-4 border-[#D9A441] shadow-xl bg-white p-1">
        
        <img
          src={img}
          alt={title}
          className={`w-full h-full rounded-full bg-[#fff6e5] 
            ${needsTopCrop ? "object-cover object-top" : "object-contain"}`}
        />
      </div>

      {/* TITLE — Now placed normally, never cut off */}
      <div className="mt-3 bg-[#5E0B15] text-white 
        text-[10px] sm:text-sm px-4 py-1 rounded-full border-2 border-[#D9A441]
        shadow-md">
        {title}
      </div>
    </div>
  );
};


const DescItem = ({ icon, text }: any) => (
  <div className="flex items-start gap-3">
    <span className="text-[#D9A441] text-xl mt-1">{icon}</span>
    <p className="text-[#5E0B15] leading-relaxed">{text}</p>
  </div>
);

const DescEvent = () => (
  <div className="flex items-start gap-3">
    <span className="text-[#D9A441] text-xl mt-1">🛕</span>
    <div>
      <p className="font-semibold text-[#5E0B15] mb-1">भावी जिनालय का शिलान्यास</p>
      <p className="text-[#5E0B15]/80 text-sm">📅 22 फरवरी 2026, प्रातः 08:00 बजे</p>
    </div>
  </div>
);

const DescLocation = () => (
  <div className="flex items-start gap-3">
    <span className="text-[#D9A441] text-xl mt-1">📍</span>
    <div>
      <p className="font-semibold text-[#5E0B15] mb-1">पुण्य स्थल</p>
      <p className="text-[#5E0B15]/80 text-sm leading-snug">
        बाँसवाड़ा–उदयपुर रोड, मोरडी मिल के पास, टिम्बा गामड़ी
      </p>
    </div>
  </div>
);

const DescOrganisers = () => (
  <div className="flex items-start gap-3">
    <span className="text-[#D9A441] text-xl mt-1">🌿</span>
    <div>
      <p className="font-semibold text-[#5E0B15] mb-1">आयोजक</p>
      <p className="text-[#5E0B15]/80 text-sm leading-snug">
        चतुर्विंशती तीर्थंकर समिति, वात्सल्य सेवार्थ फाउंडेशन
      </p>
    </div>
  </div>
);

const DescTeam = () => (
  <div className="bg-[#F7B7A3]/30 rounded-lg p-3 border border-[#D9A441]/20">
    <p className="text-xs text-[#5E0B15] mb-1">
      <span className="font-semibold">अध्यक्ष:</span> दिनेश जी खोड़निया
    </p>
    <p className="text-xs text-[#5E0B15]">
      <span className="font-semibold">गौरवाध्यक्ष:</span> अशोका जी वोरा
    </p>
  </div>
);

const SanidhyaCard = ({ name, img }: any) => {

  // For tall/portrait images, show top (face-first)
  const isTallImage = img.includes("aditya") || img.includes("apramit") || img.includes("sahaj");

  return (
    <div className="flex flex-col items-center group">
      <div className="relative mb-4">

        <div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D9A441] via-transparent to-[#D9A441] animate-spin opacity-30"
          style={{ animationDuration: '3s' }}
        />

        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#D9A441] shadow-xl bg-white p-1 group-hover:scale-110 transition-transform duration-300">
          <img
            src={img}
            alt={name}
            className={`w-full h-full rounded-full bg-[#fff6e5] 
              ${isTallImage ? "object-cover object-top" : "object-contain"}`}
          />
        </div>

      </div>

      <p
        className="text-xs sm:text-sm md:text-base text-[#5E0B15] font-semibold"
        style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
      >
        {name}
      </p>
    </div>
  );
};

