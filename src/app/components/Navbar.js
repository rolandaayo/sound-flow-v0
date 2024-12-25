"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full backdrop-blur-md bg-black/10 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between h-20"
        >
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-wider">
              SOUNDFLOW
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-white/10"
            >
              <span className="sr-only">Open menu</span>
              {!isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/distribute"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              DISTRIBUTE
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              PRICING
            </Link>
            <Link
              href="/academy"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              ACADEMY
            </Link>
            <Link
              href="/support"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              SUPPORT
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-medium hover:text-blue-400 transition-colors">
              LOG IN
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
              SIGN UP FREE
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <Link
                href="/distribute"
                className="block text-sm font-medium hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                DISTRIBUTE
              </Link>
              <Link
                href="/pricing"
                className="block text-sm font-medium hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                PRICING
              </Link>
              <Link
                href="/academy"
                className="block text-sm font-medium hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ACADEMY
              </Link>
              <Link
                href="/support"
                className="block text-sm font-medium hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                SUPPORT
              </Link>
              <div className="pt-4 space-y-4">
                <button className="w-full text-sm font-medium hover:text-blue-400 transition-colors py-2">
                  LOG IN
                </button>
                <button className="w-full bg-blue-600 hover:bg-blue-700 py-2.5 rounded-full text-sm font-medium transition-colors">
                  SIGN UP FREE
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
