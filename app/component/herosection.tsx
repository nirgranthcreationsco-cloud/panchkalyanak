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
  // MAIN video playback logic (Production-Ready)
  // --------------------------------------------------
  useEffect(() => {
    const A = vA.current;
    const B = vB.current;
    if (!A || !B) return;

    let nextIdx = 1;
    let isCleanedUp = false;

    // Initialization Helper
    const setupVideo = (video: HTMLVideoElement, src: string) => {
      video.src = src;
      video.muted = true;
      video.playsInline = true;
      video.preload = "auto";
      video.load();
    };

    // Initial setup for both buffers
    setupVideo(A, videos[0]);
    // Pre-setup B with the next video
    setupVideo(B, videos[1]);

    const startInitialPlay = async () => {
      try {
        await A.play();
        A.style.opacity = "1";
      } catch (err) {
        console.warn("Autoplay blocked, waiting for interaction");
        const handleInteraction = () => {
          A.play().then(() => {
            A.style.opacity = "1";
            window.removeEventListener("mousedown", handleInteraction);
            window.removeEventListener("touchstart", handleInteraction);
          }).catch(() => {});
        };
        window.addEventListener("mousedown", handleInteraction);
        window.addEventListener("touchstart", handleInteraction);
      }
    };

    startInitialPlay();

    const playNext = async () => {
      if (isCleanedUp) return;

      const currentIdx = nextIdx % videos.length;
      const src = videos[currentIdx];

      const show = activeRef.current === "A" ? B : A;
      const hide = activeRef.current === "A" ? A : B;

      try {
        // 'show' was already pre-loaded/setup in previous step or during init
        await show.play();
        
        // crossfade
        show.style.opacity = "1";
        hide.style.opacity = "0";

        // swap active ref
        activeRef.current = activeRef.current === "A" ? "B" : "A";
        
        // Prepare 'hide' for its NEXT turn (2 indices ahead)
        nextIdx++;
        const futureIdx = (nextIdx) % videos.length;
        setTimeout(() => {
          if (!isCleanedUp) setupVideo(hide, videos[futureIdx]);
        }, 1000); // Wait for fade to finish before changing src

      } catch (err) {
        console.error(`Playback error for ${src}:`, err);
        nextIdx++;
        setTimeout(playNext, 1000);
      }
    };

    const handleEnded = () => {
      if (!isCleanedUp) playNext();
    };

    A.addEventListener("ended", handleEnded);
    B.addEventListener("ended", handleEnded);

    const watchdog = setInterval(() => {
      if (isCleanedUp) return;
      const active = activeRef.current === "A" ? A : B;
      if (active.paused && active.readyState >= 2) {
        active.play().catch(() => {});
      }
    }, 5000);

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

      {/* Video A */}
      <video
        ref={vA}
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[1000ms] will-change-auto"
        style={{ transform: "translateZ(0)" }}
      />

      {/* Video B */}
      <video
        ref={vB}
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[1000ms] will-change-auto"
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
        className={`relative z-20 text-center transition-all duration-[1500ms] ease-out
        ${isLoaded ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-6"}`}
      >
        <Image
          src="/logo.png"
          alt="ह्रींकार तीर्थ पंचकल्याणक प्रतिष्ठा महा-महोत्सव 2026 – Official Logo"
          width={500}
          height={375}
          priority
          className="w-[60vw] max-w-[500px] object-contain drop-shadow-[0_0_60px_rgba(249,228,183,0.6)]"
        />

        <LiveEventBadge />
      </div>

      <div className="absolute inset-10 md:inset-16 border-[1.5px] border-[#EEC76C]/40 rounded-[2rem]" />
    </section>
  );
}
