"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function LetsConnect() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="h-6 w-6" />,
      url: "https://github.com/yourusername",
      color: "hover:text-gray-900",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="h-6 w-6" />,
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="h-6 w-6" />,
      url: "mailto:your.email@example.com",
      color: "hover:text-red-500",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center space-y-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-4 text-3xl font-bold">Let&apos;s Connect</h2>
          <p className="text-gray-600">
            Ready to start something amazing together?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center space-x-6"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`transform rounded-full bg-white p-4 shadow-lg transition-colors duration-200 ${link.color}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
