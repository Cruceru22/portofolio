"use client";
import dynamic from "next/dynamic";
import { Suspense, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Developer = dynamic(() => import("./developer"), { ssr: false });
const Car = dynamic(() => import("./car"), { ssr: false });
const Connoisseur = dynamic(() => import("./connoisseur"), { ssr: false });
const LetsConnect = dynamic(() => import("./letsConnect"), { ssr: false });
const RoomPlanter = dynamic(() => import("./roomPlanter"), { ssr: false });
const Cartopia = dynamic(() => import("./cartopia"), { ssr: false });
const TechStack = dynamic(() => import("./techStack"), { ssr: false });

const containerVariants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
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
}: {
  children: React.ReactNode;
  height: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px 0px" });

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`${height} relative w-full rounded-xl bg-white/80 p-6 shadow-xl backdrop-blur-sm will-change-transform`}
    >
      {isInView && children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <div className="mx-auto max-w-2xl py-8">
      <motion.div
        className="flex flex-col gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatedSection height="min-h-[250px]">
          <Suspense fallback={<LoadingSpinner />}>
            <Developer />
          </Suspense>
        </AnimatedSection>

        <AnimatedSection height="min-h-[800px]">
          <Suspense fallback={<LoadingSpinner />}>
            <Cartopia />
          </Suspense>
        </AnimatedSection>

        <AnimatedSection height="min-h-[800px]">
          <Suspense fallback={<LoadingSpinner />}>
            <RoomPlanter />
          </Suspense>
        </AnimatedSection>

        <AnimatedSection height="min-h-[600px]">
          <Suspense fallback={<LoadingSpinner />}>
            <TechStack />
          </Suspense>
        </AnimatedSection>

        <AnimatedSection height="min-h-[620px]">
          <Suspense fallback={<LoadingSpinner />}>
            <Connoisseur />
          </Suspense>
        </AnimatedSection>

        <AnimatedSection height="min-h-[800px]">
          <Suspense fallback={<LoadingSpinner />}>
            <Car />
          </Suspense>
        </AnimatedSection>

        <AnimatedSection height="min-h-[300px]">
          <Suspense fallback={<LoadingSpinner />}>
            <LetsConnect />
          </Suspense>
        </AnimatedSection>
      </motion.div>
    </div>
  );
}
