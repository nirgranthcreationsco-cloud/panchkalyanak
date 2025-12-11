"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

/* ------------------ FULL BIO TEXT ------------------ */
const FULL_BIO = `
श्रमणी आर्यिका 105 विकाम्याश्री माताजी का जन्म 1 जुलाई 1986 को मध्यप्रदेश के सागर जिले के रामपुरा नगर में एक धार्मिक एवं संस्कारी जैन परिवार में हुआ। बचपन से ही आपके स्वभाव में दया, करुणा, विनय और जिनवाणी के प्रति गहरी आस्था दिखती थी।

लौकिक शिक्षा सीमित रही पर धार्मिक अध्ययन अत्यंत गहन रहा। गुरुजनों की सेवा, वृद्धजनों के प्रति सम्मान और जिनसंस्कारों के पालन में आप सदैव अग्रणी रहीं।

2002 में पूज्य गणाचार्य विरागसागर जी के सान्निध्य में आध्यात्मिक जागरण हुआ और आपने 24 अप्रैल 2002 को ब्रह्मचर्य व्रत धारण किया। 13 फरवरी 2006 को श्रवणबेलगोला में भगवान बाहुबली की चरणनिश्रा में भव्य दीक्षा लेकर "आर्यिका विकाम्याश्री" बनीं।

दीक्षा के पश्चात आपने अनेक जैन आगमों एवं सिद्धांत-ग्रंथों का गहन अध्ययन किया। 21 से अधिक चातुर्मासों में आपने भारतभर में धर्मप्रभावना करते हुए असंख्य भक्तों के हृदय में भक्ति और वैराग्य का दीप प्रज्वलित किया।

आपने लगभग 70,000 किलोमीटर की पदयात्राएँ कर "अहिंसा परमो धर्म:" का संदेश जन-जन तक पहुँचाया। आप प्रेरक वक्ता, संस्कार-प्रणेत्री, आध्यात्मिक हीलर एवं उत्कृष्ट लेखिका हैं जिनसे लाखों लोग प्रेरणा ग्रहण करते हैं।

आपके मार्गदर्शन में अनेक संस्कार शिविर, तीर्थ निर्माण कार्य एवं भव्य योजनाएँ संपन्न हुईं। मंजवा (काशी–बनारस) में चिंतामणि पार्श्वनाथजी का अतिशयकारी मंदिर आपके निर्देशन का विशेष उदाहरण है।

आपकी साधना, मंत्र-जप एवं करुणा से असंख्य जीवनों में सकारात्मक परिवर्तन आया। आपकी असाधारण सेवाओं हेतु आपको "भारत गौरव" सम्मान से अलंकृत किया गया।

विगत वर्षों से आप वागड़–मेवाड़ क्षेत्र में धर्मप्रभावना कर रही हैं जहाँ श्री विरागविशुद्ध हींकार तीर्थक्षेत्र का निर्माण आपकी प्रेरणा से प्रगति पर है।

वात्सल्यमयी गुरुमाँ का मंगल आशीर्वाद समस्त भक्तों पर बना रहे।
`;

export default function PrernaBio() {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [maxH, setMaxH] = useState("0px");

  /* FIX: useLayoutEffect instead of useEffect */
  useLayoutEffect(() => {
    if (!contentRef.current) return;
    requestAnimationFrame(() => {
      const height = contentRef.current!.scrollHeight;
      setMaxH(open ? `${height}px` : "0px");
    });
  }, [open]);

  return (
    <section className="w-full max-w-4xl mx-auto select-none">
      <div className="rounded-2xl bg-white shadow-xl border border-[#F0B86C]/50 overflow-hidden">

        {/* ================= TOP HEADER ================= */}
        <div className="flex items-center gap-5 px-6 py-5 bg-white/70 backdrop-blur-md">

          {/* IMAGE */}
          <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-[#F0B86C] shadow">
            <Image
              src="/mataji1.jpeg"
              alt="प्रेरणा माताजी"
              fill
              className="object-cover"
              style={{ objectPosition: "50% 20%" }}
            />
          </div>

          {/* TITLE */}
          <div className="flex-1">
            <h3 className="text-xl font-extrabold text-[#7A1433] leading-tight">
              प्रेरणा स्तोत्र — श्रमणी आर्यिका श्री 105 विकाम्याश्री माताजी
            </h3>
            <p className="text-sm text-[#7A1433]/60 mt-1">
              प्रेरणादायी जीवन परिचय
            </p>
          </div>

          {/* BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="h-10 w-10 flex items-center justify-center rounded-lg border border-[#E0679F]/30 hover:bg-[#FFF3F8]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 text-[#E0679F] transition-transform ${
                open ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M6 8l4 4 4-4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* ================= COLLAPSIBLE CONTENT ================= */}
        <div
          ref={contentRef}
          style={{
            maxHeight: maxH,
            overflow: "hidden",
            transition: "max-height 600ms cubic-bezier(.25,.95,.25,1)",
          }}
        >
          <div className="px-6 py-5 text-[#7A1433] leading-relaxed text-[15px] prose prose-sm max-w-none">

            {/* Styled paragraphs */}
            {FULL_BIO.split("\n\n").map((p, i) => (
              <p key={i} className="font-medium tracking-wide">
                {p}
              </p>
            ))}

            <p className="text-xs text-[#7A1433]/40 mt-3">
              (पूरा जीवन परिचय ऊपर विस्तार से पढ़ें)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
