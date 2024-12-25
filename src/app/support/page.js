"use client";

import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";

export default function SupportPage() {
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
                How Can We Help?
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get the support you need, when you need it
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-900/50 p-6 rounded-xl"
            >
              <h2 className="text-xl font-bold mb-4">Contact Support</h2>
              <p className="text-gray-400 mb-4">
                Our support team is available 24/7 to help you with any
                questions
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-sm font-medium transition-colors">
                Get in Touch
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-900/50 p-6 rounded-xl"
            >
              <h2 className="text-xl font-bold mb-4">FAQ</h2>
              <p className="text-gray-400 mb-4">
                Find answers to commonly asked questions
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-sm font-medium transition-colors">
                View FAQs
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
