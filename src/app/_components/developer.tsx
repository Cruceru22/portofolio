import React from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Developer() {
  useGSAP(() => {
    gsap.from("#web p", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.4
    });
  });

  return (
    <div className="flex pt-4 pl-4">
      <div id="web" className="max-w-md">
        <p className="text-lg mb-4">
        Crafting digital experiences through code. As a web developer, I bring ideas to life on the internet, creating interactive and engaging websites that connect people and businesses.
        </p>
       
        <p className="text-lg">
          I moved to Cluj and studied Computer Science at UBB.
          I used to work at fxbits
        </p>
      </div>
    </div>
  );
}