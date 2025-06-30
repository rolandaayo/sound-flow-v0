"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200/50"
            : "bg-white border-b border-gray-200"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
          <div className="flex justify-between h-[85px] items-center">
            {/* Left Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {[
                ["Get Started", "/sign-up"],
                ["Pricing", "/pricing"],
                ["Dream Factory", "/dream-factory"],
              ].map(([title, href]) => (
                <motion.div
                  key={href}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Link
                    href={href}
                    className="text-[15px] text-gray-700 hover:text-black font-normal tracking-[-0.15px] relative group"
                  >
                    {title}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FAE62F]"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-black hover:bg-gray-200/50 transition-colors duration-200"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} w-6 h-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} w-6 h-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Logo (Centered) */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="flex items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Image
                    src="/globe.svg"
                    alt="Logo"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </motion.div>
                <motion.span
                  className="ml-2.5 text-[20px] font-montserrat font-bold text-black tracking-[-0.2px]"
                  whileHover={{ color: "#FAE62F" }}
                >
                  SOUNDFLOW
                </motion.span>
              </Link>
            </motion.div>

            {/* Right Navigation */}
            <div className="hidden font-montserrat md:flex items-center gap-8">
              <Link
                href="/resources"
                className="text-[15px] text-gray-700 hover:text-black font-normal tracking-[-0.15px] relative group"
              >
                Resources
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FAE62F] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/signin"
                className="text-[15px] text-gray-700 hover:text-black font-normal tracking-[-0.15px] relative group"
              >
                Sign in
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FAE62F] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/sign-up"
                className="text-[15px] text-gray-700 hover:text-black font-normal tracking-[-0.15px] relative group"
              >
                Sign Up
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FAE62F] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/sign-up"
                className="inline-flex items-center justify-center px-5 py-2.5 text-[15px] font-medium text-black bg-[#FAE62F] rounded-lg hover:bg-white hover:border-2 hover:border-[#FAE62F] transition-all duration-300 tracking-[-0.15px] shadow-lg shadow-[#FAE62F]/20"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:hidden absolute left-0 right-0 top-[72px] bg-white/95 backdrop-blur-md border-b border-gray-200/50`}
          >
            <div className="px-5 py-4 space-y-3">
              {[
                ["Get Started", "/sign-up"],
                ["Pricing", "/pricing"],
                ["Label", "/label"],
                ["Partners", "/partners"],
                ["How To", "/how-to"],
                ["Dream Factory", "/dream-factory"],
                ["Resources", "/resources"],
                ["Sign in", "/signin"],
                ["Sign Up", "/sign-up"],
              ].map(([title, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block px-3 py-2.5 text-[15px] font-normal text-gray-700 hover:text-black rounded-lg hover:bg-gray-200/50 tracking-[-0.15px] transition-all duration-200"
                >
                  {title}
                </Link>
              ))}
              <Link
                href="/sign-up"
                className="block px-3 py-2.5 text-[15px] font-medium text-black bg-[#FAE62F] rounded-lg hover:bg-white hover:border-2 hover:border-[#FAE62F] tracking-[-0.15px] transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;
