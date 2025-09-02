import { useFrame } from '@react-three/fiber';
import { useThree } from '@react-three/fiber';
import { useUIStore } from '@/store/ui';
import * as THREE from 'three';

export function CameraRig() {
  const { camera } = useThree();
  const { activeSection } = useUIStore();
  
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useFrame(() => {
    if (prefersReducedMotion) return;

    // Base camera position
    const basePosition = new THREE.Vector3(0, 0, 8);
    
    // Subtle offset based on active section (very small movement)
    const yOffset = activeSection * 0.05;
    const targetPosition = new THREE.Vector3(0, yOffset, 8);
    
    // Smooth lerp to target position
    camera.position.lerp(targetPosition, 0.02);
    
    // Always look at the center
    camera.lookAt(0, 0, 0);
  });

  return null;
}
