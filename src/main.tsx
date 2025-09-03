import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import heroVideo from '@/assets/videos/video-1.mp4'

const rootEl = document.getElementById("root")!;

// Inject a preload hint for the hero video for faster start on first paint
const linkId = 'preload-hero-video';
if (!document.getElementById(linkId)) {
  const link = document.createElement('link');
  link.id = linkId;
  link.rel = 'preload';
  link.as = 'video';
  link.href = heroVideo;
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
}

createRoot(rootEl).render(<App />);
