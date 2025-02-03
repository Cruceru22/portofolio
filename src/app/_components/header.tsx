"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ProfilePicture from "../../../utils/Images/profilx.jpg";

export default function Header() {
  return (
    <div className="flex justify-center p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Link href="https://x.com/andreicruceruu" target="_blank">
          <Image
            id="Avatar"
            src={ProfilePicture}
            alt="Avatar"
            width={50}
            height={50}
            className="rounded-full transition-transform hover:scale-110"
          />
        </Link>
      </motion.div>
    </div>
  );
}
