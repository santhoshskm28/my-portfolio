"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function StarsBackground() {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const count = 3000;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Procedurally generate positions in a large space radius (25 to 100 units)
      const r = 25 + Math.random() * 75;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      // Star color distributions (cyan, purple, soft white)
      const colorRand = Math.random();
      if (colorRand > 0.85) {
        // Neon Blue
        cols[i * 3] = 0.0;
        cols[i * 3 + 1] = 0.94;
        cols[i * 3 + 2] = 1.0;
      } else if (colorRand > 0.7) {
        // Neon Purple
        cols[i * 3] = 0.74;
        cols[i * 3 + 1] = 0.0;
        cols[i * 3 + 2] = 1.0;
      } else {
        // Soft Star White
        cols[i * 3] = 0.9;
        cols[i * 3 + 1] = 0.9;
        cols[i * 3 + 2] = 1.0;
      }
    }
    return [pos, cols];
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.012;
      pointsRef.current.rotation.x += delta * 0.004;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
