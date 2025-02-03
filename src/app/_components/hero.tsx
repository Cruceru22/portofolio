"use client";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Developer = dynamic(() => import("./developer"), { ssr: false });
const Car = dynamic(() => import("./car"), { ssr: false });
const Connoisseur = dynamic(() => import("./connoisseur"), { ssr: false });
const LetsConnect = dynamic(() => import("./letsConnect"), { ssr: false });
const RoomPlanter = dynamic(() => import("./roomPlanter"), { ssr: false });
const Cartopia = dynamic(() => import("./cartopia"), { ssr: false });

// Simplified animation variants for better performance
const containerVariants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Reduced from 0.2
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 }, // Reduced y distance
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3, // Reduced from 0.5
    },
  },
};

function LoadingSpinner() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-900 border-t-transparent" />
    </div>
  );
}

function AnimatedSection({
  children,
  height,
  isCarSection,
}: {
  children: React.ReactNode;
  height: string;
  isCarSection?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px 0px" });

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`${height} relative w-full overflow-hidden rounded-xl ${isCarSection ? "border-4 border-red-500" : ""} bg-white/80 p-6 shadow-xl backdrop-blur-sm will-change-transform`}
    >
      {isInView && children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <div className="relative w-full">
      <motion.div
        className="relative mx-auto flex max-w-2xl flex-col gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatedSection height="h-[400px] sm:h-[250px]">
          <Suspense fallback={<LoadingSpinner />}>
            <Developer />
          </Suspense>
        </AnimatedSection>

        <AnimatedSection height="h-[800px] sm:h-[620px]">
          <Suspense fallback={<LoadingSpinner />}>
            <Connoisseur />
          </Suspense>
        </AnimatedSection>

        <AnimatedSection height="h-[900px] sm:h-[800px]" isCarSection>
          <Suspense fallback={<LoadingSpinner />}>
            <Car />
          </Suspense>
        </AnimatedSection>

        <AnimatedSection height="h-[1300px]">
          <Suspense fallback={<LoadingSpinner />}>
            <Cartopia />
          </Suspense>
        </AnimatedSection>

        <AnimatedSection height="h-[1300px]">
          <Suspense fallback={<LoadingSpinner />}>
            <RoomPlanter />
          </Suspense>
        </AnimatedSection>

        <AnimatedSection height="h-[400px] sm:h-[300px]">
          <Suspense fallback={<LoadingSpinner />}>
            <LetsConnect />
          </Suspense>
        </AnimatedSection>
      </motion.div>
    </div>
  );
}
