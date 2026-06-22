"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Text } from "@react-three/drei";
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
  { name: "Prompt Eng.", category: "ai" }
];

const categoryColors = {
  frontend: "#00f0ff", // Neon Blue
  backend: "#bd00ff",  // Neon Purple
  database: "#ff007a", // Neon Pink
  cloud: "#39ff14",    // Cyber Green
  ai: "#00f0ff"        // Neon Blue
};

function SkillTag({
  name,
  category,
  pos,
  onHover,
  activeName
}: {
  name: string;
  category: "frontend" | "backend" | "database" | "cloud" | "ai";
  pos: THREE.Vector3;
  onHover: (name: string | null) => void;
  activeName: string | null;
}) {
  const textRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);

  const isActive = activeName === name;
  const color = hovered || isActive ? "#ffffff" : categoryColors[category];
  const scale = hovered || isActive ? 1.3 : 1.0;

  return (
    <Billboard position={pos}>
      <Text
        ref={textRef}
        fontSize={0.28}
        color={color}
        anchorX="center"
        anchorY="middle"
        scale={[scale, scale, scale]}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          onHover(name);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={(e) => {
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

function SphereGlobe({
  onHoverSkill,
  activeSkill
}: {
  onHoverSkill: (name: string | null) => void;
  activeSkill: string | null;
}) {
  const groupRef = useRef<THREE.Group>(null);

  // Distribute points evenly on a sphere using Fibonacci Lattice
  const tags = useMemo(() => {
    const tempTags = [];
    const count = skills.length;
    const radius = 2.4;

    for (let i = 0; i < count; i++) {
      const k = i + 0.5;
      const phi = Math.acos(1 - (2 * k) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * k;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      tempTags.push({
        ...skills[i],
        pos: new THREE.Vector3(x, y, z)
      });
    }
    return tempTags;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Automatic rotation of the sphere
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
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
  activeSkill
}: {
  onHoverSkill: (name: string | null) => void;
  activeSkill: string | null;
}) {
  return (
    <div className="h-[350px] sm:h-[450px] w-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 60 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.0} />
        <SphereGlobe onHoverSkill={onHoverSkill} activeSkill={activeSkill} />
      </Canvas>
    </div>
  );
}
