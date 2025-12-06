"use client";

import {
  Check,
  Copy,
  HeartHandshake,
  IndianRupee,
  Mail,
  Phone,
  QrCode,
  ShieldCheck,
  Target,
  User,
  X
} from "lucide-react";

import React, { useState } from "react";
import UniversalCertificateFinal from "./certificatemodal";

/* -----------------------------------------
   Types
------------------------------------------ */

type Stage = "form" | "payment" | "certificate";

interface FormData {
  donationAmount: number;
  donorName: string;
  donorPhone: string;
  donorEmail: string;
  donationPurpose: string;
}

interface BankDetails {
  accountName: string;
  accountNumber: string;
  ifsc: string;
  bankName: string;
}

type CopyHandler = (text: string, field: string) => void;

/* -----------------------------------------
   Input Field Component
------------------------------------------ */

interface InputFieldProps {
  icon: React.ElementType;
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

function InputField({
  icon: Icon,
  label,
  value,
  placeholder,
  onChange,
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-[#8B0048] font-semibold mb-2 flex items-center gap-2 leading-[1.6]">
        <Icon className="w-5 h-5 text-[#E0679F]" />
        {label}
      </label>

      <input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        className="w-full px-4 py-4 border-2 border-[#E0679F]/40 rounded-xl 
                   focus:border-[#8B0048] outline-none leading-[1.6]"
      />
    </div>
  );
}

/* -----------------------------------------
   Bank Detail Row Component
------------------------------------------ */

interface BankDetailRowProps {
  label: string;
  value: string;
  field: string;
  copiedField: string;
  onCopy: CopyHandler;
}

function BankDetailRow({
  label,
  value,
  field,
  copiedField,
  onCopy,
}: BankDetailRowProps) {
  return (
    <div className="bg-white rounded-xl p-4 border-2 border-[#E0679F]/30 flex items-center justify-between gap-4">
      <div>
        <p className="text-gray-600 text-sm mb-1">{label}</p>
        <p className="text-[#8B0048] font-bold text-lg">{value}</p>
      </div>

      <button
        onClick={() => onCopy(value, field)}
        className="p-3 hover:bg-[#F0B86C]/30 rounded-lg transition"
      >
        {copiedField === field ? (
          <Check className="w-5 h-5 text-green-500" />
        ) : (
          <Copy className="w-5 h-5 text-[#E0679F]" />
        )}
      </button>
    </div>
  );
}

/* -----------------------------------------
   Certificate Field Component
------------------------------------------ */

interface CertificateFieldProps {
  label: string;
  value: string;
}

function CertificateField({ label, value }: CertificateFieldProps) {
  return (
    <div className="bg-[#FFF1F5] rounded-xl p-4 border-2 border-[#F0B86C]/50">
      <p className="text-[#8B0048]/70 text-sm mb-1">{label}</p>
      <p className="text-[#8B0048] font-bold text-lg break-words">{value}</p>
    </div>
  );
}

/* -----------------------------------------
   MAIN DONATION SECTION
------------------------------------------ */

export default function DonationSection() {
  const [stage, setStage] = useState<Stage>("form");
  const [copiedField, setCopiedField] = useState("");
  const [errors, setErrors] = useState({ donorPhone: "", donorEmail: "" });

  const [formData, setFormData] = useState<FormData>({
    donationAmount: 0,
    donorName: "",
    donorPhone: "",
    donorEmail: "",
    donationPurpose: "",
  });

  const presetAmounts = [501, 1100, 2100, 5100];

  const bankDetails: BankDetails = {
    accountName: "वात्सल्य सेवार्थ फाउंडेशन",
    accountNumber: "21279057179",
    ifsc: "RMGB0001279",
    bankName: "Rajasthan Gramin Bank, Banswara",
  };

  /* Copy Handler */
  const handleCopy: CopyHandler = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(""), 2000);
  };

  /* VALIDATORS */
  const validatePhone = (value: string) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 10);
    let error = "";
    if (cleaned.length > 0 && cleaned.length < 10) {
      error = "कृपया 10 अंकों का मोबाइल नंबर दर्ज करें";
    }
    setErrors((p) => ({ ...p, donorPhone: error }));
    return cleaned;
  };

  const validateEmail = (value: string) => {
    const cleaned = value.trim();
    let error = "";
    if (cleaned.length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(cleaned)) {
        error = "कृपया सही ईमेल दर्ज करें";
      }
    }
    setErrors((p) => ({ ...p, donorEmail: error }));
    return cleaned;
  };

  /* SUBMIT FORM */
  const handleSubmit = () => {
    if (!formData.donationAmount) return alert("कृपया दान राशि दर्ज करें");
    if (!formData.donorName.trim()) return alert("कृपया अपना नाम दर्ज करें");
    if (formData.donorPhone.length !== 10)
      return alert("कृपया सही मोबाइल नंबर दर्ज करें");

    setStage("payment");
  };

  /* Payment Done */
  const handlePaymentDone = () => setStage("certificate");

  /* Certificate Download */
  const downloadCertificate = () => alert("प्रमाण पत्र डाउनलोड हो रहा है...");

  /* Render Next Stage */
  if (stage === "payment")
    return (
      <PaymentSection
        formData={formData}
        bankDetails={bankDetails}
        onBack={() => setStage("form")}
        onPaymentDone={handlePaymentDone}
        onCopy={handleCopy}
        copiedField={copiedField}
      />
    );

  if (stage === "certificate")
    return (
      <CertificateSection
        formData={formData}
        onDownload={downloadCertificate}
        onNewDonation={() => {
          setFormData({
            donationAmount: 0,
            donorName: "",
            donorPhone: "",
            donorEmail: "",
            donationPurpose: "",
          });
          setStage("form");
        }}
      />
    );

  /* -------------------------
     FORM SCREEN
  -------------------------- */

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#FFF1F5] via-[#FFE4EC] to-[#FFE7C7]">
      {/* Glows */}
      <div className="absolute top-[-10%] left-[10%] w-[25rem] h-[25rem] bg-[#F0B86C]/30 blur-[160px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[10%] w-[20rem] h-[20rem] bg-[#E0679F]/25 blur-[160px] rounded-full" />

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <HeartHandshake className="w-14 h-14 mx-auto text-[#E0679F]" />

          <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#E0679F] via-[#F0B86C] to-[#E0679F] bg-clip-text text-transparent mt-4 leading-[1.3]">
            आपका योगदान अत्यंत मूल्यवान है
          </h2>

         
        </div>

        {/* Card */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-[#F0B86C]/40 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#E0679F] via-[#F0B86C] to-[#E0679F] p-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-3">
              <IndianRupee className="w-7 h-7 text-[#FFF1F5]" />
              दान करें - पुण्य कमाएं
            </h3>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Quick Amounts */}
            <label className="block text-[#8B0048] font-bold text-xl mb-4 text-center">
              अपनी श्रद्धा अनुसार राशि चुनें
            </label>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {presetAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() =>
                    setFormData((p) => ({ ...p, donationAmount: amount }))
                  }
                  className={`p-6 rounded-2xl text-xl font-bold border transition-all duration-300 ${
                    formData.donationAmount === amount
                      ? "bg-gradient-to-br from-[#E0679F] via-[#F0B86C] to-[#E0679F] text-white border-[#F0B86C] shadow-xl scale-105"
                      : "bg-white border-[#E0679F]/40 text-[#8B0048]"
                  }`}
                >
                  ₹{amount}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <label className="block text-[#8B0048] font-bold text-lg mb-3">
              या अपनी इच्छा अनुसार राशि दर्ज करें
            </label>

            <div className="relative mb-10">
              <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-[#E0679F]" />
              <input
                type="number"
                value={formData.donationAmount || ""}
                onChange={(e) =>
                  setFormData((p) => ({
                    ...p,
                    donationAmount: parseInt(e.target.value) || 0,
                  }))
                }
                className="w-full pl-12 pr-6 py-4 border-2 border-[#E0679F]/40 rounded-xl focus:border-[#E0679F]"
                placeholder="राशि दर्ज करें"
              />
            </div>

            {/* User Details */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <InputField
                icon={User}
                label="दाता का नाम"
                value={formData.donorName}
                placeholder="अपना नाम दर्ज करें"
                onChange={(v) => setFormData((p) => ({ ...p, donorName: v }))}
              />

              <div>
                <InputField
                  icon={Phone}
                  label="मोबाइल नंबर"
                  value={formData.donorPhone}
                  placeholder="10 अंकों का नंबर"
                  onChange={(v) =>
                    setFormData((p) => ({
                      ...p,
                      donorPhone: validatePhone(v),
                    }))
                  }
                />
                {errors.donorPhone && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.donorPhone}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <InputField
                icon={Mail}
                label="ईमेल पता (वैकल्पिक)"
                value={formData.donorEmail}
                placeholder="example@gmail.com"
                onChange={(v) =>
                  setFormData((p) => ({
                    ...p,
                    donorEmail: validateEmail(v),
                  }))
                }
              />
              {errors.donorEmail && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.donorEmail}
                </p>
              )}
            </div>

            {/* Purpose */}
            <label className="block text-[#8B0048] font-semibold mb-2 flex items-center gap-2">
              <Target className="w-5 h-5 text-[#E0679F]" />
              दान का उद्देश्य
            </label>

            <select
              value={formData.donationPurpose}
              onChange={(e) =>
                setFormData((p) => ({ ...p, donationPurpose: e.target.value }))
              }
              className="w-full px-4 py-4 border-2 border-[#E0679F]/40 rounded-xl mb-8"
            >
              <option value="">दान का उद्देश्य चुनें</option>
              <option value="tirth_nirman">तीर्थ निर्माण सहयोग</option>
              <option value="pratishtha_sahyog">प्रतिष्ठा महोत्सव सहयोग</option>
              <option value="aahar_daan">आहार दान</option>
              <option value="puja_samagri">पूजा–सामग्री सहयोग</option>
              <option value="goshala_sahyog">गौशाला सहयोग</option>
              <option value="shastra_daan">जिनवाणी / शास्त्र दान</option>
              <option value="vidhyalaya_sahyog">जैन विद्यालय सहयोग</option>
              <option value="navekarn">मंदिर नव-निर्माण</option>
              <option value="general">सामान्य दान</option>
            </select>

            {/* Transparency Box */}
            <div className="bg-[#FFE4EC]/60 border border-[#E0679F]/30 p-6 rounded-xl mb-10">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-[#8B0048]" />
                <div>
                  <h4 className="font-bold text-[#8B0048] text-xl mb-2">
                    पूर्ण पारदर्शिता की गारंटी
                  </h4>
                  <p className="text-[#8B0048]/80">
                    आपका प्रत्येक रुपया सेवा कार्य में समर्पित किया जाता है — 
                    बिना किसी कटौती के।
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={handleSubmit}
              className="w-full py-6 rounded-xl text-white text-2xl font-bold shadow-xl 
                         bg-gradient-to-r from-[#E0679F] via-[#F0B86C] to-[#E0679F]
                         hover:scale-[1.03] transition-all"
            >
              अभी दान करें
            </button>

            <p className="text-center text-gray-600 mt-4 text-sm">
              🔒 सुरक्षित भुगतान • 100% एन्क्रिप्टेड
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------
   PAYMENT SECTION COMPONENT
------------------------------------------ */

function PaymentSection({
  formData,
  bankDetails,
  onPaymentDone,
  onBack,
  copiedField,
  onCopy,
}: {
  formData: FormData;
  bankDetails: BankDetails;
  onPaymentDone: () => void;
  onBack: () => void;
  copiedField: string;
  onCopy: CopyHandler;
}) {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#FFF1F5] via-[#FFE4EC] to-[#FFE7C7]">
      <div className="max-w-5xl mx-auto relative">
        {/* Close */}
        <button
          onClick={onBack}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200"
        >
          <X className="w-6 h-6 text-[#8B0048]" />
        </button>

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-[#8B0048]">भुगतान करें</h2>
          <p className="text-gray-700 text-lg">₹{formData.donationAmount}</p>
        </div>

        {/* Card */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-[#F0B86C]/40">
          <div className="p-8 md:p-12">
            {/* QR Box */}
            <div className="border-2 border-[#E0679F]/30 rounded-3xl p-8 bg-[#FFF1F5]/60 mb-10">
              <div className="text-center mb-6">
                <QrCode className="w-12 h-12 mx-auto text-[#E0679F]" />
                <h3 className="text-2xl font-bold text-[#8B0048] mt-3">
                  तत्काल भुगतान
                </h3>
                <p className="text-gray-600">अपने फोन से स्कैन करें</p>
              </div>

              <div className="flex justify-center my-6">
                <img
                  src="/qr.png"
                  className="w-64 h-64 border-4 border-[#E0679F] rounded-2xl bg-white p-4"
                />
              </div>

             
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 my-10">
              <div className="flex-1 h-px bg-[#E0679F]/40"></div>
              <span className="text-gray-600 font-semibold">या</span>
              <div className="flex-1 h-px bg-[#E0679F]/40"></div>
            </div>

            {/* Bank Transfer */}
            <div className="bg-[#FFE4EC]/40 border-2 border-[#E0679F]/30 p-8 rounded-3xl mb-10">
              <h3 className="text-2xl font-bold text-[#8B0048] text-center mb-6">
                बैंक ट्रांसफर
              </h3>

              <div className="space-y-4">
                <BankDetailRow
                  label="खाता धारक का नाम"
                  value={bankDetails.accountName}
                  field="name"
                  copiedField={copiedField}
                  onCopy={onCopy}
                />
                <BankDetailRow
                  label="खाता संख्या"
                  value={bankDetails.accountNumber}
                  field="number"
                  copiedField={copiedField}
                  onCopy={onCopy}
                />
                <BankDetailRow
                  label="IFSC कोड"
                  value={bankDetails.ifsc}
                  field="ifsc"
                  copiedField={copiedField}
                  onCopy={onCopy}
                />
                <BankDetailRow
                  label="बैंक"
                  value={bankDetails.bankName}
                  field="bank"
                  copiedField={copiedField}
                  onCopy={onCopy}
                />
              </div>
            </div>

            {/* Important */}
            <div className="bg-[#F0B86C]/20 p-6 rounded-xl border-l-4 border-[#F0B86C] mb-10">
              <p className="font-bold text-[#8B0048] text-lg mb-2">📞 महत्वपूर्ण:</p>
              <p className="text-[#8B0048]">
                भुगतान के बाद कृपया हमें <b>+91-xxxxxxxxxx</b> पर WhatsApp भेजें।
              </p>
            </div>

            {/* Buttons */}
            <button
              onClick={onPaymentDone}
              className="w-full py-6 rounded-xl bg-gradient-to-r from-[#E0679F] via-[#F0B86C] to-[#E0679F]
                text-white font-bold text-2xl shadow-xl mb-4"
            >
              भुगतान पूरा हुआ
            </button>

            <button
              onClick={onBack}
              className="w-full py-4 rounded-xl border-2 border-[#E0679F] text-[#8B0048] font-bold"
            >
              वापस जाएं
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
function CertificateSection({
  formData,
  onDownload,
  onNewDonation,
}: {
  formData: FormData;
  onDownload: () => void;
  onNewDonation: () => void;
}) {
  const categoryNames: Record<string, string> = {
    tirth_nirman: "तीर्थ निर्माण",
    pratishtha_sahyog: "प्रतिष्ठा महोत्सव",
    aahar_daan: "आहार दान",
    puja_samagri: "पूजा सामग्री",
    goshala_sahyog: "गौशाला सहयोग",
    shastra_daan: "जिनवाणी दान",
    vidhyalaya_sahyog: "जैन विद्यालय",
    navekarn: "मंदिर नव-निर्माण",
    general: "सामान्य दान",
  };

  const [showModal, setShowModal] = React.useState(false);

  const certificateNumber = React.useMemo(
    () =>
      "JDT-" +
      Math.random().toString(36).substring(2, 8).toUpperCase(),
    []
  );

  const category =
    categoryNames[formData.donationPurpose] || "दान";

  /** 🔥 DATA SENT TO MODAL */
  const modalData = {
    donorName: formData.donorName || "",
    amount: `${formData.donationAmount || 0}`,
    category,
    phone: formData.donorPhone || "",
    email: formData.donorEmail || "",
    certificateNumber,
    tirthName: "श्री ह्रींकार तीर्थ, टिम्बा गामड़ी",
    date: new Date().toLocaleDateString("hi-IN"),
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#FFF1F5] via-[#FFE4EC] to-[#FFE7C7]">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-[#8B0048]">
            🙏 धन्यवाद
          </h2>
          <p className="text-gray-700 text-lg">
            आपका प्रमाण पत्र तैयार है
          </p>
        </div>

        {/* Certificate Preview Card */}
        <div className="bg-white rounded-3xl shadow-xl border-4 border-[#E0679F] p-10 text-center">

          <h3 className="text-3xl font-extrabold text-[#8B0048] mb-2">
            सम्मान प्रमाण पत्र
          </h3>

          {/* 🔥 Show donor name in preview */}
          <p className="text-[#8B0048]/70 mb-6 text-xl font-bold">
            {formData.donorName}
          </p>

          {/* OPEN MODAL BUTTON */}
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-gradient-to-r from-[#E0679F] via-[#F0B86C] to-[#E0679F] 
                       text-white font-bold rounded-xl shadow-lg"
          >
            प्रमाण पत्र देखें
          </button>
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-10">
          
          <button
            onClick={() => setShowModal(true)} // 🔥 instead of direct download
            className="flex-1 py-4 rounded-xl bg-gradient-to-r from-[#E0679F] via-[#F0B86C] to-[#E0679F]
                       text-white font-bold text-lg shadow-xl"
          >
            प्रमाण पत्र डाउनलोड करें
          </button>

          <button
            onClick={onNewDonation}
            className="flex-1 py-4 rounded-xl border-2 border-[#E0679F] text-[#8B0048] font-bold"
          >
            फिर से दान करें
          </button>
        </div>
      </div>

      {/* 🔥 Modal */}
      {showModal && (
        <UniversalCertificateFinal
  name={formData.donorName || ""}
  amount={String(formData.donationAmount).replace(/₹/g, "")}
  yojanaName={categoryNames[formData.donationPurpose] || "दान"}
  phone={formData.donorPhone || ""}
  certificateNumber={certificateNumber}
  tirthName="श्री ह्रींकार तीर्थ, टिम्बा गामड़ी"
  onClose={() => setShowModal(false)}
/>


      )}
    </section>
  );
}
