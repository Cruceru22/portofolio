"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
  useGLTF,
  useProgress,
  Html,
} from "@react-three/drei";
import * as THREE from "three";

interface GLTFViewerProps {
  modelPath: string;
}

function LoadingScreen() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-900 border-t-transparent" />
        <p className="mt-2 text-sm text-gray-600">{progress.toFixed(0)}%</p>
      </div>
    </Html>
  );
}

function Scene({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath, true);
  const modelRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (modelRef.current) {
      // Center the model
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const center = box.getCenter(new THREE.Vector3());

      // Use uniform scaling
      const scale = 1.2;

      modelRef.current.position.copy(center.multiplyScalar(-1));
      // Adjust Y position to center vertically
      modelRef.current.position.y -= 0.5;
      modelRef.current.scale.setScalar(scale);

      // Set initial rotation for better view
      modelRef.current.rotation.y = Math.PI / 4;
    }
  }, []);

  useFrame((state, delta) => {
    if (modelRef.current) {
      // Slower rotation speed
      modelRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <>
      <primitive ref={modelRef} object={scene} />
      <Environment preset="sunset" />
      <ambientLight intensity={0.4} />
      <spotLight
        position={[15, 15, 15]}
        angle={0.25}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <PerspectiveCamera makeDefault fov={40} position={[0, 0, 10]} />
    </>
  );
}

// Preload the model
useGLTF.preload("/m4.gltf");

export default function GLTFViewer({ modelPath }: GLTFViewerProps) {
  return (
    <div className="h-[80vh] w-full">
      <Canvas
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: false,
        }}
      >
        <Suspense fallback={<LoadingScreen />}>
          <Scene modelPath={modelPath} />
        </Suspense>
      </Canvas>
    </div>
  );
}
