"use client";

import React, { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import useSound from "use-sound";
import { Button } from "~/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

// Dynamically import GLTFViewer with no SSR and loading state
const GLTFViewer = dynamic(() => import("../../_utils/GLTFViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[300px] w-[300px] items-center justify-center rounded-lg bg-gray-100">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-900 border-t-transparent" />
    </div>
  ),
});

export default function Car() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundLoaded, setSoundLoaded] = useState(false);
  const [play, { stop }] = useSound("/m3.mp3", {
    loop: true,
    onload: () => setSoundLoaded(true),
  });

  // Cleanup sound on unmount
  useEffect(() => {
    return () => {
      if (isPlaying) {
        stop();
      }
    };
  }, [isPlaying, stop]);

  const toggleSound = useCallback(() => {
    if (!soundLoaded) return;

    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying, play, stop, soundLoaded]);

  return (
    <div className="flex w-full flex-col items-center space-y-4">
      <div className="w-full">
        <GLTFViewer modelPath="/m4.gltf" />
      </div>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            className={`relative h-28 w-28 overflow-hidden rounded-full border-8 border-gray-800 ${
              isPlaying
                ? "bg-red-600 shadow-lg shadow-red-500/50"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={toggleSound}
            disabled={!soundLoaded}
            aria-pressed={isPlaying}
            aria-label={isPlaying ? "Stop engine" : "Start engine"}
          >
            <span className="sr-only">
              {isPlaying ? "Stop engine" : "Start engine"}
            </span>
            <div
              className={`absolute inset-2 flex items-center justify-center rounded-full ${
                isPlaying ? "bg-red-500" : "bg-gray-600"
              }`}
            >
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-full ${
                  isPlaying ? "bg-red-700" : "bg-gray-700"
                }`}
              >
                <span className="text-lg font-bold text-white">
                  {!soundLoaded ? "LOADING" : isPlaying ? "STOP" : "START"}
                </span>
              </div>
            </div>
            {soundLoaded && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: isPlaying ? 45 : -45 }}
                transition={{ duration: 0.2 }}
              >
                <div className="h-8 w-1 rounded-full bg-gray-300"></div>
              </motion.div>
            )}
          </Button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
