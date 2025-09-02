import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useUIStore } from '@/store/ui';
import * as THREE from 'three';

export function Experience() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { activeSection } = useUIStore();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useFrame((state) => {
    if (meshRef.current && !prefersReducedMotion) {
      // Gentle idle rotation
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <>
      {/* Lighting */}
      <hemisphereLight intensity={0.3} groundColor="#000000" />
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.8}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      
      {/* Main 3D Object */}
      {prefersReducedMotion ? (
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <icosahedronGeometry args={[2, 1]} />
          <meshStandardMaterial
            color="#3b82f6"
            metalness={0.8}
            roughness={0.2}
            emissive="#1e40af"
            emissiveIntensity={0.2}
          />
        </mesh>
      ) : (
        <Float
          speed={1.5}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <mesh ref={meshRef} position={[0, 0, 0]}>
            <icosahedronGeometry args={[2, 1]} />
            <meshStandardMaterial
              color="#3b82f6"
              metalness={0.8}
              roughness={0.2}
              emissive="#1e40af"
              emissiveIntensity={0.2}
            />
          </mesh>
        </Float>
      )}
    </>
  );
}
