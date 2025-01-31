"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Name from "./name";

const Developer = dynamic(() => import("./developer"), { ssr: false });
const ReactDev = dynamic(() => import("./reactDev"), { ssr: false });
const Car = dynamic(() => import("./car"), { ssr: false });
const Connoisseur = dynamic(() => import("./connoisseur"), { ssr: false });
const PushToStart = dynamic(() => import("./pushToStart"), { ssr: false });
const RoomPlanter = dynamic(() => import("./roomPlanter"), { ssr: false });

function LoadingSpinner() {
  return (
    <div className="flex h-32 w-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-gray-900"></div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col space-y-8">
      <Name />
      <Suspense fallback={<LoadingSpinner />}>
        <Developer />
      </Suspense>
      {/* <Suspense fallback={<LoadingSpinner />}>
        <ReactDev />
      </Suspense> */}
      <Suspense fallback={<LoadingSpinner />}>
        <RoomPlanter />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Connoisseur />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Car />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <PushToStart />
      </Suspense>
    </div>
  );
}
