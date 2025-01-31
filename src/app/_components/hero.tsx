"use client";
import dynamic from "next/dynamic";
import { Suspense, useRef, useState, useEffect } from "react";
import Name from "./name";

const Developer = dynamic(() => import("./developer"), { ssr: false });
const Car = dynamic(() => import("./car"), { ssr: false });
const Connoisseur = dynamic(() => import("./connoisseur"), { ssr: false });
const LetsConnect = dynamic(() => import("./letsConnect"), { ssr: false });
const RoomPlanter = dynamic(() => import("./roomPlanter"), { ssr: false });
const Cartopia = dynamic(() => import("./cartopia"), { ssr: false });

function LoadingSpinner() {
  return (
    <div className="flex h-32 w-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-gray-900"></div>
    </div>
  );
}

function useInView(options: IntersectionObserverInit = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry) {
        setIsInView(entry.isIntersecting);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isInView };
}

export default function Hero() {
  const { ref: carRef, isInView: isCarInView } = useInView({
    threshold: 0.1,
    rootMargin: "100px 0px",
  });

  return (
    <div className="mx-auto flex max-w-2xl flex-col space-y-8">
      <Name />
      <Suspense fallback={<LoadingSpinner />}>
        <Developer />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Connoisseur />
      </Suspense>
      <div ref={carRef} className="min-h-[200px]">
        {isCarInView && (
          <Suspense fallback={<LoadingSpinner />}>
            <Car />
          </Suspense>
        )}
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <Cartopia />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <RoomPlanter />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <LetsConnect />
      </Suspense>
    </div>
  );
}
