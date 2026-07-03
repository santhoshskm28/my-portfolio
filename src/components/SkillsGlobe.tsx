"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Text, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "database" | "cloud" | "ai";
}

const skills: SkillItem[] = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind", category: "frontend" },
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "JWT", category: "backend" },
  { name: "MongoDB", category: "database" },
  { name: "SQL", category: "database" },
  { name: "Railway", category: "cloud" },
  { name: "Netlify", category: "cloud" },
  { name: "Docker", category: "cloud" },
  { name: "Gemini", category: "ai" },
  { name: "Claude", category: "ai" },
  { name: "OpenAI", category: "ai" },
  { name: "Cursor", category: "ai" },
  { name: "Antigravity", category: "ai" },
  { name: "MCP", category: "ai" },
  { name: "Prompt Eng.", category: "ai" },
];

const categoryColors: Record<SkillItem["category"], string> = {
  frontend: "#00f0ff",
  backend: "#bd00ff",
  database: "#ff007a",
  cloud: "#39ff14",
  ai: "#60a5fa",
};

function SkillTag({
  name,
  category,
  pos,
  onHover,
  activeName,
}: {
  name: string;
  category: SkillItem["category"];
  pos: THREE.Vector3;
  onHover: (name: string | null) => void;
  activeName: string | null;
}) {
  const [hovered, setHovered] = useState(false);
  const isActive = activeName === name;
  const baseColor = categoryColors[category];
  const displayColor = hovered || isActive ? "#ffffff" : baseColor;
  const scale = hovered || isActive ? 1.35 : 1.0;

  return (
    <Billboard position={pos}>
      <Text
        fontSize={0.26}
        color={displayColor}
        anchorX="center"
        anchorY="middle"
        scale={[scale, scale, scale]}
        // Add a subtle outline so text reads against any bg
        outlineColor="#000000"
        outlineOpacity={0.6}
        outlineWidth={0.015}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          onHover(name);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          onHover(null);
          document.body.style.cursor = "auto";
        }}
      >
        {name}
      </Text>
    </Billboard>
  );
}

function GlobeWireframe() {
  const meshRef = useRef<THREE.Mesh>(null);
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.2, 18, 18]} />
      <meshBasicMaterial
        color="#60a5fa"
        wireframe
        transparent
        opacity={0.04}
      />
    </mesh>
  );
}

function SphereGlobe({
  onHoverSkill,
  activeSkill,
  isDragging,
}: {
  onHoverSkill: (name: string | null) => void;
  activeSkill: string | null;
  isDragging: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);

  const tags = useMemo(() => {
    const count = skills.length;
    const radius = 2.4;
    return skills.map((skill, i) => {
      const k = i + 0.5;
      const phi = Math.acos(1 - (2 * k) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * k;
      return {
        ...skill,
        pos: new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        ),
      };
    });
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current && !isDragging) {
      groupRef.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <group ref={groupRef}>
      <GlobeWireframe />
      {tags.map((tag, idx) => (
        <SkillTag
          key={idx}
          name={tag.name}
          category={tag.category}
          pos={tag.pos}
          onHover={onHoverSkill}
          activeName={activeSkill}
        />
      ))}
    </group>
  );
}

export default function SkillsGlobe({
  onHoverSkill,
  activeSkill,
}: {
  onHoverSkill: (name: string | null) => void;
  activeSkill: string | null;
}) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div
      className="h-[380px] sm:h-[460px] w-full cursor-grab active:cursor-grabbing"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 58 }}
        style={{ background: "transparent" }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -5, -10]} color="#8b5cf6" intensity={0.4} />
        <SphereGlobe
          onHoverSkill={onHoverSkill}
          activeSkill={activeSkill}
          isDragging={isDragging}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          rotateSpeed={0.55}
          minPolarAngle={Math.PI * 0.2}
          maxPolarAngle={Math.PI * 0.8}
        />
      </Canvas>
    </div>
  );
}
