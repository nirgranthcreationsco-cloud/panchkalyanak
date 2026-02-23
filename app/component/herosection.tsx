"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import LiveEventBadge from "./countdown";

const videos = [
  "/v2.mp4",
  "/v5.mp4",
  "/v3.mp4",
  "/v1.mp4",
  "/v4.mp4",
  "/v6.mp4",
];

export default function PanchkalyanakHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  const vA = useRef<HTMLVideoElement | null>(null);
  const vB = useRef<HTMLVideoElement | null>(null);

  const activeRef = useRef<"A" | "B">("A");

  // --------------------------------------------------
  // fade-in UI animation
  // --------------------------------------------------
  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(t);
  }, []);

  // --------------------------------------------------
  // MAIN video playback logic (High Resilience)
  // --------------------------------------------------
  useEffect(() => {
    const A = vA.current;
    const B = vB.current;
    if (!A || !B) return;

    let nextIdx = 1;
    let isCleanedUp = false;

    const setupVideo = (video: HTMLVideoElement, src: string) => {
      video.src = src;
      video.muted = true;
      video.playsInline = true;
      video.preload = "auto";
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.load();
    };

    // Initialize
    setupVideo(A, videos[0]);
    setupVideo(B, videos[1]);

    const playWithResilience = async (video: HTMLVideoElement) => {
      try {
        await video.play();
        return true;
      } catch (err) {
        // Fallback for Safari/Mobile low-power mode or aggressive blocking
        const handleForcePlay = () => {
          video.play().catch(() => {});
          window.removeEventListener("touchstart", handleForcePlay);
          window.removeEventListener("mousedown", handleForcePlay);
        };
        window.addEventListener("touchstart", handleForcePlay);
        window.addEventListener("mousedown", handleForcePlay);
        return false;
      }
    };

    const start = async () => {
      const success = await playWithResilience(A);
      if (success || A.readyState >= 2) {
        A.style.opacity = "1";
      }
    };

    start();

    const playNext = async () => {
      if (isCleanedUp) return;

      const currentIdx = nextIdx % videos.length;
      const show = activeRef.current === "A" ? B : A;
      const hide = activeRef.current === "A" ? A : B;

      try {
        await show.play();
        show.style.opacity = "1";
        hide.style.opacity = "0";
        
        activeRef.current = activeRef.current === "A" ? "B" : "A";
        
        nextIdx++;
        const futureIdx = nextIdx % videos.length;
        
        // Setup the next video after crossfade starts
        setTimeout(() => {
          if (!isCleanedUp) setupVideo(hide, videos[futureIdx]);
        }, 1500);

      } catch (err) {
        nextIdx++;
        setTimeout(playNext, 1000);
      }
    };

    const handleEnded = () => {
      if (!isCleanedUp) playNext();
    };

    A.addEventListener("ended", handleEnded);
    B.addEventListener("ended", handleEnded);

    // Watchdog to ensure video never stays paused (e.g. after tab wake up)
    const watchdog = setInterval(() => {
      if (isCleanedUp) return;
      const active = activeRef.current === "A" ? A : B;
      if (active.paused && active.readyState >= 2) {
        active.play().catch(() => {});
      }
    }, 2000);

    return () => {
      isCleanedUp = true;
      A.removeEventListener("ended", handleEnded);
      B.removeEventListener("ended", handleEnded);
      clearInterval(watchdog);
    };
  }, []);

  // --------------------------------------------------
  // UI
  // --------------------------------------------------
  return (
    <section
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black"
      aria-label="ह्रींकार तीर्थ पंचकल्याणक प्रतिष्ठा महा-महोत्सव 2026 – Hero Section"
      role="banner"
    >
      {/* Hidden H1 for SEO – visible text is the logo image */}
      <h1 className="sr-only">
        पंचकल्याणक प्रतिष्ठा महोत्सव 2026 – बांसवाड़ा, राजस्थान | ह्रींकार तीर्थ | जैन पंचकल्याणक महोत्सव
      </h1>

      {/* Background Fallback (Poster) */}
      <div 
        className="absolute inset-0 bg-cover bg-center grayscale-[20%] opacity-40 transition-opacity duration-1000"
        style={{ backgroundImage: 'url("/day1.jpeg")', filter: 'blur(8px) brightness(0.5)' }}
      />

      {/* Video A */}
      <video
        ref={vA}
        muted
        playsInline
        autoPlay
        loop
        preload="auto"
        disablePictureInPicture
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[1500ms] will-change-auto"
        style={{ transform: "translateZ(0)" }}
      />

      {/* Video B */}
      <video
        ref={vB}
        muted
        playsInline
        autoPlay
        loop
        preload="auto"
        disablePictureInPicture
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[1500ms] will-change-auto"
        style={{ transform: "translateZ(0)" }}
      />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/70" />

      {/* glow */}
      <div
        className={`absolute z-10 w-[80vw] h-[80vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-br from-[#F9E4B7]/25 via-[#E0A851]/20 to-[#C14C4C]/15 blur-3xl transition-all duration-[2000ms] 
        ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
      />

      {/* content */}
      <div 
        className={`relative z-20 w-full max-w-[90vw] flex flex-col items-center justify-center text-center transition-all duration-[1500ms] ease-out px-4
        ${isLoaded ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-6"}`}
      >
        <div className="relative flex justify-center w-full mb-6">
          <Image
            src="/logo.png"
            alt="ह्रींकार तीर्थ पंचकल्याणक प्रतिष्ठा महा-महोत्सव 2026 – Official Logo"
            width={500}
            height={375}
            priority
            className="w-[85vw] sm:w-[65vw] max-w-[500px] h-auto object-contain drop-shadow-[0_0_80px_rgba(249,228,183,0.7)]"
          />
        </div>

        <div className="w-full flex justify-center">
          <LiveEventBadge />
        </div>
      </div>

      {/* Hero Frame Border */}
      <div className="absolute inset-4 sm:inset-10 md:inset-16 border-[1.5px] border-[#EEC76C]/30 rounded-[1.5rem] md:rounded-[2rem] pointer-events-none" />
    </section>
  );
}
