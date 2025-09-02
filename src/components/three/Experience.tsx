import { useEffect, useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing';
import * as THREE from 'three';
import { VideoBackgroundPlane } from './VideoBackgroundPlane';
import { VideoParallaxPlane } from './VideoParallaxPlane';
import { ParticlesLayer } from './ParticlesLayer';
import video1 from '@/assets/videos/video-1.mp4';
import video2 from '@/assets/videos/video-2.mp4';
import video3 from '@/assets/videos/video-3.mp4';

function useVideoTexture(src: string) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [texture, setTexture] = useState<THREE.VideoTexture | null>(null);

  useEffect(() => {
    const video = document.createElement('video');
    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.autoplay = true;
    video.crossOrigin = 'anonymous';
    video.src = src;
    videoRef.current = video;
    const play = async () => {
      try {
        await video.play();
      } catch {
        // attempt on user gesture fallback
        const onInteract = async () => {
          try { await video.play(); } catch {}
          window.removeEventListener('pointerdown', onInteract);
        };
        window.addEventListener('pointerdown', onInteract, { once: true });
      }
    };
    play();

    const onLoaded = () => {
      const tex = new THREE.VideoTexture(video);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.generateMipmaps = false;
      setTexture(tex);
    };
    video.addEventListener('loadeddata', onLoaded);
    video.load();
    return () => {
      video.pause();
      video.removeEventListener('loadeddata', onLoaded);
      if (texture) {
        texture.dispose();
      }
      videoRef.current = null;
    };
  }, [src]);

  return texture;
}

export function Experience() {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const primaryTex = useVideoTexture(video1);
  const secondaryTexA = useVideoTexture(video2);
  const secondaryTexB = useVideoTexture(video3);

  useFrame(() => {});

  return (
    <>
      <hemisphereLight intensity={0.2} groundColor="#000000" />
      <directionalLight position={[5, 10, 5]} intensity={0.2} />

      {primaryTex && (
        <VideoBackgroundPlane texture={primaryTex} motionDisabled={prefersReducedMotion} />
      )}
      {secondaryTexA && (
        <VideoParallaxPlane texture={secondaryTexA} depth={-0.6} opacity={0.18} motionDisabled={prefersReducedMotion} />
      )}
      {secondaryTexB && (
        <VideoParallaxPlane texture={secondaryTexB} depth={-1.2} opacity={0.12} motionDisabled={prefersReducedMotion} />
      )}
      <ParticlesLayer count={450} motionDisabled={prefersReducedMotion} />

      <EffectComposer multisampling={0}>
        <Bloom mipmapBlur intensity={0.15} luminanceThreshold={0.1} luminanceSmoothing={0.3} />
        <Noise premultiply opacity={0.035} />
      </EffectComposer>
    </>
  );
}
