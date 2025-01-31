"use client";
import dynamic from "next/dynamic";
import { Suspense, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Developer = dynamic(() => import("./developer"), { ssr: false });
const Car = dynamic(() => import("./car"), { ssr: false });
const Connoisseur = dynamic(() => import("./connoisseur"), { ssr: false });
const LetsConnect = dynamic(() => import("./letsConnect"), { ssr: false });
const RoomPlanter = dynamic(() => import("./roomPlanter"), { ssr: false });
const Cartopia = dynamic(() => import("./cartopia"), { ssr: false });

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

function LoadingSpinner() {
  return (
    <motion.div
      className="flex h-32 w-full items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="h-8 w-8 rounded-full border-b-2 border-gray-900"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
}

function AnimatedComponent({
  children,
  delay = 0,
  minHeight = "400px",
}: {
  children: React.ReactNode;
  delay?: number;
  minHeight?: string;
}) {
  const controls = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          setIsVisible(entry.isIntersecting);
        }
      },
      { threshold: 0.1 },
    );

    if (controls.current) {
      observer.observe(controls.current);
    }

    return () => {
      if (controls.current) {
        observer.unobserve(controls.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={controls}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={itemVariants}
      custom={delay}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className="relative w-full rounded-xl bg-white/5 p-6 shadow-xl transition-colors hover:bg-white/10"
      style={{ minHeight }}
    >
      {children}
    </motion.div>
  );
}

function useInView(options: IntersectionObserverInit = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry) {
        setIsInView(entry.isIntersecting);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isInView };
}

export default function Hero() {
  const { ref: carRef, isInView: isCarInView } = useInView({
    threshold: 0.1,
    rootMargin: "200px 0px",
  });

  return (
    <div className="relative w-full">
      <motion.div
        className="mx-auto flex max-w-2xl flex-col space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          <AnimatedComponent delay={0}>
            <Suspense fallback={<LoadingSpinner />}>
              <Developer />
            </Suspense>
          </AnimatedComponent>

          <AnimatedComponent delay={0.2}>
            <Suspense fallback={<LoadingSpinner />}>
              <Connoisseur />
            </Suspense>
          </AnimatedComponent>

          <AnimatedComponent delay={0.4} minHeight="600px">
            <div ref={carRef} className="h-full w-full">
              {isCarInView && (
                <Suspense fallback={<LoadingSpinner />}>
                  <Car />
                </Suspense>
              )}
            </div>
          </AnimatedComponent>

          <AnimatedComponent delay={0.6}>
            <Suspense fallback={<LoadingSpinner />}>
              <Cartopia />
            </Suspense>
          </AnimatedComponent>

          <AnimatedComponent delay={0.8}>
            <Suspense fallback={<LoadingSpinner />}>
              <RoomPlanter />
            </Suspense>
          </AnimatedComponent>

          <AnimatedComponent delay={1}>
            <Suspense fallback={<LoadingSpinner />}>
              <LetsConnect />
            </Suspense>
          </AnimatedComponent>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
