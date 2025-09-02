import { create } from 'zustand';

interface UIState {
  activeSection: number;
  setActiveSection: (section: number) => void;
  scrollProgress: number;
  setScrollProgress: (progress: number) => void;
}

export const useUIStore = create<UIState>((set) => ({
  activeSection: 0,
  setActiveSection: (section: number) => set({ activeSection: section }),
  scrollProgress: 0,
  setScrollProgress: (progress: number) => set({ scrollProgress: progress }),
}));
