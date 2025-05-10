import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function SpaceStation(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null);
  const earthRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Group>(null);
  const hudRef = useRef<THREE.Group>(null);
  const satellitesRef = useRef<THREE.Group>(null);

  // Create continent lines geometry
  const continentGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    // Simplified continent outlines as line segments
    const continentPoints = [
      // North America
      [-0.5, 0.5, 1.8], [-0.8, 0.7, 1.6], [-1.2, 0.8, 1.4],
      // South America
      [-0.3, -0.5, 1.8], [-0.4, -1.0, 1.6], [-0.2, -1.5, 1.4],
      // Europe
      [0.5, 0.7, 1.8], [0.7, 0.8, 1.6], [0.9, 0.7, 1.4],
      // Africa
      [0.3, 0.2, 1.8], [0.4, -0.3, 1.6], [0.5, -0.8, 1.4],
      // Asia
      [1.2, 0.5, 1.4], [1.5, 0.3, 1.2], [1.7, 0.1, 1.0],
    ];
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(continentPoints.flat(), 3));
    return geometry;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (group.current) {
      group.current.rotation.y += 0.001;
    }

    if (ringsRef.current) {
      ringsRef.current.rotation.z = time * 0.1;
      ringsRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
    }

    if (hudRef.current) {
      hudRef.current.rotation.y = -time * 0.05;
    }

    if (satellitesRef.current) {
      satellitesRef.current.rotation.y = time * 0.2;
    }
  });

  return (
    <group ref={group} {...props}>
      {/* Earth core */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#050516"
          metalness={0.8}
          roughness={0.2}
          emissive="#4cc9f0"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Continent lines */}
      <lineSegments>
        <bufferGeometry {...continentGeometry} />
        <lineBasicMaterial color="#4cc9f0" linewidth={2} />
      </lineSegments>

      {/* Glowing atmosphere */}
      <mesh>
        <sphereGeometry args={[2.05, 32, 32]} />
        <meshStandardMaterial
          color="#4cc9f0"
          transparent
          opacity={0.1}
          emissive="#4cc9f0"
          emissiveIntensity={0.5}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Holographic rings */}
      <group ref={ringsRef}>
        {[2.5, 3, 3.5].map((radius, i) => (
          <mesh key={i} rotation={[Math.PI / 4 * i, 0, 0]}>
            <torusGeometry args={[radius, 0.02, 16, 100]} />
            <meshStandardMaterial
              color="#4361ee"
              transparent
              opacity={0.6 - i * 0.1}
              emissive="#4361ee"
              emissiveIntensity={0.8}
            />
          </mesh>
        ))}
      </group>

      {/* HUD elements */}
      <group ref={hudRef}>
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh key={i} position={[0, 0, 0]} rotation={[0, (Math.PI * 2 * i) / 8, 0]}>
            <circleGeometry args={[4, 32, Math.PI / 4, Math.PI / 16]} />
            <meshBasicMaterial
              color="#4cc9f0"
              transparent
              opacity={0.3}
              side={THREE.DoubleSide}
            />
          </mesh>
        ))}
      </group>

      {/* Satellites */}
      <group ref={satellitesRef}>
        {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, i) => (
          <group key={i} rotation={[0, angle, 0]} position={[0, 0, 3.5]}>
            <mesh castShadow>
              <boxGeometry args={[0.2, 0.1, 0.3]} />
              <meshStandardMaterial color="#4cc9f0" metalness={0.9} roughness={0.1} />
            </mesh>
            <mesh castShadow position={[0.25, 0, 0]}>
              <boxGeometry args={[0.3, 0.01, 0.1]} />
              <meshStandardMaterial color="#4361ee" metalness={0.5} roughness={0.2} />
            </mesh>
            <mesh castShadow position={[-0.25, 0, 0]}>
              <boxGeometry args={[0.3, 0.01, 0.1]} />
              <meshStandardMaterial color="#4361ee" metalness={0.5} roughness={0.2} />
            </mesh>
            <pointLight color="#4cc9f0" intensity={0.2} distance={1} />
          </group>
        ))}
      </group>

      {/* Ambient lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#4cc9f0" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#4361ee" />
    </group>
  );
}