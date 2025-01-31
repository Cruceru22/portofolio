"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLeaf, FaCamera } from "react-icons/fa";
import roomPlanterUI from "../../../utils/Images/roomplanterui.png";

export default function RoomPlanter() {
  return (
    <div className="relative overflow-hidden py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-transparent"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl px-4"
      >
        <div className="grid gap-12 md:grid-cols-2">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-green-800">
              <FaLeaf className="mr-2" />
              <span className="text-sm font-medium">Featured Project</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Room Planter
            </h2>
            <p className="text-lg text-gray-600">
              Transform your living space with the perfect plants. Simply upload
              a photo of your room, and let AI help you visualize the perfect
              plant arrangement for your space.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <FaCamera className="h-5 w-5 text-green-600" />
                <span>Upload your room photo</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <FaLeaf className="h-5 w-5 text-green-600" />
                <span>Get AI-powered plant suggestions</span>
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://room-planter-odfm.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-green-600 px-6 py-3 text-white transition-colors hover:bg-green-700"
              >
                Try Room Planter
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video overflow-hidden rounded-xl border bg-white/80 shadow-xl backdrop-blur-sm"
          >
            <Image
              src={roomPlanterUI}
              alt="Room Planter Demo"
              placeholder="blur"
              quality={95}
              priority
              className="transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Built with modern technologies
          </h3>
          <div className="flex justify-center space-x-8">
            {["Next.js", "React", "TailwindCSS", "AI Vision"].map((tech) => (
              <div
                key={tech}
                className="rounded-lg bg-white/80 px-4 py-2 text-sm font-medium text-gray-600 shadow-sm backdrop-blur-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
