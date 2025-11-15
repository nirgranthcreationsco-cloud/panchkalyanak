import React from 'react';

/**
 * DivineIntro — Compact Rajasthani Royal Design:
 * - Top: 2 guru portraits in corners with ornate frames
 * - Center: Compact description with elegant typography
 * - Middle: 4 Sanidhya portraits in elegant grid
 * - Bottom: 2 larger guru portraits in corners
 * - Royal Rajasthani color palette with Peach, Gold, Maroon
 */

const DivineIntro: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#FFF7F0] via-[#FAE7D6] to-[#F7B7A3]/20 overflow-hidden py-12 px-4">
      
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #D9A441 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #5E0B15 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Ambient Golden Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D9A441]/10 rounded-full blur-[120px]" />
      </div>

      {/* TOP CORNER GURUS - Ornate Frames */}
      <div className="absolute top-8 left-8 z-20 hidden md:block">
        <div className="relative">
          {/* Ornate Corner Decoration */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t-4 border-l-4 border-[#D9A441]" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-4 border-r-4 border-[#D9A441]" />
          
          <div className="w-36 h-36 rounded-lg overflow-hidden border-4 border-[#D9A441] shadow-[0_20px_50px_rgba(217,164,65,0.3)] bg-white p-2">
            <div className="w-full h-full rounded overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?w=400" 
                alt="Guru" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#5E0B15] text-white text-xs px-4 py-1 rounded-full border-2 border-[#D9A441] whitespace-nowrap">
            आचार्य श्री
          </div>
        </div>
      </div>

      <div className="absolute top-8 right-8 z-20 hidden md:block">
        <div className="relative">
          <div className="absolute -top-3 -right-3 w-6 h-6 border-t-4 border-r-4 border-[#D9A441]" />
          <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-4 border-l-4 border-[#D9A441]" />
          
          <div className="w-36 h-36 rounded-lg overflow-hidden border-4 border-[#D9A441] shadow-[0_20px_50px_rgba(217,164,65,0.3)] bg-white p-2">
            <div className="w-full h-full rounded overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1604608672516-f1b6d6b1f748?w=400" 
                alt="Guru" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#5E0B15] text-white text-xs px-4 py-1 rounded-full border-2 border-[#D9A441] whitespace-nowrap">
            आचार्य श्री
          </div>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative z-10 max-w-5xl mx-auto pt-16 md:pt-24">
        
        {/* TITLE SECTION */}
        <div className="text-center mb-8">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#D9A441]" />
              <span className="text-[#D9A441] text-2xl">॥</span>
              <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#D9A441]" />
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-[#5E0B15] mb-3 leading-tight" 
              style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
            श्री मज्जिनेन्द्र चतुर्विंशती तीर्थंकर
          </h1>
          
          <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#D9A441] via-[#F7B7A3] to-[#5E0B15] bg-clip-text text-transparent mb-4 leading-tight"
              style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
            पंचकल्याणक प्रतिष्ठा महा-महोत्सव
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#D9A441] animate-pulse" />
            <p className="text-lg md:text-xl text-[#5E0B15] italic opacity-90">
              "जहाँ आत्मा का उत्थान ही महोत्सव बन जाता है"
            </p>
            <div className="w-2 h-2 rounded-full bg-[#D9A441] animate-pulse" />
          </div>
        </div>

        {/* COMPACT DESCRIPTION - Two Column Layout */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-[#D9A441]/30 shadow-[0_20px_60px_rgba(217,164,65,0.15)] p-8 mb-16 relative overflow-hidden">
          
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#D9A441]/20" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#D9A441]/20" />

          <div className="grid md:grid-cols-2 gap-8 text-sm md:text-base" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
            
            {/* Left Column */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#D9A441] text-xl mt-1">✦</span>
                <p className="text-[#5E0B15] leading-relaxed">
                  <span className="font-semibold text-[#5E0B15]">500+ जिनबिंब</span> की प्रतिष्ठा का ऐतिहासिक पंचकल्याणक
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#D9A441] text-xl mt-1">🛕</span>
                <div>
                  <p className="font-semibold text-[#5E0B15] mb-1">भावी जिनालय का शिलान्यास</p>
                  <p className="text-[#5E0B15]/80 text-sm">📅 22 फरवरी 2026, प्रातः 08:00 बजे</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#D9A441] text-xl mt-1">📍</span>
                <div>
                  <p className="font-semibold text-[#5E0B15] mb-1">पुण्य स्थल</p>
                  <p className="text-[#5E0B15]/80 text-sm leading-snug">
                    बाँसवाड़ा–उदयपुर रोड, मोरडी मिल के पास, टिम्बा गामड़ी
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#D9A441] text-xl mt-1">💐</span>
                <p className="text-[#5E0B15] leading-relaxed">
                  आप सपरिवार <span className="font-semibold">सादर आमंत्रित</span> हैं
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#D9A441] text-xl mt-1">🌿</span>
                <div>
                  <p className="font-semibold text-[#5E0B15] mb-1">आयोजक</p>
                  <p className="text-[#5E0B15]/80 text-sm leading-snug">
                    चतुर्विंशती तीर्थंकर समिति, वात्सल्य सेवार्थ फाउंडेशन
                  </p>
                </div>
              </div>

              <div className="bg-[#F7B7A3]/30 rounded-lg p-3 border border-[#D9A441]/20">
                <p className="text-xs text-[#5E0B15] mb-1"><span className="font-semibold">अध्यक्ष:</span> दिनेश जी खोड़निया</p>
                <p className="text-xs text-[#5E0B15]"><span className="font-semibold">गौरवाध्यक्ष:</span> अशोका जी वोरा</p>
              </div>
            </div>
          </div>

          {/* Center Divider */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-[#D9A441]/30 to-transparent hidden md:block" />
        </div>

        {/* 4 SANIDHYA PORTRAITS - Elegant Grid */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#5E0B15] mb-2" 
                style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
              विशिष्ट सानिध्य
            </h3>
            <div className="flex items-center justify-center gap-3">
              <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-[#D9A441]" />
              <div className="w-2 h-2 rounded-full bg-[#D9A441]" />
              <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-[#D9A441]" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="relative mb-4">
                  {/* Rotating Golden Ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D9A441] via-transparent to-[#D9A441] animate-spin opacity-30" 
                       style={{ animationDuration: '3s' }} />
                  
                  <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#D9A441] shadow-[0_15px_40px_rgba(217,164,65,0.25)] bg-white p-1 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-${1580910051328 + i * 10000}-5f9635e20f8e?w=300`}
                        alt={`Sanidhya ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-[#D9A441]/20 blur-xl group-hover:bg-[#D9A441]/30 transition-all duration-300" />
                </div>
                
                <p className="text-sm md:text-base text-[#5E0B15] font-semibold" 
                   style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
                  संत श्री {i}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* BOTTOM CORNER GURUS - Larger Ornate Frames */}
      <div className="absolute bottom-8 left-8 z-20 hidden lg:block">
        <div className="relative">
          {/* Royal Frame Decoration */}
          <div className="absolute -inset-4 border-2 border-[#D9A441]/20 rounded-full" />
          <div className="absolute -inset-2 border border-[#F7B7A3]/40 rounded-full" />
          
          <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-[#D9A441] shadow-[0_25px_60px_rgba(94,11,21,0.3)] bg-white p-2 hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=500" 
                alt="Maha Guru" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Title Badge */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#5E0B15] to-[#5E0B15]/90 text-white text-sm px-6 py-2 rounded-full border-2 border-[#D9A441] shadow-lg whitespace-nowrap">
            महा आचार्य श्री
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
        <div className="relative">
          <div className="absolute -inset-4 border-2 border-[#D9A441]/20 rounded-full" />
          <div className="absolute -inset-2 border border-[#F7B7A3]/40 rounded-full" />
          
          <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-[#D9A441] shadow-[0_25px_60px_rgba(94,11,21,0.3)] bg-white p-2 hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=500" 
                alt="Maha Guru" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#5E0B15] to-[#5E0B15]/90 text-white text-sm px-6 py-2 rounded-full border-2 border-[#D9A441] shadow-lg whitespace-nowrap">
            महा आचार्य श्री
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#D9A441] to-transparent opacity-30" />

    </section>
  );
};

export default DivineIntro;