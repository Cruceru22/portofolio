import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Developer() {
  useGSAP(() => {
    gsap.from("#web p", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.4,
    });
  });

  return (
    <div className="flex pl-4 pt-4">
      <div id="web" className="max-w-md">
        <p className="mb-8 text-lg font-bold">Andrei Cruceru</p>
        <p className="mb-4 text-lg">
          Crafting digital experiences through code. As a web developer, I bring
          ideas to life on the internet, creating interactive and engaging
          websites that connect people and businesses.
        </p>
      </div>
    </div>
  );
}
