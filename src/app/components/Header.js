"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LoadingSpinner from "./LoadingSpinner";
import DynamicHero from "./DynamicHero";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <DynamicHero />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 -mt-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {[
            "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
            "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
            "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
            "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae",
          ].map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src={src}
                alt={`Artist ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
