import { useMemo, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type VideoParallaxPlaneProps = {
  texture: THREE.VideoTexture | null;
  depth: number; // negative z
  opacity?: number;
  motionDisabled?: boolean;
};

export function VideoParallaxPlane({ texture, depth, opacity = 0.25, motionDisabled }: VideoParallaxPlaneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const { viewport } = useThree();

  const scale = useMemo(() => [viewport.width * 1.1, viewport.height * 1.1, 1] as [number, number, number], [viewport.width, viewport.height]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    const scroll = state.camera.position.y;
    const drift = motionDisabled ? 0 : Math.sin(t * 0.2 + depth) * 0.02;
    meshRef.current.position.z = depth;
    meshRef.current.position.x = drift + (motionDisabled ? 0 : scroll * 0.01);
  });

  return (
    <mesh ref={meshRef} scale={scale} position={[0, 0, depth]} frustumCulled={false}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <meshBasicMaterial ref={materialRef} map={texture ?? undefined} transparent opacity={opacity} toneMapped={false} />
    </mesh>
  );
}


