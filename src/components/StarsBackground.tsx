"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function StarsBackground() {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const count = 4000;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Position coordinates distributed in a large sphere (radius 30 to 120 units)
      const r = 30 + Math.random() * 90;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      // Cyber Colors: Cyan, Purple, Slate-Blue, and Soft White
      const colorRand = Math.random();
      if (colorRand > 0.9) {
        // Deep Cyan
        cols[i * 3] = 0.0;
        cols[i * 3 + 1] = 0.8;
        cols[i * 3 + 2] = 1.0;
      } else if (colorRand > 0.8) {
        // Soft Purple/Violet
        cols[i * 3] = 0.65;
        cols[i * 3 + 1] = 0.2;
        cols[i * 3 + 2] = 1.0;
      } else if (colorRand > 0.6) {
        // Muted Indigo
        cols[i * 3] = 0.3;
        cols[i * 3 + 1] = 0.4;
        cols[i * 3 + 2] = 0.8;
      } else {
        // Dim Star White
        cols[i * 3] = 0.85;
        cols[i * 3 + 1] = 0.85;
        cols[i * 3 + 2] = 0.95;
      }
    }
    return [pos, cols];
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      // Extremely slow rotation for cinematic calmness
      pointsRef.current.rotation.y += delta * 0.004;
      pointsRef.current.rotation.x += delta * 0.001;
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
        size={0.06}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        opacity={0.5}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
