'use client';
import React from 'react';

interface CertificateModalProps {
  donorName: string;
  setShowCertificate: React.Dispatch<React.SetStateAction<boolean>>;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ donorName, setShowCertificate }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl max-w-2xl w-full p-12 shadow-2xl border-8 border-double border-orange-400 text-center overflow-hidden">
      
      {/* Subtle glowing background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-orange-100/30 blur-2xl animate-pulse" />
      
      <div className="relative z-10">
        <div className="text-6xl mb-6">🏆</div>
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-4">
          Certificate of Appreciation
        </h2>
        <p className="text-xl text-gray-700 mb-8">This is to certify that</p>

        <h3 className="text-5xl font-extrabold text-orange-600 mb-8 drop-shadow-[0_4px_8px_rgba(245,158,11,0.4)]">
          {donorName}
        </h3>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          has graciously contributed to the sacred Panchkalyanak celebration.
          <br />
          May <span className="font-semibold text-amber-700">Lord Mahavira</span> bless you with
          peace and prosperity.
        </p>

        <div className="flex justify-center gap-4 text-sm text-gray-600 mb-8">
          <div>हीकार तीर्थ पंचकल्याणक समिति</div>
          <div>|</div>
          <div>19 February 2026</div>
        </div>

        <button
          onClick={() => setShowCertificate(false)}
          className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:from-orange-600 hover:to-amber-700 transition-transform duration-300"
        >
          Download Certificate
        </button>
      </div>
    </div>
  </div>
);

export default CertificateModal;
