// app/moreyojnas/layout.tsx
// Server component – exports page-level metadata for the /moreyojnas route
// (the page itself is "use client" so metadata must live here)

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ह्रींकार तीर्थ – समस्त योजनाएँ | Hrimkar Tirth All Yojnas 2026",
  description:
    "पंचकल्याणक योजनाएँ, विशेष योजनाएँ, आधार स्तंभ, एवं आगामी योजनाएँ – सभी श्रेणियाँ। सामान्य इन्द्र-इन्द्राणी (₹3,100) से लेकर परम शिरोमणि संरक्षक (₹31,00,000) तक – अनंत पुण्य अर्जित करें। Hrimkar Tirth Panchkalyanak Yojnas Banswara 2026.",
  keywords: [
    "पंचकल्याणक योजनाएं",
    "Hrimkar Tirth Yojna",
    "Jain donation plans",
    "ह्रींकार तीर्थ योजना",
    "जैन दान योजना",
    "Panchkalyanak sponsorship",
    "Banswara Jain event donations",
    "इन्द्र-इन्द्राणी योजना",
    "मुख्य वेदी योजना",
    "ध्वजारोहण",
  ],
  alternates: {
    canonical: "https://www.hrimkartirth.com/moreyojnas",
  },
  openGraph: {
    title: "ह्रींकार तीर्थ – समस्त पंचकल्याणक योजनाएँ | Banswara 2026",
    description:
      "सभी दान एवं सेवा योजनाएँ – पंचकल्याणक प्रतिष्ठा महोत्सव 2026 के लिए। पुण्यार्जक बनें।",
    url: "https://www.hrimkartirth.com/moreyojnas",
    images: [{ url: "https://www.hrimkartirth.com/logo.png", width: 800, height: 600, alt: "ह्रींकार तीर्थ समस्त योजनाएँ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ह्रींकार तीर्थ – समस्त पंचकल्याणक योजनाएँ",
    description: "पुण्यार्जक बनें – सभी दान योजनाएँ देखें",
    images: ["/logo.png"],
  },
};

export default function MoreYojnasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
