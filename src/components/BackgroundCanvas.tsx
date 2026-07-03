"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import StarsBackground from "./StarsBackground";
import HologramAvatar from "./HologramAvatar";
import CyberBuilding from "./CyberBuilding";

// Camera positions/lookAt keyframes mapped to sections
// Section indices: 0 = Hero, 1 = About, 2 = Skills, 3 = Experience, 4 = Projects, 5 = AI Showcase, 6 = Achievements, 7 = Contact
const keyframes = [
  { pos: [0, 0, 5.2], lookAt: [0, 0, 0] },       // Section 0: Hero (Crystal centered)
  { pos: [2.8, 1.5, 6.0], lookAt: [0, 0, 0] },   // Section 1: About Me (High angle view)
  { pos: [-3.2, 0.4, 5.5], lookAt: [0, 0, 0] },  // Section 2: Skills (Shifted view)
  { pos: [-1.8, 0.8, 4.8], lookAt: [1.6, 0, 0] }, // Section 3: Experience (Focusing building on right)
  { pos: [0, -3.0, 5.2], lookAt: [0, -3.0, 0] },  // Section 4: Projects (Looking down)
  { pos: [3.2, 0, 5.8], lookAt: [-0.8, 0.4, 0] }, // Section 5: AI Showcase
  { pos: [-2.6, -1.2, 5.2], lookAt: [0, -0.4, 0] },// Section 6: Achievements
  { pos: [0, 0, 4.8], lookAt: [0, 0, 0] }        // Section 7: Contact (Close-up center)
];

function SceneController({ currentSection }: { currentSection: number }) {
  const { camera } = useThree();
  const lookAtRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const avatarGroupRef = useRef<THREE.Group>(null);
  const buildingGroupRef = useRef<THREE.Group>(null);
  const gridRef = useRef<THREE.GridHelper>(null);

  const lightRef1 = useRef<THREE.PointLight>(null);
  const lightRef2 = useRef<THREE.PointLight>(null);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // 1. Interpolate camera position and lookAt target based on continuous currentSection
    const sectionIndex = Math.min(Math.max(Math.floor(currentSection), 0), keyframes.length - 1);
    const nextSectionIndex = Math.min(sectionIndex + 1, keyframes.length - 1);
    const t = currentSection - Math.floor(currentSection);

    const startKF = keyframes[sectionIndex];
    const endKF = keyframes[nextSectionIndex];

    const targetPos = new THREE.Vector3(
      THREE.MathUtils.lerp(startKF.pos[0], endKF.pos[0], t),
      THREE.MathUtils.lerp(startKF.pos[1], endKF.pos[1], t),
      THREE.MathUtils.lerp(startKF.pos[2], endKF.pos[2], t)
    );

    const targetLook = new THREE.Vector3(
      THREE.MathUtils.lerp(startKF.lookAt[0], endKF.lookAt[0], t),
      THREE.MathUtils.lerp(startKF.lookAt[1], endKF.lookAt[1], t),
      THREE.MathUtils.lerp(startKF.lookAt[2], endKF.lookAt[2], t)
    );

    // Apply smooth damping lerping
    camera.position.lerp(targetPos, 0.05);
    lookAtRef.current.lerp(targetLook, 0.05);
    camera.lookAt(lookAtRef.current);

    // 2. Animate dynamic floating point lights to create slow-moving color gradients
    if (lightRef1.current) {
      lightRef1.current.position.x = Math.sin(time * 0.4) * 6;
      lightRef1.current.position.y = Math.cos(time * 0.3) * 4;
      lightRef1.current.position.z = Math.sin(time * 0.2) * 2 + 3;
    }
    if (lightRef2.current) {
      lightRef2.current.position.x = Math.cos(time * 0.35) * -6;
      lightRef2.current.position.y = Math.sin(time * 0.5) * -4;
      lightRef2.current.position.z = Math.cos(time * 0.15) * 2 + 2;
    }

    // 3. Rotate grid base slowly
    if (gridRef.current) {
      gridRef.current.rotation.y = time * 0.02;
    }

    // 4. Scale and position elements based on scroll section
    if (avatarGroupRef.current) {
      if (currentSection < 1.0) {
        avatarGroupRef.current.scale.set(1, 1, 1);
        avatarGroupRef.current.position.set(0, 0, 0);
      } else if (currentSection >= 1.0 && currentSection < 2.0) {
        const s = 1.0 - (currentSection - 1.0);
        avatarGroupRef.current.scale.set(s, s, s);
        avatarGroupRef.current.position.set(-(currentSection - 1.0) * 1.5, 0, 0);
      } else {
        avatarGroupRef.current.scale.set(0, 0, 0);
      }
    }

    if (buildingGroupRef.current) {
      if (currentSection >= 2.0 && currentSection < 3.0) {
        const s = currentSection - 2.0;
        buildingGroupRef.current.scale.set(s, s, s);
        buildingGroupRef.current.position.set(1.8, 0, 0);
      } else if (currentSection >= 3.0 && currentSection < 4.0) {
        const s = 1.0 - (currentSection - 3.0) * 0.8;
        const scaleVal = Math.max(s, 0.2);
        buildingGroupRef.current.scale.set(scaleVal, scaleVal, scaleVal);
        buildingGroupRef.current.position.set(1.8, -(currentSection - 3.0) * 1.5, 0);
      } else {
        buildingGroupRef.current.scale.set(0, 0, 0);
      }
    }
  });

  return (
    <>
      <ambientLight intensity={0.25} />
      
      {/* Dynamic gradient point lights */}
      <pointLight ref={lightRef1} intensity={2.0} color="#00f0ff" distance={15} />
      <pointLight ref={lightRef2} intensity={1.8} color="#bd00ff" distance={15} />

      {/* Global Star Background */}
      <StarsBackground />

      {/* Cyber grid ground helper */}
      <gridHelper 
        ref={gridRef} 
        args={[80, 40, 0x334155, 0x1e293b]} 
        position={[0, -3.5, 0]} 
      />

      {/* Hero / About Hologram Avatar */}
      <group ref={avatarGroupRef}>
        <HologramAvatar />
      </group>

      {/* Experience Cyber Office Building */}
      <group ref={buildingGroupRef} position={[1.8, 0, 0]} scale={[0, 0, 0]}>
        <CyberBuilding />
      </group>
    </>
  );
}

export default function BackgroundCanvas({ currentSection }: { currentSection: number }) {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-screen overflow-hidden bg-[#030712]">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 60, near: 0.1, far: 1000 }}
        gl={{ antialias: true, alpha: false }}
      >
        <SceneController currentSection={currentSection} />
      </Canvas>
    </div>
  );
}
