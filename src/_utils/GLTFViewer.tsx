"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

interface GLTFViewerProps {
  modelPath: string;
}

function Scene({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <>
      <primitive ref={modelRef} object={scene} />
      <Environment preset="sunset" />
      <ambientLight intensity={0.3} />
      <spotLight
        position={[15, 15, 15]}
        angle={0.25}
        penumbra={1}
        intensity={0.8}
      />
      <PerspectiveCamera makeDefault fov={45} position={[0, 0, 8]} />
    </>
  );
}

export default function GLTFViewer({ modelPath }: GLTFViewerProps) {
  return (
    <div className="h-[80vh] w-full">
      <Canvas>
        <Suspense fallback={null}>
          <Scene modelPath={modelPath} />
        </Suspense>
      </Canvas>
    </div>
  );
}
