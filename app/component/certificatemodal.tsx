"use client";

import html2canvas from "html2canvas";
import { X } from "lucide-react";
import { useRef } from "react";

interface CertificateProps {
  name?: string;
  amount?: string;
  yojanaName?: string;
  phone?: string;
  certificateNumber?: string;
  tirthName?: string;
  onClose: () => void;
}

export default function UniversalCertificateFinal({
  name = "",
  amount = "",
  yojanaName = "",
  phone = "",
  certificateNumber = "",
  tirthName = "",
  onClose,
}: CertificateProps) {

  const certRef = useRef<HTMLDivElement>(null);

  const downloadImage = async () => {
    if (!certRef.current) return;
    const canvas = await html2canvas(certRef.current, {
      scale: 3,
      backgroundColor: null,
    });
    const link = document.createElement("a");
    link.download = `certificate-${certificateNumber || "certificate"}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-auto">

      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[99999] bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition shadow-xl"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B0048]" />
      </button>

      {/* CERTIFICATE CONTAINER */}
      <div className="w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px] my-4">

        <div
          ref={certRef}
          className="mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden relative"
          style={{
            background: "linear-gradient(180deg, #FFFBF5 0%, #FFF4E6 50%, #FFFBF5 100%)",
            maxHeight: "85vh",
            aspectRatio: "9/14"
          }}
        >
          
          {/* ORNATE GOLDEN BORDER (UNCHANGED UI) */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-2 border-4 border-[#D4AF37] rounded-2xl"></div>
            <div className="absolute inset-4 border-2 border-[#D4AF37]/40 rounded-xl"></div>
            {/* Corner Ornaments */}
            {/* (KEEP ALL SVGs UNCHANGED) */}
            <svg className="absolute top-3 left-3 w-12 h-12 text-[#D4AF37]" viewBox="0 0 50 50">
              <path d="M0,0 L15,0 Q20,5 15,10 L0,10 Z M0,0 L0,15 Q5,20 10,15 L10,0 Z" fill="currentColor" opacity="0.7"/>
            </svg>
            <svg className="absolute top-3 right-3 w-12 h-12 text-[#D4AF37]" viewBox="0 0 50 50" style={{transform: 'scaleX(-1)'}}>
              <path d="M0,0 L15,0 Q20,5 15,10 L0,10 Z M0,0 L0,15 Q5,20 10,15 L10,0 Z" fill="currentColor" opacity="0.7"/>
            </svg>
            <svg className="absolute bottom-3 left-3 w-12 h-12 text-[#D4AF37]" viewBox="0 0 50 50" style={{transform: 'scaleY(-1)'}}>
              <path d="M0,0 L15,0 Q20,5 15,10 L0,10 Z M0,0 L0,15 Q5,20 10,15 L10,0 Z" fill="currentColor" opacity="0.7"/>
            </svg>
            <svg className="absolute bottom-3 right-3 w-12 h-12 text-[#D4AF37]" viewBox="0 0 50 50" style={{transform: 'scale(-1)'}}>
              <path d="M0,0 L15,0 Q20,5 15,10 L0,10 Z M0,0 L0,15 Q5,20 10,15 L10,0 Z" fill="currentColor" opacity="0.7"/>
            </svg>
          </div>

          {/* MAIN CONTENT */}
          <div className="relative h-full flex flex-col p-4 sm:p-5 md:p-6">

            {/* TOP SECTION */}
            <div className="relative mb-4 sm:mb-5 flex-shrink-0">

              {/* MATAJI IMAGES */}
              <div className="absolute top-0 left-0">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-[#D4AF37] rounded-full blur-sm opacity-30"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-lg bg-white p-0.5">
                    <img src="/mataji1.jpeg" className="w-full h-full object-cover object-top" alt="परम पूज्य माताजी – ह्रींकार तीर्थ पंचकल्याणक" />
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-[#D4AF37] rounded-full blur-sm opacity-30"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-lg bg-white p-0.5">
                    <img src="/mataji2.jpeg" className="w-full h-full object-cover object-top" alt="परम पूज्य माताजी – पंचकल्याणक महोत्सव 2026" />
                  </div>
                </div>
              </div>

              {/* CENTER TITLE */}
              <div className="pt-16 sm:pt-18 md:pt-20 text-center">
                <h1 className="text-base sm:text-lg md:text-xl font-black text-[#8B0048] tracking-wide mb-1 sm:mb-2 px-2">
                  {tirthName}
                </h1>

                <p className="text-xs sm:text-sm text-[#8B0048]/80 font-semibold">
                  दिव्य पंचकल्याणक प्रतिष्ठा महोत्सव
                </p>

                <div className="flex items-center justify-center gap-2 mt-2 sm:mt-3">
                  <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                  <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
                </div>
              </div>

            </div>

            {/* MAIN AREA */}
            <div className="flex-1 flex flex-col justify-between">

              {/* TITLE */}
              <div className="text-center mb-2 sm:mb-3">
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#8B0048] mb-1">
                  सम्मान प्रमाण पत्र
                </h2>
                <p className="text-[9px] sm:text-[10px] text-[#8B0048]/70 italic">
                  यह प्रमाण पत्र विनम्रतापूर्वक प्रदान किया जाता है
                </p>
              </div>

              {/* DONOR NAME */}
              <div className="bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/5 to-[#D4AF37]/10 rounded-lg p-2 sm:p-3 mb-2 sm:mb-3 border border-[#D4AF37]/30">
                <p className="text-[9px] sm:text-[10px] text-[#8B0048]/60 text-center">
                  श्रीमान/श्रीमती
                </p>
                <h3 className="text-base sm:text-lg md:text-xl font-black text-[#8B0048] text-center leading-tight">
                  {name}
                </h3>
              </div>

              {/* DETAILS */}
              <div className="space-y-2 sm:space-y-3 mb-3">

                {/* AMOUNT */}
                <div className="flex items-center justify-between p-2 bg-white rounded-lg border-l-3 border-[#D4AF37] shadow-sm">
                  <p className="text-xs font-bold text-[#8B0048]">{amount}</p>
                  <p className="text-[9px] text-[#8B0048]/60">दान राशि</p>
                </div>

                {/* YOJANA */}
                <div className="flex items-center justify-between p-2 bg-white rounded-lg border-l-3 border-[#D4AF37] shadow-sm">
                  <p className="text-[10px] sm:text-xs font-semibold text-[#8B0048] truncate">{yojanaName}</p>
                  <p className="text-[9px] text-[#8B0048]/60">योजना</p>
                </div>

                {/* PHONE + CERT */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 bg-white rounded-lg border border-[#D4AF37]/30 shadow-sm">
                    <p className="text-[10px] font-semibold text-[#8B0048]">{phone}</p>
                    <p className="text-[8px] text-[#8B0048]/60">संपर्क</p>
                  </div>

                  <div className="p-2 bg-white rounded-lg border border-[#D4AF37]/30 shadow-sm">
                    <p className="text-[10px] font-semibold text-[#8B0048] break-all">{certificateNumber}</p>
                    <p className="text-[8px] text-[#8B0048]/60">प्रमाण संख्या</p>
                  </div>
                </div>

              </div>

              {/* BLESSING */}
              <div className="bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] rounded-lg p-2 border border-[#D4AF37]/20 text-center mb-2">
                <p className="text-[9px] sm:text-[10px] text-[#8B0048]/80 leading-relaxed italic">
                  आपका यह पावन सहयोग अनंत पुण्य का कारण बने।
                  <br />
                  <span className="font-bold not-italic text-[#D4AF37]">🙏 धन्यवाद 🙏</span>
                </p>
              </div>

            </div>

           
          </div>
        </div>

        
    

      </div>
    </div>
  );
}
