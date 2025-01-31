"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCar, FaChartBar } from "react-icons/fa";
import cartopiaUI from "../../../utils/Images/cartopiacompare.png";
import { IconCloud } from "~/components/ui/icon-cloud";
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const features = [
  {
    icon: <FaChartBar className="h-5 w-5 text-blue-600" />,
    text: "Compare car specifications side by side",
  },
  {
    icon: <FaCar className="h-5 w-5 text-blue-600" />,
    text: "Access trusted data from authoritative sources",
  },
];

const slugs = [
  "nextdotjs",
  "react",
  "typescript",
  "tailwindcss",
  "vercel",
  "prisma",
  "clerk",
  "radixui",
  "framermotion",
];

export default function Cartopia() {
  const { scrollYProgress } = useScroll();
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/000000`,
  );

  return (
    <div className="relative overflow-hidden py-20">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="relative mx-auto max-w-7xl px-4"
      >
        <motion.div
          className="flex flex-col gap-12"
          variants={staggerContainer}
        >
          {/* Text Content */}
          <div className="mx-auto max-w-2xl space-y-6">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-blue-800 transition-colors hover:bg-blue-200"
            >
              <FaCar className="mr-2 animate-bounce" />
              <span className="text-sm font-medium">Featured Project</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tight text-gray-900 transition-colors hover:text-blue-600"
            >
              Cartopia
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-gray-600">
              Find your perfect ride with ease. Compare car specifications,
              performance metrics, and features side by side to make an informed
              decision about your next vehicle purchase.
            </motion.p>

            <motion.div variants={staggerContainer} className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-2 rounded-lg p-2 text-gray-700 transition-colors hover:bg-blue-50"
                >
                  {feature.icon}
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="https://cartopia.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white transition-all hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
              >
                Start Comparing
                <motion.svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </motion.svg>
              </Link>
            </motion.div>
          </div>

          {/* Image/Demo Section */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border bg-white/80 shadow-xl backdrop-blur-sm transition-shadow hover:shadow-2xl"
          >
            <motion.div
              style={{ scale: imageScale }}
              className="relative h-full w-full"
            >
              <Image
                src={cartopiaUI}
                alt="Cartopia Demo"
                quality={95}
                priority
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                className="object-contain transition-transform duration-300"
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={fadeInUp}>
            <motion.h3
              variants={fadeInUp}
              className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-500"
            >
              Built with
            </motion.h3>
            <div className="relative mx-auto h-[400px] w-[400px] overflow-hidden rounded-lg bg-white/80">
              <IconCloud images={images} />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
