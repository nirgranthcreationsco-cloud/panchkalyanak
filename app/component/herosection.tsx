"use client";

import { useEffect, useRef, useState } from "react";
import CompactCountdown from "./countdown";

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
  // MAIN video playback logic with cross-fade
  // --------------------------------------------------
  useEffect(() => {
    const A = vA.current;
    const B = vB.current;
    if (!A || !B) return;

    let nextIdx = 1;

    // 1. Initialize first video instantly
    A.src = videos[0];
    A.style.opacity = "1";
    A.load();
    A.play().catch(() => {});

    // Preload upcoming videos at start
    videos.forEach((v) => preloadVideo(v));

    const playNext = async () => {
      // Ensure we loop through videos indefinitely
      nextIdx = nextIdx % videos.length;
      const src = videos[nextIdx];

      const show = activeRef.current === "A" ? B : A;
      const hide = activeRef.current === "A" ? A : B;

      // prepare next video BEFORE transition
      show.src = src;
      show.currentTime = 0;
      show.load();

      try {
        await show.play();
      } catch (err) {
        console.error("Video playback error:", err);
        // If playback fails, try to continue with next video
        nextIdx++;
        setTimeout(playNext, 100);
        return;
      }

      // crossfade
      show.style.opacity = "1";
      hide.style.opacity = "0";

      // swap active ref
      activeRef.current = activeRef.current === "A" ? "B" : "A";

      // queue next index (will be modulo'd on next call)
      nextIdx++;
    };

    // handle finish events
    A.onended = playNext;
    B.onended = playNext;

    return () => {
      A.onended = null;
      B.onended = null;
    };
  }, []);

  // --------------------------------------------------
  // Countdown timer
  // --------------------------------------------------
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2026-02-19T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = target - now;

      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // --------------------------------------------------
  // UI
  // --------------------------------------------------
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black">

      {/* Video A */}
      <video
        ref={vA}
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
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
        <img
          src="/logo.png"
          alt="Panchkalyanak Logo"
          className="w-[60vw] max-w-[500px] object-contain drop-shadow-[0_0_60px_rgba(249,228,183,0.6)]"
          loading="eager"
        />

        <CompactCountdown timeLeft={timeLeft} />
      </div>

      <div className="absolute inset-10 md:inset-16 border-[1.5px] border-[#EEC76C]/40 rounded-[2rem]" />
    </section>
  );
}
