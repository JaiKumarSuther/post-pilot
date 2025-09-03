import { useEffect, useRef, useState } from "react";

type LazyVideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  src: string;
  threshold?: number;
  rootMargin?: string;
  eager?: boolean;
  playOnIntersect?: boolean;
};

export default function LazyVideo({
  src,
  threshold = 0.25,
  rootMargin = "200px",
  eager = false,
  playOnIntersect = true,
  preload,
  autoPlay,
  ...rest
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(eager);

  useEffect(() => {
    if (eager) return;
    const node = videoRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [eager, threshold, rootMargin]);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isVisible && playOnIntersect && autoPlay) {
      const playPromise = videoRef.current.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    }
  }, [isVisible, playOnIntersect, autoPlay]);

  const resolvedPreload = preload ?? (eager ? "auto" : "none");

  return (
    <video
      ref={videoRef}
      {...rest}
      autoPlay={autoPlay}
      preload={resolvedPreload}
      src={isVisible ? src : undefined}
      data-src={src}
    />
  );
}


