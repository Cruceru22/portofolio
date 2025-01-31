"use client";

import React from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import useSound from "use-sound";
import { Button } from "~/components/ui/button";
import { motion } from "framer-motion";

// Dynamically import GLTFViewer with no SSR
const GLTFViewer = dynamic(() => import("../../_utils/GLTFViewer"), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] w-[300px] animate-pulse rounded-lg bg-gray-200" />
  ),
});

export default function Car() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound("/m3.mp3", {
    loop: true,
  });

  const toggleSound = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex w-full flex-col items-center space-y-4">
      <div className="-mx-6 -mt-6 flex justify-center overflow-hidden">
        <GLTFViewer modelPath="/m4.gltf" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <Button
          className={`relative h-28 w-28 overflow-hidden rounded-full border-8 border-gray-800 transition-all duration-300 ease-in-out ${
            isPlaying
              ? "bg-red-600 shadow-lg shadow-red-500/50"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={toggleSound}
          aria-pressed={isPlaying}
          aria-label={isPlaying ? "Stop engine" : "Start engine"}
        >
          <span className="sr-only">
            {isPlaying ? "Stop engine" : "Start engine"}
          </span>
          <div
            className={`absolute inset-2 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out ${isPlaying ? "bg-red-500" : "bg-gray-600"}`}
          >
            <div
              className={`flex h-20 w-20 items-center justify-center rounded-full transition-all duration-300 ease-in-out ${isPlaying ? "bg-red-700" : "bg-gray-700"}`}
            >
              <span className="text-lg font-bold text-white">
                {isPlaying ? "STOP" : "START"}
              </span>
            </div>
          </div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: isPlaying ? 45 : -45 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-8 w-1 rounded-full bg-gray-300"></div>
          </motion.div>
        </Button>
      </motion.div>
    </div>
  );
}
