"use client";

import { useState } from "react";
import { Yojana } from "./types/yojana";

import BookingModal from "./component/booking";
import CertificateModal from "./component/certificatemodal";
import ContactSection from "./component/contactsection";
import DonationSection from "./component/donations";
import FooterSection from "./component/footer";
import PanchkalyanakHero from "./component/herosection";
import DivineIntro from "./component/intro";
import SocialConnectSection from "./component/socialconnect";
import VenueConnectivity from "./component/venue";
import YojanaSection from "./component/yojna";

interface CountdownTime {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const LandingPage = () => {
  const [selectedYojana, setSelectedYojana] = useState<Yojana | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);
  const [donorName, setDonorName] = useState("");



  return (
    <main className="overflow-x-hidden bg-white text-gray-900">
      <PanchkalyanakHero />
      <DivineIntro />
      <VenueConnectivity />
      <YojanaSection setSelectedYojana={setSelectedYojana} />
      <DonationSection />
      <ContactSection />
      <SocialConnectSection />
      
      <FooterSection />

      {selectedYojana && (
        <BookingModal
          selectedYojana={selectedYojana}
          setSelectedYojana={setSelectedYojana}
          setDonorName={setDonorName}
          setShowCertificate={setShowCertificate}
        />
      )}

      {showCertificate && (
        <CertificateModal
          donorName={donorName}
          setShowCertificate={setShowCertificate}
        />
      )}
    </main>
  );
};

export default LandingPage;
