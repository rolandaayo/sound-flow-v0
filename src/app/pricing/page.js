"use client";

import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";

export default function PricingPage() {
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
                Simple, Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that works best for you. No hidden fees, cancel
              anytime.
            </p>
          </div>

          {/* Add your pricing grid here (you can reuse the pricing section from Body.js) */}
        </motion.div>
      </div>
    </PageLayout>
  );
}
