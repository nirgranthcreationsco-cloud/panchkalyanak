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

/* ✔ Safe metadata (NO themeColor here) */
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
    <html
      lang="en"
      className="light fixed-colors"
      style={{
        colorScheme: "light",
        backgroundColor: "#FFF1F5",
      }}
    >
      <head>
        {/* ✔ Forces Android Chrome/WebView to stay light */}
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        <meta name="theme-color" content="#FFF1F5" />
        <meta name="google" content="notranslate" />

        {/* ✔ Single lightweight Android detection script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var ua = navigator.userAgent || "";
                var isAndroid = /Android/i.test(ua);
                var isWebView =
                  /wv|Version\\/|; wv\\)/i.test(ua) ||
                  (!!window.AndroidBridge) ||
                  (!!window?.chrome?.webview);

                if (isAndroid) {
                  document.documentElement.classList.add("android");
                }
                if (isAndroid && isWebView) {
                  document.documentElement.classList.add("android-webview");
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
          overscrollBehavior: "none",
        }}
      >
        {children}
      </body>
    </html>
  );
}
