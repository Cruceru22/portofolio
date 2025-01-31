import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  PerspectiveCamera,
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

      const maxDim = Math.max(size.x, size.y, size.z);
      let cameraZ = 0;

      if (camera instanceof THREE.PerspectiveCamera) {
        const fov = camera.fov * (Math.PI / 180);
        cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
      } else {
        // For orthographic camera, you might want to adjust this calculation
        cameraZ = maxDim * 2;
      }

      camera.position.set(center.x, center.y, center.z + cameraZ);
      camera.lookAt(center);
      camera.updateProjectionMatrix();

      modelRef.current.position.set(-center.x, -center.y, -center.z);
      setIsInitialized(true);
    }
  }, [camera, isInitialized]);

  useFrame((state, delta) => {
    if (modelRef.current) {
      // Slower rotation speed and using sin for smoother animation
      modelRef.current.rotation.y += delta * 0.2;
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
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Model url={modelPath} />
          <Environment preset="sunset" />
          <ambientLight intensity={0.3} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={0.8}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <PerspectiveCamera makeDefault fov={50} position={[0, 0, 8]} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
