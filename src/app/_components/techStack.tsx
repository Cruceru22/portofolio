"use client";

import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiPostgresql,
  SiDrizzle,
  SiTypescript,
} from "react-icons/si";

const technologies = [
  {
    icon: <SiNextdotjs className="h-8 w-8" />,
    name: "Next.js",
    description:
      "Full-stack React framework with server-side rendering and routing",
    color: "hover:text-black dark:hover:text-white",
  },
  {
    icon: <SiReact className="h-8 w-8" />,
    name: "React",
    description: "Library for building user interfaces with components",
    color: "hover:text-blue-500",
  },
  {
    icon: <SiTailwindcss className="h-8 w-8" />,
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development",
    color: "hover:text-cyan-500",
  },
  {
    icon: <SiTypescript className="h-8 w-8" />,
    name: "TypeScript",
    description: "Strongly typed programming language built on JavaScript",
    color: "hover:text-blue-400",
  },
  {
    icon: <SiPostgresql className="h-8 w-8" />,
    name: "PostgreSQL",
    description: "Advanced open-source relational database",
    color: "hover:text-blue-600",
  },
  {
    icon: <SiDrizzle className="h-8 w-8" />,
    name: "Drizzle ORM",
    description: "TypeScript ORM with maximum type safety",
    color: "hover:text-yellow-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function TechStack() {
  return (
    <motion.div
      className="relative overflow-hidden py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-12">
          <div className="mx-auto max-w-2xl space-y-6">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-purple-800"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <FaCode className="mr-2" />
              </motion.div>
              <span className="text-sm font-medium">Tech Stack</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight text-gray-900 transition-colors duration-300 hover:text-purple-600"
            >
              My Favorite Tools
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-gray-600">
              I&apos;ve carefully chosen these technologies for their
              performance, developer experience, and ability to create modern
              web applications.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid gap-6 pt-4 sm:grid-cols-2"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-start space-x-4 rounded-xl bg-white/50 p-4 shadow-sm backdrop-blur-sm transition-colors hover:bg-white/60"
                >
                  <div
                    className={`mt-1 text-gray-600 transition-colors ${tech.color}`}
                  >
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                    <p className="text-sm text-gray-600">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
