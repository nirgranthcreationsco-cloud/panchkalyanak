// app/location/page.tsx — Server Component
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "आयोजन स्थल – बांसवाड़ा, राजस्थान | ह्रींकार तीर्थ",
  description:
    "ह्रींकार तीर्थ, बांसवाड़ा-उदयपुर रोड, राजस्थान – पंचकल्याणक महोत्सव 2026 का आयोजन स्थल। रेल, बस, हवाई मार्ग से पहुँचने की सम्पूर्ण जानकारी यहाँ पाएं।",
  robots: { index: false, follow: true },
  alternates: { canonical: "/location" },
  openGraph: {
    title: "आयोजन स्थल – ह्रींकार तीर्थ, बांसवाड़ा | Panchkalyanak 2026",
    description: "बांसवाड़ा में रेल, बस व हवाई मार्ग से कैसे पहुँचें – सम्पूर्ण यात्रा गाइड।",
    url: "https://www.hrimkartirth.com/location",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "ह्रींकार तीर्थ बांसवाड़ा स्थान" }],
  },
};

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFF1F5] to-white text-[#3a0020]">

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#8B0048] via-[#C04878] to-[#8B0048] py-16 px-6 text-center">
        <p className="text-[#FFD76A] text-sm font-semibold tracking-widest uppercase mb-2">आयोजन स्थल</p>
        <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight mb-4">
          ह्रींकार तीर्थ, बांसवाड़ा
        </h1>
        <p className="text-[#FAD2C1] text-lg max-w-2xl mx-auto">
          बांसवाड़ा–उदयपुर रोड, टिम्बा गामड़ी, बांसवाड़ा, राजस्थान – 327001
        </p>
      </section>

      <article className="max-w-4xl mx-auto px-6 py-14 space-y-12">

        {/* About Location */}
        <section aria-labelledby="sthal">
          <h2 id="sthal" className="text-2xl md:text-3xl font-bold text-[#8B0048] mb-4 border-b-2 border-[#FFD76A]/40 pb-2">
            ह्रींकार तीर्थ – बांसवाड़ा
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            <strong>ह्रींकार तीर्थ</strong> राजस्थान के बांसवाड़ा जिले में बांसवाड़ा–उदयपुर मुख्य मार्ग पर स्थित एक भव्य दिगम्बर जैन तीर्थ है। हरे-भरे पहाड़ियों एवं प्राकृतिक वातावरण से घिरा यह तीर्थ अत्यंत मनमोहक और आध्यात्मिक रूप से ऊर्जावान है।
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            बांसवाड़ा को &ldquo;राजस्थान का चेरापूंजी&rdquo; कहा जाता है। यहाँ की हरियाली, माही नदी का सौंदर्य और शांत परिवेश इस तीर्थ को अनुपम बनाते हैं। पंचकल्याणक जैसे भव्य आयोजन के लिए यह स्थल आदर्श है।
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            <strong>पूर्ण पता:</strong> बांसवाड़ा–उदयपुर रोड, टिम्बा गामड़ी, बांसवाड़ा, राजस्थान – 327001<br />
            <strong>संपर्क:</strong> +91 88390 17577
          </p>
        </section>

        {/* How to Reach */}
        <section aria-labelledby="kaise-pahunche">
          <h2 id="kaise-pahunche" className="text-2xl md:text-3xl font-bold text-[#8B0048] mb-6 border-b-2 border-[#FFD76A]/40 pb-2">
            कैसे पहुँचें बांसवाड़ा?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🚂",
                title: "रेल मार्ग",
                lines: [
                  "निकटतम रेलवे स्टेशन: रतलाम जंक्शन (110 किमी)",
                  "दूसरा विकल्प: डूंगरपुर रेलवे स्टेशन (45 किमी)",
                  "रतलाम से बांसवाड़ा के लिए बस/टैक्सी उपलब्ध",
                ],
              },
              {
                icon: "🚌",
                title: "बस मार्ग",
                lines: [
                  "उदयपुर से बांसवाड़ा: 160 किमी (RSRTC बस उपलब्ध)",
                  "अहमदाबाद से बांसवाड़ा: 200 किमी",
                  "इंदौर से बांसवाड़ा: 230 किमी",
                ],
              },
              {
                icon: "✈️",
                title: "हवाई मार्ग",
                lines: [
                  "निकटतम हवाई अड्डा: महाराणा प्रताप हवाई अड्डा, उदयपुर (160 किमी)",
                  "अहमदाबाद हवाई अड्डा (200 किमी)",
                  "उदयपुर से टैक्सी/बस द्वारा आसानी से पहुँचें",
                ],
              },
            ].map((m) => (
              <div key={m.title} className="bg-white rounded-2xl p-6 border border-[#FAD2C1]/60 shadow-sm">
                <div className="text-4xl mb-3">{m.icon}</div>
                <h3 className="text-[#8B0048] font-bold text-lg mb-3">{m.title}</h3>
                <ul className="space-y-2">
                  {m.lines.map((l, i) => (
                    <li key={i} className="text-sm text-[#3a0020]/80 flex gap-2">
                      <span className="text-[#C04878] mt-1">•</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Nearby cities */}
        <section aria-labelledby="nikat-shahar">
          <h2 id="nikat-shahar" className="text-2xl md:text-3xl font-bold text-[#8B0048] mb-4 border-b-2 border-[#FFD76A]/40 pb-2">
            प्रमुख शहरों से दूरी
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-[#8B0048] text-white">
                  <th className="text-left px-4 py-3 rounded-tl-xl">शहर</th>
                  <th className="text-left px-4 py-3">दूरी</th>
                  <th className="text-left px-4 py-3 rounded-tr-xl">मार्ग</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#FAD2C1]/40">
                {[
                  ["उदयपुर", "160 किमी", "NH-27"],
                  ["अहमदाबाद", "200 किमी", "NH-48"],
                  ["इंदौर", "230 किमी", "NH-52"],
                  ["रतलाम", "110 किमी", "SH-34"],
                  ["जयपुर", "480 किमी", "NH-48"],
                  ["मुंबई", "680 किमी", "NH-48"],
                ].map(([city, dist, route], i) => (
                  <tr key={city} className={i % 2 === 0 ? "bg-white" : "bg-[#FFF7F0]"}>
                    <td className="px-4 py-3 font-semibold">{city}</td>
                    <td className="px-4 py-3">{dist}</td>
                    <td className="px-4 py-3 text-[#8B0048]">{route}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Accommodation */}
        <section aria-labelledby="aawas">
          <h2 id="aawas" className="text-2xl md:text-3xl font-bold text-[#8B0048] mb-4 border-b-2 border-[#FFD76A]/40 pb-2">
            आवास एवं ठहरने की व्यवस्था
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            पंचकल्याणक महोत्सव के दौरान आगंतुकों के लिए <strong>ह्रींकार तीर्थ परिसर में</strong> एवं बांसवाड़ा शहर में विभिन्न आवास विकल्प उपलब्ध होंगे।
          </p>
          <ul className="space-y-3 text-base">
            {[
              "समिति द्वारा व्यवस्थित धर्मशाला एवं टेंट सिटी",
              "बांसवाड़ा शहर के होटल एवं गेस्ट हाउस",
              "जैन समाज के विभिन्न संस्थानों द्वारा आवास की व्यवस्था",
              "अधिक जानकारी के लिए: +91 88390 17577",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#FFD76A] text-xl mt-0.5">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Map embed */}
        <section aria-labelledby="map">
          <h2 id="map" className="text-2xl md:text-3xl font-bold text-[#8B0048] mb-4 border-b-2 border-[#FFD76A]/40 pb-2">
            मानचित्र पर स्थान देखें
          </h2>
          <div className="rounded-3xl overflow-hidden border border-[#FAD2C1]/60 shadow-xl aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7315.944305618697!2d74.4524!3d23.5526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968a7000c5e68b5%3A0x5c3b7bc2e3afc6af!2sBanswara%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ह्रींकार तीर्थ, बांसवाड़ा – Google Map"
              aria-label="बांसवाड़ा, राजस्थान का मानचित्र"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://maps.google.com/?q=Banswara,Rajasthan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8B0048] to-[#C04878] text-white font-bold rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              📍 Google Maps में खोलें
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#8B0048] to-[#C04878] rounded-3xl p-8 text-center text-white space-y-4">
          <h3 className="text-xl font-extrabold">पंचकल्याणक महोत्सव में पधारें</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="px-5 py-2.5 bg-white/20 hover:bg-white/30 rounded-xl font-semibold text-sm transition-all">
              📖 महोत्सव के बारे में
            </Link>
            <Link href="/moreyojnas" className="px-5 py-2.5 bg-[#FFD76A] text-[#8B0048] hover:bg-[#FAD2C1] rounded-xl font-bold text-sm transition-all">
              🙏 यजमान बनें
            </Link>
          </div>
          <p className="text-[#FAD2C1]/80 text-sm">📞 +91 88390 17577 &nbsp;|&nbsp; बांसवाड़ा, राजस्थान</p>
        </section>

      </article>
    </main>
  );
}
