"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, scaleIn } from "../animations/variants";
import LoadingSpinner from "./LoadingSpinner";

export default function Body() {
  const [mounted, setMounted] = useState(false);
  const [featuresRef, featuresControls] = useScrollAnimation();
  const [statsRef, statsControls] = useScrollAnimation();
  const [platformsRef, platformsControls] = useScrollAnimation();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Server-side rendering shows nothing
  if (!mounted) {
    return <LoadingSpinner />;
  }

  return (
    <div className="bg-black text-white">
      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        initial="hidden"
        animate={featuresControls}
        variants={staggerContainer}
        id="features"
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                Everything You Need to Succeed
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional music distribution and marketing tools to help you
              grow your career
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <div className="aspect-video mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <StatsSection statsRef={statsRef} statsControls={statsControls} />

      {/* Platforms Section with Hover Effects */}
      <motion.section
        ref={platformsRef}
        initial="hidden"
        animate={platformsControls}
        variants={staggerContainer}
        className="py-24 bg-zinc-900/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Available Platforms
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get your music heard everywhere that matters
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              {
                src: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png",
                alt: "Spotify",
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/d/df/Apple_Music_Logo_White.svg",
                alt: "Apple Music",
              },
              {
                src: "https://m.media-amazon.com/images/G/01/digital/music/merch/2020/LandingPages/AmazonMusicLogo_White.png",
                alt: "Amazon Music",
              },
              {
                src: "https://music.youtube.com/img/on_platform_logo_dark.svg",
                alt: "YouTube Music",
              },
            ].map((platform, index) => (
              <motion.div
                key={platform.alt}
                className="aspect-video relative bg-zinc-800/50 rounded-xl overflow-hidden hover:bg-zinc-800 transition-colors group"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={platform.src}
                    alt={platform.alt}
                    fill
                    className="object-contain p-8 opacity-75 group-hover:opacity-100 transition-all duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            {[
              {
                src: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Deezer_Logo_White.png",
                alt: "Deezer",
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/8/84/Tidal_logo.svg",
                alt: "Tidal",
              },
              {
                src: "https://www.pandora.com/img/pandora_logo_white.svg",
                alt: "Pandora",
              },
              {
                src: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/SoundCloud_Logo_White.png",
                alt: "SoundCloud",
              },
            ].map((platform, index) => (
              <motion.div
                key={platform.alt}
                className="aspect-video relative bg-zinc-800/50 rounded-xl overflow-hidden hover:bg-zinc-800 transition-colors group"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={platform.src}
                    alt={platform.alt}
                    fill
                    className="object-contain p-8 opacity-75 group-hover:opacity-100 transition-all duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              And 200+ more platforms worldwide
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-zinc-800 hover:bg-zinc-700 px-8 py-3 rounded-full text-sm font-medium transition-colors"
            >
              VIEW ALL PLATFORMS
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Artist Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join thousands of independent artists who trust SoundFlow
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-zinc-900/50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
                    alt="Artist"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Alex Rivers</h4>
                  <p className="text-gray-400 text-sm">Electronic Producer</p>
                </div>
              </div>
              <p className="text-gray-300">
                "SoundFlow made it incredibly easy to get my music on all major
                platforms. The analytics tools help me understand my audience
                better."
              </p>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
                    alt="Artist"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Chen</h4>
                  <p className="text-gray-400 text-sm">Singer-Songwriter</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The fact that I keep 100% of my royalties while getting
                professional distribution is amazing. Best platform for
                independent artists!"
              </p>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                    alt="Artist"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Marcus Thompson</h4>
                  <p className="text-gray-400 text-sm">Hip-Hop Artist</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The marketing tools and playlist pitching features have helped
                me reach new audiences I never thought possible."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that works best for you. No hidden fees, cancel
              anytime.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold">Free</h3>
                <span className="text-3xl font-bold">$0</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Unlimited Releases
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Basic Analytics
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Standard Support
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-medium transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <span className="text-3xl font-bold">$9.99</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-white mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Everything in Free
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-white mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Advanced Analytics
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-white mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Priority Support
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-white mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    Marketing Tools
                  </li>
                </ul>
                <button className="w-full bg-white text-blue-600 hover:bg-gray-100 py-4 rounded-xl font-medium transition-colors">
                  Upgrade to Pro
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Share Your Music?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Join thousands of artists who trust SoundFlow to distribute their
              music worldwide.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              START RELEASING NOW
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Update the Counter component
function Counter({ from, to }) {
  const [value, setValue] = useState(from);
  const nodeRef = useRef();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      const duration = 2;
      const steps = 60;
      const stepDuration = (duration * 1000) / steps;
      const increment = (to - from) / steps;
      let current = from;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current += increment;
        setValue(Math.round(current));

        if (step >= steps) {
          setValue(to);
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [inView, from, to]);

  return <span ref={ref}>{value}</span>;
}

// Update the StatsSection component
const StatsSection = ({ statsRef, statsControls }) => {
  return (
    <motion.section
      ref={statsRef}
      initial="hidden"
      animate={statsControls}
      variants={staggerContainer}
      className="py-24 bg-zinc-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="text-4xl md:text-5xl font-bold text-blue-500 mb-2"
              >
                <Counter from={0} to={stat.value} />
                <span className="ml-1">{stat.suffix}</span>
              </motion.div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Define constants outside the component
const features = [
  {
    title: "Unlimited Distribution",
    description:
      "Release as much music as you want to all major platforms. No annual fees, no hidden costs.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
  },
  {
    title: "Advanced Analytics",
    description:
      "Track your streams, revenue, and audience growth with detailed analytics and insights.",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b",
  },
  {
    title: "Marketing Tools",
    description:
      "Promote your music with powerful marketing tools and playlist pitching opportunities.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
  },
];

const stats = [
  { value: 200, suffix: "+", label: "Platforms" },
  { value: 1000000, suffix: "+", label: "Artists" },
  { value: 100, suffix: "%", label: "Revenue Share" },
  { value: 24, suffix: "/7", label: "Support" },
];
