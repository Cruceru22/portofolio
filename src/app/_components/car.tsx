"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "~/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const CarContent = dynamic(() => import("./carContent"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[300px] w-[300px] items-center justify-center rounded-lg bg-gray-100">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-900 border-t-transparent" />
    </div>
  ),
});

export default function Car() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex w-full flex-col items-center space-y-8">
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
              className="rounded-full bg-gray-800 px-8 py-6 text-lg font-semibold text-white hover:bg-gray-700"
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
            className="w-full"
          >
            <CarContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
