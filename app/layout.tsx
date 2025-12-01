// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

/* ✔ REQUIRED by Next.js — theme color must be in viewport */
export const viewport: Viewport = {
  themeColor: "#FFF1F5",
};

/* ✔ Safe metadata (no themeColor here) */
export const metadata: Metadata = {
  title: "Panchkalyanak Mahotsav",
  description: "Official Website",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  other: {
    "color-scheme": "light only",
    "supported-color-schemes": "light",
    "google": "notranslate",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="android-fix" style={{ colorScheme: "light" }}>
      <head>
        {/* ✔ Forces Android Chrome/WebView to stay light */}
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        <meta name="theme-color" content="#FFF1F5" />
        <meta name="google" content="notranslate" />

        {/* ✔ Detect Android + WebView and add class to <html> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const ua = navigator.userAgent || navigator.vendor || window.opera;

                // Detect Android device
                const isAndroid = /Android/i.test(ua);

                // Detect WebView (Samsung/Xiaomi/Generic)
                const isWebView =
                  /wv/i.test(ua) ||
                  window.navigator.userAgent.includes('Version/') ||
                  (!!window.AndroidBridge) ||
                  (window?.chrome?.webview !== undefined);

                if (isAndroid) {
                  document.documentElement.classList.add("android-fix");
                }
                if (isAndroid && isWebView) {
                  document.documentElement.classList.add("android-fix");
                }
              })();
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundColor: "#FFF1F5",
          colorScheme: "light",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        {children}
      </body>
    </html>
  );
}
