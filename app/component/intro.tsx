"use client";

import { Calendar, Landmark, MapPin, Users } from "lucide-react";
import Image from "next/image";
import React from "react";
import GuruBioCollapse from "./bio";



const DivineIntro: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden py-10 sm:py-14 bg-gradient-to-br from-[#FFF1F5] via-[#FFE4EC] to-[#FFE7C7]">

      {/* Soft Pattern Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.045]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='1.6' fill='%23E3A8C4'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(233,126,152,0.18),transparent_70%)]" />

      {/* MAIN WRAPPER */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">

        {/* ================================================
             TOP GURU ROW
        ================================================= */}
        <div className="mx-auto w-full max-w-5xl rounded-3xl border border-white/60 bg-white/85 shadow-[0_18px_45px_rgba(148,27,73,0.18)] backdrop-blur-md px-3 py-4 sm:px-6 sm:py-6 overflow-hidden">

          <div className="flex items-center justify-between gap-2 sm:gap-4">

            <GuruCorner img="/virag.jpg" title="आचार्य श्री विराग सागर" />

            <div className="flex flex-col items-center justify-center text-center px-2">
              <p
                className="text-base leading-snug sm:text-2xl md:text-3xl font-extrabold text-[#7A1433] uppercase tracking-wide text-center"
                style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
              >
                श्री मज्जिनेन्द्र चतुर्विंशती<br className="block sm:hidden" />
                तीर्थंकर
              </p>
            </div>

            <GuruCorner img="/vishudh.png" title="आचार्य श्री विशुद्ध सागर" />

          </div>
        </div>

        {/* ================================================
             MAIN HEADING
        ================================================= */}
        <div className="mx-auto max-w-4xl text-center space-y-4 sm:space-y-5">

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.75rem] font-extrabold leading-tight bg-gradient-to-r from-[#E0679F] via-[#F0B86C] to-[#E0679F] bg-clip-text text-transparent"
            style={{
              fontFamily: "'Noto Serif Devanagari', serif",
              backgroundSize: "220%",
            }}
          >
            पंचकल्याणक प्रतिष्ठा महा-महोत्सव
          </h2>
        </div>
<GuruBioCollapse />
        {/* ================================================
             INFORMATION CARD
        ================================================= */}
        <InfoCard />

        {/* ================================================
             SANIDHYA SECTION
        ================================================= */}
        <div className="mx-auto mb-4 flex w-full max-w-5xl flex-col gap-6 sm:gap-8">

          <h3
            className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#7A1433]"
            style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
          >
            अतिशय पूर्ण सन्निधि
          </h3>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 sm:gap-7 md:gap-8">
            <SanidhyaCard name="आदित्य सागर जी महाराज" img="/aditya.png" />
            <SanidhyaCard name="अप्रमित सागर जी महाराज" img="/apramit.png" />
            <SanidhyaCard name="सहज सागर जी महाराज" img="/sahaj.png" />
            <SanidhyaCard name="क्षुल्लक श्रेयस सागर जी" img="/chullak.png" />
          </div>

        </div>

        {/* ================================================
             BOTTOM GURUS
        ================================================= */}
        <div className="mx-auto w-full max-w-5xl border-t border-pink-200/60 pt-6 sm:pt-8">

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:justify-between">

            <GuruBottom img="/mataji1.jpeg" title="आर्यिका श्री 105 विकाम्याश्री माताजी" />
            <GuruBottom img="/mataji2.jpeg" title="आर्यिका श्री 105 विगुंजन माताजी" />

          </div>

        </div>

      </div>

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#E0679F] to-transparent" />

    </section>
  );
};

export default DivineIntro;





/* ======================================================================
   COMPONENTS
====================================================================== */

const GuruCorner: React.FC<{ img: string; title: string }> = ({ img, title }) => {
  return (
    <div className="flex flex-col items-center">

      <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-full border-4 border-white shadow-[0_10px_25px_rgba(130,24,67,0.35)] bg-white overflow-hidden">

        <Image
          src={img}
          alt={title}
          fill
          priority={false}
          loading="lazy"
          className="object-cover object-center"
        />

      </div>

      <p
        className="mt-2 max-w-[150px] rounded-full bg-[#7A1433] border border-[#F0B86C]/70 px-3 py-1 text-[10px] sm:text-xs md:text-sm font-medium text-white text-center shadow-lg"
        style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
      >
        {title}
      </p>

    </div>
  );
};


