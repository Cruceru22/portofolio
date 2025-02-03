"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

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

export default function Developer() {
  return (
    <motion.div
      id="web"
      className="flex h-full flex-col gap-4 pl-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h1 className="text-4xl font-bold" variants={itemVariants}>
        Hi, I&apos;m Andrei
      </motion.h1>

      <motion.div className="text-lg text-gray-600" variants={itemVariants}>
        <TypeAnimation
          sequence={[
            "I'm a Full Stack Developer from Romania who loves building cool stuff on the web. After over a year of crafting awesome projects, I'm ready for new adventures!",
          ]}
          wrapper="span"
          speed={75}
          cursor={true}
        />
      </motion.div>
    </motion.div>
  );
}
