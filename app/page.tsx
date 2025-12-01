"use client";

import { useState } from "react";
import { Yojana } from "./types/yojana";

import UniversalYojnaBookingFlow from "./component/booking";
import CertificateModal from "./component/certificatemodal";
import DonationSection from "./component/donations";
import FooterSection from "./component/footer";
import PanchkalyanakHero from "./component/herosection";
import DivineIntro from "./component/intro";
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
    <main className="overflow-x-hidden bg-white text-gray-900">

      <PanchkalyanakHero />
      <DivineIntro />
      <VenueConnectivity />

      {/* YOJNA SECTION */}
      <YojanaSection setSelectedYojana={setSelectedYojana} />

      {/* DONATION SECTION */}
      <DonationSection />

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
