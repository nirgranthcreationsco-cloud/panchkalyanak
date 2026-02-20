"use client";

import { useState } from "react";
import { Yojana } from "./types/yojana";

import UniversalYojnaBookingFlow from "./component/booking";
import CertificateModal from "./component/certificatemodal";
import DonationSection from "./component/donations";
import FooterSection from "./component/footer";
import GallerySection from "./component/gallery";
import PanchkalyanakHero from "./component/herosection";
import DivineIntro from "./component/intro";
import MainYojnaSection from "./component/mainyojna";
import VenueConnectivity from "./component/venue";
import YojanaSection from "./component/yojna";

const LandingPage = () => {
  const [selectedYojana, setSelectedYojana] = useState<Yojana | null>(null);

  // ---- Certificate State ----
  const [showCertificate, setShowCertificate] = useState(false);
  const [certificateData, setCertificateData] = useState({
    name: "",
    amount: "",
    yojanaName: "",
    phone: "",
    certificateNumber: "",
    tirthName: "ह्रींकार तीर्थ, बांसवाड़ा",
  });

  return (
    <main
      className="overflow-x-hidden bg-white text-gray-900"
      aria-label="ह्रींकार तीर्थ पंचकल्याणक महा-महोत्सव 2026 – मुख्य पृष्ठ"
    >

      <PanchkalyanakHero />
      <DivineIntro />
      <VenueConnectivity />
      <MainYojnaSection setSelectedYojana={setSelectedYojana} />
      <YojanaSection setSelectedYojana={setSelectedYojana} />

      {/* GALLERY SECTION */}
      <GallerySection />

      {/* DONATION SECTION */}
      <DonationSection />

      {/* ── SEO Semantic Keyword Block (screen-reader / crawlers only) ── */}
      <section
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          borderWidth: 0,
        }}
      >
        <h2>Jain Panchkalyanak Event Banswara Rajasthan 2026</h2>
        <p>
          पंचकल्याणक या पंच कल्याणक (गर्भ, जन्म, दीक्षा, केवलज्ञान, मोक्ष) — जैन धर्म का सर्वोच्च राध्य महोत्सव।
          ह्रींकार तीर्थ, बांसवाड़ा, राजस्थान। 19 फरवरी 2026 से 24 फरवरी 2026।
          500+ जिनबिंब प्रतिष्ठा। आचार्य श्री विराग सागर तथा आचार्य श्री विशुद्ध सागर की दिव्य सन्निधि।
        </p>
        <ul>
          <li>Panchkalyanak 2026 Banswara</li>
          <li>Hrimkar Tirth Panchkalyanak Pratishtha</li>
          <li>Jain Mahotsav Rajasthan 2026</li>
          <li>Digambar Jain event February 2026</li>
          <li>500 Jinbimb Pratishtha</li>
          <li>जैन धार्मिक आयोजन बांसवाड़ा</li>
          <li>पंचकल्याणक योजनाएं दान</li>
          <li>Acharya Virag Sagar Panchkalyanak</li>
          <li>Vaatsalya Sevarth Foundation Banswara</li>
          <li>Chaturvimsati Tirthankara Samiti</li>
          <li>Hrimkartirth 2026</li>
          <li>Jain Tirth Banswara Rajasthan</li>
        </ul>
      </section>

      <FooterSection />

      {/* ---------------------------------------------------
            UNIVERSAL BOOKING MODAL (STEP 1 → 3)
      ---------------------------------------------------- */}
      {selectedYojana && (
        <UniversalYojnaBookingFlow
          yojana={selectedYojana}
          onClose={() => setSelectedYojana(null)}
        />
      )}

      {/* ---------------------------------------------------
            CERTIFICATE MODAL (GLOBAL)
      ---------------------------------------------------- */}
      {showCertificate && (
        <CertificateModal
          name={certificateData.name}
          amount={certificateData.amount}
          yojanaName={certificateData.yojanaName}
          phone={certificateData.phone}
          certificateNumber={certificateData.certificateNumber}
          tirthName={certificateData.tirthName}
          onClose={() => setShowCertificate(false)}
        />
      )}
    </main>
  );
};

export default LandingPage;
