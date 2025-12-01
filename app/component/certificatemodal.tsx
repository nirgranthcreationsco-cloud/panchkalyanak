"use client";

import html2canvas from "html2canvas";
import { X } from "lucide-react";
import { useRef } from "react";

interface CertificateProps {
  name: string;
  amount: string;
  yojanaName: string;
  phone: string;
  certificateNumber: string;
  tirthName: string;
  onClose: () => void;
}

export default function UniversalCertificateFinal({
  name,
  amount,
  yojanaName,
  phone,
  certificateNumber,
  tirthName,
  onClose,
}: CertificateProps) {
  const certRef = useRef<HTMLDivElement>(null);

  /* ------------------ DOWNLOAD CERTIFICATE ------------------ */
  const downloadImage = async () => {
    if (!certRef.current) return;

    const canvas = await html2canvas(certRef.current, {
      scale: 3,
      backgroundColor: null,
    });

    const link = document.createElement("a");
    link.download = `certificate-${certificateNumber}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 overflow-auto">

      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-[99999] bg-white/70 backdrop-blur-md w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:bg-white transition"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B0048]" />
      </button>

      {/* ----------- CERTIFICATE WRAPPER (AUTO SCALE PREVIEW) ----------- */}
      <div className="w-full max-w-[380px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[500px] my-8">

        <div
          ref={certRef}
          className="
            mx-auto 
            aspect-[9/16] 
            bg-white 
            rounded-2xl sm:rounded-3xl
            border-4 sm:border-8 
            border-[#D4AF37] 
            shadow-2xl 
            overflow-hidden 
            relative
          "
          style={{
            background:
              "linear-gradient(180deg, #FFF9F2 0%, #FFF4DF 100%)",
          }}
        >
          {/* INNER SAFE AREA */}
          <div className="absolute inset-0 flex flex-col p-3 sm:p-6">

            {/* ---------------- TOP DECOR ---------------- */}
            <div className="relative text-center pb-2 sm:pb-4 flex-shrink-0">

              {/* Center Logo */}
              <div className="absolute -top-8 sm:-top-12 left-1/2 -translate-x-1/2 z-10">
                <div className="w-16 sm:w-24 h-16 sm:h-24 rounded-full overflow-hidden border-3 sm:border-4 border-[#D4AF37] shadow-lg bg-white">
                  <img src="/logo.png" className="w-full h-full object-cover" alt="Logo" />
                </div>
              </div>

              {/* Corner Images (Left) */}
              <div className="absolute top-1 sm:top-2 left-1 sm:left-2 flex flex-col items-center gap-1 sm:gap-2">
                <img
                  src="/virag.png"
                  className="w-8 sm:w-14 h-8 sm:h-14 rounded-full border border-sm:border-2 border-[#D4AF37] shadow"
                  alt="Virag"
                />
                <img
                  src="/mataji1.jpeg"
                  className="w-7 sm:w-12 h-7 sm:h-12 rounded-full border border-[#FFD76A] shadow"
                  alt="Mataji"
                />
              </div>

              {/* Corner Images (Right) */}
              <div className="absolute top-1 sm:top-2 right-1 sm:right-2 flex flex-col items-center gap-1 sm:gap-2">
                <img
                  src="/vishudh.png"
                  className="w-8 sm:w-14 h-8 sm:h-14 rounded-full border border-sm:border-2 border-[#D4AF37] shadow"
                  alt="Vishudh"
                />
                <img
                  src="/mataji2.jpeg"
                  className="w-7 sm:w-12 h-7 sm:h-12 rounded-full border border-[#FFD76A] shadow"
                  alt="Mataji"
                />
              </div>

              <h1 className="text-base sm:text-xl font-extrabold text-[#8B0048] tracking-wide mt-12 sm:mt-10 px-1">
                {tirthName}
              </h1>
              <p className="text-xs sm:text-sm text-[#8B0048]/70 mt-1">
                दिव्य पंचकल्याणक प्रतिष्ठा महोत्सव
              </p>

              <div className="flex justify-center mt-2">
                <div className="h-[2px] sm:h-[3px] w-20 sm:w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              </div>
            </div>

            {/* SCROLLABLE BODY */}
            <div className="flex-1 overflow-y-auto pr-1 sm:pr-2 text-center flex flex-col justify-center">

              {/* CERTIFICATE TITLE */}
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#8B0048] mb-1 sm:mb-2">
                सम्मान प्रमाण पत्र
              </h2>

              <p className="text-[#8B0048]/70 text-xs sm:text-sm mb-2 sm:mb-4">
                यह प्रमाण पत्र विनम्रतापूर्वक प्रदान किया जाता है —
              </p>

              {/* DONOR NAME */}
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#8B0048] leading-tight mb-3 sm:mb-4 break-words px-1 line-clamp-2">
                {name}
              </h1>

              {/* DETAILS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4 px-1">

                <div className="p-2 sm:p-3 bg-[#FFF5E6] rounded-lg sm:rounded-xl border-l-4 border-[#D4AF37]">
                  <p className="text-xs text-[#8B0048]/70">राशि</p>
                  <p className="text-sm sm:text-lg font-semibold text-[#8B0048]">{amount}</p>
                </div>

                <div className="p-2 sm:p-3 bg-[#FFF5E6] rounded-lg sm:rounded-xl border-l-4 border-[#D4AF37]">
                  <p className="text-xs text-[#8B0048]/70">योजना</p>
                  <p className="text-sm sm:text-lg font-semibold text-[#8B0048] truncate">{yojanaName}</p>
                </div>

                <div className="p-2 sm:p-3 bg-[#FFF5E6] rounded-lg sm:rounded-xl border-l-4 border-[#D4AF37]">
                  <p className="text-xs text-[#8B0048]/70">संपर्क</p>
                  <p className="text-xs sm:text-lg font-semibold text-[#8B0048] truncate">{phone}</p>
                </div>

                <div className="p-2 sm:p-3 bg-[#FFF5E6] rounded-lg sm:rounded-xl border-l-4 border-[#D4AF37]">
                  <p className="text-xs text-[#8B0048]/70">प्रमाण संख्या</p>
                  <p className="text-xs sm:text-lg font-semibold text-[#8B0048] truncate">
                    {certificateNumber}
                  </p>
                </div>

              </div>

              {/* MESSAGE */}
              <p className="text-[#8B0048]/70 italic text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 px-2">
                आपका यह पावन सहयोग अनंत पुण्य का कारण बने।  
                <br /> 🌸 ॐ सर्वे भवन्तु सुखिनः 🌸
              </p>

            </div>

            {/* FOOTER LINE */}
            <div className="text-center pt-1 sm:pt-2 flex-shrink-0 border-t-2 border-[#D4AF37]">
              <p className="text-xs sm:text-sm text-[#8B0048] font-medium">
                🌟 आध्यात्मिक उन्नति की ओर आपका एक दिव्य कदम 🌟
              </p>
            </div>

          </div>
        </div>

        {/* ------------ ACTION BUTTONS ------------- */}
        <div className="mt-4 sm:mt-6 flex gap-2 sm:gap-4 justify-center flex-col sm:flex-row">
          <button
            onClick={downloadImage}
            className="flex-1 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-[#8B0048] text-white font-bold text-sm sm:text-base shadow-md hover:scale-105 transition"
          >
            डाउनलोड करें
          </button>

          <button
            onClick={onClose}
            className="flex-1 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-[#8B0048] text-[#8B0048] font-bold text-sm sm:text-base hover:bg-[#8B0048]/10 transition"
          >
            बंद करें
          </button>
        </div>

      </div>
    </div>
  );
}