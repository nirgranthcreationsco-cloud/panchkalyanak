// app/component/herosection.tsx
'use client';

import { useEffect, useRef, useState } from "react";
import CompactCountdown from "./countdown";

const PanchkalyanakHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const indexRef = useRef(0);
  
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


  // video file list (deterministic)
  const videos = ["/v1.mp4", "/v2.mp4", "/v3.mp4", "/v4.mp4", "/v5.mp4", "/v6.mp4"];

  // fade-in load (client-only)
  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 800);
    return () => clearTimeout(t);
  }, []);

  // rotation / autoplay logic for the background video (client-only)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const safePlay = async () => {
      try {
        await video.play();
      } catch (e) {
        // autoplay might be blocked; swallow error intentionally
      }
    };

    const handleEnded = () => {
      indexRef.current = (indexRef.current + 1) % videos.length;
      const next = indexRef.current;
      setTimeout(() => {
        // set src and attempt play on next tick (client-only)
        if (!video) return;
        video.src = videos[next];
        video.load();
        safePlay();
      }, 0);
    };

    // initialize first video (client-only)
    video.src = videos[0];
    safePlay();
    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  type Particle = {
  width: number;
  height: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
};

const [particles, setParticles] = useState<Particle[]>([]);

useEffect(() => {
  const arr = Array.from({ length: 30 }, (_, i) => ({
    width: parseFloat((Math.random() * 3 + 2).toFixed(2)),
    height: parseFloat((Math.random() * 3 + 2).toFixed(2)),
    top: parseFloat((Math.random() * 100).toFixed(2)),
    left: parseFloat((Math.random() * 100).toFixed(2)),
    delay: parseFloat((Math.random() * 6).toFixed(2)),
    duration: parseFloat((Math.random() * 4 + 6).toFixed(2)),
    color: i % 2 === 0 ? "#F9E4B7" : "#E0A851",
  }));

  setParticles(arr);
}, []);



  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black">
      {/* Background video (client only) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        muted
        playsInline
        preload="auto"
        aria-hidden
      />

      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />

      {/* Golden Aura - fades in */}
      <div
        className={`absolute z-10 w-[80vw] h-[80vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-br from-[#F9E4B7]/25 via-[#E0A851]/20 to-[#C14C4C]/15 blur-3xl transition-all duration-[2500ms] ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
        aria-hidden
      />

      {/* Rotating mandala - deterministic: uses rotate transforms (integers) to avoid Math.* differences */}
      <div className="absolute flex justify-center items-center pointer-events-none z-5 opacity-15">
        <div className="w-[900px] h-[900px] animate-spin-very-slow" aria-hidden>
          <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet" role="img" aria-hidden>
            <defs>
              <radialGradient id="chakra" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#F9E4B7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#C14C4C" stopOpacity="0.2" />
              </radialGradient>
            </defs>

            {/* concentric circles (deterministic) */}
            {[120, 160, 200].map((r, i) => (
              <circle key={`c-${i}`} cx="200" cy="200" r={r} fill="none" stroke="url(#chakra)" strokeWidth={1.5} />
            ))}

            {/* rays: use integer rotation to avoid float diffs between server/client */}
            {Array.from({ length: 36 }).map((_, i) => (
              <line
                key={`ray-${i}`}
                x1="200"
                y1="200"
                x2="200"
                y2="40" /* fixed top endpoint, rotate around center */
                transform={`rotate(${i * 10} 200 200)`} /* deterministic integer */
                stroke="url(#chakra)"
                strokeWidth="0.4"
                strokeLinecap="round"
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Center logo + title */}
      <div
        className={`relative z-20 text-center transform transition-all duration-[2000ms] ease-out ${
          isLoaded ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10"
        }`}
      >
        <div className="relative inline-block">
          <img
            src="/logo.png"
            alt="Panchkalyanak Logo"
            className="w-[60vw] max-w-[500px] object-contain drop-shadow-[0_0_60px_rgba(249,228,183,0.6)]"
          />
          <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none" aria-hidden>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-slow" />
          </div>
        </div>

        <CompactCountdown timeLeft={timeLeft} />

      </div>

      {/* Delicate golden frame (pure CSS) */}
      <div className="absolute inset-10 md:inset-16 border-[1.5px] border-[#EEC76C]/30 rounded-[2rem] pointer-events-none" aria-hidden />
      <div className="absolute top-10 left-10 w-6 h-6 bg-gradient-to-br from-[#EEC76C] to-[#C14C4C] rounded-full shadow-lg opacity-70" aria-hidden />
      <div className="absolute bottom-10 right-10 w-6 h-6 bg-gradient-to-tr from-[#C14C4C] to-[#EEC76C] rounded-full shadow-lg opacity-70" aria-hidden />

      {/* Particles (created on client only) */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        {particles.map((p, i) => (
          <div
            key={`p-${i}`}
            className="absolute rounded-full animate-float-glow"
            style={{
              width: `${p.width}px`,
              height: `${p.height}px`,
              top: `${p.top}%`,
              left: `${p.left}%`,
              background: `radial-gradient(circle, ${p.color}, transparent)`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes spin-very-slow {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-very-slow {
          animation: spin-very-slow 100s linear infinite;
        }

        @keyframes shimmer-slow {
          0% {
            transform: translateX(-100%) skewX(-20deg);
          }
          100% {
            transform: translateX(200%) skewX(-20deg);
          }
        }
        .animate-shimmer-slow {
          animation: shimmer-slow 9s ease-in-out infinite;
        }

        @keyframes float-glow {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.9;
          }
        }
        .animate-float-glow {
          animation: float-glow 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default PanchkalyanakHero;
