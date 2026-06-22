"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CyberBuilding() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Slow rotation to give a full 3D perspective
      groupRef.current.rotation.y = time * 0.12;
    }
    if (coreRef.current) {
      // Pulse the central power core inside the building
      const scale = 1 + Math.sin(time * 3) * 0.05;
      coreRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Building Base block */}
      <mesh position={[0, -1.5, 0]}>
        <boxGeometry args={[2.4, 1.0, 2.4]} />
        <meshBasicMaterial
          color="#00f0ff"
          wireframe
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Main Office Block */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[1.8, 2.4, 1.8]} />
        <meshBasicMaterial
          color="#bd00ff"
          wireframe
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Upper Spire block */}
      <mesh position={[0, 1.8, 0]}>
        <boxGeometry args={[1.2, 1.0, 1.2]} />
        <meshBasicMaterial
          color="#00f0ff"
          wireframe
          transparent
          opacity={0.45}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Internal Power Core */}
      <mesh ref={coreRef} position={[0, 0.2, 0]}>
        <boxGeometry args={[0.6, 1.8, 0.6]} />
        <meshBasicMaterial
          color="#ff007a"
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Tall Spire Antenna */}
      <mesh position={[0, 2.7, 0]}>
        <cylinderGeometry args={[0.02, 0.06, 0.8, 8]} />
        <meshBasicMaterial color="#ff007a" transparent opacity={0.8} />
      </mesh>

      {/* Spire Glowing Beacon */}
      <mesh position={[0, 3.1, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#ff007a" transparent opacity={1.0} />
      </mesh>

      {/* Floating window points */}
      <points position={[0, 0.2, 0]}>
        <boxGeometry args={[1.7, 2.3, 1.7]} />
        <pointsMaterial
          color="#39ff14"
          size={0.035}
          sizeAttenuation={true}
          transparent
          opacity={0.7}
        />
      </points>
    </group>
  );
}
