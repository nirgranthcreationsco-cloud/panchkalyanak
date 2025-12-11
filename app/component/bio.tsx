"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ---------- FULL BIO TEXT (clean paragraphs) ---------- */
const FULL_BIO = `श्रमणी आर्यिका 105 विकाम्याश्री माताजी का जन्म 1 जुलाई 1986 को मध्यप्रदेश के सागर जिले के रामपुरा नगर में एक धार्मिक एवं संस्कारी जैन परिवार में हुआ। बचपन से ही आपके स्वभाव में दया, करुणा, विनय और जिनवाणी के प्रति गहरी आस्था रही।

बचपन में लौकिक शिक्षा सीमित रही, पर धार्मिक अध्ययन अत्यंत गहन रहा। गुरुजनों की सेवा, वृद्धजनों के प्रति सम्मान और जैन संस्कारों के पालन में आप सदैव अग्रणी रहीं। प्रारंभ से ही जिनशासन के प्रति आपका समर्पण उल्लेखनीय रहा।

सन 2002 में समाधि-सम्राट पूज्य गणाचार्य विरागसागर जी के सान्निध्य में आध्यात्मिक जागरण हुआ। 24 अप्रैल 2002 को ब्रह्मचर्य व्रत ग्रहण किया और 13 फरवरी 2006 को श्रवणबेलगोला में भगवान बाहुबली की चरण-निश्रा में भव्य दीक्षा लेकर “आर्यिका विकाम्याश्री” बनीं।

दीक्षा के उपरांत आपने अनेक आगम, सिद्धांत ग्रंथ और धार्मिक साहित्य का गहन अध्ययन गुरु-मुख से किया। अब तक 21 से अधिक चातुर्मास विभिन्न प्रदेशों में कर, आपने असंख्य श्रद्धालुओं के हृदय में भक्ति और वैराग्य का प्रकाश फैलाया है।

लगभग 70,000 किलोमीटर की पदयात्राओं के माध्यम से आपने अहिंसा, सत्य और अपरिग्रह का संदेश जन-जन तक पहुँचाया। आपके मार्गदर्शन से अनेक श्रावक-श्राविकाओं के जीवन में सकारात्मक परिवर्तन आए।

आप एक प्रेरक वक्ता, संस्कार-प्रणेत्री, आध्यात्मिक हीलर और सराहनीय लेखिका हैं। सोशल मीडिया पर जैन-जैनेत्तर समुदाय में भी आपका विशेष प्रभाव है।

आपके प्रेरणा से मंजवा (काशी-बनारस) में चिंतामणि पार्श्वनाथ जी का भव्य मंदिर निर्माण संभव हुआ। धर्म-प्रभावना, त्याग, करुणा और साधना के आपके अद्वितीय योगदान को देखते हुए आपको “भारत गौरव” सम्मान से अलंकृत किया गया।

विगत चार वर्षों से आप वागड़-मेवाड़ क्षेत्र में ऐतिहासिक धर्मप्रभावना कर रही हैं, जहाँ श्री विरागविशुद्ध हींकार तीर्थ का निर्माण आपके मार्गदर्शन में प्रगति पर है।`;

export default function PrernaBio() {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [maxH, setMaxH] = useState("0px");

  /* Auto height calculation */
  useEffect(() => {
    if (!contentRef.current) return;
    const fullHeight = contentRef.current.scrollHeight;
    setMaxH(open ? `${fullHeight}px` : "0px");
  }, [open]);

  return (
    <section className="w-full max-w-4xl mx-auto select-none">
      <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-[#F0B86C]/40 shadow-xl overflow-hidden">

        {/* ---------- HEADER ROW ---------- */}
        <div className="flex items-center gap-5 px-6 py-5">

          {/* IMAGE */}
          <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border-2 border-[#F0B86C] shadow-md">
            <Image
              src="/mataji1.jpeg"
              alt="आर्यिका विकाम्याश्री माताजी"
              fill
              className="object-cover"
              style={{ objectPosition: "50% 18%" }}
            />
          </div>

          {/* TITLE */}
          <div className="flex-1 min-w-0">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#7A1433] leading-tight">
              आर्यिका 105 विकाम्याश्री माताजी – जीवन परिचय
            </h2>
            <p className="text-sm text-[#7A1433]/70 mt-1">
              प्रेरणा • साधना • धर्मप्रभावना
            </p>
          </div>

          {/* TOGGLE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="h-10 w-10 flex items-center justify-center rounded-lg border bg-white 
                       border-[#E0679F]/40 hover:bg-[#FFF4F8] transition"
          >
            <svg
              className={`h-5 w-5 text-[#E0679F] transition-transform ${
                open ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 20 20"
            >
              <path d="M6 8l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* ---------- COLLAPSIBLE BIO ---------- */}
        <div
          ref={contentRef}
          style={{
            maxHeight: maxH,
            overflow: "hidden",
            transition: "max-height 500ms cubic-bezier(.2,.9,.2,1)",
          }}
        >
          <div className="px-6 pb-6 pt-1 text-[#7A1433] leading-[1.85] text-[15px]">

            {/* Styled Preview */}
            <p className="italic text-[#7A1433]/80 mb-3">
              “जन्म से साधना तक — एक प्रेरणादायी आध्यात्मिक यात्रा”
            </p>

            {/* FULL BIO WITH STYLING */}
            <div className="mt-4 space-y-5">
              {FULL_BIO.split("\n").map((para, idx) => (
                <p key={idx} className="text-[15.5px] leading-relaxed font-medium">
                  {para}
                </p>
              ))}
            </div>

            {/* Divider */}
            <div className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-[#F0B86C] to-transparent" />

            <p className="text-xs text-[#7A1433]/60 mt-3 text-center">
              (पूरे जीवन परिचय को विस्तार से पढ़ने हेतु ऊपर क्लिक करें)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
