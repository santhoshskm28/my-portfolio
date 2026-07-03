"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function HologramAvatar() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    
    // Normalized mouse coordinates (-1 to 1)
    const mouseX = state.mouse.x;
    const mouseY = state.mouse.y;

    if (groupRef.current) {
      // Smooth tilt toward the mouse position (magnetic direction tracking)
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mouseY * 0.4,
        0.06
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouseX * 0.4 + time * 0.1,
        0.06
      );

      // Smooth floating animation
      groupRef.current.position.y = Math.sin(time * 1.0) * 0.12;
    }

    if (coreRef.current) {
      // Pulse scale slightly over time
      const scale = 1 + Math.sin(time * 2.5) * 0.06;
      coreRef.current.scale.set(scale, scale, scale);
      coreRef.current.rotation.x = -time * 0.05;
      coreRef.current.rotation.z = time * 0.08;
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.x = time * 0.3;
      ringRef1.current.rotation.y = time * 0.1;
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.y = -time * 0.25;
      ringRef2.current.rotation.z = time * 0.15;
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y = -time * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. Translucent Physical Crystal Core */}
      <mesh ref={coreRef}>
        <dodecahedronGeometry args={[1.1, 0]} />
        <meshPhysicalMaterial
          color="#bd00ff"
          roughness={0.1}
          metalness={0.1}
          transmission={0.7} // Translucency
          thickness={1.2}      // Refraction thickness
          ior={1.5}            // Index of refraction
          transparent
          opacity={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 2. Outer Wireframe Crystal Cage */}
      <mesh>
        <dodecahedronGeometry args={[1.12, 0]} />
        <meshBasicMaterial
          color="#00f0ff"
          wireframe
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 3. Orbit Ring 1 - Vertical Purple */}
      <mesh ref={ringRef1}>
        <torusGeometry args={[1.9, 0.02, 16, 100]} />
        <meshBasicMaterial
          color="#bd00ff"
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 4. Orbit Ring 2 - Horizontal Pink */}
      <mesh ref={ringRef2} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.2, 0.015, 8, 100]} />
        <meshBasicMaterial
          color="#ff007a"
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 5. Surrounding Quantum Data Point Clouds */}
      <points ref={pointsRef}>
        <icosahedronGeometry args={[1.6, 2]} />
        <pointsMaterial
          color="#00f0ff"
          size={0.045}
          sizeAttenuation={true}
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
