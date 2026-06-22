"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import StarsBackground from "./StarsBackground";
import HologramAvatar from "./HologramAvatar";
import CyberBuilding from "./CyberBuilding";

// Define the camera position keyframes mapped to scroll positions
// Section indices: 0 = Hero, 1 = About, 2 = Skills, 3 = Experience, 4 = Projects, 5 = AI Showcase, 6 = Achievements, 7 = Contact
const keyframes = [
  { pos: [0, 0, 5.5], lookAt: [0, 0, 0] },      // Section 0: Hero (Avatar centered)
  { pos: [3.2, 1.8, 6.0], lookAt: [0, 0, 0] },  // Section 1: About Me (Avatar from high angle)
  { pos: [-3.5, 0.5, 5.5], lookAt: [0, 0, 0] },  // Section 2: Skills (Camera shifted, looking at center space)
  { pos: [-2.0, 1.0, 5.0], lookAt: [1.8, 0, 0] }, // Section 3: Experience (Looking at CyberBuilding on the right)
  { pos: [0, -3.2, 5.5], lookAt: [0, -3.2, 0] }, // Section 4: Projects (Looking down at floating project worlds)
  { pos: [3.5, 0, 6.0], lookAt: [-1.0, 0.5, 0] },// Section 5: AI Showcase / Pipeline
  { pos: [-3.0, -1.5, 5.5], lookAt: [0, -0.5, 0] },// Section 6: Achievements
  { pos: [0, 0, 5.0], lookAt: [0, 0, 0] }       // Section 7: Contact (Back to center glow)
];

// Inner component to access Canvas context (useFrame, camera, etc.)
function SceneController({ currentSection }: { currentSection: number }) {
  const { camera } = useThree();
  const lookAtRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const avatarGroupRef = useRef<THREE.Group>(null);
  const buildingGroupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    // 1. Interpolate camera position and lookAt target based on continuous currentSection
    const sectionIndex = Math.min(Math.max(Math.floor(currentSection), 0), keyframes.length - 1);
    const nextSectionIndex = Math.min(sectionIndex + 1, keyframes.length - 1);
    const t = currentSection - Math.floor(currentSection);

    const startKF = keyframes[sectionIndex];
    const endKF = keyframes[nextSectionIndex];

    // Compute target position and lookAt vector
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

    // Apply smooth damping (lerping current camera values toward target values)
    camera.position.lerp(targetPos, 0.06);
    lookAtRef.current.lerp(targetLook, 0.06);
    camera.lookAt(lookAtRef.current);

    // 2. Control visibility and scale of elements based on scroll section progress
    // Avatar is visible in Section 0 (Hero) & Section 1 (About), starts shrinking at Section 1.5 and is hidden by Section 2
    if (avatarGroupRef.current) {
      if (currentSection < 1.0) {
        avatarGroupRef.current.scale.set(1, 1, 1);
        avatarGroupRef.current.position.set(0, 0, 0);
      } else if (currentSection >= 1.0 && currentSection < 2.0) {
        const s = 1.0 - (currentSection - 1.0); // 1 to 0 scale
        avatarGroupRef.current.scale.set(s, s, s);
        // Move it slightly left as it shrinks
        avatarGroupRef.current.position.set(-(currentSection - 1.0) * 1.5, 0, 0);
      } else {
        avatarGroupRef.current.scale.set(0, 0, 0);
      }
    }

    // CyberBuilding is visible in Section 3 (Experience). Fades in from Section 2.2, scales down after Section 3.8
    if (buildingGroupRef.current) {
      if (currentSection >= 2.0 && currentSection < 3.0) {
        const s = currentSection - 2.0; // 0 to 1 scale
        buildingGroupRef.current.scale.set(s, s, s);
        buildingGroupRef.current.position.set(1.8, 0, 0);
      } else if (currentSection >= 3.0 && currentSection < 4.0) {
        const s = 1.0 - (currentSection - 3.0) * 0.8; // Shrink slightly as we scroll past
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
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f0ff" />
      <pointLight position={[-10, -10, -10]} intensity={1.0} color="#bd00ff" />

      {/* Global Star Background */}
      <StarsBackground />

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
    <div className="fixed inset-0 -z-10 h-screen w-screen overflow-hidden bg-[#020205]">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 60, near: 0.1, far: 1000 }}
        gl={{ antialias: true, alpha: false }}
      >
        <SceneController currentSection={currentSection} />
      </Canvas>
    </div>
  );
}
