"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLeaf, FaCamera } from "react-icons/fa";
import roomPlanterUI from "../../../utils/Images/roomplanterui.png";

export default function RoomPlanter() {
  const { scrollYProgress } = useScroll();
  const imageScale = useTransform(scrollYProgress, [0.5, 1], [1, 1.1]);
  const imageRotate = useTransform(scrollYProgress, [0.5, 1], [0, 2]);

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

  return (
    <motion.div
      className="relative overflow-hidden py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Background decoration with animated gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-transparent"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          transition: { duration: 3, repeat: Infinity },
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-12">
          {/* Text Content */}
          <motion.div
            className="mx-auto max-w-2xl space-y-6"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-green-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <FaLeaf className="mr-2" />
              </motion.div>
              <span className="text-sm font-medium">Featured Project</span>
            </motion.div>

            <motion.h2
              className="text-4xl font-bold tracking-tight text-gray-900 transition-colors duration-300 hover:text-green-600"
              variants={itemVariants}
            >
              Room Planter
            </motion.h2>

            <motion.p className="text-lg text-gray-600" variants={itemVariants}>
              Transform your living space with the perfect plants. Simply upload
              a photo of your room, and let AI help you visualize the perfect
              plant arrangement for your space.
            </motion.p>

            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.div
                className="flex items-center space-x-2 text-gray-700"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCamera className="h-5 w-5 text-green-600" />
                <span>Upload your room photo</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 text-gray-700"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaLeaf className="h-5 w-5 text-green-600" />
                <span>Get AI-powered plant suggestions</span>
              </motion.div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <Link
                href="https://room-planter-odfm.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center rounded-lg bg-green-600 px-6 py-3 text-white transition-all hover:bg-green-700"
              >
                Try Room Planter
                <motion.svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
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
          </motion.div>

          {/* Image/Demo Section */}
          <motion.div
            className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border bg-white/80 shadow-xl backdrop-blur-sm"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            style={{
              scale: imageScale,
              rotateZ: imageRotate,
            }}
          >
            <Image
              src={roomPlanterUI}
              alt="Room Planter Demo"
              placeholder="blur"
              quality={95}
              priority
              fill
              className="object-fill transition-transform duration-300"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Tech Stack */}
          <motion.div className="mt-8 text-center" variants={itemVariants}>
            <motion.h3
              className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-500"
              variants={itemVariants}
            >
              Built with
            </motion.h3>
            <div className="flex justify-center space-x-8">
              {["Next.js", "React", "TailwindCSS"].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="rounded-lg bg-white/80 px-4 py-2 text-sm font-medium text-gray-600 shadow-sm backdrop-blur-sm hover:bg-green-50"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
