"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { motion } from "framer-motion";

const Developer = dynamic(() => import("./developer"), { ssr: false });
const Car = dynamic(() => import("./car"), { ssr: false });
const Connoisseur = dynamic(() => import("./connoisseur"), { ssr: false });
const LetsConnect = dynamic(() => import("./letsConnect"), { ssr: false });
const RoomPlanter = dynamic(() => import("./roomPlanter"), { ssr: false });
const Cartopia = dynamic(() => import("./cartopia"), { ssr: false });

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
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
  delay,
  height,
  isCarSection,
}: {
  children: React.ReactNode;
  delay: number;
  height: string;
  isCarSection?: boolean;
}) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      className={`${height} relative w-full overflow-hidden rounded-xl ${
        isCarSection ? "border-4 border-red-500" : ""
      } bg-white/80 p-6 shadow-xl backdrop-blur-sm transition-all duration-300`}
    >
      {children}
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
        <AnimatedSection delay={0} height="h-[400px] sm:h-[300px]">
          <Suspense fallback={<LoadingSpinner />}>
            <Developer />
          </Suspense>
        </AnimatedSection>

        <AnimatedSection delay={0.2} height="h-[800px] sm:h-[620px]">
          <Suspense fallback={<LoadingSpinner />}>
            <Connoisseur />
          </Suspense>
        </AnimatedSection>

        <AnimatedSection
          delay={0.4}
          height="h-[900px] sm:h-[800px]"
          isCarSection
        >
          <Suspense fallback={<LoadingSpinner />}>
            <Car />
          </Suspense>
        </AnimatedSection>

        <AnimatedSection delay={0.6} height="h-[1300px]">
          <Suspense fallback={<LoadingSpinner />}>
            <Cartopia />
          </Suspense>
        </AnimatedSection>

        <AnimatedSection delay={0.8} height="h-[1300px]">
          <Suspense fallback={<LoadingSpinner />}>
            <RoomPlanter />
          </Suspense>
        </AnimatedSection>

        <AnimatedSection delay={1} height="h-[400px] sm:h-[300px]">
          <Suspense fallback={<LoadingSpinner />}>
            <LetsConnect />
          </Suspense>
        </AnimatedSection>
      </motion.div>
    </div>
  );
}
