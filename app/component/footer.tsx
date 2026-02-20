"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const FooterSection = () => {
  return (
    <footer
      className="relative w-full bg-gradient-to-b from-[#8B0048] via-[#C04878] to-[#5A0030] text-white pt-20 pb-12 px-6"
      aria-label="साइट पाद-लेख - ह्रींकार तीर्थ पंचकल्याणक"
      role="contentinfo"
    >
      {/* Subtle Gold Glow */}
      <div className="absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-[#FFD76A]/20 blur-[140px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Title */}
        <p
          className="text-3xl md:text-4xl font-extrabold tracking-wide mb-4
          bg-gradient-to-r from-[#FFD76A] via-[#FAD2C1] to-[#FFD76A] bg-clip-text text-transparent leading-[1.3]"
        >
          ह्रींकार तीर्थ पंचकल्याणक समिति
        </p>

        <p className="text-[#FAD2C1] text-2xl sm:text-3xl font-bold mb-6 leading-[1.5] tracking-wide">
          19 से 24 फरवरी 2026
        </p>

        {/* Address */}
        <address className="not-italic text-[#FAD2C1]/80 text-base mb-10 leading-relaxed">
          बाँसवाड़ा–उदयपुर रोड, टिम्बा गामड़ी, बांसवाड़ा,{" "}
          राजस्थान – 327001<br />
          <a
            href="tel:+918839017577"
            className="underline hover:text-[#FFD76A] transition-colors"
            aria-label="संपर्क नंबर: +91 88390 17577"
          >
            +91 88390 17577
          </a>
        </address>

        {/* Social Icons */}
        <nav aria-label="सोशल मीडिया लिंक">
          <div className="flex justify-center gap-6 md:gap-10 mb-12">
            {[
              {
                icon: Instagram,
                link: "https://www.instagram.com/vikamya_vachanam/",
                label: "Instagram पर हमें फॉलो करें",
              },
              {
                icon: Facebook,
                link: "https://www.facebook.com/profile.php?id=100041789236278",
                label: "Facebook पर हमें फॉलो करें",
              },
              {
                icon: Youtube,
                link: "https://www.youtube.com/@vikamya_vachanam",
                label: "YouTube चैनल देखें",
              },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <a
                  key={i}
                  href={s.link}
                  className="group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  <div
                    className="p-4 rounded-full border border-[#FFD76A]/40
                    bg-gradient-to-br from-[#FFD76A] to-[#FAD2C1]
                    text-[#8B0048]
                    shadow-[0_0_20px_rgba(255,215,106,0.4)]
                    transition-all duration-300 transform group-hover:scale-110"
                  >
                    <Icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                </a>
              );
            })}
          </div>
        </nav>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#FFD76A]/60 to-transparent mb-6" aria-hidden="true" />

        {/* Sitemap links */}
        <nav aria-label="साइटमैप नेविगेशन" className="mb-6">
          <ul className="flex flex-wrap justify-center gap-4 text-sm text-[#FAD2C1]/80">
            <li><Link href="/" className="hover:text-[#FFD76A] transition-colors">होम</Link></li>
            <li><Link href="/about" className="hover:text-[#FFD76A] transition-colors">महोत्सव के बारे में</Link></li>
            <li><Link href="/#gallery" className="hover:text-[#FFD76A] transition-colors">गैलरी</Link></li>
            <li><Link href="/location" className="hover:text-[#FFD76A] transition-colors">आयोजन स्थल</Link></li>
            <li><Link href="/history" className="hover:text-[#FFD76A] transition-colors">इतिहास</Link></li>
            <li><Link href="/moreyojnas" className="hover:text-[#FFD76A] transition-colors">सभी योजनाएँ</Link></li>
            <li><a href="/sitemap.xml" className="hover:text-[#FFD76A] transition-colors">Sitemap</a></li>
          </ul>
        </nav>

        {/* Credits */}
        <p className="text-sm text-[#FAD2C1]/85 leading-[1.5]">
          Designed &amp; Developed by{" "}
          <a
            href="https://nirgranthcreation.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#FFD76A] hover:underline"
          >
            Nirgranth Creation
          </a>
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
