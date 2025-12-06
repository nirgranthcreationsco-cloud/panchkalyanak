"use client";

import { useEffect, useRef, useState } from "react";
import CompactCountdown from "./countdown";

const videos = ["/v1.mp4", "/v2.mp4", "/v3.mp4", "/v4.mp4", "/v5.mp4", "/v6.mp4"];

const PanchkalyanakHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [current, setCurrent] = useState(0);

  const v1 = useRef<HTMLVideoElement | null>(null);
  const v2 = useRef<HTMLVideoElement | null>(null);

  // --------------------------------------
  // Countdown timer
  // --------------------------------------
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const target = new Date("2026-02-19T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = target - now;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // --------------------------------------
  // Fade-in on load (UI animation)
  // --------------------------------------
  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 600);
    return () => clearTimeout(t);
  }, []);

  // --------------------------------------
  // Cross-fade video switching
  // --------------------------------------
  useEffect(() => {
    const first = v1.current;
    const second = v2.current;

    if (!first || !second) return;

    // initial load
    first.src = videos[0];
    first.play().catch(() => {});

    let index = 1;
    let active = 1; // 1 = v2 fades in next

    const playNext = () => {
      const nextVideo = videos[index % videos.length];

      const show = active === 1 ? second : first;
      const hide = active === 1 ? first : second;

      show.src = nextVideo;
      show.currentTime = 0;

      show.play().catch(() => {});
      
      // fade transition
      show.style.opacity = "1";
      hide.style.opacity = "0";

      index++;
      active = active === 1 ? 2 : 1;
    };

    // when current video ends, fade next
    first.onended = playNext;
    second.onended = playNext;

  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black">

      {/* --- Video 1 --- */}
      <video
        ref={v1}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-[1200ms]"
      />

      {/* --- Video 2 --- */}
      <video
        ref={v2}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[1200ms]"
      />

      {/* --- Gradient overlay --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/80" />

      {/* --- Golden Aura --- */}
      <div
        className={`absolute z-10 w-[80vw] h-[80vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-br from-[#F9E4B7]/25 via-[#E0A851]/20 to-[#C14C4C]/15 blur-3xl transition-all duration-[2500ms] 
        ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
      />

      {/* --- Center Content --- */}
      <div
        className={`relative z-20 text-center transition-all duration-[2000ms] ease-out
        ${isLoaded ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10"}`}
      >
        <img
          src="/logo.png"
          alt="Panchkalyanak Logo"
          className="w-[60vw] max-w-[500px] object-contain drop-shadow-[0_0_60px_rgba(249,228,183,0.6)]"
        />

        <CompactCountdown timeLeft={timeLeft} />
      </div>

      {/* --- Frame --- */}
      <div className="absolute inset-10 md:inset-16 border-[1.5px] border-[#EEC76C]/40 rounded-[2rem]" />

    </section>
  );
};

export default PanchkalyanakHero;
