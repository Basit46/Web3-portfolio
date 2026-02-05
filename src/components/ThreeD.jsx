import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";

const MouseFollowSphere = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.005;
    }
  });

  return (
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      ref={meshRef}
    >
      <sphereGeometry args={[1.0]} />
      <meshBasicMaterial color={hovered ? "aqua" : "white"} wireframe />
    </mesh>
  );
};

const ThreeD = () => {
  return (
    <div className="hidden absolute top-0 left-0 w-full h-screen">
      <Canvas>
        <ambientLight />
        <MouseFollowSphere />
      </Canvas>
    </div>
  );
};

export default ThreeD;
