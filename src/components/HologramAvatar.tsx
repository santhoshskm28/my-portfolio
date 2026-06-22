"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function HologramAvatar() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.25;
      coreRef.current.rotation.x = time * 0.15;
      // Sinusoidal floating animation
      coreRef.current.position.y = Math.sin(time * 1.2) * 0.2;
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.x = time * 0.4;
      ringRef1.current.rotation.y = time * 0.15;
      ringRef1.current.position.y = Math.sin(time * 1.2) * 0.2;
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.y = -time * 0.35;
      ringRef2.current.rotation.z = time * 0.25;
      ringRef2.current.position.y = Math.sin(time * 1.2) * 0.2;
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y = -time * 0.15;
      pointsRef.current.position.y = Math.sin(time * 1.2) * 0.2;
    }
  });

  return (
    <group>
      {/* Central Holographic Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.3, 1]} />
        <meshBasicMaterial
          color="#00f0ff"
          wireframe
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Orbit Ring 1 - Neon Purple */}
      <mesh ref={ringRef1}>
        <torusGeometry args={[2.2, 0.03, 8, 64]} />
        <meshBasicMaterial
          color="#bd00ff"
          wireframe
          transparent
          opacity={0.5}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Orbit Ring 2 - Neon Pink */}
      <mesh ref={ringRef2}>
        <torusGeometry args={[2.5, 0.02, 6, 64]} />
        <meshBasicMaterial
          color="#ff007a"
          wireframe
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Core Node Particles */}
      <points ref={pointsRef}>
        <dodecahedronGeometry args={[0.9, 2]} />
        <pointsMaterial
          color="#00f0ff"
          size={0.06}
          sizeAttenuation={true}
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
