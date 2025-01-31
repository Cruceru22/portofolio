"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCar, FaChartBar } from "react-icons/fa";
import cartopiaUI from "../../../utils/Images/cartopia.png";

export default function Cartopia() {
  return (
    <div className="relative overflow-hidden py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-7xl px-4"
      >
        <div className="flex flex-col gap-12">
          {/* Text Content */}
          <div className="mx-auto max-w-2xl space-y-6">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-blue-800">
              <FaCar className="mr-2" />
              <span className="text-sm font-medium">Featured Project</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Cartopia
            </h2>
            <p className="text-lg text-gray-600">
              Find your perfect ride with ease. Compare car specifications,
              performance metrics, and features side by side to make an informed
              decision about your next vehicle purchase.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <FaChartBar className="h-5 w-5 text-blue-600" />
                <span>Compare car specifications side by side</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <FaCar className="h-5 w-5 text-blue-600" />
                <span>Access trusted data from authoritative sources</span>
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://cartopia.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
              >
                Start Comparing
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Image/Demo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border bg-white/80 shadow-xl backdrop-blur-sm"
          >
            <Image
              src={cartopiaUI}
              alt="Cartopia Demo"
              placeholder="blur"
              quality={95}
              priority
              fill
              className="object-fill transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Built with
            </h3>
            <div className="flex justify-center space-x-8">
              {["Next.js", "React", "TailwindCSS", "TypeScript"].map((tech) => (
                <div
                  key={tech}
                  className="rounded-lg bg-white/80 px-4 py-2 text-sm font-medium text-gray-600 shadow-sm backdrop-blur-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
