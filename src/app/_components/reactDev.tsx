"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface TiltWrapperProps {
  children: React.ReactNode;
  isImage?: boolean;
  className?: string;
}

const TiltWrapper = React.forwardRef<HTMLDivElement, TiltWrapperProps>(
  ({ children, isImage = false, className = "" }, ref) => (
    <Tilt
      className={`rounded-xl border bg-white/90 backdrop-blur-sm ${isImage ? "" : "flex items-center justify-center p-4"} ${className}`}
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      perspective={1000}
      scale={1.01}
      transitionSpeed={1000}
      gyroscope={false}
    >
      <div ref={ref} className="tilt-inner h-full w-full">
        {children}
      </div>
    </Tilt>
  ),
);

TiltWrapper.displayName = "TiltWrapper";

export default function ReactDev() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageTiltRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([]);
  const [refsReady, setRefsReady] = useState(false);

  useEffect(() => {
    imageTiltRefs.current = Array(4)
      .fill(null)
      .map(() => React.createRef());
    setRefsReady(true);
  }, []);

  useGSAP(
    () => {
      if (!refsReady) return;

      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      tl.to("#tilt", {
        opacity: 1,
        duration: 0.4,
      });

      // Animate all items together with a single timeline
      imageTiltRefs.current.forEach((tiltRef, index) => {
        if (tiltRef.current) {
          gsap.set(tiltRef.current, {
            y: 15,
            opacity: 0,
          });

          tl.to(
            tiltRef.current,
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
            },
            "-=0.3", // Overlap animations slightly for smoother effect
          );
        }
      });
    },
    { scope: containerRef, dependencies: [refsReady] },
  );

  return (
    <div ref={containerRef} className="py-20">
      <div id="tilt" className="flex items-center justify-center opacity-0">
        <div className="grid max-w-5xl grid-cols-4 gap-8">
          <TiltWrapper
            ref={imageTiltRefs.current[0]}
            isImage
            className="col-span-1 h-40"
          >
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                alt="react"
                src="/react.svg"
                layout="fill"
                objectFit="contain"
                className="p-4 transition-transform duration-300 hover:scale-110"
              />
            </div>
          </TiltWrapper>
          <TiltWrapper className="col-span-3 h-40">
            <div className="h-full overflow-y-auto text-center">
              <p className="mb-2 text-lg font-semibold">
                React developer with over one year of experience
              </p>
              <p className="text-sm text-gray-600">
                Proficient in building dynamic and responsive user interfaces
                using React&apos;s component-based architecture. Experienced
                with hooks, context API. Skilled in creating reusable components
                and optimizing performance for smooth user experiences.
              </p>
            </div>
          </TiltWrapper>
          <TiltWrapper
            ref={imageTiltRefs.current[1]}
            isImage
            className="col-span-1 h-40"
          >
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                alt="node"
                src="/node.svg"
                layout="fill"
                objectFit="contain"
                className="p-4 transition-transform duration-300 hover:scale-110"
              />
            </div>
          </TiltWrapper>
          <TiltWrapper className="col-span-3 h-40">
            <div className="h-full overflow-y-auto text-center">
              <p className="mb-2 text-lg font-semibold">
                Node.js expert with Express and Prisma
              </p>
              <p className="text-sm text-gray-600">
                Hands-on experience in building scalable backend services with
                Node.js. Proficient in using Express.js for creating RESTful
                APIs and middleware. Skilled in database management with Prisma
                ORM, enabling efficient data modeling and querying.
              </p>
            </div>
          </TiltWrapper>
          <TiltWrapper
            ref={imageTiltRefs.current[2]}
            isImage
            className="col-span-1 h-40"
          >
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                alt="tailwind"
                src="/tailwind.svg"
                layout="fill"
                objectFit="contain"
                className="p-4 transition-transform duration-300 hover:scale-110"
              />
            </div>
          </TiltWrapper>
          <TiltWrapper className="col-span-3 h-40">
            <div className="h-full overflow-y-auto text-center">
              <p className="mb-2 text-lg font-semibold">
                Tailwind CSS has to be my top choice for CSS
              </p>
              <p className="text-sm text-gray-600">
                Leveraging Tailwind&apos;s utility-first approach to rapidly
                build custom user interfaces. Proficient in creating responsive
                designs, custom animations, and maintaining a consistent design
                system.
              </p>
            </div>
          </TiltWrapper>
          <TiltWrapper
            ref={imageTiltRefs.current[3]}
            isImage
            className="col-span-1 h-40"
          >
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                alt="typescript"
                src="/typescript.svg"
                layout="fill"
                objectFit="contain"
                className="p-4 transition-transform duration-300 hover:scale-110"
              />
            </div>
          </TiltWrapper>
          <TiltWrapper className="col-span-3 h-40">
            <div className="h-full overflow-y-auto text-center">
              <p className="mb-2 text-lg font-semibold">
                TypeScript, because who uses JavaScript anymore?
              </p>
              <p className="text-sm text-gray-600">
                Embracing TypeScript for its strong typing system, enhancing
                code quality and maintainability. Proficient in utilizing
                interfaces, generics, and advanced types to create scalable
                applications.
              </p>
            </div>
          </TiltWrapper>
        </div>
      </div>
    </div>
  );
}
