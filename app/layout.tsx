// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#FFF1F5",
  colorScheme: "light",
};

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
      style={{
        colorScheme: "light",
        backgroundColor: "#FFF1F5",
        margin: 0,
        padding: 0,
      } as React.CSSProperties}
    >
      <head>
        {/* Critical Meta Tags */}
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light" />
        <meta name="theme-color" content="#FFF1F5" />
        <meta name="google" content="notranslate" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="white" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="msapplication-navbutton-color" content="#FFF1F5" />



<script
  dangerouslySetInnerHTML={{
    __html: `
      document.documentElement.style.colorScheme = 'light';
    `,
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