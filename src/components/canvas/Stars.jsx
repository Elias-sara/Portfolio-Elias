import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

// Component to render rotating stars
const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    // Generate sphere data with random points
    const data = random.inSphere(new Float32Array(5000), { radius: 1.5 });

    // Log error if data contains NaN values
    if (data.some(isNaN)) {
      console.error("Data contains NaN values:", data);
    }

    return data;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.001}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// Component to render the canvas with stars
const StarsCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <Suspense fallback={null}>
        <Stars />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default StarsCanvas;
