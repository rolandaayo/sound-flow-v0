"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageLayout from "../components/PageLayout";

export default function DistributePage() {
  return (
    <PageLayout>
      <div className="bg-black text-white min-h-screen pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                Music Distribution Made Simple
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Release your music to 200+ platforms worldwide with just a few
              clicks
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <div className="space-y-4">
                {[
                  "Upload your tracks and artwork",
                  "Choose your release date",
                  "Select your platforms",
                  "Submit for distribution",
                ].map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center space-x-4"
                  >
                    <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04"
                alt="Distribution Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
