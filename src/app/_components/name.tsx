import React from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Name() {
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1,
    });
  }, []);

  return (
    <div className="flex justify-start w-full max-w-md pl-4">
      <p id="hero" className=" opacity-0 text-lg font-semibold">
        Andrei Cruceru
      </p>
    </div>
  );
}