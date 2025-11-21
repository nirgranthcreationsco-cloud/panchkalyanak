"use client";

import {
  Check,
  Copy,
  FileCheck2,
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
  upiId: string;
}

type CopyHandler = (text: string, field: string) => void;

/* -----------------------------------------
   Main Donation Section
------------------------------------------ */

export default function DonationSection() {
  const [formData, setFormData] = useState<FormData>({
    donationAmount: 0,
    donorName: "",
    donorPhone: "",
    donorEmail: "",
    donationPurpose: "",
  });

  const [stage, setStage] = useState<Stage>("form");
  const [copiedField, setCopiedField] = useState<string>("");


  const presetAmounts = [501, 1100, 2100, 5100];

  const bankDetails: BankDetails = {
    accountName: "जैन तीर्थ निर्माण ट्रस्ट",
    accountNumber: "1234567890123456",
    ifsc: "SBIN0001234",
    bankName: "State Bank of India",
    upiId: "jaindham@okhdfcbank",
  };

  const handleCopy: CopyHandler = (text, field) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(""), 2000);
    }
  };

  const handleSubmit = () => {
    if (!formData.donationAmount) {
      alert("कृपया दान राशि दर्ज करें");
      return;
    }
    if (!formData.donorName || !formData.donorPhone || !formData.donorEmail) {
      alert("कृपया सभी विवरण भरें");
      return;
    }

    setStage("payment");
  };

  const handlePaymentDone = () => {
    setStage("certificate");
  };

  const downloadCertificate = () => {
    alert("प्रमाण पत्र डाउनलोड किया जा रहा है...");
  };

  if (stage === "payment") {
    return (
      <PaymentSection
        formData={formData}
        bankDetails={bankDetails}
        onPaymentDone={handlePaymentDone}
        onBack={() => setStage("form")}
        copiedField={copiedField}
        onCopy={handleCopy}
      />
    );
  }

  if (stage === "certificate") {
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
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#FFF7F0] via-[#FAD2C1]/40 to-[#C04878]/10 hindi-text">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[10%] w-[25rem] h-[25rem] bg-[#FFD76A]/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[5%] w-[20rem] h-[20rem] bg-[#C04878]/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <HeartHandshake className="w-14 h-14 mx-auto text-[#C04878]" />

          <h2
            className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text 
                       bg-gradient-to-r from-[#8B0048] via-[#C04878] to-[#FFD76A] 
                       mt-4 leading-[1.45]"
          >
            आपका योगदान अत्यंत मूल्यवान है
          </h2>

          <p className="text-gray-700 max-w-2xl mx-auto mt-5 text-lg leading-[1.7]">
            हर दान, हर रुपये में भविष्य का तीर्थ बसता है।  
            आपका सहयोग एक पवित्र निर्माण की नींव है।
          </p>
        </div>

        {/* Main Container */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-[#FFD76A]/40 overflow-hidden">
          {/* Section Header */}
          <div className="bg-gradient-to-r from-[#8B0048] via-[#C04878] to-[#8B0048] p-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-3 leading-[1.5]">
              <IndianRupee className="w-7 h-7 text-[#FFD76A]" />
              दान करें - पुण्य कमाएं
            </h3>

            <p className="text-[#FAD2C1] mt-2 text-lg leading-[1.7]">
              पवित्र कार्य में भागीदारी
            </p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Quick Amount Buttons */}
            <div className="mb-8">
              <label className="block text-[#8B0048] font-bold text-xl mb-4 text-center leading-[1.7]">
                अपनी श्रद्धा अनुसार राशि चुनें
              </label>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        donationAmount: amount,
                      }))
                    }
                    className={`p-6 rounded-2xl text-xl font-bold border transition-all duration-300 ${
                      formData.donationAmount === amount
                        ? "bg-gradient-to-br from-[#8B0048] to-[#C04878] text-white border-[#FFD76A] shadow-xl scale-105"
                        : "bg-white border-[#C04878]/40 text-[#8B0048] hover:border-[#8B0048]"
                    }`}
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount Input */}
            <div className="mb-8">
              <label className="block text-[#8B0048] font-bold text-lg mb-3 leading-[1.6]">
                या अपनी इच्छा अनुसार राशि दर्ज करें
              </label>

              <div className="relative">
                <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C04878]" />

                <input
                  type="number"
                  value={formData.donationAmount || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      donationAmount: parseInt(e.target.value, 10) || 0,
                    }))
                  }
                  className="w-full pl-12 pr-6 py-4 border-2 border-[#C04878]/40 rounded-xl 
                             focus:border-[#8B0048] text-2xl font-semibold text-[#8B0048]
                             outline-none leading-[1.6]"
                  placeholder="राशि दर्ज करें"
                />
              </div>
            </div>

            {/* Donor Details */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <InputField
                icon={User}
                label="दाता का नाम"
                value={formData.donorName}
                placeholder="अपना नाम दर्ज करें"
                onChange={(v) =>
                  setFormData((prev) => ({ ...prev, donorName: v }))
                }
              />

              <InputField
                icon={Phone}
                label="व्हाट्सएप नंबर"
                value={formData.donorPhone}
                placeholder="+91 XXXXX XXXXX"
                onChange={(v) =>
                  setFormData((prev) => ({ ...prev, donorPhone: v }))
                }
              />
            </div>

            <InputField
              icon={Mail}
              label="ईमेल पता"
              value={formData.donorEmail}
              placeholder="example@gmail.com"
              onChange={(v) =>
                setFormData((prev) => ({ ...prev, donorEmail: v }))
              }
            />

            {/* Donation Purpose */}
            <div className="mb-8 mt-6">
              <label className="block text-[#8B0048] font-semibold mb-2 flex items-center gap-2 leading-[1.6]">
                <Target className="w-5 h-5 text-[#C04878]" />
                दान का उद्देश्य
              </label>

              <select
                value={formData.donationPurpose}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    donationPurpose: e.target.value,
                  }))
                }
                className="w-full px-4 py-4 border-2 border-[#C04878]/40 rounded-xl 
                           focus:border-[#8B0048] outline-none leading-[1.7]"
              >
                <option value="">दान का उद्देश्य चुनें</option>
                <option value="tirth_nirman">तीर्थ निर्माण सहयोग</option>
                <option value="pratishtha_sahyog">प्रतिष्ठा महोत्सव सहयोग</option>
                <option value="aahar_daan">
                  आहार दान (साधु–साध्वी के लिए)
                </option>
                <option value="puja_samagri">पूजा–सामग्री सहयोग</option>
                <option value="goshala_sahyog">गौशाला सहयोग</option>
                <option value="shastra_daan">जिनवाणी / शास्त्र दान</option>
                <option value="vidhyalaya_sahyog">
                  जैन विद्यालय / पाठशाला सहयोग
                </option>
                <option value="navekarn">
                  मंदिर नव-निर्माण एवं सौंदर्यीकरण
                </option>
                <option value="general">सामान्य दान</option>
              </select>
            </div>

            {/* Transparency Message */}
            <div className="bg-[#FAD2C1]/40 p-6 rounded-xl mb-10 border border-[#C04878]/30">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-[#8B0048]" />
                <div>
                  <h4 className="font-bold text-[#8B0048] text-xl mb-2 leading-[1.7]">
                    पूर्ण पारदर्शिता की गारंटी
                  </h4>

                  <p className="text-[#8B0048]/80 leading-[1.7]">
                    आपका प्रत्येक रुपया सेवा कार्य में समर्पित किया जाता है —
                    बिना किसी कटौती के।
                  </p>
                </div>
              </div>
            </div>

            

            {/* Donate Button */}
            <button
              onClick={handleSubmit}
              className="w-full py-6 rounded-xl bg-gradient-to-r from-[#8B0048] via-[#C04878] to-[#FFD76A]
                         text-white font-bold text-2xl shadow-xl hover:scale-[1.03] 
                         transition-all duration-300 flex items-center justify-center gap-4 leading-[1.6]"
            >
              अभी दान करें
            </button>

            <p className="text-center text-gray-600 mt-4 text-sm leading-[1.6]">
              🔒 सुरक्षित भुगतान • 100% एन्क्रिप्टेड
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------
   Payment Section
------------------------------------------ */

interface PaymentSectionProps {
  formData: FormData;
  bankDetails: BankDetails;
  onPaymentDone: () => void;
  onBack: () => void;
  copiedField: string;
  onCopy: CopyHandler;
}

function PaymentSection({
  formData,
  bankDetails,
  onPaymentDone,
  onBack,
  copiedField,
  onCopy,
}: PaymentSectionProps) {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#FFF7F0] via-[#FAD2C1]/40 to-[#C04878]/10">
      <div className="relative max-w-5xl mx-auto z-10">
        {/* Close Button */}
        <button
          onClick={onBack}
          className="absolute top-4 right-4 p-2 hover:bg-gray-200 rounded-full transition"
        >
          <X className="w-6 h-6 text-[#8B0048]" />
        </button>

        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#8B0048] mb-2">
            भुगतान करें
          </h2>
          <p className="text-gray-700 text-lg">
            ₹{formData.donationAmount} का दान
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-[#FFD76A]/40 overflow-hidden">
          <div className="p-8 md:p-12">
            {/* QR Code Section */}
            <div className="bg-gradient-to-br from-[#FFF7F0] to-[#FAD2C1]/30 rounded-3xl p-8 mb-10 border-2 border-[#C04878]/30">
              <div className="text-center mb-6">
                <QrCode className="w-12 h-12 mx-auto text-[#C04878] mb-3" />
                <h3 className="text-2xl font-bold text-[#8B0048] mb-2">
                  तत्काल भुगतान
                </h3>
                <p className="text-gray-600">अपने फोन से स्कैन करें</p>
              </div>

              {/* Placeholder QR Code */}
              <div className="flex justify-center mb-6">
                <div className="w-64 h-64 bg-gradient-to-br from-[#8B0048]/10 to-[#C04878]/10 rounded-2xl border-4 border-[#C04878] flex items-center justify-center">
                  <div className="text-center">
                    <QrCode className="w-24 h-24 text-[#C04878]/50 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">UPI QR Code</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-700 font-semibold">
                  UPI ID: {bankDetails.upiId}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 my-10">
              <div className="flex-1 h-px bg-gradient-to-r from-[#C04878]/0 to-[#C04878]/50"></div>
              <span className="text-gray-600 font-semibold">या</span>
              <div className="flex-1 h-px bg-gradient-to-l from-[#C04878]/0 to-[#C04878]/50"></div>
            </div>

            {/* Bank Transfer Section */}
            <div className="bg-[#FAD2C1]/20 rounded-3xl p-8 border-2 border-[#C04878]/30 mb-10">
              <h3 className="text-2xl font-bold text-[#8B0048] mb-6 text-center">
                बैंक ट्रांसफर
              </h3>

              <div className="space-y-4">
                <BankDetailRow
                  label="खाता धारक का नाम"
                  value={bankDetails.accountName}
                  field="accountName"
                  copiedField={copiedField}
                  onCopy={onCopy}
                />
                <BankDetailRow
                  label="खाता संख्या"
                  value={bankDetails.accountNumber}
                  field="accountNumber"
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
                  label="बैंक का नाम"
                  value={bankDetails.bankName}
                  field="bankName"
                  copiedField={copiedField}
                  onCopy={onCopy}
                />
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-[#FFD76A]/30 rounded-2xl p-6 border-l-4 border-[#FFD76A] mb-10">
              <p className="text-[#8B0048] font-bold text-lg mb-2">📞 महत्वपूर्ण:</p>
              <p className="text-[#8B0048] leading-relaxed">
                भुगतान पूरा करने के बाद, कृपया हमें{" "}
                <span className="font-bold">+91-XXXXX-XXXXX</span> पर कॉल करें
                या WhatsApp भेजें।
              </p>
              <p className="text-[#8B0048] text-sm mt-2 opacity-80">
                (अपनी पुष्टि के लिए आपका नाम और राशि दें ताकि हम आपका प्रमाण
                पत्र तैयार कर सकें)
              </p>
            </div>

            {/* Payment Done Button */}
            <button
              onClick={onPaymentDone}
              className="w-full py-6 rounded-xl bg-gradient-to-r from-[#8B0048] via-[#C04878] to-[#FFD76A]
                         text-white font-bold text-2xl shadow-xl hover:scale-[1.02] 
                         transition-all duration-300 flex items-center justify-center gap-3 mb-4"
            >
              <Check className="w-6 h-6" />
              भुगतान पूरा हुआ
            </button>

            <button
              onClick={onBack}
              className="w-full py-4 rounded-xl border-2 border-[#C04878] text-[#8B0048]
                         font-bold text-lg transition-all duration-300"
            >
              वापस जाएं
            </button>
          </div>
        </div>
      </div>
    </section>
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
    <div className="bg-white rounded-xl p-4 border-2 border-[#C04878]/30 flex items-center justify-between gap-4">
      <div>
        <p className="text-gray-600 text-sm mb-1">{label}</p>
        <p className="text-[#8B0048] font-bold text-lg">{value}</p>
      </div>
      <button
        onClick={() => onCopy(value, field)}
        className="p-3 hover:bg-[#FFD76A]/30 rounded-lg transition"
        type="button"
      >
        {copiedField === field ? (
          <Check className="w-5 h-5 text-green-500" />
        ) : (
          <Copy className="w-5 h-5 text-[#C04878]" />
        )}
      </button>
    </div>
  );
}

/* -----------------------------------------
   Certificate Section
------------------------------------------ */

interface CertificateSectionProps {
  formData: FormData;
  onDownload: () => void;
  onNewDonation: () => void;
}

function CertificateSection({
  formData,
  onDownload,
  onNewDonation,
}: CertificateSectionProps) {
  const getDonationCategoryName = (purpose: string | number) => {
    const categories: Record<string, string> = {
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
    return categories[String(purpose)] || "दान";
  };

  const certificateNumber = React.useMemo(
    () => `JDT-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    []
  );

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#FFF7F0] via-[#FAD2C1]/40 to-[#C04878]/10">
      <div className="relative max-w-4xl mx-auto z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#8B0048] mb-2">
            🙏 धन्यवाद
          </h2>
          <p className="text-gray-700 text-lg">आपका प्रमाण पत्र तैयार है</p>
        </div>

        {/* Certificate */}
        <div className="bg-white rounded-3xl shadow-2xl border-8 border-[#8B0048] overflow-hidden">
          {/* Certificate Header */}
          <div className="bg-gradient-to-r from-[#8B0048] via-[#C04878] to-[#FFD76A] p-8 text-center relative">
            <div className="absolute top-2 left-2 w-12 h-12 border-t-4 border-l-4 border-white opacity-50"></div>
            <div className="absolute bottom-2 right-2 w-12 h-12 border-b-4 border-r-4 border-white opacity-50"></div>

            <h3 className="text-3xl font-extrabold text-white mb-1">
              सम्मान प्रमाण पत्र
            </h3>
            <p className="text-white/90 text-lg">Certificate of Merit</p>
          </div>

          {/* Certificate Body */}
          <div className="p-12 text-center relative">
            {/* Decorative Elements */}
            <div className="absolute top-8 left-8 w-20 h-20 border-2 border-[#FFD76A] rounded-full opacity-30"></div>
            <div className="absolute bottom-8 right-8 w-16 h-16 border-2 border-[#C04878] rounded-full opacity-30"></div>

            <div className="mb-8">
              <p className="text-[#8B0048]/70 text-lg font-semibold mb-4">
                जैन समाज को सम्मानित करते हुए
              </p>
              <p className="text-gray-600 text-sm mb-6">
                यह प्रमाण पत्र प्रदान किया जाता है
              </p>
            </div>

            {/* Donor Name */}
            <div className="mb-10 py-6 border-t-2 border-b-2 border-[#C04878]">
              <p className="text-[#8B0048]/60 text-lg mb-2">
                को सम्मानित किया जाता है
              </p>
              <h2 className="text-4xl font-extrabold text-[#8B0048] break-words">
                {formData.donorName}
              </h2>
            </div>

            {/* Certificate Details */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <CertificateField
                label="दान राशि"
                value={`₹ ${formData.donationAmount}`}
              />
              <CertificateField
                label="दान श्रेणी"
                value={getDonationCategoryName(formData.donationPurpose)}
              />
              <CertificateField label="दाता ईमेल" value={formData.donorEmail} />
              <CertificateField label="दाता संपर्क" value={formData.donorPhone} />
            </div>

            {/* Purpose */}
            <div className="bg-[#FFF7F0] rounded-2xl p-6 mb-10 border-l-4 border-[#C04878]">
              <p className="text-[#8B0048]/70 text-sm mb-2">पवित्र उद्देश्य</p>
              <p className="text-[#8B0048] font-bold text-lg">
                {getDonationCategoryName(formData.donationPurpose)} के लिए दान
              </p>
            </div>

            {/* Message */}
            <p className="text-[#8B0048] text-sm leading-relaxed mb-12 px-4">
              "दान का अर्थ है - निःस्वार्थ भाव से समाज के कल्याण के लिए अपना
              योगदान देना।"
            </p>

            {/* Date and Seal Area */}
            <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t-2 border-[#C04878]/40">
              <div>
                <p className="text-[#8B0048]/60 text.sm mb-4">दिनांक</p>
                <p className="text-[#8B0048] font-bold">
                  {new Date().toLocaleDateString("hi-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div>
                <p className="text-center text-[#C04878] font-extrabold text-3xl">
                  ✨
                </p>
              </div>
              <div>
                <p className="text-[#8B0048]/60 text-sm mb-4">प्रमाण संख्या</p>
                <p className="text-[#8B0048] font-bold">{certificateNumber}</p>
              </div>
            </div>
          </div>

          {/* Certificate Footer */}
          <div className="bg-[#FAD2C1]/30 p-6 border-t-2 border-[#C04878] text-center">
            <p className="text-[#8B0048] text-sm font-semibold">
              🌟 आपका दान भविष्य पीढ़ी के लिए एक प्रकाश स्तंभ है 🌟
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-10 flex-col md:flex-row">
          <button
            onClick={onDownload}
            className="flex-1 py-4 rounded-xl bg-gradient-to-r from-[#8B0048] via-[#C04878] to-[#FFD76A]
                       text-white font-bold text-lg shadow-xl hover:scale-[1.02] 
                       transition-all duration-300 flex items-center justify-center gap-3"
          >
            <FileCheck2 className="w-5 h-5" />
            प्रमाण पत्र डाउनलोड करें
          </button>

          <button
            onClick={onNewDonation}
            className="flex-1 py-4 rounded-xl border-2 border-[#C04878] text-[#8B0048]
                       font-bold text-lg transition-all duration-300 hover:bg-[#FAD2C1]/30"
          >
            फिर से दान करें
          </button>
        </div>
      </div>
    </section>
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
    <div className="bg-[#FFF7F0] rounded-xl p-4 border-2 border-[#FFD76A]/50">
      <p className="text-[#8B0048]/70 text-sm mb-1">{label}</p>
      <p className="text-[#8B0048] font-bold text-lg break-words">{value}</p>
    </div>
  );
}

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
        <Icon className="w-5 h-5 text-[#C04878]" />
        {label}
      </label>

      <input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        className="w-full px-4 py-4 border-2 border-[#C04878]/40 rounded-xl 
                   focus:border-[#8B0048] outline-none leading-[1.6]"
      />
    </div>
  );
}

/* -----------------------------------------
   Benefit Component
------------------------------------------ */

interface BenefitProps {
  icon: React.ElementType;
  text: string;
}

function Benefit({ icon: Icon, text }: BenefitProps) {
  return (
    <div className="bg-white/70 border border-[#FFD76A]/40 rounded-xl p-5 text-center shadow-sm">
      <Icon className="w-8 h-8 mx-auto text-[#C04878] mb-2" />
      <p className="text-[#8B0048] font-semibold leading-[1.7]">{text}</p>
    </div>
  );
}
