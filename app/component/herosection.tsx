"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import LiveEventBadge from "./countdown";

const videos = [
  "/v2.webm",
  "/v5.webm",
  "/v3.webm",
  "/v4.webm",
  "/v1.webm",
];

export default function PanchkalyanakHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  const vA = useRef<HTMLVideoElement | null>(null);
  const vB = useRef<HTMLVideoElement | null>(null);

  const activeRef = useRef<"A" | "B">("A");
  const indexRef = useRef(0);

  // --------------------------------------------------
  // fade-in UI animation
  // --------------------------------------------------
  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(t);
  }, []);

  // --------------------------------------------------
  // preload a given video silently into the buffer
  // --------------------------------------------------
  function preloadVideo(src: string) {
    const v = document.createElement("video");
    v.src = src;
    v.preload = "auto";
    v.muted = true;
    v.playsInline = true;
    v.load();
  }

  // --------------------------------------------------
  // MAIN video playback logic with cross-fade (Mobile-optimized)
  // --------------------------------------------------
  useEffect(() => {
    const A = vA.current;
    const B = vB.current;
    if (!A || !B) return;

    let nextIdx = 1;
    let retryCount = 0;
    const MAX_RETRIES = 3;
    let isCleanedUp = false;
    let currentVideoElement: HTMLVideoElement = A;

    // Detect mobile browser
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // 1. Initialize first video instantly
    A.src = videos[0];
    A.style.opacity = "1";
    A.load();
    
    // For mobile, we need to be more aggressive with play attempts
    const tryPlay = (video: HTMLVideoElement) => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Initial play prevented:", err);
          // On mobile, user interaction might be needed
        });
      }
    };
    
    tryPlay(A);
    currentVideoElement = A;

    // Preload upcoming videos at start (but not on mobile to save bandwidth)
    if (!isMobile) {
      videos.forEach((v) => preloadVideo(v));
    }

    const playNext = async () => {
      if (isCleanedUp) return;

      // Calculate current index with proper looping
      const currentIdx = nextIdx % videos.length;
      const src = videos[currentIdx];

      const show = activeRef.current === "A" ? B : A;
      const hide = activeRef.current === "A" ? A : B;

      console.log(`Attempting to play video ${currentIdx + 1}/${videos.length}: ${src}`);

      // prepare next video BEFORE transition
      show.src = src;
      show.currentTime = 0;
      
      // Wait for video to be ready before playing
      const waitForReady = new Promise<void>((resolve, reject) => {
        const timeout = setTimeout(() => reject(new Error("Video load timeout")), 10000);
        
        const onCanPlay = () => {
          clearTimeout(timeout);
          show.removeEventListener("canplaythrough", onCanPlay);
          show.removeEventListener("loadeddata", onCanPlay);
          resolve();
        };
        
        show.addEventListener("canplaythrough", onCanPlay);
        show.addEventListener("loadeddata", onCanPlay);
        show.load();
      });

      try {
        await waitForReady;
        await show.play();
        
        console.log(`Successfully playing: ${src}`);
        
        // Reset retry count on successful play
        retryCount = 0;
        currentVideoElement = show;
      } catch (err) {
        console.error(`Video playback error for ${src}:`, err);
        
        // Increment retry count
        retryCount++;
        
        // If we've exceeded max retries, skip to next video
        if (retryCount >= MAX_RETRIES) {
          console.warn(`Skipping ${src} after ${MAX_RETRIES} failed attempts`);
          retryCount = 0;
          nextIdx++;
          
          // Use exponential backoff before trying next video
          setTimeout(playNext, 1000);
          return;
        }
        
        // Retry the same video with exponential backoff
        const backoffDelay = Math.min(1000 * Math.pow(2, retryCount - 1), 5000);
        setTimeout(playNext, backoffDelay);
        return;
      }

      // crossfade
      show.style.opacity = "1";
      hide.style.opacity = "0";

      // swap active ref
      activeRef.current = activeRef.current === "A" ? "B" : "A";

      // queue next index
      nextIdx++;
    };

    // handle finish events with better mobile support
    const handleEnded = (e: Event) => {
      console.log("Video ended, playing next...");
      if (!isCleanedUp) {
        // Small delay to ensure smooth transition on mobile
        setTimeout(playNext, isMobile ? 200 : 50);
      }
    };

    A.addEventListener("ended", handleEnded);
    B.addEventListener("ended", handleEnded);

    // Add visibility change handler to resume playback when tab becomes visible
    const handleVisibilityChange = () => {
      if (!document.hidden && currentVideoElement && currentVideoElement.paused) {
        console.log("Tab visible, resuming playback");
        currentVideoElement.play().catch(() => {});
      }
    };
    
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Watchdog to ensure videos keep playing (especially important on mobile)
    const watchdog = setInterval(() => {
      if (isCleanedUp) return;
      
      const active = activeRef.current === "A" ? A : B;
      
      // Check if video is stuck
      if (active.paused && !active.ended && active.readyState >= 2) {
        console.log("Watchdog: Video stuck, attempting to resume");
        active.play().catch(() => {});
      }
    }, 3000);

    return () => {
      isCleanedUp = true;
      A.removeEventListener("ended", handleEnded);
      B.removeEventListener("ended", handleEnded);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
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
        ह्रींकार तीर्थ पंचकल्याणक प्रतिष्ठा महा-महोत्सव 2026 – Hrimkar Tirth Panchkalyanak Banswara Rajasthan
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
