import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <sphereGeometry args={[1, 32, 32]} /> {/* Changed to sphereGeometry */}
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]} // Adjusted rotation
          scale={1.2} // Adjusted scale to fit the sphere
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Suspense fallback={<CanvasLoader />}>
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        style={{ height: "100%", width: "100%" }}
      >
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
        <Preload all />
      </Canvas>
    </Suspense>
    
  );
};

export default BallCanvas;
