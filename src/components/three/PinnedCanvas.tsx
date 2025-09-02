import { Canvas } from '@react-three/fiber';
import { Experience } from './Experience';
import { CameraRig } from './CameraRig';

export function PinnedCanvas() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ 
          antialias: true,
          alpha: false,
          powerPreference: "high-performance"
        }}
      >
        <color attach="background" args={['#070B14']} />
        <Experience />
        <CameraRig />
      </Canvas>
    </div>
  );
}
