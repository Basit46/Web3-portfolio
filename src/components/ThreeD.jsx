import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const ParticleField = ({ mouse }) => {
  const pointsRef = useRef();
  const count = 10000;

  const vec = useRef(new THREE.Vector3());
  const dir = useRef(new THREE.Vector3());
  const mouseWorld = useRef(new THREE.Vector3());

  const originalPositions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, []);

  const seeds = useMemo(
    () =>
      Float32Array.from({ length: count }, () => Math.random() * Math.PI * 2),
    [],
  );

  const currentPositions = useMemo(
    () => new Float32Array(originalPositions),
    [originalPositions],
  );

  const { camera } = useThree();

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.elapsedTime;

    vec.current.set(mouse.current.x, mouse.current.y, 0.5).unproject(camera);
    dir.current.copy(vec.current).sub(camera.position).normalize();
    const d = -camera.position.z / dir.current.z;
    mouseWorld.current.copy(camera.position).addScaledVector(dir.current, d);

    const pos = pointsRef.current.geometry.attributes.position.array;
    const repelRadius = 2.2;
    const repelStrength = 3.5;
    const returnSpeed = 0.035;
    const driftAmp = 0.12; // doubled from 0.06

    for (let i = 0; i < count; i++) {
      const ix = i * 3,
        iy = ix + 1,
        iz = ix + 2;
      const seed = seeds[i];

      // 2x faster drift — multipliers doubled from 0.25/0.18 to 0.5/0.36
      const targetX =
        originalPositions[ix] + Math.sin(t * 0.5 + seed) * driftAmp;
      const targetY =
        originalPositions[iy] + Math.cos(t * 0.36 + seed) * driftAmp;

      pos[ix] += (targetX - pos[ix]) * returnSpeed;
      pos[iy] += (targetY - pos[iy]) * returnSpeed;
      pos[iz] += (originalPositions[iz] - pos[iz]) * returnSpeed;

      const dx = pos[ix] - mouseWorld.current.x;
      const dy = pos[iy] - mouseWorld.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < repelRadius && dist > 0) {
        const force = (1 - dist / repelRadius) * repelStrength;
        pos[ix] += (dx / dist) * force * 0.1;
        pos[iy] += (dy / dist) * force * 0.1;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[currentPositions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="aqua"
        size={0.018}
        sizeAttenuation
        transparent
        opacity={0.5}
      />
    </points>
  );
};

const Scene = () => {
  const { size } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const updateMouse = (clientX, clientY) => {
      mouse.current.x = (clientX / size.width - 0.5) * 2;
      mouse.current.y = -(clientY / size.height - 0.5) * 2;
    };

    const onMove = (e) => updateMouse(e.clientX, e.clientY);
    const onTouch = (e) => {
      const touch = e.touches[0];
      if (touch) updateMouse(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, [size]);

  return <ParticleField mouse={mouse} />;
};

const ThreeD = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeD;
