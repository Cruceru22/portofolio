"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const GithubIcon = () => (
  <motion.div className="relative h-6 w-6">
    <FaGithub className="h-full w-full transition-colors duration-300 group-hover:text-transparent" />
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="h-full w-full"
        animate={{
          background: [
            "linear-gradient(45deg, #9333EA 0%, #A855F7 50%, #9333EA 100%)",
            "linear-gradient(225deg, #9333EA 0%, #A855F7 50%, #9333EA 100%)",
            "linear-gradient(45deg, #9333EA 0%, #A855F7 50%, #9333EA 100%)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          opacity: 0,
          WebkitMaskImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 496 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'/%3E%3C/svg%3E\")",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "contain",
        }}
      />
    </div>
  </motion.div>
);

export default function LetsConnect() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <GithubIcon />,
      url: "https://github.com/Cruceru22",
      color: "hover:text-purple-500",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="h-6 w-6" />,
      url: "https://linkedin.com/in/andrei-cruceru1",
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="h-6 w-6" />,
      url: "mailto:cruceru.andrei2202@gmail.com",
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
