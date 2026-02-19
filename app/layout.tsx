// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#8B0048",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

/* ─────────────────────────────────────────────────
   SITE‑WIDE SEO METADATA
   Every page can override these via its own export.
───────────────────────────────────────────────── */
export const metadata: Metadata = {
  /* ── Basic ────────────────────────────────────── */
  title: {
    default:
      "ह्रींकार तीर्थ पंचकल्याणक प्रतिष्ठा महा-महोत्सव 2026 | Hrimkartirth Panchkalyanak Banswara",
    template: "%s | ह्रींकार तीर्थ पंचकल्याणक 2026",
  },
  description:
    "19–24 फरवरी 2026 – राजस्थान के बांसवाड़ा में 500+ जिनबिंब की ऐतिहासिक पंचकल्याणक प्रतिष्ठा महा-महोत्सव। जैन धर्म का सबसे भव्य आयोजन। आचार्य श्री विराग सागर एवं आचार्य श्री विशुद्ध सागर की दिव्य सन्निधि में। Hrimkar Tirth Panchkalyanak Pratishtha Maha-Mahotsav Banswara Rajasthan 2026.",

  /* ── Keywords (extended LSI cluster) ──────────── */
  keywords: [
    "पंचकल्याणक 2026",
    "Panchkalyanak 2026",
    "ह्रींकार तीर्थ",
    "Hrimkar Tirth",
    "Hrimkartirth Panchkalyanak",
    "जैन पंचकल्याणक बांसवाड़ा",
    "Jain Panchkalyanak Banswara",
    "पंचकल्याणक प्रतिष्ठा",
    "जिनबिंब प्रतिष्ठा",
    "Jinbimb Pratishtha",
    "बांसवाड़ा जैन मंदिर",
    "Banswara Jain Temple",
    "आचार्य विराग सागर",
    "Acharya Virag Sagar",
    "आचार्य विशुद्ध सागर",
    "Acharya Vishudh Sagar",
    "Jain religious event Rajasthan",
    "जैन धार्मिक महोत्सव राजस्थान",
    "वात्सल्य सेवार्थ फाउंडेशन",
    "चतुर्विंशती तीर्थंकर समिति",
    "Panch Kalyanak",
    "जैन तीर्थ बांसवाड़ा",
    "Jain Tirth Banswara",
    "February 2026 Jain event",
    "Digambar Jain event 2026",
    "दिगंबर जैन महोत्सव 2026",
    "पंचकल्याणक योजनाएं",
    "Pratishtha Mahotsav",
    "ह्रींकार पंचकल्याणक समिति",
    "Jain event Rajasthan 2026",
  ],

  /* ── Author / Publisher ────────────────────────── */
  authors: [{ name: "ह्रींकार तीर्थ पंचकल्याणक समिति", url: "https://panchkalyanak.com" }],
  creator: "Nirgranth Creation",
  publisher: "चतुर्विंशती तीर्थंकर समिति, वात्सल्य सेवार्थ फाउंडेशन",

  /* ── Canonical / Alternate ─────────────────────── */
  metadataBase: new URL("https://panchkalyanak.com"),
  alternates: {
    canonical: "/",
    languages: {
      "hi-IN": "/",
      "en-IN": "/",
    },
  },

  /* ── Robots ────────────────────────────────────── */
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ── Open Graph ────────────────────────────────── */
  openGraph: {
    type: "website",
    locale: "hi_IN",
    url: "https://panchkalyanak.com",
    siteName: "ह्रींकार तीर्थ पंचकल्याणक 2026",
    title:
      "ह्रींकार तीर्थ पंचकल्याणक प्रतिष्ठा महा-महोत्सव 2026 | Banswara Rajasthan",
    description:
      "19–24 फरवरी 2026 – 500+ जिनबिंब प्रतिष्ठा | दिव्य पंचकल्याणक महोत्सव | बांसवाड़ा, राजस्थान | आचार्य श्री विराग सागर जी एवं आचार्य श्री विशुद्ध सागर जी की सन्निधि में",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "ह्रींकार तीर्थ पंचकल्याणक 2026 - Official Logo",
      },
    ],
  },

  /* ── Twitter / X Card ──────────────────────────── */
  twitter: {
    card: "summary_large_image",
    title:
      "ह्रींकार तीर्थ पंचकल्याणक प्रतिष्ठा महा-महोत्सव 2026 | Banswara Rajasthan",
    description:
      "19–24 फरवरी 2026 – 500+ जिनबिंब प्रतिष्ठा | दिव्य पंचकल्याणक महोत्सव | बांसवाड़ा, राजस्थान",
    images: ["/logo.png"],
    site: "@vikamya_vachanam",
    creator: "@vikamya_vachanam",
  },

  /* ── App / Icons ───────────────────────────────── */
  applicationName: "ह्रींकार तीर्थ पंचकल्याणक",
  appleWebApp: {
    capable: true,
    title: "पंचकल्याणक 2026",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: [{ url: "/icon.png" }],
    apple: [{ url: "/apple-icon.png" }],
  },

  /* ── Category ──────────────────────────────────── */
  category: "religion",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="hi"
      dir="ltr"
      style={{
        colorScheme: "light",
        backgroundColor: "#FFF1F5",
        margin: 0,
        padding: 0,
      } as React.CSSProperties}
    >
      <head>
        {/* ── Preconnect / DNS‑Prefetch for fonts ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── Geo Tags ───────────────────────────── */}
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Banswara, Rajasthan, India" />
        <meta name="geo.position" content="23.5431;74.4415" />
        <meta name="ICBM" content="23.5431, 74.4415" />

        {/* ── Language / Region ───────────────────── */}
        <meta httpEquiv="content-language" content="hi, en" />

        {/* ── App / Theme ─────────────────────────── */}
        <meta name="application-name" content="ह्रींकार तीर्थ पंचकल्याणक" />
        <meta name="apple-mobile-web-app-title" content="पंचकल्याणक 2026" />
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light" />
        <meta name="theme-color" content="#8B0048" />
        <meta name="google" content="notranslate" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-navbutton-color" content="#8B0048" />
        <meta name="msapplication-TileColor" content="#8B0048" />

        {/* ── Google Site Verification (add your token below) ── */}
        {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_TOKEN" /> */}

        {/* ── Canonical (backup inline – Next.js Metadata also emits this) ── */}
        <link rel="canonical" href="https://panchkalyanak.com" />

        {/* ── JSON-LD Structured Data ─────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                /* 1. WebSite */
                {
                  "@type": "WebSite",
                  "@id": "https://panchkalyanak.com/#website",
                  url: "https://panchkalyanak.com",
                  name: "ह्रींकार तीर्थ पंचकल्याणक 2026",
                  alternateName: "Hrimkar Tirth Panchkalyanak",
                  description:
                    "Official website of Hrimkartirth Panchkalyanak Pratishtha Maha-Mahotsav 2026, Banswara Rajasthan",
                  inLanguage: ["hi-IN", "en-IN"],
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate:
                        "https://panchkalyanak.com/?s={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },

                /* 2. Organization */
                {
                  "@type": "Organization",
                  "@id": "https://panchkalyanak.com/#organization",
                  name: "चतुर्विंशती तीर्थंकर समिति",
                  alternateName: "Chaturvimshati Tirthankara Samiti",
                  url: "https://panchkalyanak.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://panchkalyanak.com/logo.png",
                    width: 800,
                    height: 600,
                  },
                  sameAs: [
                    "https://www.instagram.com/vikamya_vachanam/",
                    "https://www.facebook.com/profile.php?id=100041789236278",
                    "https://www.youtube.com/@vikamya_vachanam",
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+91-88390-17577",
                    contactType: "customer service",
                    areaServed: "IN",
                    availableLanguage: ["Hindi", "English"],
                  },
                  founder: [
                    { "@type": "Person", name: "दिनेश जी खोड़निया" },
                    { "@type": "Person", name: "अशोक जी वोरा" },
                  ],
                },

                /* 3. Event */
                {
                  "@type": "Event",
                  "@id": "https://panchkalyanak.com/#event",
                  name: "ह्रींकार तीर्थ पंचकल्याणक प्रतिष्ठा महा-महोत्सव 2026",
                  alternateName: "Hrimkar Tirth Panchkalyanak Pratishtha Maha-Mahotsav 2026",
                  description:
                    "500+ जिनबिंब की प्रतिष्ठा का भव्य पंचकल्याणक महोत्सव। आचार्य श्री विराग सागर एवं आचार्य श्री विशुद्ध सागर की दिव्य सन्निधि में आयोजित ऐतिहासिक जैन धार्मिक आयोजन।",
                  startDate: "2026-02-19",
                  endDate: "2026-02-24",
                  eventStatus: "https://schema.org/EventScheduled",
                  eventAttendanceMode:
                    "https://schema.org/OfflineEventAttendanceMode",
                  location: [
                    {
                      "@type": "Place",
                      name: "ह्रींकार तीर्थ",
                      address: {
                        "@type": "PostalAddress",
                        streetAddress: "बांसवाड़ा–उदयपुर रोड, टिम्बा गामड़ी",
                        addressLocality: "Banswara",
                        addressRegion: "Rajasthan",
                        postalCode: "327001",
                        addressCountry: "IN",
                      },
                      geo: {
                        "@type": "GeoCoordinates",
                        latitude: 23.643444,
                        longitude: 74.365083,
                      },
                    },
                    {
                      "@type": "Place",
                      name: "पंचकल्याणक स्थल, बाहुबली कॉलोनी",
                      address: {
                        "@type": "PostalAddress",
                        streetAddress: "संत भवन के पीछे, बाहुबली कॉलोनी",
                        addressLocality: "Banswara",
                        addressRegion: "Rajasthan",
                        addressCountry: "IN",
                      },
                    },
                  ],
                  organizer: {
                    "@id": "https://panchkalyanak.com/#organization",
                  },
                  image: {
                    "@type": "ImageObject",
                    url: "https://panchkalyanak.com/logo.png",
                    width: 800,
                    height: 600,
                  },
                  inLanguage: "hi",
                  isAccessibleForFree: true,
                  keywords:
                    "पंचकल्याणक, Jain event, Panchkalyanak, Hrimkar Tirth, Banswara, Rajasthan, जैन महोत्सव",
                },

                /* 4. LocalBusiness / Religious Organization */
                {
                  "@type": ["LocalBusiness", "ReligiousOrganization"],
                  "@id": "https://panchkalyanak.com/#localbusiness",
                  name: "ह्रींकार तीर्थ",
                  alternateName: "Hrimkar Tirth",
                  description:
                    "दिगंबर जैन तीर्थ क्षेत्र – पंचकल्याणक प्रतिष्ठा महोत्सव 2026 का पुण्य स्थल",
                  url: "https://panchkalyanak.com",
                  telephone: "+91-88390-17577",
                  image: "https://panchkalyanak.com/logo.png",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "बांसवाड़ा–उदयपुर रोड, टिम्बा गामड़ी",
                    addressLocality: "Banswara",
                    addressRegion: "Rajasthan",
                    postalCode: "327001",
                    addressCountry: "IN",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 23.643444,
                    longitude: 74.365083,
                  },
                  openingHours: "Mo-Su 06:00-20:00",
                  sameAs: [
                    "https://www.instagram.com/vikamya_vachanam/",
                    "https://www.youtube.com/@vikamya_vachanam",
                  ],
                },

                /* 5. BreadcrumbList */
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://panchkalyanak.com/#breadcrumb",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://panchkalyanak.com",
                    },
                  ],
                },

                /* 6. FAQ */
                {
                  "@type": "FAQPage",
                  "@id": "https://panchkalyanak.com/#faq",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "पंचकल्याणक महोत्सव कब और कहाँ होगा?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "पंचकल्याणक प्रतिष्ठा महा-महोत्सव 19 से 24 फरवरी 2026 तक बांसवाड़ा, राजस्थान में आयोजित होगा।",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "हमसे कैसे संपर्क करें?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "आप +91 88390 17577 पर फोन करके या सोशल मीडिया पर vikamya_vachanam से संपर्क कर सकते हैं।",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "पंचकल्याणक योजनाओं में कैसे भागीदार बनें?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "वेबसाइट पर उपलब्ध योजना अनुभाग में जाकर आप सामान्य इन्द्र-इन्द्राणी (₹3,100) से लेकर मुख्य वेदी (₹5,11,000) तक की योजनाओं में पुण्यार्जक बन सकते हैं।",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "बांसवाड़ा कैसे पहुँचें?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "निकटतम हवाई अड्डा उदयपुर (≈165 किमी), निकटतम रेलवे स्टेशन रतलाम जंक्शन (≈80 किमी)। RSRTC बसें एवं प्राइवेट टैक्सी सेवाएँ भी उपलब्ध हैं।",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What is Panchkalyanak?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Panchkalyanak (पंचकल्याणक) is a sacred Jain religious ceremony celebrating the five auspicious events in the life of a Tirthankara: Garbha (conception), Janma (birth), Diksha (renunciation), Kevala Jnana (enlightenment), and Moksha (liberation). Jinbimb Pratishtha is the consecration of Jain idols during this ceremony.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />

        {/* ── Android dark-mode prevention ─────────── */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var ua=navigator.userAgent||"";if(/Android/i.test(ua)){document.documentElement.classList.add("android-fix");}})();`,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundColor: "#FFF1F5",
          colorScheme: "light",
          color: "#7A1433",
          margin: 0,
          padding: 0,
          WebkitTapHighlightColor: "transparent",
          WebkitFontSmoothing: "antialiased",
        } as React.CSSProperties}
      >
        <div
          style={{
            colorScheme: "light",
            backgroundColor: "#FFF1F5",
            color: "#7A1433",
            minHeight: "100vh",
          } as React.CSSProperties}
        >
          {children}
        </div>
      </body>
    </html>
  );
}