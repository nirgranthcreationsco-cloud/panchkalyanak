'use client';

import { Check, Copy, QrCode, X } from 'lucide-react';
import React, { useState } from 'react';
import UniversalCertificateModal from './certificatemodal';

// ------------------------ YOJANA TYPE (UNIVERSAL) ------------------------

export interface Yojana {
  name: string;
  amount: string;
  icon?: React.ReactNode;        // <----- JSX icon support
  description?: string;
  features?: string[];
  benefits?: string[];
}

// ------------------------ BANK DETAILS ------------------------

interface BankDetails {
  accountName: string;
  accountNumber: string;
  ifsc: string;
  bankName: string;
  upiId: string;
}

const bankDetails: BankDetails = {
  accountName: "वात्सल्य सेवार्थ फाउंडेशन",
  accountNumber: "21279057179",
  ifsc: "RMGB0001279",
  bankName: "Rajasthan Gramin Bank, Banswara",
  upiId: "jaindham@okhdfcbank",
};

// ------------------------ MODAL PROPS ------------------------

interface UniversalBookingProps {
  yojana: Yojana | null;
  onClose: () => void;
}

// -----------------------------------------------------------------------
//                      UNIVERSAL BOOKING FLOW COMPONENT
// -----------------------------------------------------------------------

export default function UniversalYojnaBookingFlow({
  yojana,
  onClose,
}: UniversalBookingProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [copied, setCopied] = useState("");

  const certificateNumber =
    "JDT-" + Math.random().toString(36).substring(2, 8).toUpperCase();

  if (!yojana) return null;

  const handleCopy = (value: string, field: string) => {
    navigator.clipboard.writeText(value);
    setCopied(field);
    setTimeout(() => setCopied(""), 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-10 h-10 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/60"
        >
          <X className="w-5 h-5 text-[#8B0048]" />
        </button>

        {/* ---------------------------------------------------
           STEP 1 — BOOKING FORM
        ----------------------------------------------------- */}
        {step === 1 && (
  <div className="p-8 bg-gradient-to-b from-[#FFF1F5] via-[#FFE4EC] to-[#FFE7C7]">
    
    <div className="text-center mb-8">
      <div className="text-6xl mb-3 flex justify-center">{yojana.icon}</div>

      <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#E0679F] via-[#F0B86C] to-[#E0679F] bg-clip-text text-transparent">
        {yojana.name}
      </h2>

      <p className="text-xl font-bold text-[#8B0048] mt-2">{yojana.amount}</p>
    </div>

    {/* FORM */}
    <div className="space-y-6">

      {/* NAME */}
      <div>
        <input
          type="text"
          placeholder="आपका नाम"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full px-5 py-3 bg-white/70 rounded-xl border-2 outline-none transition
            ${name.trim().length < 3 ? "border-red-400" : "border-[#E0679F]/40 focus:border-[#E0679F]"}`}
        />

        {name.trim().length < 3 && (
          <p className="text-red-600 text-sm mt-1">कृपया सही नाम दर्ज करें</p>
        )}
      </div>

      {/* PHONE */}
      <div>
        <input
          type="tel"
          placeholder="संपर्क नंबर"
          maxLength={10}
          value={phone}
          onChange={(e) => {
            const val = e.target.value.replace(/\D/g, "");
            setPhone(val);
          }}
          className={`w-full px-5 py-3 bg-white/70 rounded-xl border-2 outline-none transition
            ${phone.length !== 10 ? "border-red-400" : "border-[#E0679F]/40 focus:border-[#E0679F]"}`}
        />

        {phone.length !== 10 && (
          <p className="text-red-600 text-sm mt-1">कृपया 10 अंकों का सही मोबाइल नंबर दर्ज करें</p>
        )}
      </div>
    </div>

    {/* BUTTON */}
    <button
      onClick={() => {
        if (name.trim().length < 3) return;
        if (phone.length !== 10) return;
        setStep(2);
      }}
      disabled={name.trim().length < 3 || phone.length !== 10}
      className={`w-full mt-8 py-4 text-white font-bold rounded-xl shadow-xl transition
        bg-gradient-to-r from-[#E0679F] via-[#F0B86C] to-[#E0679F]
        ${name.trim().length < 3 || phone.length !== 10
          ? "opacity-50 cursor-not-allowed"
          : "hover:scale-[1.02]"}`}
    >
      Proceed to Payment
    </button>
  </div>
)}

        {/* ---------------------------------------------------
           STEP 2 — PAYMENT
        ----------------------------------------------------- */}
        {step === 2 && (
          <div className="p-8 bg-gradient-to-b from-[#FFF1F5] via-[#FFE4EC] to-[#FFE7C7] max-h-[90vh] overflow-y-auto">

            <h2 className="text-center text-3xl font-extrabold text-[#8B0048] mb-6">
              भुगतान करें
            </h2>

            {/* QR */}
            <div className="p-6 rounded-2xl border-2 border-[#E0679F]/30 bg-white/70">
              <div className="text-center">
                <QrCode className="w-12 h-12 mx-auto text-[#E0679F]" />
                <h3 className="text-xl font-bold text-[#8B0048] mt-2">तत्काल भुगतान</h3>
              </div>

              <div className="flex justify-center my-4">
                <img src="/qr.png" className="w-52 h-52 object-contain border-4 border-[#E0679F] rounded-xl p-3 bg-white" />
              </div>

              <p className="text-center text-[#8B0048] font-semibold">
                UPI ID: {bankDetails.upiId}
              </p>
            </div>

            {/* BANK DETAILS */}
            <h3 className="text-xl font-bold text-center text-[#8B0048] mt-10 mb-4">
              बैंक ट्रांसफर विवरण
            </h3>

            <div className="space-y-3">
              {[
                ["खाता नाम", bankDetails.accountName, "name"],
                ["खाता संख्या", bankDetails.accountNumber, "acc"],
                ["IFSC कोड", bankDetails.ifsc, "ifsc"],
                ["बैंक नाम", bankDetails.bankName, "bank"],
              ].map(([label, value, field]) => (
                <div key={field} className="p-4 bg-white rounded-xl border-2 border-[#E0679F]/30 flex justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{label}</p>
                    <p className="text-[#8B0048] font-bold">{value}</p>
                  </div>

                  <button
                    onClick={() => handleCopy(String(value), String(field))}
                    className="p-2 hover:bg-[#FFE4EC] rounded-lg"
                  >
                    {copied === field ? (
                      <Check className="text-green-600 w-5 h-5" />
                    ) : (
                      <Copy className="text-[#E0679F] w-5 h-5" />
                    )}
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => setStep(3)}
              className="w-full mt-8 py-4 bg-gradient-to-r from-[#E0679F] via-[#F0B86C] to-[#E0679F] text-white font-bold text-xl rounded-xl shadow-xl"
            >
              भुगतान पूरा हुआ
            </button>

            <button
              onClick={() => setStep(1)}
              className="w-full mt-4 py-3 border-2 border-[#E0679F] text-[#8B0048] rounded-xl"
            >
              वापस जाएं
            </button>
          </div>
        )}

       
   {/* ---------------------------------------------------
   STEP 3 — UNIVERSAL CERTIFICATE MODAL
----------------------------------------------------- */}
{step === 3 && (
  <UniversalCertificateModal
    name={name}
    amount={yojana.amount}
    yojanaName={yojana.name}
    phone={phone}
    certificateNumber={certificateNumber}
    tirthName="श्री ह्रींकार तीर्थ, टिम्बा गामड़ी" // <-- change if needed
    onClose={() => {
      setStep(1);
      onClose();
    }}
  />
)}

      </div>
    </div>
  );
}
