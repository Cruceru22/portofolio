"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "~/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { FaCar, FaGasPump, FaTachometerAlt, FaCogs } from "react-icons/fa";

const CarContent = dynamic(() => import("./carContent"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[300px] w-[300px] items-center justify-center rounded-lg bg-gray-100">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-900 border-t-transparent" />
    </div>
  ),
});

const features = [
  {
    icon: <FaTachometerAlt className="h-5 w-5 text-blue-600" />,
    title: "High Performance",
    text: "425hp Twin-Turbo Engine",
  },
  {
    icon: <FaGasPump className="h-5 w-5 text-blue-600" />,
    title: "Pure Power",
    text: "3.0L Inline-6 Engine",
  },
  {
    icon: <FaCogs className="h-5 w-5 text-blue-600" />,
    title: "Precision",
    text: "7-Speed M-DCT",
  },
];

export default function Car() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden py-20">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-12">
          <div className="mx-auto max-w-2xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-blue-800"
            >
              <FaCar className="mr-2" />
              <span className="text-sm font-medium">BMW M4</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold tracking-tight text-gray-900"
            >
              Experience the Power
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg text-gray-600"
            >
              The BMW M4 represents the perfect blend of performance and luxury.
              With its aggressive styling and powerful engine, it delivers an
              exhilarating driving experience that sets the benchmark in its
              class.
            </motion.p>

            <motion.div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center space-y-2 rounded-xl bg-white/50 p-4 text-center shadow-sm backdrop-blur-sm"
                >
                  <div className="rounded-full bg-blue-100 p-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              {!isLoaded ? (
                <motion.div
                  key="load-button"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex flex-col items-center space-y-4"
                >
                  <p className="text-center text-lg text-gray-600">
                    Experience the BMW M4 in 3D with engine sound
                  </p>
                  <Button
                    onClick={() => setIsLoaded(true)}
                    className="rounded-full bg-gray-800 px-8 py-6 text-lg font-semibold text-white transition-colors hover:bg-gray-700"
                  >
                    Load BMW Experience
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="car-content"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full rounded-xl bg-white/50 p-4 shadow-sm backdrop-blur-sm"
                >
                  <CarContent />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
