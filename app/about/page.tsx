// app/about/page.tsx  — Server Component (no "use client")
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "पंचकल्याणक महोत्सव के बारे में | About Event | ह्रींकार तीर्थ",
  description:
    "ह्रींकार तीर्थ पंचकल्याणक प्रतिष्ठा महोत्सव 2026 की सम्पूर्ण जानकारी। आयोजन का उद्देश्य, महत्त्व, आचार्यों की सन्निधि और दिव्य कार्यक्रम – सब कुछ यहाँ पढ़ें।",
  robots: { index: false, follow: true },
  alternates: { canonical: "/about" },
  openGraph: {
    title: "पंचकल्याणक महोत्सव 2026 – About | ह्रींकार तीर्थ बांसवाड़ा",
    description: "500+ जिनबिंब प्रतिष्ठा – जानें पंचकल्याणक महोत्सव का महत्त्व, उद्देश्य एवं आयोजन की विस्तृत जानकारी।",
    url: "https://www.hrimkartirth.com/about",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "ह्रींकार तीर्थ पंचकल्याणक महोत्सव" }],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFF1F5] to-white text-[#3a0020]">

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#8B0048] via-[#C04878] to-[#8B0048] py-16 px-6 text-center">
        <p className="text-[#FFD76A] text-sm font-semibold tracking-widest uppercase mb-2">19 – 24 फरवरी 2026</p>
        <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight mb-4">
          पंचकल्याणक प्रतिष्ठा महोत्सव 2026
        </h1>
        <p className="text-[#FAD2C1] text-lg max-w-2xl mx-auto">
          बांसवाड़ा, राजस्थान · ह्रींकार तीर्थ · 500+ जिनबिंब प्रतिष्ठा
        </p>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-6 py-14 space-y-12">

        {/* What is Panchkalyanak */}
        <section aria-labelledby="what-is">
          <h2 id="what-is" className="text-2xl md:text-3xl font-bold text-[#8B0048] mb-4 border-b-2 border-[#FFD76A]/40 pb-2">
            पंचकल्याणक प्रतिष्ठा क्या है?
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            <strong>पंचकल्याणक प्रतिष्ठा</strong> जैन धर्म का सर्वोच्च एवं सबसे पवित्र धार्मिक आयोजन है। इसमें भगवान तीर्थंकर के पाँच कल्याणकों — <strong>गर्भ, जन्म, दीक्षा, केवलज्ञान एवं मोक्ष</strong> — का विधिवत अभिनय किया जाता है। यह आयोजन न केवल जिनबिंब की प्रतिष्ठा का अवसर है, अपितु यह जैन समाज के लिए अनंत पुण्यार्जन का महापर्व है।
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            पंचकल्याणक के अवसर पर जिनमंदिर में नयी जिनप्रतिमाओं की प्राण-प्रतिष्ठा की जाती है। इस महोत्सव में भाग लेने वाले श्रद्धालु इन्द्र-इन्द्राणी के रूप में यजमान बनकर अभूतपूर्व पुण्य का संचय करते हैं।
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            जैन शास्त्रों के अनुसार पंचकल्याणक महोत्सव में सहभागिता <strong>जन्म-जन्मांतर के पापों का नाश</strong> करती है और आत्मा को मोक्षमार्ग पर अग्रसर करती है।
          </p>
        </section>

        {/* About the event */}
        <section aria-labelledby="about-event">
          <h2 id="about-event" className="text-2xl md:text-3xl font-bold text-[#8B0048] mb-4 border-b-2 border-[#FFD76A]/40 pb-2">
            ह्रींकार तीर्थ पंचकल्याणक महोत्सव 2026
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            <strong>ह्रींकार तीर्थ, बांसवाड़ा (राजस्थान)</strong> में आयोजित यह पंचकल्याणक प्रतिष्ठा महोत्सव 2026 राजस्थान के इतिहास का एक अभूतपूर्व धार्मिक आयोजन है। इस महोत्सव में <strong>500 से अधिक जिनबिंबों</strong> की एक साथ प्रतिष्ठा होगी — जो एक अत्यंत दुर्लभ एवं ऐतिहासिक घटना है।
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            यह महोत्सव <strong>19 से 24 फरवरी 2026</strong> तक छः दिवस तक चलेगा। प्रत्येक दिन एक विशेष कल्याणक का उत्सव मनाया जाएगा। देश-विदेश के हजारों जैन श्रद्धालु इस दिव्य अनुष्ठान में सम्मिलित होंगे।
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            इस आयोजन का संचालन <strong>चतुर्विंशती तीर्थंकर समिति एवं वात्सल्य सेवार्थ फाउंडेशन</strong> द्वारा किया जा रहा है। यह संस्था वर्षों से जैन धर्म के प्रचार-प्रसार एवं तीर्थ विकास में समर्पित है।
          </p>
        </section>

        {/* Divine Sannidhis */}
        <section aria-labelledby="sannidhyan">
          <h2 id="sannidhyan" className="text-2xl md:text-3xl font-bold text-[#8B0048] mb-4 border-b-2 border-[#FFD76A]/40 pb-2">
            दिव्य आचार्यों की सन्निधि
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            इस महोत्सव को अत्यन्त पवित्र एवं फलदायी बनाया जाएगा <strong>परम पूज्य आचार्य श्री विराग सागर जी महाराज</strong> एवं <strong>परम पूज्य आचार्य श्री विशुद्ध सागर जी महाराज</strong> की दिव्य सन्निधि से।
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            इनके अतिरिक्त पूज्य <strong>मुनि श्री आदित्य सागर जी महाराज, मुनि श्री अप्रमित सागर जी महाराज, मुनि श्री सहज सागर जी महाराज</strong> एवं <strong>क्षुल्लक श्री श्रेयस सागर जी</strong> की सन्निधि भी इस महोत्सव को अतीव पवित्र बनाएगी।
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            इन महान संतों की उपस्थिति में होने वाला पंचकल्याणक अत्यंत पुण्यकारी होता है। जैन आगम में कहा गया है कि जहाँ दिगम्बर संत होते हैं, वहाँ का क्षेत्र तीर्थ बन जाता है।
          </p>
        </section>

        {/* Daily Schedule Summary */}
        <section aria-labelledby="karyakram">
          <h2 id="karyakram" className="text-2xl md:text-3xl font-bold text-[#8B0048] mb-4 border-b-2 border-[#FFD76A]/40 pb-2">
            कार्यक्रम विवरण (6 दिवसीय महोत्सव)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { day: "दिन 1 – 19 फरवरी", event: "शिलान्यास एवं महोत्सव प्रारंभ" },
              { day: "दिन 2 – 20 फरवरी", event: "गर्भ कल्याणक अनुष्ठान" },
              { day: "दिन 3 – 21 फरवरी", event: "जन्म कल्याणक एवं महाभिषेक" },
              { day: "दिन 4 – 22 फरवरी", event: "दीक्षा कल्याणक एवं वरघोड़ा" },
              { day: "दिन 5 – 23 फरवरी", event: "केवलज्ञान कल्याणक" },
              { day: "दिन 6 – 24 फरवरी", event: "मोक्ष कल्याणक एवं विसर्जन" },
            ].map((d) => (
              <div key={d.day} className="bg-white rounded-2xl p-4 border border-[#FAD2C1]/60 shadow-sm">
                <p className="text-[#C04878] font-bold text-sm">{d.day}</p>
                <p className="text-[#3a0020] font-semibold mt-1">{d.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why attend */}
        <section aria-labelledby="kyon-aayein">
          <h2 id="kyon-aayein" className="text-2xl md:text-3xl font-bold text-[#8B0048] mb-4 border-b-2 border-[#FFD76A]/40 pb-2">
            क्यों पधारें इस महोत्सव में?
          </h2>
          <ul className="space-y-3 text-base md:text-lg">
            {[
              "500+ जिनबिंबों की एक साथ प्रतिष्ठा – अत्यंत दुर्लभ अवसर",
              "दो महान दिगम्बर आचार्यों की पावन सन्निधि",
              "अनंत काल का पुण्यार्जन – इन्द्र-इन्द्राणी यजमान बनने का अवसर",
              "परिवार के साथ धार्मिक एवं आध्यात्मिक अनुभव",
              "जैन धर्म के सर्वोच्च अनुष्ठान में प्रत्यक्ष सहभागिता",
              "बांसवाड़ा का सुंदर व प्राकृतिक परिवेश",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#FFD76A] text-xl mt-0.5">✦</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Internal links */}
        <section className="bg-gradient-to-r from-[#8B0048] to-[#C04878] rounded-3xl p-8 text-center text-white space-y-4">
          <h3 className="text-xl font-extrabold">अधिक जानकारी के लिए</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/location" className="px-5 py-2.5 bg-white/20 hover:bg-white/30 rounded-xl font-semibold text-sm transition-all">
              📍 आयोजन स्थल देखें
            </Link>
            <Link href="/history" className="px-5 py-2.5 bg-white/20 hover:bg-white/30 rounded-xl font-semibold text-sm transition-all">
              📖 पंचकल्याणक का इतिहास
            </Link>
            <Link href="/moreyojnas" className="px-5 py-2.5 bg-[#FFD76A] text-[#8B0048] hover:bg-[#FAD2C1] rounded-xl font-bold text-sm transition-all">
              🙏 यजमान बनें
            </Link>
          </div>
          <p className="text-[#FAD2C1]/80 text-sm">📞 +91 88390 17577</p>
        </section>

      </article>
    </main>
  );
}
