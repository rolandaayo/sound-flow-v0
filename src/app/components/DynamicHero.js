"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const heroContent = [
  {
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
    title: "Music Distribution",
    subtitle: "Made Simple",
    description:
      "Release unlimited music to Spotify, Apple Music, and 200+ platforms.",
  },
  {
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    title: "Reach Millions",
    subtitle: "Of Listeners",
    description: "Get your music heard by fans around the world.",
  },
  {
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae",
    title: "Keep 100%",
    subtitle: "Of Your Royalties",
    description: "No hidden fees. You earn what you deserve.",
  },
];

export default function DynamicHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={heroContent[currentIndex].image}
            alt="Hero Background"
            className="object-cover"
            fill
            priority
            sizes="100vw"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black/90" />
        </motion.div>
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="pt-32 lg:pt-40 pb-20 flex flex-col items-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tight px-4">
                {heroContent[currentIndex].title}
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  {heroContent[currentIndex].subtitle}
                </span>
              </motion.h1>
              <motion.p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl px-4">
                {heroContent[currentIndex].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-3 mt-8">
            {heroContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-500" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
