import { useEffect, useMemo, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type VideoBackgroundPlaneProps = {
  texture: THREE.VideoTexture | null;
  motionDisabled?: boolean;
};

/**
 * Fullscreen video plane with subtle filmic shader: vignette, tiny displacement, chromatic aberration
 * Plane is scaled to cover the viewport; shader performs object-fit: cover UV remap to preserve aspect.
 */
export function VideoBackgroundPlane({ texture, motionDisabled }: VideoBackgroundPlaneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport, size } = useThree();

  const uniforms = useMemo(() => {
    return {
      uTex: { value: null },
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uNoiseAmp: { value: 0.015 },
      uAberration: { value: 0.0015 },
      uTexSize: { value: new THREE.Vector2(1920, 1080) },
      uViewSize: { value: new THREE.Vector2(size.width, size.height) },
      uMotionDisabled: { value: motionDisabled ? 1.0 : 0.0 },
      uOpacity: { value: 1.0 },
    } as Record<string, THREE.IUniform>;
  // keep stable; we'll update values imperatively
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uTex.value = texture as any;
    if (texture && texture.image instanceof HTMLVideoElement) {
      const video = texture.image as HTMLVideoElement;
      const w = video.videoWidth || 1920;
      const h = video.videoHeight || 1080;
      (materialRef.current.uniforms.uTexSize.value as THREE.Vector2).set(w, h);
    }
    materialRef.current.needsUpdate = true;
  }, [texture]);

  useEffect(() => {
    if (!materialRef.current) return;
    (materialRef.current.uniforms.uViewSize.value as THREE.Vector2).set(size.width, size.height);
  }, [size.width, size.height]);

  useFrame((state) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    materialRef.current.uniforms.uScroll.value = state.camera.position.y;
    if (motionDisabled) {
      materialRef.current.uniforms.uNoiseAmp.value = 0.0;
      materialRef.current.uniforms.uAberration.value = 0.0;
    }
  });

  const fragmentShader = `
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D uTex;
    uniform float uTime;
    uniform float uScroll;
    uniform float uNoiseAmp;
    uniform float uAberration;
    uniform vec2 uTexSize;
    uniform vec2 uViewSize;
    uniform float uMotionDisabled;
    uniform float uOpacity;

    // Simple hash-based noise
    float hash(vec2 p){
      return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453123);
    }
    float noise(vec2 p){
      vec2 i = floor(p);
      vec2 f = fract(p);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      vec2 u = f*f*(3.0-2.0*f);
      return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    vec2 coverUv(vec2 uv, vec2 tex, vec2 view){
      float texAspect = tex.x / tex.y;
      float viewAspect = view.x / view.y;
      vec2 muv = uv;
      if (viewAspect > texAspect){
        // View is wider than texture: scale Y so we crop top/bottom
        float scale = viewAspect / texAspect;
        muv.y = (uv.y - 0.5) * scale + 0.5;
      } else {
        // View is taller than texture: scale X so we crop sides
        float scale = texAspect / viewAspect;
        muv.x = (uv.x - 0.5) * scale + 0.5;
      }
      // Clamp to prevent sampling outside [0,1] that causes edge smearing
      return clamp(muv, 0.0, 1.0);
    }

    void main(){
      vec2 uv = vUv;
      vec2 cuv = coverUv(uv, uTexSize, uViewSize);

      // Tiny displacement using low-frequency noise
      float disp = (uMotionDisabled > 0.5) ? 0.0 : (noise(cuv * 2.0 + uTime * 0.05 + uScroll * 0.05) - 0.5) * uNoiseAmp;
      vec2 dir = normalize(cuv - 0.5);
      cuv += dir * disp;

      // Chromatic aberration
      float ca = (uMotionDisabled > 0.5) ? 0.0 : uAberration;
      vec3 col;
      col.r = texture2D(uTex, cuv + dir * ca).r;
      col.g = texture2D(uTex, cuv).g;
      col.b = texture2D(uTex, cuv - dir * ca).b;

      // Vignette
      float d = distance(uv, vec2(0.5));
      float vig = smoothstep(0.9, 0.35, d);
      col *= mix(0.95, 1.0, vig);

      gl_FragColor = vec4(col, uOpacity);
    }
  `;

  const vertexShader = `
    precision highp float;
    varying vec2 vUv;
    void main(){
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const scale = useMemo(() => {
    return [viewport.width, viewport.height, 1] as [number, number, number];
  }, [viewport.width, viewport.height]);

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={scale} frustumCulled={false}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial ref={materialRef} uniforms={uniforms} fragmentShader={fragmentShader} vertexShader={vertexShader} transparent={false} />
    </mesh>
  );
}


