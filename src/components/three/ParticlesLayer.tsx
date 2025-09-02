import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type ParticlesLayerProps = {
  count?: number;
  motionDisabled?: boolean;
};

export function ParticlesLayer({ count = 400, motionDisabled }: ParticlesLayerProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 6.0;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6.0;
      arr[i * 3 + 2] = -Math.random() * 2.0 - 0.2;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current || motionDisabled) return;
    const t = state.clock.getElapsedTime();
    const a = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = ix + 1;
      const baseX = a.array[ix] as number;
      const baseY = a.array[iy] as number;
      const dx = Math.sin(t * 0.5 + baseY) * 0.002;
      const dy = Math.cos(t * 0.4 + baseX) * 0.002;
      a.array[ix] = baseX + dx;
      a.array[iy] = baseY + dy;
    }
    a.needsUpdate = true;
  });

  const pointsMaterial = useMemo(() => new THREE.PointsMaterial({ size: 0.01, color: '#93c5fd', sizeAttenuation: true, transparent: true, opacity: 0.6 }), []);

  return (
    <points ref={pointsRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <primitive object={pointsMaterial} attach="material" />
    </points>
  );
}


