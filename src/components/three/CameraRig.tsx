import { useFrame, useThree } from '@react-three/fiber';
import { useUIStore } from '@/store/ui';
import * as THREE from 'three';

export function CameraRig() {
  const { camera } = useThree();
  const { activeSection, scrollProgress } = useUIStore();

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useFrame(() => {
    if (prefersReducedMotion) {
      camera.position.set(0, activeSection * 0.0, 8);
      camera.lookAt(0, 0, 0);
      return;
    }

    const targetY = activeSection * 0.08;
    const target = new THREE.Vector3(0, targetY, 8);
    camera.position.lerp(target, 0.08);

    const rotX = 0.0;
    const rotY = 0.0;
    const rotZ = THREE.MathUtils.degToRad(scrollProgress * 0.6); // ~0.01rad
    camera.rotation.set(rotX, rotY, rotZ);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
