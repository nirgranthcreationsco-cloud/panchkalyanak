"use client";

import { QrCode } from "lucide-react";
import QRCode from "qrcode";
import { useEffect, useState } from "react";

export default function DynamicUPIQR({
  amount,
  donorName
}: {
  amount: number;
  donorName: string;
}) {
  const [qrData, setQrData] = useState<string>("");

  useEffect(() => {
    const upiString = 
  `upi://pay?pa=8839017577@yespay` +   // your UPI ID
  `&pn=Hrimkar%20Tirth` +              // receiver name
  `&am=${amount}` +                    // dynamic amount
  `&tn=${encodeURIComponent("Donation - " + donorName)}` + 
  `&cu=INR`;

    QRCode.toDataURL(
      upiString,
      { width: 300, margin: 1 },
      (err: any, url: string) => {
        if (!err) setQrData(url);
      }
    );
  }, [amount, donorName]);

  return (
    <div className="p-6 rounded-2xl border-2 border-[#E0679F]/30 bg-white/70">
      <div className="text-center">
        <QrCode className="w-12 h-12 mx-auto text-[#E0679F]" />
        <h3 className="text-xl font-bold text-[#8B0048] mt-2">तत्काल भुगतान</h3>
        <p className="text-xs text-[#8B0048]/70">
          योजना अनुसार राशि स्वतः भर जाएगी
        </p>
      </div>

      <div className="flex justify-center my-4">
        {qrData ? (
          <img
            src={qrData}
            alt="Dynamic UPI QR"
            className="w-52 h-52 object-contain border-4 border-[#E0679F] rounded-xl p-3 bg-white"
          />
        ) : (
          <p>Loading QR...</p>
        )}
      </div>
    </div>
  );
}
