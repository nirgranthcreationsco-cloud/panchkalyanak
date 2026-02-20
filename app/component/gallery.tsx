"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, ImageIcon, Lock } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const DRIVE_LINK = "https://drive.google.com/drive/folders/18tAYE-Eh3RYxBcpw6cGG-8eVbjtpPvAP";

const GALLERY_DAYS = [
  {
    day: 1,
    title: "प्रथम दिवस: जन्म कल्याणक",
    subtitle: "आगम आगमन एवं जन्म महोत्सव",
    image: "/day1.jpeg",
    link: DRIVE_LINK,
    status: "available",
  },
  {
    day: 2,
    title: "द्वितीय दिवस: दीक्षा कल्याणक",
    subtitle: "वैराग्य एवं मंगल दीक्षा",
    image: "/day2.jpeg",
    link: "#",
    status: "coming_soon",
  },
  {
    day: 3,
    title: "तृतीय दिवस: तप कल्याणक",
    subtitle: "साधना एवं कठोर तपस्या",
    image: "/day3.jpeg",
    link: "#",
    status: "coming_soon",
  },
  {
    day: 4,
    title: "चतुर्थ दिवस: केवलज्ञान कल्याणक",
    subtitle: "दिव्य ध्वनि एवं समवशरण",
    image: "/day4.jpeg",
    link: "#",
    status: "coming_soon",
  },
  {
    day: 5,
    title: "पंचम दिवस: मोक्ष कल्याणक",
    subtitle: "निर्वाण गमन एवं अक्षय सुख",
    image: "/day5.jpeg",
    link: "#",
    status: "coming_soon",
  },
  {
    day: 6,
    title: "षष्ठ दिवस: महा-महोत्सव समापन",
    subtitle: "विशाल शोभायात्रा एवं विसर्जन",
    image: "/day6.jpeg",
    link: "#",
    status: "coming_soon",
  },
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === GALLERY_DAYS.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? GALLERY_DAYS.length - 1 : prev - 1));
  };

  const currentDay = GALLERY_DAYS[currentIndex];

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="section">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soft-pink text-primary font-bold text-sm mb-4 border border-border-light"
          >
            <ImageIcon className="w-4 h-4" />
            <span>स्मृतियों की झलकी</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg mb-4"
          >
            उत्सव की <span className="text-accent-gold">भव्य झलकियां</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sub"
          >
            महोत्सव के पावन दिवसों की स्मृतियां। आगे बढ़ने के लिए बटनों का उपयोग करें।
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 md:px-0">
          <div className="relative h-[450px] md:h-[500px] w-full overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-2xl bg-gray-100">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="absolute inset-0"
              >
                {/* Image Container */}
                <div className="relative w-full h-full">
                  <Image
                    src={currentDay.image}
                    alt={currentDay.title}
                    fill
                    className={`object-cover ${
                      currentDay.status === "coming_soon" ? "grayscale opacity-70" : ""
                    }`}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/95 md:via-black/20 md:to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end md:justify-center">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="bg-accent-gold text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl">
                        दिवस {currentDay.day}
                      </span>
                      {currentDay.status === "coming_soon" && (
                        <span className="flex items-center gap-1.5 bg-white/10 text-white/90 px-4 py-2 rounded-full text-xs font-medium backdrop-blur-md border border-white/10">
                          <Lock className="w-3.5 h-3.5" />
                          शीध्र उपलब्ध
                        </span>
                      )}
                    </div>

                    <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-[1.1] tracking-tight">
                      {currentDay.title}
                    </h3>
                    <p className="text-white/80 text-lg md:text-2xl mb-8 font-medium italic">
                      {currentDay.subtitle}
                    </p>

                    {currentDay.status === "available" ? (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={currentDay.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-white text-primary px-10 py-4 rounded-2xl font-black text-xl shadow-2xl hover:bg-soft-pink transition-colors w-fit"
                      >
                        <ImageIcon className="w-6 h-6" />
                        <span>झलकियां देखें</span>
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    ) : (
                      <div className="text-white/50 font-black text-xl tracking-[0.2em] uppercase border-l-4 border-accent-gold pl-4 bg-black/20 backdrop-blur-sm py-2 w-fit">
                        COMING SOON
                      </div>
                    )}
                  </div>
                </div>

                {/* Big Indicator Number */}
                <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                  <span className="text-[12rem] font-black text-white leading-none">0{currentDay.day}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-8 md:gap-12 z-20">
            <button
              onClick={prevSlide}
              className="p-4 rounded-full bg-white shadow-xl hover:bg-soft-pink text-primary transition-all active:scale-95 group border border-border-light"
              aria-label="Previous day"
            >
              <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
            </button>
            <div className="flex gap-3">
              {GALLERY_DAYS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === i ? "w-10 bg-accent-gold" : "w-2 bg-border-light"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-4 rounded-full bg-white shadow-xl hover:bg-soft-pink text-primary transition-all active:scale-95 group border border-border-light"
              aria-label="Next day"
            >
              <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
