// app/history/page.tsx — Server Component
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "पंचकल्याणक का इतिहास एवं महत्त्व | History | ह्रींकार तीर्थ",
  description:
    "पंचकल्याणक प्रतिष्ठा का इतिहास, आध्यात्मिक महत्त्व, पाँच कल्याणकों का विवरण और जैन धर्म में इसकी भूमिका – सम्पूर्ण जानकारी।",
  robots: { index: false, follow: true },
  alternates: { canonical: "/history" },
  openGraph: {
    title: "पंचकल्याणक का इतिहास | History of Panchkalyanak | जैन धर्म",
    description: "जैन धर्म में पंचकल्याणक का इतिहास, पाँच कल्याणकों का अर्थ, आध्यात्मिक फल और प्रतिष्ठा विधि।",
    url: "https://hrimkartirth.com/history",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "पंचकल्याणक इतिहास जैन धर्म" }],
  },
};

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFF1F5] to-white text-[#3a0020]">

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#8B0048] via-[#C04878] to-[#8B0048] py-16 px-6 text-center">
        <p className="text-[#FFD76A] text-sm font-semibold tracking-widest uppercase mb-2">जैन धर्म का सर्वश्रेष्ठ उत्सव</p>
        <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight mb-4">
          पंचकल्याणक – इतिहास एवं महत्त्व
        </h1>
        <p className="text-[#FAD2C1] text-lg max-w-2xl mx-auto">
          जैन धर्म के सर्वोच्च अनुष्ठान का आध्यात्मिक, ऐतिहासिक एवं धार्मिक परिप्रेक्ष्य
        </p>
      </section>

      <article className="max-w-4xl mx-auto px-6 py-14 space-y-12">

        {/* What is Kalyanak */}
        <section aria-labelledby="kalyanak-kya">
          <h2 id="kalyanak-kya" className="text-2xl md:text-3xl font-bold text-[#8B0048] mb-4 border-b-2 border-[#FFD76A]/40 pb-2">
            कल्याणक क्या होता है?
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            जैन आगम में <strong>कल्याणक</strong> उस महत्त्वपूर्ण घटना को कहते हैं जो तीर्थंकर भगवान के जीवन में होती है और जिससे समस्त जगत का कल्याण होता है। इन घटनाओं के समय देवता, मनुष्य और तिर्यंच — सभी मिलकर उत्सव मनाते हैं।
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            भगवान तीर्थंकर के जीवन में <strong>पाँच</strong> ऐसी विशेष घटनाएं होती हैं जिन्हें <strong>पंचकल्याणक</strong> कहा जाता है। ये पाँचों घटनाएं जगत के सभी प्राणियों के लिए मुक्तिमार्ग को प्रशस्त करती हैं।
          </p>
        </section>

        {/* Five Kalyanak */}
        <section aria-labelledby="panch-kalyanak">
          <h2 id="panch-kalyanak" className="text-2xl md:text-3xl font-bold text-[#8B0048] mb-6 border-b-2 border-[#FFD76A]/40 pb-2">
            पाँच कल्याणक – विस्तृत विवरण
          </h2>
          <div className="space-y-6">
            {[
              {
                num: "1",
                title: "गर्भ कल्याणक",
                desc: "जब तीर्थंकर की जीव माता के गर्भ में आती है, वह क्षण गर्भ कल्याणक कहलाता है। इस समय देवता माता को चौदह स्वप्नों के दर्शन कराते हैं। तीर्थंकर की माता को असाधारण अनुभव होते हैं और आसपास का वातावरण अत्यंत पवित्र हो जाता है। गर्भ काल में तीर्थंकर की माँ धर्म-ध्यान में रत रहती हैं।",
              },
              {
                num: "2",
                title: "जन्म कल्याणक",
                desc: "तीर्थंकर का जन्म जब होता है, उस क्षण भूमि पर सुगंधित जल वर्षा होती है, फूल बरसते हैं और चारों दिशाएं प्रकाशित हो जाती हैं। इन्द्र एवं देव-देवियां भगवान के जन्म के उत्सव में सुमेरु पर्वत पर महाभिषेक करते हैं। समस्त ब्रह्मांड आनंदित हो जाता है।",
              },
              {
                num: "3",
                title: "दीक्षा कल्याणक",
                desc: "जब भगवान तीर्थंकर राज्य, परिवार, समस्त वैभव का स्वेच्छा से त्याग कर मुनि दीक्षा ग्रहण करते हैं, वह क्षण दीक्षा कल्याणक है। इस समय इन्द्र द्वारा भव्य देव-यान भेजा जाता है। भगवान केशलोंच करते हैं और निर्ग्रन्थ दिगम्बर अवस्था में विचरते हैं।",
              },
              {
                num: "4",
                title: "केवलज्ञान कल्याणक",
                desc: "घोर तपश्चर्या के पश्चात् जब भगवान को सम्पूर्ण ज्ञान प्राप्त होता है — अर्थात् केवलज्ञान की प्राप्ति होती है — वह क्षण केवलज्ञान कल्याणक है। इस अवस्था में भगवान त्रिकालज्ञता प्राप्त करते हैं — भूत, वर्तमान और भविष्य के सभी ज्ञान एक साथ प्रकट हो जाते हैं।",
              },
              {
                num: "5",
                title: "मोक्ष/निर्वाण कल्याणक",
                desc: "जब भगवान तीर्थंकर समस्त कर्मों का क्षय कर मोक्ष प्राप्त करते हैं, वह मोक्ष कल्याणक है। यह जैन धर्म की सर्वोच्च अवस्था है। इस क्षण भगवान जन्म-मरण के बंधन से सदा के लिए मुक्त हो जाते हैं और सिद्ध-शुद्धात्मा बनकर लोकाग्र में विराजमान होते हैं।",
              },
            ].map((k) => (
              <div key={k.num} className="bg-white rounded-2xl overflow-hidden border border-[#FAD2C1]/60 shadow-sm flex flex-col md:flex-row">
                <div className="bg-gradient-to-b from-[#8B0048] to-[#C04878] text-white flex items-center justify-center p-6 md:w-20 text-3xl font-extrabold flex-shrink-0">
                  {k.num}
                </div>
                <div className="p-6">
                  <h3 className="text-[#8B0048] font-bold text-xl mb-2">{k.title}</h3>
                  <p className="text-[#3a0020]/80 text-base leading-relaxed">{k.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pratishtha Mahotsav */}
        <section aria-labelledby="pratishtha">
          <h2 id="pratishtha" className="text-2xl md:text-3xl font-bold text-[#8B0048] mb-4 border-b-2 border-[#FFD76A]/40 pb-2">
            पंचकल्याणक प्रतिष्ठा महोत्सव – परंपरा
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            जब किसी नये जिनमंदिर में जिनप्रतिमाओं की प्रतिष्ठा की जाती है, तो <strong>पंचकल्याणक प्रतिष्ठा</strong> का आयोजन किया जाता है। इस आयोजन में <strong>यजमान</strong> (दाता-दात्री जोड़े) इन्द्र-इन्द्राणी का वेश धारण कर भगवान के पाँचों कल्याणकों का अभिनय करते हैं।
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            यह परंपरा हजारों वर्षों से जैन समाज में चली आ रही है। जब भी कोई नया तीर्थ स्थापित होता है, पंचकल्याणक के माध्यम से उसकी प्रतिष्ठा की जाती है। यह आयोजन सम्पूर्ण जैन समाज के लिए एक महापर्व बन जाता है।
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            जैन आगम के अनुसार पंचकल्याणक में <strong>यजमान बनना</strong> अत्यंत पुण्यकारी है। कहा जाता है कि जो व्यक्ति इन्द्र-इन्द्राणी के रूप में पंचकल्याणक में भाग लेता है, उसे <strong>तीन लोक का इन्द्रत्व</strong> प्राप्त होने जितना पुण्य मिलता है।
          </p>
        </section>

        {/* Significance */}
        <section aria-labelledby="mahatva">
          <h2 id="mahatva" className="text-2xl md:text-3xl font-bold text-[#8B0048] mb-4 border-b-2 border-[#FFD76A]/40 pb-2">
            पंचकल्याणक महोत्सव का आध्यात्मिक महत्त्व
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🙏", title: "पुण्यार्जन", desc: "असंख्य जन्मों के पापों का नाश, अनंत पुण्य का संचय" },
              { icon: "🕊️", title: "मोक्षमार्ग", desc: "आत्मा को मोक्ष की ओर प्रेरित करने वाला अनुष्ठान" },
              { icon: "💫", title: "देव-सन्निधि", desc: "इन्द्र एवं देवताओं का प्रत्यक्ष आशीर्वाद" },
              { icon: "🏛️", title: "तीर्थ स्थापना", desc: "नये जैन तीर्थ की विधिवत स्थापना एवं प्रतिष्ठा" },
              { icon: "🌺", title: "समाज संगठन", desc: "जैन समाज को एकजुट करने का अद्वितीय अवसर" },
              { icon: "📿", title: "धर्म जागृति", desc: "जैन धर्म के सिद्धांतों का व्यापक प्रचार-प्रसार" },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-5 border border-[#FAD2C1]/60 shadow-sm">
                <div className="text-3xl mb-2">{s.icon}</div>
                <h3 className="text-[#8B0048] font-bold text-base mb-1">{s.title}</h3>
                <p className="text-[#3a0020]/80 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#8B0048] to-[#C04878] rounded-3xl p-8 text-center text-white space-y-4">
          <h3 className="text-xl font-extrabold">अब यजमान बनने का अवसर आपके सामने है</h3>
          <p className="text-[#FAD2C1]/80 text-sm max-w-xl mx-auto">
            ह्रींकार तीर्थ पंचकल्याणक प्रतिष्ठा महोत्सव 2026 में इन्द्र-इन्द्राणी बनें और अनंत पुण्य अर्जित करें।
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="px-5 py-2.5 bg-white/20 hover:bg-white/30 rounded-xl font-semibold text-sm transition-all">
              📖 महोत्सव के बारे में
            </Link>
            <Link href="/moreyojnas" className="px-5 py-2.5 bg-[#FFD76A] text-[#8B0048] hover:bg-[#FAD2C1] rounded-xl font-bold text-sm transition-all">
              🙏 योजनाएँ देखें व यजमान बनें
            </Link>
          </div>
          <p className="text-[#FAD2C1]/80 text-sm">📞 +91 88390 17577 &nbsp;|&nbsp; 19–24 फरवरी 2026, बांसवाड़ा</p>
        </section>

      </article>
    </main>
  );
}
