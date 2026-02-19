"use client";

import {
    ChevronRight,
    Crown,
    Gem,
    Heart,
    Landmark,
    Sparkles,
    Star
} from "lucide-react";
import { JSX, useState } from "react";
import UniversalYojnaBookingFlow from "../component/booking";

type YojnaItem = {
  name: string;
  amount: string;
  benefits?: string[];
};

type SelectedYojna = YojnaItem & {
  sectionTitle: string;
};

export default function MoreYojnas() {
  const [selected, setSelected] = useState<SelectedYojna | null>(null);
  const [showQR, setShowQR] = useState(false);

  /* ---------------------- DATA ---------------------- */
  const sections: {
    title: string;
    icon: JSX.Element;
    color: string; // tailwind gradient helpers
    items: YojnaItem[];
  }[] = [
    {
      title: "पंचकल्याणक योजनाएँ",
      icon: <Sparkles className="w-6 h-6 text-[#FFD76A]" />,
      color: "from-[#8B0048] via-[#C04878] to-[#FFD76A]",
      items: [
        {
          name: "सामान्य इन्द्र–इन्द्राणी",
          amount: "₹ 3,100",
          benefits: ["पंचकल्याणक में भागीदारी", "नाम अंकित पट्टिका"],
        },
        {
          name: "विशेष इन्द्र–इन्द्राणी",
          amount: "₹ 11,000",
          benefits: ["विशेष पूजा में सम्मिलन", "स्वर्ण अक्षर में नाम"],
        },
        {
          name: "लौकान्तिक देव",
          amount: "₹ 21,000 (प्रत्येक)",
          benefits: ["दिव्य देव पूजन", "विशेष अभिषेक"],
        },
        {
          name: "अष्टकुमारी",
          amount: "₹ 21,000 (प्रत्येक)",
          benefits: ["कुमारी पूजन", "कुल कल्याण की कामना"],
        },
        {
          name: "56 कुमारी",
          amount: "₹ 3,100 (प्रत्येक)",
          benefits: ["पवित्र पूजा", "धर्म लाभ"],
        },
        {
          name: "24 ध्वजारोहण कर्ता",
          amount: "₹ 1,11,000 (प्रत्येक)",
          benefits: ["ध्वजारोहण का सौभाग्य", "विशेष सम्मान"],
        },
        {
          name: "24 आहार दाता",
          amount: "₹ 1,11,000 (प्रत्येक)",
          benefits: ["आहार दान का महापुण्य", "तीर्थंकर भाव की आराधना"],
        },
        {
          name: "रत्नमयी चौबीसी",
          amount: "₹ 2,51,000 (प्रत्येक)",
          benefits: ["रत्नमयी प्रतिमा सहयोग", "विशेष स्मृति"],
        },
        {
          name: "जिनालय एवं जिनबिम्ब",
          amount: "₹ 31,000 (प्रत्येक)",
          benefits: ["मंदिर निर्माण में सहयोग", "प्रतिमा प्रतिष्ठा में भागीदारी"],
        },
        {
          name: "मुख्य वेदी",
          amount: "₹ 5,11,000",
          benefits: ["मुख्य वेदी निर्माण", "नाम स्वर्णाक्षर में"],
        },
        {
          name: "ह्रींकार वेदी",
          amount: "₹ 5,11,000",
          benefits: ["विशेष वेदी निर्माण", "धार्मिक गौरव"],
        },
        {
          name: "वेदी कलश",
          amount: "₹ 1,11,000",
          benefits: ["मंगल कलश स्थापना", "शुभ फल प्राप्ति"],
        },
        {
          name: "ध्वजा",
          amount: "₹ 1,11,000",
          benefits: ["धर्म ध्वज स्थापना", "पुण्य प्रसिद्धि"],
        },
      ],
    },
    {
      title: "हमारी विशेष योजनाएँ",
      icon: <Gem className="w-6 h-6 text-[#FFD76A]" />,
      color: "from-[#C04878] via-[#8B0048] to-[#FFD76A]",
      items: [
        {
          name: "यात्री निवास कमरा",
          amount: "₹ 5,00,000",
          benefits: ["आरामदायक निवास", "यात्रियों की सेवा में सीधा सहयोग"],
        },
        {
          name: "व्रती आश्रम कक्षा",
          amount: "₹ 3,00,000",
          benefits: ["व्रतीजनों के लिए साधना कक्ष", "धर्माराधना हेतु स्थान"],
        },
        {
          name: "श्रवण वस्तिका",
          amount: "₹ 5,11,000",
          benefits: ["श्रावक निवास सुविधा", "परिवार सहित धर्मानुष्ठान"],
        },
        {
          name: "श्रमणी वस्तिका",
          amount: "₹ 5,11,000",
          benefits: ["साध्वीजी निवास सुविधा", "महापुण्य का अवसर"],
        },
        {
          name: "बड़ा हॉल",
          amount: "₹ 21,00,000",
          benefits: ["विशाल सभागार निर्माण", "धार्मिक आयोजनों का केन्द्र"],
        },
        {
          name: "छोटा हॉल",
          amount: "₹ 11,00,000",
          benefits: ["सभा भवन निर्माण", "समूहिक कार्यक्रम सुविधा"],
        },
        {
          name: "भोजन शाला",
          amount: "₹ 11,00,000",
          benefits: ["अन्नदान व्यवस्था", "यात्रियों के लिए भोजन सेवा"],
        },
      ],
    },
    {
      title: "ह्रींकार तीर्थ के आधार स्तंभ",
      icon: <Crown className="w-6 h-6 text-[#FFD76A]" />,
      color: "from-[#FFD76A] via-[#C04878] to-[#8B0048]",
      items: [
        {
          name: "परम शिरोमणि संरक्षक",
          amount: "₹ 31,00,000",
          benefits: ["सर्वोच्च संरक्षक सम्मान", "जीवनभर तीर्थ संरक्षण में सहभागिता"],
        },
        {
          name: "शिरोमणि संरक्षक",
          amount: "₹ 21,00,000",
          benefits: ["उच्च संरक्षक पद", "विशेष मान–सम्मान"],
        },
        {
          name: "परम संरक्षक",
          amount: "₹ 11,00,000",
          benefits: ["संरक्षक दर्जा", "नाम पट्टिका में उल्लेख"],
        },
        {
          name: "संरक्षक",
          amount: "₹ 5,00,000",
          benefits: ["तीर्थ संरक्षण में योगदान", "धार्मिक उत्तरदायित्व"],
        },
        {
          name: "सदस्य (ट्रस्टी)",
          amount: "₹ 1,11,000",
          benefits: ["ट्रस्टी सदस्यता", "निर्णय प्रक्रिया में सहभागिता"],
        },
      ],
    },
    {
      title: "आगामी योजनाएँ",
      icon: <Landmark className="w-6 h-6 text-[#FFD76A]" />,
      color: "from-[#5A0030] via-[#8B0048] to-[#FAD2C1]",
      items: [
        {
          name: "प्रतिबास्थली",
          amount: "जल्द प्रारम्भ",
          benefits: ["भविष्य की विशेष धर्मस्थली"],
        },
        {
          name: "विशाल आयुर्वेद औषधालय",
          amount: "जल्द प्रारम्भ",
          benefits: ["आयुर्वेदिक स्वास्थ्य सेवा"],
        },
        {
          name: "उद्यान",
          amount: "जल्द प्रारम्भ",
          benefits: ["शांत, हरित ध्यान क्षेत्र"],
        },
        {
          name: "मानस्तंभ",
          amount: "जल्द प्रारम्भ",
          benefits: ["तीर्थ का प्रतीक भव्य स्तंभ"],
        },
        {
          name: "ध्यान केंद्र",
          amount: "जल्द प्रारम्भ",
          benefits: ["आध्यात्मिक साधना के लिए समर्पित स्थान"],
        },
        {
          name: "गौशाला",
          amount: "जल्द प्रारम्भ",
          benefits: ["गौ सेवा और संरक्षण"],
        },
        {
          name: "जिनवाणी मंदिर",
          amount: "जल्द प्रारम्भ",
          benefits: ["धर्म प्रचार, ग्रंथ अध्ययन"],
        },
      ],
    },
  ];

  const handleOpenModal = (item: YojnaItem, sectionTitle: string) => {
    setSelected({ ...item, sectionTitle });
    setShowQR(false);
  };

  const handleCloseModal = () => {
    setSelected(null);
    setShowQR(false);
  };

  /* ---------------------- UI ---------------------- */
  return (
    <>
      <main
        className="min-h-screen bg-gradient-to-b from-[#FFF7F0] via-[#FAE7D6]/70 to-[#F7B7A3]/40 relative overflow-hidden"
        role="main"
        aria-label="ह्रींकार तीर्थ – समस्त योजनाएँ"
      >
      {/* Back Button */}
<button
  onClick={() => window.history.back()}
  className="fixed top-6 left-6 z-[100] px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#FAD2C1] shadow-md text-[#8B0048] font-semibold text-sm flex items-center gap-2 hover:bg-white hover:shadow-lg transition-all"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
  वापस जाएँ
</button>

        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-0 w-[22rem] h-[22rem] bg-[#FFD76A]/25 blur-[140px] rounded-full" />
          <div className="absolute -bottom-40 right-[-4rem] w-[26rem] h-[26rem] bg-[#C04878]/25 blur-[160px] rounded-full" />
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-10 py-16">
          {/* HEADER */}
          <header className="max-w-6xl mx-auto text-center mb-20">
            {/* Rotating LOGO */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 border-2 border-[#FFD76A]/40 rounded-full flex items-center justify-center animate-spin-slow">
                  <div className="w-20 h-20 border-2 border-[#FFD76A]/80 rounded-full flex items-center justify-center bg-white/95 shadow-lg overflow-hidden">
                    <img
                      src="/logo.png"
                      alt="ह्रींकार तीर्थ लोगो"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-[#FFD76A]/30 rounded-full blur-xl" />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/70 rounded-full border border-[#FFD76A]/70 mb-6">
              <span className="text-[#8B0048] font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase">
                HRIMKAR TIRTH YOJNAE
              </span>
            </div>

            <h1 className="hindi-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#5A0030] mb-4 leading-[1.3]">
              ह्रींकार तीर्थ{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFD76A] via-[#FAD2C1] to-[#FFD76A]">
                समस्त योजनाएँ
              </span>
            </h1>

            <p className="hindi-text text-base sm:text-lg md:text-xl text-[#5E0B15]/85 max-w-3xl mx-auto leading-relaxed">
              तीर्थ निर्माण, सेवा और साधना की इन पावन योजनाओं के माध्यम से आप
              स्वयं एवं परिवार के लिए अनंत पुण्य का अर्जन कर सकते हैं।
            </p>

            {/* Divider */}
            <div className="mt-8 flex justify-center items-center gap-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#FFD76A] to-transparent" />
              <div className="w-3 h-3 rotate-45 bg-gradient-to-br from-[#FFD76A] to-[#FAD2C1] shadow-[0_0_14px_rgba(255,215,106,0.7)]" />
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#FFD76A] to-transparent" />
            </div>
          </header>

          {/* SECTIONS */}
          <div className="max-w-7xl mx-auto space-y-24">
            {sections.map((section) => (
              <section key={section.title} className="relative">
                {/* Section header */}
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg`}
                    >
                      {section.icon}
                    </div>
                  </div>
                  <h2 className="hindi-text text-3xl md:text-4xl font-bold text-[#5A0030] mb-3 leading-[1.35]">
                    {section.title}
                  </h2>
                  <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#FFD76A] to-transparent mx-auto" />
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleOpenModal(item, section.title)}
                      className="group text-left bg-white/95 rounded-2xl overflow-hidden border border-[#FAD2C1]/80 hover:border-[#C04878] shadow-sm hover:shadow-[0_0_30px_rgba(192,72,120,0.4)] hover:-translate-y-1.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C04878]/70"
                    >
                      {/* Accent bar */}
                      <div
                        className={`h-1 w-full bg-gradient-to-r ${section.color}`}
                      />

                      <div className="p-6 space-y-4">
                        {/* Tag */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF7F0] border border-[#FAD2C1]">
                          <Sparkles className="w-3 h-3 text-[#8B0048]" />
                          <span className="text-[11px] font-semibold text-[#8B0048] tracking-wide">
                            Hrimkar Yojna
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="hindi-text text-lg md:text-xl font-bold text-[#5A0030] leading-[1.4] min-h-[3.4rem] group-hover:text-[#8B0048]">
                          {item.name}
                        </h3>

                        {/* Amount */}
                        <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8B0048] via-[#C04878] to-[#FFD76A]">
                          {item.amount}
                        </p>

                        {/* Benefits preview */}
                        {item.benefits && (
                          <div className="space-y-2 pt-3 border-t border-[#FAD2C1]/60">
                            {item.benefits.slice(0, 2).map((benefit, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 text-sm text-[#5E0B15]/85 hindi-text"
                              >
                                <Star className="w-4 h-4 text-[#FFD76A] fill-[#FFD76A] flex-shrink-0 mt-[2px]" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* CTA line */}
                        <div className="mt-3 flex items-center justify-between text-sm font-semibold text-[#8B0048]">
                          <span className="hindi-text">
                            विस्तृत विवरण व यजमान बनने हेतु
                          </span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="max-w-4xl mx-auto mt-24 text-center">
            <div className="relative p-10 md:p-12 bg-gradient-to-br from-white/95 via-[#FFF2E4] to-white rounded-3xl border border-[#FFD76A]/70 shadow-2xl overflow-hidden">
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, #FFD76A 1px, transparent 0)",
                  backgroundSize: "26px 26px",
                }}
              />
              <div className="relative space-y-6">
                <Heart className="w-10 h-10 mx-auto text-[#C04878] fill-[#C04878]" />
                <h3 className="hindi-text text-3xl md:text-4xl font-bold text-[#5A0030] leading-[1.35]">
                  तीर्थ विकास में अपना सहयोग प्रदान करें
                </h3>
                <p className="hindi-text text-base md:text-lg text-[#5E0B15]/80 max-w-2xl mx-auto leading-relaxed">
                  प्रत्येक योजना, तीर्थ के निर्माण और संरक्षण की दिशा में एक
                  सशक्त कदम है। आपकी श्रद्धा और सहयोग से यह दिव्य स्वप्न साकार
                  होगा।
                </p>
                <button
                  type="button"
                  className="px-10 py-4 bg-gradient-to-r from-[#8B0048] via-[#C04878] to-[#FFD76A] text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-[0_0_30px_rgba(192,72,120,0.6)] hover:scale-[1.03] transition-transform"
                >
                  समिति से संपर्क करें
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {selected && (
  <UniversalYojnaBookingFlow
    yojana={selected}
    onClose={() => setSelected(null)}
  />
)}

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&display=swap");

        * {
          font-family: "Noto Sans Devanagari", system-ui, -apple-system,
            sans-serif;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        /* Scrollbar tuned to maroon theme */
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(240, 214, 202, 0.6);
          border-radius: 999px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(139, 0, 72, 0.55);
          border-radius: 999px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 0, 72, 0.85);
        }
      `}</style>
    </>
  );
}
