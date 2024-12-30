"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      bgImage: "/images/bg-1.jpg",
      title: "Get Your Music Everywhere",
      subtitle: "Release your music on all platforms",
      primaryBtn: "Get Started",
      secondaryBtn: "Learn More",
      font: "roboto-condensed",
      subtitleFont: "roboto-condensed",
      primaryBtnFont: "montserrat",
      secondaryBtnFont: "montserrat",
    },
    {
      bgImage: "/images/bg-3.jpg",
      title: "Artist Friendly, Data Driven",
      subtitle: "Release your music & fund your career",
      primaryBtn: "Try Now",
      secondaryBtn: "View Features",
      font: "roboto-condensed",
      subtitleFont: "roboto-condensed",
      primaryBtnFont: "montserrat",
      secondaryBtnFont: "montserrat",
    },
    {
      bgImage: "/images/bg-2.jpg",
      title: "Tailored deals & Artists Services",
      subtitle: "Grow your fanbase and access flexible funding",
      primaryBtn: "Join Now",
      secondaryBtn: "Explore Community",
      font: "roboto-condensed",
      subtitleFont: "roboto-condensed",
      primaryBtnFont: "montserrat",
      secondaryBtnFont: "montserrat",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="relative h-[80vh] w-full overflow-hidden">
        {/* Background Images with Fade Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].bgImage}
              alt={slides[currentSlide].title}
              fill
              priority
              quality={75}
              className="object-cover"
              sizes="100vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>

        {/* Content with Fade Transition */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-[90%] mx-auto md:max-w-2xl lg:max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-roboto-condensed text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
            >
              {slides[currentSlide].title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="font-roboto-condensed text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-[90%] mx-auto"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </AnimatePresence>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md mx-auto">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                translateY: [0, -8, 0],
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                translateY: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.05,
                translateY: 0,
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 bg-purple-600 text-white rounded-lg font-medium 
                       text-base sm:text-lg hover:bg-purple-700 transition-colors duration-300 
                       shadow-lg shadow-purple-600/20"
            >
              {slides[currentSlide].primaryBtn}
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                translateY: [0, -8, 0],
              }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                translateY: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
              whileHover={{
                scale: 1.05,
                translateY: 0,
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg 
                       font-medium text-base sm:text-lg hover:bg-white/20 transition-colors duration-300 
                       shadow-lg shadow-black/20"
            >
              {slides[currentSlide].secondaryBtn}
            </motion.button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 sm:gap-4 z-20 px-4">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-500 ${
                currentSlide === index ? "bg-purple-600 w-6 sm:w-8" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow Buttons */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2 rounded-full 
                   bg-black/30 hover:bg-black/50 text-white transition-colors duration-300"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2 rounded-full 
                   bg-black/30 hover:bg-black/50 text-white transition-colors duration-300"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform</h2>
            <p className="text-xl mb-8">
              Get your music heard worldwide with our comprehensive distribution service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="text-purple-600 text-4xl mb-4">🌎</div>
              <h3 className="text-xl font-bold mb-2">Global Distribution</h3>
              <p>Release your music on 150+ streaming platforms worldwide including Spotify, Apple Music, and more</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="text-purple-600 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Analytics & Insights</h3>
              <p>Track your performance with detailed analytics and get insights to grow your audience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-6"
            >
              <div className="text-purple-600 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Revenue Management</h3>
              <p>Keep 100% of your royalties and get paid monthly with transparent earnings reports</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