const GuruBottom: React.FC<{ img: string; title: string }> = ({ img, title }) => {
  return (
    <div className="flex flex-col items-center">

      <div className="relative h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full border-4 border-[#F0B86C] overflow-hidden shadow-[0_10px_25px_rgba(148,27,73,0.3)] bg-white">

<Image
  src={img}
  alt={title}
  fill
  loading="lazy"
  className="object-cover"
  sizes="96px"
  style={{ objectPosition: "50% 15%" }}
/>


      </div>

      <p
        className="mt-2 max-w-[170px] rounded-full border border-[#F0B86C] bg-[#7A1433] px-3 py-1 text-[10px] sm:text-xs md:text-sm font-medium text-white text-center shadow-md"
        style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
      >
        {title}
      </p>

    </div>
  );
};



const SanidhyaCard: React.FC<{ name: string; img: string }> = ({ name, img }) => {
  return (
    <div className="group flex flex-col items-center">

      <div className="relative mb-3 sm:mb-4 h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full border-4 border-white bg-white shadow-[0_12px_30px_rgba(148,27,73,0.25)] overflow-hidden">

        <Image
          src={img}
          alt={name}
          fill
          loading="lazy"
          className="object-cover object-top"
        />

      </div>

      <p
        className="px-1 text-center text-sm sm:text-base md:text-lg font-semibold text-[#7A1433] group-hover:text-[#E0679F] transition-colors duration-300"
        style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
      >
        {name}
      </p>

    </div>
  );
};



const InfoItem: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({
  icon,
  title,
  text,
}) => (
  <div className="group">
    <div className="flex items-start gap-3 sm:gap-4">
      <span className="mt-0.5 flex-shrink-0 text-xl sm:text-2xl text-[#E0679F] transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
      <div>
        <p className="mb-1 text-sm font-bold text-[#7A1433] sm:text-base">
          {title}
        </p>
        <p className="text-xs leading-relaxed text-[#7A1433]/85 sm:text-sm">
          {text}
        </p>
      </div>
    </div>
  </div>
);



/* ======================================================================
   INFO CARD COMPONENT
====================================================================== */

const InfoCard = () => (
  <div className="mx-auto mb-4 w-full max-w-5xl">
    <div className="overflow-hidden rounded-3xl border border-pink-200/70 bg-white/90 shadow-[0_18px_45px_rgba(158,39,88,0.16)] backdrop-blur-md">

      <div className="h-1.5 bg-gradient-to-r from-[#E0679F] via-[#F0B86C] to-[#E0679F]" />

      <div className="grid grid-cols-1 gap-6 px-6 py-7 text-sm sm:grid-cols-2 sm:gap-8 sm:px-8 sm:py-9 md:gap-10 md:px-10 md:text-base" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>

        {/* left column */}
        <div className="space-y-6">
          <InfoItem icon={<Landmark className="w-5 h-5 text-[#E0679F]" />} title="ऐतिहासिक आयोजन" text="500+ जिनबिंब की प्रतिष्ठा का भव्य पंचकल्याणक" />
          <InfoItem icon={<Calendar className="w-5 h-5 text-[#E0679F]" />} title="भावी जिनालय का शिलान्यास" text="22 फरवरी 2026, प्रातः 08:00 बजे" />
          <InfoItem icon={<MapPin className="w-5 h-5 text-[#E0679F]" />} title="पुण्य स्थल" text="टिम्बा गामड़ी, मोरडी मिल के पास, बाँसवाड़ा–उदयपुर रोड" />
        </div>

        {/* right column */}
        <div className="space-y-6">
          <InfoItem icon={<Users className="w-5 h-5 text-[#E0679F]" />} title="आप सपरिवार सादर आमंत्रित" text="इस पावन अवसर पर आपका हार्दिक स्वागत है" />
          <InfoItem icon={<Landmark className="w-5 h-5 text-[#E0679F]" />} title="आयोजक" text="चतुर्विंशती तीर्थंकर समिति, वात्सल्य सेवार्थ फाउंडेशन" />

          <div className="rounded-2xl border border-[#F0B86C]/60 bg-gradient-to-br from-[#FFE5F0]/70 via-[#FFF7EA]/70 to-[#FFE5F0]/70 px-4 py-4 sm:px-5 sm:py-5">
            <p className="mb-2 text-sm font-semibold text-[#7A1433]">आयोजन समिति</p>
            <p className="text-xs sm:text-sm text-[#7A1433]/90">
              <span className="font-semibold">अध्यक्ष:</span> दिनेश जी खोड़निया
            </p>
            <p className="text-xs sm:text-sm text-[#7A1433]/90">
              <span className="font-semibold">गौरवाध्यक्ष:</span> अशोक जी वोरा
            </p>
          </div>

        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-transparent via-[#E0679F] to-transparent" />

    </div>
  </div>
);

