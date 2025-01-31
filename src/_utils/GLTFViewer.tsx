import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  PerspectiveCamera,
  AdaptiveDpr,
  BakeShadows,
  AdaptiveEvents,
} from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  nodes: { [key: string]: THREE.Mesh };
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  materials: { [key: string]: THREE.Material };
};

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url) as GLTFResult;
  const modelRef = useRef<THREE.Group>();
  const { camera } = useThree();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (modelRef.current && !isInitialized) {
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      // Adjust camera position for better car view
      const maxDim = Math.max(size.x, size.y, size.z);
      const distance = maxDim * 1.5; // Increased distance for better perspective
      const height = maxDim * 0.5; // Camera height relative to model

      camera.position.set(
        center.x + distance * 0.8, // Slightly offset to show more of the side
        center.y + height,
        center.z + distance * 0.8,
      );
      camera.lookAt(center);
      camera.updateProjectionMatrix();

      // Center the model
      modelRef.current.position.set(-center.x, -center.y, -center.z);

      // Optimize materials and add slight tilt
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = false;
          child.receiveShadow = false;
          if (child.material instanceof THREE.MeshStandardMaterial) {
            child.material.roughness = 0.4; // More glossy
            child.material.metalness = 0.6; // More metallic
          }
        }
      });

      // Add initial rotation for better angle
      if (modelRef.current) {
        modelRef.current.rotation.y = Math.PI * 0.25; // 45-degree initial rotation
      }

      setIsInitialized(true);
    }
  }, [camera, isInitialized, scene]);

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.2; // Slightly faster rotation
    }
  });

  return <primitive ref={modelRef} object={scene} />;
}

interface GLTFViewerProps {
  modelPath: string;
}

export default function GLTFViewer({ modelPath }: GLTFViewerProps) {
  useEffect(() => {
    useGLTF.preload(modelPath);
  }, [modelPath]);

  return (
    <div className="h-[80vh] w-full">
      <Canvas
        shadows={false}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: false,
        }}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <Model url={modelPath} />
          <Environment preset="sunset" />
          <ambientLight intensity={0.3} /> {/* Increased ambient light */}
          <spotLight
            position={[15, 15, 15]}
            angle={0.25}
            penumbra={1}
            intensity={0.8}
            castShadow={false}
          />
          <PerspectiveCamera
            makeDefault
            fov={45} // Narrower FOV for less distortion
            position={[0, 0, 8]}
          />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI * 0.6}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={0.5}
          />
          <AdaptiveDpr pixelated />
          <BakeShadows />
          <AdaptiveEvents />
        </Suspense>
      </Canvas>
    </div>
  );
}
