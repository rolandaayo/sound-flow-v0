"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageLayout from "../components/PageLayout";

export default function AcademyPage() {
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
                SoundFlow Academy
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Learn everything you need to know about music distribution and
              marketing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Distribution Basics",
                description: "Learn the fundamentals of music distribution",
                image:
                  "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
              },
              {
                title: "Marketing Masterclass",
                description: "Promote your music effectively",
                image:
                  "https://images.unsplash.com/photo-1518609878373-06d740f60d8b",
              },
              {
                title: "Revenue Optimization",
                description: "Maximize your streaming revenue",
                image:
                  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
              },
            ].map((course) => (
              <motion.div
                key={course.title}
                whileHover={{ y: -10 }}
                className="bg-zinc-900/50 rounded-xl overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-400">{course.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
